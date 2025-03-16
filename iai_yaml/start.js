let playerToken = null;
let currentGameId = null;
let boardState = [["", "", ""], ["", "", ""], ["", "", ""]];

onload = start;

function start() {
	console.log("start");
	DA.gamestate = { turn:1,board: [["", "", ""], ["", "", ""], ["", "", ""]],players:[] };
	//setInterval(() => getGameState(5), 5000);  // Poll every 5 seconds
	login();
}

