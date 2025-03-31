
async function tableCreate(gamename, players, options) {

	if (nundef(gamename)) gamename = "setgame";
	if (nundef(players)) players = { felix: userToPlayer('felix',gamename), amanda: userToPlayer('amanda',gamename) };
	if (nundef(options)) options = MGetGameOptions(gamename);

	console.log('tableCreate', gamename, players, options);

  let me = UGetName();
  let playerNames = [me]; console.log('me', me)
  assertion(me in players, "_createOpenTable without owner!!!!!")
  for (const name in players) { addIf(playerNames, name); }
  let table = {
    status: 'open',
    id: generateTableId(),
    fen: null,
    game: gamename,
    owner: playerNames[0],
    friendly: generateTableName(playerNames.length, []), //MGetTableNames()),
    players,
    playerNames: playerNames,
    options
  };
  let tid = table.id;
  let tData = table;
  let res = await mPhpPost('game_user', { action: 'create', tid, tData });
  if (res.tid) {
    console.log("Game Creation:", res.tid);
    let data = await tableGetDefault(res.tid); console.log(data);

  } else {
    console.log("Game Creation failed");
    return null;
  }
  return table;
}


