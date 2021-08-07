/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { FieldResetEvent } from '../core/Core';
import Plugin from '../core/Plugin';
import fetch from '../utils/fetch';
import { IconPlacedEvent } from './Icon';

export interface RecaptchaOptions {
    // The ID of element showing the captcha
    element: string;
    // The language code defined by reCAPTCHA
    // See https://developers.google.com/recaptcha/docs/language
    language?: string;
    // The invalid message that will be shown in case the captcha is not valid
    // You don't need to define it if the back-end URL above returns the message
    message: string;
    // The site key provided by Google
    siteKey: string;
    backendVerificationUrl?: string;

    // The size of widget. It can be 'compact', 'normal' (default), or 'invisible'
    size?: string;

    // reCAPTCHA widget option (size can be 'compact' or 'normal')
    // See https://developers.google.com/recaptcha/docs/display

    // The theme name provided by Google. It can be light (default), dark
    theme?: string;

    // Invisible reCAPTCHA
    // See https://developers.google.com/recaptcha/docs/invisible
    // The position of reCAPTCHA. Can be 'bottomright' (default), 'bottomleft', 'inline'
    badge?: string;
}

/**
 * This plugin shows and validates a Google reCAPTCHA v2
 * Usage:
 * - Register a ReCaptcha API key
 * - Prepare a container to show the captcha
 *  ```
 *  <form id="testForm">
 *      <div id="captchaContainer"></div>
 *  </form>
 *  ```
 * - Use the plugin
 *  ```
 *  formValidation(document.getElementById('testForm'), {
 *      plugins: {
 *          recaptcha: new Recaptcha({
 *              element: 'captchaContainer',
 *              theme: 'light',
 *              siteKey: '...', // The key provided by Google
 *              language: 'en',
 *              message: 'The captcha is not valid'
 *          })
 *      }
 *  })
 *  ```
 */
export default class Recaptcha extends Plugin<RecaptchaOptions> {
    // The captcha field name, generated by Google reCAPTCHA
    public static CAPTCHA_FIELD = 'g-recaptcha-response';

    public static DEFAULT_OPTIONS = {
        backendVerificationUrl: '',
        badge: 'bottomright',
        size: 'normal',
        theme: 'light',
    };

    // The name of callback that will be executed after reCaptcha script is loaded
    public static LOADED_CALLBACK = '___reCaptchaLoaded___';

    private widgetIds: Map<string, string> = new Map();
    private fieldResetHandler: (e: FieldResetEvent) => void;
    private iconPlacedHandler: (e: IconPlacedEvent) => void;
    private preValidateFilter: (...arg: unknown[]) => Promise<void>;
    private captchaStatus = 'NotValidated';
    private timer: number;

    constructor(opts?: RecaptchaOptions) {
        super(opts);
        this.opts = Object.assign({}, Recaptcha.DEFAULT_OPTIONS, opts);
        this.fieldResetHandler = this.onResetField.bind(this);
        this.preValidateFilter = this.preValidate.bind(this);
        this.iconPlacedHandler = this.onIconPlaced.bind(this);
    }

    public install(): void {
        this.core
            .on('core.field.reset', this.fieldResetHandler)
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .registerFilter('validate-pre', this.preValidateFilter);

        const loadPrevCaptcha =
            typeof window[Recaptcha.LOADED_CALLBACK] === 'undefined'
                ? () => {}
                : window[Recaptcha.LOADED_CALLBACK];
        window[Recaptcha.LOADED_CALLBACK] = () => {
            // Call the previous loaded function
            // to support multiple recaptchas on the same page
            loadPrevCaptcha();

            const captchaOptions = {
                badge: this.opts.badge,
                callback: () => {
                    if (this.opts.backendVerificationUrl === '') {
                        this.captchaStatus = 'Valid';
                        // Mark the captcha as valid, so the library will remove the error message
                        this.core.updateFieldStatus(
                            Recaptcha.CAPTCHA_FIELD,
                            'Valid'
                        );
                    }
                },
                'error-callback': () => {
                    this.captchaStatus = 'Invalid';
                    this.core.updateFieldStatus(
                        Recaptcha.CAPTCHA_FIELD,
                        'Invalid'
                    );
                },
                'expired-callback': () => {
                    // Update the captcha status when session expires
                    this.captchaStatus = 'NotValidated';
                    this.core.updateFieldStatus(
                        Recaptcha.CAPTCHA_FIELD,
                        'NotValidated'
                    );
                },
                sitekey: this.opts.siteKey,
                size: this.opts.size,
            };

            const widgetId = window['grecaptcha'].render(
                this.opts.element,
                captchaOptions
            );
            this.widgetIds.set(this.opts.element, widgetId);

            this.core.addField(Recaptcha.CAPTCHA_FIELD, {
                validators: {
                    promise: {
                        message: this.opts.message,
                        promise: (input) => {
                            const value = this.widgetIds.has(this.opts.element)
                                ? window['grecaptcha'].getResponse(
                                      this.widgetIds.get(this.opts.element)
                                  )
                                : input.value;

                            if (value === '') {
                                this.captchaStatus = 'Invalid';
                                return Promise.resolve({
                                    valid: false,
                                });
                            } else if (
                                this.opts.backendVerificationUrl === ''
                            ) {
                                this.captchaStatus = 'Valid';
                                return Promise.resolve({
                                    valid: true,
                                });
                            } else if (this.captchaStatus === 'Valid') {
                                // Do not need to send the back-end verification request if the captcha is already valid
                                return Promise.resolve({
                                    valid: true,
                                });
                            } else {
                                return fetch(this.opts.backendVerificationUrl, {
                                    method: 'POST',
                                    params: {
                                        [Recaptcha.CAPTCHA_FIELD]: value,
                                    },
                                })
                                    .then((response) => {
                                        const isValid =
                                            `${response['success']}` === 'true';
                                        this.captchaStatus = isValid
                                            ? 'Valid'
                                            : 'Invalid';
                                        return Promise.resolve({
                                            meta: response,
                                            valid: isValid,
                                        });
                                    })
                                    .catch((_reason) => {
                                        this.captchaStatus = 'NotValidated';
                                        return Promise.reject({
                                            valid: false,
                                        });
                                    });
                            }
                        },
                    },
                },
            });
        };

        const src = this.getScript();
        if (!document.body.querySelector(`script[src="${src}"]`)) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = src;
            document.body.appendChild(script);
        }
    }

    public uninstall(): void {
        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.core
            .off('core.field.reset', this.fieldResetHandler)
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .deregisterFilter('validate-pre', this.preValidateFilter);
        this.widgetIds.clear();

        // Remove script
        const src = this.getScript();
        const scripts = [].slice.call(
            document.body.querySelectorAll(`script[src="${src}"]`)
        ) as HTMLScriptElement[];
        scripts.forEach((s) => s.parentNode.removeChild(s));

        this.core.removeField(Recaptcha.CAPTCHA_FIELD);
    }

    private getScript(): string {
        const lang = this.opts.language ? `&hl=${this.opts.language}` : '';
        return `https://www.google.com/recaptcha/api.js?onload=${Recaptcha.LOADED_CALLBACK}&render=explicit${lang}`;
    }

    private preValidate(): Promise<void> {
        // grecaptcha.execute() is only available for invisible reCAPTCHA
        if (
            this.opts.size === 'invisible' &&
            this.widgetIds.has(this.opts.element)
        ) {
            const widgetId = this.widgetIds.get(this.opts.element);
            return this.captchaStatus === 'Valid'
                ? Promise.resolve()
                : new Promise((resolve, _reject) => {
                      window['grecaptcha'].execute(widgetId).then(() => {
                          if (this.timer) {
                              clearTimeout(this.timer);
                          }
                          this.timer = window.setTimeout(resolve, 1 * 1000);
                      });
                  });
        } else {
            return Promise.resolve();
        }
    }

    private onResetField(e: FieldResetEvent): void {
        if (
            e.field === Recaptcha.CAPTCHA_FIELD &&
            this.widgetIds.has(this.opts.element)
        ) {
            const widgetId = this.widgetIds.get(this.opts.element);
            window['grecaptcha'].reset(widgetId);
        }
    }

    private onIconPlaced(e: IconPlacedEvent): void {
        if (e.field === Recaptcha.CAPTCHA_FIELD) {
            // Hide the icon for captcha element, since it will look weird when the captcha is valid
            if (this.opts.size === 'invisible') {
                e.iconElement.style.display = 'none';
            } else {
                const captchaContainer = document.getElementById(
                    this.opts.element
                );
                // We need to move the icon element to after the captcha container
                // Otherwise, the icon will be removed when the captcha is re-rendered (after it's expired)
                if (captchaContainer) {
                    captchaContainer.parentNode.insertBefore(
                        e.iconElement,
                        captchaContainer.nextSibling
                    );
                }
            }
        }
    }
}
