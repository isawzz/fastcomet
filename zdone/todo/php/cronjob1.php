<?php
$output = [];
exec('ps aux | grep "php ./socketserver.php" | grep -v grep', $output);
if (empty($output)) {
    // Restart the server
    exec('php ./socketserver.php > /dev/null 2>&1 &');
}
?>
