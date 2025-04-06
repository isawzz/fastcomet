<?php
$host = '0.0.0.0'; // Listen on all available interfaces
$port = 8081;

// Create a TCP/IP socket
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1);
socket_bind($socket, $host, $port);
socket_listen($socket);

$clients = [];

echo "WebSocket server started on port $port...\n";

while (true) {
    $read = $clients;
    $read[] = $socket; // Add server socket to listen for new connections
    socket_select($read, $write, $except, 0);

    // Accept new client connections
    if (in_array($socket, $read)) {
        $newClient = socket_accept($socket);
        $clients[] = $newClient;
        handshake($newClient);
        echo "New client connected\n";
        unset($read[array_search($socket, $read)]);
    }

    // Handle client messages
    foreach ($read as $client) {
        $data = socket_read($client, 1024);
        if (!$data) {
            unset($clients[array_search($client, $clients)]);
            socket_close($client);
            echo "Client disconnected\n";
            continue;
        }
        
        $decodedMessage = decodeMessage($data);
        echo "Received: $decodedMessage\n";

        // Broadcast message to all clients
        $encodedMessage = encodeMessage("Server says: $decodedMessage");
        foreach ($clients as $c) {
            socket_write($c, $encodedMessage, strlen($encodedMessage));
        }
    }
}

// Handshake function (WebSocket Upgrade)
function handshake($client) {
    $request = socket_read($client, 1024);
    preg_match('/Sec-WebSocket-Key: (.*)\r\n/', $request, $matches);
    $key = $matches[1] ?? '';
    $acceptKey = base64_encode(pack('H*', sha1($key . '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')));

    $headers = "HTTP/1.1 101 Switching Protocols\r\n";
    $headers .= "Upgrade: websocket\r\n";
    $headers .= "Connection: Upgrade\r\n";
    $headers .= "Sec-WebSocket-Accept: $acceptKey\r\n\r\n";

    socket_write($client, $headers, strlen($headers));
}

// Decode WebSocket frames
function decodeMessage($data) {
    return substr($data, 6); // Quick extraction for small messages
}

// Encode WebSocket frames
function encodeMessage($text) {
    $length = strlen($text);
    return "\x81" . chr($length) . $text;
}
