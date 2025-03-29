<?php
$host = 'www.google.com';
$port = 80;
$timeout = 5;
// Try to open a socket connection
$socket = @fsockopen($host, $port, $errno, $errstr, $timeout);
if ($socket) {
    echo "Socket connection to $host on port $port successful.";
    fclose($socket);
} else {
    echo "Socket connection failed: $errstr ($errno)";
}
?>
