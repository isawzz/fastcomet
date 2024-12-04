<?php

//print_r($_SERVER);die();

$sitepad['db_name'] = 'moxitoon_spd9748';
$sitepad['db_user'] = 'moxitoon_spd9748';
$sitepad['db_pass'] = '-ELTa-.j6K';
$sitepad['db_host'] = 'localhost';
$sitepad['db_table_prefix'] = 'CmGr9wm_';
$sitepad['charset'] = 'utf8mb4';
$sitepad['collate'] = 'utf8mb4_unicode_ci';
$sitepad['serving_url'] = 'moxito.online/testbuilder';// URL without protocol but with directory as well
$sitepad['url'] = 'https://moxito.online/testbuilder';
$sitepad['relativeurl'] = '/testbuilder';
$sitepad['.sitepad'] = '/home3/moxitoon';
$sitepad['sitepad_plugin_path'] = '/usr/local/sitepad';
$sitepad['editor_path'] = '/usr/local/sitepad/editor';
$sitepad['path'] = dirname(__FILE__);
$sitepad['AUTH_KEY'] = 'bgSiIrDqbS2aJS22IjvzmWmnEGgAzieY3HUMEavGjLzKzys7ImF3uHEUcq9gRB34';
$sitepad['SECURE_AUTH_KEY'] = 'WH9sAVPOkWJfihfBmUAoQBDdYmACA4fOUEA3Tqf9Unhj3uy6xHMRAFO6bVLSRWCn';
$sitepad['LOGGED_IN_KEY'] = 'Bv9MZVZjF9XhDGZspXMrcJymBMKwG66Cp2wUdCEdKJOXuCtfbsLoNtIKAJJu3AIQ';
$sitepad['NONCE_KEY'] = 'woCoRtjZNoD8DW9tR2Kjc69hFKRN4nWPqnArmbJghNPGWfZTQq8WjGda5SWM7NuD';
$sitepad['AUTH_SALT'] = 'bHrw8MO5icskvhBX9jYOkN6kVbi2IRqpTegpTqxpFkQSU4l2BifZQb90WmCEJtbp';
$sitepad['SECURE_AUTH_SALT'] = 'z5Svq7ZVsRee0Ao3DxLXrircsGJQzRMVNdXCc68wJn2ZQWFx1JUPy43RLAQm7fsa';
$sitepad['LOGGED_IN_SALT'] = 'i9XfY0IRzgMGMUk03HpR14m64zSbP7R1qTzZvhHUtS0vIjj1XZry8c3E85eAmSik';
$sitepad['NONCE_SALT'] = 'jnX8JhPRrfoNC65fhsS8dPIqcxYws2gOgA7UsqdnxbrjH92TZscf1TvjBft2dkLb';

if(!include_once($sitepad['editor_path'].'/site-inc/bootstrap.php')){
	die('Could not include the bootstrap.php. One of the reasons could be open_basedir restriction !');
}

