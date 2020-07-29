<?php
/**
 * Plugin Name:       Custom Quote
 * Description:       Gutenberg quote components with image, text, description, share twitter, download image.
 * Version:           0.1
 * Author:            Maksym Terela
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-quote
 * Domain Path:       /languages
 */

namespace CQ_Gutenberg;

defined('ABSPATH') || exit;


function _get_plugin_directory() {
    return __DIR__;
}

function _get_plugin_url() {
    static $plugin_url;

    if ( empty( $plugin_url ) ) {
        $plugin_url = plugins_url( null, __FILE__ );
    }

    return $plugin_url;
}

include __DIR__ . '/lib/enqueue-scripts.php';