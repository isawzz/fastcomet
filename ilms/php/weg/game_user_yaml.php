<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

//echo json_encode(["input" => dirname(__DIR__,2), "username" => __DIR__ . '\\..\\..\\iaidata\\games/']); die;
define('GAME_DIR',dirname(__DIR__,2) . '/iai_data/games/');
define('CONFIG_FILE', dirname(__DIR__,2) . '/y/config.yaml'); 
//echo json_encode(["gamesDir" => GAME_DIR, "playerFile" => CONFIG_FILE]); //die;
//define('GAME_DIR', __DIR__ . '../../iaidata/games/');
//define('CONFIG_FILE', __DIR__ . '../../iaidata/config.yaml'); 

if (!is_dir(GAME_DIR)) mkdir(GAME_DIR, 0777, true);

class UserData {
    public $color;
    public $name;
    public $imgkey;

    public function __construct($name,$imgkey) {
        $this->color = $this->randomColor();
        $this->name = $name;
        $this->imgkey = $imgkey ?? 'unknown_user';
    }
}
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
    //$userdata = $_POST['userdata'];
    // echo json_encode(["username" => $username]);die;

    if (!$username) {
        echo json_encode(["error" => "Username required"]);
        exit;
    }

    $config = file_exists(CONFIG_FILE) ? from_yaml(file_get_contents(CONFIG_FILE)) : [];
    //if (isset($config)) echo json_encode(["username" => $username]);die;
    echo json_encode(["username" => $username, "config" => $config]); die;
    
    if (!isset($config["users"][$username])) {
        //$userdata["token"] = bin2hex(random_bytes(8)); // Generate a token
        $userdata = new UserData($username, 'unknown_user'); //$_POST['imgkey']);
        $config["users"][$username] = $userdata;
        file_put_contents(CONFIG_FILE, to_yaml($config));
    }else{
        $userdata = $config["users"][$username];
    
    }

    echo json_encode(["username" => $username, "userdata" => $userdata, "config" => $config]);
    exit;
}

// 📌 2. Create a new game (Requires authentication)
if ($_POST['action'] === 'create' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['token'];
    $gamestate = $_POST['gamestate'];

    $config = file_exists(CONFIG_FILE) ? from_yaml(file_get_contents(CONFIG_FILE)) : [];

    if (!in_array($token, $config)) {
        echo json_encode(["error" => "Invalid authentication"]);
        exit;
    }

    $gameId = uniqid();
    echo json_encode(["game_id" => '123',"config" => $config]);exit;
    // $initialState = ["turn" => 1, "board" => [], "config" => []];

    file_put_contents(GAME_DIR . "$gameId.yaml", to_yaml($gamestate));

    echo json_encode(["game_id" => $gameId]);
    exit;
}

// 📥 3. Submit a move
if ($_POST['action'] === 'move' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $token = $input['token'] ?? '';
    $gameFile = GAME_DIR . "{$input['game_id']}.yaml";

    $config = file_exists(CONFIG_FILE) ? from_yaml(file_get_contents(CONFIG_FILE)) : [];

    if (!in_array($token, $config)) {
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
