
async function gamePresent(){
  console.log('polling!', DA.pollCounter);
  DA.tData = await loadTable();
  console.log('',DA.pollCounter,'PRESENT', DA.tid); //,DA.tData);
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




// 📌 3. Load Game State
async function loadGame() {
  let tid = DA.tid;
  //let res = await loadStaticYaml(fetch(`game.php?action=state&id=${tid}`);
  let data = await res.json();
  if (data.state) {
    tid = tid;
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
      body: JSON.stringify({ token: playerToken, tid: tid, state: { board: boardState } })
    });
    renderBoard();
  }
}




