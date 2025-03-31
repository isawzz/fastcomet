<?php
include 'helpers.php';

$data = json_decode(file_get_contents("php://input"), true);

if ($data === null) {
    echo json_encode(["error" => "Invalid JSON"]);
    exit;
}

if (strpos($path, 'zdata/') == false && strpos($path, 'y/') == false){
    echo json_encode(['status' => 'error', 'message' => 'illegal filename', "filename" => $path, "content" => $text]);
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
