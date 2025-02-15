
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the emoji text from the POST request
    $emojiText = $_POST['emojiText'] ?? '';

    // Specify the file path
    $filePath = 'saved_text.txt';

    // Save the text to the file (append mode)
    try {
        // Open the file for appending
        $fileHandle = fopen($filePath, 'a');

        if (!$fileHandle) {
            throw new Exception("Unable to open file for writing.");
        }

        // Append the text with a newline
        fwrite($fileHandle, $emojiText . PHP_EOL);

        // Close the file
        fclose($fileHandle);

        echo "Text saved successfully to {$filePath}!";
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Invalid request method.";
}
?>

