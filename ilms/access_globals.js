

function MGet() { return lookup(M, [...arguments]); }
function MGetGame(gamename) { return M.config.games[gamename]; }
function MGetGameColor(gamename) { return MGetGame(gamename).color; }
function MGetGameFriendly(gamename) { return MGetGame(gamename).friendly; }
function MGetGameOptions(gamename) { return MGetGame(gamename).options; }
function MGetGamePlayerOptions(gamename) { return MGetGame(gamename).ploptions; }
function MGetGamePlayerOptionsAsDict(gamename) { return valf(MGetGamePlayerOptions(gamename), {}); }
function MGetGameProp(prop) { return MGetGame(T.game)[prop]; }
function MGetTables() { return M.tables; }
function MGetUser(uname) { return M.users[uname]; }
function MGetUserColor(uname) { return MGetUser(uname).color; }
function MGetUserOptionsForGame(name, gamename) { return lookup(M.users, [name, 'games', gamename]); }
function MTGetGameProp(prop) { return MGetGame(T.game)[prop]; }
function TGetGameOption(prop) { return lookup(T, ['options', prop]); }
function UGetName() { return U.name; }

