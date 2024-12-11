<?php
error_reporting(E_ALL);
set_time_limit(0);
ob_implicit_flush();

$host = '127.0.0.1'; // Server host
$port = 8080;        // Server port
$clients = [];

// Create a TCP/IP stream socket
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1);
socket_bind($socket, $host, $port);
socket_listen($socket);

echo "WebSocket server started on $host:$port\n";

while (true) {
    $read = $clients;
    $read[] = $socket;

    // Select active sockets
    socket_select($read, $write, $except, 0, 10);

    if (in_array($socket, $read)) {
        $newSocket = socket_accept($socket);
        $clients[] = $newSocket;

        $header = socket_read($newSocket, 1024);
        perform_handshake($header, $newSocket, $host, $port);
        echo "New client connected\n";
    }

    foreach ($clients as $client) {
        if (in_array($client, $read)) {
            $data = socket_read($client, 1024);
            if ($data === false) {
                unset($clients[array_search($client, $clients)]);
                socket_close($client);
                echo "Client disconnected\n";
                continue;
            }

            // Decode incoming message and broadcast it
            $decodedData = unmask($data);
            if ($decodedData) {
                echo "Received message: $decodedData\n";
                broadcast($clients, $decodedData);
            }
        }
    }
}

function perform_handshake($header, $socket, $host, $port) {
    $headers = [];
    $lines = preg_split("/\r\n/", $header);
    foreach ($lines as $line) {
        $parts = explode(': ', $line);
        if (count($parts) === 2) {
            $headers[$parts[0]] = $parts[1];
        }
    }

    $secWebSocketKey = $headers['Sec-WebSocket-Key'];
    $secWebSocketAccept = base64_encode(pack('H*', sha1($secWebSocketKey . '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')));

    $response = "HTTP/1.1 101 Switching Protocols\r\n" .
                "Upgrade: websocket\r\n" .
                "Connection: Upgrade\r\n" .
                "Sec-WebSocket-Accept: $secWebSocketAccept\r\n\r\n";

    socket_write($socket, $response, strlen($response));
}

function unmask($payload) {
    $length = ord($payload[1]) & 127;

    if ($length == 126) {
        $masks = substr($payload, 4, 4);
        $data = substr($payload, 8);
    } elseif ($length == 127) {
        $masks = substr($payload, 10, 4);
        $data = substr($payload, 14);
    } else {
        $masks = substr($payload, 2, 4);
        $data = substr($payload, 6);
    }

    $text = '';
    for ($i = 0; $i < strlen($data); ++$i) {
        $text .= $data[$i] ^ $masks[$i % 4];
    }
    return $text;
}

function mask($text) {
    $b1 = 0x81;
    $length = strlen($text);

    if ($length <= 125) {
        $header = pack('CC', $b1, $length);
    } elseif ($length > 125 && $length < 65536) {
        $header = pack('CCn', $b1, 126, $length);
    } else {
        $header = pack('CCNN', $b1, 127, $length);
    }
    return $header . $text;
}

function broadcast($clients, $message) {
    $message = mask($message);
    foreach ($clients as $client) {
        socket_write($client, $message, strlen($message));
    }
}
