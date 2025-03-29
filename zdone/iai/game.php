<?php
//usage examples:
// create new game: curl -X POST "http://yourserver.com/game.php?action=create"
// submit move: curl -X POST "http://yourserver.com/game.php?action=move" -H "Content-Type: application/json" -d '{ "game_id": 5, "state": { "turn": 2, "board": [["X", "", "O"]] } }'
// get game state: curl -X GET "http://yourserver.com/game.php?action=state&id=5"


header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$dbname = "boardgame";
$username = "root";  // Change as needed
$password = "";      // Change as needed

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die(json_encode(["error" => "Database connection failed"]));
}

// 📌 Handle API Requests
$request = $_GET['action'] ?? '';

// 🎲 1. Create a new game
if ($request === 'create') {
    $initialState = json_encode(["turn" => 1, "board" => []]);  // Default board state
    $stmt = $pdo->prepare("INSERT INTO games (state) VALUES (:state)");
    $stmt->execute(['state' => $initialState]);

    echo json_encode(["game_id" => $pdo->lastInsertId()]);
    exit;
}

// 📥 2. Submit a move
if ($request === 'move' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    if (!isset($input['game_id']) || !isset($input['state'])) {
        echo json_encode(["error" => "Invalid data"]);
        exit;
    }

    $stmt = $pdo->prepare("UPDATE games SET state = :state WHERE id = :id");
    $stmt->execute(['state' => json_encode($input['state']), 'id' => $input['game_id']]);

    echo json_encode(["success" => true]);
    exit;
}

// 🔄 3. Get the game state
if ($request === 'state' && isset($_GET['id'])) {
    $stmt = $pdo->prepare("SELECT state FROM games WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    $game = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($game) {
        echo json_encode(["state" => json_decode($game["state"])]);
    } else {
        echo json_encode(["error" => "Game not found"]);
    }
    exit;
}

// 🚫 Invalid request
echo json_encode(["error" => "Invalid API request"]);
?>
