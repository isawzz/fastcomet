<?php
include 'helpers.php';
// header("Content-Type: application/json");
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST");
// header("Access-Control-Allow-Headers: Content-Type");

// Get directory from request
$directory = isset($_GET['dir']) ? realpath(dirname(__DIR__,2) . '/y/' . $_GET['dir']) : null;
$key = $_GET['dir'];

// Ensure directory exists and is within an allowed path
$allowedBasePath = realpath(dirname(__DIR__,2) . '/y/'); // Change this to your allowed directory
if (!$directory || strpos($directory, $allowedBasePath) !== 0 || !is_dir($directory)) {
    echo json_encode(["error" => "Invalid directory"]);
    exit;
}

// $files = [];
// if ($handle = opendir($directory)) {
//     while (($file = readdir($handle)) !== false) {
//         if ($file != "." && $file != "..") {
//             $files[] = $file;
//         }
//     }
//     closedir($handle);
// }

$files = array_diff(scandir($directory), array('.', '..')); // Exclude '.' and '..'

// Get file creation times
$fileData = [];
foreach ($files as $file) {
    $filePath = $directory . DIRECTORY_SEPARATOR . $file;
    $fileData[] = [
        "name" => $file,
        "mtime" => filemtime($filePath) // Get creation time
    ];
}

// Sort files by creation time (oldest to newest)
usort($fileData, function ($a, $b) {
    return $a["mtime"] - $b["mtime"];
});

if ($key == 'tables'){
    $path = YDIR . 'configshort.yaml';
    $info = yamlFileToArray($path);
    $info["tables"] = $fileData;
    arrayToYamlFile($info, $path);
}

// Return JSON response
echo json_encode(array_column($fileData, 'name')); // Return sorted file names
exit;
?>

<!-- echo json_encode($files);
?> -->
