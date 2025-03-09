<?php
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["url"])) {
	$url = escapeshellarg($_POST["url"]);
	$path = escapeshellarg($_POST["path"]);
	$command = "yt-dlp -x --audio-format mp3 -o $path $url 2>&1";
	exec($command, $output, $returnCode);
	// echo json_encode(["success" => true, "path" => $path, "url" => $url]); //, "dir" => $outputDir, "filename" => $filename]);
  if ($returnCode === 0) {
    echo json_encode(["success" => true, "returnCode" => $returnCode, "output" => $output]);
  } else {
    echo json_encode(["success" => false, "message" => "Download failed", "error" => implode("\n", $output)]);
  }
} else {
  echo json_encode(["success" => false, "message" => "Invalid request"]);
}
?>
