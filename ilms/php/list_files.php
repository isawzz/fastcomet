<?php
header("Content-Type: application/json");
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

// Get directory from request
$directory = isset($_GET['dir']) ? realpath(dirname(__DIR__,2) . '/y/' . $_GET['dir']) : null;

// Ensure directory exists and is within an allowed path
$allowedBasePath = realpath(dirname(__DIR__,2) . '/y/'); // Change this to your allowed directory
if (!$directory || strpos($directory, $allowedBasePath) !== 0 || !is_dir($directory)) {
    echo json_encode(["error" => "Invalid directory"]);
    exit;
}

$files = [];
if ($handle = opendir($directory)) {
    while (($file = readdir($handle)) !== false) {
        if ($file != "." && $file != "..") {
            $files[] = $file;
        }
    }
    closedir($handle);
}

echo json_encode($files);
?>
