<?php
include 'helpers.php';

if ($_POST['action'] === 'test_config' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    //echo json_encode(["config" => CONFIG_FILE]); die;
    $username = 'martin';
    $userdata = new UserData($username);
    $config = yamlFileToArray(CONFIG_FILE); 
    $config["users"][$username]=$userdata;
    arrayToYamlFile($config, YDIR . "hallo.yaml");
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

if ($_POST['action'] === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    // echo json_encode(["username" => $username]);die;

    if (!$username) {
        echo json_encode(["error" => "Username required"]);
        exit;
    }

    $config = file_exists(CONFIG_FILE) ? file_get_contents(CONFIG_FILE) : "";
    $parsedData = Yaml::parse($config);
    
    if (!isset($config["users"][$username])) {
        $userdata = new UserData($username, 'unknown_user'); 
        $config["users"][$username] = $userdata;
        saveAsYaml($config, CONFIG_FILE);
        //file_put_contents(CONFIG_FILE, to_yaml($config));
    }else{
        $userdata = $parsedData["users"][$username];
    
    }

    echo json_encode(["username" => $username, "userdata" => $userdata,"config" => $parsedData]); die;
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
