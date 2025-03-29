<?php
if (file_exists('server_pid.txt')) {
    $pid = file_get_contents('server_pid.txt');
    exec("kill $pid");
    unlink('server_pid.txt'); // Remove PID file
    echo "Server stopped.";
} else {
    echo "Server is not running.";
}
?>
