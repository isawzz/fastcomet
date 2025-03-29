<?php
$command = 'php socketserver.php > /dev/null 2>&1 & echo $!';
exec($command, $output);
file_put_contents('server_pid.txt', $output[0]); // Save PID to a file
echo "Server started.";
?>
