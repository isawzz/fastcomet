<?php
header('Content-Type: text/plain'); // Set response type to plain text

// Define the path to append data
// $path = 'action.txt';
$path = $_POST['path'] ?? '';

// Get the POSTed line of text
$line = $_POST['line'] ?? '';

if (strpos($path, 'zdata/') == false && strpos($path, 'y/') == false){
    echo json_encode(['status' => 'error', 'message' => 'illegal filename']);
    exit;
}

// Append the line to the path if it's not empty
if (!empty(trim($line)) && !empty(trim($path)) ) {
    // Check if a newline is needed
    if (file_exists($path) && substr(file_get_contents($path), -1) !== "\n") {
        $line = "\n" . $line;
    }
    // Append the line
    file_put_contents($path, $line . "\n", FILE_APPEND | LOCK_EX);
}

// Return the current path content
if (file_exists($path)) {
    echo file_get_contents($path);
} else {
    echo ''; // Empty path case
}
?>
