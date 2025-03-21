<?php

require '../../vendor/autoload.php';

use Symfony\Component\Yaml\Yaml;

// echo "haaaaaaaaaaaaaaaaaaa"; die;

$yamlContent = file_get_contents('../../y/config.yaml');
$parsedData = Yaml::parse($yamlContent);

print_r($parsedData);
echo $parsedData['parameters']['database_host'];
?>
