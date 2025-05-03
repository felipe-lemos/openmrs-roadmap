<?php
// This file is generated. Do not modify it manually.
return array(
	'build' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'openmrs/roadmap',
		'title' => 'OpenMRS Roadmap',
		'category' => 'design',
		'icon' => 'admin-site-alt3',
		'description' => 'Display the OpenMRS roadmap.',
		'textdomain' => 'openmrs-roadmap',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style.scss',
		'editorStyle' => 'file:./editor.scss',
		'attributes' => array(
			'tag' => array(
				'type' => 'string',
				'default' => 'Roadmap'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Collaborating on shared needs'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'See what’s coming up and suggest new features or functionality.'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Go to our roadmap'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => 'product/roadmap.html'
			),
			'releases' => array(
				'type' => 'array',
				'default' => array(
					array(
						'version' => 'Release 3.3.30',
						'desc' => 'A short summary of changes in this release'
					),
					array(
						'version' => 'Release 3.3.29',
						'desc' => 'A short summary of changes in this release'
					),
					array(
						'version' => 'Release 3.3.28',
						'desc' => 'A short summary of changes in this release'
					),
					array(
						'version' => 'Release 3.3.27',
						'desc' => 'A short summary of changes in this release'
					)
				)
			)
		),
		'supports' => array(
			'inserter' => true,
			'html' => false,
			'reusable' => true,
			'remove' => true
		)
	)
);
