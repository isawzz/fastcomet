<?php

//print_r($_SERVER);die();

$sitepad['db_name'] = 'moxitoon_spd2900';
$sitepad['db_user'] = 'moxitoon_spd2900';
$sitepad['db_pass'] = 'q(3c6[!Rzr';
$sitepad['db_host'] = 'localhost';
$sitepad['db_table_prefix'] = 'lFmp3Xb_';
$sitepad['charset'] = 'utf8mb4';
$sitepad['collate'] = 'utf8mb4_unicode_ci';
$sitepad['serving_url'] = 'moxito.online/FussyKitchen';// URL without protocol but with directory as well
$sitepad['url'] = 'https://moxito.online/FussyKitchen';
$sitepad['relativeurl'] = '/FussyKitchen';
$sitepad['.sitepad'] = '/home3/moxitoon';
$sitepad['sitepad_plugin_path'] = '/usr/local/sitepad';
$sitepad['editor_path'] = '/usr/local/sitepad/editor';
$sitepad['path'] = dirname(__FILE__);
$sitepad['AUTH_KEY'] = 'G2VD9ePdwhIYPidTDttcIp5YnGRBTGaXpcJT1yZ9h0NiHjndnc676IUg7ZXX0NAy';
$sitepad['SECURE_AUTH_KEY'] = 'tjDloRrojzvCxIYEVz9CikC4YEeeWSYJXXR6BircV1oICWqG8sdlDuD3t2CUgaK3';
$sitepad['LOGGED_IN_KEY'] = '15V2qUOPp3oYOZ9TeImxjGyegUd3mylcoe5tL6ZLOE0W053iFkLAjvQ3xDxeBguS';
$sitepad['NONCE_KEY'] = 'apUHgzTJY2W18Si3DpBRUuMBesYpKw3pzkJM28MI9nHkq3MPgU2B1bUNMC3FuHcO';
$sitepad['AUTH_SALT'] = 'vjjPSlTZgwxAbQFq7RnnBDziVPC7jholzeqRTyofmTuV4sTOM6gVR4vIdhbAOTES';
$sitepad['SECURE_AUTH_SALT'] = 'cN8UsHwsRFqevsnZ1Q12tYOQWkdvEGSfD4W5oPEIDI4Xj3McP8CSoh393Z9moBud';
$sitepad['LOGGED_IN_SALT'] = 'PihFDg6LDbnAVKK7i65mdvcLENTeN8D1DzpxSnM99Wddr8w9guBv5LRFQT23HWwh';
$sitepad['NONCE_SALT'] = 'Z7BoyIHmIOi43ruFmRqt5eCRSgl1kjqzzC7NE5w0AP9zykP8LW7RaeyiJnvpsWBB';

if(!include_once($sitepad['editor_path'].'/site-inc/bootstrap.php')){
	die('Could not include the bootstrap.php. One of the reasons could be open_basedir restriction !');
}

