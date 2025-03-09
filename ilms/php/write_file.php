<?php
header('Content-Type: text/plain'); // Set response type to plain text
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$path = $_POST['path'] ?? '';
$text = $_POST['text'] ?? '';

if (strpos($path, 'zdata/') == false && strpos($path, 'y/') == false){
    echo json_encode(['status' => 'error', 'message' => 'illegal filename']);
    exit;
}

if (!empty(trim($path)) ) {
    file_put_contents($path, $text);
}

if (file_exists($path)) {
    echo json_encode(["success" => true, "file" => $path]);
    //echo file_get_contents($path);
} else {
    echo ''; // Empty path case
}
?>
