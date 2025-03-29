
async function login() {
	console.log("login");
	let username = document.getElementById("username").value;
	let res = await mPostPhp('game_user', {username,action:'login' }); 
	if (res.token) {
		playerToken = DA.playerToken = res.token;
		document.getElementById("playerInfo").innerText = `Logged in as: ${res.username}`;
		document.getElementById("loginDiv").style.display = "none";
		document.getElementById("gameControls").style.display = "block";
	} else {
		console.log("Login failed");
	}
}

async function createGame(playerToken,gamestate) {
	if (nundef(playerToken)) playerToken=DA.playerToken;
	if (nundef(gamestate)) gamestate=DA.gamestate;
	let res = await mPostPhp('game_user', {action:'create',token:playerToken, gamestate }); 
	if (res.game_id) {
		currentGameId = res.game_id;
		document.getElementById("gameIdInput").value = currentGameId; return;
		loadGame();
	} else {
		console.log("Game Creation failed");
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