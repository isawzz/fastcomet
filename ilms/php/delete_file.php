<?php
header('Content-Type: application/json'); // Set the response type to JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Check if the path is provided via POST
$path = $_POST['path'] ?? '';

if (empty($path)) {
    echo json_encode(['status' => 'error', 'message' => 'Filename is required']);
    exit;
} else if (strpos($path, 'zdata/') == false && strpos($path, 'y/') == false){
    echo json_encode(['status' => 'error', 'message' => 'illegal filename']);
    exit;
}

// Sanitize the path to prevent directory traversal attacks
$filepath = realpath($path);
$basedir = realpath(__DIR__.'/../..');

if (!$filepath || strpos($filepath, $basedir) !== 0) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid file path', 'filepath' => $filepath, 'basedir' => $basedir]);
    exit;
}

// Check if the file exists
if (file_exists($filepath)) {
    if (unlink($filepath)) {
        echo json_encode(['status' => 'success', 'message' => "File '{$path}' deleted"]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to delete the file']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'File does not exist']);
}
?>
