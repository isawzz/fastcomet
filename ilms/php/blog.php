<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,POST");
header("Access-Control-Allow-Headers: Content-Type");

$dataFile = 'blogposts.json';

// Retrieve existing posts
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        echo file_get_contents($dataFile);
    } else {
        echo json_encode([]);
    }
    exit;
}

// Save a new post
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!isset($input['title'], $input['content'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid input']);
        exit;
    }

    $newPost = [
        'title' => $input['title'],
        'content' => $input['content'],
        'timestamp' => date('Y-m-d H:i:s'),
    ];

    $posts = [];
    if (file_exists($dataFile)) {
        $posts = json_decode(file_get_contents($dataFile), true);
    }

    $posts[] = $newPost;
    file_put_contents($dataFile, json_encode($posts));
    echo json_encode($newPost);
    exit;
}
?>
