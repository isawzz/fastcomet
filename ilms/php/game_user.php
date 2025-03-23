<?php
include 'helpers.php';

if ($_POST['action'] === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  if (!$username || $username == 'null') {
    echo json_encode(["error" => "Username required"]);
    exit;
  }
  $config = yamlFileToArray(CONFIG_READ); 
  $userdata = $config["users"][$username]; 
  if (!isset($userdata)) {
    $userdata = new UserData($username, 'unknown_user'); 
    $config["users"][$username] = $userdata;
    arrayToYamlFile($config, CONFIG_WRITE);
  } 
  echo json_encode(["username" => $username, "config" => $config, "userdata" => $userdata]); die;

  // $config = file_exists(CONFIG_READ) ? file_get_contents(CONFIG_READ) : "";
  // $parsedData = Yaml::parse($config);
  

  echo json_encode(["username" => $username, "userdata" => $userdata,"config" => $parsedData]); die;
  exit;
}

if ($_POST['action'] === 'test_array' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $arr = ["config" => 1]; //, "typeConfig" => ["a" => "du"], "parsedData" => "wer", "typeParse" => "hallo"];
    arrayToYamlFile($arr, "hallo.yaml");
    echo json_encode(["config" => CONFIG_READ]); die;
    echo json_encode(["config" => "success"]);
    exit;
}

if ($_POST['action'] === 'test_config' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    //echo json_encode(["config" => CONFIG_READ]); die;
    $username = 'dieter';
    $userdata = new UserData($username);
    $config = yamlFileToArray(CONFIG_READ); 
    //echo json_encode(["config" => $config]); die;
    $config["users"][$username]=$userdata;
    arrayToYamlFile($config, "hallo.yaml");
    echo json_encode(["config" => $config, "username" => $username, "userdata" => $userdata]); die;
    exit;
}

if ($_POST['action'] === 'test_final' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    //echo json_encode(["config" => CONFIG_READ]); die;
    $username = 'dieter';
    $userdata = new UserData($username);
    $config = yamlFileToArray(CONFIG_READ); 
    //echo json_encode(["config" => $config]); die;
    $config["users"][$username]=$userdata;
    arrayToYamlFile($config, "hallo.yaml");
    echo json_encode(["config" => $config, "username" => $username, "userdata" => $userdata]); die;
    
    
    $typeConfig = gettype($config);
    $parsedData = Yaml::parse($config); $typeParse = gettype($parsedData);
    echo json_encode(["config" => $config, "typeConfig"=> $typeConfig, "parsedData" => $parsedData, "typeParse" => $typeParse]); die;

    $json = yamlToJson($config);
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

    $config = file_exists(CONFIG_READ) ? from_yaml(file_get_contents(CONFIG_READ)) : [];

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

    $config = file_exists(CONFIG_READ) ? from_yaml(file_get_contents(CONFIG_READ)) : [];

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
