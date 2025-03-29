<?php 

$filename = '../../zdata/output1.txt';
$content = "This is the text to save in the file.";

file_put_contents($filename, $content);
echo "success!!!";
?>