async function createTable(player, tData) {
  if (nundef(player)) player = U.name;
  if (nundef(tData)) tData = {players: ['felix', 'amanda']};
  let tid = generateTableName(tData.players.length,M.tables); 
	tData.id = tid;
  let res = await mPhpPost('game_user', { action: 'create', tid, tData });
  if (res.tid) {
    DA.tid = res.tid;
		DA.tData = null;
    //console.log('Game created!', DA.tid)
    return res.tid;
  } else {
    console.log("Game Creation failed");
    return null;
  }
}
async function getTables(){
	let files = await mPhpGetFiles('tables'); //console.log('files', files);
	return M.tables = files.map(x => x.split('.')[0]);
}
async function loadTable(tid) {
  tid = valf(tid, DA.tid, localStorage.getItem('tid'), arrLast(M.tables));
  if (nundef(tid)) {console.log('no table found!'); return;}
  console.log('...loading table', tid);
  let path = `y/tables/${tid}.yaml`; 
  let tData = await loadStaticYaml(path);
  if (tData) {
    console.log('table loaded', tData);
		localStorage.setItem('tid', tid);
    addIf(M.tables, tid);
    DA.tData = tData;
    DA.tid = tid;
    return tData;
  } else {
    console.log("Table not found",tid);
		return null;
  }
}

