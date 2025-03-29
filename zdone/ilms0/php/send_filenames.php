<?php
// Directory path
$directory = "/path/to/your/directory";

// Check if the directory exists
if (is_dir($directory)) {
    // Open a directory handle
    if ($handle = opendir($directory)) {
        // Iterate through the directory
        while (($file = readdir($handle)) !== false) {
            // Exclude . and .. directories
            if ($file != "." && $file != "..") {
                // Output the file name
                echo $file . "<br>";
            }
        }
        // Close the directory handle
        closedir($handle);
    }
} else {
    echo "The directory does not exist.";
}
?>
