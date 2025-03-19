let playerToken = null;
let currentGameId = null;
let boardState = [["", "", ""], ["", "", ""], ["", "", ""]];

onload = start;

async function start() {
	await loadAssetsStatic(); console.log('assets', M); return;

	console.log("start");
	DA.gamestate = { turn: 1, board: [["", "", ""], ["", "", ""], ["", "", ""]], players: [] };
	//setInterval(() => getGameState(5), 5000);  // Poll every 5 seconds
	login();
}

