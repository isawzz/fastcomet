<?php
header('Content-Type: text/plain'); // Set response type to plain text

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
    echo file_get_contents($path);
} else {
    echo ''; // Empty path case
}
?>
