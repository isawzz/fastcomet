<?php
header('Content-Type: text/plain'); // Set response type to plain text
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$path = $_POST['path'] ?? '';

if (strpos($path, 'zdata/') == false && strpos($path, 'y/') == false){
    echo json_encode(['status' => 'error', 'message' => 'illegal filename']);
    exit;
}


if (file_exists($path)) {
    echo file_get_contents($path);
} else {
    echo ''; // Empty path case
}
?>
