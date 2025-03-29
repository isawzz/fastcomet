<?php
//usage examples:
// create new game: curl -X POST "http://yourserver.com/game.php?action=create"
// submit move: curl -X POST "http://yourserver.com/game.php?action=move" -H "Content-Type: application/json" -d '{ "game_id": 5, "state": { "turn": 2, "board": [["X", "", "O"]] } }'
// get game state: curl -X GET "http://yourserver.com/game.php?action=state&id=5"

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

define('GAME_DIR', __DIR__ . '/games/');
if (!is_dir(GAME_DIR)) mkdir(GAME_DIR, 0777, true);

// 📌 Function to convert an array to YAML (simple)
function to_yaml($array) {
    $yaml = "";
    foreach ($array as $key => $value) {
        if (is_array($value)) {
            $yaml .= "$key:\n";
            foreach ($value as $subValue) {
                $yaml .= "  - " . json_encode($subValue) . "\n";
            }
        } else {
            $yaml .= "$key: " . json_encode($value) . "\n";
        }
    }
    return $yaml;
}

// 📌 Function to parse YAML into an array
function from_yaml($yaml) {
    $lines = explode("\n", trim($yaml));
    $array = [];
    $currentKey = null;

    foreach ($lines as $line) {
        if (preg_match('/^(\w+):\s*(.*)$/', $line, $matches)) {
            $key = $matches[1];
            $value = trim($matches[2]);
            $array[$key] = json_decode($value, true) ?? $value;
            $currentKey = $key;
        } elseif (preg_match('/^\s*-\s*(.*)$/', $line, $matches) && $currentKey) {
            $value = json_decode(trim($matches[1]), true) ?? trim($matches[1]);
            $array[$currentKey][] = $value;
        }
    }
    return $array;
}

$request = $_GET['action'] ?? '';

// 🎲 1. Create a new game
if ($request === 'create') {
    $gameId = uniqid();
    $initialState = ["turn" => 1, "board" => []];

    file_put_contents(GAME_DIR . "$gameId.yaml", to_yaml($initialState));

    echo json_encode(["game_id" => $gameId]);
    exit;
}

// 📥 2. Submit a move
if ($request === 'move' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $gameFile = GAME_DIR . "{$input['game_id']}.yaml";

    if (!file_exists($gameFile)) {
        echo json_encode(["error" => "Game not found"]);
        exit;
    }

    file_put_contents($gameFile, to_yaml($input['state']));

    echo json_encode(["success" => true]);
    exit;
}

// 🔄 3. Get the game state
if ($request === 'state' && isset($_GET['id'])) {
    $gameFile = GAME_DIR . "{$_GET['id']}.yaml";

    if (!file_exists($gameFile)) {
        echo json_encode(["error" => "Game not found"]);
        exit;
    }

    $state = from_yaml(file_get_contents($gameFile));
    echo json_encode(["state" => $state]);
    exit;
}

// 🚫 Invalid request
echo json_encode(["error" => "Invalid API request"]);
?>
