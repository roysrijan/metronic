<?php

namespace App\Core\Adapters;


/**
 * Adapter class to make the Metronic core lib compatible with the Laravel functions
 *
 * Class Util
 *
 * @package App\Core\Adapters
 */
class Bootstrap extends \App\Core\Bootstrap
{
    public static function run()
    {
        parent::run();

        if (isRTL()) {
            // RTL html attributes
            Theme::addHtmlAttribute('html', 'dir', 'rtl');
            Theme::addHtmlAttribute('html', 'direction', 'rtl');
            Theme::addHtmlAttribute('html', 'style', 'direction:rtl;');
        }
    }

    /**
     * Filter menu item based on the user "can" permission
     *
     * @param $array
     */
    public static function filterMenuPermissions(&$array)
    {
        $user = auth()->user();

        foreach ($array as $key => &$value) {
            if (isset($value['permission']) && !$user->hasAnyPermission((array) $value['permission'])) {
                unset($array[$key]);
            }

            if (isset($value['role']) && !$user->hasAnyRole((array) $value['role'])) {
                unset($array[$key]);
            }

            if (is_array($value)) {
                self::filterMenuPermissions($value);
            }
        }
    }
}
