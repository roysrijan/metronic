/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/demo1/js/custom/authentication/sign-up/free-trial.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/demo1/js/custom/authentication/sign-up/free-trial.js ***!
  \*******************************************************************************/
/***/ (() => {

eval(" // Class Definition\n\nvar KTSignupFreeTrial = function () {\n  // Elements\n  var form;\n  var submitButton;\n  var validator;\n  var passwordMeter; // Handle form\n\n  var handleForm = function handleForm(e) {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'email': {\n          validators: {\n            notEmpty: {\n              message: 'Email address is required'\n            },\n            emailAddress: {\n              message: 'The value is not a valid email address'\n            }\n          }\n        },\n        'password': {\n          validators: {\n            notEmpty: {\n              message: 'The password is required'\n            },\n            callback: {\n              message: 'Please enter valid password',\n              callback: function callback(input) {\n                if (input.value.length > 0) {\n                  return validatePassword();\n                }\n              }\n            }\n          }\n        },\n        'confirm-password': {\n          validators: {\n            notEmpty: {\n              message: 'The password confirmation is required'\n            },\n            identical: {\n              compare: function compare() {\n                return form.querySelector('[name=\"password\"]').value;\n              },\n              message: 'The password and its confirm are not the same'\n            }\n          }\n        },\n        'toc': {\n          validators: {\n            notEmpty: {\n              message: 'You must accept the terms and conditions'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger({\n          event: {\n            password: false\n          }\n        }),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      validator.revalidateField('password');\n      validator.validate().then(function (status) {\n        if (status == 'Valid') {\n          // Show loading indication\n          submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n          submitButton.disabled = true; // Simulate ajax request\n\n          setTimeout(function () {\n            // Hide loading indication\n            submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n            submitButton.disabled = false; // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            Swal.fire({\n              text: \"You have successfully registered!\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            }).then(function (result) {\n              if (result.isConfirmed) {\n                form.reset(); // reset form                    \n\n                passwordMeter.reset(); // reset password meter\n                //form.submit();\n              }\n            });\n          }, 1500);\n        } else {\n          // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n          Swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n    form.querySelector('input[name=\"password\"]').addEventListener('input', function () {\n      if (this.value.length > 0) {\n        validator.updateFieldStatus('password', 'NotValidated');\n      }\n    });\n  }; // Password input validation\n\n\n  var validatePassword = function validatePassword() {\n    return passwordMeter.getScore() === 100;\n  }; // Public functions\n\n\n  return {\n    // Initialization\n    init: function init() {\n      form = document.querySelector('#kt_free_trial_form');\n      submitButton = document.querySelector('#kt_free_trial_submit');\n      passwordMeter = KTPasswordMeter.getInstance(form.querySelector('[data-kt-password-meter=\"true\"]'));\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTSignupFreeTrial.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2RlbW8xL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9zaWduLXVwL2ZyZWUtdHJpYWwuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsaUJBQWlCLEdBQUcsWUFBVztBQUMvQjtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsU0FBSjtBQUNBLE1BQUlDLGFBQUosQ0FMK0IsQ0FPL0I7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBU0MsQ0FBVCxFQUFZO0FBQ3pCO0FBQ0FILElBQUFBLFNBQVMsR0FBR0ksY0FBYyxDQUFDQyxjQUFmLENBQ2pCUCxJQURpQixFQUVqQjtBQUNDUSxNQUFBQSxNQUFNLEVBQUU7QUFDUCxpQkFBUztBQUNVQyxVQUFBQSxVQUFVLEVBQUU7QUFDN0JDLFlBQUFBLFFBQVEsRUFBRTtBQUNUQyxjQUFBQSxPQUFPLEVBQUU7QUFEQSxhQURtQjtBQUlSQyxZQUFBQSxZQUFZLEVBQUU7QUFDbENELGNBQUFBLE9BQU8sRUFBRTtBQUR5QjtBQUpOO0FBRHRCLFNBREY7QUFXUSxvQkFBWTtBQUNSRixVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURILGFBREY7QUFJUkUsWUFBQUEsUUFBUSxFQUFFO0FBQ05GLGNBQUFBLE9BQU8sRUFBRSw2QkFESDtBQUVORSxjQUFBQSxRQUFRLEVBQUUsa0JBQVNDLEtBQVQsRUFBZ0I7QUFDdEIsb0JBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLHlCQUFPQyxnQkFBZ0IsRUFBdkI7QUFDSDtBQUNKO0FBTks7QUFKRjtBQURKLFNBWHBCO0FBMEJRLDRCQUFvQjtBQUNoQlIsVUFBQUEsVUFBVSxFQUFFO0FBQ1JDLFlBQUFBLFFBQVEsRUFBRTtBQUNOQyxjQUFBQSxPQUFPLEVBQUU7QUFESCxhQURGO0FB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d0JBQW5CLEVBQTZDVyxnQkFBN0MsQ0FBOEQsT0FBOUQsRUFBdUUsWUFBVztBQUM5RSxVQUFJLEtBQUtoQixLQUFMLENBQVdDLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJkLFFBQUFBLFNBQVMsQ0FBQ2tELGlCQUFWLENBQTRCLFVBQTVCLEVBQXdDLGNBQXhDO0FBQ0g7QUFDSixLQUpEO0FBS0gsR0E3SEQsQ0FSK0IsQ0F1SS9COzs7QUFDQSxNQUFJbkMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXO0FBQzlCLFdBQVNkLGFBQWEsQ0FBQ2tELFFBQWQsT0FBNkIsR0FBdEM7QUFDSCxHQUZELENBeEkrQixDQTRJL0I7OztBQUNBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYnRELE1BQUFBLElBQUksR0FBR3VELFFBQVEsQ0FBQ25DLGFBQVQsQ0FBdUIscUJBQXZCLENBQVA7QUFDQW5CLE1BQUFBLFlBQVksR0FBR3NELFFBQVEsQ0FBQ25DLGFBQVQsQ0FBdUIsdUJBQXZCLENBQWY7QUFDQWpCLE1BQUFBLGFBQWEsR0FBR3FELGVBQWUsQ0FBQ0MsV0FBaEIsQ0FBNEJ6RCxJQUFJLENBQUNvQixhQUFMLENBQW1CLGlDQUFuQixDQUE1QixDQUFoQjtBQUVBaEIsTUFBQUEsVUFBVTtBQUNiO0FBUkUsR0FBUDtBQVVILENBdkp1QixFQUF4QixDLENBeUpBOzs7QUFDQXNELE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQzVELEVBQUFBLGlCQUFpQixDQUFDdUQsSUFBbEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9kZW1vMS9qcy9jdXN0b20vYXV0aGVudGljYXRpb24vc2lnbi11cC9mcmVlLXRyaWFsLmpzPzU2N2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBEZWZpbml0aW9uXHJcbnZhciBLVFNpZ251cEZyZWVUcmlhbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gRWxlbWVudHNcclxuICAgIHZhciBmb3JtO1xyXG4gICAgdmFyIHN1Ym1pdEJ1dHRvbjtcclxuICAgIHZhciB2YWxpZGF0b3I7XHJcbiAgICB2YXIgcGFzc3dvcmRNZXRlcjtcclxuXHJcbiAgICAvLyBIYW5kbGUgZm9ybVxyXG4gICAgdmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cclxuICAgICAgICB2YWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcclxuXHRcdFx0Zm9ybSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZpZWxkczoge1x0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHQnZW1haWwnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0VtYWlsIGFkZHJlc3MgaXMgcmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1RoZSB2YWx1ZSBpcyBub3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuICAgICAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBwYXNzd29yZCBpcyByZXF1aXJlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgdmFsaWQgcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUGFzc3dvcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpcm0tcGFzc3dvcmQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBwYXNzd29yZCBjb25maXJtYXRpb24gaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpY2FsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgcGFzc3dvcmQgYW5kIGl0cyBjb25maXJtIGFyZSBub3QgdGhlIHNhbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICd0b2MnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdSBtdXN0IGFjY2VwdCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG5cdFx0XHRcdFx0dHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcblx0XHRcdFx0XHRib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVJbnZhbGlkQ2xhc3M6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVWYWxpZENsYXNzOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHRcdFx0IFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2YWxpZGF0b3IucmV2YWxpZGF0ZUZpZWxkKCdwYXNzd29yZCcpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbihzdGF0dXMpIHtcclxuXHRcdCAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0ZSBhamF4IHJlcXVlc3RcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIGxvYWRpbmcgaW5kaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbWVzc2FnZSBwb3B1cC4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7ICAvLyByZXNldCBmb3JtICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnJlc2V0KCk7ICAvLyByZXNldCBwYXNzd29yZCBtZXRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9ybS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCk7ICAgXHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3IgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xyXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0ICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwYXNzd29yZFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci51cGRhdGVGaWVsZFN0YXR1cygncGFzc3dvcmQnLCAnTm90VmFsaWRhdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXNzd29yZCBpbnB1dCB2YWxpZGF0aW9uXHJcbiAgICB2YXIgdmFsaWRhdGVQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAgKHBhc3N3b3JkTWV0ZXIuZ2V0U2NvcmUoKSA9PT0gMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgZnVuY3Rpb25zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIEluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZnJlZV90cmlhbF9mb3JtJyk7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9mcmVlX3RyaWFsX3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICBwYXNzd29yZE1ldGVyID0gS1RQYXNzd29yZE1ldGVyLmdldEluc3RhbmNlKGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEta3QtcGFzc3dvcmQtbWV0ZXI9XCJ0cnVlXCJdJykpO1xyXG5cclxuICAgICAgICAgICAgaGFuZGxlRm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVFNpZ251cEZyZWVUcmlhbC5pbml0KCk7XHJcbn0pO1xyXG5cclxuXHJcbiAiXSwibmFtZXMiOlsiS1RTaWdudXBGcmVlVHJpYWwiLCJmb3JtIiwic3VibWl0QnV0dG9uIiwidmFsaWRhdG9yIiwicGFzc3dvcmRNZXRlciIsImhhbmRsZUZvcm0iLCJlIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJlbWFpbEFkZHJlc3MiLCJjYWxsYmFjayIsImlucHV0IiwidmFsdWUiLCJsZW5ndGgiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiaWRlbnRpY2FsIiwiY29tcGFyZSIsInF1ZXJ5U2VsZWN0b3IiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJldmVudCIsInBhc3N3b3JkIiwiYm9vdHN0cmFwIiwiQm9vdHN0cmFwNSIsInJvd1NlbGVjdG9yIiwiZWxlSW52YWxpZENsYXNzIiwiZWxlVmFsaWRDbGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInJldmFsaWRhdGVGaWVsZCIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsInNldEF0dHJpYnV0ZSIsImRpc2FibGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJyZXNldCIsInVwZGF0ZUZpZWxkU3RhdHVzIiwiZ2V0U2NvcmUiLCJpbml0IiwiZG9jdW1lbnQiLCJLVFBhc3N3b3JkTWV0ZXIiLCJnZXRJbnN0YW5jZSIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/demo1/js/custom/authentication/sign-up/free-trial.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/demo1/js/custom/authentication/sign-up/free-trial.js"]();
/******/ 	
/******/ })()
;