<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['image'])) {
    $imageData = $data['image'];
    $path = $data['path'];
    
    // Extract Base64 data (removing "data:image/png;base64,")
    list($meta, $base64) = explode(',', $imageData);
    
    // Get file extension from metadata
    preg_match('/data:image\/(.*);base64/', $meta, $matches);
    $extension = $matches[1] ?? 'png'; // Default to PNG if not detected
    
    // Decode and save image
    $decodedImage = base64_decode($base64);
    $filePath = $path; //'image_' . time() . '.' . $extension;
    
    if (file_put_contents($filePath, $decodedImage)) {
        echo "Image uploaded successfully: " . $filePath;
    } else {
        echo "Failed to save image.";
    }
} else {
    echo "No image received.";
}
?>
