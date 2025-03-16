<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

//echo json_encode(["input" => dirname(__DIR__,2), "username" => __DIR__ . '\\..\\..\\iaidata\\games/']); die;
define('GAME_DIR',dirname(__DIR__,2) . '/iai_data/games/');
define('PLAYER_FILE', dirname(__DIR__,2) . '/iai_data/players.yaml'); 
//echo json_encode(["gamesDir" => GAME_DIR, "playerFile" => PLAYER_FILE]); //die;
//define('GAME_DIR', __DIR__ . '../../iaidata/games/');
//define('PLAYER_FILE', __DIR__ . '../../iaidata/players.yaml'); 

if (!is_dir(GAME_DIR)) mkdir(GAME_DIR, 0777, true);


// 📌 Convert array to YAML
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

// 📌 Parse YAML into an array
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

// 📌 1. Register/Login (No password)
if ($_POST['action'] === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    //$input = json_decode(file_get_contents("php://input"), true);
    $username = $_POST['username'];// trim($input['username'] ?? '');
    //echo json_encode(["input" => $input, "username" => $username]);die;

    if (!$username) {
        echo json_encode(["error" => "Username required"]);
        exit;
    }

    $players = file_exists(PLAYER_FILE) ? from_yaml(file_get_contents(PLAYER_FILE)) : [];
    
    if (!isset($players[$username])) {
        $players[$username] = bin2hex(random_bytes(8)); // Generate a token
        file_put_contents(PLAYER_FILE, to_yaml($players));
    }

    echo json_encode(["username" => $username, "token" => $players[$username]]);
    exit;
}

// 📌 2. Create a new game (Requires authentication)
if ($_POST['action'] === 'create' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['token'];
    $gamestate = $_POST['gamestate'];

    $players = file_exists(PLAYER_FILE) ? from_yaml(file_get_contents(PLAYER_FILE)) : [];

    if (!in_array($token, $players)) {
        echo json_encode(["error" => "Invalid authentication"]);
        exit;
    }

    $gameId = uniqid();
    echo json_encode(["game_id" => '123',"players" => $players]);exit;
    // $initialState = ["turn" => 1, "board" => [], "players" => []];

    file_put_contents(GAME_DIR . "$gameId.yaml", to_yaml($gamestate));

    echo json_encode(["game_id" => $gameId]);
    exit;
}

// 📥 3. Submit a move
if ($_POST['action'] === 'move' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $token = $input['token'] ?? '';
    $gameFile = GAME_DIR . "{$input['game_id']}.yaml";

    $players = file_exists(PLAYER_FILE) ? from_yaml(file_get_contents(PLAYER_FILE)) : [];

    if (!in_array($token, $players)) {
        echo json_encode(["error" => "Invalid authentication"]);
        exit;
    }

    if (!file_exists($gameFile)) {
        echo json_encode(["error" => "Game not found"]);
        exit;
    }

    file_put_contents($gameFile, to_yaml($input['state']));

    echo json_encode(["success" => true]);
    exit;
}

// 🔄 4. Get the game state
if ($_POST['action'] === 'state' && isset($_POST['id'])) {
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
