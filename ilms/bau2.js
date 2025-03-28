
async function createGame(player, gameState) {
  if (nundef(player)) player = U.name;
  if (nundef(gameState)) gameState = {players: ['felix', 'amanda']};
  let table_id = generateTableName(gameState.players.length,M.tables); 
  let res = await mPhpGet('game_user', { action: 'create', table_id, gamestate: gameState });
  if (res.table_id) {
    DA.table_id = res.table_id;
    console.log('Game created!', DA.table_id)
    return res.table_id;
  } else {
    console.log("Game Creation failed");
    return null;
  }
}
async function getTables(){
	let files = await mPhpGetFiles('tables'); //console.log('files', files);
	return M.tables = files.map(x => x.split('.')[0]);
}
async function loadTable(table_id) {
  table_id = valf(table_id, DA.table_id, localStorage.getItem('table_id'), arrLast(M.tables));
  if (nundef(table_id)) {console.log('no table found!'); return;}
  console.log('...loading table', table_id);
  let path = `y/tables/${table_id}.yaml`; 
  let data = await loadStaticYaml(path);
  if (data) {
    console.log('table loaded', data);
		localStorage.setItem('table_id', table_id);
    addIf(M.tables, table_id);
    DA.table = data;
    DA.table_id = table_id;
    return data;
  } else {
    console.log("Table not found",table_id);
		return null;
  }
}

