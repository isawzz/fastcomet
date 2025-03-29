<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$directory = isset($_GET['dir']) ? realpath(dirname(__DIR__,2) . '/y/' . $_GET['dir']) : null;

// Ensure directory exists and is within an allowed path
$allowedBasePath = realpath(dirname(__DIR__,2) . '/y/'); // Change this to your allowed directory
if (!$directory || strpos($directory, $allowedBasePath) !== 0 || !is_dir($directory)) {
    echo json_encode(["error" => "Invalid directory", 'dir' => $directory]);
    exit;
}
$files = array_diff(scandir($directory), array('.', '..')); // Exclude '.' and '..'
foreach ($files as $file) unlink($directory . '/' . $file); 

echo json_encode(['dir' => $directory, 'msg' => 'SUCCESS!!!']); // Return sorted file names
exit;

// $dir = isset($_GET['dir']) ? realpath(dirname(__DIR__,2) . '/y/' . $_GET['dir']) : null;
// $allowedBasePath = realpath(dirname(__DIR__,2) . '/y/');

// if (!$dir || strpos($dir, $allowedBasePath) !== 0 || !is_dir($dir)) exit("Invalid directory");

// foreach (glob("$dir/*") as $file) is_file($file) && unlink($file);

// echo "$dir deleted";
?>
