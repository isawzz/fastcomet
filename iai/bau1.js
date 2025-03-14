
async function fetchGameState(gameId) {
	let response = await fetch(`http://yourserver.com/game.php?action=state&id=${gameId}`);
	let data = await response.json();
	console.log("Game State:", data.state);
}
