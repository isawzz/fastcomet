<?php
require '../../vendor/autoload.php';

use Symfony\Component\Yaml\Yaml;

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

define('GAME_DIR',dirname(__DIR__,2) . '/iai_data/games/');
define('CONFIG_FILE', dirname(__DIR__,2) . '/y/config.yaml'); 
define('YDIR', dirname(__DIR__,2) . '/y/'); 
//echo json_encode(["gamesDir" => GAME_DIR, "playerFile" => CONFIG_FILE]); //die;

if (!is_dir(GAME_DIR)) mkdir(GAME_DIR, 0777, true);

function randomColor() {
	return sprintf("#%06X", mt_rand(0, 0xFFFFFF));
}
class UserData {
	public $color;
	public $name;
	public $imgkey;

	public function __construct($name) {
			$this->color = randomColor();
			$this->name = $name;
			$this->imgkey = 'unknown_user';
	}
}

// #region converters
function jsonToYaml(string $json): string {
	$data = json_decode($json, true);
	if (json_last_error() !== JSON_ERROR_NONE) {
			throw new InvalidArgumentException("Invalid JSON: " . json_last_error_msg());
	}
	return Yaml::dump($data, 4, 2);
}
function yamlToJson(string $yaml): string {
	$data = Yaml::parse($yaml);
	return json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
}
function objectToArray($object) {
return json_decode(json_encode($object), true);
}
function arrayToObject(array $array) {
return json_decode(json_encode($array));
}
function objectToYaml($object) {
return Yaml::dump(objectToArray($object), 2, 4);
}
function yamlToObject(string $yaml) {
return arrayToObject(Yaml::parse($yaml));
}
function objectToJson($object) {
return json_encode(objectToArray($object), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
}
function jsonToObject(string $json) {
return arrayToObject(json_decode($json, true));
}
function yamlToJsonFile(string $yaml, string $file) {
file_put_contents($file, yamlToJson($yaml));
}
function jsonToYamlFile(string $json, string $file) {
file_put_contents($file, jsonToYaml($json));
}
//yaml file to object
function yamlFileToObject(string $file) {
	return yamlToObject(file_get_contents($file));
}
//json file to object
function jsonFileToObject(string $file) {
	return jsonToObject(file_get_contents($file));
}
//yamlFile to array
function yamlFileToArray(string $file) {
	return Yaml::parse(file_get_contents($file));
}
//jsonFile to array
function jsonFileToArray(string $file) {
	return json_decode(file_get_contents($file), true);
}
//yamlFile to json
function yamlFileToJson(string $file) {
	return yamlToJson(file_get_contents($file));
}
//jsonFile to yaml
function jsonFileToYaml(string $file) {
	return jsonToYaml(file_get_contents($file));
}
//jsonFile to yamlFile
function jsonFileToYamlFile(string $file, string $yamlFile) {
	file_put_contents($yamlFile, jsonFileToYaml($file));
}
//yamlFile to jsonFile
function yamlFileToJsonFile(string $file, string $jsonFile) {
	file_put_contents($jsonFile, yamlFileToJson($file));
}
//array to yaml file
function arrayToYamlFile(array $array, string $file) {
	file_put_contents($file, Yaml::dump($array, 2, 4));
}


?>
