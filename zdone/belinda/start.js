function start() {
	PROJECTNAME = 'bella';
	Daat = {};
	DA = {};
	Items = {};
	Speech = new SpeechAPI('E');
	KeySets = getKeySets();
	TOMan = new TimeoutManager();
	console.assert(isdef(DB), 'NO DB!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	init_keyhandlers()
	initTable();
	initSidebar();
	initAux();
	initScore();
	loadUser(DEFAULTUSERNAME); //timit = new TimeIt('*timer', true);
	startUnit();
}
function startUnit() {
	renewTimer(G, 'time');
	U.session = {};
	if (START_IN_MENU) { START_IN_MENU = false; onClickTemple(); } else GC.startGame();
}












