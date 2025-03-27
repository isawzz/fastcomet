
async function gamePresent(){
  console.log('polling!', DA.pollCounter);
  DA.table = await getGameById();
  console.log('',DA.pollCounter,'PRESENT', DA.table_id); //,DA.table);
}
async function myAsync(ms,func){
  pollStop();
  let args = [...arguments].slice(2);
  let res = await func(...args);
  pollStart(ms);
}
function pollStart(ms=10){
  console.log('',++DA.pollCounter,'...poll in', ms,'secs')
  TO.poll = setTimeout(gamePresent,ms)
}
function pollStop(){
  if (nundef(TO.poll)) {console.log('nothing active!');return;}
  console.log('',DA.pollCounter,'pollStop');
  clearTimeout(TO.poll);
}
async function createGame(player, gameState) {
  if (nundef(player)) player = U.name;
  if (nundef(gameState)) gameState = {players: ['felix', 'amanda']};
  let table_id = generateTableName(gameState.players.length,M.tables); //rUniqueId('G');
  let res = await mPostPhp('game_user', { action: 'create', table_id, gamestate: gameState });
  if (res.table_id) {
    DA.table_id = res.table_id;
    //console.log('Game created!', res);
    // let data = await getGameById(res.table_id);
    console.log('Game created!', DA.table_id)
    //loadGame();
  } else {
    console.log("Game Creation failed");
  }
}

function addIf(arr, el) { if (!arr.includes(el)) arr.push(el); }

async function getGameById(table_id) {
  table_id = valf(table_id, DA.table_id, localStorage.getItem('table_id'), arrLast(M.tables));
  if (nundef(table_id)) {console.log('no table found!'); return;}
  console.log('...loading table', table_id);
  let path = `y/tables/${table_id}.yaml`; 
  localStorage.setItem('table_id', table_id);
  let data = await loadStaticYaml(path);
  if (data) {
    console.log('table loaded', data);
    addIf(M.tables, table_id);
    DA.table = data;
    DA.table_id = table_id;
    return data;
  } else {
    console.log("Table not found",table_id);
  }
}


// 📌 3. Load Game State
async function loadGame() {
  let table_id = DA.table_id;
  //let res = await loadStaticYaml(fetch(`game.php?action=state&id=${table_id}`);
  let data = await res.json();
  if (data.state) {
    table_id = table_id;
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
      body: JSON.stringify({ token: playerToken, table_id: table_id, state: { board: boardState } })
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
  DA.table_id = localStorage.getItem('table_id');
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


