
async function createGame(player, gamestate) {
  if (nundef(player)) player = U.name;
  if (nundef(gamestate)) gamestate = {};
  let game_id = rUniqueId('G');
  let res = await mPostPhp('game_user', { action: 'create', game_id, gamestate });
  if (res.game_id) {
    DA.currentGameId = res.game_id;
    //console.log('Game created!', res);
    let data = await getGameById(res.game_id);
    console.log('Game created!',data)
    //loadGame();
  } else {
    console.log("Game Creation failed");
  }
}
async function getGameById(game_id){
  if (nundef(game_id))  game_id = DA.currentGameId;
  let path = `y/games/${game_id}.yaml`;
  return await loadStaticYaml(path);
}

// 📌 3. Load Game State
async function loadGame() {
  let gameId = DA.currentGameId;
  //let res = await loadStaticYaml(fetch(`game.php?action=state&id=${gameId}`);
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

//#region user
async function switchToUser(username) {
  if (!isEmpty(username)) username = normalizeString(username);
  if (isEmpty(username)) username = 'guest';
  let res = await mPostPhp('game_user', { username, action: 'login' });
  U = res.userdata;
  let bg = U.color;
  let fg = U.fg ?? colorIdealText(bg);
  mStyle('dTopRight', { className: 'button', display: 'inline', h: '80%', bg, fg }, { html: `${username}` });
  localStorage.setItem('username', username);
  setTheme(U);
}
function setColors(item) {
  let bg = item.color;
  let fg = item.fg ?? colorIdealText(bg);
  mStyle('dPage', { bg, fg });
}
function setTheme(item) {
  setColors(item);
  setTexture(item);
}
function setTexture(item) {
  let bgImage = valf(item.bgImage, bgImageFromPath(item.texture), '');
  let bgBlend = valf(item.bgBlend, item.blendMode, '');
  let bgSize = bgImage.includes('marble') || bgImage.includes('wall') ? '100vw 100vh' : '';
  let bgRepeat = 'repeat';
  mStyle('dPage', { bgImage, bgBlend, bgSize, bgRepeat });
}
function bgImageFromPath(path) { return isdef(path) ? `url('${path}')` : null; }

//#endregion


