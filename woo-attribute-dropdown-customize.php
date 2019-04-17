<?php
/**
 * Plugin Name: WooCommerce attribute dropdown customize
 * Plugin URI:  #
 * Description: #
 * Version:     20190417
 * Author:      Riccardo Di Curti
 * Author URI:  #
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: rdc_wooadc
 * Domain Path: /languages
 */


function rdc_wooadc_enqueue_script() {

  if ( is_product() ) {
    wp_enqueue_style( 'rdc_wooadc_style', plugin_dir_url( __FILE__ ) . 'public/css/style.css');
    wp_enqueue_script( 'rdc_wooadc_script', plugin_dir_url( __FILE__ ) . 'public/js/woo-attribute-dropdown-customize.js', array ( 'jquery' ), 1.0, true);
  }
}
add_action( 'wp_enqueue_scripts', 'rdc_wooadc_enqueue_script' );
