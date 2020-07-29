<?php

namespace CQ_Gutenberg;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );

function enqueue_block_editor_assets() {

	$block_path = '/assets/js/editor.blocks.js';
	$style_path = '/assets/css/share.image.css';

	wp_enqueue_script(
		'testimonial-block-js',
		_get_plugin_url() . $block_path,
		array(
			'wp-editor',
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( _get_plugin_directory() . $block_path )
	);

	wp_enqueue_style(
		'testimonial-block-css',
		_get_plugin_url() . $style_path,
		[ ],
		filemtime( _get_plugin_directory() . $style_path )
	);
}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\enqueue_assets' );

function enqueue_assets() {
	$style_path = '/assets/css/blocks.style.css';
	wp_enqueue_style(
		'testimonial-block',
		_get_plugin_url() . $style_path,
		null,
		filemtime( _get_plugin_directory() . $style_path )
	);
}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\enqueue_frontend_assets' );

function enqueue_frontend_assets() {

	if ( is_admin() ) {
		return;
	}

	$block_path = '/assets/js/share.image.js';
	wp_enqueue_script(
		'quote-share-image',
		_get_plugin_url() . $block_path,
		[],
		filemtime( _get_plugin_directory() . $block_path )
	);
}

wp_register_style( 'Font_Awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' );
wp_enqueue_style('Font_Awesome');

wp_register_script( 'html2canvas', 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js', null, null, true );
wp_enqueue_script('html2canvas');