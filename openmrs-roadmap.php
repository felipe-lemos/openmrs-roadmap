<?php
/**
 * Plugin Name:       OpenMRS Roadmap
 * Description:       OpenMRS Roadmap Block
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Felipe Lemos
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       openmrs-roadmap
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function openmrs_roadmap_block_init() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'openmrs_roadmap_block_init' );