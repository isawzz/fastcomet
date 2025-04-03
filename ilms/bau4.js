
function setTableToStarted(table) {
  table.status = 'started';
  table.step = 0;
  table.moves = [];
  table.fen = DA.funcs[table.game].setup(table);
  return table;
}
function createOpenTable(gamename, players, options) {
	let me = getUname();
	let playerNames = [me]; console.log('me', me)
	assertion(me in players, "_createOpenTable without owner!!!!!")
	for (const name in players) { addIf(playerNames, name); }
	let table = {
		status: 'open',
		id: generateTableId(),
		fen: null,
		game: gamename,
		owner: playerNames[0],
		friendly: generateTableName(),
		players,
		playerNames: playerNames,
		options
	};
	return table;
}
async function startGame(gamename, players, options) {
	let table = createOpenTable(gamename, players, options);
	table = setTableToStarted(table);
	let res = await mPostRoute('postTable', table);
}

