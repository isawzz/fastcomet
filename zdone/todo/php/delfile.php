<?php
// Allow access from any origin
header('Access-Control-Allow-Origin: *');

// Allow specific methods
header('Access-Control-Allow-Methods: POST, OPTIONS');

// Allow specific headers
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); // No Content
    exit;
}

// The rest of your PHP script
$filename = $_POST['filename'] ?? '';

if (empty($filename)) {
    echo json_encode(['status' => 'error', 'message' => 'Filename is required']);
    exit;
}

$filepath = realpath($filename);
$basedir = realpath(__DIR__);

if (!$filepath || strpos($filepath, $basedir) !== 0) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid file path']);
    exit;
}

if (file_exists($filepath)) {
    if (unlink($filepath)) {
        echo json_encode(['status' => 'success', 'message' => "File '{$filename}' deleted"]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to delete the file']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'File does not exist']);
}
?>
