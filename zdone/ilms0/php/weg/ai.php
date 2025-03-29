<?php
require 'vendor/autoload.php';

use Symfony\Component\Yaml\Yaml;

/**
 * Convert JSON to YAML
 * @param string $json The JSON string
 * @return string YAML representation
 */
function jsonToYaml(string $json): string {
    $data = json_decode($json, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new InvalidArgumentException("Invalid JSON: " . json_last_error_msg());
    }
    return Yaml::dump($data, 2, 4);
}

/**
 * Convert YAML to JSON
 * @param string $yaml The YAML string
 * @return string JSON representation
 */
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



// Example Usage:
$jsonString = '{"name":"Alice","age":30,"address":{"street":"123 Maple St","city":"New York"}}';
$yamlString = jsonToYaml($jsonString);
echo "YAML Output:\n$yamlString\n";

$convertedJson = yamlToJson($yamlString);
echo "Reconverted JSON:\n$convertedJson\n";
?>
