<?php
include 'helpers.php';

if ($_POST['action'] === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  if (!$username || $username == 'null') {
    echo json_encode(["error" => "Username required"]);
    exit;
  }
  $users = yamlFileToArray(USERS_READ); 
  $userdata = $users[$username]; 
  $arr = ["username" => $username];
  if (!isset($userdata)) {
    $userdata = new UserData($username, 'unknown_user'); 
    $users[$username] = $userdata;
    arrayToYamlFile($users, USERS_WRITE);
    $arr["users"] = $users;
  } 
  $arr["userdata"] = $userdata;
  echo json_encode($arr); 
  exit;
}

if ($_POST['action'] === 'test_array' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $arr = ["users" => 1]; //, "typeConfig" => ["a" => "du"], "parsedData" => "wer", "typeParse" => "hallo"];
    arrayToYamlFile($arr, "hallo.yaml");
    echo json_encode(["users" => USERS_READ]); die;
    echo json_encode(["users" => "success"]);
    exit;
}

if ($_POST['action'] === 'test_config' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    //echo json_encode(["users" => USERS_READ]); die;
    $username = 'dieter';
    $userdata = new UserData($username);
    $users = yamlFileToArray(USERS_READ); 
    //echo json_encode(["users" => $users]); die;
    $users["users"][$username]=$userdata;
    arrayToYamlFile($users, "hallo.yaml");
    echo json_encode(["users" => $users, "username" => $username, "userdata" => $userdata]); die;
    exit;
}

if ($_POST['action'] === 'test_final' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    //echo json_encode(["users" => USERS_READ]); die;
    $username = 'dieter';
    $userdata = new UserData($username);
    $users = yamlFileToArray(USERS_READ); 
    //echo json_encode(["users" => $users]); die;
    $users["users"][$username]=$userdata;
    arrayToYamlFile($users, "hallo.yaml");
    echo json_encode(["users" => $users, "username" => $username, "userdata" => $userdata]); die;
    
    
    $typeConfig = gettype($users);
    $parsedData = Yaml::parse($users); $typeParse = gettype($parsedData);
    echo json_encode(["users" => $users, "typeConfig"=> $typeConfig, "parsedData" => $parsedData, "typeParse" => $typeParse]); die;

    $json = yamlToJson($users);
    $php = json_decode($json, true);
    $yaml = jsonToYaml($json);
    echo json_encode(["o" => $parsedData]); die;
    $jsonString = '{"name":"Alice","age":30,"address":{"street":"123 Maple St","city":"New York"}}';
    $php = json_decode($jsonString, true);
    $s = json_encode($php, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    $yamlString = jsonToYaml($s);
    echo json_encode(["yaml" => $yamlString, "o"=> $php, "json" => $s]); die;
    
    echo json_encode(["user" => "hallo"]); die;
    $user = new UserData('test', 'unknown_user');
    echo json_encode(["user" => $user]); die;

    saveAsYaml(["users" => ["test" => new UserData('test', 'unknown_user')]], "hallo.yaml");
    exit;
}

if ($_POST['action'] === 'test' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonString = '{"name":"Alice","age":30,"address":{"street":"123 Maple St","city":"New York"}}';
    $php = json_decode($jsonString, true);
    $s = json_encode($php, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    $yamlString = jsonToYaml($s);
    echo json_encode(["yaml" => $yamlString, "o"=> $php, "json" => $s]); die;
    
    echo json_encode(["user" => "hallo"]); die;
    $user = new UserData('test', 'unknown_user');
    echo json_encode(["user" => $user]); die;

    saveAsYaml(["users" => ["test" => new UserData('test', 'unknown_user')]], "hallo.yaml");
    exit;
}

// 📌 2. Create a new game (Requires authentication)
if ($_POST['action'] === 'create' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['token'];
    $gamestate = $_POST['gamestate'];

    $users = file_exists(USERS_READ) ? from_yaml(file_get_contents(USERS_READ)) : [];

    if (!in_array($token, $users)) {
        echo json_encode(["error" => "Invalid authentication"]);
        exit;
    }

    $gameId = uniqid();
    echo json_encode(["game_id" => '123',"users" => $users]);exit;
    // $initialState = ["turn" => 1, "board" => [], "users" => []];

    file_put_contents(GAME_DIR . "$gameId.yaml", to_yaml($gamestate));

    echo json_encode(["game_id" => $gameId]);
    exit;
}

// 📥 3. Submit a move
if ($_POST['action'] === 'move' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $token = $input['token'] ?? '';
    $gameFile = GAME_DIR . "{$input['game_id']}.yaml";

    $users = file_exists(USERS_READ) ? from_yaml(file_get_contents(USERS_READ)) : [];

    if (!in_array($token, $users)) {
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
