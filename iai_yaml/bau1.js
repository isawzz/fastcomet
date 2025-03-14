
// Fetch game state
async function getGameState(gameId) {
	let response = await fetch(`http://yourserver.com/game.php?action=state&id=${gameId}`);
	let data = await response.json();
	console.log("Game State:", yaml.dump(data.state)); // Convert JSON to YAML
}

// Submit a move
async function submitMove(gameId, newState) {
	let response = await fetch("http://yourserver.com/game.php?action=move", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ game_id: gameId, state: newState })
	});
	let result = await response.json();
	console.log("Move Response:", result);
}

// Create a new game
async function createGame() {
	let response = await fetch("http://yourserver.com/game.php?action=create", { method: "POST" });
	let data = await response.json();
	console.log("New Game ID:", data.game_id);
}
