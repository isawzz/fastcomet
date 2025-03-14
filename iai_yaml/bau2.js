
// 📌 1. Login
async function login() {
	let username = document.getElementById("username").value;
	let res = await mPostPhp('game_user', {username });
	// let res = await fetch("game_user.php?action=login", {
	// 	method: "POST",
	// 	cors: 'no-cors',
	// 	headers: { "Content-Type": "application/json" },
	// 	body: JSON.stringify({ username })
	// });
	let data = res; //await res.json();
	if (data.token) {
		playerToken = data.token;
		document.getElementById("playerInfo").innerText = `Logged in as: ${data.username}`;
		document.getElementById("loginDiv").style.display = "none";
		document.getElementById("gameControls").style.display = "block";
	} else {
		alert("Login failed");
	}
}

// 📌 2. Create a game
async function createGame() {
	let res = await fetch("game.php?action=create", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ token: playerToken })
	});
	let data = await res.json();
	if (data.game_id) {
		currentGameId = data.game_id;
		document.getElementById("gameIdInput").value = currentGameId;
		loadGame();
	} else {
		alert("Game creation failed");
	}
}

// 📌 3. Load Game State
async function loadGame() {
	let gameId = document.getElementById("gameIdInput").value;
	let res = await fetch(`game.php?action=state&id=${gameId}`);
	let data = await res.json();
	if (data.state) {
		currentGameId = gameId;
		boardState = data.state.board;
		renderBoard();
		document.getElementById("moveBtn").style.display = "inline-block";
	} else {
		alert("Game not found");
	}
}

// 📌 4. Render the board
function renderBoard() {
	let boardDiv = document.getElementById("board");
	boardDiv.innerHTML = "";
	boardDiv.style.gridTemplateColumns = `repeat(${boardState[0].length}, 50px)`;

	boardState.forEach((row, y) => {
		row.forEach((cell, x) => {
			let div = document.createElement("div");
			div.className = "cell";
			div.innerText = cell;
			div.onclick = () => makeMove(x, y);
			boardDiv.appendChild(div);
		});
	});
}

// 📌 5. Make a move
async function makeMove(x, y) {
	if (boardState[y][x] === "") {
		boardState[y][x] = "X"; // Example: Player makes an "X" move
		await fetch("game.php?action=move", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token: playerToken, game_id: currentGameId, state: { board: boardState } })
		});
		renderBoard();
	}
}