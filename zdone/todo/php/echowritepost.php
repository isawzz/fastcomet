<?php 

//$filename = '../../zdata/output1.txt';
//$content = $_POST['text'];

// Allow requests from any origin (modify to a specific domain in production)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $filename = $_POST['path'] ?? '../../zdata/output.txt';
    $content = $_POST['text'] ?? 'Default content';

    if (file_put_contents($filename, $content) !== false) {
        echo "File created successfully: " . $filename;
    } else {
        echo "Error: Unable to write to the file.";
    }
} else {
    echo "Only POST requests are allowed.";
}


//echo "success!!!";
?>