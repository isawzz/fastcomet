//#region globals
const BLUE = '#4363d8';
const BLUEGREEN = '#004054';
const BROWN = '#96613d';
const GREEN = '#3cb44b';
const FIREBRICK = '#800000';
const LIGHTGREEN = '#afff45'; //'#bfef45';
const LIGHTBLUE = '#42d4f4';
const OLIVE = '#808000';
const ORANGE = '#f58231';
const PURPLE = '#911eb4';
const RED = '#e6194B';
const TEAL = '#469990';
const YELLOW = '#ffe119';
const YELLOW2 = '#fff620'; //?pink???
const YELLOW3 = '#ffed01';
const wamber = '#ffc107';
const waqua = '#00ffff';
const wblack = '#000000';
const wblue = '#2196f3';
const wbluegrey = '#607d8b';
const wbluegray = '#607d8b';
const wbrown = '#795548';
const wcyan = '#00bcd4';
const wdarkgrey = '#616161';
const wdeeporange = '#ff5722';
const wdeeppurple = '#673ab7';
const wgreen = '#4caf50';
const wgrey = '#9e9e9e';
const windigo = '#3f51b5';
const wkhaki = '#f0e68c';
const wlightblue = '#87ceeb';
const wlightgreen = '#8bc34a';
const wlight = '#f1f1f1';
const wlime = '#cddc39';
const worange = '#ff9800';
const wpaleblue = '#ddffff';
const wpalegreen = '#ddffdd';
const wpalered = '#ffdddd';
const wpaleyellow = '#ffffcc';
const wpink = '#e91e63';
const wpurple = '#9c27b0';
const wred = '#f44336';
const wsand = '#fdf5e6';
const wteal = '#009688';
const wwhite = '#ffffff';
const wyellow = '#ffeb3b';
const ColorList = ['lightgreen', 'lightblue', 'yellow', 'red', 'green', 'blue', 'purple', 'violet', 'lightyellow',
	'teal', 'orange', 'brown', 'olive', 'deepskyblue', 'deeppink', 'gold', 'black', 'white', 'grey'];
const ColorDict = {
	black: { c: 'black', E: 'black', D: 'schwarz' },
	blue: { c: 'blue', E: 'blue', D: 'blau' },
	BLUE: { c: '#4363d8', E: 'blue', D: 'blau' },
	BLUEGREEN: { c: BLUEGREEN, E: 'bluegreen', D: 'blaugrün' },
	blue1: { c: BLUE, E: 'blue', D: 'blau' },
	BROWN: { c: BROWN, E: 'brown', D: 'braun' },
	deepyellow: { c: YELLOW3, E: 'yellow', D: 'gelb' },
	FIREBRICK: { c: '#800000', E: 'darkred', D: 'rotbraun' },
	gold: { c: 'gold', E: 'gold', D: 'golden' },
	green: { c: 'green', E: 'green', D: 'grün' },
	GREEN: { c: '#3cb44b', E: 'green', D: 'grün' },
	green1: { c: GREEN, E: 'green', D: 'grün' },
	grey: { c: 'grey', E: 'grey', D: 'grau' },
	lightblue: { c: LIGHTBLUE, E: 'lightblue', D: 'hellblau' },
	LIGHTBLUE: { c: '#42d4f4', E: 'lightblue', D: 'hellblau' },
	lightgreen: { c: LIGHTGREEN, E: 'lightgreen', D: 'hellgrün' },
	LIGHTGREEN: { c: '#afff45', E: 'lightgreen', D: 'hellgrün' },
	lightyellow: { c: YELLOW2, E: 'lightyellow', D: 'gelb' },
	olive: { c: OLIVE, E: 'olive', D: 'oliv' },
	OLIVE: { c: '#808000', E: 'olive', D: 'oliv' },
	orange: { c: ORANGE, E: 'orange', D: 'orange' },
	ORANGE: { c: '#f58231', E: 'orange', D: 'orange' },
	pink: { c: 'deeppink', E: 'pink', D: 'rosa' },
	purple: { c: PURPLE, E: 'purple', D: 'lila' },
	PURPLE: { c: '#911eb4', E: 'purple', D: 'lila' },
	red: { c: 'red', E: 'red', D: 'rot' },
	RED: { c: '#e6194B', E: 'red', D: 'rot' },
	red1: { c: RED, E: 'red', D: 'rot' },
	skyblue: { c: 'deepskyblue', E: 'skyblue', D: 'himmelblau' },
	teal: { c: TEAL, E: 'teal', D: 'blaugrün' },
	TEAL: { c: '#469990', E: 'teal', D: 'blaugrün' },
	violet: { c: 'indigo', E: 'violet', D: 'violett' },
	white: { c: 'white', E: 'white', D: 'weiss' },
	yellow: { c: 'yellow', E: 'yellow', D: 'gelb' },
	yelloworange: { c: '#ffc300', E: 'yellow', D: 'gelb' },
	YELLOW: { c: '#ffe119', E: 'yellow', D: 'gelb' },
	YELLOW2: { c: YELLOW2, E: 'yellow', D: 'gelb' },
	yellow1: { c: YELLOW2, E: 'yellow', D: 'gelb' },
	YELLOW3: { c: YELLOW3, E: 'yellow', D: 'gelb' },
};
const PlayerColors = {
	red: '#D01013',
	blue: '#003399',
	green: '#58A813',
	orange: '#FF6600',
	yellow: '#FAD302',
	violet: '#55038C',
	pink: '#ED527A',
	beige: '#D99559',
	sky: '#049DD9',
	brown: '#A65F46',
	white: '#FFFFFF',
	lightblue: '#42d4f4',
	lightgreen: '#afff45',
};
const levelColors = [LIGHTGREEN, LIGHTBLUE, YELLOW, 'orange', RED,
	GREEN, BLUE, PURPLE, YELLOW2, 'deepskyblue', 'deeppink', //** MAXLEVEL 10 */
	TEAL, ORANGE, 'seagreen', FIREBRICK, OLIVE, '#ffd8b1', '#000075', '#a9a9a9', '#ffffff', '#000000', 'gold', 'orangered', 'skyblue', 'pink', 'palegreen', '#e6194B'];
const DD = {
	yellow: 'gelb', green: 'grün', blue: 'blau', red: 'rot', pink: 'rosa', orange: 'orange', black: 'schwarz',
	white: 'weiss', violet: 'violett', '1st': 'erste', '2nd': 'zweite', '3rd': 'dritte', '4th': 'vierte', '5th': 'fünfte',
	add: 'addiere', subtract: 'subtrahiere', multiply: 'mutipliziere', plus: 'plus', minus: 'minus', times: 'mal',
	'divided by': 'dividiert durch', excellent: 'sehr gut', very: 'sehr', good: 'gut',
	'to the previous number': 'zur vorhergehenden zahl',
	'from the previous number': 'von der vorhergehenden zahl',
	'multiply the previous number by': 'multipliziere die vorhergehende zahl mit',
	'divide the previous number by': 'dividiere die vorhergehende zahl durch',
	'the previous number': 'die vorhergehende zahl', is: 'ist', what: 'was', equals: 'ist gleich', enter: "tippe",
	'to the power of': 'hoch', or: 'oder', less: 'kleiner', greater: 'grösser', than: 'als', equal: 'gleich', and: 'und',
	not: 'nicht', click: 'click', press: 'tippe', quite: 'ziemlich', 'not quite': 'nicht ganz',
	say: 'sage', write: 'schreibe', complete: 'ergänze', 'unequal': 'ungleich', except: 'ausser', EXCEPT: 'AUSSER',
	number: 'Zahl', color: 'farbe', eliminate: 'eliminiere', all: 'alle', with: 'mit', true: 'wahr', false: 'falsch',
	build: 'bilde', count: 'zähle', 'the red dots': 'die roten Punkte',
};
const OPS = { //die muessen vals in settings.games[game] sein!
	'first': { cmd: 'add', link: 'to', wr: '+', sp: 'plus', f: (a, b) => (a + b), min: 20, max: 100 },
	'plus': { cmd: 'add', link: 'to', wr: '+', sp: 'plus', f: (a, b) => (a + b), min: 3, max: 30 },
	'minus': { cmd: 'subtract', link: 'from', wr: '-', sp: 'minus', f: (a, b) => (a - b), min: 1, max: 10 },
	'div': { cmd: 'divide', link: 'by', wr: ':', sp: 'divided by', f: (a, b) => (a / b), min: 2, max: 10 },
	'intdiv': { cmd: 'divide', link: 'by', wr: 'div', sp: 'divided by', f: (a, b) => (Math.floor(a / b)), min: 1, max: 10 },
	'mult': { cmd: 'multiply', link: 'by', wr: 'x', sp: 'times', f: (a, b) => (a * b), min: 2, max: 10 },
	'pow': { cmd: 'build', link: 'to the power of', wr: '^', sp: 'to the power of', f: (a, b) => (Math.pow(a, b)), min: 0, max: 20 },
	'mod': { cmd: 'build', link: 'modulo', wr: '%', sp: 'modulo', f: (a, b) => (a % b), min: 0, max: 20 },
	'l': { cmd: 'true or false?', link: 'less than', wr: '<', sp: 'less than', f: (a, b) => (a < b) },
	'g': { cmd: 'true or false?', link: 'greater than', wr: '>', sp: 'greater than', f: (a, b) => (a > b) },
	'leq': { cmd: 'true or false?', link: 'less or equal', wr: '<=', sp: 'less or equal', f: (a, b) => (a <= b) },
	'geq': { cmd: 'true or false?', link: 'greater or equal', wr: '>=', sp: 'greater or equal', f: (a, b) => (a >= b) },
	'eq': { cmd: 'true or false?', link: 'equal', wr: '=', sp: 'equal', f: (a, b) => (a == b) },
	'neq': { cmd: 'true or false?', link: 'unequal', wr: '#', sp: 'unequal', f: (a, b) => (a != b) },
	'and': { cmd: 'true or false?', link: 'and', wr: '&&', sp: 'and', f: (a, b) => (a && b) },
	'or': { cmd: 'true or false?', link: 'or', wr: '||', sp: 'or', f: (a, b) => (a || b) },
	'nand': { cmd: 'true or false?', link: 'nand', wr: 'nand', sp: 'nand', f: (a, b) => (!(a && b)) },
	'nor': { cmd: 'true or false?', link: 'nor', wr: 'nor', sp: 'nor', f: (a, b) => (!(a || b)) },
	'xor': { cmd: 'true or false?', link: 'xor', wr: 'xor', sp: 'xor', f: (a, b) => (a && !b || !a && b) },
}
const EnglishSentences = [
	'I like unscambling words',
	'it is a beautiful day',
	'you need to work harder',
	'sleep is important',
	'nobody is here',
	'I heard the bell ring',
	'I am going to sleep',
	'he just woke up',
	'he left a minute ago',
	'the cat stretched',
	'Jacob stood on his tiptoes',
	'the car turned around the corner',
	'Kelly twirled in circles',
	'she opened the door',
	'Aaron made a picture',
	'I am sorry',
	'I forgot to eat',
	'Gunter is a Microsoft employee',
	'it is raining',
	'Gunter is going to the store',
	'Felix loves Innovation',
	'Amanda likes playing video games',
	'let us take a walk',
	'Gunter is sleeping',
	'Tom got a new bike',
	'open the jar carefully',
	'read the directions',
	'do not cry',
	'use common sense',
	'make the best of things',
	'they drove to the store',
	['the children opened all the gifts', 'all the children opened all the gifts'],
	'the princesses are dancing gracefully',
	'let us share this cake',
	'the paper sat idle on the desk',
	'Misha walked his dog',
	'the library opens at ten',
	'we would love to go to the library',
	'I rinsed and dried the dishes',
	'Joe stood up and spoke to the crowd',
	'you are in the right place',
	'turn around',
	'take a left at the corner',
	'who am I',
	'who are you',
	'I love you',
	'where are you',
	'I am here',
	'never say never',
	'be quiet',
	'let us try to unscamble a longer sentence',
	'where did I put my keys',
	'how do you do',
	'come on in',
	'do not worry',
	'where are my glasses',
	'we are leaving',
	'there is no time',
	'nobody knows',
	'an apple is a fruit',
	'oranges smell lovely',
	'take a seat',
	'Tom has a bike',
	'Anna plays the flute',
	'Everybody wants to be happy',
	'life is so simple',
	'life is a dream',
	'who is the person sitting in the corner',
	'someone left his umbrella over there',
	'you need to make an appointment for next week',
	'would you like to go to the movies',
	'reading is great fun',
	['yesterday I spoke to my boss', 'I spoke to my boss yesterday'],
	'Max is spending every free minute at the gym',
	'my parent brought me up to always strive for excellence',
	['yesterday I started studying for my upcoming exams', 'I started studying for my upcoming exams yesterday'],
	['I am not afraid of the dark', 'of the dark I am not afraid'],
	['Nick still remembered the first time he drove a bike', 'Nick remembered still the first time he drove a bike'],
	'some people believe that the earth is flat',
	'I am starting to realize that not everybody thinks the same',
	['we are going to have fun today', 'today we are going to have fun'],
	['I will try to have fun today', 'today I will try to have fun'],
	'I am enjoying life as if it were an endless vacation',
	'she said hello to the little girl',
	'my name is not that hard to spell',
	'nobody is helping me with my homework',
	'I would like to become a software engineer',
	'my teacher has been supporting me a lot',
	['the world is full of fun things to do', 'the fun world is full of things to do'],
	['I learn something new every day', 'every day I learn something new'],
	['we cannot leave before noon', 'before noon we cannot leave'],
	['learning is the most enjoyable activity', 'the most enjoyable activity is learning', 'the learning activity is most enjoyable'],
	['my favorite sport is swimming', 'swimming is my favorite sport'],
	['they have two girls and a boy', 'they have a boy and two girls'],
	['nowadays most people have enough food on their table', 'most people have enough food on their table nowadays'],
	['Mary and Samantha arrived at the bus station three hours early', 'Samantha and Mary arrived at the bus station three hours early'],
	['I prefer strawberries over raspberries', 'I prefer raspberries over strawberries'],
	['it is never too late to learn something new', 'to learn something new it is never too late'],
	['I have not had dinner yet', 'I have not yet had dinner'],
	['always be as active as you can', 'be always as active as you can', 'be as active as you can always'],
	['I joined a zoom call a minute ago', 'a minute ago I joined a zoom call'],
	['my brother and I like skiing', 'I and my brother like skiing'],
	['I would like to eat an apple and an orange', 'I would like to eat an orange and an apple'],
	['the wheather is so nice today', 'today the wheather is so nice', 'so nice is the wheather today'],
	['math is the most fun subject of all'],
	['pick up the phone if you can', 'if you can pick up the phone'],
	['he was eating and talking', 'he was talking and eating'],
	['these food items are gluten-free', 'these gluten-free items are food', 'these items are gluten-free food'],
	['the cat and the dog ate', 'the dog and the cat ate'],
	['my parents and I went to watch a movie', 'I and my parents went to watch a movie'],
];
const GirlNames = ['Adrianna', 'Amanda', 'Ashley', 'Belinda', 'Cassandra', 'Charlene', 'Erica', 'Gabriela', 'Gudrun',
	'Jenny', 'Lana', 'Lillian', 'Martha', 'Maurita', 'Melissa', 'Micaela', 'Milda', 'Natalie', 'Natasha',
	'Nimble', 'Rebecca', 'Rhiannon', 'Sabine', 'Stacy'];
const BoyNames = ['Aaron', 'Ariel', 'Billy', 'Cayley', 'Erik',
	'Felix', 'Gunter', 'Gilbert', 'Henry', 'Jacob', 'Jaime', 'John', 'Leo',
	'Marshall', 'Matthew', 'Nathan',
	'Robert', 'Shad', 'Thomas', 'Tim', 'William'];
const UnicodeSymbols = {
	menu: '☰',
};
var PROJECTNAME = 'belinda';
var USELIVESERVER = false;
var START_IN_MENU = false;
var DEFAULTUSERNAME = 'gul';
var USE_LOCAL_STORAGE = true;
var CLEAR_LOCAL_STORAGE = false;
var USE_ADDONS = false;
var sent_audio = new Audio("../assets/sounds/message_sent.mp3");
var received_audio = new Audio("../assets/sounds/message_received.mp3");
var CURRENT_CHAT_USER = "";
var CURRENT_GAME = "";
var CURRENT_FEN = "";
var SEEN_STATUS = false;
var Daat = {};
var DA = {};
var Items = {};
var Session = { currentMenu: 'contacts' };
var FenPositionList;
var C52;
var Cinno;
var Syms;
var SymKeys;
var KeySets;
var Categories;
var ByGroupSubgroup;
var Dictionary;
var WordP; //, CatSets, SymbolDict, SInfo;
var DB;
var U;
var Userdata;
var Username;
var Serverdata;
var Live;
var G;
var Pictures;
var Goal
var Selected;
var Score;
var TO;
var TOMain;
var TOTrial;
var TOList;
var IsAnswerCorrect;
var QContextCounter = 0;
var uiActivated;
var aiActivated;
var auxOpen;
var GameTimer;
var STOPAUS = false;
var Settings;
var SettingsList;
var SettingsChanged;
var SelectedMenuKey; //var G, T, P, U, User, ????? , G...Game, T...Table, U...Userdata
var Players;
var PlayerOnTurn;
var GC;
var GameCounter;
var BestMinusScore = Infinity;
var BestMinusState;
var BestPlusScore = -Infinity;
var BestPlusState;
var F_END;
var F_MOVES;
var F_APPLYMOVE;
var F_UNDOMOVE;
var F_EVAL;
var DMAX;
var MAXIMIZER;
var MINIMIZER;
var SelectedMove;
var CANCEL_AI;
var DMM = {};
var timit;
var ShapeKeys = ['hex', 'hexF', 'tri', 'triDown', 'triLeft', 'triRight'];
var PolyClips = {
	hex: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
	test1: 'inset(50% 0% 100% 25% 100% 75% 50% 100% 0% 75% 0% 25% round 10px)',
	test0: 'inset(45% 0% 33% 10% round 10px)',
	hexagon: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
	hexF: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
	hexFlat: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
	hexflat: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
	tri: 'polygon(50% 0%, 100% 100%, 0% 100%)',
	triangle: 'polygon(50% 0%, 100% 100%, 0% 100%)',
	triUp: 'polygon(50% 0%, 100% 100%, 0% 100%)',
	triup: 'polygon(50% 0%, 100% 100%, 0% 100%)',
	triDown: 'polygon(0% 0%, 100% 0%, 50% 100%)',
	tridown: 'polygon(0% 0%, 100% 0%, 50% 100%)',
	triright: 'polygon(0% 0%, 100% 50%, 0% 100%)',
	triRight: 'polygon(0% 0%, 100% 50%, 0% 100%)',
	trileft: 'polygon(0% 50%, 100% 0%, 100% 100%)',
	triLeft: 'polygon(0% 50%, 100% 0%, 100% 100%)',
}
var ColorNames; //see base.js colors
var levelKeys = ['island', 'justice star', 'materials science', 'mayan pyramid', 'medieval gate',
	'great pyramid', 'meeple', 'smart', 'stone tower', 'trophy cup', 'viking helmet',
	'flower star', 'island', 'justice star', 'materials science', 'mayan pyramid',];
//#endregion globals

//#region base
const STYLE_PARAMS = {
	align: 'text-align',
	bg: 'background-color',
	fg: 'color',
	hgap: 'column-gap',
	vgap: 'row-gap',
	matop: 'margin-top',
	maleft: 'margin-left',
	mabottom: 'margin-bottom',
	maright: 'margin-right',
	patop: 'padding-top',
	paleft: 'padding-left',
	pabottom: 'padding-bottom',
	paright: 'padding-right',
	rounding: 'border-radius',
	w: 'width',
	h: 'height',
	wmin: 'min-width',
	hmin: 'min-height',
	wmax: 'max-width',
	hmax: 'max-height',
	fontSize: 'font-size',
	fz: 'font-size',
	family: 'font-family',
	weight: 'font-weight',
	z: 'z-index'
};
const _overwriteMerge = (destinationArray, sourceArray, options) => sourceArray
var ZMax = 0;
var MyEasing = 'cubic-bezier(1,-0.03,.86,.68)';
var SHAPEFUNCS = {
	'circle': agCircle,
	'hex': agHex,
	'rect': agRect,
}
var colorDict = null; //for color names, initialized when calling anyColorToStandardStyle first time
var DragElem = null; //is the clone of element from which drag started
var DDInfo = null;
var UIDCounter = 0;
var FRUIDCounter = -1;
class TimeIt {
	constructor(msg, showOutput = true) {
		this.showOutput = showOutput;
		this.init(msg);
	}
	getTotalTimeElapsed() {
		let tNew = new Date();
		let tDiffStart = tNew.getTime() - this.namedTimestamps.start.getTime();
		return tDiffStart;
	}
	tacit() { this.showOutput = false; }
	timeStamp(name) {
		let tNew = new Date(); //new Date().getTime() - this.t;
		let tDiff = tNew.getTime() - this.namedTimestamps.start.getTime();// this.t.getTime();
		if (this.showOutput) console.log('___', tDiff, 'msecs * to', name);
		this.t = tNew;
		this.namedTimestamps[name] = tNew;
	}
	reset() { this.init('timing start') }
	init(msg) {
		this.t = new Date();
		if (this.showOutput) console.log('___', msg);
		this.namedTimestamps = { start: this.t };
	}
	showSince(name, msg = 'now') {
		let tNew = new Date(); //new Date().getTime() - this.t;
		let tNamed = this.namedTimestamps[name];
		if (this.showOutput) if (!tNamed) { console.log(name, 'is not a timestamp!'); return; } //new Date().getTime() - this.t;
		let tDiff = tNew.getTime() - tNamed.getTime();
		if (this.showOutput) console.log('___', tDiff, 'msecs', name, 'to', msg);
		this.t = tNew;
	}
	format(t) { return '___' + t.getSeconds() + ':' + t.getMilliseconds(); }
	show(msg) { this.showTime(msg); }
	showTime(msg) {
		let tNew = new Date(); //new Date().getTime() - this.t;
		let tDiff = tNew.getTime() - this.t.getTime();
		let tDiffStart = tNew.getTime() - this.namedTimestamps.start.getTime();
		if (this.showOutput) console.log('___ ', tDiff, 'msecs to', msg, '(' + tDiffStart, 'total)');
		this.t = tNew;
	}
	start_of_cycle(msg) {
		this.init(msg);
	}
	end_of_cycle(msg) {
		let tNew = new Date(); //new Date().getTime() - this.t;
		let tDiff = tNew.getTime() - this.t.getTime();
		let tDiffStart = tNew.getTime() - this.namedTimestamps.start.getTime();
		if (this.showOutput) console.log('___ ' + tDiff + ' msecs', msg, 'to EOC (total: ' + tDiffStart + ')');
	}
}
function _cloneIfNecessary(value, optionsArgument) {
	var clone = optionsArgument && optionsArgument.clone === true
	return (clone && _isMergeableObject(value)) ? deepmerge(_emptyTarget(value), value, optionsArgument) : value
}
function _deepMerge(target, source, optionsArgument) {
	var array = Array.isArray(source);
	var options = optionsArgument || { arrayMerge: _defaultArrayMerge }
	var arrayMerge = options.arrayMerge || _defaultArrayMerge
	if (array) {
		return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : _cloneIfNecessary(source, optionsArgument)
	} else {
		return _mergeObject(target, source, optionsArgument)
	}
}
function _defaultArrayMerge(target, source, optionsArgument) {
	var destination = target.slice()
	source.forEach(function (e, i) {
		if (typeof destination[i] === 'undefined') { //el[i] nur in source
			destination[i] = _cloneIfNecessary(e, optionsArgument)
		} else if (_isMergeableObject(e)) { //el[i] in beidem
			destination[i] = deepmerge(target[i], e, optionsArgument)
		} else if (target.indexOf(e) === -1) { //el[i] nur in target
			destination.push(_cloneIfNecessary(e, optionsArgument))
		}
	})
	return destination
}
function _emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}
function _isMergeableObject(val) {
	var nonNullObject = val && typeof val === 'object'
	return nonNullObject
		&& Object.prototype.toString.call(val) !== '[object RegExp]'
		&& Object.prototype.toString.call(val) !== '[object Date]'
}
function _mergeObject(target, source, optionsArgument) {
	var destination = {}
	if (_isMergeableObject(target)) {
		Object.keys(target).forEach(function (key) {
			destination[key] = _cloneIfNecessary(target[key], optionsArgument)
		})
	}
	Object.keys(source).forEach(function (key) {
		if (!_isMergeableObject(source[key]) || !target[key]) {
			destination[key] = _cloneIfNecessary(source[key], optionsArgument)
		} else {
			destination[key] = _deepMerge(target[key], source[key], optionsArgument)
		}
	})
	return destination;
}
function addByKey(oNew, oOld, except) {
	for (const k in oNew) {
		let val = oNew[k];
		if (isdef(except) && except.includes(k) || !isNumber(val)) continue;
		oOld[k] = isdef(oOld[k]) ? oOld[k] + val : val;
	}
}
function addDDSource(source, isCopy = true, clearTarget = false) {
	DDInfo.sources.push(source);
	let d = iDiv(source);
	d.onmousedown = (ev) => ddStart(ev, source, isCopy, clearTarget);
}
function addDDTarget(target, isCopy = true, clearTarget = false) {
	DDInfo.targets.push(target);
	target.isCopy = isCopy;
	target.clearTarget = clearTarget;
}
function addIf(arr, el) {
	if (!arr.includes(el)) arr.push(el);
}
function addIfDict(key, val, dict) { if (!(key in dict)) { dict[key] = [val]; } }
function addKeydown(k, f) { if (nundef(DA.keydown)) DA.keydown = {}; DA.keydown[k] = f; }
function addKeys(ofrom, oto) { for (const k in ofrom) if (nundef(oto[k])) oto[k] = ofrom[k]; return oto; }
function addKeyup(k, f) {
	if (nundef(DA.keyup)) DA.keyup = {};
	DA.keyup[k] = f;
}
function addSimpleProps(ofrom, oto = {}) { for (const k in ofrom) { if (nundef(oto[k]) && isLiteral(k)) oto[k] = ofrom[k]; } return oto; }
function addToPool(pool, poolArr, perle, index) {
	let p = pool[index] = { key: perle.key, index: index };
	poolArr.push(index);
	return p;
}
function agCircle(g, sz) { let r = gEllipse(sz, sz); g.appendChild(r); return r; }
function agColoredShape(g, shape, w, h, color) {
	SHAPEFUNCS[shape](g, w, h);
	gBg(g, color);
}
function agEllipse(g, w, h) { let r = gEllipse(w, h); g.appendChild(r); return r; }
function agG(g) { let g1 = gG(); g.appendChild(g1); return g1; }
function agHex(g, w, h) { let pts = size2hex(w, h); return agPoly(g, pts); }
function agLine(g, x1, y1, x2, y2) { let r = gLine(x1, y1, x2, y2); g.appendChild(r); return r; }
function agPoly(g, pts) { let r = gPoly(pts); g.appendChild(r); return r; }
function agRect(g, w, h) { let r = gRect(w, h); g.appendChild(r); return r; }
function agShape(g, shape, w, h, color, rounding) {
	let sh = gShape(shape, w, h, color, rounding);
	g.appendChild(sh);
	return sh;
}
async function ajaxPostCors(url, data, type, handle_result) {
	data.data_type = type;
	var formData = new FormData();
	for (const k in data) {
		formData.append(k, data[k]);
	}
	let h = new Headers();
	h.append('Accept', 'application/text');
	var resp = await fetch(url, {
		method: 'POST',
		mode: 'cors', // no-cors, *cors, same-origin
		headers: h,
		body: formData,
	});
	let result = await resp.text();
	try {
		let jsonResult = JSON.parse(result);
		if (isdef(handle_result)) handle_result(jsonResult); //console.log('type',typeof result,'\nresult',result);
	} catch {
		if (isdef(handle_result)) handle_result({ message: result }); //, data_type: 'info'}); //console.log('type',typeof result,'\nresult',result);
	}
}
function ajaxSimple(method, url, callback) {
	var ajax = new XMLHttpRequest();
	ajax.onload = () => {
		if (ajax.status == 200 || ajax.readyState == 4) {
			if (isdef(callback)) callback(ajax);
		}
	}
	ajax.open(method, url, true); // true means data should be read asynchronously!
	ajax.send();
}
function allCond(arr, cond) { return forAll(arr, cond); }
function allElementsFromPoint(x, y) {
	var element, elements = [];
	var old_visibility = [];
	while (true) {
		element = document.elementFromPoint(x, y);
		if (!element || element === document.documentElement) {
			break;
		}
		elements.push(element);
		old_visibility.push(element.style.visibility);
		element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
	}
	for (var k = 0; k < elements.length; k++) {
		elements[k].style.visibility = old_visibility[k];
	}
	elements.reverse();
	return elements;
}
function allIntegers(s) {
	return s.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(v => {
		return +v;
	});
}
function allNumbers(s) {
	let m = s.match(/\-.\d+|\-\d+|\.\d+|\d+\.\d+|\d+\b|\d+(?=\w)/g);
	if (m) return m.map(v => Number(v)); else return null;
}
function alphaToHex(zero1) {
	zero1 = Math.round(zero1 * 100) / 100;
	var alpha = Math.round(zero1 * 255);
	var hex = (alpha + 0x10000)
		.toString(16)
		.substr(-2)
		.toUpperCase();
	var perc = Math.round(zero1 * 100);
	return hex;
} //ok
function aMove(d, dSource, dTarget, callback, offset, ms, easing, fade) {
	let b1 = getRect(dSource);
	let b2 = getRect(dTarget);
	if (nundef(offset)) offset = { x: 0, y: 0 };
	let dist = { x: b2.x - b1.x + offset.x, y: b2.y - b1.y + offset.y };
	d.style.zIndex = 100;
	let a = d.animate({ opacity: valf(fade, 1), transform: `translate(${dist.x}px,${dist.y}px)` }, { easing: valf(easing, 'EASE'), duration: ms });
	a.onfinish = () => { d.style.zIndex = iZMax(); if (isdef(callback)) callback(); };
}
function animateProperty(elem, prop, start, middle, end, msDuration) {
	let kflist = [];
	for (const v of [start, middle, end]) {
		let o = {};
		o[prop] = isString(v) || prop == 'opacity' ? v : '' + v + 'px';
		kflist.push(o);
	}
	elem.animate(kflist, { duration: msDuration });
}
function any(arr, cond) { return !isEmpty(arr.filter(cond)); }
function anyColorToStandardString(cAny, a, allowHsl = false) {
	if (Array.isArray(cAny)) {
		if (cAny.length < 3) {
			return randomHexColor();
		} else if (cAny.length == 3) {
			let r = cAny[0];
			let g = cAny[1];
			let b = cAny[2];
			return a == undefined || a == 1 ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`;
		}
	} else if (isString(cAny)) {
		if (cAny[0] == '#') {
			if (a == undefined) return cAny;
			cAny = cAny.substring(0, 7);
			return cAny + (a == 1 ? '' : alphaToHex(a));
		} else if (cAny[0] == 'r' && cAny[1] == 'g') {
			if (a == undefined) return cAny;
			if (cAny[3] == 'a') {
				if (a < 1) {
					return stringBeforeLast(cAny, ',') + ',' + a + ')';
				} else {
					let parts = cAny.split(',');
					let r = firstNumber(parts[0]);
					return 'rgb(' + r + ',' + parts[1] + ',' + parts[2] + ')';
				}
			} else {
				if (a < 1) {
					return 'rgba' + cAny.substring(3, cAny.length - 1) + ',' + a + ')';
				} else {
					return cAny;
				}
			}
		} else if (cAny[0] == 'h' && cAny[1] == 's') {
			if (allowHsl) {
				if (a == undefined) return cAny;
				if (cAny[3] == 'a') {
					if (a < 1) {
						return stringBeforeLast(cAny, ',') + ',' + a + ')';
					} else {
						let parts = cAny.split(',');
						let r = firstNumber(parts[0]);
						return 'hsl(' + r + ',' + parts[1] + ',' + parts[2] + ')';
					}
				} else {
					return a == 1 ? cAny : 'hsla' + cAny.substring(3, cAny.length - 1) + ',' + a + ')'; //cAny.substring(0,cAny.length-1) + ',' + a + ')';
				}
			} else {
				if (cAny[3] == 'a') {
					cAny = HSLAToRGBA(cAny);
				} else {
					cAny = HSLToRGB(cAny);
				}
				return anyColorToStandardString(cAny, a, allowHsl);
			}
		} else {
			let newcAny = colorNameToHex(cAny);
			return anyColorToStandardString(newcAny, a, allowHsl);
		}
	} else if (typeof cAny == 'object') {
		if ('h' in cAny) {
			let hslString = '';
			if (a == undefined || a == 1) {
				hslString = `hsl(${cAny.h},${Math.round(cAny.s <= 1.0 ? cAny.s * 100 : cAny.s)}%,${Math.round(cAny.l <= 1.0 ? cAny.l * 100 : cAny.l)}%)`;
			} else {
				hslString = `hsla(${cAny.h},${Math.round(cAny.s <= 1.0 ? cAny.s * 100 : cAny.s)}%,${Math.round(cAny.l <= 1.0 ? cAny.l * 100 : cAny.l)}%,${a})`;
			}
			if (allowHsl) {
				return hslString;
			} else {
				return anyColorToStandardString(hslString, a, allowHsl);
			}
		} else if ('r' in cAny) {
			if (a !== undefined && a < 1) {
				return `rgba(${cAny.r},${cAny.g},${cAny.b},${a})`;
			} else {
				return `rgb(${cAny.r},${cAny.g},${cAny.b})`;
			}
		}
	}
} //ok
function anyStartsWith(arr, prefix) { return any(arr, el => startsWith(el, prefix)); }
function aRotate(d, ms) { return d.animate({ transform: `rotate(360deg)` }, ms); }
function aRotateAccel(d, ms) { return d.animate({ transform: `rotate(1200deg)` }, { easing: 'cubic-bezier(.72, 0, 1, 1)', duration: ms }); }
function arrAdd(arr, elist) { for (const el of elist) arr.push(el); return arr; }
function arrChildren(elem) { return [...elem.children]; }
function arrCount(arr, func) { let filt = arr.filter(func); return filt.length; }
function arrCreate(n, func) { let res = []; for (let i = 0; i < n; i++) { res.push(func(i)); } return res; }
function arrCycle(arr, count) { return arrRotate(arr, count); }
function arrFirst(arr) { return arr.length > 0 ? arr[0] : null; }
function arrFirstOfLast(arr) { if (arr.length > 0) { let l = arrLast(arr); return isList(l) ? arrFirst(l) : null; } else return null; }
function arrFlatten(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			res.push(arr[i][j]);
		}
	}
	return res;
}
function arrFromIndex(arr, i) { return arr.slice(i); }
function arrFromTo(arr, iFrom, iTo) { return takeFromTo(arr, iFrom, iTo); }
function arrIndices(arr, func) {
	let indices = [];
	for (let i = 0; i < arr.length; i++) { if (func(arr[i])) indices.push(i); }
	return indices;
}
function arrLast(arr) { return arr.length > 0 ? arr[arr.length - 1] : null; }
function arrLastOfLast(arr) { if (arr.length > 0) { let l = arrLast(arr); return isList(l) ? arrLast(l) : null; } else return null; }
function arrMax(arr) { return arr.reduce((m, n) => Math.max(m, n)); }
function arrMin(arr) { return arr.reduce((m, n) => Math.min(m, n)); }
function arrMinMax(arr, func) {
	if (nundef(func)) func = x => x;
	let min = func(arr[0]), max = func(arr[0]), imin = 0, imax = 0;
	for (let i = 1, len = arr.length; i < len; i++) {
		let v = func(arr[i]);
		if (v < min) {
			min = v; imin = i;
		} else if (v > max) {
			max = v; imax = i;
		}
	}
	return { min: min, imin: imin, max: max, imax: imax };
}
function arrMinus(a, b) { let res = a.filter(x => !b.includes(x)); return res; }
function arrNoDuplicates(arr) {
	let di = {};
	let arrNew = [];
	for (const el of arr) {
		if (!isLiteral(el)) continue;
		if (isdef(di[el])) continue;
		di[el] = true;
		arrNew.push(el);
	}
	return arrNew;
}
function arrPairs(a) {
	let res = [];
	for (let i = 0; i < a.length; i++) {
		for (let j = i + 1; j < a.length; j++) {
			res.push([a[i], a[j]]);
		}
	}
	return res;
}
function arrPlus(a, b) { let res = a.concat(b); return res; }
function arrRange(from = 1, to = 10, step = 1) { let res = []; for (let i = from; i <= to; i += step)res.push(i); return res; }
function arrReplaceAt(arr, index, val, inPlace = true) { return inPlace ? arrReplaceAtInPlace(arr, index, val) : arrReplaceAtCopy(arr, index, val); }
function arrReplaceAtCopy(arr, index, val) {
	let res = new Array();
	for (let i = 0; i < arr.length; i++) {
		if (i == index) res[i] = val; else res[i] = arr[i];
	}
	return res;
}
function arrReplaceAtInPlace(arr, index, val) { arr[index] = val; }
function arrReverse(arr) { return arr.reverse(); }
function arrRotate(arr, count) {
	var unshift = Array.prototype.unshift,
		splice = Array.prototype.splice;
	var len = arr.length >>> 0, count = count >> 0;
	let arr1 = jsCopy(arr);
	unshift.apply(arr1, splice.call(arr1, count % len, len));
	return arr1;
}
function arrSplitByIndices(arr, indices) {
	let [a1, a2] = [[], jsCopy(arr)];
	for (let i = 0; i < indices.length; i++) {
		let el = arr[indices[i]];
		a1.push(el);
		removeInPlace(a2, el);
	}
	return [a1, a2];
}
function arrString(arr, func) {
	if (isEmpty(arr)) return '[]';
	let s = '[';
	for (const el of arr) {
		if (isList(el)) s += arrString(el, func) + ','; else s += (isdef(func) ? func(el) : el) + ',';
	}
	s = s.substring(0, s.length - 1);
	s += ']';
	return s;
}
function arrSum(arr, props) { if (!isList(props)) props = [props]; return arr.reduce((a, b) => a + (lookup(b, props) || 0), 0); }
function arrSwap(arr, i, j) { let h = arr[i]; arr[i] = arr[j]; arr[j] = h; }
function arrSwap2d(arr, r1, c1, r2, c2) { let h = arr[r1][c1]; arr[r1][c1] = arr[r2][c2]; arr[r2][c2] = h; }
function arrTail(arr) { return arr.slice(1); }
function arrTake(arr, n) { return takeFromStart(arr, n); }
function arrTakeFromEnd(arr, n) {
	if (arr.length <= n) return arr.map(x => x); else return arr.slice(arr.length - n);
}
function arrTakeFromTo(arr, a, b) { return takeFromTo(arr, a, b); }
function arrWithout(a, b) { return arrMinus(a, b); }
function aSvg(dParent) {
	if (!dParent.style.position) dParent.style.position = 'relative';
	let svg1 = gSvg();
	svg1.setAttribute('width', '100%');
	svg1.setAttribute('height', '100%');
	let style = 'margin:0;padding:0;position:absolute;top:0px;left:0px;';
	svg1.setAttribute('style', style);
	dParent.appendChild(svg1);
	return svg1;
}
function aSvgg(dParent, originInCenter = true) {
	if (!dParent.style.position) dParent.style.position = 'relative';
	let svg1 = gSvg();
	svg1.setAttribute('width', '100%');
	svg1.setAttribute('height', '100%');
	let style = 'margin:0;padding:0;position:absolute;top:0px;left:0px;';
	svg1.setAttribute('style', style);
	dParent.appendChild(svg1);
	let g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	svg1.appendChild(g1);
	if (originInCenter) { g1.style.transform = "translate(50%, 50%)"; } //works!
	return g1;
}
function aTranslateBy(d, x, y, ms) { return d.animate({ transform: `translate(${x}px,${y}px)` }, ms); }// {easing:'cubic-bezier(1,-0.03,.27,1)',duration:ms}); }
function aTranslateFadeBy(d, x, y, ms) { return d.animate({ opacity: .5, transform: `translate(${x}px,${y}px)` }, { easing: MyEasing, duration: ms }); }
function bestContrastingColor(color, colorlist) {
	let contrast = 0;
	let result = null;
	let rgb = colorRGB(color, true);
	rgb = [rgb.r, rgb.g, rgb.b];
	for (c1 of colorlist) {
		let x = colorRGB(c1, true)
		x = [x.r, x.g, x.b];
		let c = getContrast(rgb, x);
		if (c > contrast) { contrast = c; result = c1; }
	}
	return result;
}
function buildNewSyms() {
	let newSyms = {};
	for (const k of KeySets.all) {
		let info = Syms[k];
		console.log(info)
		delete info.w;
		delete info.h;
		let old = symbolDict[k];
		console.log('old symbol:', old);
		if (isdef(old)) {
			addIf(info.cats, old.group);
			addIf(info.cats, old.subgroups);
		}
		newSyms[k] = Syms[k];
	}
	downloadAsYaml(newSyms, 'newSyms')
}
function capitalize(s) {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
}
function cartesian(...a) { return a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat()))); }
function choose(arr, n, exceptIndices) {
	var result = [];
	var len = arr.length;
	if (n >= arr.length) return arr;
	var taken = new Array(len);
	if (isdef(exceptIndices) && exceptIndices.length < len - n) {
		for (const i of exceptIndices) if (i >= 0 && i <= len) taken[i] = true;
	}
	if (n > len) n = len;
	while (result.length < n) {
		var iRandom = Math.floor(Math.random() * len);
		while (taken[iRandom]) { iRandom += 1; if (iRandom >= len) iRandom = 0; }
		result.push(arr[iRandom]);
		taken[iRandom] = true;
	}
	return result;
}
function chooseKeys(dict, n, except) { let keys = Object.keys(dict); let ind = except.map(x => keys.indexOf(x)); return choose(keys, n, ind); }
function chooseRandom(arr, condFunc = null) {
	let len = arr.length;
	if (condFunc) {
		let best = arr.filter(condFunc);
		if (!isEmpty(best)) return chooseRandom(best);
	}
	let idx = Math.floor(Math.random() * len);
	return arr[idx];
}
function classByName(name) { return eval(name); }
function clearElement(elem) {
	if (isString(elem)) elem = document.getElementById(elem);
	if (window.jQuery == undefined) { elem.innerHTML = ''; return elem; }
	while (elem.firstChild) {
		$(elem.firstChild).remove();
	}
	return elem;
}
function coin(percent = 50) {
	let r = Math.random();
	r *= 100;
	return r < percent;
}
function collectPropFromCss(prop) {
	const styles = document.styleSheets;
	let cssArr = [...styles[0].cssRules].map(x => ({
		class: x.selectorText,
		color: rgbToHex(x.style[prop]),
	}));
	return cssArr;
}
function colorBlend(zero1, c0, c1, log = true) {
	c0 = anyColorToStandardString(c0);
	c1 = anyColorToStandardString(c1);
	return pSBC(zero1, c0, c1, log);
} //ok
function colorDarker(c, zero1 = .8, log = true) {
	c = anyColorToStandardString(c);
	return pSBC(-zero1, c, undefined, !log);
} //ok
function colorHex(cAny) {
	let c = anyColorToStandardString(cAny);
	if (c[0] == '#') {
		return c;
	} else {
		let res = pSBC(0, c, 'c');
		return res;
	}
} //ok
function colorHSL(cAny, asObject = false) {
	let res = anyColorToStandardString(cAny, undefined, true);
	let shsl = res;
	if (res[0] == '#') {
		if (res.length == 9) {
			shsl = hexAToHSLA(res);
		} else if (res.length == 7) {
			shsl = hexToHSL(res);
		}
	} else if (res[0] == 'r') {
		if (res[3] == 'a') {
			shsl = RGBAToHSLA(res);
		} else {
			shsl = RGBToHSL(res);
		}
	}
	let n = allNumbers(shsl);
	if (asObject) {
		return { h: n[0], s: n[1] / 100, l: n[2] / 100, a: n.length > 3 ? n[3] : 1 };
	} else {
		return shsl;
	}
} //ok
function colorHSLBuild(hue, sat = 100, lum = 50) { let result = "hsl(" + hue + ',' + sat + '%,' + lum + '%)'; return result; }
function colorHue(cAny) {
	let hsl = colorHSL(cAny, true);
	return hsl.h;
} //ok
function colorIdealText(bg, grayPreferred = false) {
	let rgb = colorRGB(bg, true);
	const nThreshold = 105; //40; //105;
	let r = rgb.r;
	let g = rgb.g;
	let b = rgb.b;
	var bgDelta = r * 0.299 + g * 0.587 + b * 0.114;
	var foreColor = 255 - bgDelta < nThreshold ? 'black' : 'white';
	if (grayPreferred) foreColor = 255 - bgDelta < nThreshold ? 'dimgray' : 'snow';
	return foreColor;
}
function colorLighter(c, zero1 = .2, log = true) {
	c = anyColorToStandardString(c);
	return pSBC(zero1, c, undefined, !log);
} //ok
function colorNameToHex(cName) { let key = cName.toLowerCase(); ensureColorNames(); return key in ColorNames ? ColorNames[key] : randomHexColor(); } //ok
function colorPalShade(color) {
	let res = [];
	for (let frac = -0.8; frac <= 0.8; frac += 0.2) {
		let c = pSBC(frac, color, undefined, true); //colorShade(frac,color);
		res.push(c);
	}
	return res;
}
function colorPalShadeX(color, n) {
	let res = [];
	let step = 1.6 / (n - 1);
	for (let frac = -0.8; frac <= 0.8; frac += step) { //0.2) {
		let c = pSBC(frac, color, undefined, true); //colorShade(frac,color);
		res.push(c);
	}
	return res;
}
function colorRGB(cAny, asObject = false) {
	let res = anyColorToStandardString(cAny);
	let srgb = res;
	if (res[0] == '#') {
		srgb = pSBC(0, res, 'c');
	}
	let n = allNumbers(srgb);
	if (asObject) {
		return { r: n[0], g: n[1], b: n[2], a: n.length > 3 ? n[3] : 1 };
	} else {
		return srgb;
	}
} //ok
function colorShade(plusMinus1, color, log = true) {
	let c = anyColorToStandardString(color);
	return pSBC(plusMinus1, c, undefined, !log);
} //ok
function colorTrans(cAny, alpha = 0.5) {
	return anyColorToStandardString(cAny, alpha);
}
function computeColor(c) { return (c == 'random') ? randomColor() : c; }
function computeColorX(c) {
	let res = c;
	if (isList(c)) return chooseRandom(c);
	else if (isString(c) && startsWith(c, 'rand')) {
		res = randomColor();
		let spec = c.substring(4);
		if (isdef(window['color' + spec])) {
			res = window['color' + spec](res);
		}
	}
	return res;
}
function contains(s, sSub) { return s.toLowerCase().includes(sSub.toLowerCase()); }
function convertUmlaute(w) {
	w = replaceAll(w, 'ue', 'ü');
	w = replaceAll(w, 'ae', 'ä');
	w = replaceAll(w, 'oe', 'ö');
	w = replaceAll(w, 'UE', 'Ü');
	w = replaceAll(w, 'AE', 'Ä');
	w = replaceAll(w, 'OE', 'Ö');
	w = replaceAll(w, 'ß', 'ss');
	return w;
}
function copyKeys(ofrom, oto, except = {}, only) {
	let keys = isdef(only) ? only : Object.keys(ofrom);
	for (const k of keys) {
		if (isdef(except[k])) continue;
		oto[k] = ofrom[k];
	}
}
function copySimpleProps(ofrom, oto = {}) { for (const k in ofrom) { if (isLiteral(k)) oto[k] = ofrom[k]; } return oto; }
function correctPolys(polys, approx = 10) {
	let clusters = [];
	for (const p of polys) {
		for (const pt of p) {
			let found = false;
			for (const cl of clusters) {
				for (const v of cl) {
					let dx = Math.abs(v.x - pt.x);
					let dy = Math.abs(v.y - pt.y);
					if (dx < approx && dy < approx) {
						cl.push(pt);
						found = true;
						break;
					}
				}
				if (found) break;
			}
			if (!found) {
				clusters.push([pt]);
			}
		}
	}
	let vertices = [];
	for (const cl of clusters) {
		let sumx = 0;
		let sumy = 0;
		let len = cl.length;
		for (const pt of cl) {
			sumx += pt.x;
			sumy += pt.y;
		}
		vertices.push({ x: Math.round(sumx / len), y: Math.round(sumy / len) });
	}
	for (const p of polys) {
		for (const pt of p) {
			let found = false;
			for (const v of vertices) {
				let dx = Math.abs(v.x - pt.x);
				let dy = Math.abs(v.y - pt.y);
				if (dx < approx && dy < approx) {
					if (dx != 0 || dy != 0) {
						pt.x = v.x;
						pt.y = v.y;
					}
					found = true;
				}
				if (found) break;
			}
			if (!found) {
				error('point not found in vertices!!! ' + pt.x + ' ' + pt.y);
			}
		}
	}
	return vertices;
}
function createClassByName(name, ...a) { var c = eval(name); return new c(...a); }
function createElementFromHtml(s) { return createElementFromHTML(s); }
function createElementFromHTML(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();// '<div>halloooooooooooooo</div>';// htmlString.trim();
	return div.firstChild;
}
function createKeyIndex(di, prop) {
	let res = {};
	for (const k in di) {
		res[di[k][prop]] = k;
	}
	return res;
}
function createServerBoard(layout, filename, rows, cols) {
	let sz = 100;
	return { filename: 'brett10', layout: 'hex', cells: { w: 100, h: 120, wgap: 10, hgap: 10 } };
}
function createServerPoolKeys(perlenDict, settings = {}) { return getRandomPerlenKeys(perlenDict, valf(settings.numPool, 20)); }
function csv2list(allText, hasHeadings = true) {
	var numHeadings = 11;  // or however many elements there are in each row
	var allTextLines = allText.split(/\r\n|\n/);
	var headings = allTextLines[0].split(',');
	numHeadings = headings.length;
	let entries = allTextLines.splice(1);
	var records = [];
	for (const e of entries) {
		let o = {};
		let values = e.split(',');
		for (let i = 0; i < numHeadings; i++) {
			let k = headings[i];
			o[k] = values[i];
		}
		records.push(o);
	}
	return records;
}
function ddStart(ev, source, isCopy = true, clearTarget = false) {
	if (!canAct() || isdef(DDInfo.dragStartHandler) && !DDInfo.dragStartHandler(source)) return;
	ev.preventDefault();
	ev.stopPropagation();
	DDInfo.source = source;
	let d = iDiv(source);
	var clone = DragElem = DDInfo.clone = d.cloneNode(true);
	clone.isCopy = isCopy;
	clone.clearTarget = clearTarget;
	mAppend(document.body, clone);//mClass(clone, 'letter')
	mClass(clone, 'dragelem');//der clone muss class 'dragelem' sein
	mStyle(clone, { left: ev.clientX - ev.offsetX, top: ev.clientY - ev.offsetY });//der clone wird richtig plaziert
	DDInfo.dragOffset = clone.drag = { offsetX: ev.offsetX, offsetY: ev.offsetY };
	document.body.onmousemove = onMovingCloneAround;
	document.body.onmouseup = onReleaseClone;// ev=>console.log('mouse up')
}
function diContent(item) { return isdef(item.live) ? item.live.dContent : null; }
function dict2list(d, keyName = 'id') {
	let res = [];
	for (const key in d) {
		let val = d[key];
		let o;
		if (isDict(val)) { o = jsCopy(val); } else { o = { value: val }; }
		o[keyName] = key;
		res.push(o);
	}
	return res;
}
function dictOrListToString(x, ifDict = 'keys') {
	let lst = x;
	if (isList(lst) && !isEmpty(lst)) { return lst.join(' '); }
	else if (isDict(lst)) {
		return ifDict == 'keys' ? Object.keys(lst).join(' ')
			: ifDict == 'values' ? Object.keys(lst).join(' ')
				: Object.entries(lst).join(' ');
	}
	else return null;
}
function dictToKeyList(x) { return Object.keys(lst).join(' '); }
function dictToKVList(x) { return Object.entries(lst).join(' '); }
function dictToValueList(x) { return Object.values(lst).join(' '); }
function diMessage(item) { return isdef(item.live) ? item.live.dMessage : null; }
function distance(x1, y1, x2, y2) { return Math.sqrt(dSquare({ x: x1, y: y1 }, { x: x2, y: y2 })); }
function diTitle(item) { return isdef(item.live) ? item.live.dTitle : null; }
function divInt(a, b) { return Math.trunc(a / b); }
function downloadAsText(s, filename, ext = 'txt') {
	downloadTextFile(s, filename, ext);
}
function downloadAsYaml(o, filename) {
	let y = jsonToYaml(o);
	downloadTextFile(y, filename, 'yaml');
}
function downloadTextFile(s, filenameNoExt, ext = 'txt') {
	saveFileAtClient(
		filenameNoExt + "." + ext,
		"data:application/text",
		new Blob([s], { type: "" }));
}
function drawFlatHex(dParent, styles, classes, sizing) {
	if (nundef(styles)) styles = { w: 100, h: 100, bg: 'blue' };
	if (nundef(classes)) classes = ['frameOnHover'];
	if (nundef(sizing)) sizing = { hgrow: true, wgrow: true };
	let d = mDiv(dParent, styles, null, null, classes, sizing);
	mStyle(d, { 'clip-path': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' });
	return d;
}
function drawHex(dParent, styles, classes, sizing) {
	if (nundef(styles)) styles = { w: 100, h: 100, bg: 'blue' };
	if (nundef(classes)) classes = ['frameOnHover'];
	if (nundef(sizing)) sizing = { hgrow: true, wgrow: true };
	let d = mDiv(dParent, styles, null, null, classes, sizing);
	mStyle(d, { 'clip-path': 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' });
	return d;
}
function drawPlainCircle(c) {
	let item = mPic('heart', dMain, { fz: 8, bg: 'red', rounding: '50%', padding: 1 });
	mPos(iDiv(item), c.x, c.y);
	return item;
}
function drawShape(key, dParent, styles, classes, sizing) {
	if (nundef(styles)) styles = { w: 96, h: 96, bg: 'random' };
	if (nundef(classes)) classes = ['superhover'];
	if (nundef(sizing)) sizing = { hgrow: true, wgrow: true };
	let d = mDiv(dParent, styles, null, null, classes, sizing);
	mStyle(d, { 'clip-path': PolyClips[key] });
	return d;
}
function drawSym(sym, c) {
	let item = mPic(sym, dMain, { fz: 25, bg: 'skyblue', rounding: '50%', padding: 4 });
	mPos(iDiv(item), c.x, c.y);
	return item;
}
function drawText(text, c) {
	let item = mText(text, dMain, { fz: 16, bg: 'skyblue', rounding: '50%', padding: 4 });
	mPos(iDiv(item), c.x, c.y);
	return item;
}
function drawTriangle(dParent, styles, classes, sizing) {
	if (nundef(styles)) styles = { w: 100, h: 100, bg: 'blue' };
	if (nundef(classes)) classes = ['frameOnHover'];
	if (nundef(sizing)) sizing = { hgrow: true, wgrow: true };
	let d = mDiv(dParent, styles, null, null, classes, sizing);
	mStyle(d, { 'clip-path': 'polygon(50% 0%, 100% 100%, 0% 100%)' });
	return d;
}
function dSquare(pos1, pos2) {
	let dx = pos1.x - pos2.x;
	dx *= dx;
	let dy = pos1.y - pos2.y;
	dy *= dy;
	return dx + dy;
}
function enableDD(sources, targets, dropHandler, isCopy, clearTarget, dragStartHandler) {
	DDInfo = { sources: sources, targets: targets, dropHandler: dropHandler, dragStartHandler };
	let sourceDivs = sources.map(x => iDiv(x));
	for (let i = 0; i < sources.length; i++) {
		let source = sources[i];
		let d = sourceDivs[i];
		d.onmousedown = (ev) => ddStart(ev, source, isCopy, clearTarget);
	}
}
function endsWith(s, sSub) { let i = s.indexOf(sSub); return i >= 0 && i == s.length - sSub.length; }
function ensureColorNames() {
	if (isdef(ColorNames)) return;
	ColorNames = {};
	let names = getColorNames();
	let hexes = getColorHexes();
	for (let i = 0; i < names.length; i++) {
		ColorNames[names[i].toLowerCase()] = '#' + hexes[i];
	}
}
function ensureKeys(o, def) {
	addKeys(def, o);
}
function errlog() { console.log('ERROR!', ...arguments); }
function evToClass(ev, className) {
	let elem = findParentWithClass(className);
	return elem;
}
function evToClosestId(ev) {
	let elem = findParentWithId(ev.target);
	return elem.id;
}
function evToId(ev) {
	let elem = findParentWithId(ev.target);
	return elem.id;
}
function evToProp(ev, prop) {
	let x = ev.target;
	while (isdef(x) && nundef(x.getAttribute(prop))) x = x.parentNode;
	return isdef(x) ? x.getAttribute(prop) : null;
}
function extendRect(r4) { r4.l = r4.x; r4.t = r4.y; r4.r = r4.x + r4.w; r4.b = r4.t + r4.h; }
function extendWidth(w) { return replaceEvery(w, 'w', 2); }
function extractColorsFromCss() {
	let arr = collectPropFromCss('background-color');
	var di = {};
	for (const o of arr) {
		let sarr = splitAtAnyOf(o.class, ' .-:,');
		let sColor = null;
		for (const w of sarr) {
			if (['w3', 'text', 'hover', 'border'].includes(w)) continue;
			sColor = w;
			break;
		}
		if (sColor && o.color) {
			di[sColor] = o.color; //"'" + o.color + "'"; //'hallo'; //o.color.toString();
		}
	}
	return di;
}
async function fetch_wrapper(url) { return await fetch(url); }
function filterByKey(o, keyString, exceptString) {
	let keys;
	if (isdef(keyString)) keys = keyString.split(',');
	console.log('keys', keys);
	let result = {};
	for (const k of keys) {
		if (isdef(o[k])) result[k] = o[k];
	}
	return result;
}
function filterByLength(w, min, max, allowSpaces = false) { return w.length <= max && w.length >= min && (allowSpaces || !w.includes(' ')); }
function filterDistinctLetters(s) {
	let arr = [];
	for (let i = 0; i < s.length; i++) {
		let ch = s[i];
		if (isLetter(ch) && !arr.includes(ch)) arr.push(ch);
	}
	return arr;
}
function findAncestorElemOfType(el, type) {
	while (el) {
		let t = getTypeOf(el);
		if (t == type) break;
		el = el.parentNode;
	}
	return el;
}
function findAncestorElemWithParentOfType(el, type) {
	while (el && el.parentNode) {
		let t = getTypeOf(el);
		let tParent = getTypeOf(el.parentNode);
		if (tParent == type) break;
		el = el.parentNode;
	}
	return el;
}
function findChildOfType(type, parentElem) {
	let children = arrChildren(parentElem);
	for (const ch of children) {
		if (getTypeOf(ch) == type) return ch;
	}
	return null;
}
function findChildrenOfType(type, parentElem) {
	let children = arrChildren(parentElem);
	let res = [];
	for (const ch of children) {
		if (getTypeOf(ch) == type) res.push(ch);
	}
	return res;
}
function findChildWithClass(className, parentElem) {
	testHelpers(parentElem);
	let children = arrChildren(parentElem);
	for (const ch of children) {
		if (ch.classList.includes(className)) return ch;
	}
	return null;
}
function findChildWithId(id, parentElem) {
	testHelpers(parentElem);
	let children = arrChildren(parentElem);
	for (const ch of children) {
		if (ch.id == id) return ch;
	}
	return null;
}
function findCommonPrefix(s1, s2) {
	let i = 0;
	let res = '';
	while (i < s1.length && i < s2.length) {
		if (s1[i] != s2[i]) break; else res += s1[i];
		i += 1;
	}
	return res;
}
function findDescendantWithId(id, parent) {
	if (parent.id == id) return parent;
	let children = arrChildren(parent);
	if (isEmpty(children)) return null;
	for (const ch of children) {
		let res = findDescendantWithId(id, ch);
		if (res) return res;
	}
	return null;
}
function findLongestWord(arr) { return arr[arrMinMax(arr, x => x.length).imax]; }
function findParentWithClass(elem, className) { while (elem && !mHasClass(elem, className)) { elem = elem.parentNode; } return elem; }
function findParentWithId(elem) { while (elem && !elem.id) { elem = elem.parentNode; } return elem; }
function fireClick(node) {
	if (document.createEvent) {
		var evt = document.createEvent('MouseEvents');
		evt.initEvent('click', true, false);
		node.dispatchEvent(evt);
	} else if (document.createEventObject) {
		node.fireEvent('onclick');
	} else if (typeof node.onclick == 'function') {
		node.onclick();
	}
}
function fireKey(k, { control, alt, shift } = {}) {
	console.log('fireKey called!' + document.createEvent)
	if (document.createEvent) {
		console.log('fireKey: createEvent and node.dispatchEvent exist!!!', k, control, alt, shift);
		window.dispatchEvent(new KeyboardEvent('keypress', { key: '+', ctrlKey: true }));
	} else if (document.createEventObject) {
		console.log('fireClick: createEventObject and node.fireEvent exist!!!', node)
		node.fireEvent('onclick');
	} else if (typeof node.onclick == 'function') {
		console.log('fireClick: node.onclick exists!!!', node)
		node.onclick();
	}
}
function fireWheel(node) {
	if (document.createEvent) {
		var evt = document.createEvent('MouseEvents');
		evt.initEvent('wheel', true, false);
		console.log('fireClick: createEvent and node.dispatchEvent exist!!!', node)
		node.dispatchEvent(evt);
	} else if (document.createEventObject) {
		console.log('fireClick: createEventObject and node.fireEvent exist!!!', node)
		node.fireEvent('onclick');
	} else if (typeof node.onclick == 'function') {
		console.log('fireClick: node.onclick exists!!!', node)
		node.onclick();
	}
}
function firstCond(arr, func) {
	if (nundef(arr)) return null;
	for (const a of arr) {
		if (func(a)) return a;
	}
	return null;
}
function firstCondDict(dict, func) {
	for (const k in dict) { if (func(dict[k])) return k; }
	return null;
}
function firstCondDictKey() { return firstCondDictKeys(...arguments); }
function firstCondDictKeys(dict, func) {
	for (const k in dict) { if (func(k)) return k; }
	return null;
}
function firstNCond(n, arr, func) {
	if (nundef(arr)) return [];
	let result = [];
	let cnt = 0;
	for (const a of arr) {
		cnt += 1; if (cnt > n) break;
		if (func(a)) result.push(a);
	}
	return result;
}
function firstNumber(s) {
	if (s) {
		let m = s.match(/-?\d+/);
		if (m) {
			let sh = m.shift();
			if (sh) { return Number(sh); }
		}
	}
	return null;
}
function fisherYates(array) {
	var rnd, temp;
	for (var i = array.length - 1; i; i--) {
		rnd = Math.random() * i | 0;
		temp = array[i];
		array[i] = array[rnd];
		array[rnd] = temp;
	}
	return array;
}
function forAll(arr, func) { for (const a of arr) if (!func(a)) return false; return true; }
function format2Digits(i) { return (i < 10) ? "0" + i : i; }
function formatDate(d) {
	const date = isdef(d) ? d : new Date();
	const month = ('0' + date.getMonth()).slice(0, 2);
	const day = date.getDate();
	const year = date.getFullYear();
	const dateString = `${month}/${day}/${year}`;
	return dateString;
}
function formatDate1(d) {
	if (nundef(d)) d = Date.now();
	let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
	let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
	let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
	return `${da}-${mo}-${ye}`;
}
function formatDate2(d) { if (nundef(d)) d = new Date(); return d.toISOString().slice(0, 19).replace("T", " "); }
function formatDate3(d) { if (nundef(d)) d = new Date(); return d.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " "); }
function formatNow() { return new Date().toISOString().slice(0, 19).replace("T", " "); }
function fromUmlaut(w) {
	if (isList(w)) {
		let res = [];
		for (const w1 of w) res.push(fromUmlaut(w1));
		return res;
	} else {
		w = replaceAll(w, 'ü', 'ue');
		w = replaceAll(w, 'ä', 'ae');
		w = replaceAll(w, 'ö', 'oe');
		w = replaceAll(w, 'Ü', 'UE');
		w = replaceAll(w, 'Ä', 'AE');
		w = replaceAll(w, 'Ö', 'OE');
		return w;
	}
}
function gBg(g, color) { g.setAttribute('fill', color); }
function gCanvas(area, w, h, color, originInCenter = true) {
	let dParent = mBy(area);
	let div = stage3_prepContainer(dParent);
	div.style.width = w + 'px';
	div.style.height = h + 'px';
	let svg = gSvg();
	let style = `margin:0;padding:0;position:absolute;top:0px;left:0px;width:100%;height:100%;`
	svg.setAttribute('style', style);
	mColor(svg, color);
	div.appendChild(svg);
	let g = gG();
	if (originInCenter) g.style.transform = "translate(50%, 50%)";
	svg.appendChild(g);
	return g;
}
function gCreate(tag) { return document.createElementNS('http://www.w3.org/2000/svg', tag); }
function gEllipse(w, h) { let r = gCreate('ellipse'); r.setAttribute('rx', w / 2); r.setAttribute('ry', h / 2); return r; }
function getBaseLog(x, b) { return Math.log(x) / Math.log(b); }
function getBorderPropertyForDirection(dir) { return { 0: 'border-top', 1: 'border-right', 2: 'border-bottom', 3: 'border-left' }[dir]; }
function getBrightness(c) {
	function luminance(r, g, b) {
		var a = [r, g, b].map(function (v) {
			v /= 255;
			return v <= 0.03928
				? v / 12.92
				: Math.pow((v + 0.055) / 1.055, 2.4);
		});
		return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
	}
	let x = colorRGB(c, true);
	return luminance(x.r, x.g, x.b);
}
function getCenter(elem) { let r = isdef(elem.x) ? elem : getRect(elem); return { x: (r.w) / 2, y: (r.h) / 2 }; }
function getCirclePoints(rad, n, disp = 0) {
	let pts = [];
	let i = 0;
	let da = 360 / n;
	let angle = disp;
	while (i < n) {
		let px = rad * Math.cos(toRadian(angle));
		let py = rad * Math.sin(toRadian(angle));
		pts.push({ X: px, Y: py });
		angle += da;
		i++;
	}
	return pts;
}
function getColorDictColor(c) { return isdef(ColorDict[c]) ? ColorDict[c].c : c; }
function getColorHexes(x) {
	return [
		'f0f8ff',
		'faebd7',
		'00ffff',
		'7fffd4',
		'f0ffff',
		'f5f5dc',
		'ffe4c4',
		'000000',
		'ffebcd',
		'0000ff',
		'8a2be2',
		'a52a2a',
		'deb887',
		'5f9ea0',
		'7fff00',
		'd2691e',
		'ff7f50',
		'6495ed',
		'fff8dc',
		'dc143c',
		'00ffff',
		'00008b',
		'008b8b',
		'b8860b',
		'a9a9a9',
		'a9a9a9',
		'006400',
		'bdb76b',
		'8b008b',
		'556b2f',
		'ff8c00',
		'9932cc',
		'8b0000',
		'e9967a',
		'8fbc8f',
		'483d8b',
		'2f4f4f',
		'2f4f4f',
		'00ced1',
		'9400d3',
		'ff1493',
		'00bfff',
		'696969',
		'696969',
		'1e90ff',
		'b22222',
		'fffaf0',
		'228b22',
		'ff00ff',
		'dcdcdc',
		'f8f8ff',
		'ffd700',
		'daa520',
		'808080',
		'808080',
		'008000',
		'adff2f',
		'f0fff0',
		'ff69b4',
		'cd5c5c',
		'4b0082',
		'fffff0',
		'f0e68c',
		'e6e6fa',
		'fff0f5',
		'7cfc00',
		'fffacd',
		'add8e6',
		'f08080',
		'e0ffff',
		'fafad2',
		'd3d3d3',
		'd3d3d3',
		'90ee90',
		'ffb6c1',
		'ffa07a',
		'20b2aa',
		'87cefa',
		'778899',
		'778899',
		'b0c4de',
		'ffffe0',
		'00ff00',
		'32cd32',
		'faf0e6',
		'ff00ff',
		'800000',
		'66cdaa',
		'0000cd',
		'ba55d3',
		'9370db',
		'3cb371',
		'7b68ee',
		'00fa9a',
		'48d1cc',
		'c71585',
		'191970',
		'f5fffa',
		'ffe4e1',
		'ffe4b5',
		'ffdead',
		'000080',
		'fdf5e6',
		'808000',
		'6b8e23',
		'ffa500',
		'ff4500',
		'da70d6',
		'eee8aa',
		'98fb98',
		'afeeee',
		'db7093',
		'ffefd5',
		'ffdab9',
		'cd853f',
		'ffc0cb',
		'dda0dd',
		'b0e0e6',
		'800080',
		'663399',
		'ff0000',
		'bc8f8f',
		'4169e1',
		'8b4513',
		'fa8072',
		'f4a460',
		'2e8b57',
		'fff5ee',
		'a0522d',
		'c0c0c0',
		'87ceeb',
		'6a5acd',
		'708090',
		'708090',
		'fffafa',
		'00ff7f',
		'4682b4',
		'd2b48c',
		'008080',
		'd8bfd8',
		'ff6347',
		'40e0d0',
		'ee82ee',
		'f5deb3',
		'ffffff',
		'f5f5f5',
		'ffff00',
		'9acd32'
	];
} //ok
function getColorNames() {
	return [
		'AliceBlue',
		'AntiqueWhite',
		'Aqua',
		'Aquamarine',
		'Azure',
		'Beige',
		'Bisque',
		'Black',
		'BlanchedAlmond',
		'Blue',
		'BlueViolet',
		'Brown',
		'BurlyWood',
		'CadetBlue',
		'Chartreuse',
		'Chocolate',
		'Coral',
		'CornflowerBlue',
		'Cornsilk',
		'Crimson',
		'Cyan',
		'DarkBlue',
		'DarkCyan',
		'DarkGoldenRod',
		'DarkGray',
		'DarkGrey',
		'DarkGreen',
		'DarkKhaki',
		'DarkMagenta',
		'DarkOliveGreen',
		'DarkOrange',
		'DarkOrchid',
		'DarkRed',
		'DarkSalmon',
		'DarkSeaGreen',
		'DarkSlateBlue',
		'DarkSlateGray',
		'DarkSlateGrey',
		'DarkTurquoise',
		'DarkViolet',
		'DeepPink',
		'DeepSkyBlue',
		'DimGray',
		'DimGrey',
		'DodgerBlue',
		'FireBrick',
		'FloralWhite',
		'ForestGreen',
		'Fuchsia',
		'Gainsboro',
		'GhostWhite',
		'Gold',
		'GoldenRod',
		'Gray',
		'Grey',
		'Green',
		'GreenYellow',
		'HoneyDew',
		'HotPink',
		'IndianRed',
		'Indigo',
		'Ivory',
		'Khaki',
		'Lavender',
		'LavenderBlush',
		'LawnGreen',
		'LemonChiffon',
		'LightBlue',
		'LightCoral',
		'LightCyan',
		'LightGoldenRodYellow',
		'LightGray',
		'LightGrey',
		'LightGreen',
		'LightPink',
		'LightSalmon',
		'LightSeaGreen',
		'LightSkyBlue',
		'LightSlateGray',
		'LightSlateGrey',
		'LightSteelBlue',
		'LightYellow',
		'Lime',
		'LimeGreen',
		'Linen',
		'Magenta',
		'Maroon',
		'MediumAquaMarine',
		'MediumBlue',
		'MediumOrchid',
		'MediumPurple',
		'MediumSeaGreen',
		'MediumSlateBlue',
		'MediumSpringGreen',
		'MediumTurquoise',
		'MediumVioletRed',
		'MidnightBlue',
		'MintCream',
		'MistyRose',
		'Moccasin',
		'NavajoWhite',
		'Navy',
		'OldLace',
		'Olive',
		'OliveDrab',
		'Orange',
		'OrangeRed',
		'Orchid',
		'PaleGoldenRod',
		'PaleGreen',
		'PaleTurquoise',
		'PaleVioletRed',
		'PapayaWhip',
		'PeachPuff',
		'Peru',
		'Pink',
		'Plum',
		'PowderBlue',
		'Purple',
		'RebeccaPurple',
		'Red',
		'RosyBrown',
		'RoyalBlue',
		'SaddleBrown',
		'Salmon',
		'SandyBrown',
		'SeaGreen',
		'SeaShell',
		'Sienna',
		'Silver',
		'SkyBlue',
		'SlateBlue',
		'SlateGray',
		'SlateGrey',
		'Snow',
		'SpringGreen',
		'SteelBlue',
		'Tan',
		'Teal',
		'Thistle',
		'Tomato',
		'Turquoise',
		'Violet',
		'Wheat',
		'White',
		'WhiteSmoke',
		'Yellow',
		'YellowGreen'
	];
} //ok
function getColorWheel(contrastTo, n) {
	let hc = colorHue(contrastTo);
	let wheel = [];
	let start = hc;
	let inc = Math.round(360 / (n + 1));
	start += inc;
	for (let i = 0; i < n; i++) {
		wheel.push(start % 360);
		start += inc;
	}
	return wheel.map(x => colorHSLBuild(x));
}
function getContrast(rgb1, rgb2) {
	var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
	var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
	var brightest = Math.max(lum1, lum2);
	var darkest = Math.min(lum1, lum2);
	return (brightest + 0.05)
		/ (darkest + 0.05);
}
function getCorrectPrefix(label, text) {
	let req = label.toLowerCase();
	let answer = text.toLowerCase();
	let res1 = removeNonAlphanum(req);
	let res2 = removeNonAlphanum(answer);
	let req1 = res1.alphas;// removeNonAlphanum(req);
	let answer1 = res2.alphas; //removeNonAlphanum(answer);
	let whites = res1.whites;
	let common = findCommonPrefix(req1, answer1);
	let nletters = common.length;
	let ireal = 0;
	let icompact = 0;
	let iwhites = 0;
	let correctPrefix = '';
	while (icompact < nletters) {
		if (req[ireal] == common[icompact]) { correctPrefix += label[ireal]; icompact += 1; }
		else if (whites[iwhites] == req[ireal]) { correctPrefix += label[ireal]; iwhites += 1; }
		else break;
		ireal += 1;
	}
	return correctPrefix;
}
function getDivisors(n) {
	let x = Math.floor(Math.sqrt(n));
	let res = [];
	for (let i = 2; i <= x; i++) {
		let q = n / i;
		if (q == Math.round(q)) res.push(i);
	}
	return res;
}
function getEllipsePoints(radx, rady, n, disp = 0) {
	let pts = [];
	let i = 0;
	let da = 360 / n;
	let angle = disp;
	while (i < n) {
		let px = radx * Math.cos(toRadian(angle));
		let py = rady * Math.sin(toRadian(angle));
		pts.push({ X: px, Y: py });
		angle += da;
		i++;
	}
	return pts;
}
function getExtendedColors(bg, fg, alpha) {
	/* handles values random, inherit, contrast	*/
	bg = computeColorX(bg);
	fg = computeColorX(fg);
	if (bg == 'inherit' && (nundef(fg) || fg == 'contrast')) {
		fg = 'inherit'; //contrast to parent bg!
	} else if (fg == 'contrast' && isdef(bg) && bg != 'inherit') fg = colorIdealText(bg);
	else if (bg == 'contrast' && isdef(fg) && fg != 'inherit') { bg = colorIdealText(fg); }
	if (isdef(alpha)) bg = colorTrans(bg, alpha);
	return [bg, fg];
}
function getFilename(path, withExt = true) {
	let fname = stringAfterLast(path, '/');
	let name = stringBefore(fname, '.');
	let ext = stringAfter(fname, '.');
	if (isEmpty(ext)) ext = 'png';
	let result = withExt ? (name + '.' + ext) : name;
	console.log(`filename (ext:${withExt}): ${result}`);
	return result;
}
function getFruid(pref = '') {
	const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	FRUIDCounter += 1;
	if (FRUIDCounter < alpha.length) return pref + alpha[FRUIDCounter];
	return pref + FRUIDCounter - alpha.length;
}
function getFunctionCallerName() {
	return new Error().stack.match(/at (\S+)/g)[1].slice(3);
}
function getFunctionsNameThatCalledThisFunction() {
	let c1 = getFunctionsNameThatCalledThisFunction.caller;
	if (nundef(c1)) return 'no caller!';
	let c2 = c1.caller;
	if (nundef(c2)) return 'no caller!';
	return c2.name;
}
function getHexPoly(x, y, w, h) {
	let hex = [[0, -0.5], [0.5, -0.25], [0.5, 0.25], [0, 0.5], [-0.5, 0.25], [-0.5, -0.25]];
	return getPoly(hex, x, y, w, h);
}
function getHueWheel(contrastTo, minDiff = 25, mod = 30, start = 0) {
	let hc = colorHue(contrastTo);
	let wheel = [];
	while (start < 360) {
		let d1 = Math.abs((start + 360) - hc);
		let d2 = Math.abs((start) - hc);
		let d3 = Math.abs((start - 360) - hc);
		let min = Math.min(d1, d2, d3);
		if (min > minDiff) wheel.push(start);
		start += mod;
	}
	return wheel;
}
function getIndicesCondi(arr, func) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i], i)) res.push(i);
	}
	return res;
}
function getLetterSwapEncoding(s) {
	let di = getRandomLetterMapping(s);
	let result = '';
	for (let i = 0; i < s.length; i++) {
		result += s[i] in di ? di[s[i]] : s[i];
	}
	return result;
}
function getObjectsWithSame(olist, props, o, up = true, breakWhenDifferent = true) {
	let res = [];
	let val = lookup(o, props);
	if (up) {
		for (let i = 0; i <= olist.length - 1; i++) {
			let val1 = lookup(olist[i], props);
			if (val1 == val) res.push(olist[i]); else if (breakWhenDifferent) return res;
		}
	} else {
		for (let i = olist.length - 1; i >= 0; i--) {
			let val1 = lookup(olist[i], props);
			if (val1 == val) res.push(olist[i]); else if (breakWhenDifferent) return res;
		}
	}
	return res;
}
function getPalette(color, type = 'shade') {
	color = anyColorToStandardString(color);
	return colorPalShade(color);
}
function getPaletteFromImage(img) {
	let palette0 = ColorThiefObject.getPalette(img);
	let palette = [];
	for (const pal of palette0) {
		let color = anyColorToStandardString(pal);
		palette.push(color);
	}
	return palette;
}
function getPoly(offsets, x, y, w, h) {
	let poly = [];
	for (let p of offsets) {
		let px = Math.round(x + p[0] * w); //  %modulo;
		let py = Math.round(y + p[1] * h); //%modulo;
		poly.push({ x: px, y: py });
	}
	return poly;
}
function getPublicPath(filename) {
	let result = './public/' + getFilename(filename);
	console.log('pubPath', result);
	return result;
}
function getQuadPoly(x, y, w, h) {
	q = [[0.5, -0.5], [0.5, 0.5], [-0.5, 0.5], [-0.5, -0.5]];
	return getPoly(q, x, y, w, h);
}
function getRandomLetterMapping(s) {
	if (nundef(s)) s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let alphabet = filterDistinctLetters(s);
	let alphabet2 = shuffle(jsCopy(alphabet));
	let di = {};
	for (let i = 0; i < alphabet.length; i++) {
		di[alphabet[i]] = alphabet2[i];
	}
	return di;
}
function getRandomNumberSequence(n, minStart, maxStart, fBuild, exceptStart) { //{op,step,fBuild}) {
	let nStart = randomNumber(minStart, maxStart - n + 1);
	if (exceptStart) {
		let att = 10;
		while (att >= 0 && nStart == exceptStart) { att -= 1; nStart = randomNumber(minStart, maxStart - n + 1); }
	}
	if (isNumber(fBuild)) return range(nStart, nStart + (n - 1) * fBuild, fBuild);
	else {
		let res = [], x = nStart;
		for (let i = 0; i < n; i++) {
			res.push(x);
			x = fBuild(x);
		}
		return res;
	}
}
function getRandomPerlenKeys(di, n) { return choose(Object.keys(di), n); }
function getRect(elem, relto) {
	if (isString(elem)) elem = document.getElementById(elem);
	let res = elem.getBoundingClientRect();
	if (isdef(relto)) {
		let b2 = relto.getBoundingClientRect();
		let b1 = res;
		res = {
			x: b1.x - b2.x,
			y: b1.y - b2.y,
			left: b1.left - b2.left,
			top: b1.top - b2.top,
			right: b1.right - b2.right,
			bottom: b1.bottom - b2.bottom,
			width: b1.width,
			height: b1.height
		};
	}
	let r4 = { x: res.left, y: res.top, w: res.width, h: res.height };
	extendRect(r4); //r4.l = r4.x; r4.t = r4.y; r4.r = r4.x + r4.w; r4.b = r4.t + r4.h;
	return r4;
}
function getRectInt(elem, relto) {
	if (isString(elem)) elem = document.getElementById(elem);
	let res = elem.getBoundingClientRect();
	if (isdef(relto)) {
		let b2 = relto.getBoundingClientRect();
		let b1 = res;
		res = {
			x: b1.x - b2.x,
			y: b1.y - b2.y,
			left: b1.left - b2.left,
			top: b1.top - b2.top,
			right: b1.right - b2.right,
			bottom: b1.bottom - b2.bottom,
			width: b1.width,
			height: b1.height
		};
	}
	let r4 = { x: Math.round(res.left), y: Math.round(res.top), w: Math.round(res.width), h: Math.round(res.height) };
	extendRect(r4); //r4.l = r4.x; r4.t = r4.y; r4.r = r4.x + r4.w; r4.b = r4.t + r4.h;
	return r4;
}
function getSize(elem) { let r = getRectInt(elem); return { w: r.w, h: r.h, sz: Math.min(r.w, r.h) }; }
function getSizeNeeded(elem) {
	var d = elem.cloneNode(true); //document.createElement("div");
	d.style.width = 'auto';
	document.body.appendChild(d);
	let cStyles = {};
	cStyles.position = 'fixed';
	cStyles.opacity = 0;
	cStyles.top = '-9999px';
	mStyle(d, cStyles);
	height = d.clientHeight;
	width = d.clientWidth;
	d.parentNode.removeChild(d);
	return { w: Math.round(width), h: Math.round(height) };
}
function getSizeWithStyles(text, styles) {
	var d = document.createElement("div");
	document.body.appendChild(d);
	let cStyles = jsCopy(styles);
	cStyles.position = 'fixed';
	cStyles.opacity = 0;
	cStyles.top = '-9999px';
	mStyle(d, cStyles);
	d.innerHTML = text;
	height = d.clientHeight;
	width = d.clientWidth;
	d.parentNode.removeChild(d);
	return { w: Math.round(width), h: Math.round(height) };
}
function getTransPalette(color = '#000000') {
	let res = [];
	for (const alpha of [.0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]) res.push(colorTrans(color, alpha));
	return res;
}
function getTransPalette9(color = '#000000') {
	let res = [];
	for (const alpha of [.1, .2, .3, .4, .5, .6, .7, .8, .9]) res.push(colorTrans(color, alpha));
	return res;
}
function getTriangleDownPoly(x, y, w, h) {
	let tridown = [[-0.5, 0.5], [0.5, 0.5], [-0.5, 0.5]];
	return getPoly(tridown, x, y, w, h);
}
function getTriangleUpPoly(x, y, w, h) {
	let triup = [[0, -0.5], [0.5, 0.5], [-0.5, 0.5]];
	return getPoly(triup, x, y, w, h);
}
function getTypeOf(param) {
	let type = typeof param;
	if (type == 'string') {
		return 'string';
	}
	if (type == 'object') {
		type = param.constructor.name;
		if (startsWith(type, 'SVG')) type = stringBefore(stringAfter(type, 'SVG'), 'Element').toLowerCase();
		else if (startsWith(type, 'HTML')) type = stringBefore(stringAfter(type, 'HTML'), 'Element').toLowerCase();
	}
	let lType = type.toLowerCase();
	if (lType.includes('event')) type = 'event';
	return type;
}
function getUID(pref = '') {
	UIDCounter += 1;
	return pref + '_' + UIDCounter;
}
function getVerticalOverflow(element) { return element.scrollHeight - element.clientHeight; }
function getVisibleChild(id) { for (const ch of mBy(id).children) if (ch.style.display != 'none') return ch.id; }
function gFg(g, color, thickness) { g.setAttribute('stroke', color); if (thickness) g.setAttribute('stroke-width', thickness); }
function gG() { return gCreate('g'); }// document.createElementNS('http://www.w3.org/2000/svg', 'g'); }
function gHex(w, h) { let pts = size2hex(w, h); return gPoly(pts); }
function gLine(x1, y1, x2, y2) { let r = gCreate('line'); r.setAttribute('x1', x1); r.setAttribute('y1', y1); r.setAttribute('x2', x2); r.setAttribute('y2', y2); return r; }
function gPoly(pts) { let r = gCreate('polygon'); if (pts) r.setAttribute('points', pts); return r; }
function gPos(g, x, y) { g.style.transform = `translate(${x}px, ${y}px)`; }
function gRect(w, h) { let r = gCreate('rect'); r.setAttribute('width', w); r.setAttribute('height', h); r.setAttribute('x', -w / 2); r.setAttribute('y', -h / 2); return r; }
function gRounding(r, rounding) {
	r.setAttribute('rx', rounding); // rounding kann ruhig in % sein!
	r.setAttribute('ry', rounding);
}
function gShape(shape, w = 20, h = 20, color = 'green', rounding) {
	let el = gG();
	if (nundef(shape)) shape = 'rect';
	if (shape != 'line') agColoredShape(el, shape, w, h, color);
	else gStroke(el, color, w); //agColoredLine(el, w, color);
	if (isdef(rounding) && shape == 'rect') {
		let r = el.children[0];
		gRounding(r, rounding);
	}
	return el;
}
function gSize(g, w, h, shape = null, iChild = 0) {
	let el = (getTypeOf(g) != 'g') ? g : g.children[iChild];
	let t = getTypeOf(el);
	switch (t) {
		case 'rect': el.setAttribute('width', w); el.setAttribute('height', h); el.setAttribute('x', -w / 2); el.setAttribute('y', -h / 2); break;
		case 'ellipse': el.setAttribute('rx', w / 2); el.setAttribute('ry', h / 2); break;
		default:
			if (shape) {
				switch (shape) {
					case 'hex': let pts = size2hex(w, h); el.setAttribute('points', pts); break;
				}
			}
	}
	return el;
}
function gSizeToContent(svg) {
	var bbox = svg.getBBox();
	svg.setAttribute("width", bbox.x + bbox.width + bbox.x);
	svg.setAttribute("height", bbox.y + bbox.height + bbox.y);
}
function gStroke(g, color, thickness) { g.setAttribute('stroke', color); if (thickness) g.setAttribute('stroke-width', thickness); }
function gSvg() { return gCreate('svg'); } //document.createElementNS('http://www.w3.org/2000/svg', 'svg'); }
function hasWhiteSpace(s) { return /\s/g.test(s); }
function helleFarbe(contrastTo, minDiff = 25, mod = 30, start = 0) {
	let wheel = getHueWheel(contrastTo, minDiff, mod, start);
	let hue = chooseRandom(wheel);
	let hsl = colorHSLBuild(hue, 100, 50);
	return hsl;
}
function hexAToHSLA(H) {
	let ex = /^#([\da-f]{4}){1,2}$/i;
	if (ex.test(H)) {
		let r = 0,
			g = 0,
			b = 0,
			a = 1;
		if (H.length == 5) {
			r = '0x' + H[1] + H[1];
			g = '0x' + H[2] + H[2];
			b = '0x' + H[3] + H[3];
			a = '0x' + H[4] + H[4];
		} else if (H.length == 9) {
			r = '0x' + H[1] + H[2];
			g = '0x' + H[3] + H[4];
			b = '0x' + H[5] + H[6];
			a = '0x' + H[7] + H[8];
		}
		r /= 255;
		g /= 255;
		b /= 255;
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r) h = ((g - b) / delta) % 6;
		else if (cmax == g) h = (b - r) / delta + 2;
		else h = (r - g) / delta + 4;
		h = Math.round(h * 60);
		if (h < 0) h += 360;
		l = (cmax + cmin) / 2;
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		a = (a / 255).toFixed(3);
		return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
	} else {
		return 'Invalid input color';
	}
} //ok
function hexToHSL(H) {
	let ex = /^#([\da-f]{3}){1,2}$/i;
	if (ex.test(H)) {
		let r = 0,
			g = 0,
			b = 0;
		if (H.length == 4) {
			r = '0x' + H[1] + H[1];
			g = '0x' + H[2] + H[2];
			b = '0x' + H[3] + H[3];
		} else if (H.length == 7) {
			r = '0x' + H[1] + H[2];
			g = '0x' + H[3] + H[4];
			b = '0x' + H[5] + H[6];
		}
		r /= 255;
		g /= 255;
		b /= 255;
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r) h = ((g - b) / delta) % 6;
		else if (cmax == g) h = (b - r) / delta + 2;
		else h = (r - g) / delta + 4;
		h = Math.round(h * 60);
		if (h < 0) h += 360;
		l = (cmax + cmin) / 2;
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		return 'hsl(' + h + ',' + s + '%,' + l + '%)';
	} else {
		return 'Invalid input color';
	}
} //ok
function hide(elem) {
	if (isString(elem)) elem = document.getElementById(elem);
	if (nundef(elem)) return;
	if (isSvg(elem)) {
		elem.setAttribute('style', 'visibility:hidden;display:none');
	} else {
		elem.style.display = 'none';
	}
}
function HSLAToRGBA(hsla, isPct) {
	let ex = /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
	if (ex.test(hsla)) {
		let sep = hsla.indexOf(',') > -1 ? ',' : ' ';
		hsla = hsla
			.substr(5)
			.split(')')[0]
			.split(sep);
		if (hsla.indexOf('/') > -1) hsla.splice(3, 1);
		isPct = isPct === true;
		let h = hsla[0],
			s = hsla[1].substr(0, hsla[1].length - 1) / 100,
			l = hsla[2].substr(0, hsla[2].length - 1) / 100,
			a = hsla[3];
		if (h.indexOf('deg') > -1) h = h.substr(0, h.length - 3);
		else if (h.indexOf('rad') > -1) h = Math.round((h.substr(0, h.length - 3) / (2 * Math.PI)) * 360);
		else if (h.indexOf('turn') > -1) h = Math.round(h.substr(0, h.length - 4) * 360);
		if (h >= 360) h %= 360;
		let c = (1 - Math.abs(2 * l - 1)) * s,
			x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
			m = l - c / 2,
			r = 0,
			g = 0,
			b = 0;
		if (0 <= h && h < 60) {
			r = c;
			g = x;
			b = 0;
		} else if (60 <= h && h < 120) {
			r = x;
			g = c;
			b = 0;
		} else if (120 <= h && h < 180) {
			r = 0;
			g = c;
			b = x;
		} else if (180 <= h && h < 240) {
			r = 0;
			g = x;
			b = c;
		} else if (240 <= h && h < 300) {
			r = x;
			g = 0;
			b = c;
		} else if (300 <= h && h < 360) {
			r = c;
			g = 0;
			b = x;
		}
		r = Math.round((r + m) * 255);
		g = Math.round((g + m) * 255);
		b = Math.round((b + m) * 255);
		let pctFound = a.indexOf('%') > -1;
		if (isPct) {
			r = +((r / 255) * 100).toFixed(1);
			g = +((g / 255) * 100).toFixed(1);
			b = +((b / 255) * 100).toFixed(1);
			if (!pctFound) {
				a *= 100;
			} else {
				a = a.substr(0, a.length - 1);
			}
		} else if (pctFound) {
			a = a.substr(0, a.length - 1) / 100;
		}
		return 'rgba(' + (isPct ? r + '%,' + g + '%,' + b + '%,' + a + '%' : +r + ',' + +g + ',' + +b + ',' + +a) + ')';
	} else {
		return 'Invalid input color';
	}
} //ok
function HSLToRGB(hsl, isPct) {
	let ex = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
	if (ex.test(hsl)) {
		let sep = hsl.indexOf(',') > -1 ? ',' : ' ';
		hsl = hsl
			.substr(4)
			.split(')')[0]
			.split(sep);
		isPct = isPct === true;
		let h = hsl[0],
			s = hsl[1].substr(0, hsl[1].length - 1) / 100,
			l = hsl[2].substr(0, hsl[2].length - 1) / 100;
		if (h.indexOf('deg') > -1) h = h.substr(0, h.length - 3);
		else if (h.indexOf('rad') > -1) h = Math.round((h.substr(0, h.length - 3) / (2 * Math.PI)) * 360);
		else if (h.indexOf('turn') > -1) h = Math.round(h.substr(0, h.length - 4) * 360);
		if (h >= 360) h %= 360;
		let c = (1 - Math.abs(2 * l - 1)) * s,
			x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
			m = l - c / 2,
			r = 0,
			g = 0,
			b = 0;
		if (0 <= h && h < 60) {
			r = c;
			g = x;
			b = 0;
		} else if (60 <= h && h < 120) {
			r = x;
			g = c;
			b = 0;
		} else if (120 <= h && h < 180) {
			r = 0;
			g = c;
			b = x;
		} else if (180 <= h && h < 240) {
			r = 0;
			g = x;
			b = c;
		} else if (240 <= h && h < 300) {
			r = x;
			g = 0;
			b = c;
		} else if (300 <= h && h < 360) {
			r = c;
			g = 0;
			b = x;
		}
		r = Math.round((r + m) * 255);
		g = Math.round((g + m) * 255);
		b = Math.round((b + m) * 255);
		if (isPct) {
			r = +((r / 255) * 100).toFixed(1);
			g = +((g / 255) * 100).toFixed(1);
			b = +((b / 255) * 100).toFixed(1);
		}
		return 'rgb(' + (isPct ? r + '%,' + g + '%,' + b + '%' : +r + ',' + +g + ',' + +b) + ')';
	} else {
		return 'Invalid input color';
	}
} //ok
function html_to_umlaut(html){
	if (html =='u00c4'){ return 'Ä'; }
	else return html;
}
function iAdd(item, props) {
	let id, l;
	if (isString(item)) { id = item; item = Items[id]; }
	else if (nundef(item.id)) { id = item.id = iRegister(item); }
	else { id = item.id; if (nundef(Items[id])) Items[id] = item; }
	if (nundef(item.live)) item.live = {};
	l = item.live;
	for (const k in props) {
		let val = props[k];
		if (nundef(val)) {
			continue;
		}
		l[k] = val;
		if (k == 'div') val.id = id;
		if (isdef(val.id) && val.id != id) {
			lookupAddIfToList(val, ['memberOf'], id);
		}
	}
}
function iAddContent(item, d) { let dm = diContent(item); if (isdef(dm)) mAppend(dm, d); }
function iAppend(dParent, i) { mAppend(iDiv(dParent), iDiv(i)); }
function iBounds(i, irel) { return getRect(iDiv(i), isdef(irel) ? iDiv(irel) : null); }
function iCenter(item, offsetX, offsetY) { let d = iDiv(item); mCenterAbs(d, offsetX, offsetY); }
function iContainer(dParent, styles, classes, id, inner) {
	let item = { id: isdef(id) ? id : getUID(), type: 'plain' };
	let dOuter = mDiv(dParent);
	let dInner = mDiv100(dOuter);
	mCenterCenterFlex(dInner);
	if (isdef(inner)) d.innerHTML = inner;
	if (nundef(styles)) styles = {};
	styles.display = 'inline-block';
	mStyle(dOuter, styles);
	if (isdef(classes)) mClass(dOuter, classes);
	iAdd(item, { div: dOuter, dInner: dInner });
	item.add = elem => mAppend(dInner, elem);
	return item;
}
function idealFontDims(txt, wmax, hmax, fz = 22, fzmin = 6, weight) {
	let tStyles = { fz: fz, family: 'arial' };
	if (isdef(weight)) tStyles.weight = weight;
	while (true) {
		let tSize = getSizeWithStyles(txt, tStyles);
		if (tSize.h <= hmax && tSize.w <= wmax || tStyles.fz <= fzmin) return { w: tSize.w, h: tSize.h, fz: tStyles.fz, family: 'arial' };
		else tStyles.fz -= 1;
	}
}
function idealFontSize(txt, wmax, hmax, fz = 22, fzmin = 6, weight) { return idealFontDims(...arguments).fz; }
function iDelete(item) {
	let id = isString(item) ? item : item.id;
	item = Items[id];
	for (const k in item.live) {
		let el = item.live[k];
		if (isdef(el.memberOf)) { el.memberOf.map(x => iRemoveFromLive(x, el.id)); }
		if (isItem(el)) iDelete(item); else el.remove();
	}
	if (isdef(item.memberOf)) { item.memberOf.map(x => iRemoveFromLive(x, item.id)); }
	delete Items[id];
}
function iDetect(itemInfoKey) {
	let item, info, key;
	if (isString(itemInfoKey)) { key = itemInfoKey; info = Syms[key]; item = infoToItem(info); }
	else if (isDict(itemInfoKey)) {
		if (isdef(itemInfoKey.info)) { item = itemInfoKey; info = item.info; key = item.info.key; }
		else { info = itemInfoKey; key = info.key; item = infoToItem(info); }
	}
	return [item, info, key];
}
function iDiv(i) { return isdef(i.live) ? i.live.div : isdef(i.div) ? i.div : i; }
function iDivs(ilist) { return isEmpty(ilist) ? [] : isItem(ilist[0]) ? ilist.map(x => iDiv(x)) : ilist; }
function iDov(item) { return isdef(item.live) ? item.live.overlay : null; }
function iG(i) { return isdef(i.live) ? i.live.g : isdef(i.g) ? i.g : i; }
function iGet(item, key) { return item[key]; }
function iGetl(item, key) { return item.live[key]; }
function iGrid(rows, cols, dParent, styles) {
	styles.display = 'inline-block';
	let items = [];
	let index = 0;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			let d = mDiv(dParent, styles);
			let item = { row: i, col: j, index: index };
			index += 1;
			iAdd(item, { div: d });
			items.push(item);
		}
		mLinebreak(dParent);
	}
	return items;
}
function iHighlight(item) { let d = iDov(item); mClass(d, 'overlaySelected'); }
function iLabel(i) { return isdef(i.live) ? i.live.dLabel : isdef(i.dLabel) ? i.dLabel : null; }
function iMeasure(item, sizingOptions) {
	if (nundef(iDiv(item))) return;
	setRect(iDiv(item), valf(sizingOptions, { hgrow: true, wgrow: true }));
}
function iMessage(item, msg) { let dm = diMessage(item); if (isdef(dm)) dm.innerHTML = msg; }
function iMoveFromTo(item, d1, d2, callback, offset) {
	let bi = iBounds(item);
	let b1 = iBounds(d1);
	let b2 = iBounds(d2);
	if (nundef(offset)) offset = { x: 0, y: 0 };
	let dist = { x: b2.x - b1.x + offset.x, y: b2.y - b1.y + offset.y };
	item.div.style.zIndex = 100;
	let a = aTranslateBy(item.div, dist.x, dist.y, 500);
	a.onfinish = () => { mAppend(d2, item.div); item.div.style.zIndex = item.z = iZMax(); if (isdef(callback)) callback(); };
}
function iMoveFromToPure(item, d1, d2, callback, offset) {
	let bi = iBounds(item);
	let b1 = iBounds(d1);
	let b2 = iBounds(d2);
	if (nundef(offset)) offset = { x: 0, y: 0 };
	let dist = { x: b2.x - b1.x + offset.x, y: b2.y - b1.y + offset.y };
	item.div.style.zIndex = 100;
	let a = aTranslateBy(item.div, dist.x, dist.y, 500);
	a.onfinish = () => { if (isdef(callback)) callback(); };
}
function incInput(inp, n = 1) {
	let val = Number(inp.innerHTML);
	val += n;
	inp.innerHTML = val;
}
function includesAnyOf(s, slist) { for (const l of slist) { if (s.includes(l)) return true; } return false; }
function indexOfFuncMax(arr, prop, f) {
	let max = null;
	let imax = null;
	for (const [i, v] of arr.entries()) {
		let val = isdef(prop) && isdef(v[prop]) ? v[prop] : v;
		if (isdef(f)) val = f(val);
		if (max == null || val > max) { max = val; imax = i }
	}
	return { i: imax, val: max };
}
function indexOfFuncMin(arr, prop, f) {
	let min = null;
	let imax = null;
	for (const [i, v] of arr.entries()) {
		let val = isdef(prop) && isdef(v[prop]) ? v[prop] : v;
		if (isdef(f)) val = f(val);
		if (min == null || val < min) { min = val; imax = i }
	}
	return { i: imax, val: min };
}
function indexOfMax(arr, prop) {
	let max = null;
	let imax = null;
	for (const [i, v] of arr.entries()) {
		if (prop) {
			if (max == null || v[prop] > max) {
				max = v[prop];
				imax = i;
			}
		} else {
			if (max == null || v > max) {
				max = v;
				imax = i;
			}
		}
	}
	return { i: imax, val: max };
}
function indexOfMin(arr, prop) {
	let min = null;
	let imin = null;
	for (const [i, v] of arr.entries()) {
		if (prop) {
			if (min == null || lookup(v, [prop]) < min) {
				min = v[prop];
				imin = i;
			}
		} else {
			if (min == null || v < min) {
				min = v;
				imin = i;
			}
		}
	}
	return { i: imin, val: min };
}
function infoToItem(x) { let item = { info: x, key: x.key }; item.id = iRegister(item); return item; }
function init_keyhandlers() {
	onkeyup = onkeyupHandler;
}
function initServerPool(settings, state, perlenDict) {
	let pool = {};
	let poolArr = [];
	let maxPoolIndex = 0;
	addKeys(settings, { poolSelection: 'random', numPool: 20 });
	let n = settings.poolSelection != 'player' ? settings.numPool : 0;
	let keys = getRandomPerlenKeys(perlenDict, n);
	for (const k of keys) {
		addToPool(pool, poolArr, perlenDict[k], maxPoolIndex);
		maxPoolIndex += 1;
	}
	state.pool = pool;
	state.poolArr = poolArr;
	return maxPoolIndex;
}
function intersection(arr1, arr2) {
	let res = [];
	for (const a of arr1) {
		if (arr2.includes(a)) {
			addIf(res, a);
		}
	}
	return res;
}
function iPanel(dParent, styles, classes, id, inner) {
	let item = { id: isdef(id) ? id : getUID(), type: 'plain' };
	let dOuter = mDiv(dParent);
	mCenterCenterFlex(dOuter);
	let d = mDiv(dOuter);
	if (isdef(inner)) d.innerHTML = inner;
	if (nundef(styles)) styles = {};
	let picStyles = { fz: valf(styles.fz, valf(styles.h / 2, 25)), display: 'inline-block' };
	mStyle(dOuter, styles);
	mStyle(d, picStyles);
	if (isdef(classes)) mClass(dOuter, classes);
	iAdd(item, { div: dOuter, dPic: d });
	return item;
}
function iParentBounds(i) { return getRect(iDiv(i)); }
function iPic(i) { return isdef(i.live) ? i.live.dPic : isdef(i.dPic) ? i.dPic : null; }
function iRegister(item, id) { let uid = isdef(id) ? id : getUID(); Items[uid] = item; return uid; }
function iRegisterX(item, keyProp, id) {
	let uid = isdef(id) ? id : getUID(); Items[uid] = item;
	if (isdef(item[keyProp])) ItemsByKey[item[keyProp]] = uid; return uid;
}
function iRemoveFromLive(pid, id) {
	if (pid == id) { console.log('!!!!!!!!!!!!!!!!!!!!', id, 'member of itself!!!'); return; }
	let comp = Items[pid];
	let l = comp.live;
	let tbr = null;
	for (const k in l) {
		let el = l[k];
		if (el.id == id) { tbr = k; break; }
	}
	if (tbr) delete l[tbr];
}
function iResize(i, w, h) { return isList(i) ? i.map(x => iSize(x, w, h)) : iSize(i, w, h); }
function isAlphaNum(s) {
	return /^[a-z0-9_]+$/i.test(s); // only lower case: /^[0-9a-z_]+$/);
}
function isAlphaNumeric(str) {
	var code, i, len;
	for (i = 0, len = str.length; i < len; i++) {
		code = str.charCodeAt(i);
		if (!(code > 47 && code < 58) && // numeric (0-9)
			!(code > 64 && code < 91) && // upper alpha (A-Z)
			!(code > 96 && code < 123) && str[i] != '_') { // lower alpha (a-z)
			return false;
		}
	}
	return true;
}
function isCapitalLetter(s) { return /^[A-Z]$/i.test(s); }
function isCapitalLetterOrDigit(s) { return /^[A-Z0-9ÖÄÜ]$/i.test(s); }
function isCloseTo(n, m, acc = 10) { return Math.abs(n - m) <= acc + 1; }
function isColorName(s) { ensureColorNames(); return (isdef(ColorNames[s.toLowerCase()])); }
function isdef(x) { return x !== null && x !== undefined; }
function isDict(d) { let res = (d !== null) && (typeof (d) == 'object') && !isList(d); return res; }
function isDictOrList(d) { return typeof (d) == 'object'; }
function isDigit(s) { return /^[0-9]$/i.test(s); }
function isDOM(x) { let c = lookup(x, ['constructor', 'name']); return c ? startsWith(c, 'HTML') || startsWith(c, 'SVG') : false; }
function isEmpty(arr) {
	return arr === undefined || !arr
		|| (isString(arr) && (arr == 'undefined' || arr == ''))
		|| (Array.isArray(arr) && arr.length == 0)
		|| Object.entries(arr).length === 0;
}
function isEmptyOrWhiteSpace(s) { return isEmpty(s.trim()); }
function isGermanColorName(s) { return isColorName(s) || isdef(GermanToEnglish[s]) && isColorName(GermanToEnglish[s]); }
function iSidebar(d1, d2, dToggle = null, w = 100, startOpen = true, id) {
	mStyle(d1, { h: '100%', w: startOpen == true ? w : 0, position: 'absolute', z: 1, top: 0, left: 0, 'overflow': 'hidden' }); //, transition: secs });
	mStyle(d2, { h: '100%', maleft: startOpen == true ? w : '0px', box: true }, null, null); //, transition: secs
	d1.isOpen = startOpen;
	d1.wNeeded = w;
	let tell = () => console.log('sidebar is', d1.isOpen ? 'OPEN' : 'CLOSED');
	let fToggle = (ev, animate = true) => {
		d1.isOpen = !d1.isOpen;
		let val = d1.isOpen ? d1.wNeeded : 0;
		if (animate) multiStyleAnimation([[d1, { w: val }], [d2, { maleft: val }]], 500, tell);
		else { mStyle(d1, { w: val }); mStyle(d2, { maleft: val }); tell(); }
	}
	let fOpen = (ev, animate = true) => {
		if (d1.isOpen) return;
		fToggle(ev, animate);
	}
	let fClose = (ev, animate = true) => {
		if (!d1.isOpen) return;
		fToggle(ev, animate);
	}
	let fAddContent = (cont, styles) => {
		mAddContent(d1, cont, styles, { keepInLine: true, replace: false });
		let sz = getSizeNeeded(d1);
		d1.wNeeded = sz.w;
		if (d1.isOpen) { mStyle(d1, { w: d1.wNeeded }); mStyle(d2, { maleft: d1.wNeeded }); }
	};
	let fReplaceContent = (cont, styles) => { clearElement(d1); fAddContent(cont, styles); };
	id = isdef(id) ? id : !isEmpty(d1.id) ? d1.id : getUID('sb');
	let item = mItem(id, { div: d1 }, { type: 'sidebar', w: w, toggle: fToggle, open: fOpen, close: fClose, addContent: fAddContent, replaceContent: fReplaceContent });
	if (!isEmpty(d2.id)) item.idContent = d2.id;
	if (isdef(dToggle)) { iAdd(item, { dToggle: dToggle }); dToggle.onclick = fToggle; }
	return item;
}
function isItem(i) { return isdef(i.live) || isdef(i.div); }
function iSize(i, w, h) { i.w = w; i.h = h; mSize(iDiv(i), w, h); }
function isLetter(s) { return /^[a-zA-Z]$/i.test(s); }
function isList(arr) { return Array.isArray(arr); }
function isLiteral(x) { return isString(x) || isNumber(x); }
function isNumber(x) { return x !== ' ' && x !== true && x !== false && isdef(x) && (x == 0 || !isNaN(+x)); }
function isOverflown(element) {
	return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
function iSplay(items, iContainer, containerStyles, splay = 'right', ov = 20, ovUnit = '%', createHand = true, rememberFunc = true) {
	if (!isList(items)) items = [items];
	if (isEmpty(items)) return { w: 0, h: 0 };
	let [w, h] = [items[0].w, items[0].h];
	let isHorizontal = splay == 'right' || splay == 'left';
	for (let i = 0; i < items.length; i++) {
		let item = items[i];
		item.col = isHorizontal ? i : 0;
		item.row = isHorizontal ? 0 : i;
		item.index = item.z = i;
	}
	if (nundef(containerStyles)) containerStyles = {};
	let dContainer = iDiv(iContainer);
	let dParent, iParent;
	if (createHand) {
		dParent = mDiv(dContainer);
		iParent = { div: dParent };
	} else if (isItem(iContainer)) {
		dParent = iContainer.div;
		iParent = iContainer;
	} else dParent = iContainer;
	containerStyles.hmin = items[0].h;
	mStyle(dParent, containerStyles);
	let gap = isdef(containerStyles.padding) ? containerStyles.padding : 0;
	let overlap = ov;
	if (ovUnit == '%') overlap = ov == 0 ? .5 : (isHorizontal ? w : h) * ov / 100;
	let x = y = gap;
	let sz = splayout(items.map(x => iDiv(x)), dParent, w, h, x, y, overlap, splay);
	dParent.style.width = '' + sz.w + 'px';
	dParent.style.height = '' + sz.h + 'px';
	if (isdef(iParent)) { iParent.w = sz.w; iParent.h = sz.h; iParent.items = items; }
	return isdef(iParent) ? iParent : dParent;
}
function isSingleDigit(s) { return /^[0-9]$/i.test(s); }
function isString(param) { return typeof param == 'string'; }
function isSvg(elem) { return startsWith(elem.constructor.name, 'SVG'); }
function iStyle(i, styles) { mStyle(iDiv(i), styles); }
function iSvg(i) { return isdef(i.live) ? i.live.svg : isdef(i.svg) ? i.svg : i; }
function isVisible(elem) { // Where el is the DOM element you'd like to test for visibility
	if (isString(elem)) elem = document.getElementById(elem);
	let x = elem.style.flex;
	return (elem.style.display != 'none' || elem.offsetParent !== null) && (nundef(elem.style.flex) || !endsWith(elem.style.flex,'0%'));
}
function isWhiteSpace(ch) { return /\s/.test(ch) }
function isWhiteSpace2(ch) {
	const alphanum = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
	return !alphanum.includes(ch);
}
function isWhiteSpaceString(s) { return isEmptyOrWhiteSpace(s); }
function iSym(kItem, dParent, styles, classes) {
	let item;
	if (isString(kItem)) { item = { id: getUID(), key: kItem, info: Syms[kItem] }; }
	else if (nundef(kItem.info)) { item = { id: getUID(), key: kItem.key, info: kItem }; }
	else item = kItem;
	let info = item.info;
	let dOuter = mDiv(dParent);
	mCenterCenterFlex(dOuter);
	let d = mDiv(dOuter);
	d.innerHTML = info.text;
	if (nundef(styles)) styles = {};
	let picStyles = { family: info.family, fz: valf(styles.fz, valf(styles.h / 2, 25)), display: 'inline-block' };
	mStyle(dOuter, styles);
	mStyle(d, picStyles);
	if (isdef(classes)) mClass(dOuter, classes);
	iAdd(item, { div: dOuter, dPic: d });
	return item;
}
function iTitle(item, msg) { let dm = diTitle(item); if (isdef(dm)) dm.innerHTML = msg; }
function iToggleMultipleSelection(item, items) {
	let ui = iDiv(item);
	item.isSelected = !item.isSelected;
	if (item.isSelected) mClass(ui, 'framedPicture'); else mRemoveClass(ui, 'framedPicture');
	if (isdef(items)) {
		for (const i1 of items) {
			if (i1.isSelected) {
				console.assert(!items.includes(i1), 'UNSELECTED PIC IN PICLIST!!!!!!!!!!!!')
				items.push(i1);
			} else {
				console.assert(items.includes(i1), 'PIC NOT IN PICLIST BUT HAS BEEN SELECTED!!!!!!!!!!!!')
				removeInPlace(items, i1);
			}
		}
	}
}
function iToggleSingleSelection(item, items) {
	let ui = iDiv(item);
	let selItem = null;
	item.isSelected = !item.isSelected;
	if (item.isSelected) { mClass(ui, 'framedPicture'); selItem = item; }
	else { mRemoveClass(ui, 'framedPicture'); selItem = null; }
	if (isdef(items) && selItem) {
		for (const i1 of items) {
			if (i1.isSelected && i1 != item) {
				i1.isSelected = false;
				mRemoveClass(iDiv(i1), 'framedPicture');
				break;
			}
		}
	}
	return selItem;
}
function iZMax(n) { if (isdef(n)) ZMax = n; ZMax += 1; return ZMax; }
function jsCopy(o) {
	return JSON.parse(JSON.stringify(o));
}
function jsCopySafe(o) {
	if (nundef(o)) return;
	return JSON.parse(jsSafeStringify(o)); //macht deep copy
}
function jsonToYaml(o) {
	let y = jsyaml.dump(o);
	return y;
}
function jsSafeStringify(obj, indent = 2) {
	let cache = [];
	const retVal = JSON.stringify(
		obj,
		(key, value) =>
			typeof value === "object" && value !== null
				? cache.includes(value)
					? undefined // Duplicate reference found, discard key
					: cache.push(value) && value // Store value in our collection
				: value,
		indent
	);
	cache = null;
	return retVal;
};
function lastCond(arr, func) {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (func(arr[i])) return arr[i];
	}
	return null;
}
function lettersToArray(s) { return toLetterList(s); }
function listToString(lst) { return isEmpty(lst) ? lst : lst.join(' '); }
async function localOrRoute(key, url) {
	if (USE_LOCAL_STORAGE) {
		let x = localStorage.getItem(key);
		if (isdef(x)) return JSON.parse(x);
		else {
			let data = await route_path_yaml_dict(url);
			if (key != 'svgDict') localStorage.setItem(key, JSON.stringify(data));
			return data;
		}
	} else return await route_path_yaml_dict(url);
}
function lookup(dict, keys) {
	let d = dict;
	let ilast = keys.length - 1;
	let i = 0;
	for (const k of keys) {
		if (k === undefined) break;
		let e = d[k];
		if (e === undefined || e === null) return null;
		d = d[k];
		if (i == ilast) return d;
		i += 1;
	}
	return d;
}
function lookupAddIfToList(dict, keys, val) {
	let lst = lookup(dict, keys);
	if (isList(lst) && lst.includes(val)) return;
	lookupAddToList(dict, keys, val);
}
function lookupAddToList(dict, keys, val) {
	let d = dict;
	let ilast = keys.length - 1;
	let i = 0;
	for (const k of keys) {
		if (i == ilast) {
			if (nundef(k)) {
				alert('lookupAddToList: last key indefined!' + keys.join(' '));
				return null;
			} else if (isList(d[k])) {
				d[k].push(val);
			} else {
				d[k] = [val];
			}
			return d[k];
		}
		if (nundef(k)) continue; //skip undef or null values
		if (d[k] === undefined) d[k] = {};
		d = d[k];
		i += 1;
	}
	return d;
}
function lookupDef(o, proplist, def) { return lookup(o, proplist) || def; }
function lookupRemoveFromList(dict, keys, val, deleteIfEmpty = false) {
	let d = dict;
	let ilast = keys.length - 1;
	let i = 0;
	for (const k of keys) {
		if (i == ilast) {
			if (nundef(k)) {
				alert('lookupRemoveFromList: last key indefined!' + keys.join(' '));
				return null;
			} else if (isList(d[k])) {
				removeInPlace(d[k], val);
				if (deleteIfEmpty && isEmpty(d[k])) delete d[k];
			} else {
				if (d[k] === undefined) {
					error('lookupRemoveFromList not a list ' + d[k]);
					return null;
				}
			}
			return d[k];
		}
		if (nundef(k)) continue; //skip undef or null values
		if (d[k] === undefined) {
			error('lookupRemoveFromList key not found ' + k);
			return null;
		}
		d = d[k];
		i += 1;
	}
	return d;
}
function lookupSet(dict, keys, val) {
	let d = dict;
	let ilast = keys.length - 1;
	let i = 0;
	for (const k of keys) {
		if (nundef(k)) continue; //skip undef or null values
		if (d[k] === undefined) d[k] = (i == ilast ? val : {});
		if (nundef(d[k])) d[k] = (i == ilast ? val : {});
		d = d[k];
		if (i == ilast) return d;
		i += 1;
	}
	return d;
}
function lookupSetOverride(dict, keys, val) {
	let d = dict;
	let ilast = keys.length - 1;
	let i = 0;
	for (const k of keys) {
		if (i == ilast) {
			if (nundef(k)) {
				alert('lookupAddToList: last key indefined!' + keys.join(' '));
				return null;
			} else {
				d[k] = val;
			}
			return d[k];
		}
		if (nundef(k)) continue; //skip undef or null values
		if (nundef(d[k])) d[k] = {};
		d = d[k];
		i += 1;
	}
	return d;
}
function loop(n) { return range(1, n); }
function luminance(r, g, b) {
	var a = [r, g, b].map(function (v) {
		v /= 255;
		return v <= 0.03928
			? v / 12.92
			: Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function mAddContent(d, content, styles, opt) { return mAddContentAndMeasure(d, content, styles, opt, false, false); }
function mAddContentAndMeasure(d, content, styles, opts = {}, wNeeded = true, hNeeded = true) {
	let keepInLine = valf(opts.keepInLine, false);
	let replace = valf(opts.replace, false);
	let newline = valf(opts.newline, false);
	let d1 = content;
	if (isDOM(content)) mAppend(d, content);
	else if (isDict(content)) {
		d1 = iDiv(content);
		if (isDOM(d1)) {
			mAppend(d, d1);
		} else if (nundef(d1)) {
			d1 = mDiv(d, { bg: 'random' });
			mNode(content, d1);
		} else {
			doms = recFindDOMs(content);
			d1 = mDiv(d, { bg: 'random' });
			for (const dom of doms) { mAppend(d1, dom); }
		}
	} else if (isList(content)) {
		d1 = mDiv(d, { bg: 'random' });
		content = content.join(',');
		d1.innerHTML = content;
	} else if (isString(content) && content[0] === '<') {
		d1 = createElementFromHtml(cont);
		mAppend(d, d1);
	} else {
		d1 = mText(content, d);
	}
	if (replace) clearElement(d);
	if (keepInLine) styles['white-space'] = 'nowrap';
	if (newline) styles.display = 'block';
	if (isdef(styles)) mStyle(d1, styles);
	if (wNeeded && hNeeded) setSizeNeeded(d);
	else if (wNeeded) setWNeeded(d);
	else if (hNeeded) setHNeeded(d);
	return d1;
}
function mAddContentAndMeasureH(d, content, styles, opt) { return mAddContentAndMeasure(d, content, styles, opt, false, true); }
function mAddContentAndMeasureW(d, content, styles, opt) { return mAddContentAndMeasure(d, content, styles, opt, true, false); }
function makeRect(x, y, w, h) { let r = { x: x, y: y, w: w, h: h }; extendRect(r); return r; }
function makeUnitString(nOrString, unit = 'px', defaultVal = '100%') {
	if (nundef(nOrString)) return defaultVal;
	if (isNumber(nOrString)) nOrString = '' + nOrString + unit;
	return nOrString;
}
function mAppend(d, child) { d.appendChild(child); return child; }
function mAttrs(elem, attrs) { for (const k in attrs) { elem.setAttribute(k, attrs[k]); } }
function mBackground(bg, fg) { mStyle(document.body, { bg: bg, fg: fg }); }
function mBoxFromMargins(dParent, t, r, b, l, styles, id, inner, classes) {
	let d = mDiv(dParent, { position: 'absolute', top: t, right: r, bottom: b, left: l }, id, inner, classes);
	let pos = dParent.style.position;
	if (pos != 'absolute') dParent.style.position = 'relative';
	if (isdef(styles)) mStyle(d, styles);
	return d;
}
function mButton(caption, handler, dParent, styles, classes, id) {
	let x = mCreate('button');
	x.innerHTML = caption;
	if (isdef(handler)) x.onclick = handler;
	if (isdef(dParent)) dParent.appendChild(x);
	if (isdef(styles)) mStyle(x, styles);
	if (isdef(classes)) mClass(x, classes);
	if (isdef(id)) x.id = id;
	return x;
}
function mBy(id) { return document.getElementById(id); }
function mCellContent(dCell, styles, html) {
	clearElement(dCell);
	let d = mDiv(dCell, { w: '100%', h: '100%' });
	mCenterCenterFlex(d);
	let d1 = mDiv(d, styles, null, html);
	mCenterCenterFlex(d1);
	return d1;
}
function mCenterAt(d, x, y) {
	let rect = getRect(d);
	mPos(d, x - rect.w / 2, y - rect.h / 2);
}
function mCenterCenterFlex(d) { mCenterFlex(d, true, true, true); }
function mCenterFlex(d, hCenter = true, vCenter = false, wrap = true) {
	let styles = { display: 'flex' };
	if (hCenter) styles['justify-content'] = 'center';
	styles['align-content'] = vCenter ? 'center' : 'flex-start';
	if (wrap) styles['flex-wrap'] = 'wrap';
	mStyle(d, styles);
}
function mCenterFlexNowrap(d) { mCenterFlex(d, true, true, false); }
function mCheckbox(label, val, dParent, handler, styles) {
	styles.align = 'left';
	let d = mDiv(dParent, styles);
	let hpad = valf(styles.hpadding, 4);
	let dLabel = mDiv(d, { w: '40%', align: 'right', hpadding: hpad, display: 'inline-block' }, null, label); //createElementFromHTML(`<label>${label}</label>`);
	let d2 = mDiv(d, { display: 'inline', w: '50%', hpadding: hpad });
	let inp = createElementFromHTML(
		`<input type="checkbox" class="checkbox" ` + (val === true ? 'checked=true' : '') + ` >`);
	mAppend(d2, inp);
	inp.onchange = (ev) => { handler(inp.checked, ev); };
	return inp;
}
function mCheckbox_dep(label, val, dParent, styles = {}, id) {
	let d = mDiv(dParent, { display: 'inline-block', align: 'left' });
	let inp = createElementFromHTML(
		`<input type="checkbox" class="checkbox" ${(val === true ? 'checked=true' : '')} >`
	);
	if (isdef(id)) inp.id = id;
	let labelui = createElementFromHTML(`<label>${label}</label>`);
	mAppend(d, labelui);
	mAppend(labelui, inp);
	mStyle(inp, styles);
	mClass(inp, 'input');
	return inp;
}
function mCircle(dParent, x, y, rad, color) {
	let d = mDiv(dParent, { w: 2 * rad, h: 2 * rad, bg: color, rounding: '50%' });
	mCenterAt(d, x, y);
	return d;
}
function mClass(d) {
	if (arguments.length == 2 && isList(arguments[1])) for (let i = 0; i < arguments[1].length; i++) d.classList.add(arguments[1][i]);
	else for (let i = 1; i < arguments.length; i++) d.classList.add(arguments[i]);
}
function mClass0(d) { d.className = ''; }
function mClassRemove(d) { for (let i = 1; i < arguments.length; i++) d.classList.remove(arguments[i]); }
function mClassReplace(d) { mClass0(d); mClass(...arguments); }
function mColorPicker0(dParent, palette, onColor) {
	let dPalette = mDiv(dParent, { margin: 4 }); mFlex(dPalette);
	let items = [];
	for (const c of palette) {
		dColor = mDiv(dPalette, { display: 'inline-block', w: 50, h: 50, bg: c, rounding: 4, margin: 4 });
		let item = { color: c, isSelected: false };
		iAdd(item, { div: dColor });
		items.push(item);
	}
	let picker = { div: dPalette, selected: null, items: items };
	for (const item of items) {
		iDiv(item).onclick = (ev) => {
			console.log('click!!!', ev.target);
			picker.selectedItem = iToggleSingleSelection(item, items);
			onColor(item.color);
		}
	}
	return picker;
}
function mColorPicker1(dParent, palette, onColor) {
	let dPalette = mDiv(dParent, { margin: 4 }); mFlex(dPalette);
	let items = [];
	for (const c of palette) {
		dColor = mDiv(dPalette, { display: 'inline-block', w: 50, h: 50, bg: c, rounding: 4, margin: 4 });
		let item = { color: c, isSelected: false };
		iAdd(item, { div: dColor });
		items.push(item);
	}
	let picker = { div: dPalette, selected: null, items: items };
	for (const item of items) {
		iDiv(item).onclick = (ev) => {
			console.log('click!!!', ev.target);
			picker.selectedItem = iToggleSingleSelection(item, items);
			onColor(item.color);
		}
	}
	let elem = mCreate('input'); mAppend(dPalette, elem);
	let alphaPicker = new JSColor(elem, {});
	let alphaItem = { isSelected: false };
	alphaPicker.onChange = () => { alphaItem.color = elem.value; onColor(elem.value); }
	alphaItem.picker = alphaPicker;
	iAdd(alphaItem, { div: elem });
	items.push(alphaItem);
	return picker;
}
function mColorPicker2(dParent, palette, onColor, initialColor) {
	let elem = mDiv(dParent, { w: 50, h: 50, display: 'inline-block' });
	let picker = new JSColor(elem, {
		alpha: 'ff',
		closeButton: true,
		value: initialColor,
		palette: palette,
	});
	picker.onInput = () => { let c = picker.toHEXAString(); onColor(c); console.log('picked', c); }
	return picker;
}
function mColorPicker3(elem, palette, onColor, initialColor) {
	let picker = new JSColor(elem, {
		alpha: 'ff',
		closeButton: true,
		value: initialColor,
		palette: palette,
	});
	picker.onInput = () => { let c = picker.toHEXAString(); onColor(c); console.log('picked', c); }
	return picker;
}
function mColorPickerBehavior(value, targetImage, elem, handler) {
	let hues = arrTake(getHueWheel(value), 10);
	let colorPalette = hues.map(x => anyColorToStandardString(colorHSLBuild(x)));
	let palette = isdef(targetImage) ? getPaletteFromImage(targetImage) : colorPalette;
	mStyle(elem, { bg: value });
	let inp = new JSColor(elem, { alpha: 'ff', closeButton: true, value: value, palette: palette, });
	inp.onInput = () => { let c = inp.toHEXAString(); handler(c); }
	return inp;
}
function mColorPickerControl(label, value, targetImage, dParent, handler, styles) {
	let d = mDiv(dParent, styles);
	let hpad = valf(styles.hpadding, 6);
	let dLabel = mDiv(d, { 'vertical-align': 'top', w: '35%', align: 'right', hpadding: hpad, display: 'inline-block' }, null, label);
	let hues = arrTake(getHueWheel(value), 10);
	let colorPalette = hues.map(x => anyColorToStandardString(colorHSLBuild(x)));
	let palette = isdef(targetImage) ? getPaletteFromImage(targetImage) : colorPalette;
	let elem = mDiv(d, { w: '55%', hpadding: hpad, h: 24, rounding: hpad, display: 'inline-block' });
	let inp = new JSColor(elem, {
		alpha: 'ff',
		closeButton: true,
		value: value,
		palette: palette,
	});
	inp.onInput = () => { let c = inp.toHEXAString(); handler(c); }
	return inp;
}
function mContainer(d, styles = {}) {
	let defOuterStyles = {
		display: 'inline-flex', 'flex-direction': 'column',
		'justify-content': 'center', 'align-items': 'center', 'vertical-align': 'top',
		padding: 0, box: true
	};
	addKeys(d, defOuterStyles);
	mStyle(d, styles);
}
function mCreate(tag, styles, id) { let d = document.createElement(tag); if (isdef(id)) d.id = id; if (isdef(styles)) mStyle(d, styles); return d; }
function mDestroy(elem) { if (isString(elem)) elem = mById(elem); purge(elem); } // elem.parentNode.removeChild(elem); }
function mDiv(dParent, styles, id, inner, classes, sizing) {
	let d = mCreate('div');
	if (dParent) mAppend(dParent, d);
	if (isdef(styles)) mStyle(d, styles);
	if (isdef(classes)) mClass(d, classes);
	if (isdef(id)) d.id = id;
	if (isdef(inner)) d.innerHTML = inner;
	if (isdef(sizing)) { setRect(d, sizing); }
	return d;
}
function mDiv100(dParent, styles, id, sizing = true) { let d = mDiv(dParent, styles, id); mSize(d, 100, 100, '%', sizing); return d; }
function mDivRestOfPage(dParent, dAbove, styles, id, inner, classes, sizing) {
	let d = mDiv(dParent, styles, id, inner, classes, sizing);
	let fSize = () => {
		let top = getRect(dAbove).h;
		console.log('top', top, '?');
		let h = window.innerHeight - (isNumber(top) ? top : 31);
		mSize(d, '100%', h);
		setRect(d);
		console.log('d', d);
	};
	new ResizeObserver(() => {
		let r = getRect(dAbove);
		console.log('haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar', r);
		fSize();
	}).observe(dAbove);
	window.onresize = fSize;
	return d;
}
function mDover(dParent, styles = {}, sizing = true) {
	let d = mDiv(dParent, styles);
	mIfNotRelative(dParent);
	mStyle(d, { position: 'absolute', left: 0, top: 0, w: '100%', h: '100%' });
	setRect(d, sizing);
	return d;
}
function mDropImage(e, img) {
	var dt = e.dataTransfer;
	console.log('dropped',dt)
	var files = dt.files;
	if (files.length) {
		let imgFile = files[0];
		var reader = new FileReader();
		reader.onload = function (e) {
			img.src = e.target.result;
			imgFile.data = e.target.result; //img.toDataURL("image/png");
		}
		reader.readAsDataURL(imgFile);
	} else {
		console.log('dropped on', e.target, 'img', img);
		clearElement(img);
		var html = dt.getData('text/html');
		console.log('__________dataTransfer', html);
		let match = html && /\bsrc="?([^"\s]+)"?\s*/.exec(html);
		let url = match && match[1];
		if (url) {
			console.log('JA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
			img.onerror = function () {
				alert("Error in uploading");
			}
			img.crossOrigin = ""; // if from different origin, same as "anonymous"
			img.src = url;
		}
	}
}
function measureWord(w, fz) { let styles = { fz: fz, family: 'arial' }; return getSizeWithStyles(w, styles); }
function mEdit(label, value, dParent, handler, styles, classes, id) {
	let d = mDiv(dParent, styles);
	let hpad = valf(styles.hpadding, 4);
	let dLabel = mDiv(d, { w: '50%', align: 'right', hpadding: hpad, display: 'inline-block' }, null, label); //createElementFromHTML(`<label>${label}</label>`);
	let inp = createElementFromHTML(`<div contenteditable="true" spellcheck="false">${value}</div>	`)
	mAppend(d, inp);
	mStyle(inp, { display: 'inline-block', w: '50%', align: 'left', hpadding: hpad });
	inp.addEventListener('keydown', unfocusOnEnter);
	inp.addEventListener('focusout', ev => { handler(inp.innerHTML, ev); });
	inp.onclick = ev => selectText(ev.target);
	if (isdef(classes)) mClass(inp, classes);
	if (isdef(id)) inp.id = id;
	return inp;
}
function mEditableInput(dParent, label, val, styles, classes, id) {
	let labelElem = createElementFromHTML(`<span>${label}</span>	`)
	let elem = createElementFromHTML(`<span contenteditable="true" spellcheck="false">${val}</span>	`)
	elem.addEventListener('keydown', (ev) => {
		if (ev.key === 'Enter') {
			ev.preventDefault();
			mBy('dummy').focus();
		}
	});
	let dui = mDiv(dParent, { margin: 2 });
	mAppend(dui, labelElem);
	mAppend(dui, elem);
	if (isdef(styles)) {
		if (isdef(styles.wInput)) mStyle(elem, { wmin: styles.wInput });
		mStyle(elem, styles);
	}
	if (isdef(classes)) mStyle(elem, classes);
	if (isdef(id)) elem.id = id;
	return elem;
}
function mEditableOnEdited(id, dParent, label, initialVal, onEdited, onOpening, styles, classes) {
	let inp = mEditableInput(dParent, label, initialVal, styles, classes);
	inp.id = id;
	if (isdef(onOpening)) { inp.addEventListener('focus', ev => onOpening(ev)); }
	inp.addEventListener('focusout', ev => {
		window.getSelection().removeAllRanges();
		if (isdef(onEdited)) onEdited(inp.innerHTML, ev);
	});
	return inp;
}
function mEditNumber(label, value, dParent, handler, styles, classes, id, triggerOnChange = true) {
	let d = mDiv(dParent, styles);
	let hpad = valf(styles.hpadding, 4);
	let dLabel = mDiv(d, { w: '50%', align: 'right', hpadding: hpad, display: 'inline-block' }, null, label); //createElementFromHTML(`<label>${label}</label>`);
	let inp = createElementFromHTML(`<div contenteditable="true" spellcheck="false">${value}</div>	`)
	mAppend(d, inp);
	let button = mButton('+', triggerOnChange ? ev => { incInput(inp); handler(inp.innerHTML, ev); }
		: ev => { incInput(inp); }, d);
	mStyle(inp, { display: 'inline-block', w: '40%', align: 'left', hpadding: hpad });
	inp.addEventListener('keydown', unfocusOnEnter);
	inp.addEventListener('focusout', ev => { handler(inp.innerHTML, ev); });
	inp.onclick = ev => selectText(ev.target);
	if (isdef(classes)) mClass(inp, classes);
	if (isdef(id)) inp.id = id;
	return inp;
}
function mEditRange(label, value, min, max, step, dParent, handler, styles, classes, id, triggerOnChange = true) {
	let d = mDiv(dParent, styles);
	let hpad = valf(styles.hpadding, 4);
	let dLabel = mDiv(d, { w: '30%', align: 'right', hpadding: hpad, display: 'inline-block' }, null, label); //createElementFromHTML(`<label>${label}</label>`);
	let inpText = createElementFromHTML(`<input type='number'  step=${step} min="${min}" max="${max}" value="${value}" ></input>`);
	let inp = createElementFromHTML(`<input type="range" step=${step} min="${min}" max="${max}" value="${value}" ></input>`);
	mAppend(d, inpText);
	mAppend(d, inp);
	mStyle(inpText, { display: 'inline', w: '20%', align: 'left', hpadding: hpad });
	mStyle(inp, { display: 'inline', w: '40%', hpadding: hpad });
	inpText.onchange = (ev) => { inp.value = inpText.value; handler(inpText.value, ev); };
	inpText.onclick = ev => selectText(ev.target);
	inp.onchange = (ev) => { inpText.value = inp.value; handler(inpText.value, ev); };
	if (isdef(classes)) mClass(inp, classes);
	if (isdef(id)) inp.id = id;
	return inpText;
}
function mEditX(label, val, dParent, styles, classes, handler, id, opt = {}) {
	let defOptions = {
		alignLabel: 'right',
		fgLabel: 'silver',
		wminLabel: 120,
		alignInput: 'left',
		fgInput: 'white',
		wminInput: 50,
		wminRight: 120,
		align: 'center',
	}
	addKeys(defOptions, opt);
	let wminTotal = wminLabel + wminRight;
	if (nundef(styles)) styles = {};
	if (nundef(styles.wmin)) styles.wmin = 0;
	styles.wmin = Math.max(styles.wmin, wminTotal);
	styles.align = opt.align;
	let dOuter = mDiv(dParent, styles, id, null, classes);
	let dLabel = mDiv(dOuter, { fg: opt.fgLabel, wmin: opt.wminLabel, align: opt.alignLabel }, null, label);
	let dInput = mDiv(dOuter, { contenteditable: true, spellcheck: false, fg: opt.fgInput, wmin: opt.wminInput, align: opt.alignInput }, null, val);
	dInput.onfocusout = ev => handler(dInput.innerHTML, ev);
	dInput.onkeydown = (ev) => {
		if (ev.key === 'Enter') {
			ev.preventDefault();
			mBy('dummy').focus();
		}
	}
	return dInput;
}
function mergeCombine(base, drueber) { return _deepMerge(base, drueber); }
function mergeOverride(base, drueber) { return _deepMerge(base, drueber, { arrayMerge: _overwriteMerge }); }
function mFlex(d, or = 'h') {
	d.style.display = 'flex';
	d.style.flexFlow = (or == 'v' ? 'column' : 'row') + ' ' + (or == 'w' ? 'wrap' : 'nowrap');
}
function mFlexWrap(d) { mFlex(d, 'w'); }
function mGap(d, gap = 4) { mText('_', d, { fg: 'transparent', fz: gap, h: gap, w: '100%' }); }
function mGetStyle(elem, prop) {
	let val;
	if (isdef(STYLE_PARAMS[prop])) { val = elem.style[STYLE_PARAMS[prop]]; }
	else {
		switch (prop) {
			case 'vmargin': val = stringBefore(elem.style.margin, ' '); break;
			case 'hmargin': val = stringAfter(elem.style.margin, ' '); break;
			case 'vpadding': val = stringBefore(elem.style.padding, ' '); break;
			case 'hpadding': val = stringAfter(elem.style.padding, ' '); break;
			case 'box': val = elem.style.boxSizing; break;
			case 'dir': val = elem.style.flexDirection; break;
		}
	}
	if (nundef(val)) val = elem.style[prop];
	if (val.endsWith('px')) return firstNumber(val); else return val;
}
function mGrid(rows, cols, dParent, styles = {}) {
	let d = mDiv(dParent, styles);
	d.style.gridTemplateColumns = 'repeat(' + cols + ',1fr)';
	d.style.gridTemplateRows = 'repeat(' + rows + ',1fr)';
	d.style.display = 'inline-grid';
	d.style.padding = valf(styles.padding, styles.gap) + 'px';
	return d;
}
function mgSvg(dParent, attrs) { return mgTag('svg', dParent, attrs); }
function mgTag(tag, dParent, attrs, styles = {}, innerHTML) {
	let elem = gCreate(tag);
	mStyle(elem, styles);
	mAttrs(elem, attrs);
	if (isdef(innerHTML)) elem.innerHTML = innerHTML;
	if (isdef(dParent)) mAppend(dParent, elem);
	return elem;
}
function mgText(text, dParent, attrs, styles) { return mgTag('text', dParent, attrs, styles, text); }
function mHasClass(el, className) {
	if (el.classList) return el.classList.contains(className);
	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
function miAddLabel(item, styles) {
	let d = iDiv(item);
	if (getTypeOf(d.firstChild) == 'Text') {
		let handler = d.onmousedown;
		d.onmousedown = null;
		let dPic = d;
		let dParent = d.parentNode;
		let outerStyles = jsCopy(styles);
		addKeys({
			display: 'inline-flex', 'flex-direction': 'column',
			'justify-content': 'center', 'align-items': 'center', 'vertical-align': 'top',
		}, outerStyles);
		d = mDiv(dParent, outerStyles);
		mAppend(d, dPic);
		d.onmousedown = handler;
		let dLabel = mText(item.label, d, { fz: valf(styles.fz, 20) });
		iAdd(item, { div: d, dPic: dPic, dLabel: dLabel, options: outerStyles });
	} else if (nundef(iLabel(item))) {
		let dLabel = mText(item.label, d, { fz: valf(styles.fz, 20) });
		iAdd(item, { dLabel: dLabel });
	}
	return d;
}
function mIfNotRelative(d) { if (isEmpty(d.style.position)) d.style.position = 'relative'; }
function mImage() { return mImg(...arguments); }
function mImg(path, dParent, styles, classes, callback) {
	let d = mCreate('img');
	if (isdef(callback)) d.onload = callback;
	d.src = path;
	mAppend(dParent, d);
	if (isdef(styles)) mStyle(d, styles);
	if (isdef(classes)) mClass(d, classes);
	if (isdef(styles.w)) d.setAttribute('width', styles.w + 'px');
	if (isdef(styles.h)) d.setAttribute('height', styles.h + 'px');
	return d;
}
function mInner(html, dParent, styles) { dParent.innerHTML = html; if (isdef(styles)) mStyle(dParent, styles); }
function mInput(label, value, dParent, styles, classes, id) {
	let inp = createElementFromHTML(`<input type="text" value="${value}" />`);
	let labelui = createElementFromHTML(`<label>${label}</label>`);
	mAppend(dParent, labelui);
	mAppend(labelui, inp);
	if (isdef(styles)) mStyle(labelui, styles);
	if (isdef(classes)) mClass(inp, classes);
	if (isdef(id)) inp.id = id;
	return inp;
}
function mInsert(dParent, el, index = 0) { dParent.insertBefore(el, dParent.childNodes[index]); }
function mInsertAfter(dParent, el, index = 0) { dParent.insertAfter(el, dParent.childNodes[index]); }
function mInsertAt(dParent, el, index = 0) { mInsert(dParent, el, index); }
function mInsertFirst(dParent, el) { mInsert(dParent, el, 0); }
function miPic(item, dParent, styles, classes) {
	let info = isString(item) ? Syms[item] : isdef(item.info) ? item.info : item;
	let d = mDiv(dParent);
	d.innerHTML = info.text;
	if (nundef(styles)) styles = {};
	addKeys({ family: info.family, fz: 50, display: 'inline-block' }, styles);
	mStyle(d, styles);
	if (isdef(classes)) mClass(d, classes);
	mCenterCenterFlex(d);
	return d;
}
function mItem(id, diDOM, di = {}, addSizing = true) {
	let item = di;
	id = isdef(id) ? id : isdef(diDOM) && isdef(diDOM.div) && !isEmpty(diDOM.div.id) ? diDOM.div.id : getUID();
	item.id = iRegister(item, id);
	if (isdef(diDOM) && isdef(diDOM.div)) { diDOM.div.id = id; iAdd(item, diDOM); }
	if (addSizing) {
		if (nundef(item.sizing)) item.sizing = 'sizeToContent';
		if (nundef(item.positioning)) { item.positioning = 'absolute'; }
		if (nundef(item.posType)) { item.posType = 'center'; }
		if (isdef(diDOM) && item.sizing == 'sizeToContent') iMeasure(item, item.sizingOptions);
	}
	return item;
}
function mLabel(text, dParent, styles = {}, forId, classes) {
	let l = mCreate('label');
	l.innerHTML = text;
	mAppend(dParent, l);
	mStyle(l, styles);
	if (isdef(classes)) mClass(l, classes);
	if (isdef(forId)) { console.log('JA'); l.setAttribute('for', forId); }
	return l;
}
function mLine3(dParent, index, ids, styles) {
	let html = `<div class="lineOuter">
		<div>
			<div id="${ids[0]}" class="lineLeft"> </div>
			<div id="${ids[1]}" class="lineMiddle"> </div>
			<div id="${ids[2]}" class="lineRight"> </div>
		</div>
	</div>
	`;
	let x = createElementFromHTML(html);
	mInsert(dParent, x, index);
	return [mBy(ids[0]), mBy(ids[1]), mBy(ids[2])];
}
function mLinebreak(dParent, gap) {
	if (isString(dParent)) dParent = mBy(dParent);
	let d = mDiv(dParent);
	if (dParent.style.display == 'flex' || mHasClass(dParent, 'flexWrap')) mClass(d, 'linebreak');
	else d.innerHTML = '<br>';
	if (isdef(gap)) { d.style.minHeight = gap + 'px'; d.innerHTML = ' &nbsp; '; d.style.opacity = .2; }//return mLinebreak(dParent);}
	return d;
}
function mLinebreakNew(d, gap) { mGap(d, gap); }
function mMeasure(d) { let r = getRect(d); mStyle(d, { w: r.w, h: r.h }); return r; }
function mMoveBy(elem, dx, dy) { let rect = getRect(elem); mPos(elem, rect.x + dx, rect.y + dy); }
function mNode(o, dParent, title, isSized = false) {
	let d = mCreate('div');
	mYaml(d, o);
	let pre = d.getElementsByTagName('pre')[0];
	pre.style.fontFamily = 'inherit';
	if (isdef(title)) mInsert(d, mText(title));
	if (isdef(dParent)) mAppend(dParent, d);
	if (isDict(o)) d.style.textAlign = 'left';
	if (isSized) addClass(d, 'centered');
	return d;
}
function mNodeChangeContent(ui, content) {
	let domel = ui.getElementsByTagName('pre')[0];
	domel.innerHTML = jsonToYaml(content);
}
function mNodeFilter(o, { sort, dParent, title, lstFlatten, lstOmit, lstShow, className = 'node', omitEmpty = false } = {}) {
	let oCopy = !isEmpty(lstShow) ? filterByKey(o, lstShow) : jsCopySafe(o);
	if (isList(lstFlatten)) recConvertToSimpleList(oCopy, lstFlatten);
	if (nundef(lstOmit)) lstOmit = [];
	if (omitEmpty || !isEmpty(lstOmit)) oCopy = recDeleteKeys(oCopy, omitEmpty, lstOmit);
	let d = mCreate('div');
	if (isdef(className)) mClass(d, className);
	switch (sort) {
		case 'keys': oCopy = sortKeys(oCopy); break;
		case 'all': oCopy = JSON.sort(oCopy); break;
	}
	mYaml(d, oCopy);
	let pre = d.getElementsByTagName('pre')[0];
	pre.style.fontFamily = 'inherit';
	if (isdef(title)) mInsert(d, mText(title));
	if (isdef(dParent)) mAppend(dParent, d);
	return d;
}
function mNull(d, attr) { d.removeAttribute(attr); }
function mPanel(dParent) {
	let d = mDiv(dParent, { position: 'relative' });
	mCenterCenterFlex(d);
	return d;
}
function mParent(elem) { return elem.parentNode; }
function mPic(kItem, dParent, styles, classes) {
	let item;
	if (isString(kItem)) { item = { id: getUID(), key: kItem, info: Syms[kItem] }; }
	else if (nundef(kItem.info)) { item = { id: getUID(), key: kItem.key, info: kItem }; }
	else item = kItem;
	let info = item.info;
	let dOuter = mDiv(dParent);
	mCenterCenterFlex(dOuter);
	let d = mDiv(dOuter);
	d.innerHTML = info.text;
	if (nundef(styles)) styles = {};
	let picStyles = { family: info.family, fz: valf(styles.fz, valf(styles.h / 2, 25)), display: 'inline-block' };
	mStyle(dOuter, styles);
	mStyle(d, picStyles);
	if (isdef(classes)) mClass(dOuter, classes);
	iAdd(item, { div: dOuter, dPic: d });
	return item;
}
function mPlace(elem, pos, mavert = 4, mahor) {
	pos = pos.toLowerCase();
	let dCard = elem.parentNode; if (dCard.style.position != 'absolute') dCard.style.position = 'relative';
	let vert = mavert; // valf(margin, Math.max(wSym,hSym) / 10); //0;
	let hor = isdef(mahor) ? mahor : mavert;
	if (pos[0] == 'c' || pos[1] == 'c') {
		let rCard = getRect(dCard);
		let [wCard, hCard] = [rCard.w, rCard.h];
		let rSym = getRect(elem);
		let [wSym, hSym] = [rSym.w, rSym.h];
		switch (pos) {
			case 'cc': mStyle(elem, { position: 'absolute', left: (wCard - wSym) / 2, top: (hCard - hSym) / 2 }); break;
			case 'tc': mStyle(elem, { position: 'absolute', left: (wCard - wSym) / 2, top: vert }); break;
			case 'bc': mStyle(elem, { position: 'absolute', left: (wCard - wSym) / 2, bottom: vert }); break;
			case 'cl': mStyle(elem, { position: 'absolute', left: hor, top: (hCard - hSym) / 2 }); break;
			case 'cr': mStyle(elem, { position: 'absolute', right: hor, top: (hCard - hSym) / 2 }); break;
		}
		return;
	}
	let di = { t: 'top', b: 'bottom', r: 'right', l: 'left' };
	elem.style.position = 'absolute';
	elem.style[di[pos[0]]] = hor + 'px'; elem.style[di[pos[1]]] = vert + 'px';
}
function mPos(d, x, y, unit = 'px') { mStyle(d, { left: x, top: y, position: 'absolute' }, unit); }
function mPosBL(d, x, y, unit = 'px') { y = valf(y, x); mStyle(d, { left: x, bottom: y, position: 'absolute' }, unit); }
function mPosBottom(d, x, y, unit = 'px') { mStyle(d, { left: x, bottom: y, position: 'absolute' }, unit); }
function mPosBottomRight(d, x, y, unit = 'px') { mStyle(d, { right: x, bottom: y, position: 'absolute' }, unit); }
function mPosBR(d, x, y, unit = 'px') { y = valf(y, x); mStyle(d, { right: x, bottom: y, position: 'absolute' }, unit); }
function mPosRight(d, x, y, unit = 'px') { mStyle(d, { right: x, top: y, position: 'absolute' }, unit); }
function mPosTL(d, x, y, unit = 'px') { y = valf(y, x); mStyle(d, { left: x, top: y, position: 'absolute' }, unit); }
function mPosTR(d, x, y, unit = 'px') { y = valf(y, x); mStyle(d, { right: x, top: y, position: 'absolute' }, unit); }
function mRemove(elem) { mDestroy(elem); }
function mRemoveChildrenFromIndex(dParent, i) { while (dParent.children[i]) { mRemove(dParent.children[i]); } }
function mRemoveClass(d) { for (let i = 1; i < arguments.length; i++) d.classList.remove(arguments[i]); }
function mRemoveStyle(d, styles) { for (const k of styles) d.style[k] = null; }
function mReveal(d) { d.style.opacity = 1; }
function mScreen(dParent, styles) { let d = mDover(dParent); if (isdef(styles)) mStyle(d, styles); return d; }
function msElapsedSince(msStart) { return Date.now() - msStart; }
function mShape(shape, dParent, styles, pos, classes) {
	styles = valf(styles, { bg: 'random' });
	styles.display = 'inline-block';
	let x;
	if (isdef(PolyClips[shape])) {
		let d = mDiv(dParent, styles, null, null, classes);
		styles['clip-path'] = PolyClips[shape];
		mStyle(d, styles);
		x = d;
	} else {
		styles.rounding = shape == 'circle' || shape == 'ellipse' ? '50%' : styles.rounding;
		x = mDiv(dParent, styles, null, null, classes);
	}
	if (isdef(pos)) { mPlace(x, pos); }
	return x;
}
function mShapeR(shape = 'hex', dParent = null, styles = {}, pos, classes) {
	let x;
	let bg = isdef(styles.bg) ? computeColorX(styles.bg) : 'conic-gradient(green,pink,green)';
	let sz = isdef(styles.sz) ? styles.sz : isdef(styles.w) ? styles.w : isdef(styles.h) ? styles.h : null;
	if (isdef(PolyClips[shape])) {
		sz = valf(sz, 80);
		let html = `<div style=
		"--b:${bg};
		--clip:${PolyClips[shape]};
		--patop:100%;
		--w:${sz}px;
		"></div>`;
		x = createElementFromHtml(html);
	} else {
		x = mShape(shape, dParent, styles, pos, classes);
		return x;
	}
	if (sz) {
		bvar = sz > 120 ? 8 : sz > 80 ? 5 : sz > 50 ? 3 : 1;
		mClass(x, "weired" + bvar);
		mStyle(x, { w: sz });
	}
	if (isdef(dParent)) mAppend(dParent, x);
	if (isdef(classes)) mClass(x, classes);
	if (isdef(pos)) { mPlace(x, pos); }
	return x;
}
function mSidebar(title, dParent, styles, id, inner) {
	let elem = createElementFromHtml(`
	<div id="${id}" class="w3sidebar">
		<h1>${title}</h1>
	  <a href="javascript:void(0)" class="closebtn">×</a>
	</div>	
	`);
	function openNav() {
		elem.style.width = "250px";
		dParent.style.marginLeft = "250px";
	}
	function closeNav() {
		elem.style.width = "0";
		dParent.style.marginLeft = "0";
	}
	elem.children[1].onclick = closeNav;
	mClass(dParent, 'w3sidebarParent');
	let dContent = mDiv(elem);
	mInsert(dParent.parentNode, elem);
	return { div: elem, dContent: dContent, fOpen: openNav, fClose: closeNav };
}
function mSize(d, w, h, unit = 'px', sizing) { if (nundef(h)) h = w; mStyle(d, { width: w, height: h }, unit); if (isdef(sizing)) setRect(d, sizing); }
function msNow() { return Date.now(); }
function mSpan(dParent, styles, id, inner, classes, sizing) {
	let d = mCreate('span');
	if (dParent) mAppend(dParent, d);
	if (isdef(styles)) mStyle(d, styles);
	if (isdef(classes)) mClass(d, classes);
	if (isdef(id)) d.id = id;
	if (isdef(inner)) d.innerHTML = inner;
	if (isdef(sizing)) { setRect(d, sizing); }
	return d;
}
function msToTime(ms) {
	let secs = Math.floor(ms / 1000);
	let mins = Math.floor(secs / 60);
	secs = secs - mins * 60;
	let hours = Math.floor(mins / 60);
	mins = mins - hours * 60;
	return { h: hours, m: mins, s: secs };
}
function mStyle(elem, styles, unit = 'px') {
	if (isdef(styles.vmargin)) { styles.mabottom = styles.matop = styles.vmargin; }
	if (isdef(styles.hmargin)) { styles.maleft = styles.maright = styles.hmargin; }
	const paramDict = {
		align: 'text-align',
		bg: 'background-color',
		fg: 'color',
		hgap: 'column-gap',
		vgap: 'row-gap',
		matop: 'margin-top',
		maleft: 'margin-left',
		mabottom: 'margin-bottom',
		maright: 'margin-right',
		patop: 'padding-top',
		paleft: 'padding-left',
		pabottom: 'padding-bottom',
		paright: 'padding-right',
		rounding: 'border-radius',
		w: 'width',
		h: 'height',
		wmin: 'min-width',
		hmin: 'min-height',
		wmax: 'max-width',
		hmax: 'max-height',
		fontSize: 'font-size',
		fz: 'font-size',
		family: 'font-family',
		weight: 'font-weight',
		z: 'z-index'
	};
	let bg, fg;
	if (isdef(styles.bg) || isdef(styles.fg)) {
		[bg, fg] = getExtendedColors(styles.bg, styles.fg, styles.alpha);
	}
	if (isdef(styles.vpadding) || isdef(styles.hpadding)) {
		styles.padding = valf(styles.vpadding, 0) + unit + ' ' + valf(styles.hpadding, 0) + unit;
	}
	if (isdef(styles.upperRounding)) {
		let rtop = '' + valf(styles.upperRounding, 0) + unit;
		let rbot = '0' + unit;
		styles['border-radius'] = rtop + ' ' + rtop + ' ' + rbot + ' ' + rbot;
	} else if (isdef(styles.lowerRounding)) {
		let rbot = '' + valf(styles.lowerRounding, 0) + unit;
		let rtop = '0' + unit;
		styles['border-radius'] = rtop + ' ' + rtop + ' ' + rbot + ' ' + rbot;
	}
	if (isdef(styles.box)) styles['box-sizing'] = 'border-box';
	for (const k in styles) {
		let val = styles[k];
		let key = k;
		if (isdef(paramDict[k])) key = paramDict[k];
		else if (k == 'font' && !isString(val)) {
			let fz = f.size; if (isNumber(fz)) fz = '' + fz + 'px';
			let ff = f.family;
			let fv = f.variant;
			let fw = isdef(f.bold) ? 'bold' : isdef(f.light) ? 'light' : f.weight;
			let fs = isdef(f.italic) ? 'italic' : f.style;
			if (nundef(fz) || nundef(ff)) return null;
			let s = fz + ' ' + ff;
			if (isdef(fw)) s = fw + ' ' + s;
			if (isdef(fv)) s = fv + ' ' + s;
			if (isdef(fs)) s = fs + ' ' + s;
			elem.style.setProperty(k, s);
			continue;
		} else if (k == 'border') {
			if (isNumber(val)) val = `solid ${val}px ${isdef(styles.fg) ? styles.fg : '#ffffff80'}`;
			if (val.indexOf(' ') < 0) val = 'solid 1px ' + val;
		} else if (k == 'layout') {
			if (val[0] == 'f') {
				val = val.slice(1);
				elem.style.setProperty('display', 'flex');
				elem.style.setProperty('flex-wrap', 'wrap');
				let hor, vert;
				if (val.length == 1) hor = vert = 'center';
				else {
					let di = { c: 'center', s: 'start', e: 'end' };
					hor = di[val[1]];
					vert = di[val[2]];
				}
				let justStyle = val[0] == 'v' ? vert : hor;
				let alignStyle = val[0] == 'v' ? hor : vert;
				elem.style.setProperty('justify-content', justStyle);
				elem.style.setProperty('align-items', alignStyle);
				switch (val[0]) {
					case 'v': elem.style.setProperty('flex-direction', 'column'); break;
					case 'h': elem.style.setProperty('flex-direction', 'row'); break;
				}
			} else if (val[0] == 'g') {
				val = val.slice(1);
				elem.style.setProperty('display', 'grid');
				let n = allNumbers(val);
				let cols = n[0];
				let w = n.length > 1 ? '' + n[1] + 'px' : 'auto';
				elem.style.setProperty('grid-template-columns', `repeat(${cols}, ${w})`);
				elem.style.setProperty('place-content', 'center');
			}
		} else if (k == 'layflex') {
			elem.style.setProperty('display', 'flex');
			elem.style.setProperty('flex', '0 1 auto');
			elem.style.setProperty('flex-wrap', 'wrap');
			if (val == 'v') { elem.style.setProperty('writing-mode', 'vertical-lr'); }
		} else if (k == 'laygrid') {
			elem.style.setProperty('display', 'grid');
			let n = allNumbers(val);
			let cols = n[0];
			let w = n.length > 1 ? '' + n[1] + 'px' : 'auto';
			elem.style.setProperty('grid-template-columns', `repeat(${cols}, ${w})`);
			elem.style.setProperty('place-content', 'center');
		}
		if (key == 'font-weight') { elem.style.setProperty(key, val); continue; }
		else if (key == 'background-color') elem.style.background = bg;
		else if (key == 'color') elem.style.color = fg;
		else if (key == 'opacity') elem.style.opacity = val;
		else if (key == 'wrap') elem.style.flexWrap = 'wrap';
		else if (startsWith(key, 'dir')) {
			isCol = val[0] == 'c';
			elem.style.flexDirection = isCol ? 'column' : 'row';
			if (isCol && nundef(styles.hmax)) {
				let rect = getRect(elem.parentNode); //console.log('rect', rect);
				elem.style.maxHeight = rect.h * .9;
				elem.style.alignContent = 'start';
			} else if (nundef(styles.wmax)) elem.style.maxWidth = '90%';
		} else if (key == 'flex') {
			if (isNumber(val)) val = '' + val + ' 1 0%';
			elem.style.setProperty(key, makeUnitString(val, unit));
		} else {
			elem.style.setProperty(key, makeUnitString(val, unit));
		}
	}
}
function mStyleToCy(di, group) { return translateStylesToCy(di, group); }
function mStyleTranslate(prop, val, convertNumbers = true) {
	const paramDict = {
		align: 'text-align',
		bg: 'background-color',
		fg: 'color',
		hgap: 'column-gap',
		vgap: 'row-gap',
		matop: 'margin-top',
		maleft: 'margin-left',
		mabottom: 'margin-bottom',
		maright: 'margin-right',
		patop: 'padding-top',
		paleft: 'padding-left',
		pabottom: 'padding-bottom',
		paright: 'padding-right',
		rounding: 'border-radius',
		w: 'width',
		h: 'height',
		wmin: 'min-width',
		hmin: 'min-height',
		wmax: 'max-width',
		hmax: 'max-height',
		fontSize: 'font-size',
		fz: 'font-size',
		family: 'font-family',
		weight: 'font-weight',
		z: 'z-index'
	};
	let valDict = {
		random: randomColor(),
	};
	let propName = isdef(paramDict[prop]) ? paramDict[prop] : prop;
	let newVal = isdef(valDict[val]) ? valdict[val] : val;
	if (convertNumbers && isNumber(newVal)) newVal = '' + newVal + 'px';
	return [propName, newVal];
}
function mSuit(key, d, styles, pos, classes) {
	let svg = gCreate('svg');
	let el = gCreate('use');
	el.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + key);
	mAppend(svg, el);
	if (isdef(d)) mAppend(d, svg);
	styles = valf(styles, { bg: 'random' });
	let sz = isdef(styles.h) ? styles.h : isdef(styles.sz) ? styles.sz : styles.w;
	if (isdef(sz)) { el.setAttribute('height', sz); svg.setAttribute('sz', sz); }
	mStyle(el, styles);
	if (isdef(classes)) mClass(svg, classes);
	if (isdef(d)) { mAppend(d, svg); gSizeToContent(svg); }
	if (isdef(pos)) { mSuitPos(svg, pos); }
	return svg;
}
function mSuitPos(svg, pos) {
	pos = pos.toLowerCase();
	if (pos[0] == 'c' || pos[1] == 'c') {
		let dCard = svg.parentNode;
		let r = getRect(dCard);
		let [wCard, hCard] = [r.w, r.h];
		let [wSym, hSym] = [svg.getAttribute('width'), svg.getAttribute('height')];
		switch (pos) {
			case 'cc': mStyle(svg, { position: 'absolute', left: (wCard - wSym) / 2, top: (hCard - hSym) / 2 }); break;
			case 'tc': mStyle(svg, { position: 'absolute', left: (wCard - wSym) / 2, top: 0 }); break;
			case 'bc': mStyle(svg, { position: 'absolute', left: (wCard - wSym) / 2, bottom: 0 }); break;
			case 'cl': mStyle(svg, { position: 'absolute', left: 0, top: (hCard - hSym) / 2 }); break;
			case 'cr': mStyle(svg, { position: 'absolute', right: 0, top: (hCard - hSym) / 2 }); break;
		}
		return;
	}
	let di = { t: 'top', b: 'bottom', r: 'right', l: 'left' };
	svg.style.position = 'absolute';
	svg.style[di[pos[0]]] = svg.style[di[pos[1]]] = 0;
}
function mSuitSize(suit, sz) { suit.setAttribute('sz', sz); suit.firstChild.setAttribute('height', sz); gSizeToContent(suit); }
function mSwap(obj1, obj2) {
	var parent2 = obj2.parentNode;
	var next2 = obj2.nextSibling;
	if (next2 === obj1) {
		parent2.insertBefore(obj1, obj2);
	} else {
		obj1.parentNode.insertBefore(obj2, obj1);
		if (next2) {
			parent2.insertBefore(obj1, next2);
		} else {
			parent2.appendChild(obj1);
		}
	}
}
function mSym(key, dParent, styles = {}, pos, classes) {
	let info = Syms[key];
	styles.display = 'inline-block';
	styles.family = info.family;
	let sizes;
	if (isdef(styles.sz)) { sizes = mSymSizeToBox(info, styles.sz, styles.sz); }
	else if (isdef(styles.w) && isdef(styles.h)) { sizes = mSymSizeToBox(info, styles.w, styles.h); }
	else if (isdef(styles.fz)) { sizes = mSymSizeToFz(info, styles.fz); }
	else if (isdef(styles.h)) { sizes = mSymSizeToH(info, styles.h); }
	else if (isdef(styles.w)) { sizes = mSymSizeToW(info, styles.w); }
	else { sizes = mSymSizeToFz(info, CSZ / 8); }
	styles.fz = sizes.fz;
	styles.w = sizes.w;
	styles.h = sizes.h;
	styles.align = 'center';
	if (isdef(styles.bg) && info.family != 'emoNoto') { styles.fg = styles.bg; delete styles.bg; }
	let x = mDiv(dParent, styles, null, info.text);
	if (isdef(classes)) mClass(x, classes);
	if (isdef(pos)) { mPlace(x, pos); }
	return x;
}
function mText(text, dParent, styles, classes) {
	if (!isString(text)) text = text.toString();
	let d = mDiv(dParent);
	if (!isEmpty(text)) { d.innerHTML = text; }
	if (isdef(styles)) mStyle(d, styles);
	if (isdef(classes)) mClass(d, classes);
	return d;
}
function mTextFit(text, { wmax, hmax }, dParent, styles, classes) {
	let d = mDiv(dParent);
	if (!isEmpty(text)) d.innerHTML = text;
	if (nundef(styles) && (isdef(wmax) || isdef(hmax))) {
		styles = {};
	}
	if (isdef(wmax)) styles.width = wmax;
	if (isdef(hmax)) styles.height = hmax;
	if (isdef(styles)) mStyle(d, styles);
	if (isdef(classes)) mClass(d, classes);
	return d;
}
function mTitledDiv(title, dParent, outerStyles = {}, innerStyles = {}, id) {
	let d = mDiv(dParent, outerStyles);
	let dTitle = mDiv(d);
	dTitle.innerHTML = title;
	innerStyles.w = '100%';
	innerStyles.h = outerStyles.h - getRect(dTitle).h;
	let dContent = mDiv(d, innerStyles, id);
	return dContent;
}
function mTitledMessageDiv(title, dParent, id, outerStyles = {}, contentStyles = {}, titleStyles = {}, messageStyles = {}, titleOnTop = true) {
	let d = mDiv(dParent, outerStyles, id);
	let dTitle = mDiv(d, titleStyles, id + '.title'); dTitle.innerHTML = title;
	let dMessage = mDiv(d, messageStyles, id + '.message'); dMessage.innerHTML = 'hallo!';
	contentStyles.w = '100%';
	let hTitle = getRect(dTitle).h, hMessage = getRect(dMessage).h, hArea = getRect(d).h;
	let hContent = hArea - hTitle - hMessage - 4;
	mStyle(dMessage, { h: hMessage + 2 });
	mStyle(dTitle, { h: hTitle + 2 });
	contentStyles.hmin = hContent;
	let dContent = mDiv(d, contentStyles, id + '.content');
	if (!titleOnTop) { mAppend(d, dTitle); }
	return d;
}
function mToggle(d, prop, val1, val2) {
	let val = d.style[prop]; //$(d).style(prop);
	if (val === null && val1 == 0) val = val1;
	else if (isNumber(val1)) val = firstNumber(val);
	if (val == val1) d.style[prop] = makeUnitString(val2); else d.style[prop] = makeUnitString(val1);
}
function mYaml(d, js) {
	d.innerHTML = '<pre>' + jsonToYaml(js) + '</pre>';
}
function mZone(dParent, styles, pos) {
	let d = mDiv(dParent);
	if (isdef(styles)) mStyle(d, styles);
	if (isdef(pos)) {
		mIfNotRelative(dParent);
		mPos(d, pos.x, pos.y);
	}
	return d;
}
function normalize(text, language) {
	if (isEmpty(text)) return '';
	text = text.toLowerCase().trim();
	if (language == 'D') {
		text = convertUmlaute(text);
	}
	return text;
}
function nRandomNumbers(n, from, to, step) {
	let arr = range(from, to, step);
	return choose(arr, n);
}
function nundef(x) { return x === null || x === undefined; }
function onkeydownHandler(ev) {
	if (nundef(DA.keydown)) DA.keydown = {}; for (const k in DA.keydown) { DA.keydown[k](ev); }
}
function onkeyupHandler(ev) {
	if (nundef(DA.keyup)) DA.keyup = {};
	for (const k in DA.keyup) {
		DA.keyup[k](ev);
	}
}
function onMovingCloneAround(ev) {
	if (DragElem === null) return;
	let mx = ev.clientX;
	let my = ev.clientY;
	let dx = mx - DragElem.drag.offsetX;
	let dy = my - DragElem.drag.offsetY;
	mStyle(DragElem, { left: dx, top: dy });
}
function onReleaseClone(ev) {
	let els = allElementsFromPoint(ev.clientX, ev.clientY);
	let source = DDInfo.source;
	let dSource = iDiv(source);
	let dropHandler = DDInfo.dropHandler;
	for (const target of DDInfo.targets) {
		let dTarget = iDiv(target);
		if (els.includes(dTarget)) {
			if (isdef(dropHandler)) {
				let cDrop = { x: ev.clientX, y: ev.clientY };
				let rTarget = getRect(dTarget);
				let cTarget = { x: rTarget.x + rTarget.w / 2, y: rTarget.y + rTarget.h / 2 };
				let [dx, dy] = [cDrop.x - cTarget.x, cDrop.y - cTarget.y];
				let [ddx, ddy] = [DragElem.drag.offsetX, DragElem.drag.offsetY];
				dropHandler(source, target, DragElem.isCopy, DragElem.clearTarget, dx, dy, ev, DragElem);
			}
			break; //as soon as found a target, stop looking for more targets!
		}
	}
	DragElem.remove();
	DragElem = null;
	document.body.onmousemove = document.body.onmouseup = null;
}
function ordinal_suffix_of(i) {
	var j = i % 10,
		k = i % 100;
	if (j == 1 && k != 11) {
		return i + "st";
	}
	if (j == 2 && k != 12) {
		return i + "nd";
	}
	if (j == 3 && k != 13) {
		return i + "rd";
	}
	return i + "th";
}
function parseRect(elem) {
	let r = elem.getAttribute('rect');
	console.log('elem.rect', r);
	if (nundef(r)) return getRect(elem);
	r = r.split(' ');
	let rect = { w: Number(r[0]), h: Number(r[1]), t: Number(r[2]), l: Number(r[3]), b: Number(r[4]), r: Number(r[5]) };
	return rect;
}
function percentOf(elem, percentW, percentH) {
	if (nundef(percentH)) percentH = percentW;
	if (nundef(percentW)) percentW = percentH = 100;
	let r = getRect(elem);
	return { w: r.w * percentW / 100, h: r.h * percentH / 100 };
}
function percentVh(percent) { return percent * document.documentElement.clientHeight / 100; }
function percentVhIncludingScrollbar(percent) {
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	return (percent * h) / 100;
}
function percentVMax(percent) { return Math.max(percentVh(percent), percentVw(percent)); }
function percentVMaxIncludingScrollbar(percent) {
	return Math.max(percentVhIncludingScrollbar(percent), percentVwIncludingScrollbar(percent));
}
function percentVMin(percent) { return Math.min(percentVh(percent), percentVw(percent)); }
function percentVMinIncludingScrollbar(percent) {
	return Math.min(percentVhIncludingScrollbar(percent), percentVwIncludingScrollbar(percent));
}
function percentVw(percent) { return percent * document.documentElement.clientWidth / 100; }
function percentVwIncludingScrollbar(percent) {
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	return (percent * w) / 100;
}
function polyPointsFrom(w, h, x, y, pointArr) {
	x -= w / 2;
	y -= h / 2;
	let pts = pointArr.map(p => [p.X * w + x, p.Y * h + y]);
	let newpts = [];
	for (const p of pts) {
		newp = { X: p[0], Y: Math.round(p[1]) };
		newpts.push(newp);
	}
	pts = newpts;
	let sPoints = pts.map(p => '' + p.X + ',' + p.Y).join(' '); //'0,0 100,0 50,80',
	return sPoints;
}
async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'omit', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return await response.text(); //'hallo';// response.json(); // parses JSON response into native JavaScript objects
}
function presentNode(o, title, area, lstFlatten, lstShow, lstOmit = [], lstOmitTopLevel = []) {
	if (!isEmpty(lstOmitTopLevel)) {
		let oNew = {};
		for (const k in o) {
			if (lstOmitTopLevel.includes(k)) continue;
			oNew[k] = o[k];
		}
		o = oNew;
	}
	addIf(lstOmit, 'act');
	addIf(lstOmit, 'ui');
	addIf(lstOmit, 'live');
	let d = isString(area) ? mBy(area) : area;
	mNodeFilter(o, { dParent: d, title: title, lstFlatten: lstFlatten, lstShow: lstShow, lstOmit: lstOmit });
}
function previewBrowsedFile(dParent, imgFile) {
	var imgView = document.createElement("div");
	imgView.className = "image-view";
	mAppend(dParent, imgView);
	var img = document.createElement("img");
	imgView.appendChild(img);
	var reader = new FileReader();
	reader.onload = function (e) {
		img.src = e.target.result;
		imgFile.data = e.target.result; //img.toDataURL("image/png");
	}
	reader.readAsDataURL(imgFile);
}
function previewImageFromFile(imgFile, img) {
	var reader = new FileReader();
	reader.onload = function (e) {
		img.src = e.target.result;
		imgFile.data = e.target.result; //img.toDataURL("image/png");
	}
	reader.readAsDataURL(imgFile);
}
function previewImageFromUrl(url, img) {
	img.onerror = function () {
		alert("Error in uploading");
	}
	img.crossOrigin = ""; // if from different origin, same as "anonymous"
	img.src = url;
}
function processCsvData_from_CBII(allText) {
	var numHeadings = 5;  // or however many elements there are in each row
	var allTextLines = allText.split(/\r\n|\n/);
	var headings = allTextLines[0].split(',');
	numHeadings = headings.length;
	let entries = allTextLines.splice(1);
	var records = { headings: headings };
	var recordsByName = {};
	for (const e of entries) {
		let o = {};
		let values = e.split(',');
		for (let i = 0; i < numHeadings; i++) {
			let k = headings[i];
			o[k] = values[i];
		}
		records[o.hexcode] = o;
		recordsByName[o.annotation] = o.hexcode;
	}
	return { records: records, recordsByName: recordsByName };
}
function pSBC(p, c0, c1, l) {
	let r,
		g,
		b,
		P,
		f,
		t,
		h,
		i = parseInt,
		m = Math.round,
		a = typeof c1 == 'string';
	if (typeof p != 'number' || p < -1 || p > 1 || typeof c0 != 'string' || (c0[0] != 'r' && c0[0] != '#') || (c1 && !a)) return null;
	if (!this.pSBCr)
		this.pSBCr = d => {
			let n = d.length,
				x = {};
			if (n > 9) {
				([r, g, b, a] = d = d.split(',')), (n = d.length);
				if (n < 3 || n > 4) return null;
				(x.r = i(r[3] == 'a' ? r.slice(5) : r.slice(4))), (x.g = i(g)), (x.b = i(b)), (x.a = a ? parseFloat(a) : -1);
			} else {
				if (n == 8 || n == 6 || n < 4) return null;
				if (n < 6) d = '#' + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : '');
				d = i(d.slice(1), 16);
				if (n == 9 || n == 5) (x.r = (d >> 24) & 255), (x.g = (d >> 16) & 255), (x.b = (d >> 8) & 255), (x.a = m((d & 255) / 0.255) / 1000);
				else (x.r = d >> 16), (x.g = (d >> 8) & 255), (x.b = d & 255), (x.a = -1);
			}
			return x;
		};
	(h = c0.length > 9),
		(h = a ? (c1.length > 9 ? true : c1 == 'c' ? !h : false) : h),
		(f = pSBCr(c0)),
		(P = p < 0),
		(t = c1 && c1 != 'c' ? pSBCr(c1) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }),
		(p = P ? p * -1 : p),
		(P = 1 - p);
	if (!f || !t) return null;
	if (l) (r = m(P * f.r + p * t.r)), (g = m(P * f.g + p * t.g)), (b = m(P * f.b + p * t.b));
	else (r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5)), (g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5)), (b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5));
	(a = f.a), (t = t.a), (f = a >= 0 || t >= 0), (a = f ? (a < 0 ? t : t < 0 ? a : a * P + t * p) : 0);
	if (h) return 'rgb' + (f ? 'a(' : '(') + r + ',' + g + ',' + b + (f ? ',' + m(a * 1000) / 1000 : '') + ')';
	else return '#' + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2);
} //ok SUPER COOL!!!!
function purge(elem) {
	var a = elem.attributes, i, l, n;
	if (a) {
		for (i = a.length - 1; i >= 0; i -= 1) {
			n = a[i].name;
			if (typeof elem[n] === 'function') {
				elem[n] = null;
			}
		}
	}
	a = elem.childNodes;
	if (a) {
		l = a.length;
		for (i = a.length - 1; i >= 0; i -= 1) {
			purge(elem.childNodes[i]);
		}
	}
	elem.remove(); //elem.parentNode.removeChild(elem);
}
function randomAlphanum() {
	let s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	return s[randomNumber(0, s.length - 1)];
}
function randomBotName() { return (coin() ? randomVowel() : '') + randomConsonant() + randomVowel() + 'bot'; }
function randomColor(s, l, a) { return isdef(s) ? randomHslaColor(s, l, a) : randomHexColor(); }
function randomConsonant() { let s = 'bcdfghjklmnpqrstvwxz'; return s[randomNumber(0, s.length - 1)]; }
function randomDarkColor() {
	let s = '#';
	for (let i = 0; i < 3; i++) {
		s += chooseRandom([0, 1, 2, 3, 4, 5, 6, 7]) + chooseRandom(['f', 'c', '9', '6', '3', '0']);
	}
	return s;
}
function randomDigit() { let s = '0123456789'; return s[randomNumber(0, s.length - 1)]; }
function randomHexColor() {
	let s = '#';
	for (let i = 0; i < 6; i++) {
		s += chooseRandom(['f', 'c', '9', '6', '3', '0']);
	}
	return s;
}
function randomHslaColor(s = 100, l = 70, a = 1) {
	var hue = Math.round(Math.random() * 360);
	return hslToHslaString(hue, s, l, a);
}
function randomizeNum(n, percentUp = 25, percentDown = 25) {
	let max = n * percentUp / 100;
	let min = n * percentDown / 100;
	return randomNumber(n - min, n + max);
}
function randomLetter() { let s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; return s[randomNumber(0, s.length - 1)]; }
function randomLightColor() {
	let s = '#';
	for (let i = 0; i < 3; i++) {
		s += chooseRandom(['A', 'B', 'C', 'D', 'E', 'F']) + chooseRandom(['f', 'c', '9', '6', '3', '0']);
	}
	return s;
}
function randomName() { return chooseRandom(coin() ? GirlNames : BoyNames); }
function randomNumber(min = 0, max = 100) {
	return Math.floor(Math.random() * (max - min + 1)) + min; //min and max inclusive!
}
function randomUserId(len = 20, isNumeric = false) {
	let id = '';
	if (isNumeric) for (let i = 0; i < len; i++) { id += randomDigit(); }
	else for (let i = 0; i < len; i++) { id += randomAlphanum(); }
	return id;
}
function randomVowel() { let s = 'aeiouy'; return s[randomNumber(0, s.length - 1)]; }
function range(f, t, st = 1) {
	if (nundef(t)) {
		t = f - 1;
		f = 0;
	}
	let arr = [];
	for (let i = f; i <= t; i += st) {
		arr.push(i);
	}
	return arr;
}
function realTimeIfTrue(f, cnt) {
	console.log('counter', cnt)
	if (f()) setTimeout(() => realtimeIfTrue(f, cnt + 1), 10);
}
function recConvertToList(n, listOfProps) {
	if (isList(n)) { n.map(x => recConvertToList(x, listOfProps)); }
	else if (isDict(n) && isList(listOfProps)) {
		for (const prop of listOfProps) {
			let lst = n[prop];
			if (isList(lst) && !isEmpty(lst)) { n[prop] = lst.join(' '); }
		}
		for (const k in n) { recConvertToList(n[k], listOfProps); }
	}
}
function recConvertToSimpleList(n, listOfProps) {
	if (isList(n)) { n.map(x => recConvertToList(x, listOfProps)); }
	else if (isDict(n) && isList(listOfProps)) {
		for (const prop of listOfProps) {
			let conv = dictOrListToString(n[prop]);
			if (conv) n[prop] = conv;
		}
		for (const k in n) { recConvertToList(n[k], listOfProps); }
	}
}
function recDeleteKeys(o, deleteEmpty = true, omitProps) {
	if (isLiteral(o)) return o;
	else if (isList(o)) return o.map(x => recDeleteKeys(x, deleteEmpty, omitProps));
	let onew = {};
	for (const k in o) {
		if (omitProps.includes(k)) continue;
		if (isLiteral(o[k]) || !isEmpty(o[k])) {
			onew[k] = recDeleteKeys(jsCopy(o[k]), deleteEmpty, omitProps);
		} else {
		}
	}
	return onew;
}
function removeInPlace(arr, el) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === el) {
			arr.splice(i, 1);
			i--;
			return;
		}
	}
}
function removeKeyHandler(k) {
	let f = lookup(DA, ['keyup', k]);
	if (lookup(DA, ['keyup', k])) {
		delete DA.keyup[k];
	}
	if (lookup(DA, ['keydown', k])) {
		delete DA.keydown[k];
	}
}
function removeNonAlphanum(s) {
	let res = '';
	let nonalphas = '';
	for (const l of s) {
		if (isAlphaNumeric(l)) res += l; else nonalphas += l;
	}
	return { alphas: res, whites: nonalphas };
}
function replaceAll(str, sSub, sBy) {
	let regex = new RegExp(sSub, 'g');
	return str.replace(regex, sBy);
}
function replaceAllSpecialChars(str, sSub, sBy) { return str.split(sSub).join(sBy); }
function replaceAllX(str, sSub, sBy) { return replaceAllSpecialChars(str, sSub, sBy); }
function replaceAtString(s, i, ssub) { return s.substring(0, i) + ssub + s.substring(i + 1); }
function replaceEvery(w, letter, nth) {
	let res = '';
	for (let i = 1; i < w.length; i += 2) {
		res += letter;
		res += w[i];
	}
	if (w.length % 2) res += w[0];
	return res;
}
function replaceFractionOfWordBy(w, letter = 'w', fr = .5) {
	let len = Math.ceil(w.length * fr);
	let len1 = Math.floor(w.length * fr);
	let sub = letter.repeat(len);
	w = sub + w.substring(0, len1);
	return w;
}
function resetUIDs() { UIDCounter = 0; FRUIDCounter = -1; }
function reverseString(s) {
	return toLetterList(s).reverse().join('');
}
function RGBAToHex9(rgba) {
	let n = allNumbers(rgba); //allNumbers does not catch .5 as float!
	if (n.length < 3) {
		return randomHexColor();
	}
	let a = n.length > 3 ? n[3] : 1;
	let sa = alphaToHex(a);
	if (rgba.includes('%')) {
		n[0] = Math.round((n[0] * 255) / 100);
		n[1] = Math.round((n[1] * 255) / 100);
		n[2] = Math.round((n[2] * 255) / 100);
	}
	return '#' + ((1 << 24) + (n[0] << 16) + (n[1] << 8) + n[2]).toString(16).slice(1) + sa;
} //ok
function RGBAToHSLA(rgba) {
	let ex = /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
	if (ex.test(rgba)) {
		let sep = rgba.indexOf(',') > -1 ? ',' : ' ';
		rgba = rgba
			.substr(5)
			.split(')')[0]
			.split(sep);
		if (rgba.indexOf('/') > -1) rgba.splice(3, 1);
		for (let R in rgba) {
			let r = rgba[R];
			if (r.indexOf('%') > -1) {
				let p = r.substr(0, r.length - 1) / 100;
				if (R < 3) {
					rgba[R] = Math.round(p * 255);
				}
			}
		}
		let r = rgba[0] / 255,
			g = rgba[1] / 255,
			b = rgba[2] / 255,
			a = rgba[3],
			cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r) h = ((g - b) / delta) % 6;
		else if (cmax == g) h = (b - r) / delta + 2;
		else h = (r - g) / delta + 4;
		h = Math.round(h * 60);
		if (h < 0) h += 360;
		l = (cmax + cmin) / 2;
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
	} else {
		return 'Invalid input color';
	}
} //ok
function rgbToHex(rgbStr) { return rgbStr && '#' + rgbStr.slice(4, -1).split(',').map(x => (+x).toString(16).padStart(2, '0')).join(''); }
function RGBToHex7(c) {
	let n = allNumbers(c);
	if (c.includes('%')) {
		n[0] = Math.round((n[0] * 255) / 100);
		n[1] = Math.round((n[1] * 255) / 100);
		n[2] = Math.round((n[2] * 255) / 100);
	}
	return '#' + ((1 << 24) + (n[0] << 16) + (n[1] << 8) + n[2]).toString(16).slice(1);
} //ok
function RGBToHSL(rgb) {
	let ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
	if (ex.test(rgb)) {
		let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
		rgb = rgb
			.substr(4)
			.split(')')[0]
			.split(sep);
		for (let R in rgb) {
			let r = rgb[R];
			if (r.indexOf('%') > -1) rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
		}
		let r = rgb[0] / 255,
			g = rgb[1] / 255,
			b = rgb[2] / 255,
			cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r) h = ((g - b) / delta) % 6;
		else if (cmax == g) h = (b - r) / delta + 2;
		else h = (r - g) / delta + 4;
		h = Math.round(h * 60);
		if (h < 0) h += 360;
		l = (cmax + cmin) / 2;
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		return 'hsl(' + h + ',' + s + '%,' + l + '%)';
	} else {
		return 'Invalid input color';
	}
} //ok
async function route_path_json_dict(url) {
	let data = await fetch_wrapper(url);
	let json = await data.json();
	return json;
}
async function route_path_text(url) {
	let data = await fetch_wrapper(url);
	return await data.text();
}
async function route_path_yaml_dict(url) {
	let data = await fetch_wrapper(url);
	let text = await data.text();
	let dict = jsyaml.load(text);
	return dict;
}
function safeLoop(func, params) {
	let max = 100, i = 0;
	while (i < max) {
		i += 1;
		let res = func(...params);
		if (isdef(res)) return res;
	}
	console.log('safeLoop: max reached!!!!!!!!!');
	return null;
}
function sameCaseInsensitive(s1, s2) {
	return s1.toLowerCase() == s2.toLowerCase();
}
function sameList(l1, l2) {
	if (l1.length != l2.length) return false;
	for (const s of l1) {
		if (!l2.includes(s)) return false;
	}
	return true;
}
function saveFileAtClient(name, type, data) {
	if (data != null && navigator.msSaveBlob) return navigator.msSaveBlob(new Blob([data], { type: type }), name);
	let a = document.createElement('a');
	a.style.display = 'none';
	let url = window.URL.createObjectURL(new Blob([data], { type: type }));
	a.href = url;
	a.download = name;
	document.body.appendChild(a);
	fireClick(a);
	setTimeout(function () {
		window.URL.revokeObjectURL(url);
		a.remove();
	}, 500);
}
function selectText(el) {
	var sel, range;
	if (window.getSelection && document.createRange) { //Browser compatibility
		sel = window.getSelection();
		if (sel.toString() == '') { //no text selection
			window.setTimeout(function () {
				range = document.createRange(); //range object
				range.selectNodeContents(el); //sets Range
				sel.removeAllRanges(); //remove all ranges from selection
				sel.addRange(range);//add Range to a Selection.
			}, 1);
		}
	} else if (document.selection) { //older ie
		sel = document.selection.createRange();
		if (sel.text == '') { //no text selection
			range = document.body.createTextRange();//Creates TextRange object
			range.moveToElementText(el);//sets Range
			range.select(); //make selection.
		}
	}
}
function setCssVar(varname, val) { document.body.style.setProperty(varname, val); }
function setCSSVariable(varName, val) {
	let root = document.documentElement;
	root.style.setProperty(varName, val);
}
function setHNeeded(elem) {
	let sz = getSizeNeeded(elem);
	let r = getRect(elem);
	if (sz.h > r.h && elem.style.height != '100%') { r.h = sz.h; mStyle(elem, { h: r.h }); }
	elem.setAttribute('rect', `${r.w} ${r.h} ${r.t} ${r.l} ${r.b} ${r.r}`); //damit ich es sehen kann!!!
	return r.h;
}
function setRect(elem, options) {
	let r = getRect(elem);
	elem.rect = r;
	elem.setAttribute('rect', `${r.w} ${r.h} ${r.t} ${r.l} ${r.b} ${r.r}`); //damit ich es sehen kann!!!
	if (isDict(options)) {
		if (options.hgrow) mStyle(elem, { hmin: r.h });
		else if (options.hfix) mStyle(elem, { h: r.h });
		else if (options.hshrink) mStyle(elem, { hmax: r.h });
		if (options.wgrow) mStyle(elem, { wmin: r.w });
		else if (options.wfix) mStyle(elem, { w: r.w });
		else if (options.wshrink) mStyle(elem, { wmax: r.w });
	}
	return r;
}
function setRectInt(elem, options) {
	let r = getRectInt(elem);
	elem.rect = r;
	elem.setAttribute('rect', `${r.w} ${r.h} ${r.t} ${r.l} ${r.b} ${r.r}`); //damit ich es sehen kann!!!
	if (isDict(options)) {
		if (options.hgrow) mStyle(elem, { hmin: r.h });
		else if (options.hfix) mStyle(elem, { h: r.h });
		else if (options.hshrink) mStyle(elem, { hmax: r.h });
		if (options.wgrow) mStyle(elem, { wmin: r.w });
		else if (options.wfix) mStyle(elem, { w: r.w });
		else if (options.wshrink) mStyle(elem, { wmax: r.w });
	}
	return r;
}
function setSizeNeeded(elem) {
	let sz = getSizeNeeded(elem);
	let r = getRect(elem);
	if (sz.w > r.w && elem.style.width != '100%') { r.w = sz.w; mStyle(elem, { w: r.w }); }
	if (sz.h > r.h && elem.style.height != '100%') { r.h = sz.h; mStyle(elem, { h: r.h }); }
	elem.setAttribute('rect', `${r.w} ${r.h} ${r.t} ${r.l} ${r.b} ${r.r}`); //damit ich es sehen kann!!!
	return r;
}
function setWNeeded(elem) {
	let sz = getSizeNeeded(elem);
	let r = getRect(elem);
	if (sz.w > r.w && elem.style.width != '100%') { r.w = sz.w; mStyle(elem, { w: r.w }); }
	elem.setAttribute('rect', `${r.w} ${r.h} ${r.t} ${r.l} ${r.b} ${r.r}`); //damit ich es sehen kann!!!
	return r.w;
}
function show(elem, isInline = false) {
	if (isString(elem)) elem = document.getElementById(elem);
	if (isSvg(elem)) {
		elem.setAttribute('style', 'visibility:visible');
	} else {
		elem.style.display = isInline ? 'inline-block' : null;
	}
	return elem;
}
function shuffle(arr) { if (isEmpty(arr)) return []; else return fisherYates(arr); }
function shuffleChildren(dParent) {
	let arr = arrChildren(dParent);
	arr.map(x => x.remove());
	shuffle(arr);
	for (const elem of arr) { mAppend(dParent, elem) }
}
function size2hex(w = 100, h = 0, x = 0, y = 0) {
	let hexPoints = [{ X: 0.5, Y: 0 }, { X: 1, Y: 0.25 }, { X: 1, Y: 0.75 }, { X: 0.5, Y: 1 }, { X: 0, Y: 0.75 }, { X: 0, Y: 0.25 }];
	if (h == 0) {
		h = (2 * w) / 1.73;
	}
	return polyPointsFrom(w, h, x, y, hexPoints);
}
function size2tridown(w = 100, h = 0, x = 0, y = 0) {
	let triPoints = [{ X: 1, Y: 0 }, { X: 0.5, Y: 1 }, { X: 0, Y: 0 }];
	if (h == 0) { h = w; }
	return polyPointsFrom(w, h, x, y, triPoints);
}
function size2triup(w = 100, h = 0, x = 0, y = 0) {
	let triPoints = [{ X: 0.5, Y: 0 }, { X: 1, Y: 1 }, { X: 0, Y: 1 }];
	if (h == 0) { h = w; }
	return polyPointsFrom(w, h, x, y, triPoints);
}
function sleepX(msecs) {
	/*	
	flag = false;
	functionWithSetTimeouts (after last timeout flag should be set)
	while (!flag) { await sleepX(3000); }
	... continuing code after last timeout!
	*/
	return new Promise(r => setTimeout(r, msecs));
}
function sortBy(arr, key) { arr.sort((a, b) => (a[key] < b[key] ? -1 : 1)); return arr; }
function sortByDescending(arr, key) { arr.sort((a, b) => (a[key] > b[key] ? -1 : 1)); return arr; }
function sortByFunc(arr, func) { arr.sort((a, b) => (func(a) < func(b) ? -1 : 1)); return arr; }
function sortByFuncDescending(arr, func) { arr.sort((a, b) => (func(a) > func(b) ? -1 : 1)); return arr; }
function sortKeys(o) {
	if (Array.isArray(o)) {
		return o.map(sortKeys); //o.sort().map(JSON.sort);
	} else if (isObject(o)) {
		return Object
			.keys(o)
			.sort()
			.reduce(function (a, k) {
				a[k] = sortKeys(o[k]);
				return a;
			}, {});
	}
	return o;
}
function sortKeysNonRecursive(o) {
	if (Array.isArray(o)) {
		return o.map(sortKeysNonRecursive); //o.sort().map(JSON.sort);
	} else if (isObject(o)) {
		return Object
			.keys(o)
			.sort()
			.reduce(function (a, k) {
				a[k] = o[k];
				return a;
			}, {});
	}
	return o;
}
function sortKeysNonRecursiveDescending(o) {
	if (Array.isArray(o)) {
		return o.map(sortKeysNonRecursiveDescending); //o.sort().map(JSON.sort);
	} else if (isObject(o)) {
		return Object
			.keys(o)
			.reverse()
			.reduce(function (a, k) {
				a[k] = o[k];
				return a;
			}, {});
	}
	return o;
}
function sortNumbers(ilist) { ilist.sort(function (a, b) { return a - b }); return ilist; }
function splitAtAnyOf(s, sep) {
	let arr = [], w = '';
	for (let i = 0; i < s.length; i++) {
		let ch = s[i];
		if (sep.includes(ch)) {
			if (!isEmpty(w)) arr.push(w);
			w = '';
		} else {
			w += ch;
		}
	}
	return arr;
}
function startsWith(s, sSub) {
	return s.substring(0, sSub.length) == sSub;
}
function stringAfter(sFull, sSub) {
	let idx = sFull.indexOf(sSub);
	if (idx < 0) return '';
	return sFull.substring(idx + sSub.length);
}
function stringAfterLast(sFull, sSub) {
	let parts = sFull.split(sSub);
	return arrLast(parts);
}
function stringBefore(sFull, sSub) {
	let idx = sFull.indexOf(sSub);
	if (idx < 0) return sFull;
	return sFull.substring(0, idx);
}
function stringBeforeLast(sFull, sSub) {
	let parts = sFull.split(sSub);
	return sFull.substring(0, sFull.length - arrLast(parts).length - 1);
}
function stringBetween(sFull, sStart, sEnd) {
	return stringBefore(stringAfter(sFull, sStart), isdef(sEnd) ? sEnd : sStart);
}
function stringBetweenLast(sFull, sStart, sEnd) {
	let s1 = stringBeforeLast(sFull, isdef(sEnd) ? sEnd : sStart);
	return stringAfterLast(s1, sStart);
}
function substringOfMinLength(s, minStartIndex, minLength) {
	let res = s.substring(minStartIndex).trim();
	let i = 0;
	let res1 = '';
	while (res1.trim().length < minLength && i < res.length) { res1 += res[i]; i += 1; }
	return res1.trim();
}
function takeFromStart(ad, n) {
	if (isDict(ad)) {
		let keys = Object.keys(ad);
		return keys.slice(0, n).map(x => (ad[x]));
	} else return ad.slice(0, n);
}
function takeFromTo(ad, from, to) {
	if (isDict(ad)) {
		let keys = Object.keys(ad);
		return keys.slice(from, to).map(x => (ad[x]));
	} else return ad.slice(from, to);
}
function timeToMs(h, m, s) { return ((((h * 60) + m) * 60) + s) * 1000; }
function toBase10(s, base = 16) {
	let s1 = reverseString(s.toLowerCase());
	let res = 0;
	let mult = 1;
	for (let i = 0; i < s1.length; i++) {
		let l = s1[i];
		let hexarr = ['a', 'b', 'c', 'd', 'e', 'f'];
		let n = isNumber(l) ? Number(l) : 10 + hexarr.indexOf(l);
		res += mult * n;
		mult *= base;
	}
	return res;
}
function toLetterArray(s) { return toLetterList(s); }
function toLetterList(s) { return [...s]; }
function toLetters(s) { return [...s]; }
function toNoun(s) { return capitalize(s.toLowerCase()); }
function toRadian(deg) { return deg * 2 * Math.PI / 360; }
function toUmlaut(w) {
	if (isList(w)) {
		let res = [];
		for (const w1 of w) res.push(toUmlaut(w1));
		return res;
	} else {
		w = replaceAll(w, 'ue', 'ü');
		w = replaceAll(w, 'ae', 'ä');
		w = replaceAll(w, 'oe', 'ö');
		w = replaceAll(w, 'UE', 'Ü');
		w = replaceAll(w, 'AE', 'Ä');
		w = replaceAll(w, 'OE', 'Ö');
		return w;
	}
}
function translateStylesToCy(styles, group) {
	let di = {};
	for (const k in styles) {
		let v = styles[k];
		let [prop, val] = translateToCssStyle(k, v, true);
		if (group == 'edge' && k == 'bg') di['line-color'] = val;
		else if (prop == 'shape' && val == 'hex') {
			di.shape = 'polygon';
			di['shape-polygon-points'] = [0, -1, 1, -0.5, 1, 0.5, 0, 1, -1, 0.5, -1, -0.5];
		}
		else di[prop] = val;
	}
	return di;
}
function translateToCssStyle(prop, val) { return mStyleTranslate(prop, val); }
function unfocusOnEnter(ev) {
	if (ev.key === 'Enter') {
		ev.preventDefault();
		mBy('dummy').focus();
	}
}
function union(lst1, lst2) {
	return [...new Set([...lst1, ...lst2])];
}
function uploadImgData(imgFile) {
	let pack = {};
	let data = imgFile.data;
	let filename = imgFile.name; console.log('filename', filename);
	let key = stringBefore(filename, '.');
	pack[key] = { data: data, name: key, filename: filename, type: 'imageData' };
	Socket.emit('generalImages', { pack: pack });
	console.log('uploading pack', pack);
}
function valf(val, def) { return isdef(val) ? val : def; }
//#endregion base

//#region areas
var colorPalette;
var allAreas = {}; //by id
var areaSubTypes = {}; //by subTypes, eg., stats,farms
function collapseSmallLetterAreas(m, d) {
	let rows = m.length;
	let cols = m[0].length;
	let gtc = [];
	for (let c = 0; c < cols; c++) {
		gtc[c] = 'min-content';
		for (let r = 0; r < rows; r++) {
			let sArea = m[r][c];
			if (sArea[0] == sArea[0].toUpperCase()) gtc[c] = 'auto';
		}
	}
	let cres = gtc.join(' ');
	d.style.gridTemplateColumns = gtc.join(' '); //'min-content 1fr 1fr min-content';// 'min-content'.repeat(rows);
	let gtr = [];
	for (let r = 0; r < rows; r++) {
		gtr[r] = 'min-content';
		for (let c = 0; c < cols; c++) {
			let sArea = m[r][c];
			if (sArea[0] == sArea[0].toUpperCase()) gtr[r] = 'auto';
		}
	}
	let rres = gtr.join(' ');
	d.style.gridTemplateRows = gtr.join(' '); //'min-content 1fr 1fr min-content';// 'min-content'.repeat(rows);
}
function createAreas(dGrid, areaNames, prefix, shadeAreaBackgrounds=false, showAreaNames=true) {
	console.log('creating areas',areaNames)
	let SPEC={};SPEC.areas = { T: 'dTrick', H: 'dHuman', A: 'dAI' };
	let palette = getTransPalette9(); //getPalette(color);//palette.length-1;
	let ipal = 1;
	let result = [];
	for (const k in SPEC.areas) {
		let areaName = SPEC.areas[k];
		let dCell = mDiv(dGrid, { h:'100%', w:'100%', bg: 'random', 'grid-area': k, });
		if (shadeAreaBackgrounds) { dCell.style.backgroundColor = palette[ipal]; ipal = (ipal + 1) % palette.length; }
		if (showAreaNames) { 
			dCell=mTitledDiv(areaName,dCell,{bg: 'green',},{h:'100%', w:'100%', bg: 'yellow',},areaName)
		}else {dCell.id=areaName;}
		result.push({ name: areaName, div: dCell });
	}
	return result;
	for (const areaName of areaNames) {
		let d1 = document.createElement('div');
		let id = (isdef(prefix)?prefix + '.':'') + areaName;
		d1.id = id;
		d1.style.gridArea = areaName;
		mStyle(d1,{bg:'random'});//,w:'100%',h:'100%'})
		d1.innerHTML='hallo'
		if (shadeAreaBackgrounds) { d1.style.backgroundColor = colorPalette[ipal]; ipal = (ipal + 1) % colorPalette.length; }
		if (showAreaNames) { d1.innerHTML = makeAreaNameDomel(areaName); }
		dGrid.appendChild(d1);
	}
}
function createGridLayout(d, layout, collapseEmptySmallLetterAreas=false) {
	let s = '';
	let m = [];
	let maxNum = 0;
	let areaNames = [];
	for (const line of layout) {
		let letters = line.split(' ');
		let arr = [];
		for (const l of letters) {
			if (!isEmpty(l)) {
				addIf(areaNames, l);
				arr.push(l);
			}
		}
		m.push(arr);
		if (arr.length > maxNum) maxNum = arr.length;
	}
	for (const line of m) {
		let el = line[line.length - 1];
		while (line.length < maxNum) line.push(el);
		s += '"' + line.join(' ') + '" ';
	}
	d.style.gridTemplateAreas = s;// eg. '"z z z" "a b c" "d e f"';
	if (collapseEmptySmallLetterAreas) { collapseSmallLetterAreas(m, d); }
	else fixedSizeGrid(m, d);
	return areaNames;
}
function createLayout(dParent, l) {
	console.log('*** createLayout ***', dParent, l);
	let d = mBy(dParent);
	let areaNames = createGridLayout(d, l);
	console.log(areaNames, d)
	createAreas(d, areaNames, dParent);
}
function fixedSizeGrid(m, d) {
	let rows = m.length;
	let cols = m[0].length;
	d.style.gridTemplateColumns = 'repeat(' + cols + ',1fr)'; // gtc.join(' '); //'min-content 1fr 1fr min-content';// 'min-content'.repeat(rows);
	d.style.gridTemplateRows = 'repeat(' + rows + ',1fr)'; // //'min-content 1fr 1fr min-content';// 'min-content'.repeat(rows);
}
function makeAreaNameDomel(areaName) { return `<div style='width:100%'>${areaName}</div>`; }
function rAreas() {
	let d1=mDiv(dTable,{bg:'blue',w:800,h:600},'d1');
	SPEC={views:{d1:{layout:['T','P O']}}};
	console.log(SPEC)
	for (const k in SPEC.views) { createLayout(k, SPEC.views[k].layout); }
}
function rAreas_0() {
	let color = SPEC.color.theme;
	document.body.style.backgroundColor = color;
	let fg = colorIdealText(color)
	document.body.style.color = fg;
	let palette = getTransPalette9(); //getPalette(color);//palette.length-1;
	let ipal = 1;
	let d = document.getElementById('areaTable');
	setTableSize(...SPEC.tableSize);
	let s = '';
	let m = [];
	for (const line of SPEC.layout) {
		s += '"' + line + '" ';
		let letters = line.split(' ');
		let arr = [];
		for (const l of letters) { if (!isEmpty(l)) arr.push(l); }
		m.push(arr);
	}
	d.style.gridTemplateAreas = s;// eg. '"z z z" "a b c" "d e f"';
	if (SPEC.collapseEmptySmallLetterAreas) { collapseSmallLetterAreas(m, d); }
	else fixedSizeGrid(m, d);
	for (const k in SPEC.areas) {
		let areaName = SPEC.areas[k];
		let d1 = document.createElement('div');
		d1.id = areaName;
		d1.style.gridArea = k;
		if (SPEC.shadeAreaBackgrounds) { d1.style.backgroundColor = palette[ipal]; ipal = (ipal + 1) % palette.length; }
		if (SPEC.showAreaNames) { d1.innerHTML = makeAreaNameDomel(areaName); }
		UIS[areaName] = { elem: d1, children: [] };
		d.appendChild(d1);
	}
}
function rPlayerStatsAreas() {
	if (nundef(serverData.players)) return;
	if (nundef(SPEC.playerStatsAreas)) return;
	let loc = SPEC.playerStatsAreas.loc;
	let dOthers = mById(loc);
	if (nundef(dOthers)) return;
	let func = SPEC.playerStatsAreas.type;
	let objects = [];
	for (const plid in serverData.players) {
		let o = serverData.players[plid];
		if (plid != GAMEPLID) {
			o.id = plid;
			objects.push(o)
		}
	}
	let areaNames = objects.map(x => x.name);
	let structObject = window[func](areaNames, loc);
}
function setTableSize(w, h, unit = 'px') {
	let d = mBy('areaTable');
	mStyle(d, { 'min-width': w, 'min-height': h }, unit);
}
//#endregion areas

//#region audio
var _audioSources = {
	incorrect1: '../assets/sounds/incorrect1.wav',
	incorrect3: '../assets/sounds/incorrect3.mp3',
	goodBye: "../assets/sounds/level1.wav",
	down: "../assets/sounds/down.mp3",
	levelComplete: "../assets/sounds/sound1.wav",
	rubberBand: "../assets/sounds/sound2.wav",
	hit: "../assets/sounds/hit.wav",
	mozart: "../assets/music/mozart_s39_4.mp3",
};
var TOSound, _sndPlayer, _loaded = false, _qSound, _idleSound = true, _sndCounter = 0;
var _AUDIOCONTEXT;// browsers limit the number of concurrent audio contexts, so you better re-use'em
function _deqSound() {
	let key = _qSound.shift();
	let url = _audioSources[key];
	_sndPlayer = new Audio(url);
	_sndPlayer.onended = whenSoundPaused;
	_sndPlayer.onloadeddata = () => { _loaded = true; _sndPlayer.play(); };
	_sndPlayer.load();
}
function _enqSound(key) { if (nundef(_qSound)) _qSound = []; _qSound.push(key); }
function beep(vol, freq, duration) {
	console.log('sollte beepen!!!'); //return;
	if (nundef(_AUDIOCONTEXT)) _AUDIOCONTEXT = new AudioContext();
	let a = _AUDIOCONTEXT;
	v = a.createOscillator()
	u = a.createGain()
	v.connect(u)
	v.frequency.value = freq
	v.type = "square";
	u.connect(a.destination)
	u.gain.value = vol * 0.01
	v.start(a.currentTime)
	v.stop(a.currentTime + duration * 0.001);
}
function isPlaying() { return DA.isSound; }
function pauseSound() {
	_qSound = [];
	if (_loaded && isdef(_sndPlayer)) {
		clearTimeout(TOSound);
		_sndPlayer.onended = null;
		_sndPlayer.onpause = whenSoundPaused;
		_sndPlayer.pause();
	}
}
function playsound() { playSound(...arguments); }
function playSound(key, wait = true) {
	if (!wait) _qSound = [];
	_enqSound(key);
	if (_idleSound) { _idleSound = false; _deqSound(); }
}
function toggleSound(key) {
	if (DA.isSound == true) { pauseSound(); DA.isSound = false; return; }
	playSound(key);
	DA.isSound = true;
}
function whenSoundPaused() {
	_sndPlayer = null;
	_sndPlayerIdle = true;
	_loaded = false;
	if (!isEmpty(_qSound)) { _deqSound(); } else { _idleSound = true; }
}
//#endregion audio

//#region badges
var badges = [];
function addBadge(dParent, level, clickHandler, animateRubberband = false) {
	let fg = '#00000080';
	let textColor = 'white';
	let isText = true; let isOmoji = false;
	let i = level - 1;
	let key = levelKeys[i];
	let k = replaceAll(key, ' ', '-');
	let item = getItem(k);
	let label = item.label = "level " + i;
	let h = window.innerHeight;
	let sz = h / 14;
	let options = _simpleOptions({ w: sz, h: sz, fz: sz / 4, fzPic: sz / 2, bg: levelColors[i], fg: textColor });
	options.handler = clickHandler;
	let d = makeItemDiv(item, options);
	mAppend(dParent, d);
	item.index = i;
	badges.push(item);
	return arrLast(badges);
}
function clearBadges(){
	removeBadges(null,0);
	badges = [];
}
function onClickBadgeX(ev) {
	interrupt(); //enterInterruptState();
	let item = evToItem(ev);
	setBadgeLevel(item.index);
	userUpdate(['games', G.id, 'startLevel'], item.index);
	auxOpen = false;
	TOMain = setTimeout(G.controller.startGame.bind(G.controller), 100);
}
function removeBadges(dParent, level) {
	while (badges.length > level) {
		let badge = badges.pop();
		mRemove(iDiv(badge));
	}
}
function setBadgeLevel(i) {
	G.level = i;
	Score.levelChange = true;
	if (isEmpty(badges)) showBadgesX(dLeiste, G.level, onClickBadgeX, G.maxLevel);
	for (let iBadge = 0; iBadge < G.level; iBadge++) {
		let d1 = iDiv(badges[iBadge]);
		d1.style.opacity = .75;
		d1.style.border = 'transparent';
		d1.children[1].innerHTML = '* ' + (iBadge + 1) + ' *'; //style.color = 'white';
		d1.children[0].style.color = 'white';
	}
	let d = iDiv(badges[G.level]);
	d.style.border = '1px solid #00000080';
	d.style.opacity = 1;
	d.children[1].innerHTML = 'Level ' + (G.level + 1); //style.color = 'white';
	d.children[0].style.color = 'white';
	for (let iBadge = G.level + 1; iBadge < badges.length; iBadge++) {
		let d1 = iDiv(badges[iBadge]);
		d1.style.border = 'transparent';
		d1.style.opacity = .25;
		d1.children[1].innerHTML = 'Level ' + (iBadge + 1); //style.color = 'white';
		d1.children[0].style.color = 'black';
	}
}
function showBadges(dParent, level, clickHandler) {
	clearElement(dParent); badges = [];
	for (let i = 1; i <= level; i++) {
		addBadge(dParent, i, clickHandler);
	}
}
function showBadgesX(dParent, level, clickHandler, maxLevel) {
	clearElement(dParent);
	badges = [];
	for (let i = 1; i <= maxLevel + 1; i++) {
		if (i > level) {
			let b = addBadge(dParent, i, clickHandler, false);
			b.live.div.style.opacity = .25;
			b.achieved = false;
		} else {
			let b = addBadge(dParent, i, clickHandler, true);
			b.achieved = true;
		}
	}
}
//#endregion badges

//#region banner
class Banner {
	constructor(pos,dParent) { this.pos=pos; this.dParent = isdef(dParent) ? dParent : dBanner; this.init(); }
	clear() { clearElement(this.dParent); this.dParent.onclick = null; hide(this.dParent); }
	_createDivs() {
		this.dInstruction = mDiv(this.dContent);
		this.dMain = mDiv(this.dContent);
		this.dHint = mDiv(this.dContent); this.dHint.innerHTML = 'hallo'; this.dHint.style.opacity = 0;
	}
	_createScreen() {
		show(this.dParent);
		let bg = colorTrans('silver', .25);
		let d = mScreen(this.dParent, { bg: bg, display: 'flex', layout: 'fvcc' });
		let dContent = mDiv(d, { display: 'flex', layout: 'fvcs', fg: 'contrast', fz: 24, bg: 'silver', patop: 50, pabottom: 50, matop: -50, w: '100vw' });
		if (isdef(this.pos)) mStyle(dContent,{matop:this.pos});
		return [d, dContent];
	}
	init() {
		[this.div, this.dContent] = this._createScreen();
		this.dParent.onclick = () => this.clear();
		this._createDivs();
	}
	message(arr, callback) {
		this.dInstruction.innerHTML = arr.join(' ');
		if (isdef(callback)) this.dParent.onclick = () => { this.clear(); callback(); };
	}
}
//#endregion banner

//#region board
var StateDict = {};
var EmptyFunc = x => nundef(x) || x == ' ';
class Board {
	constructor(rows, cols, handler, cellStyle) {
		let styles = isdef(cellStyle) ? cellStyle : { margin: 4, w: 150, h: 150, bg: 'white', fg: 'black' };
		this.rows = rows;
		this.cols = cols;
		let items = this.items = iGrid(this.rows, this.cols, dTable, styles);
		items.map(x => {
			let d = iDiv(x);
			mCenterFlex(d);
			d.onclick = handler;
		});
	}
	get(ir, c) {
		if (isdef(c)) {
			let idx = ir * this.cols + c;
			return this.items[idx];
		} else {
			return this.items[ir];
		}
	}
	getState() {
		return this.items.map(x => x.label);
	}
	setState(arr, colors) {
		if (isEmpty(arr)) return;
		if (isList(arr[0])) { arr = arrFlatten(arr); }
		for (let i = 0; i < arr.length; i++) {
			let item = this.items[i];
			let val = arr[i];
			if (!EmptyFunc(val)) {
				addLabel(item, val, { fz: 60, fg: colors[val] });
			} else item.label = val;
		}
	}
	clear() {
		for (const item of this.items) {
			let dLabel = iLabel(item);
			if (isdef(dLabel)) { removeLabel(item); item.label = null; }
		}
	}
}
class Board2D {
	constructor(rows, cols, dParent, cellStyles, boardStyles, handler) {
		cellStyles = this.cellStyles = isdef(cellStyles) ? cellStyles : { margin: 4, w: 150, h: 150, bg: 'white', fg: 'black' };
		boardStyles = this.boardStyles = isdef(boardStyles) ? boardStyles : { bg: 'silver', fg: 'black' };
		this.rows = rows;
		this.cols = cols;
		this.dParent = dParent;
		let dBoard = this.dBoard = mDiv(dParent);//, boardStyles);
		let items = this.items = this.fill(dBoard, this.rows, this.cols, null, cellStyles);
	}
	fill(d, rows, cols, items, cellStyles) {
		if (nundef(items)) items = [];
		clearElement(d);
		mStyle(d, { display: 'grid', 'grid-template-columns': cols });
		for (let i = 0; i < rows * cols; i++) {
			let item = items[i];
			if (isdef(item)) {
				let d1 = iDiv(item);
				if (isdef(d1)) mAppend(d, iDiv(item));
				else {
					d1 = mDiv(d, cellStyles); iAdd(item, { div: d1 }); mAppend(d, d1);
				}
			} else {
				let [r, c] = iToRowCol(i);
				item = { row: r, col: c, index: i };
				let d1 = mDiv(d, cellStyles); iAdd(item, { div: d1 }); mAppend(d, d1);
			}
			mStyle(iDiv(item), cellStyles);
			items.push(item)
		}
		return items;
	}
	get(ir, c) {
		if (isdef(c)) {
			let idx = ir * this.cols + c;
			return this.items[idx];
		} else {
			return this.items[ir];
		}
	}
	getState() {
		return this.items.map(x => x.label);
	}
	setState(arr, colors) {
		if (isEmpty(arr)) return;
		if (isList(arr[0])) { arr = arrFlatten(arr); }
		for (let i = 0; i < arr.length; i++) {
			let item = this.items[i];
			let val = arr[i];
			if (!EmptyFunc(val)) {
				addLabel(item, val, { fz: 60, fg: colors[val] });
			} else item.label = val;
		}
	}
	clear() {
		for (const item of this.items) {
			let dLabel = iLabel(item);
			if (isdef(dLabel)) { removeLabel(item); item.label = null; }
		}
	}
}
function _calc_hex_col_array(rows, cols) {
	let colarr = []; //how many cols in each row
	let even = rows % 2 == 0;
	for (let i = 0; i < rows; i++) {
		colarr[i] = cols;
		if (even && i < (rows/2)-1) cols += 1;
		else if (even && i >rows/2) cols -= 1;
		else if (!even && i < (rows-1)/2) cols += 1;
		else if (!even || i >= (rows-1)/2) cols -= 1;
	}
	return colarr;
}
function _calc_hex_col_array_old(rows, cols) {
	let colarr = []; //how many cols in each row
	for (let i = 0; i < rows; i++) {
		colarr[i] = cols;
		if (i < (rows - 1) / 2) cols += 1;
		else cols -= 1;
	}
	return colarr;
}
function addRowsCols(items) {
	let byrc = {};
	let byx = sortBy(items, 'x');
	let c = 0, x = byx[0].x;
	for (let i = 0; i < byx.length; i++) {
		let item = byx[i];
		if (!isCloseTo(item.x, x, 2)) { c += 1; x = item.x; }
		item.col = c;
	}
	let byy = sortBy(items, 'y');
	let r = 0, y = byy[0].y;
	for (let i = 0; i < byy.length; i++) {
		let item = byy[i];
		if (!isCloseTo(item.y, y, 2)) { r += 1; y = item.y; }
		item.row = r;
		lookupSet(byrc, [item.row, item.col], item);
	}
	return byrc;
}
function arrToMatrix(arr, rows, cols) {
	let i = 0, res = [];
	for (let r = 0; r < rows; r++) {
		let rarr = [];
		for (let c = 0; c < cols; c++) {
			let a = arr[i]; i++;
			rarr.push(a);
		}
		res.push(rarr);
	}
	return res;
}
function bCapturedPieces(plSym, arr, idx, rows, cols, includeDiagonals = true) {
	let res = [];
	let nei = bNei(arr, idx, rows, cols, includeDiagonals);
	for (let dir = 0; dir < 8; dir++) {
		let i = nei[dir];
		if (nundef(i)) continue;
		let el = arr[i];
		if (EmptyFunc(el) || el == plSym) continue;
		let inew = [];
		let MAX = 100, cmax = 0;
		while (isOppPiece(el, plSym)) {
			if (cmax > MAX) break; cmax += 1;
			inew.push(i);
			i = bNeiDir(arr, i, dir, rows, cols);
			if (nundef(i)) break;
			el = arr[i];
		}
		if (el == plSym) {
			res = res.concat(inew);
		}
	}
	return res;
}
function bCheck(r, c, rows, cols) { return r >= 0 && r < rows && c >= 0 && c < cols ? r * cols + c : null; }
function bCreateEmpty(rows, cols) { return new Array(rows * cols).fill(null); }
function bFreeRayDir(arr, idx, dir, rows, cols) {
	let indices = [];
	let i = idx;
	while (i < arr.length) {
		i = bNeiDir(arr, i, dir, rows, cols);
		if (!i || !EmptyFunc(arr[i])) break; else indices.push(i);
	}
	return indices;
}
function bFreeRayDir1(arr, idx, dir, rows, cols) {
	let indices = [];
	let i = idx;
	while (i < arr.length) {
		i = bNeiDir(arr, i, dir, rows, cols);
		if (!i) break;
		else indices.push(i);
		if (!EmptyFunc(arr[i])) break;
	}
	return indices;
}
function bFullCol(arr, icol, rows, cols) {
	let iStart = icol;
	let x = arr[iStart]; if (EmptyFunc(x)) return null;
	for (let i = iStart + cols; i < iStart + (cols * rows); i += cols) if (arr[i] != x) return null;
	return x;
}
function bFullDiag(arr, rows, cols) {
	let iStart = 0;
	let x = arr[iStart]; if (EmptyFunc(x)) return null;
	for (let i = iStart + cols + 1; i < arr.length; i += cols + 1) { if (arr[i] != x) return null; }//console.log(i,arr[i]); }
	return x;
}
function bFullDiag2(arr, rows, cols) {
	let iStart = cols - 1;
	let x = arr[iStart]; if (EmptyFunc(x)) return null;
	for (let i = iStart + cols - 1; i < arr.length - 1; i += cols - 1) { if (arr[i] != x) return null; }//console.log(i,arr[i]); }
	return x;
}
function bFullRow(arr, irow, rows, cols) {
	let iStart = irow * cols;
	let x = arr[iStart]; if (EmptyFunc(x)) return null;
	for (let i = iStart + 1; i < iStart + cols; i++) if (arr[i] != x) return null;
	return x;
}
function bGetChunks(arr2d, rowsEach, colsEach) {
	let res = [];
	let [rTotal, cTotal] = [arr2d.length, arr2d[0].length];
	for (let r = 0; r < rTotal; r += rowsEach) {
		let m1 = [];
		for (let c = 0; c < cTotal; c += colsEach) {
			m1 = bGetSubMatrix(arr2d, r, rowsEach, c, colsEach);
			res.push(arrFlatten(m1));
		}
	}
	return res;
}
function bGetChunksWithIndices(arr2d, rowsEach, colsEach) {
	let res = [];
	let [rTotal, cTotal] = [arr2d.length, arr2d[0].length];
	for (let r = 0; r < rTotal; r += rowsEach) {
		let m1 = [];
		for (let c = 0; c < cTotal; c += colsEach) {
			m1 = bGetSubMatrixWithIndices(arr2d, r, rowsEach, c, colsEach);
			res.push(arrFlatten(m1));
		}
	}
	return res;
}
function bGetCol(arr, icol, rows, cols) {
	let iStart = icol;
	let res = [];
	for (let i = iStart; i < iStart + (cols * rows); i += cols) res.push(arr[i]);
	return res;
}
function bGetCols(arr2d) {
	let rows = arr2d.length;
	let cols = arr2d[0].length;
	let res = [];
	for (let c = 0; c < cols; c++) { res.push([]); }
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			res[c].push(arr2d[r][c]);
		}
	}
	return res;
}
function bGetRow(arr, irow, rows, cols) {
	let iStart = irow * cols;
	let arrNew = arr.slice(iStart, iStart + cols);
	let res = [];
	for (let i = iStart; i < iStart + cols; i++) res.push(arr[i]);
	console.assert(sameList(arrNew, res), 'NOOOOOO');
	return res;
}
function bGetRows(arr2d) {
	return arr2d;
}
function bGetSubMatrix(arr2d, rFrom, rows, cFrom, cols) {
	let res = []; for (let i = 0; i < rows; i++) res.push([]);
	let [rTotal, cTotal] = [arr2d.length, arr2d[0].length];
	let rIndex = 0;
	for (let r = rFrom; r < rFrom + rows; r++) {
		for (let c = cFrom; c < cFrom + cols; c++) {
			res[rIndex].push(arr2d[r][c]);
		}
		rIndex += 1;
	}
	return res;
}
function bGetSubMatrixWithIndices(arr2d, rFrom, rows, cFrom, cols) {
	let res = []; for (let i = 0; i < rows; i++) res.push([]);
	let [rTotal, cTotal] = [arr2d.length, arr2d[0].length];
	let rIndex = 0;
	for (let r = rFrom; r < rFrom + rows; r++) {
		for (let c = cFrom; c < cFrom + cols; c++) {
			res[rIndex].push({ row: r, col: c, val: arr2d[r][c] });
		}
		rIndex += 1;
	}
	return res;
}
function bNei(arr, idx, rows, cols, includeDiagonals = true) {
	let nei = [];
	let [r, c] = iToRowCol(idx, rows, cols);
	if (r > 0) nei.push(idx - cols); else nei.push(null);
	if (r > 0 && c < cols - 1 && includeDiagonals) nei.push(idx - cols + 1); else nei.push(null);
	if (c < cols - 1) nei.push(idx + 1); else nei.push(null);
	if (r < rows - 1 && c < cols - 1 && includeDiagonals) nei.push(idx + cols + 1); else nei.push(null);
	if (r < rows - 1) nei.push(idx + cols); else nei.push(null);
	if (r < rows - 1 && c > 0 && includeDiagonals) nei.push(idx + cols - 1); else nei.push(null);
	if (c > 0) nei.push(idx - 1); else nei.push(null);
	if (r > 0 && c > 0 && includeDiagonals) nei.push(idx - cols - 1); else nei.push(null);
	return nei;
}
function bNeiDir(arr, idx, dir, rows, cols, includeDiagonals = true) {
	let [r, c] = iToRowCol(idx, rows, cols);
	switch (dir) {
		case 0: if (r > 0) return (idx - cols); else return (null);
		case 1: if (r > 0 && c < cols - 1 && includeDiagonals) return (idx - cols + 1); else return (null);
		case 2: if (c < cols - 1) return (idx + 1); else return (null);
		case 3: if (r < rows - 1 && c < cols - 1 && includeDiagonals) return (idx + cols + 1); else return (null);
		case 4: if (r < rows - 1) return (idx + cols); else return (null);
		case 5: if (r < rows - 1 && c > 0 && includeDiagonals) return (idx + cols - 1); else return (null);
		case 6: if (c > 0) return (idx - 1); else return (null);
		case 7: if (r > 0 && c > 0 && includeDiagonals) return (idx - cols - 1); else return (null);
	}
	return null;
}
function boardArrOmitFirstRowCol(boardArr, rows, cols) {
	let res = [];
	for (let r = 1; r < rows; r++) {
		for (let c = 1; c < cols; c++) {
			let i = iFromRowCol(r, c, rows, cols);
			res.push(boardArr[i]);
		}
	}
	return res;
}
function boardToNode(state) {
	let res = new Array();
	for (let i = 0; i < state.length; i++) {
		if (state[i] == null) res[i] = ' ';
		else res[i] = state[i];
	}
	return res;
}
function bPartialCol(arr, icol, rows, cols) {
	let iStart = icol;
	let x = null;
	for (let i = iStart; i < iStart + (cols * rows); i += cols) { if (EmptyFunc(arr[i])) continue; else if (EmptyFunc(x)) x = arr[i]; else if (arr[i] != x) return null; }
	return x;
}
function bPartialDiag(arr, rows, cols) {
	let iStart = 0;
	let x = null;
	for (let i = iStart; i < arr.length; i += cols + 1) { if (EmptyFunc(arr[i])) continue; else if (EmptyFunc(x)) x = arr[i]; else if (arr[i] != x) return null; }
	return x;
}
function bPartialDiag2(arr, rows, cols) {
	let iStart = cols - 1;
	let x = null;
	for (let i = iStart; i < arr.length - 1; i += cols - 1) {
		if (EmptyFunc(arr[i])) continue; else if (EmptyFunc(x)) x = arr[i]; else if (arr[i] != x) return null;
	}
	return x;
}
function bPartialRow(arr, irow, rows, cols) {
	let iStart = irow * cols;
	let x = null;
	for (let i = iStart; i < iStart + cols; i++) {
		if (EmptyFunc(arr[i])) continue;
		else if (EmptyFunc(x)) x = arr[i];
		else if (arr[i] != x) return null;
	}
	return x;
}
function bRayDir(arr, idx, dir, rows, cols) {
	let indices = [];
	let i = idx;
	while (i < arr.length) {
		let i = bNeiDir(arr, i, dir, rows, cols);
		if (!i) break; else indices.push(i);
	}
	return indices;
}
function bStrideCol(arr, icol, rows, cols, stride) {
	for (let i = 0; i <= rows - stride; i++) {
		let ch = bStrideColFrom(arr, i, icol, rows, cols, stride);
		if (ch) return ch;
	}
	return null;
}
function bStrideColFrom(arr, irow, icol, rows, cols, stride) {
	if (rows - irow < stride) return null;
	let iStart = irow * cols + icol;
	let x = arr[iStart];
	if (EmptyFunc(x)) return null;
	for (let i = iStart + cols; i < iStart + cols * stride; i += cols) if (arr[i] != x) return null;
	return x;
}
function bStrideDiag2From(arr, irow, icol, rows, cols, stride) {
	if (rows - irow < stride || icol - stride + 1 < 0) return null;
	let iStart = irow * cols + icol;
	let x = arr[iStart];
	if (EmptyFunc(x)) return null;
	for (let i = iStart + cols - 1; i < iStart + (cols - 1) * stride; i += cols - 1) if (arr[i] != x) return null;
	return x;
}
function bStrideDiagFrom(arr, irow, icol, rows, cols, stride) {
	if (rows - irow < stride || cols - icol < stride) return null;
	let iStart = irow * cols + icol;
	let x = arr[iStart];
	if (EmptyFunc(x)) return null;
	for (let i = iStart + cols + 1; i < iStart + (cols + 1) * stride; i += cols + 1) if (arr[i] != x) return null;
	return x;
}
function bStrideRow(arr, irow, rows, cols, stride) {
	for (let i = 0; i <= cols - stride; i++) {
		let ch = bStrideRowFrom(arr, irow, i, rows, cols, stride);
		if (ch) return ch;
	}
	return null;
}
function bStrideRowFrom(arr, irow, icol, rows, cols, stride) {
	if (cols - icol < stride) return null;
	let iStart = irow * cols + icol;
	let x = arr[iStart];
	if (EmptyFunc(x)) return null;
	for (let i = iStart + 1; i < iStart + stride; i++) if (arr[i] != x) return null;
	return x;
}
function catanBoard(dParent, rows, topcols, styles = {}) {
	let g = hex1Board(dParent, rows, topcols, styles);
	hexCornerNodes(g);
}
function cCircle(c, sz, n, disp = -90) {
	let rad = sz / 2;
	centers = getEllipsePoints(rad, rad, n, disp)
	centers = centers.map(pt => ({ x: pt.X + c.x, y: pt.Y + c.y }));
	return centers;
}
function checkBoardEmpty(arr) { for (const x of arr) { if (!EmptyFunc(x)) return false; } return true; }
function checkBoardFull(arr) { for (const x of arr) if (EmptyFunc(x)) return false; return true; }
function checkPotentialTTT(arr) { return checkWinnerPossible(arr, G.rows, G.cols); }
function checkSudokuRule(matrix) {
	let i = 0;
	for (const arr of matrix) {
		let dd = hasDuplicate(arr);
		if (dd) {
			let err = { type: 'row', row: i, col: dd.i, val: dd.val, info: dd, i: i };
			return err;
		}
		i += 1;
	}
	i = 0;
	for (const arr of bGetCols(matrix)) {
		let dd = hasDuplicate(arr);
		if (dd) {
			let err = { type: 'column', col: i, row: dd.i, val: dd.val, i: i, info: dd };
			return err;
		}
		i += 1;
	}
	let [rows, cols] = [matrix.length, matrix[0].length];
	let rowsEach = rows == 9 ? 3 : 2;
	let colsEach = cols == 4 ? 2 : 3;
	let chunks = bGetChunksWithIndices(matrix, rowsEach, colsEach);
	i = 0;
	for (const arr of chunks) {
		let dd = hasDuplicate(arr);
		if (dd) {
			let val = dd.val;
			let err = { type: 'quadrant', row: val.row, col: val.col, val: val.val, i: i, info: dd };
		}
		i += 1;
	}
	return null;
}
function checkSudokuRule_trial1(matrix) {
	for (const arr of matrix) { let dd = hasDuplicate(arr); if (dd) return { type: 'row', info: dd }; }
	for (const arr of bGetCols(matrix)) { let dd = hasDuplicate(arr); if (dd) return { type: 'column', info: dd }; }
	let chunks = bGetChunks(matrix, 2, 2);
	for (const arr of chunks) { let dd = hasDuplicate(arr); if (dd) return { type: 'quadrant', info: dd }; }
	return null;
}
function checkWinner(arr, rows, cols) {
	for (i = 0; i < rows; i++) { let ch = bFullRow(arr, i, rows, cols); if (ch) return ch; }
	for (i = 0; i < cols; i++) { let ch = bFullCol(arr, i, rows, cols); if (ch) return ch; }
	let ch = bFullDiag(arr, rows, cols); if (ch) return ch;
	ch = bFullDiag2(arr, rows, cols); if (ch) return ch;
	return null;
}
function checkWinnerC4(arr, rows = 6, cols = 7, stride = 4) {
	for (i = 0; i < rows; i++) { let ch = bStrideRow(arr, i, rows, cols, stride); if (ch) return ch; }
	for (i = 0; i < cols; i++) { let ch = bStrideCol(arr, i, rows, cols, stride); if (ch) return ch; }
	for (i = 0; i < rows; i++) {
		for (j = 0; j < cols; j++) {
			let ch = bStrideDiagFrom(arr, i, j, rows, cols, stride); if (ch) return ch;
			ch = bStrideDiag2From(arr, i, j, rows, cols, stride); if (ch) return ch;
		}
	}
	return null;
}
function checkWinnerPossible(arr, rows, cols) {
	for (i = 0; i < rows; i++) { let ch = bPartialRow(arr, i, rows, cols); if (ch) return ch; }
	for (i = 0; i < cols; i++) { let ch = bPartialCol(arr, i, rows, cols); if (ch) return ch; }
	let ch = bPartialDiag(arr, rows, cols); if (ch) return ch;
	ch = bPartialDiag2(arr, rows, cols); if (ch) return ch;
	return null;
}
function checkWinnerTTT(arr) { return checkWinner(arr, G.rows, G.cols); }
function circleCenters(rows, cols, wCell, hCell) {
	let [w, h] = [cols * wCell, rows * hCell];
	let cx = w / 2;
	let cy = h / 2;
	let centers = [{ x: cx, y: cy }];
	let rx = cx + wCell / 2; let dradx = rx / wCell;
	let ry = cy + hCell / 2; let drady = ry / hCell;
	let nSchichten = Math.floor(Math.min(dradx, drady));
	for (let i = 1; i < nSchichten; i++) {
		let [newCenters, wsch, hsch] = oneCircleCenters(i * 2 + 1, i * 2 + 1, wCell, hCell);
		for (const nc of newCenters) {
			centers.push({ x: nc.x + cx - wsch / 2, y: nc.y + cy - hsch / 2 });
		}
	}
	return [centers, wCell * cols, hCell * rows];
}
function destroySudokuRule(pattern, rows, cols) {
	let sz = Math.min(rows, cols);
	let [r1, r2] = choose(range(0, sz - 1), 2);
	let c = chooseRandom(range(0, sz - 1));
	if (coin(50)) { arrSwap2d(pattern, r1, c, r2, c); }
	else if (coin(50)) { arrSwap2d(pattern, c, r1, c, r2); }
}
function expandBoard(board, rNew, cNew, iInsert) {
	let [boardArrOld, rOld, cOld] = [board.fields.map(x => isdef(x.item) ? x.item.index : null), board.rows, board.cols];
	let boardArrNew = new Array(rNew * cNew);
	for (let r = 0; r < rNew; r++) {
		for (let c = 0; c < cNew; c++) {
			let i = iFromRowCol(r, c, rNew, cNew);
			let x = (rOld != rNew) ? r : c;
			if (x < iInsert) {
				let iOld = iFromRowCol(r, c, rOld, cOld);
				boardArrNew[i] = boardArrOld[iOld];
			}
			else if (x == iInsert) boardArrNew[i] = null;
			else {
				let [ir, ic] = (rOld != rNew) ? [r - 1, c] : [r, c - 1];
				let iOld = iFromRowCol(ir, ic, rOld, cOld);
				boardArrNew[i] = boardArrOld[iOld];
			}
		}
	}
	return { rows: rNew, cols: cNew, boardArr: boardArrNew, extras: [] };
}
function fillColarr(colarr, items) {
	let i = 0;
	let result = [];
	for (const r of colarr) {
		let arr = [];
		for (let c = 0; c < r; c++) {
			arr.push(items[i]); i++;
		}
		result.push(arr);
	}
	return result;
}
function getCenters(layout, rows, cols, wCell, hCell,) {
	if (layout == 'quad') { return quadCenters(rows, cols, wCell, hCell); }
	else if (layout == 'hex') { return hexCenters(rows, cols, wCell, hCell); }
	else if (layout == 'circle') { return circleCenters(rows, cols, wCell, hCell); }
}
function getCentersFromAreaSize(layout, wBoard, hBoard, wCell, hCell) {
	let info;
	if (layout == 'quad') { info = quadCenters(rows, cols, wCell, hCell); }
	else if (layout == 'hex') { info = hexCenters(rows, cols, wCell, hCell); }
	else if (layout == 'hex1') { info = hex1Centers(rows, cols, wCell, hCell); }
	else if (layout == 'circle') { info = circleCenters(rows, cols, wCell, hCell); }
	return info;
}
function getCentersFromRowsCols(layout, rows, cols, wCell, hCell) {
	let info;
	if (layout == 'quad') { info = quadCenters(rows, cols, wCell, hCell); }
	else if (layout == 'hex') { info = hexCenters(rows, cols, wCell, hCell); }
	else if (layout == 'hex1') { info = hex1Centers(rows, cols, wCell, hCell); }
	else if (layout == 'circle') { info = circleCenters(rows, cols, wCell, hCell); }
	return info;
}
function getCornerVertices(centers, w = 100, h = 100) {
	let polys = [];
	for (const pt of centers) {
		let poly = getHexPoly(pt.x, pt.y, w, h);
		polys.push(poly);
	}
	let vertices = correctPolys(polys, 1);
	return vertices;
}
function getSudokuPattern(r, c) {
	let patterns = {
		44: [
			[[0, 1, 2, 3], [2, 3, 0, 1], [3, 0, 1, 2], [1, 2, 3, 0]],
			[[0, 1, 2, 3], [3, 2, 0, 1], [2, 3, 1, 0], [1, 0, 3, 2]],
			[[0, 1, 2, 3], [2, 3, 0, 1], [1, 0, 3, 2], [3, 2, 1, 0]],
		],
	};
	return chooseRandom(patterns['' + r + c]);
}
function getSudokuPatternFromDB(r, c, index) {
	let key = '' + r + 'x' + c;
	let numSamples = Object.keys(DB.games.gColoku.samples[key]).length;
	if (nundef(index)) index = randomNumber(0, numSamples - 1); else if (index >= numSamples) index = 1;
	let sample = DB.games.gColoku.samples[key][index];
	let pattern = sudokuSampleToIndexMatrix(sample.sol, r, c);
	let puzzle = sudokuSampleToIndexMatrix(sample.min, r, c);
	return { pattern: pattern, puzzle: puzzle };
}
function hasDuplicate(arr, efunc) {
	let di = {};
	if (nundef(efunc)) efunc = x => { return x === ' ' };
	let i = -1;
	for (const a of arr) {
		i += 1;
		if (efunc(a)) continue; //!isNumber(a) && a==' ') {console.log('H!',a);continue;}
		if (a in di) return { i: i, val: a };
		di[a] = true;
	}
	return false;
}
function hex1Board(dParent, rows, topcols, styles = {}) {
	let g = new UIGraph(dParent, styles);
	let [w, h] = [valf(lookup(styles, ['node', 'w']), 50), valf(lookup(styles, ['node', 'h']), 50)];
	let total = hex1Count(rows, topcols);
	let nids = g.addNodes(total);
	g.hex1(rows, topcols, w + 4, h + 4);
	let indices = hex1Indices(rows, topcols);
	let ids = g.getNodeIds();
	let di = {};
	for (let i = 0; i < ids.length; i++) {
		let [row, col] = [indices[i].row, indices[i].col];
		let id = ids[i];
		lookupSet(di, [row, col], id);
		g.setProp(id, 'row', row);
		g.setProp(id, 'col', col);
		g.setProp(id, 'label', `${row},${col}`);
	}
	for (let i = 0; i < ids.length; i++) {
		let [row, col] = [indices[i].row, indices[i].col];
		let id = ids[i];
		let nid2 = lookup(di, [row, col + 2]); if (nid2) g.addEdge(id, nid2);
		nid2 = lookup(di, [row + 1, col - 1]); if (nid2) g.addEdge(id, nid2);
		nid2 = lookup(di, [row + 1, col + 1]); if (nid2) g.addEdge(id, nid2);
	}
	let byrc = {};
	for (const r in di) {
		byrc[r] = {};
		for (const c in di[r]) {
			byrc[r][c] = g.getNode(di[r][c]).data();
		}
	}
	g.di = di;
	g.byrc = byrc;
	g.rc = (i, j, f) => (isdef(f)) ? f(g.getNode(di[i][j])) : g.getNode(di[i][j]);
	return g;
}
function hex1Centers(rows, cols, wCell = 100, hCell = null) {
	let colarr = _calc_hex_col_array(rows, cols);
	let maxcols = arrMax(colarr);
	if (nundef(hCell)) hCell = (hCell / .866);
	let hline = hCell * .75;
	let offX = wCell / 2, offY = hCell / 2;
	let centers = [];
	let x = 0; y = 0;
	for (let r = 0; r < colarr.length; r++) {
		let n = colarr[r];
		for (let c = 0; c < n; c++) {
			let dx = (maxcols - n) * wCell / 2;
			let dy = r * hline;
			let center = { x: dx + c * wCell + offX, y: dy + offY };
			centers.push(center);
		}
	}
	return [centers, wCell * maxcols, hCell / 4 + rows * hline];
}
function hex1Count(rows, topcols) {
	let colarr = _calc_hex_col_array(rows, topcols);
	let total = 0;
	for (let r = 0; r < colarr.length; r++) { total += colarr[r]; }
	return total;
}
function hex1Indices(rows, topcols) {
	let colarr = _calc_hex_col_array(rows, topcols);
	let iStart = Math.floor(rows / 2);
	let inc = -1;
	let res = [];
	for (let r = 0; r < colarr.length; r++) {
		let n = colarr[r];
		for (let c = 0; c < n; c++) {
			let icol = iStart + 2 * c;
			let irow = r;
			res.push({ row: irow, col: icol });
		}
		if (iStart == 0) inc = 1;
		iStart += inc;
	}
	return res;
}
function hexCenters(rows, cols, wCell = 100, hCell) {
	if (nundef(hCell)) hCell = (hCell / .866);
	let hline = hCell * .75;
	let offX = wCell / 2, offY = hCell / 2;
	let centers = [];
	let startSmaller = Math.floor(rows / 2) % 2 == 1;
	let x = 0; y = 0;
	for (let r = 0; r < rows; r++) {
		let isSmaller = startSmaller && r % 2 == 0 || !startSmaller && r % 2 == 1;
		let curCols = isSmaller ? cols - 1 : cols;
		let dx = isSmaller ? wCell / 2 : 0;
		dx += offX;
		for (let c = 0; c < curCols; c++) {
			let center = { x: dx + c * wCell, y: offY + r * hline };
			centers.push(center);
		}
	}
	return [centers, wCell * cols, hCell / 4 + rows * hline];
}
function hexCornerNodes(g) {
	let nodes = g.getNodes();
	let centers = nodes.map(x => x.data('center'));
	let vertices = getCornerVertices(centers);
	for (const f of nodes) {
		let center = f.data('center');
		console.log('center', center)
	}
}
function iFromRowCol(row, col, rows, cols) { return row * cols + col; }
function insertColNew(board, cClick) { return expandBoard(board, board.rows, board.cols + 1, cClick + 1); }
function insertRowNew(board, cClick) { return expandBoard(board, board.rows + 1, board.cols, cClick + 1); }
function isOppPiece(sym, plSym) { return sym && sym != plSym; }
function iToRowCol(idx, rows, cols) { let c = idx % cols; let r = (idx - c) / rows; return [r, c]; }
function makeEdge(dParent, v1, v2, dFromEdge, ew = 20) {
	let switched = false;
	if (v1.x == v2.x) {
		if (v1.y > v2.y) { let h = v2; v2 = v1; v1 = h; switched = true; }
		let w = ew / 2;
		let sp = `polygon(${v1.x - w + ew}px ${v1.y + dFromEdge + ew}px, ${v1.x + w + ew}px ${v1.y + dFromEdge + ew}px, ${v2.x + w + ew}px ${v2.y - dFromEdge + ew}px, ${v2.x - w + ew}px ${v2.y - dFromEdge + ew}px)`;
		let de = mDiv(dParent, { position: 'absolute', left: -ew, top: -ew, w: '120%', h: '120%' });
		mClass(de, 'edge');
		mStyle(de, { 'clip-path': sp });
		return mItem(null, { div: de }, { type: 'edge' });
	}
	if (v1.x > v2.x) { let h = v2; v2 = v1; v1 = h; switched = true; }
	let dx = v2.x - v1.x;
	let dy = v2.y - v1.y;
	let m = dy / dx;
	let [x1, y1, x2, y2] = [v1.x, v1.y, v2.x, v2.y];
	let alpha = Math.atan(m);
	let xa = x1 + dFromEdge * Math.cos(alpha);
	let ya = y1 + dFromEdge * Math.sin(alpha);
	let xe = x2 - dFromEdge * Math.cos(alpha);
	let ye = y2 - dFromEdge * Math.sin(alpha);
	let m2 = -1 / m;
	let beta = Math.atan(m2);
	let w = ew / 2;
	let x1t = xa + w * Math.cos(beta);
	let y1t = ya + w * Math.sin(beta);
	let x1b = xa - w * Math.cos(beta);
	let y1b = ya - w * Math.sin(beta);
	let x2t = xe + w * Math.cos(beta);
	let y2t = ye + w * Math.sin(beta);
	let x2b = xe - w * Math.cos(beta);
	let y2b = ye - w * Math.sin(beta);
	let de = mDiv(dParent, { position: 'absolute', left: 0, top: 0, w: '120%', h: '120%' });
	mStyle(de, { 'clip-path': `polygon(${x1t}px ${y1t}px, ${x2t}px ${y2t}px, ${x2b}px ${y2b}px, ${x1b}px ${y1b}px)` });
	mClass(de, 'edge');
	return mItem(null, { div: de }, { type: 'edge' });
}
function neighborhood(items, byrc) {
	let adjList = [];
	let di = {};
	for (const info of items) {
		if (info.type != 'field') continue;
		let [r, c] = [info.row, info.col];
		info.nodeItems = [
			lookup(byrc, [r - 2, c]),
			lookup(byrc, [r - 1, c + 1]),
			lookup(byrc, [r + 1, c + 1]),
			lookup(byrc, [r + 2, c]),
			lookup(byrc, [r + 1, c - 1]),
			lookup(byrc, [r - 1, c - 1]),
		];
		info.nodes = info.nodeItems.map(x => isdef(x) ? x.id : null);
		delete info.nodeItems;
		for (let i = 0; i < 6; i++) {
			let n1 = info.nodes[i];
			if (n1 == null) continue;
			let n2 = info.nodes[(i + 1 % 6)];
			if (n2 == null) continue;
			if (lookup(di, [n1, n2]) || lookup(di, [n2, n1])) continue;
			lookupSet(di, [n1, n2], true);
			adjList.push([n1, n2]);
		}
		info.neiItems = [
			lookup(byrc, [r - 3, c + 1]),
			lookup(byrc, [r, c + 2]),
			lookup(byrc, [r + 3, c + 1]),
			lookup(byrc, [r + 3, c - 1]),
			lookup(byrc, [r, c - 2]),
			lookup(byrc, [r - 3, c - 1]),
		];
		info.nei = info.neiItems.map(x => isdef(x) ? x.id : null);
		delete info.neiItems;
	}
}
function oneCircleCenters(rows, cols, wCell, hCell) {
	let [w, h] = [cols * wCell, rows * hCell];
	let cx = w / 2;
	let cy = h / 2;
	let centers = [{ x: cx, y: cy }];
	let n = 8;
	let radx = cx - wCell / 2;
	let rady = cy - hCell / 2;
	let peri = Math.min(radx, rady) * 2 * Math.PI;
	n = Math.floor(peri / Math.min(wCell, hCell));
	while (n > 4 && n % 4 != 0 && n % 6 != 0) n -= 1;
	centers = getEllipsePoints(radx, rady, n)
	centers = centers.map(pt => ({ x: pt.X + cx, y: pt.Y + cy }));
	return [centers, wCell * cols, hCell * rows];
}
function printBoard(arr, rows, cols, reduced = true) {
	let arrR = boardArrOmitFirstRowCol(arr, rows, cols);
	let s = toBoardString(arrR, rows, cols);
	console.log('board', s);
}
function printMatrix(arr2d, title = 'result') {
	let rows = arr2d.length;
	let cols = arr2d[0].length;
	let arr = arrFlatten(arr2d);
	let s = toBoardString(arr, rows, cols);
	console.log(title, s)
}
function printState(state, cols) {
	if (nundef(cols)) cols = G.cols;
	let formattedString = '';
	state.forEach((cell, index) => {
		formattedString += isdef(cell) ? ` ${cell == '0' ? ' ' : cell} |` : '   |';
		if ((index + 1) % G.cols == 0) {
			formattedString = formattedString.slice(0, -1);
			if (index < G.rows * G.cols - 1) {
				let s = '\u2015\u2015\u2015 '.repeat(G.cols);
				formattedString += '\n' + s + '\n'; //\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n';
			}
		}
	});
	console.log('%c' + formattedString, 'color: #6d4e42;font-size:10px');
	console.log();
}
function quadCenters(rows, cols, wCell, hCell) {
	let offX = wCell / 2, offY = hCell / 2;
	let centers = [];
	let x = 0; y = 0;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			let center = { x: x + offX, y: y + offY };
			centers.push(center);
			x += wCell;
		}
		y += hCell; x = 0;
	}
	return [centers, wCell * cols, hCell * rows];
}
function reduceBoard(board, rNew, cNew, iModify) {
	let [boardArrOld, rOld, cOld] = [board.fields.map(x => isdef(x.item) ? x.item.index : null), board.rows, board.cols];
	let rest = [];
	if (rOld > rNew) { rest = bGetRow(boardArrOld, iModify, rOld, cOld).filter(x => x != null); }
	else if (cOld > cNew) { rest = bGetCol(boardArrOld, iModify, rOld, cOld).filter(x => x != null); }
	let boardArrNew = new Array(rNew * cNew);
	for (let r = 0; r < rNew; r++) {
		for (let c = 0; c < cNew; c++) {
			let i = iFromRowCol(r, c, rNew, cNew);
			let x = (rOld != rNew) ? r : c;
			if (x < iModify) {
				let iOld = iFromRowCol(r, c, rOld, cOld);
				boardArrNew[i] = boardArrOld[iOld];
			}
			else {
				let [ir, ic] = (rOld != rNew) ? [r + 1, c] : [r, c + 1];
				let iOld = iFromRowCol(ir, ic, rOld, cOld);
				boardArrNew[i] = boardArrOld[iOld];
			}
		}
	}
	return { rows: rNew, cols: cNew, boardArr: boardArrNew, extras: rest };
}
function removeColNew(board, cClick) { return reduceBoard(board, board.rows, board.cols - 1, cClick); }
function removeRowNew(board, cClick) { return reduceBoard(board, board.rows - 1, board.cols, cClick); }
function stringToMatrix(s, rows, cols) {
	if (isNumber(s)) s = String(s);
	let letters = toLetterArray(s);
	let nums = letters.map(x => Number(x));
	let matrix = arrToMatrix(nums, rows, cols);
}
function sudokuSampleToIndexMatrix(s, rows, cols) {
	if (isNumber(s)) s = String(s);
	let letters = toLetterArray(s);
	let nums = letters.map(x => Number(x));
	let res = [];
	for (const n of nums) {
		if (n === 0) res.push(' ');
		else res.push(n - 1);
	}
	let matrix = arrToMatrix(res, rows, cols);
	return matrix;
}
function toBoardString(arr, rows, cols) {
	let s = '\n';
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			let item = arr[r * cols + c];
			s += '' + (nundef(item) ? '_' : item) + ' ';
		}
		s += '\n';
	}
	return s;
}
//#endregion board

//#region cards
const INNO = {
	color: { blue: '#89aad7', red: '#da7887', green: '#72b964', yellow: '#e2e57a', purple: '#9b58ba' },
	sym: {
		tower: { key: 'white-tower', fg: 'silver', bg: 'dimgray' },
		leaf: { key: 'leaf', fg: '#96D6BE', bg: '#275D45' },
		tree: { key: 'leaf', fg: '#96D6BE', bg: '#275D45' },
		bulb: { key: 'lightbulb', fg: 'white', bg: '#69224C' },
		crown: { key: 'queen-crown', fg: '#FEE593', bg: '#A27E44' },
		factory: { key: 'i_factory', fg: '#CD5147', bg: '#6D1A12' },
		clock: { key: 'clock', fg: '#3E84B5', bg: '#0B5884' },
	},
};
var CSZ = 300;
var CHEIGHT = CSZ;
var CWIDTH = CSZ * .7
var CGAP = CSZ * .05;
var BG_CARD_BACK = randomColor();
class Karte {
	static random(sym = 'bee', h = 220) {
		return Karte.get(sym, h);
		return Card52.random();
	}
	static c1(info, n, fg, h, w) {
		let d = mDiv();
		let svg = mgTag('svg',d, { class: 'card', face: '2C', height: '100%', width: '100%', preserveAspectRatio: 'none', viewBox: "-120 -168 240 336" });
		let g = mgTag('g',svg);
		let rect = mgTag('rect', g, { width: 239, height: 335, x: -120, y: 168, rx: 12, ry: 12, fill: "white", stroke: "black" });
		let t = mgTag('text', g, { 'text-anchor': "middle", 'dominant-baseline': "middle", x: 0, y: 0, fill: fg }, { fz: 1000 }, 'HALLO');
		if (nundef(w)) w = h * .7;
		if (isdef(h) || isdef(w)) { mSize(d, w, h); }
		console.log('d',d)
		return { key: getUID(), div: d, w: w, h: h, faceUp: true }; //this is a card!
	}
	static card(info, n, fg, h, w) {
		let x = `
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card" 
			face="2C" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="100%">
			<symbol id="${fg}${n}" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
				<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="${fg}" style="font-size:1000px;font-weight:bold;">${n}</text>				
			</symbol>
			<symbol id="${info.E}" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
				<text text-anchor="middle" dominant-baseline="middle" x="0" y="-150" fill="red" style="font-size:750px;font-family:${info.family};">${info.text}</text>				
			</symbol>
			<rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect>`;
		let h1 = { xs: 24, s: 27, m: 42, l: 60, xl: 70, xxl: 100 };
		let left = [0, 50, 100, 120];
		let upperLeftNumber = `<use xlink:href="#${fg}${n}" height="42" x="-120" y="-156"></use>`
			`<use xlink:href="#${info.E}" height="26.769" x="-111.784" y="-119"></use>
			<use xlink:href="#${info.E}" height="70" x="-35" y="-135.588"></use>
			<g transform="rotate(180)">
				<use xlink:href="#${fg}${n}" height="42" x="-120" y="-156"></use>
				<use xlink:href="#${info.E}" height="26.769" x="-111.784" y="-119"></use>
				<use xlink:href="#${info.E}" height="70" x="-35" y="-135.588"></use>
			</g>
		</svg>`;
		let svgCode = x;
		svgCode = '<div>' + svgCode + '</div>';
		let el = createElementFromHTML(svgCode);
		if (nundef(w)) w = h * .7;
		if (isdef(h) || isdef(w)) { mSize(el, w, h); }
		return { key: getUID(), div: el, w: w, h: h, faceUp: true }; //this is a card!
	}
	static get52(suit, rank, fg, bg, h, w, faceUp) {
		let key = suit.toLowerCase();
		let di = {
			h: 'hearts', s: 'spades', p: 'spades', c: 'clubs', t: 'clubs', d: 'diamonds', k: 'diamonds',
			j: 'joker', '*': 'joker'
		};
		if (isdef(di[key])) key = di[key];
		let di2 = { spades: 'spade suit', hearts: 'heart suit', diamonds: 'diamond suit', clubs: 'club suit' };
		if (isdef(di2[key])) key = di2[key];
		let info = Syms[key];
		return Karte.get(key, 300, rank, fg);
		let fz = info.family == 'emoNoto' ? 750 : 1000;
	}
	static get(sym = 'bee', h = 110, n = 2, fg = 'indigo', w) {
		let info = Syms[sym];
		n = 2;
		ensureColorNames();
		if (nundef(fg)) fg = sym == 'spades' || sym == 'clubs' ? 'black' : sym == 'hearts' || sym == 'diamonds' ? 'red' : chooseRandom(Object.keys(ColorNames)); //coin()?'red':'black'; //randomDarkColor();
		let cardKey = info.family == 'emoNoto' ? 'card0' : 'card52';
		let basic = {
			card0: `
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card" 
				face="2C" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="100%">
					<symbol id="${fg}${n}" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
						<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="${fg}" style="font-size:1000px;font-weight:bold;">${n}</text>				
					</symbol>
					<symbol id="${info.E}" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
						<text text-anchor="middle" dominant-baseline="middle" x="0" y="-150" fill="red" style="font-size:750px;font-family:${info.family};">${info.text}</text>				
					</symbol>
					<rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect>
					<use xlink:href="#${fg}${n}" height="42" x="-118" y="-156"></use>
					<use xlink:href="#${info.E}" height="26.769" x="-111.784" y="-119"></use>
					<use xlink:href="#${info.E}" height="70" x="-35" y="-135.588"></use>
					<g transform="rotate(180)">
						<use xlink:href="#${fg}${n}" height="42" x="-118" y="-156"></use>
						<use xlink:href="#${info.E}" height="26.769" x="-111.784" y="-119"></use>
						<use xlink:href="#${info.E}" height="70" x="-35" y="-135.588"></use>
					</g>
				</svg>`,
			card52: `
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card" 
				face="2C" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="100%">
					<symbol id="${fg}${n}" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
						<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="${fg}" style="font-size:1000px;font-family:opensans;">${n}</text>				
					</symbol>
					<symbol id="${info.E}" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
						<text text-anchor="middle" dominant-baseline="middle" x="0" y="50" fill="${fg}" style="font-size:800px;font-family:${info.family};">${info.text}</text>				
					</symbol>
					<rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect>
					<use xlink:href="#${fg}${n}" height="40" x="-116.4" y="-156"></use>
					<use xlink:href="#${info.E}" height="26.769" x="-111.784" y="-119"></use>
					<use xlink:href="#${info.E}" height="70" x="-35" y="-135.588"></use>
					<g transform="rotate(180)">
						<use xlink:href="#${fg}${n}" height="40" x="-116.4" y="-156"></use>
						<use xlink:href="#${info.E}" height="26.769" x="-111.784" y="-119"></use>
						<use xlink:href="#${info.E}" height="70" x="-35" y="-135.588"></use>
					</g>
				</svg>`,
			card7: `
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card" 
				face="2C" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="100%">
					<symbol id="VC2" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
						<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="red" style="font-size:750px;font-family:opensans;">A</text>				
					</symbol>
					<rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect>
					<use xlink:href="#VC2" height="32" x="-114.4" y="-156"></use>
					<use xlink:href="#VC2" height="26.769" x="-111.784" y="-119"></use>
					<use xlink:href="#VC2" height="70" x="-35" y="-135.588"></use>
					<g transform="rotate(180)">
						<use xlink:href="#VC2" height="32" x="-114.4" y="-156"></use>
						<use xlink:href="#VC2" height="26.769" x="-111.784" y="-119"></use>
						<use xlink:href="#VC2" height="70" x="-35" y="-135.588"></use>
					</g>
				</svg>`,
			card6: `
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card" 
				face="2C" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="100%">
					<symbol id="VC2" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
						<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="red" style="font-size:750px;font-family:opensans;">A</text>				
					</symbol>
					<rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect>
					<use xlink:href="#VC2" height="32" x="-114.4" y="-156"></use>
				</svg>`,
			card5: `
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card" 
				face="2C" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="100%">
					<symbol id="SC2" viewBox="-600 -600 1200 1200" preserveAspectRatio="xMinYMid">
						<path d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z" 
							fill="black">
						</path>
					</symbol>
					<symbol id="VC2" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
						<path d="M-225 -225C-245 -265 -200 -460 0 -460C 200 -460 225 -325 225 -225C225 -25 -225 160 -225 460L225 460L225 300" 
							stroke="black" stroke-width="80" stroke-linecap="square" stroke-miterlimit="1.5" fill="none">
						</path>
					</symbol>
					<rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect>
					<use xlink:href="#VC2" height="32" x="-114.4" y="-156"></use>
					<use xlink:href="#SC2" height="26.769" x="-111.784" y="-119"></use>
					<use xlink:href="#SC2" height="70" x="-35" y="-135.588"></use>
					<g transform="rotate(180)">
						<use xlink:href="#VC2" height="32" x="-114.4" y="-156"></use>
						<use xlink:href="#SC2" height="26.769" x="-111.784" y="-119"></use>
						<use xlink:href="#SC2" height="70" x="-35" y="-135.588"></use>
					</g>
					<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="red" style="font-size:16px;font-family:opensans;">I love SVG!</text>				
					<text text-anchor="middle" dominant-baseline="hanging" x="0" y="-156" fill="blue" style="font-size:16px;font-family:opensans;">YES</text>				
					<text text-anchor="middle" dominant-baseline="hanging" x="0" y="-156" fill="green" transform="rotate(180)" style="font-size:16px;font-family:opensans;">YES</text>				
				</svg>`,
			card4: `
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card" 
				face="2C" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="100%">
					<symbol id="VC2" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
						<text dominant-baseline="hanging" text-anchor="middle" x="0" y="0" fill="red" style="font-size:600px;font-family:${info.family};">${info.text}</text>				
					</symbol>
					<rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect>
					<use xlink:href="#VC2" height="32" x="-114.4" y="-156" dominant-baseline="hanging" text-anchor="middle" ></use>
					<g transform="rotate(180)">
						<use xlink:href="#VC2" height="32" x="-114.4" y="-156" dominant-baseline="hanging" text-anchor="middle" ></use>
					</g>
					<text dominant-baseline="hanging" text-anchor="middle" x="0" y="0" fill="red" style="font-size:600px;font-family:${info.family};">${info.text}</text>				
					<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="red" style="font-size:16px;font-family:opensans;">I love SVG!</text>				
					<text text-anchor="middle" dominant-baseline="hanging" x="0" y="-156" fill="blue" style="font-size:16px;font-family:opensans;">YES</text>				
					<text text-anchor="middle" dominant-baseline="hanging" x="0" y="-156" fill="green" transform="rotate(180)" style="font-size:16px;font-family:opensans;">YES</text>				
				</svg>`,
			card3: `
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card" 
				face="2C" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="100%">
					<rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect>
					<text dominant-baseline="hanging" x="-114" y="-156" fill="red" style="font-size:30px;font-family:${info.family};">${info.text}</text>				
					<text  text-anchor="end" dominant-baseline="hanging" x="114" y="-156" fill="red" style="font-size:30px;font-family:${info.family};">${info.text}</text>				
					<text text-anchor="middle" dominant-baseline="hanging" x="0" y="-156" fill="blue" style="font-size:16px;font-family:opensans;">YES</text>				
					<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="red" style="font-size:16px;font-family:opensans;">I love SVG!</text>				
					<g transform="rotate(180)">
						<text dominant-baseline="hanging" x="-114" y="-156" fill="red" style="font-size:30px;font-family:${info.family};">${info.text}</text>				
						<text  text-anchor="end" dominant-baseline="hanging" x="114" y="-156" fill="red" style="font-size:30px;font-family:${info.family};">${info.text}</text>				
						<text text-anchor="middle" dominant-baseline="hanging" x="0" y="-156" fill="blue" style="font-size:16px;font-family:opensans;">YES</text>				
					</g>
				</svg>`,
			card2: `
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card" 
				face="2C" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="100%">
					<symbol id="VC2" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
						<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="red" style="font-size:500px;font-family:${info.family};">${info.text}</text>				
					</symbol>
					<rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect>
					<text dominant-baseline="hanging" x="-114" y="-156" fill="red" style="font-size:30px;font-family:${info.family};">${info.text}</text>				
					<text  text-anchor="end" dominant-baseline="hanging" x="114" y="-156" fill="red" style="font-size:30px;font-family:${info.family};">${info.text}</text>				
					<text text-anchor="middle" dominant-baseline="hanging" x="0" y="-156" fill="blue" style="font-size:16px;font-family:opensans;">YES</text>				
					<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="red" style="font-size:16px;font-family:opensans;">I love SVG!</text>				
					<g transform="rotate(180)">
						<text dominant-baseline="hanging" x="-114" y="-156" fill="red" style="font-size:30px;font-family:${info.family};">${info.text}</text>				
						<text  text-anchor="end" dominant-baseline="hanging" x="114" y="-156" fill="red" style="font-size:30px;font-family:${info.family};">${info.text}</text>				
						<text text-anchor="middle" dominant-baseline="hanging" x="0" y="-156" fill="blue" style="font-size:16px;font-family:opensans;">YES</text>				
					</g>
				</svg>`,
			card1: `
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card" 
				face="2C" height="100%" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="100%">
					<symbol id="VC2">
					</symbol>
					<rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect>
					<use xlink:href="#VC2" height="32" x="-114.4" y="-156"></use>
					<use xlink:href="#VC2" height="32" x="0" y="0"></use>
					<text text-anchor="middle" dominant-baseline="middle" x="0" y="0" fill="red" style="font-size:16px;font-family:opensans;">I love SVG!</text>				
					<g transform="rotate(180)">
						<text dominant-baseline="hanging" x="-114" y="-156" fill="red" style="font-size:30px;font-family:${info.family};">${info.text}</text>				
						<text text-anchor="end" dominant-baseline="hanging" x="114" y="-156" fill="red" style="font-size:30px;font-family:${info.family};">${info.text}</text>				
						<text text-anchor="middle" dominant-baseline="hanging" x="0" y="-156" fill="blue" style="font-size:16px;font-family:opensans;">YES</text>				
					</g>
				</svg>`
		};
		let svgCode = basic[cardKey];
		svgCode = '<div>' + svgCode + '</div>';
		let el = createElementFromHTML(svgCode);
		if (nundef(w)) w = h * .7;
		if (isdef(h) || isdef(w)) { mSize(el, w, h); }
		return { key: getUID(), div: el, w: w, h: h, faceUp: true }; //this is a card!
	}
}
class Card52 {
	static toString(c) { return c.rank + ' of ' + c.suit; }
	static _getKey(i) {
		if (i >= 52) return 'card_J1';
		let rank = Card52.getRank(i);
		let suit = Card52.getSuit(i);
		return 'card_' + rank + suit;
	}
	static _fromKey(k) {
		let ranks = 'A23456789TJQK';
		let suits = 'SHDC';
		let ir = ranks.indexOf(k[0]); //=> zahl zwischen 0 und 12
		let is = suits.indexOf(k[1]); //=> zahle zwischen 0 und 3
		return is * 13 + ir;
	}
	static getRankValue(i) { if (nundef(i)) return null; let r = i % 13; return r == 0 ? 12 : r - 1; }
	static getRank(i) {
		let rank = (i % 13);
		if (rank == 0) rank = 'A';
		else if (rank >= 9) rank = ['T', 'J', 'Q', 'K'][rank - 9];
		else rank = rank + 1;
		return rank;
	}
	static getSuit(i) {
		let s = ['S', 'H', 'D', 'C'][divInt(i, 13)];
		return s;
	}
	static getShortString(c){return c.suit+c.rank;}
	static turnFaceDown(c, color) {
		if (!c.faceUp) return;
		let svgCode = C52.card_2B; //C52 is cached asset loaded in _start
		c.div.innerHTML = svgCode;
		if (isdef(color)) c.div.children[0].children[1].setAttribute('fill', color);
		c.faceUp = false;
	}
	static turnFaceUp(c) {
		if (c.faceUp) return;
		c.div.innerHTML = C52[c.key];
		c.faceUp = true;
	}
	static fromSR(sr, h){return Card52.fromShortString(sr, h);}
	static fromShortString(sr, h){ 
		let key = sr[1].toUpperCase()+sr[0].toUpperCase();
		let i = Card52._fromKey(key);
		console.log('card from ', sr,'is',key,'i',i)
		return Card52.getItem(i, h);
	}
	static get(sr, h){return Card52.fromSR(sr, h);}
	static getItem(i, h = 110, w) {
		if (nundef(w)) w = h * .7;
		if (nundef(i)) i=randomNumber(0,51);
		if (isString(i) && i.length == 2){i=Card52._fromKey(i[1].toUpperCase()+i[0].toUpperCase());}
		let c = Card52._createUi(i, undefined, w, h);
		c.i = c.val = i;
		return c;
	}
	static _createUi(irankey, suit, w, h) {
		let rank = irankey;
		if (nundef(irankey) && nundef(suit)) {
			[rank, suit] = Card52.randomRankSuit();
		} else if (nundef(irankey)) {
			irankey = '2';
			suit = 'B';
		} else if (nundef(suit)) {
			if (isNumber(irankey)) irankey = Card52._getKey(irankey);
			rank = irankey[5];
			suit = irankey[6];
		}
		if (rank == '10') rank = 'T';
		if (rank == '1') rank = 'A';
		if (nundef(suit)) suit = 'H'; else suit = suit[0].toUpperCase(); //joker:J1,J2, back:1B,2B
		let cardKey = 'card_' + rank + suit;
		let svgCode = C52[cardKey]; //C52 is cached asset loaded in _start
		svgCode = '<div>' + svgCode + '</div>';
		let el = createElementFromHTML(svgCode);
		if (isdef(h) || isdef(w)) { mSize(el, w, h); }
		return { rank: rank, suit: suit, key: cardKey, div: el, w: w, h: h, faceUp: true }; //this is a card!
	}
	static random() { return Card52.getItem(randomNumber(0,51)); }
	static randomRankSuit() {
		let c = Card52.random();
		return [c.rank,c.suit];
	}
	static show(icard, dParent, h = 110, w = undefined) {
		if (isNumber(icard)) {
			if (nundef(w)) w = h * .7;
			icard = Card52.getItem(icard, h, w);
		}
		mAppend(dParent, icard.div);
	}
}
class DeckClass {
	constructor(f) { this.data = []; if (isdef(f)) if (isString(f)) this['init' + f](); else if (isList(f)) this.init(f); }
	init(arr) { this.data = arr; }
	initEmpty() { this.data = []; }
	initNumber(n, shuffled = true) { this.initTest(n,shuffled);}
	initTest(n, shuffled = true) { this.data = range(0, n - 1); if (shuffled) this.shuffle(); }
	init52(shuffled = true, jokers = 0) { this.data = range(0, 51 + jokers); if (shuffled) this.shuffle(); }
	init52_double(shuffled = true, jokers = 0) { this.data = range(0, 103 + jokers); if (shuffled) this.shuffle(); }
	init52_no_suits(n=4,shuffled = true, jokers = 0) { this.data = range(0, 13*n + jokers - 1); if (shuffled) this.shuffle(); }
	initRandomHand52(n) { this.data = choose(range(0, 51), n); }
	addTop(i) { this.data.push(i); return this; }
	addBottom(i) { this.data.unshift(i); return this; }
	bottom() { return this.data[0]; }
	cards() { return this.data; }
	count() { return this.data.length; }
	clear() { this.data = []; }
	deal(n) { return this.data.splice(0, n); }
	dealDeck(n) { let d1 = new DeckClass(); d1.init(this.data.splice(0, n)); return d1; }
	popTop() { return this.data.pop(); }
	popBottom() { return this.data.shift(); }
	remTop() { this.data.pop(); return this; }
	remBottom() { this.data.shift(); return this; }
	remove(i) { removeInPlace(this.data, i); return this; }
	removeAtIndex(i) { return this.data.splice(i, 1)[0]; }
	removeFromIndex(i, n) { return this.data.splice(i, n); }
	setData(arr, shuffled = false) { this.data = arr; if (shuffled) this.shuffle(); }
	sort() {
		this.data.sort((a, b) => Number(a) - Number(b));
		return this;
	}
	shuffle() { shuffle(this.data); return this; }
	top() { return arrLast(this.data); }
	toString() { return this.data.toString(); }//.join(','); }
}
class Cardz {
	static toString(c) { return c.rank + ' of ' + c.suit; }
	static _getKey(i) {
		if (i >= 52) return 'card_J1';
		let rank = Card52.getRank(i);
		let suit = Card52.getSuit(i);
		return 'card_' + rank + suit;
	}
	static _fromKey(k) {
		let ranks = 'A23456789TJQK';
		let suits = 'SHDC';
		let ir = ranks.indexOf(k[0]); //=> zahl zwischen 0 und 12
		let is = suits.indexOf(k[1]); //=> zahle zwischen 0 und 3
		return is * 13 + ir;
	}
	static getRankValue(i) { if (nundef(i)) return null; let r = i % 13; return r == 0 ? 12 : r - 1; }
	static getRank(i) {
		let rank = (i % 13);
		if (rank == 0) rank = 'A';
		else if (rank >= 9) rank = ['T', 'J', 'Q', 'K'][rank - 9];
		else rank = rank + 1;
		return rank;
	}
	static getSuit(i) {
		let s = ['S', 'H', 'D', 'C'][divInt(i, 13)];
		return s;
	}
	static getShortString(c){return c.suit+c.rank;}
	static turnFaceDown(c, color) {
		if (!c.faceUp) return;
		let svgCode = C52.card_2B; //C52 is cached asset loaded in _start
		c.div.innerHTML = svgCode;
		if (isdef(color)) c.div.children[0].children[1].setAttribute('fill', color);
		c.faceUp = false;
	}
	static turnFaceUp(c) {
		if (c.faceUp) return;
		c.div.innerHTML = C52[c.key];
		c.faceUp = true;
	}
	static fromSR(sr){return Card52.fromShortString(sr);}
	static fromShortString(sr){ 
		let key = sr[1].toUpperCase()+sr[0].toUpperCase();
		let i = Card52._fromKey(key);
		console.log(key,'i',i)
		return Card52.getItem(i);
	}
	static getItem(i, h = 110, w) {
		if (nundef(w)) w = h * .7;
		if (nundef(i)) i=randomNumber(0,51);
		if (isString(i) && i.length == 2){i=Card52._fromKey(i[1].toUpperCase()+i[0].toUpperCase());}
		let c = Card52._createUi(i, undefined, w, h);
		c.i = c.val = i;
		return c;
	}
	static _createUi(irankey, suit, w, h) {
		let rank = irankey;
		if (nundef(irankey) && nundef(suit)) {
			[rank, suit] = Card52.randomRankSuit();
		} else if (nundef(irankey)) {
			irankey = '2';
			suit = 'B';
		} else if (nundef(suit)) {
			if (isNumber(irankey)) irankey = Card52._getKey(irankey);
			rank = irankey[5];
			suit = irankey[6];
		}
		if (rank == '10') rank = 'T';
		if (rank == '1') rank = 'A';
		if (nundef(suit)) suit = 'H'; else suit = suit[0].toUpperCase(); //joker:J1,J2, back:1B,2B
		let cardKey = 'card_' + rank + suit;
		let svgCode = C52[cardKey]; //C52 is cached asset loaded in _start
		svgCode = '<div>' + svgCode + '</div>';
		let el = createElementFromHTML(svgCode);
		if (isdef(h) || isdef(w)) { mSize(el, w, h); }
		return { rank: rank, suit: suit, key: cardKey, div: el, w: w, h: h, faceUp: true }; //this is a card!
	}
	static random() { return Card52.getItem(randomNumber(0,51)); }
	static randomRankSuit() {
		let c = Card52.random();
		return [c.rank,c.suit];
	}
	static show(icard, dParent, h = 110, w = undefined) {
		if (isNumber(icard)) {
			if (nundef(w)) w = h * .7;
			icard = Card52.getItem(icard, h, w);
		}
		mAppend(dParent, icard.div);
	}
}
class Deck1 extends Array {
	initTest(n, shuffled = true) { range(0, n).map(x => this.push(Card52.getItem(x))); if (shuffled) this.shuffle(); }
	initEmpty() { }
	init52(shuffled = true, jokers = 0) {
		range(0, 51 + jokers).map(x => this.push(Card52.getItem(x)));
		if (shuffled) this.shuffle();
	}
	add(otherDeck) { while (otherDeck.length > 0) { this.unshift(otherDeck.pop()); } return this; }
	count() { return this.length; }
	static transferTopFromToBottom(d1, d2) { let c = d1.pop(); d2.putUnderPile(c); return c; }
	deal(n) { return this.splice(0, n); }
	getIndices() { return this.map(x => x.i); }
	log() { console.log(this); }
	putUnderPile(x) { this.push(x); }
	putOnTop(x) { this.unshift(x); }
	showDeck(dParent, splay, ovPercent = 0, faceUp = undefined, contStyles = {}) {
		if (isdef(faceUp)) { if (faceUp == true) this.turnFaceUp(); else this.turnFaceDown(); }
		splayout(this, dParent, contStyles, ovPercent, splay);
	}
	shuffle() { shuffle(this); }
	topCard() { return this[this.length - 1]; }
	turnFaceUp() {
		if (isEmpty(this) || this[0].faceUp) return;
		this.map(x => Card52.turnFaceUp(x));
	}
	turnFaceDown() {
		if (isEmpty(this) || !this[0].faceUp) return;
		this.map(x => Card52.turnFaceDown(x));
	}
}
function anim1(elem, prop, from, to, ms) {
	if (prop == 'left') elem.style.position = 'absolute';
	if (isNumber(from)) from = '' + from + 'px';
	if (isNumber(to)) to = '' + to + 'px';
}
function aristoUi(dParent, g) {
	clearTable();
	let d1 = mDiv(dParent, { w: '100%' }); mFlex(d1, 'v');
	let dWorld = mDiv(d1, { bg: 'random', hmin: 170, flex: 1 });
	mFlex(dWorld);
	iAdd(g.me, { div: cardZone(d1, g.me, 2) });
	let others = g.others;
	for (let i = 0; i < others.length; i++) {
		let pl = others[i];
		iAdd(pl, { div: cardZone(d1, pl) });
	}
	for (const o of [g.draw_pile, g.market, g.buy_cards, g.discard_pile]) { iAdd(o, { div: cardZone(dWorld, o) }); }
	for (const name of ['draw_pile', 'market', 'buy_cards', 'discard_pile']) { g[name + 'Items'] = showCards(g[name]); }
	for (const pl of g.allPlayers) {
		pl.handItems = showCards({ div: iDiv(pl), type: pl==g.me?'hand':'handHidden', cards: pl.hand });
		if (isdef(pl.stall)) pl.stallItems = showCards({ div: iDiv(pl), type: g.stallsHidden ? 'cardsHidden' : 'cards', cards: pl.stall });
		if (isdef(pl.buildings)){
			for(const building of pl.buildings){
				let bItem = showCards({ div: iDiv(pl), type: 'hand', cards: building });
				lookupAddToList(pl,['buildingItems'],bItem);
			}
		}
	}
}
function cardInno(dParent, key) {
	if (nundef(key)) key = chooseRandom(Object.keys(Cinno));
	let cardInfo = Cinno[key];
	cardInfo.key = key;
	let sym = INNO.sym[cardInfo.type];
	let info = Syms[sym.key];
	let card = cBlank(dParent, { fg: 'black', bg: INNO.color[cardInfo.color], w: CSZ, h: CSZ * .65 });
	let [dCard, sz, szTitle, margin] = [iDiv(card), CSZ / 5, CSZ/8, CSZ/40];
	let [dTitle, dMain] = cTitleArea(card, szTitle);
	let d = mAddContent(dTitle, key, {
		patop: 4, bg: sym.bg, fg: 'white', h: szTitle, fz: szTitle * .7, align: 'center',
		position: 'relative'
	});
	mAddContent(d, cardInfo.age, { hpadding: szTitle / 4, float: 'right' });
	let s = mSym(sym.key, d, { hpadding: szTitle / 4, h: szTitle * .7, fg: sym.fg, float: 'left' });
	let positions = ['tl', 'bl', 'bc', 'br'];
	for (let i = 0; i < 4; i++) {
		let r = cardInfo.resources[i];
		let pos = positions[i];
		if (r in INNO.sym) { innoSym(r, dMain, sz, pos, margin); }
		else if (r == 'None') { innoAgeNumber(cardInfo.age, dMain, sz, pos, margin); }
		else if (isNumber(r)) { innoBonusNumber(r, dMain, sz, pos, margin); }
		else if (r == 'echo') { innoEcho(cardInfo.echo, dMain, sz, pos, margin); }
	}
	let box = mBoxFromMargins(dMain, 10, margin, sz + margin, sz + 2 * margin); //,{bg:'grey',alpha:.5, rounding:10});
	mStyle(box, { align: 'left' });
	let text = '';
	for (const dog of cardInfo.dogmas) {
		console.log('text', cardInfo.type, sym);
		let t = startsWith(dog, 'I demand') ? ('I <b>demand</b>' + dog.substring(8)) : dog;
		text += `<span style="color:${sym.bg};font-family:${info.family}">${info.text}</span>` + '&nbsp;' + t + '<br>';
	}
	let t2 = innoText(text);
	box.onclick = (ev) => makeInfobox(ev, box, 2); //console.log('click!',ev.target);
	mFillText(t2, box);
}
function cardInno1(key, wCard = 420) {
	if (nundef(key)) key = chooseRandom(Object.keys(Cinno));
	let f = wCard / 420;
	let [w, h, szSym, paSym, fz, pa, bth, vGapTxt, rnd, gap] = [420 * f, 200 * f, 100 * f, 8 * f, 100 * f * .8, 20 * f, 4 * f, 8 * f, 10 * f, 6 * f].map(x => Math.ceil(x));
	let info = Cinno[key];
	info.key = key;
	let cdict = { red: RED, blue: 'royalblue', green: 'green', yellow: 'yelloworange', purple: 'indigo' };
	info.c = getColorDictColor(cdict[info.color]);
	let d = mDiv();
	mSize(d, w, h);
	mStyle(d, { fz: pa, margin: 8, align: 'left', bg: info.c, rounding: rnd, patop: paSym, paright: pa, pabottom: szSym, paleft: szSym + paSym, border: '' + bth + 'px solid silver', position: 'relative' })
	mText(info.key.toUpperCase(), d, { fz: pa, weight: 'bold', margin: 'auto' });
	mLinebreak(d);
	for (const dog of info.dogmas) {
		let text = replaceSymbols(dog);
		let d1 = mText(text, d); //,{mabot:14});
		d1.style.marginBottom = '' + vGapTxt + 'px';
	}
	let syms = []; let d1;
	szSym -= gap;
	let sdict = {
		tower: { k: 'white-tower', bg: 'dimgray' }, clock: { k: 'watch', bg: 'navy' }, crown: { k: 'crown', bg: 'black' },
		tree: { k: 'tree', bg: GREEN },
		bulb: { k: 'lightbulb', bg: 'purple' }, factory: { k: 'factory', bg: 'red' }
	};
	for (const s in sdict) { sdict[s].sym = Syms[sdict[s].k]; }
	for (const sym of info.resources) {
		let isEcho = false;
		if (sym == 'None') {
			d1 = mDiv(d, { fz: fz * .75, fg: 'black', bg: 'white', rounding: '50%', display: 'inline' });
			let d2 = mText('' + info.age, d1, {});
			mClass(d2, 'centerCentered');
		} else if (sym == 'echo') {
			let text = info.echo;
			console.log('info.echo',info.echo);
			if (isList(info.echo)) text = info.echo[0];
			text=replaceSymbols(text);
			wEcho = szSym;
			let [w1, h1, w2, h2] = [wEcho, szSym, wEcho - 8, szSym - 8];
			d1 = mDiv(d, { display: 'inline', fg: 'white', bg: 'dimgray', rounding: 6, h: h1, w: w1 });
			let [bestFont, w3, h3] = fitFont(text, 20, w2, h2);
			let d2 = mDiv(d1, { w: w3, h: h3, fz: bestFont }, null, text);
			mCenterCenterFlex(d1);
			isEcho = true;
		} else if (isNumber(sym)) {
			d1 = mDiv(d, { fz: fz * .75, fg: 'white', bg: 'brown', border: '2px solid black', rounding: '50%', display: 'inline' });
			mCenterCenterFlex(d1);
			let d2 = mText('' + info.age, d1, {});
		} else {
			let key = sdict[sym].k;
			let mi = mPic(key, d, { w: szSym, fz: szSym * .8, bg: sdict[sym].bg, rounding: '10%' });
			d1 = iDiv(mi);
		}
		syms.push({ isEcho: isEcho, div: d1 });
	}
	placeSymbol(syms[0], szSym, gap, { left: 0, top: 0 });
	placeSymbol(syms[1], szSym, gap, { left: 0, bottom: 0 });
	placeSymbol(syms[2], szSym, gap, { left: w / 2, bottom: 0 });
	placeSymbol(syms[3], szSym, gap, { right: 0, bottom: 0 });
	info.div = d;
	return info;
}
function cardPattern(n, sym) {
	let di = {
		1: [sym],
		2: [[sym], [sym]],
		3: [[sym], [sym], [sym]],
		4: [[sym, sym], [sym, sym]],
		5: [[sym, sym], [sym], [sym, sym]],
		6: [[sym, sym], [sym, sym], [sym, sym]],
		7: [[sym, sym], [sym, sym, sym], [sym, sym]],
		8: [[sym, sym, sym], [sym, sym], [sym, sym, sym]],
		9: [[sym, sym, sym], [sym, sym, sym], [sym, sym, sym]],
		10: [[sym, sym, sym], [sym, sym, sym, sym], [sym, sym, sym]],
		11: [[sym, sym, sym, sym], [sym, sym, sym], [sym, sym, sym, sym]],
		12: [[sym, sym, sym, sym], [sym, sym, sym, sym], [sym, sym, sym, sym]],
		13: [[sym, sym, sym], [sym, sym], [sym, sym, sym], [sym, sym], [sym, sym, sym]],
		14: [[sym, sym, sym, sym], [sym, sym, sym, sym], [sym, sym, sym, sym]],
		15: [[sym, sym, sym, sym], [sym, sym, sym, sym], [sym, sym, sym, sym]],
	};
	return di[n];
}
function cardZone(dParent, o, flex = 1, hmin = 170) {
	let dOuter = mDiv(dParent, { bg: o.color, fg: 'contrast', flex: flex, hmin: hmin }, 'd' + o.name, o.name);
	let dInner = mDiv(dOuter);
	mFlex(dInner); dInner.style.alignContent = 'flex-start';
	return dInner;
}
function cBlank(dParent, styles={}, id) {
	if (nundef(styles.h)) styles.h = CSZ;
	if (nundef(styles.w)) styles.w = styles.h * .7;
	if (nundef(styles.bg)) styles.bg = 'white';
	styles.position = 'relative';
	let [w, h, sz] = [styles.w, styles.h, Math.min(styles.w, styles.h)];
	if (nundef(styles.rounding)) styles.rounding = sz * .05;
	let d = mDiv(dParent, styles, id, null, 'card');
	let item = mItem(null, { div: d }, { type: 'card', sz: sz, rounding: styles.rounding }, false);
	copyKeys(styles, item);
	return item;
}
function cBlankSvg(dParent, styles = {}) {
	if (nundef(styles.h)) styles.h = CSZ;
	if (nundef(styles.w)) styles.w = styles.h * .7;
	if (nundef(styles.bg)) styles.bg = 'white';
	styles.position = 'relative';
	let [w, h, sz] = [styles.w, styles.h, Math.min(styles.w, styles.h)];
	if (nundef(styles.rounding)) styles.rounding = sz * .05;
	let d = mDiv(dParent, styles, null, null, 'card');
	let svg = mgTag('svg', d, { width: '100%', height: '100%' }); //,background:'transparent'});
	let g = mgTag('g', svg);
	let item = mItem(null, { div: d, svg: svg, g: g }, { type: 'card', sz: sz }, false);
	copyKeys(styles, item);
	return item;
}
function cLandscape(dParent, styles = {}, id) {
	if (nundef(styles.w)) styles.w = CSZ;
	if (nundef(styles.h)) styles.h = styles.w * .65;
	return cBlank(dParent, styles, id);
}
function cPortrait(dParent, styles = {}, id) {
	if (nundef(styles.h)) styles.h = CSZ;
	if (nundef(styles.w)) styles.w = styles.h * .7;
	return cBlank(dParent, styles, id);
}
function cRound(dParent,styles={}, id){
	styles.w=valf(styles.w,CSZ);
	styles.h=valf(styles.h,CSZ);
	styles.rounding = '50%';
	return cBlank(dParent, styles, id);
}
function cTitleArea(card, h, styles, classes) {
	let dCard = iDiv(card);
	let dTitle = mDiv(dCard, { w: '100%', h: h, overflow: 'hidden', upperRounding: card.rounding });
	let dMain = mDiv(dCard, { w: '100%', h: card.h - h, lowerRounding: card.rounding });
	iAdd(card, { dTitle: dTitle, dMain: dMain });
	if (isdef(styles)) mStyle(dTitle, styles);
	return [dTitle, dMain];
}
function fitFont(text, fz = 20, w2 = 200, h2 = 100) {
	let e1, e2, r1, r2;
	e1 = mDiv(dTable, { w: w2, h: h2, display:'inline-block' });
	do {
		e2 = mDiv(e1, { fz: fz, display:'inline-block' }, null, text);
		r1 = getRect(e1);
		r2 = getRect(e2);
		e2.remove();
		fz -= 1;
	} while (r1.w * r1.h < r2.w * r2.h);
	e1.remove();
	return [fz + 1, r2.w, r2.h];
}
function fitSvg(el) {
	const box = el.querySelector('text').getBBox();
	el.style.width = `${box.width}px`;
	el.style.height = `${box.height}px`;
}
function gameItem(name, color) { return mItem(name2id(name), null, { color: isdef(color) ? color : randomColor(), name: name },false); }
function i52(i) { return isList(i) ? i.map(x => Card52.getItem(x)) : Card52.getItem(i); }
function iAppend52(i, dParent, faceUp) {
	let item = i52(i);
	iFace(item, faceUp);
	mAppend(dParent, item.div);
	return item;
}
function id2name(id) { id.substring(1).split('_').join(' '); }
function iFace(item, faceUp) { if (isdef(faceUp)) faceUp ? iFaceUp(item) : iFaceDown(item); }
function iFaceDown(item) { Card52.turnFaceDown(item); }
function iFaceUp(item) { Card52.turnFaceUp(item); }
function iH00(iarr, dParent, styles, id) {
	function iH00Zone(dTable, nmax = 7, padding = 10) {
		let sz = netHandSize(nmax);
		return mZone(dTable, { wmin: sz.w, h: sz.h, padding: padding }); //, rounding: 10, bg:'blue' });
	}
	let h = isdef(Items[id]) ? Items[id] : { arr: iarr, styles: styles, id: id };
	if (nundef(h.zone)) h.zone = iH00Zone(dParent); else clearElement(h.zone);
	let items = i52(iarr);
	h.iHand = iSplay(items, h.zone);
	return h;
}
function iH00_dep(iarr, dParent, styles, id) {
	function iH00Zone(dTable, nmax = 3, padding = 10) {
		let sz = netHandSize(nmax);
		return mZone(dTable, { wmin: sz.w, h: sz.h, padding: padding, rounding: 10 });
	}
	let data = DA[id] = {};
	let h = data.deck = new DeckClass();
	h.init(iarr);
	h = data;
	if (nundef(h.zone)) h.zone = iH00Zone(dParent); else clearElement(h.zone);
	if (nundef(h.iHand)) {
		let items = i52(h.deck.cards());
		h.iHand = iSplay(items, h.zone);
	} else if (redo) {
		clearElement(h.zone);
		let items = i52(h.deck.cards());
		h.iHand = iSplay(items, h.zone);
	}
	return h;
}
function iH01(iarr, dParent, styles, id, overlap) {
	function iH01Zone(dTable, nmax = 3, padding = 10) {
		let sz = netHandSize(nmax);
		return mZone(dTable, { wmin: sz.w, h: sz.h, padding: padding }); //, rounding: 10, bg:'blue' });
	}
	let h = isdef(Items[id]) ? Items[id] : { arr: iarr, styles: styles, id: id };
	if (nundef(h.zone)) h.zone = iH01Zone(dParent); else clearElement(h.zone);
	let items = i52(iarr);
	h.iHand = iSplay(items, h.zone, {}, 'right', overlap);
	return h;
}
function iHand52(i) {
	let hand = iSplay(i, dTable);
}
function iHandZone(dParent, styles, nmax) {
	if (nundef(styles)) styles = { bg: 'random', rounding: 10 };
	if (isdef(nmax)) {
		console.log('nmax', nmax)
		let sz = netHandSize(nmax);
		styles.w = sz.w;
		styles.h = sz.h;
	}
	return mZone(dParent, styles);
}
function iHandZone_test(dTable, nmax = 10, padding = 10) {
	let sz = netHandSize(nmax);
	return mZone(dTable, { wmin: sz.w, h: sz.h, bg: 'random', padding: padding, rounding: 10 });
}
function iMakeHand(iarr, dParent, styles, id) {
	let data = DA[id] = {};
	let h = data.deck = new DeckClass();
	h.init(iarr);
	iPresentHand(data, dParent, styles);
	return data;
}
function iMakeHand_test(dParent, iarr, id) {
	let data = DA[id] = {};
	let h = data.deck = new DeckClass();
	h.init(iarr);
	iPresentHand_test(dParent, data);
	return data;
}
function innoAgeNumber(n, dParent, sz, pos, margin = 10) {
	let x = CSZ*.04; sz -= x; margin += x/2;
	let box = mDiv(dParent, { w: sz, h: sz, bg: 'beige', rounding: '50%', align: 'center' }); 
	mPlace(box, pos, margin);
	s = mDiv(box, { fz: sz * .7, fg: 'black', display: 'inline-block' }, null, n);
	mPlace(s, 'cc'); //, 'vertical-align': 'text-top'  },null,n); 
	return box;
}
function innoBonusNumber(n, dParent, sz, pos, margin = 10) {
	let hOff = margin / 2;
	let styles = { w: sz, h: sz - hOff, bg: 'brown', box: true, align: 'center' };
	let box = mShape('hexFlat', dParent, styles); mPlace(box, pos, margin + hOff / 2, margin);
	let dText = mDiv(box, { fz: sz * .1, fg: 'black', 'line-height': sz * .1, matop: sz * .05 }, null, 'bonus');
	let dNum = mDiv(box, { fz: sz * .7, fg: 'black', 'line-height': sz * .65 }, null, n);
	return box;
}
function innoEcho(text, dParent, sz, pos, margin = 10) {
	if (isList(text)) text = text.join('<br>');
	margin /= 2;
	sz += margin / 4;
	let box = mDiv(dParent, { w: sz, h: sz, bg: 'black', fg: 'white', rounding: 10 });
	mPlace(box, pos, margin);
	box.onclick = (ev) => makeInfobox(ev, box, 3); 
	let t2 = innoText(text);
	mFillText(t2, box);
	return box;
}
function innoSym(key, dParent, sz, pos, margin = 10) {
	let box = mDiv(dParent, { w: sz, h: sz, bg: INNO.sym[key].bg, rounding: 10 }); mPlace(box, pos, margin);
	s = mSym(INNO.sym[key].key, box, { sz: sz * .75, fg: INNO.sym[key].fg }, 'cc');
	return box;
}
function innoSymInline(key,dParent){
	s = mSymInline(INNO.sym[key].key, dParent, { fg: INNO.sym[key].fg,bg: INNO.sym[key].bg, rounding: 10 });
	return s;
}
function innoText(text) {
	for (const s in INNO.sym) { INNO.sym[s].sym = Syms[INNO.sym[s].key]; }
	let parts = text.split('[');
	let s = parts[0];
	for (let i = 1; i < parts.length; i++) {
		let part = parts[i];
		let kw = stringBefore(part, ']');
		let sp;
		let fz = CSZ*.04;
		if (Object.keys(INNO.sym).includes(kw)) { let o = INNO.sym[kw]; sp = makeSymbolSpan(o.sym, o.bg, o.fg, fz); }
		else if (isNumber(kw)) { sp = makeNumberSpan(kw, 'white', 'black', fz); }
		s += sp + stringAfter(part, ']');
	}
	return s;
}
function iPresentHand(h, dParent, styles, redo = true) {
	if (nundef(h.zone)) h.zone = iHandZone(dParent, styles); else clearElement(h.zone);
	if (nundef(h.iHand)) {
		let items = i52(h.deck.cards());
		h.iHand = iSplay(items, h.zone);
	} else if (redo) {
		clearElement(h.zone);
		let items = i52(h.deck.cards());
		h.iHand = iSplay(items, h.zone);
	}
	return h;
}
function iPresentHand_test(dParent, h, redo = true) {
	if (nundef(h.zone)) h.zone = iHandZone_test(dParent); else clearElement(h.zone);
	if (nundef(h.iHand)) {
		let items = i52(h.deck.cards());
		h.iHand = iSplay(items, h.zone);
	} else if (redo) {
		clearElement(h.zone);
		let items = i52(h.deck.cards());
		h.iHand = iSplay(items, h.zone);
	}
	return h;
}
function iRemakeHand(data) {
	let zone = data.zone;
	let deck = data.deck;
	let items = i52(deck.cards());
	clearElement(zone);
	data.iHand = iSplay(items, zone);
	return data;
}
function iResize52(i, h) { let w = h * .7; return iResize(i, w, h); }
function iSortHand(dParent, h) {
	let d = h.deck;
	d.sort();
	iPresentHand(dParent, h);
}
function iSortHand_test(dParent, h) {
	let d = h.deck;
	d.sort();
	iPresentHand_test(dParent, h);
}
function iSplay52(i, iContainer, splay = 'right', ov = 20, ovUnit = '%', createiHand = true, rememberFunc = true) {
	let ilist = !isList(i) ? i : [i];
	let items = isNumber(i[0]) ? i52(ilist) : ilist;
	let res = iSplay(items, iContainer, null, 'right', 20, '%', true);
	return res;
}
function iTableBounds(i) { return iBounds(i, dTable); }
function makeInfobox(ev, elem, scale) {
	let t = ev.target; while (isdef(t) && t != elem) t = t.parentNode; if (nundef(t)) { console.log('WRONG click', ev.target); return; }
	console.log('ok');
	let di = DA.infobox; if (isdef(di)) {
		let inner = di.innerHTML;
		console.log('removing!');
		di.remove();
		DA.infobox = null;
		if (inner == elem.innerHTML) return;
	}
	let r = getRectInt(elem, dTable);
	let d = DA.infobox = mDiv(dTable, {
		bg: 'black', rounding: 10, fz: 24, position: 'absolute',
		w: r.w, h: r.h, left: r.l, top: r.t, transform: `scale(${scale})`
	}, 'dInfoBox', elem.innerHTML);
	d.innerHTML += '<div style="font-size:6px">click to close</div><br>';
	d.onclick = () => { d.remove(); DA.infobox = null; }
}
function makeInnoNumberDiv(n,fz){
	return `<span style='background:white;color:black;padding:2px 10px;border-radius:50%'>${n}</span>`;
}
function makeInnoSymbolDiv(info,bg,fz=20){
	return `<div style='text-align:center;display:inline;background-color:${bg};width:40px;padding:2px ${fz/2}px;
	font-size:${fz}px;font-family:${info.family}'>${info.text}</div>`;
}
function makeNumberSpan(n, bg, fg, fz, rounding = '50%') {
	return `<span style='font-size:${fz}px;background:${bg};color:${fg};padding:1px 7px;border-radius:${rounding}'>${n}</span>`;
}
function makeSymbolSpan(info, bg, fg, fz, rounding = '50%') {
	return `<div style='box-sizing:border-box;padding:6px 7px 4px 7px;min-height:22px;display:inline-block;font-family:${info.family};font-size:${fz}px;background:${bg};color:${fg};border-radius:${rounding}'>${info.text}</div>`;
}
function mCols(dParent, arr, itemStyles = { bg: 'random' }, rowStyles, colStyles, akku) {
	let d0 = mDiv100(dParent, { display: 'flex', 'justify-content': 'space-between' }); //,'align-items':'center'});
	if (isdef(colStyles)) mStyle(d0, colStyles);
	for (let i = 0; i < arr.length; i++) {
		let content = arr[i];
		if (isList(content)) {
			d1 = mDiv(d0); //,null,randomName());
			mRows(d1, content, itemStyles, rowStyles, colStyles, akku);
		} else {
			d1 = mContent(content, d0, itemStyles); //mDiv(d0, styles, null, content);
			akku.push(d1);
		}
	}
}
function mContent(content, dParent, styles) {
	let d1 = isdef(Syms[content]) ? mSymInDivShrink(content, dParent, styles) : mDiv(dParent, styles, null, content);
	return d1;
}
function mFillText(text, box, padding = 10) {
	let r = mMeasure(box);
	let [fz, w, h] = fitFont(text, 20, r.w - padding, r.h - padding);
	let dText = mDiv(box, {
		w: w, h: h, fz: fz,
		position: 'absolute', transform: 'translate(-50%,-50%)', top: '50%', left: '50%'
	}, null, text);
	return dText;
}
function mgPos(card, el, x = 0, y = 0, unit='%',anchor='center') {
	mAppend(iG(card), el);
	let box = el.getBBox();
	console.log('rect',box);
	el.setAttribute('x', x);
	el.setAttribute('y', y);
}
function mgShape(key) {
}
function mgSize(el, h, w) {
	el.setAttribute('height', h);
	if (isdef(w)) el.setAttribute('width', w);
}
function mgSuit(key) {
	let el = gCreate('use');
	el.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + key);
	return el;
}
function mgSuit1(card, key, h, x, y) {
	el = document.createElementNS('http://www.w3.org/2000/svg', 'use');
	el.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${key}`);
	el.setAttribute('height', h);
	el.setAttribute('width', h);
	el.setAttribute('x', x);
	el.setAttribute('y', y);
	mAppend(iG(card), el);
	return el;
}
function mgSym(key) {
	let el = gCreate('text');
	let info = Syms[key];
	mStyle(el, { family: info.family });
	el.innerHTML = info.text;
	return el;
}
function mPlaceText(text, where, dParent, styles, innerStyles, classes) {
	let box;
	if (where.length == 4) {
		let [t, r, b, l] = where;
		box = mBoxFromMargins(dParent, t, r, b, l);
	} else if (where.length == 3) {
		let [wb, hb, place] = where;
		box = mDiv(dParent, { w: wb, h: hb });
		mPlace(box, place);
	}
	let r = mMeasure(box);
	let [fz, w, h] = fitFont(text, 20, r.w, r.h);
	console.log('res', fz, w, h);
	let dText = mDiv(box, {
		w: w, h: h, fz: fz,
		position: 'absolute', transform: 'translate(-50%,-50%)', top: '50%', left: '50%'
	}, null, text);
	if (isdef(styles)) mStyle(box, styles);
	if (isdef(innerStyles)) mStyle(dText, innerStyles);
	if (isdef(classes)) mStyle(box, classes);
	return box;
}
function mRows(dParent, arr, itemStyles = { bg: 'random' }, rowStyles, colStyles, akku) {
	let d0 = mDiv100(dParent, { display: 'flex', dir: 'column', 'justify-content': 'space-between' });//,'align-items':'center'});
	if (isdef(rowStyles)) mStyle(d0, rowStyles);
	d0.style.maxHeight = `${CSZ}px`; //HACK!!!!!!!!!!!!!!!
	for (let i = 0; i < arr.length; i++) {
		let content = arr[i];
		if (isList(content)) {
			let d1 = mDiv(d0); //,null,randomName());
			mCols(d1, content, itemStyles, rowStyles, colStyles, akku);
		} else {
			d1 = mContent(content, d0, itemStyles); //mDiv(d0, styles, null, content);
			akku.push(d1);
		}
	}
}
function mSymbol(key, dParent, sz, styles = {}) {
	console.log('key', key)
	let info = symbolDict[key];
	fzStandard = info.fz;
	hStandard = info.h[0];
	wStandard = info.w[0];
	let fzMax = fzStandard * sz / Math.max(hStandard, wStandard);
	fzMax *= .9;
	let fz = isdef(styles.fz) && styles.fz < fzMax ? styles.fz : fzMax;
	let wi = wStandard * fz / 100;
	let hi = hStandard * fz / 100;
	let vpadding = 2 + Math.ceil((sz - hi) / 2); console.log('***vpadding', vpadding)
	let hpadding = Math.ceil((sz - wi) / 2);
	let margin = '' + vpadding + 'px ' + hpadding + 'px'; //''+vpadding+'px '+hpadding+' ';
	let newStyles = deepmergeOverride({ fz: fz, align: 'center', w: sz, h: sz, bg: 'white' }, styles);
	newStyles.fz = fz;
	let d = mDiv(dParent, newStyles);
	console.log(key, info)
	let txt = mText(info.text, d, { family: info.family });
	console.log('-----------', margin, hpadding, vpadding);
	mStyle(txt, { margin: margin, 'box-sizing': 'border-box' });
	return d;
}
function mSymFramed(info, bg, sz) {
	let [w, h, fz] = [sz, sz, sz * .7];
	return createElementFromHTML(`<div style='
	text-align:center;display:inline;background-color:${bg};
	font-size:${fz}px;overflow:hidden;
	font-family:${info.family}'>${info.text}</div>`);
}
function mSymInDiv(sym, dParent, styles = { sz: CSZ / 5, fg: 'random' }) {
	dResult = mDiv(dParent);
	ds = mSym(sym, dResult, styles);
	return dResult;
}
function mSymInDivShrink(sym, dParent, styles = { sz: CSZ / 5, fg: 'random' }) {
	dResult = mDiv(dParent);
	let ds = mSym(sym, dResult, styles);
	let scale = chooseRandom([.4, .7, 1, 1.25]);
	let [scaleX, scaleY] = [coin() ? scale : -scale, scale];
	if (coin()) ds.style.transform = `scale(${scaleX},${scaleY})`;
	return dResult;
}
function mSymInline(key,dParent,styles){
	let info = Syms[key];
	styles.family = info.family;
	let el = mSpan(dParent,styles,null,info.text);
	return text;
}
function mSymSizeToBox(info, w, h) {
	let fw = w / info.w;
	let fh = h / info.h;
	let f = Math.min(fw, fh);
	return { fz: 100 * f, w: info.w * f, h: info.h * f };
}
function mSymSizeToFz(info, fz) { let f = fz / 100; return { fz: fz, w: info.w * f, h: info.h * f }; }
function mSymSizeToH(info, h) { let f = h / info.h; return { fz: 100 * f, w: info.w * f, h: h }; }
function mSymSizeToW(info, w) { let f = w / info.w; return { fz: 100 * f, w: w, h: info.h * f }; }
function name2id(name) { return 'd' + name.split(' ').join('_'); }
function netHandSize(nmax, hCard, wCard, ovPercent = 20, splay = 'right') {
	let isHorizontal = splay == 'right' || splay == 'left';
	if (nundef(hCard)) hCard = 110;
	if (nundef(wCard)) wCard = Math.round(hCard * .7);
	return isHorizontal ? { w: wCard + (nmax - 1) * wCard * ovPercent / 100, h: hCard } : { w: wCard, h: hCard + (nmax - 1) * hCard * ovPercent / 100 };
}
function placeSymbol(sym, szSym, margin, posStyles) {
	let d = iDiv(sym);
	posStyles.position = 'absolute';
	posStyles.margin = margin;
	posStyles.h = szSym;
	posStyles.w = szSym; //sym.isEcho ? szSym * 3 : szSym;
	mStyle(d, posStyles); // { position: 'absolute', w: w, h: szSym, left: left, top: top, margin: margin });
}
function randomC52() { return Card52.getShortString(randomCard52()); }
function randomCard52() { return Card52.random(); }
function randomRank() { return Card52.randomRankSuit[0]; }
function randomSuit() { return Card52.randomRankSuit[1]; }
function showCards(o, type) {
	let d2 = iDiv(o);
	if (nundef(type)) type = isdef(o.type) ? o.type : 'hand';
	let arr = type == 'deck' ? o.deck.cards() : o.cards;
	let cont = type == 'deck' ? stdDeckContainer(d2, arr.length) : startsWith(type, 'cards') ? stdCardsContainer(d2, arr.length) : stdHandContainer(d2, arr.length);
	let items = arr.map(x => Card52.getItem(x % 52));
	if (endsWith(type,'Hidden') || type == 'deck') items.map(x=>Card52.turnFaceDown(x,BG_CARD_BACK));
	items.map(x=>mAppend(cont,iDiv(x)));
	return items;
}
function splayout(elems, dParent, w, h, x, y, overlap = 20, splay = 'right') {
	function splayRight(elems, d, x, y, overlap) {
		for (const c of elems) {
			mAppend(d, c);
			mStyle(c, { position: 'absolute', left: x, top: y });
			x += overlap;
		}
		return [x, y];
	}
	function splayLeft(elems, d, x, y, overlap) {
		x += (elems.length - 2) * overlap;
		let xLast = x;
		for (const c of elems) {
			mAppend(d, c);
			mStyle(c, { position: 'absolute', left: x, top: y });
			x -= overlap;
		}
		return [xLast, y];
	}
	function splayDown(elems, d, x, y, overlap) {
		for (const c of elems) {
			mAppend(d, c);
			mStyle(c, { position: 'absolute', left: x, top: y });
			y += overlap;
		}
		return [x, y];
	}
	function splayUp(elems, d, x, y, overlap) {
		y += (elems.length - 1) * overlap;
		let yLast = y;
		for (const c of elems) {
			mAppend(d, c);
			mStyle(c, { position: 'absolute', left: x, top: y });
			y -= overlap;
		}
		return [x, yLast];
	}
	if (isEmpty(elems)) return { w: 0, h: 0 };
	mStyle(dParent, { display: 'block', position: 'relative' });
	[x, y] = (eval('splay' + capitalize(splay)))(elems, dParent, x, y, overlap);
	let isHorizontal = splay == 'right' || splay == 'left';
	let sz = { w: (isHorizontal ? (x - overlap + w) : w), h: (isHorizontal ? (y - overlap + h) : h) };
	return sz;
}
function spotitCard(info, dParent, cardStyles, onClickSym) {
	let styles = copyKeys({ w: CSZ, h: CSZ }, cardStyles);
	let card = cRound(dParent, cardStyles, info.id);
	addKeys(info, card);
	let d = iDiv(card);
	card.pattern = fillColarr(card.colarr, card.keys);
	let symStyles = { sz: CSZ / (card.rows + 1), fg: 'random', hmargin: 8, vmargin: 4, cursor: 'pointer' };
	let syms = [];
	mRows(iDiv(card), card.pattern, symStyles, { 'justify-content': 'center' }, { 'justify-content': 'center' }, syms);
	for (let i = 0; i < info.keys.length; i++) {
		let key = card.keys[i];
		let sym = syms[i];
		card.live[key] = sym;
		sym.setAttribute('key', key);
		sym.onclick = onClickSym;
	}
	return card;
}
function spotitDeal(rows, cols, numCards, setName) {
	let colarr = _calc_hex_col_array(rows, cols);
	let perCard = arrSum(colarr);
	let nShared = (numCards * (numCards - 1)) / 2;
	let nUnique = perCard - numCards + 1;
	let keys = choose(oneWordKeys(KeySets[setName]), nShared + numCards * nUnique);
	let dupls = keys.slice(0, nShared); //these keys are shared: cards 1 and 2 share the first one, 1 and 3 the second one,...
	let uniqs = keys.slice(nShared);
	let infos = [];
	for (let i = 0; i < numCards; i++) {
		let keylist = uniqs.slice(i * nUnique, i * nUnique + nUnique);
		let info = { id: getUID(), shares: {}, keys: keylist, rows: rows, cols: cols, colarr: colarr };
		infos.push(info);
	}
	let iShared = 0;
	for (let i = 0; i < numCards; i++) {
		for (let j = i + 1; j < numCards; j++) {
			let c1 = infos[i];
			let c2 = infos[j];
			let dupl = dupls[iShared++];
			c1.keys.push(dupl);
			c1.shares[c2.id] = dupl;
			c2.shares[c1.id] = dupl;
			c2.keys.push(dupl);
		}
	}
	for (const info of infos) { shuffle(info.keys); }
	return infos;
}
function spotitFindCardSharingSymbol(card, key) {
	let id = firstCondDict(card.shares, x => x == key);
	return Items[id];
}
function spotitFindSymbol(card, key) {
	let k = firstCondDictKey(card.live, x => x == key);
	return iGetl(card,k);
}
function spotitOnClickSymbol(ev) {
	let keyClicked = evToProp(ev, 'key');
	let id = evToId(ev);
	if (isdef(keyClicked) && isdef(Items[id])) {
		let item = Items[id];
		console.log('clicked key', keyClicked, 'of card', id, item);
		if (Object.values(item.shares).includes(keyClicked)) {
			console.log('success!!!');//success!
			let otherCard = spotitFindCardSharingSymbol(item, keyClicked);
			let cardSymbol = ev.target;
			let otherSymbol = spotitFindSymbol(otherCard, keyClicked);
			Selected = { feedbackUI: [cardSymbol, otherSymbol] };
		} else {
			console.log('fail!!!!!!!!'); //fail
			let cardSymbol = ev.target;
			Selected = { feedbackUI: [cardSymbol] };
		}
	}
}
function stdCardsContainer(dParent, n, ov = 80, styles = {}) { return stdRowOverlapContainer(dParent, n, n * ov + 22, ov, addKeys({ paleft: 20, patop: 10 }, styles)); }
function stdDeckContainer(dParent, n, ov = .25, styles = {}) { return stdRowOverlapContainer(dParent, n, 140, ov, addKeys({ padding: 10 }, styles)); }
function stdGridContainer(dParent, wCell, styles = {}) {
	addKeys({
		wmax: 500,
		margin: 'auto',
		padding: 10,
		gap: 0,
		display: 'grid',
		bg: 'green',
		'grid-template-columns': `repeat(${20}, ${wCell}px)`
	}, styles);
	return mDiv(dParent, styles);
}
function stdHandContainer(dParent, n, ov = 20, styles = {}) { return stdRowOverlapContainer(dParent, n, 76 + n * ov + 22, ov, addKeys({ padding: 10 }, styles)); }
function stdRowOverlapContainer(dParent, n, wGrid, wCell, styles) {
	addKeys({
		w: wGrid,
		gap: 0,
		display: 'inline-grid',
		'grid-template-columns': `repeat(${n}, ${wCell}px)`
	}, styles);
	return mDiv(dParent, styles);
}
function useSymbolElemNO(key = 'Treff', h = 50, x = 0, y = 0) {
	return createElementFromHTML(`<use xlink:href="#${key}" height="${h}" x="${x}" y="${y}"></use>`);
}
//#endregion cards

//#region chess
var FLAG_HINT_ONLY = false;
var FLAG_AI_CANCELED = false;
var PIECES = { EMPTY: 0, wP: 1, wN: 2, wB: 3, wR: 4, wQ: 5, wK: 6, bP: 7, bN: 8, bB: 9, bR: 10, bQ: 11, bK: 12 };
var BRD_SQ_NUM = 120;
var MAXGAMEMOVES = 2048;
var MAXPOSITIONMOVES = 256;
var MAXDEPTH = 64;
var INFINITE = 30000;
var MATE = 29000;
var START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
var FILES = { FILE_A: 0, FILE_B: 1, FILE_C: 2, FILE_D: 3, FILE_E: 4, FILE_F: 5, FILE_G: 6, FILE_H: 7, FILE_NONE: 8 };
var RANKS = { RANK_1: 0, RANK_2: 1, RANK_3: 2, RANK_4: 3, RANK_5: 4, RANK_6: 5, RANK_7: 6, RANK_8: 7, RANK_NONE: 8 };
var COLOURS = { WHITE: 0, BLACK: 1, BOTH: 2 };
var SQUARES = {
	A1: 21, B1: 22, C1: 23, D1: 24, E1: 25, F1: 26, G1: 27, H1: 28,
	A8: 91, B8: 92, C8: 93, D8: 94, E8: 95, F8: 96, G8: 97, H8: 98, NO_SQ: 99, OFFBOARD: 100
};
var BOOL = { FALSE: 0, TRUE: 1 };
var CASTLEBIT = { WKCA: 1, WQCA: 2, BKCA: 4, BQCA: 8 };
var FilesBrd = new Array(BRD_SQ_NUM);
var RanksBrd = new Array(BRD_SQ_NUM);
var Sq120ToSq64 = new Array(BRD_SQ_NUM);
var Sq64ToSq120 = new Array(64);
var PceChar = ".PNBRQKpnbrqk";
var SideChar = "wb-";
var RankChar = "12345678";
var FileChar = "abcdefgh";
var PieceBig = [BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE];
var PieceMaj = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE];
var PieceMin = [BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE];
var PieceVal = [0, 100, 325, 325, 550, 1000, 50000, 100, 325, 325, 550, 1000, 50000];
var PieceCol = [COLOURS.BOTH, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK];
var PiecePawn = [BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE];
var PieceKnight = [BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE];
var PieceKing = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE];
var PieceRookQueen = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE];
var PieceBishopQueen = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE];
var PieceSlides = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE];
var KnDir = [-8, -19, -21, -12, 8, 19, 21, 12];
var RkDir = [-1, -10, 1, 10];
var BiDir = [-9, -11, 11, 9];
var KiDir = [-1, -10, 1, 10, -9, -11, 11, 9];
var DirNum = [0, 0, 8, 4, 4, 8, 8, 0, 8, 4, 4, 8, 8];
var PceDir = [0, 0, KnDir, BiDir, RkDir, KiDir, KiDir, 0, KnDir, BiDir, RkDir, KiDir, KiDir];
var LoopSlidePce = [PIECES.wB, PIECES.wR, PIECES.wQ, 0, PIECES.bB, PIECES.bR, PIECES.bQ, 0];
var LoopNonSlidePce = [PIECES.wN, PIECES.wK, 0, PIECES.bN, PIECES.bK, 0];
var LoopSlideIndex = [0, 4];
var LoopNonSlideIndex = [0, 3];
var Kings = [PIECES.wK, PIECES.bK];
var PieceKeys = new Array(14 * 120);
var SideKey;
var CastleKeys = new Array(16);
var Mirror64 = [
	56, 57, 58, 59, 60, 61, 62, 63,
	48, 49, 50, 51, 52, 53, 54, 55,
	40, 41, 42, 43, 44, 45, 46, 47,
	32, 33, 34, 35, 36, 37, 38, 39,
	24, 25, 26, 27, 28, 29, 30, 31,
	16, 17, 18, 19, 20, 21, 22, 23,
	8, 9, 10, 11, 12, 13, 14, 15,
	0, 1, 2, 3, 4, 5, 6, 7
];
var CastlePerm = [
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
	15, 13, 15, 15, 15, 12, 15, 15, 14, 15,
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
	15, 7, 15, 15, 15, 3, 15, 15, 11, 15,
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15
];
var MFLAGEP = 0x40000
var MFLAGPS = 0x80000
var MFLAGCA = 0x1000000
var MFLAGCAP = 0x7C000
var MFLAGPROM = 0xF00000
var NOMOVE = 0
var PVENTRIES = 10000;
var GameController = {};
var brd_side = COLOURS.WHITE;
var brd_pieces = new Array(BRD_SQ_NUM);
var brd_enPas = SQUARES.NO_SQ;
var brd_fiftyMove;
var brd_ply;
var brd_hisPly;
var brd_castlePerm;
var brd_posKey;
var brd_pceNum = new Array(13);
var brd_material = new Array(2);
var brd_pList = new Array(14 * 10);
var brd_history = [];
var brd_bookLines = [];
var brd_moveList = new Array(MAXDEPTH * MAXPOSITIONMOVES);
var brd_moveScores = new Array(MAXDEPTH * MAXPOSITIONMOVES);
var brd_moveListStart = new Array(MAXDEPTH);
var brd_PvTable = [];
var brd_PvArray = new Array(MAXDEPTH);
var brd_searchHistory = new Array(14 * BRD_SQ_NUM);
var brd_searchKillers = new Array(3 * MAXDEPTH);
var VictimScore = [0, 100, 200, 300, 400, 500, 600, 100, 200, 300, 400, 500, 600];
var MvvLvaScores = new Array(14 * 14);
var perft_leafNodes;
var RookOpenFile = 10;
var RookSemiOpenFile = 5;
var QueenOpenFile = 5;
var QueenSemiOpenFile = 3;
var BishopPair = 30;
var PawnRanksWhite = new Array(10);
var PawnRanksBlack = new Array(10);
var PawnIsolated = -10;
var PawnPassed = [0, 5, 10, 20, 35, 60, 100, 200];
var PawnTable = [
	0, 0, 0, 0, 0, 0, 0, 0,
	10, 10, 0, -10, -10, 0, 10, 10,
	5, 0, 0, 5, 5, 0, 0, 5,
	0, 0, 10, 20, 20, 10, 0, 0,
	5, 5, 5, 10, 10, 5, 5, 5,
	10, 10, 10, 20, 20, 10, 10, 10,
	20, 20, 20, 30, 30, 20, 20, 20,
	0, 0, 0, 0, 0, 0, 0, 0
];
var KnightTable = [
	0, -10, 0, 0, 0, 0, -10, 0,
	0, 0, 0, 5, 5, 0, 0, 0,
	0, 0, 10, 10, 10, 10, 0, 0,
	0, 0, 10, 20, 20, 10, 5, 0,
	5, 10, 15, 20, 20, 15, 10, 5,
	5, 10, 10, 20, 20, 10, 10, 5,
	0, 0, 5, 10, 10, 5, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0
];
var BishopTable = [
	0, 0, -10, 0, 0, -10, 0, 0,
	0, 0, 0, 10, 10, 0, 0, 0,
	0, 0, 10, 15, 15, 10, 0, 0,
	0, 10, 15, 20, 20, 15, 10, 0,
	0, 10, 15, 20, 20, 15, 10, 0,
	0, 0, 10, 15, 15, 10, 0, 0,
	0, 0, 0, 10, 10, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0
];
var RookTable = [
	0, 0, 5, 10, 10, 5, 0, 0,
	0, 0, 5, 10, 10, 5, 0, 0,
	0, 0, 5, 10, 10, 5, 0, 0,
	0, 0, 5, 10, 10, 5, 0, 0,
	0, 0, 5, 10, 10, 5, 0, 0,
	0, 0, 5, 10, 10, 5, 0, 0,
	25, 25, 25, 25, 25, 25, 25, 25,
	0, 0, 5, 10, 10, 5, 0, 0
];
var KingE = [
	-50, -10, 0, 0, 0, 0, -10, -50,
	-10, 0, 10, 10, 10, 10, 0, -10,
	0, 10, 20, 20, 20, 20, 10, 0,
	0, 10, 20, 40, 40, 20, 10, 0,
	0, 10, 20, 40, 40, 20, 10, 0,
	0, 10, 20, 20, 20, 20, 10, 0,
	-10, 0, 10, 10, 10, 10, 0, -10,
	-50, -10, 0, 0, 0, 0, -10, -50
];
var KingO = [
	0, 5, 5, -10, -10, 0, 10, 5,
	-30, -30, -30, -30, -30, -30, -30, -30,
	-50, -50, -50, -50, -50, -50, -50, -50,
	-70, -70, -70, -70, -70, -70, -70, -70,
	-70, -70, -70, -70, -70, -70, -70, -70,
	-70, -70, -70, -70, -70, -70, -70, -70,
	-70, -70, -70, -70, -70, -70, -70, -70,
	-70, -70, -70, -70, -70, -70, -70, -70
];
var ENDGAME_MAT = 1 * PieceVal[PIECES.wR] + 2 * PieceVal[PIECES.wN] + 2 * PieceVal[PIECES.wP] + PieceVal[PIECES.wK];
var srch_nodes;
var srch_fh;
var srch_fhf;
var srch_depth;
var srch_time;
var srch_start;
var srch_stop;
var srch_best;
var srch_thinking;
var domUpdate_depth;
var domUpdate_move;
var domUpdate_score;
var domUpdate_nodes;
var domUpdate_ordering;
var UserMove = {};
var MirrorFiles = [FILES.FILE_H, FILES.FILE_G, FILES.FILE_F, FILES.FILE_E, FILES.FILE_D, FILES.FILE_C, FILES.FILE_B, FILES.FILE_A];
var MirrorRanks = [RANKS.RANK_8, RANKS.RANK_7, RANKS.RANK_6, RANKS.RANK_5, RANKS.RANK_4, RANKS.RANK_3, RANKS.RANK_2, RANKS.RANK_1];
function ActivateChessWidgets() {
	StopThinking();
	$("#SetFen").click(function () {
		var fenStr = $("#fenIn").val();
		ParseFen(fenStr);
		PrintBoard();
		SetInitialBoardPieces();
		GameController.PlayerSide = brd_side;
		CheckAndSet();
		EvalPosition();
		NewGameAjax();
	});
	$("#UndoButton").click(function () {
		if (brd_hisPly > 0) {
			TakeMove(); if (brd_hisPly > 0) TakeMove();
			brd_ply = 0;
			SetInitialBoardPieces();
			$("#currentFenSpan").text(BoardToFen());
		}
	});
	$("#HintButton").click(function () {
		FLAG_HINT_ONLY = true;
		let move = PreSearch();
	});
	$("#SearchButton").click(function () {
		GameController.PlayerSide = brd_side ^ 1;
		PreSearch();
	});
	$("#FlipButton").click(function () {
		GameController.BoardFlipped ^= 1;
		SetInitialBoardPieces();
	});
	$("#EndGameButton").click(function () {
		let fen = chooseRandom(FenPositionList).FEN;
		NewGame(fen);
		NewGameAjax();
	});
	$("#NewGameButton").click(function () {
		NewGame();
		NewGameAjax();
	});
}
function AddBlackPawnCaptureMove(from, to, cap) {
	if (RanksBrd[from] == RANKS.RANK_2) {
		AddCaptureMove(MOVE(from, to, cap, PIECES.bQ, 0));
		AddCaptureMove(MOVE(from, to, cap, PIECES.bR, 0));
		AddCaptureMove(MOVE(from, to, cap, PIECES.bB, 0));
		AddCaptureMove(MOVE(from, to, cap, PIECES.bN, 0));
	} else {
		AddCaptureMove(MOVE(from, to, cap, PIECES.EMPTY, 0));
	}
}
function AddBlackPawnQuietMove(from, to) {
	if (RanksBrd[from] == RANKS.RANK_2) {
		AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bQ, 0));
		AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bR, 0));
		AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bB, 0));
		AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bN, 0));
	} else {
		AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.EMPTY, 0));
	}
}
function AddCaptureMove(move) {
	brd_moveList[brd_moveListStart[brd_ply + 1]] = move;
	brd_moveScores[brd_moveListStart[brd_ply + 1]++] = MvvLvaScores[CAPTURED(move) * 14 + brd_pieces[FROMSQ(move)]] + 1000000;
}
function AddEnPassantMove(move) {
	brd_moveList[brd_moveListStart[brd_ply + 1]] = move;
	brd_moveScores[brd_moveListStart[brd_ply + 1]++] = 105 + 1000000;
}
function AddGUIPiece(sq, pce) {
	var rank = RanksBrd[sq];
	var file = FilesBrd[sq];
	var rankName = "rank" + (rank + 1);
	var fileName = "file" + (file + 1);
	pieceFileName = "../assets/icons/chess/" + SideChar[PieceCol[pce]] + PceChar[pce].toUpperCase() + ".png";
	imageString = "<image src=\"" + pieceFileName + "\" class=\"Piece clickElement " + rankName + " " + fileName + "\"/>";
	$("#ChessBoard").append(imageString);
}
function AddPiece(sq, pce) {
	var col = PieceCol[pce];
	HASH_PCE(pce, sq);
	brd_pieces[sq] = pce;
	brd_material[col] += PieceVal[pce];
	brd_pList[PCEINDEX(pce, brd_pceNum[pce])] = sq;
	brd_pceNum[pce]++;
}
function AddQuietMove(move) {
	brd_moveList[brd_moveListStart[brd_ply + 1]] = move;
	if (brd_searchKillers[brd_ply] == move) {
		brd_moveScores[brd_moveListStart[brd_ply + 1]] = 900000;
	} else if (brd_searchKillers[MAXDEPTH + brd_ply] == move) {
		brd_moveScores[brd_moveListStart[brd_ply + 1]] = 800000;
	} else {
		brd_moveScores[brd_moveListStart[brd_ply + 1]] = brd_searchHistory[brd_pieces[FROMSQ(move)] * BRD_SQ_NUM + TOSQ(move)];
	}
	brd_moveListStart[brd_ply + 1]++;
}
function AddWhitePawnCaptureMove(from, to, cap) {
	if (RanksBrd[from] == RANKS.RANK_7) {
		AddCaptureMove(MOVE(from, to, cap, PIECES.wQ, 0));
		AddCaptureMove(MOVE(from, to, cap, PIECES.wR, 0));
		AddCaptureMove(MOVE(from, to, cap, PIECES.wB, 0));
		AddCaptureMove(MOVE(from, to, cap, PIECES.wN, 0));
	} else {
		AddCaptureMove(MOVE(from, to, cap, PIECES.EMPTY, 0));
	}
}
function AddWhitePawnQuietMove(from, to) {
	if (RanksBrd[from] == RANKS.RANK_7) {
		AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wQ, 0));
		AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wR, 0));
		AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wB, 0));
		AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wN, 0));
	} else {
		AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.EMPTY, 0));
	}
}
function AlphaBeta(alpha, beta, depth, DoNull) {
	if (depth <= 0) {
		return Quiescence(alpha, beta);
	}
	if ((srch_nodes & 2047) == 0) CheckUp();
	srch_nodes++;
	if ((IsRepetition() || brd_fiftyMove >= 100) && brd_ply != 0) {
		return 0;
	}
	if (brd_ply > MAXDEPTH - 1) {
		return EvalPosition(pos);
	}
	var InCheck = SqAttacked(brd_pList[PCEINDEX(Kings[brd_side], 0)], brd_side ^ 1);
	if (InCheck == BOOL.TRUE) {
		depth++;
	}
	var Score = -INFINITE;
	if (DoNull == BOOL.TRUE && BOOL.FALSE == InCheck &&
		brd_ply != 0 && (brd_material[brd_side] > 50200) && depth >= 4) {
		var ePStore = brd_enPas;
		if (brd_enPas != SQUARES.NO_SQ) HASH_EP();
		brd_side ^= 1;
		HASH_SIDE();
		brd_enPas = SQUARES.NO_SQ;
		Score = -AlphaBeta(-beta, -beta + 1, depth - 4, BOOL.FALSE);
		brd_side ^= 1;
		HASH_SIDE();
		brd_enPas = ePStore;
		if (brd_enPas != SQUARES.NO_SQ) HASH_EP();
		if (srch_stop == BOOL.TRUE) return 0;
		if (Score >= beta) {
			return beta;
		}
	}
	GenerateMoves();
	var MoveNum = 0;
	var Legal = 0;
	var OldAlpha = alpha;
	var BestMove = NOMOVE;
	Score = -INFINITE;
	var PvMove = ProbePvTable();
	if (PvMove != NOMOVE) {
		for (MoveNum = brd_moveListStart[brd_ply]; MoveNum < brd_moveListStart[brd_ply + 1]; ++MoveNum) {
			if (brd_moveList[MoveNum] == PvMove) {
				brd_moveScores[MoveNum].score = 2000000;
				break;
			}
		}
	}
	for (MoveNum = brd_moveListStart[brd_ply]; MoveNum < brd_moveListStart[brd_ply + 1]; ++MoveNum) {
		PickNextMove(MoveNum);
		if (MakeMove(brd_moveList[MoveNum]) == BOOL.FALSE) {
			continue;
		}
		Legal++;
		Score = -AlphaBeta(-beta, -alpha, depth - 1, BOOL.TRUE);
		TakeMove();
		if (srch_stop == BOOL.TRUE) return 0;
		if (Score > alpha) {
			if (Score >= beta) {
				if (Legal == 1) {
					srch_fhf++;
				}
				srch_fh++;
				if ((brd_moveList[MoveNum] & MFLAGCAP) == 0) {
					brd_searchKillers[MAXDEPTH + brd_ply] = brd_searchKillers[brd_ply];
					brd_searchKillers[brd_ply] = brd_moveList[MoveNum];
				}
				return beta;
			}
			alpha = Score;
			BestMove = brd_moveList[MoveNum];
			if ((BestMove & MFLAGCAP) == 0) {
				brd_searchHistory[brd_pieces[FROMSQ(BestMove)] * BRD_SQ_NUM + TOSQ(BestMove)] += depth;
			}
		}
	}
	if (Legal == 0) {
		if (InCheck) {
			return -MATE + brd_ply;
		} else {
			return 0;
		}
	}
	if (alpha != OldAlpha) {
		StorePvMove(BestMove);
	}
	return alpha;
}
function BoardToFen() {
	var fenStr = '';
	var rank, file, sq, piece;
	var emptyCount = 0;
	for (rank = RANKS.RANK_8; rank >= RANKS.RANK_1; rank--) {
		emptyCount = 0;
		for (file = FILES.FILE_A; file <= FILES.FILE_H; file++) {
			sq = FR2SQ(file, rank);
			piece = brd_pieces[sq];
			if (piece == PIECES.EMPTY) {
				emptyCount++;
			} else {
				if (emptyCount != 0) {
					fenStr += String.fromCharCode('0'.charCodeAt() + emptyCount);
				}
				emptyCount = 0;
				fenStr += PceChar[piece];
			}
		}
		if (emptyCount != 0) {
			fenStr += String.fromCharCode('0'.charCodeAt() + emptyCount);
		}
		if (rank != RANKS.RANK_1) {
			fenStr += '/'
		} else {
			fenStr += ' ';
		}
	}
	fenStr += SideChar[brd_side] + ' ';
	if (brd_enPas == SQUARES.NO_SQ) {
		fenStr += '- '
	} else {
		fenStr += PrSq(brd_enPas) + ' ';
	}
	if (brd_castlePerm == 0) {
		fenStr += '- '
	} else {
		if (brd_castlePerm & CASTLEBIT.WKCA) fenStr += 'K';
		if (brd_castlePerm & CASTLEBIT.WQCA) fenStr += 'Q';
		if (brd_castlePerm & CASTLEBIT.BKCA) fenStr += 'k';
		if (brd_castlePerm & CASTLEBIT.BQCA) fenStr += 'q';
	}
	fenStr += ' ';
	fenStr += brd_fiftyMove;
	fenStr += ' ';
	var tempHalfMove = brd_hisPly;
	if (brd_side == COLOURS.BLACK) {
		tempHalfMove--;
	}
	fenStr += tempHalfMove / 2;
	return fenStr;
}
function BookMove() {
	var gameLine = printGameLine();
	var bookMoves = [];
	var lengthOfLineHack = gameLine.length;
	if (gameLine.length == 0) lengthOfLineHack--;
	for (var bookLineNum = 0; bookLineNum < brd_bookLines.length; ++bookLineNum) {
		if (LineMatch(brd_bookLines[bookLineNum], gameLine) == BOOL.TRUE) {
			var move = brd_bookLines[bookLineNum].substr(lengthOfLineHack + 1, 4);
			if (move.length == 4) {
				var from = SqFromAlg(move.substr(0, 2));
				var to = SqFromAlg(move.substr(2, 2));
				varInternalMove = ParseMove(from, to);
				bookMoves.push(varInternalMove);
			}
		}
	}
	if (bookMoves.length == 0) return NOMOVE;
	var num = Math.floor(Math.random() * bookMoves.length);
	return bookMoves[num];
}
function CAPTURED(m) { return (((m) >> 14) & 0xF); }
function CheckAndSet() {
	if (CheckResult() != BOOL.TRUE) {
		GameController.GameOver = BOOL.FALSE;
		$("#GameStatus").text('');
	} else {
		GameController.GameOver = BOOL.TRUE;
		GameController.GameSaved = BOOL.TRUE; // save the game here
		let win = GameController.winner;
		lookupAddToList(GameController, ['games'], isdef(win) ? win : 0);
	}
	ShowFenPosition();
}
function CheckBoard() {
	var t_pceNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var t_material = [0, 0];
	var sq64, t_piece, t_pce_num, sq120, colour, pcount;
	for (t_piece = PIECES.wP; t_piece <= PIECES.bK; ++t_piece) {
		for (t_pce_num = 0; t_pce_num < brd_pceNum[t_piece]; ++t_pce_num) {
			sq120 = brd_pList[PCEINDEX(t_piece, t_pce_num)];
			if (brd_pieces[sq120] != t_piece) {
				return BOOL.FALSE;
			}
		}
	}
	for (sq64 = 0; sq64 < 64; ++sq64) {
		sq120 = SQ120(sq64);
		t_piece = brd_pieces[sq120];
		t_pceNum[t_piece]++;
		t_material[PieceCol[t_piece]] += PieceVal[t_piece];
	}
	for (t_piece = PIECES.wP; t_piece <= PIECES.bK; ++t_piece) {
		if (t_pceNum[t_piece] != brd_pceNum[t_piece]) {
			console.log('Error t_pceNum');
			return BOOL.FALSE;
		}
	}
	if (t_material[COLOURS.WHITE] != brd_material[COLOURS.WHITE] || t_material[COLOURS.BLACK] != brd_material[COLOURS.BLACK]) {
		console.log('Error t_material');
		return BOOL.FALSE;
	}
	if (brd_side != COLOURS.WHITE && brd_side != COLOURS.BLACK) {
		console.log('Error brd_side');
		return BOOL.FALSE;
	}
	if (GeneratePosKey() != brd_posKey) {
		console.log('Error brd_posKey');
		return BOOL.FALSE;
	}
	return BOOL.TRUE;
}
function CheckResult() {
	if (brd_fiftyMove > 100) {
		$("#GameStatus").text("GAME DRAWN {fifty move rule}");
		return BOOL.TRUE;
	}
	if (ThreeFoldRep() >= 2) {
		$("#GameStatus").text("GAME DRAWN {3-fold repetition}");
		return BOOL.TRUE;
	}
	if (DrawMaterial() == BOOL.TRUE) {
		$("#GameStatus").text("GAME DRAWN {insufficient material to mate}");
		return BOOL.TRUE;
	}
	GenerateMoves();
	var MoveNum = 0;
	var found = 0;
	for (MoveNum = brd_moveListStart[brd_ply]; MoveNum < brd_moveListStart[brd_ply + 1]; ++MoveNum) {
		if (MakeMove(brd_moveList[MoveNum]) == BOOL.FALSE) {
			continue;
		}
		found++;
		TakeMove();
		break;
	}
	$("#currentFenSpan").text(BoardToFen());
	if (found != 0) return BOOL.FALSE;
	var InCheck = SqAttacked(brd_pList[PCEINDEX(Kings[brd_side], 0)], brd_side ^ 1);
	if (InCheck == BOOL.TRUE) {
		if (brd_side == COLOURS.WHITE) {
			$("#GameStatus").text("GAME OVER {black mates}");
			GameController.winner = 'black';
			return BOOL.TRUE;
		} else {
			$("#GameStatus").text("GAME OVER {white mates}");
			GameController.winner = 'white';
			return BOOL.TRUE;
		}
	} else {
		$("#GameStatus").text("GAME DRAWN {stalemate}"); return BOOL.TRUE;
	}
	return BOOL.FALSE;
}
function CheckUp() {
	if (($.now() - srch_start) > srch_time) srch_stop = BOOL.TRUE;
}
function ClearAllPieces() {
	$(".Piece").remove();
}
function ClearForSearch() {
	var index = 0;
	var index2 = 0;
	for (index = 0; index < 14 * BRD_SQ_NUM; ++index) {
		brd_searchHistory[index] = 0;
	}
	for (index = 0; index < 3 * MAXDEPTH; ++index) {
		brd_searchKillers[index] = 0;
	}
	ClearPvTable();
	brd_ply = 0;
	srch_nodes = 0;
	srch_fh = 0;
	srch_fhf = 0;
	srch_start = $.now();
	srch_stop = BOOL.FALSE;
}
function ClearPiece(sq) {
	var pce = brd_pieces[sq];
	var col = PieceCol[pce];
	var index = 0;
	var t_pceNum = -1;
	HASH_PCE(pce, sq);
	brd_pieces[sq] = PIECES.EMPTY;
	brd_material[col] -= PieceVal[pce];
	for (index = 0; index < brd_pceNum[pce]; ++index) {
		if (brd_pList[PCEINDEX(pce, index)] == sq) {
			t_pceNum = index;
			break;
		}
	}
	brd_pceNum[pce]--;
	brd_pList[PCEINDEX(pce, t_pceNum)] = brd_pList[PCEINDEX(pce, brd_pceNum[pce])];
}
function ClearPvTable() {
	for (index = 0; index < PVENTRIES; index++) {
		brd_PvTable[index].move = NOMOVE;
		brd_PvTable[index].posKey = 0;
	}
}
function ClickedSquare(pageX, pageY) {
	var position = $("#ChessBoard").position();
	let dBoard = mBy('ChessBoard');
	let rBoard = setRectInt(dBoard);
	let dParent = mBy('ChessBoard').parentNode;
	let r = setRectInt(dParent);
	var workedX = Math.floor(position.left);
	var workedY = Math.floor(position.top);
	var pageX = Math.floor(pageX);
	var pageY = Math.floor(pageY);
	var file = Math.floor((pageX - workedX - r.l) / 60);
	var rank = 7 - Math.floor((pageY - workedY - r.t) / 60);
	var sq = FR2SQ(file, rank); //file=col, rank=row (both 0-based)
	if (GameController.BoardFlipped == BOOL.TRUE) {
		sq = MIRROR120(sq);
	}
	SetSqSelected(sq); // must go here before mirror
	return sq;
}
function DeselectSq(sq) {
	if (GameController.BoardFlipped == BOOL.TRUE) {
		sq = MIRROR120(sq);
	}
	$(".Square").each(function (index) {
		if ((RanksBrd[sq] == 7 - Math.round($(this).position().top / 60)) && (FilesBrd[sq] == Math.round($(this).position().left / 60))) {
			$(this).removeClass('SqSelected');
		}
	});
}
function DrawMaterial() {
	if (brd_pceNum[PIECES.wP] != 0 || brd_pceNum[PIECES.bP] != 0) return BOOL.FALSE;
	if (brd_pceNum[PIECES.wQ] != 0 || brd_pceNum[PIECES.bQ] != 0 || brd_pceNum[PIECES.wR] != 0 || brd_pceNum[PIECES.bR] != 0) return BOOL.FALSE;
	if (brd_pceNum[PIECES.wB] > 1 || brd_pceNum[PIECES.bB] > 1) { return BOOL.FALSE; }
	if (brd_pceNum[PIECES.wN] > 1 || brd_pceNum[PIECES.bN] > 1) { return BOOL.FALSE; }
	if (brd_pceNum[PIECES.wN] != 0 && brd_pceNum[PIECES.wB] != 0) { return BOOL.FALSE; }
	if (brd_pceNum[PIECES.bN] != 0 && brd_pceNum[PIECES.bB] != 0) { return BOOL.FALSE; }
	return BOOL.TRUE;
}
function EvalInit() {
	var index = 0;
	for (index = 0; index < 10; ++index) {
		PawnRanksWhite[index] = 0;
		PawnRanksBlack[index] = 0;
	}
}
function EvalPosition() {
	var pce;
	var pceNum;
	var sq;
	var score = brd_material[COLOURS.WHITE] - brd_material[COLOURS.BLACK];
	var file;
	var rank;
	if (0 == brd_pceNum[PIECES.wP] && 0 == brd_pceNum[PIECES.bP] && MaterialDraw() == BOOL.TRUE) {
		return 0;
	}
	PawnsInit();
	pce = PIECES.wP;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		score += PawnTable[SQ64(sq)];
		file = FilesBrd[sq] + 1;
		rank = RanksBrd[sq];
		if (PawnRanksWhite[file - 1] == RANKS.RANK_8 && PawnRanksWhite[file + 1] == RANKS.RANK_8) {
			score += PawnIsolated;
		}
		if (PawnRanksBlack[file - 1] <= rank && PawnRanksBlack[file] <= rank && PawnRanksBlack[file + 1] <= rank) {
			score += PawnPassed[rank];
		}
	}
	pce = PIECES.bP;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		score -= PawnTable[MIRROR64(SQ64(sq))];
		file = FilesBrd[sq] + 1;
		rank = RanksBrd[sq];
		if (PawnRanksBlack[file - 1] == RANKS.RANK_1 && PawnRanksBlack[file + 1] == RANKS.RANK_1) {
			score -= PawnIsolated;
		}
		if (PawnRanksWhite[file - 1] >= rank && PawnRanksWhite[file] >= rank && PawnRanksWhite[file + 1] >= rank) {
			score -= PawnPassed[7 - rank];
		}
	}
	pce = PIECES.wN;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		score += KnightTable[SQ64(sq)];
	}
	pce = PIECES.bN;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		score -= KnightTable[MIRROR64(SQ64(sq))];
	}
	pce = PIECES.wB;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		score += BishopTable[SQ64(sq)];
	}
	pce = PIECES.bB;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		score -= BishopTable[MIRROR64(SQ64(sq))];
	}
	pce = PIECES.wR;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		score += RookTable[SQ64(sq)];
		file = FilesBrd[sq] + 1;
		if (PawnRanksWhite[file] == RANKS.RANK_8) {
			if (PawnRanksBlack[file] == RANKS.RANK_1) {
				score += RookOpenFile;
			} else {
				score += RookSemiOpenFile;
			}
		}
	}
	pce = PIECES.bR;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		score -= RookTable[MIRROR64(SQ64(sq))];
		file = FilesBrd[sq] + 1;
		if (PawnRanksBlack[file] == RANKS.RANK_1) {
			if (PawnRanksWhite[file] == RANKS.RANK_8) {
				score -= RookOpenFile;
			} else {
				score -= RookSemiOpenFile;
			}
		}
	}
	pce = PIECES.wQ;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		score += RookTable[SQ64(sq)];
		file = FilesBrd[sq] + 1;
		if (PawnRanksWhite[file] == RANKS.RANK_8) {
			if (PawnRanksBlack[file] == RANKS.RANK_1) {
				score += QueenOpenFile;
			} else {
				score += QueenSemiOpenFile;
			}
		}
	}
	pce = PIECES.bQ;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		score -= RookTable[MIRROR64(SQ64(sq))];
		file = FilesBrd[sq] + 1;
		if (PawnRanksBlack[file] == RANKS.RANK_1) {
			if (PawnRanksWhite[file] == RANKS.RANK_8) {
				score -= QueenOpenFile;
			} else {
				score -= QueenSemiOpenFile;
			}
		}
	}
	pce = PIECES.wK;
	sq = brd_pList[PCEINDEX(pce, 0)];
	if ((brd_material[COLOURS.BLACK] <= ENDGAME_MAT)) {
		score += KingE[SQ64(sq)];
	} else {
		score += KingO[SQ64(sq)];
	}
	pce = PIECES.bK;
	sq = brd_pList[PCEINDEX(pce, 0)];
	if ((brd_material[COLOURS.WHITE] <= ENDGAME_MAT)) {
		score -= KingE[MIRROR64(SQ64(sq))];
	} else {
		score -= KingO[MIRROR64(SQ64(sq))];
	}
	if (brd_pceNum[PIECES.wB] >= 2) score += BishopPair;
	if (brd_pceNum[PIECES.bB] >= 2) score -= BishopPair;
	if (brd_side == COLOURS.WHITE) {
		return score;
	} else {
		return -score;
	}
}
function FR2SQ(f, r) { return ((21 + (f)) + ((r) * 10)); }
function FROMSQ(m) { return (m & 0x7F); }
function GenerateCaptures() {
	brd_moveListStart[brd_ply + 1] = brd_moveListStart[brd_ply];
	var pceType;
	var pceNum;
	var pceIndex;
	var pce;
	var sq;
	var tsq;
	var index;
	if (brd_side == COLOURS.WHITE) {
		pceType = PIECES.wP;
		for (pceNum = 0; pceNum < brd_pceNum[pceType]; ++pceNum) {
			sq = brd_pList[PCEINDEX(pceType, pceNum)];
			if (SQOFFBOARD(sq + 9) == BOOL.FALSE && PieceCol[brd_pieces[sq + 9]] == COLOURS.BLACK) {
				AddWhitePawnCaptureMove(sq, sq + 9, brd_pieces[sq + 9]);
			}
			if (SQOFFBOARD(sq + 11) == BOOL.FALSE && PieceCol[brd_pieces[sq + 11]] == COLOURS.BLACK) {
				AddWhitePawnCaptureMove(sq, sq + 11, brd_pieces[sq + 11]);
			}
			if (brd_enPas != SQUARES.NO_SQ) {
				if (sq + 9 == brd_enPas) {
					AddEnPassantMove(MOVE(sq, sq + 9, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
				}
				if (sq + 11 == brd_enPas) {
					AddEnPassantMove(MOVE(sq, sq + 11, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
				}
			}
		}
		pceType = PIECES.wN; // HACK to set for loop other pieces
	} else {
		pceType = PIECES.bP;
		for (pceNum = 0; pceNum < brd_pceNum[pceType]; ++pceNum) {
			sq = brd_pList[PCEINDEX(pceType, pceNum)];
			if (SQOFFBOARD(sq - 9) == BOOL.FALSE && PieceCol[brd_pieces[sq - 9]] == COLOURS.WHITE) {
				AddBlackPawnCaptureMove(sq, sq - 9, brd_pieces[sq - 9]);
			}
			if (SQOFFBOARD(sq - 11) == BOOL.FALSE && PieceCol[brd_pieces[sq - 11]] == COLOURS.WHITE) {
				AddBlackPawnCaptureMove(sq, sq - 11, brd_pieces[sq - 11]);
			}
			if (brd_enPas != SQUARES.NO_SQ) {
				if (sq - 9 == brd_enPas) {
					AddEnPassantMove(MOVE(sq, sq - 9, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
				}
				if (sq - 11 == brd_enPas) {
					AddEnPassantMove(MOVE(sq, sq - 11, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
				}
			}
		}
		pceType = PIECES.bN; // HACK to set for loop other pieces
	}
	pceIndex = LoopSlideIndex[brd_side];
	pce = LoopSlidePce[pceIndex++];
	while (pce != 0) {
		for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
			sq = brd_pList[PCEINDEX(pce, pceNum)];
			for (index = 0; index < DirNum[pce]; ++index) {
				dir = PceDir[pce][index];
				t_sq = sq + dir;
				while (SQOFFBOARD(t_sq) == BOOL.FALSE) {
					if (brd_pieces[t_sq] != PIECES.EMPTY) {
						if (PieceCol[brd_pieces[t_sq]] == brd_side ^ 1) {
							AddCaptureMove(MOVE(sq, t_sq, brd_pieces[t_sq], PIECES.EMPTY, 0));
						}
						break;
					}
					t_sq += dir;
				}
			}
		}
		pce = LoopSlidePce[pceIndex++];
	}
	pceIndex = LoopNonSlideIndex[brd_side];
	pce = LoopNonSlidePce[pceIndex++];
	while (pce != 0) {
		for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
			sq = brd_pList[PCEINDEX(pce, pceNum)];
			for (index = 0; index < DirNum[pce]; ++index) {
				dir = PceDir[pce][index];
				t_sq = sq + dir;
				if (SQOFFBOARD(t_sq) == BOOL.TRUE) {
					continue;
				}
				if (brd_pieces[t_sq] != PIECES.EMPTY) {
					if (PieceCol[brd_pieces[t_sq]] == brd_side ^ 1) {
						AddCaptureMove(MOVE(sq, t_sq, brd_pieces[t_sq], PIECES.EMPTY, 0));
					}
					continue;
				}
			}
		}
		pce = LoopNonSlidePce[pceIndex++];
	}
}
function GenerateMoves() {
	brd_moveListStart[brd_ply + 1] = brd_moveListStart[brd_ply];
	var pceType;
	var pceNum;
	var pceIndex;
	var pce;
	var sq;
	var tsq;
	var index;
	if (brd_side == COLOURS.WHITE) {
		pceType = PIECES.wP;
		for (pceNum = 0; pceNum < brd_pceNum[pceType]; ++pceNum) {
			sq = brd_pList[PCEINDEX(pceType, pceNum)];
			if (brd_pieces[sq + 10] == PIECES.EMPTY) {
				AddWhitePawnQuietMove(sq, sq + 10);
				if (RanksBrd[sq] == RANKS.RANK_2 && brd_pieces[sq + 20] == PIECES.EMPTY) {
					AddQuietMove(MOVE(sq, (sq + 20), PIECES.EMPTY, PIECES.EMPTY, MFLAGPS));
				}
			}
			if (SQOFFBOARD(sq + 9) == BOOL.FALSE && PieceCol[brd_pieces[sq + 9]] == COLOURS.BLACK) {
				AddWhitePawnCaptureMove(sq, sq + 9, brd_pieces[sq + 9]);
			}
			if (SQOFFBOARD(sq + 11) == BOOL.FALSE && PieceCol[brd_pieces[sq + 11]] == COLOURS.BLACK) {
				AddWhitePawnCaptureMove(sq, sq + 11, brd_pieces[sq + 11]);
			}
			if (brd_enPas != SQUARES.NO_SQ) {
				if (sq + 9 == brd_enPas) {
					AddEnPassantMove(MOVE(sq, sq + 9, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
				}
				if (sq + 11 == brd_enPas) {
					AddEnPassantMove(MOVE(sq, sq + 11, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
				}
			}
		}
		if (brd_castlePerm & CASTLEBIT.WKCA) {
			if (brd_pieces[SQUARES.F1] == PIECES.EMPTY && brd_pieces[SQUARES.G1] == PIECES.EMPTY) {
				if (SqAttacked(SQUARES.E1, COLOURS.BLACK) == BOOL.FALSE && SqAttacked(SQUARES.F1, COLOURS.BLACK) == BOOL.FALSE) {
					AddQuietMove(MOVE(SQUARES.E1, SQUARES.G1, PIECES.EMPTY, PIECES.EMPTY, MFLAGCA));
				}
			}
		}
		if (brd_castlePerm & CASTLEBIT.WQCA) {
			if (brd_pieces[SQUARES.D1] == PIECES.EMPTY && brd_pieces[SQUARES.C1] == PIECES.EMPTY && brd_pieces[SQUARES.B1] == PIECES.EMPTY) {
				if (SqAttacked(SQUARES.E1, COLOURS.BLACK) == BOOL.FALSE && SqAttacked(SQUARES.D1, COLOURS.BLACK) == BOOL.FALSE) {
					AddQuietMove(MOVE(SQUARES.E1, SQUARES.C1, PIECES.EMPTY, PIECES.EMPTY, MFLAGCA));
				}
			}
		}
		pceType = PIECES.wN; // HACK to set for loop other pieces
	} else {
		pceType = PIECES.bP;
		for (pceNum = 0; pceNum < brd_pceNum[pceType]; ++pceNum) {
			sq = brd_pList[PCEINDEX(pceType, pceNum)];
			if (brd_pieces[sq - 10] == PIECES.EMPTY) {
				AddBlackPawnQuietMove(sq, sq - 10);
				if (RanksBrd[sq] == RANKS.RANK_7 && brd_pieces[sq - 20] == PIECES.EMPTY) {
					AddQuietMove(MOVE(sq, (sq - 20), PIECES.EMPTY, PIECES.EMPTY, MFLAGPS));
				}
			}
			if (SQOFFBOARD(sq - 9) == BOOL.FALSE && PieceCol[brd_pieces[sq - 9]] == COLOURS.WHITE) {
				AddBlackPawnCaptureMove(sq, sq - 9, brd_pieces[sq - 9]);
			}
			if (SQOFFBOARD(sq - 11) == BOOL.FALSE && PieceCol[brd_pieces[sq - 11]] == COLOURS.WHITE) {
				AddBlackPawnCaptureMove(sq, sq - 11, brd_pieces[sq - 11]);
			}
			if (brd_enPas != SQUARES.NO_SQ) {
				if (sq - 9 == brd_enPas) {
					AddEnPassantMove(MOVE(sq, sq - 9, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
				}
				if (sq - 11 == brd_enPas) {
					AddEnPassantMove(MOVE(sq, sq - 11, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
				}
			}
		}
		if (brd_castlePerm & CASTLEBIT.BKCA) {
			if (brd_pieces[SQUARES.F8] == PIECES.EMPTY && brd_pieces[SQUARES.G8] == PIECES.EMPTY) {
				if (SqAttacked(SQUARES.E8, COLOURS.WHITE) == BOOL.FALSE && SqAttacked(SQUARES.F8, COLOURS.WHITE) == BOOL.FALSE) {
					AddQuietMove(MOVE(SQUARES.E8, SQUARES.G8, PIECES.EMPTY, PIECES.EMPTY, MFLAGCA));
				}
			}
		}
		if (brd_castlePerm & CASTLEBIT.BQCA) {
			if (brd_pieces[SQUARES.D8] == PIECES.EMPTY && brd_pieces[SQUARES.C8] == PIECES.EMPTY && brd_pieces[SQUARES.B8] == PIECES.EMPTY) {
				if (SqAttacked(SQUARES.E8, COLOURS.WHITE) == BOOL.FALSE && SqAttacked(SQUARES.D8, COLOURS.WHITE) == BOOL.FALSE) {
					AddQuietMove(MOVE(SQUARES.E8, SQUARES.C8, PIECES.EMPTY, PIECES.EMPTY, MFLAGCA));
				}
			}
		}
		pceType = PIECES.bN; // HACK to set for loop other pieces
	}
	pceIndex = LoopSlideIndex[brd_side];
	pce = LoopSlidePce[pceIndex++];
	while (pce != 0) {
		for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
			sq = brd_pList[PCEINDEX(pce, pceNum)];
			for (index = 0; index < DirNum[pce]; ++index) {
				dir = PceDir[pce][index];
				t_sq = sq + dir;
				while (SQOFFBOARD(t_sq) == BOOL.FALSE) {
					if (brd_pieces[t_sq] != PIECES.EMPTY) {
						if (PieceCol[brd_pieces[t_sq]] == brd_side ^ 1) {
							AddCaptureMove(MOVE(sq, t_sq, brd_pieces[t_sq], PIECES.EMPTY, 0));
						}
						break;
					}
					AddQuietMove(MOVE(sq, t_sq, PIECES.EMPTY, PIECES.EMPTY, 0));
					t_sq += dir;
				}
			}
		}
		pce = LoopSlidePce[pceIndex++];
	}
	pceIndex = LoopNonSlideIndex[brd_side];
	pce = LoopNonSlidePce[pceIndex++];
	while (pce != 0) {
		for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
			sq = brd_pList[PCEINDEX(pce, pceNum)];
			for (index = 0; index < DirNum[pce]; ++index) {
				dir = PceDir[pce][index];
				t_sq = sq + dir;
				if (SQOFFBOARD(t_sq) == BOOL.TRUE) {
					continue;
				}
				if (brd_pieces[t_sq] != PIECES.EMPTY) {
					if (PieceCol[brd_pieces[t_sq]] == brd_side ^ 1) {
						AddCaptureMove(MOVE(sq, t_sq, brd_pieces[t_sq], PIECES.EMPTY, 0));
					}
					continue;
				}
				AddQuietMove(MOVE(sq, t_sq, PIECES.EMPTY, PIECES.EMPTY, 0));
			}
		}
		pce = LoopNonSlidePce[pceIndex++];
	}
}
function GeneratePosKey() {
	var sq = 0;
	var finalKey = 0;
	var piece = PIECES.EMPTY;
	for (sq = 0; sq < BRD_SQ_NUM; ++sq) {
		piece = brd_pieces[sq];
		if (piece != PIECES.EMPTY && piece != SQUARES.OFFBOARD) {
			finalKey ^= PieceKeys[(piece * 120) + sq];
		}
	}
	if (brd_side == COLOURS.WHITE) {
		finalKey ^= SideKey;
	}
	if (brd_enPas != SQUARES.NO_SQ) {
		finalKey ^= PieceKeys[brd_enPas];
	}
	finalKey ^= CastleKeys[brd_castlePerm];
	return finalKey;
}
function GetPvLine(depth) {
	;
	var move = ProbePvTable();
	var count = 0;
	while (move != NOMOVE && count < depth) {
		if (MoveExists(move)) {
			MakeMove(move);
			brd_PvArray[count++] = move;
		} else {
			break;
		}
		move = ProbePvTable();
	}
	while (brd_ply > 0) {
		TakeMove();
	}
	return count;
}
function HASH_CA() { brd_posKey ^= CastleKeys[brd_castlePerm]; }
function HASH_EP() { brd_posKey ^= PieceKeys[brd_enPas]; }
function HASH_PCE(pce, sq) { brd_posKey ^= PieceKeys[pce * 120 + sq]; }
function HASH_SIDE() { brd_posKey ^= SideKey; }
function HintAnimation(sq, ms = 2000) {
	if (GameController.BoardFlipped == BOOL.TRUE) { sq = MIRROR120(sq); }
	$(".Square").each(function (index) {
		if ((RanksBrd[sq] == 7 - Math.round($(this).position().top / 60)) && (FilesBrd[sq] == Math.round($(this).position().left / 60))) {
			animateProperty(this, 'opacity', '1', '0', '1', ms);
		}
	});
}
function InitBoardSquares() {
	var light = 0;
	var rankName;
	var fileName;
	var divString;
	var lightString;
	var lastLight = 0;
	for (rankIter = RANKS.RANK_8; rankIter >= RANKS.RANK_1; rankIter--) {
		light = lastLight ^ 1;
		lastLight ^= 1;
		rankName = "rank" + (rankIter + 1);
		for (fileIter = FILES.FILE_A; fileIter <= FILES.FILE_H; fileIter++) {
			fileName = "file" + (fileIter + 1);
			if (light == 0) lightString = "Light";
			else lightString = "Dark";
			divString = "<div class=\"Square clickElement " + rankName + " " + fileName + " " + lightString + "\"/>";
			light ^= 1;
			$("#ChessBoard").append(divString);
		}
	}
}
function InitBoardVars() {
	var index = 0;
	for (index = 0; index < MAXGAMEMOVES; index++) {
		brd_history.push({
			move: NOMOVE,
			castlePerm: 0,
			enPas: 0,
			fiftyMove: 0,
			posKey: 0
		});
	}
	for (index = 0; index < PVENTRIES; index++) {
		brd_PvTable.push({
			move: NOMOVE,
			posKey: 0
		});
	}
}
function InitFilesRanksBrd() {
	var index = 0;
	var file = FILES.FILE_A;
	var rank = RANKS.RANK_1;
	var sq = SQUARES.A1;
	var sq64 = 0;
	for (index = 0; index < BRD_SQ_NUM; ++index) {
		FilesBrd[index] = SQUARES.OFFBOARD;
		RanksBrd[index] = SQUARES.OFFBOARD;
	}
	for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
		for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
			sq = FR2SQ(file, rank);
			FilesBrd[sq] = file;
			RanksBrd[sq] = rank;
		}
	}
}
function InitHashKeys() {
	var index = 0;
	for (index = 0; index < 13 * 120; ++index) {
		PieceKeys[index] = RAND_32();
	}
	SideKey = RAND_32();
	for (index = 0; index < 16; ++index) {
		CastleKeys[index] = RAND_32();
	}
}
function InitMvvLva() {
	var Attacker;
	var Victim;
	for (Attacker = PIECES.wP; Attacker <= PIECES.bK; ++Attacker) {
		for (Victim = PIECES.wP; Victim <= PIECES.bK; ++Victim) {
			MvvLvaScores[Victim * 14 + Attacker] = VictimScore[Victim] + 6 - (VictimScore[Attacker] / 100);
		}
	}
}
function InitSq120To64() {
	var index = 0;
	var file = FILES.FILE_A;
	var rank = RANKS.RANK_1;
	var sq = SQUARES.A1;
	var sq64 = 0;
	for (index = 0; index < BRD_SQ_NUM; ++index) {
		Sq120ToSq64[index] = 65;
	}
	for (index = 0; index < 64; ++index) {
		Sq64ToSq120[index] = 120;
	}
	for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
		for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
			sq = FR2SQ(file, rank);
			Sq64ToSq120[sq64] = sq;
			Sq120ToSq64[sq] = sq64;
			sq64++;
		}
	}
}
function IsRepetition() {
	var index = 0;
	for (index = brd_hisPly - brd_fiftyMove; index < brd_hisPly - 1; ++index) {
		if (brd_posKey == brd_history[index].posKey) {
			return BOOL.TRUE;
		}
	}
	return BOOL.FALSE;
}
function LineMatch(BookLine, gameline) {
	for (var len = 0; len < gameline.length; ++len) {
		if (len >= BookLine.length) { return BOOL.FALSE; }
		if (gameline[len] != BookLine[len]) { return BOOL.FALSE; }
	}
	return BOOL.TRUE;
}
function MakeMove(move) {
	var from = FROMSQ(move);
	var to = TOSQ(move);
	var side = brd_side;
	brd_history[brd_hisPly].posKey = brd_posKey;
	if ((move & MFLAGEP) != 0) {
		if (side == COLOURS.WHITE) {
			ClearPiece(to - 10);
		} else {
			ClearPiece(to + 10);
		}
	} else if ((move & MFLAGCA) != 0) {
		switch (to) {
			case SQUARES.C1:
				MovePiece(SQUARES.A1, SQUARES.D1);
				break;
			case SQUARES.C8:
				MovePiece(SQUARES.A8, SQUARES.D8);
				break;
			case SQUARES.G1:
				MovePiece(SQUARES.H1, SQUARES.F1);
				break;
			case SQUARES.G8:
				MovePiece(SQUARES.H8, SQUARES.F8);
				break;
			default: break;
		}
	}
	if (brd_enPas != SQUARES.NO_SQ) HASH_EP();
	HASH_CA();
	brd_history[brd_hisPly].move = move;
	brd_history[brd_hisPly].fiftyMove = brd_fiftyMove;
	brd_history[brd_hisPly].enPas = brd_enPas;
	brd_history[brd_hisPly].castlePerm = brd_castlePerm;
	brd_castlePerm &= CastlePerm[from];
	brd_castlePerm &= CastlePerm[to];
	brd_enPas = SQUARES.NO_SQ;
	HASH_CA();
	var captured = CAPTURED(move);
	brd_fiftyMove++;
	if (captured != PIECES.EMPTY) {
		ClearPiece(to);
		brd_fiftyMove = 0;
	}
	brd_hisPly++;
	brd_ply++;
	if (PiecePawn[brd_pieces[from]] == BOOL.TRUE) {
		brd_fiftyMove = 0;
		if ((move & MFLAGPS) != 0) {
			if (side == COLOURS.WHITE) {
				brd_enPas = from + 10;
			} else {
				brd_enPas = from - 10;
			}
			HASH_EP();
		}
	}
	MovePiece(from, to);
	var prPce = PROMOTED(move);
	if (prPce != PIECES.EMPTY) {
		ClearPiece(to);
		AddPiece(to, prPce);
	}
	brd_side ^= 1;
	HASH_SIDE();
	if (SqAttacked(brd_pList[PCEINDEX(Kings[side], 0)], brd_side)) {
		TakeMove();
		return BOOL.FALSE;
	}
	return BOOL.TRUE;
}
function MakeUserMove() {
	if (UserMove.from != SQUARES.NO_SQ && UserMove.to != SQUARES.NO_SQ) {
		var parsed = ParseMove(UserMove.from, UserMove.to);
		DeselectSq(UserMove.from);
		DeselectSq(UserMove.to);
		if (parsed != NOMOVE) {
			MakeMove(parsed);
			MoveGUIPiece(parsed);
			CheckAndSet();
			PreSearch();
		} else {
			ShowChessMessage('illegal move!', 1000);
		}
		UserMove.from = SQUARES.NO_SQ;
		UserMove.to = SQUARES.NO_SQ;
	}
}
function MaterialDraw() {
	if (0 == brd_pceNum[PIECES.wR] && 0 == brd_pceNum[PIECES.bR] && 0 == brd_pceNum[PIECES.wQ] && 0 == brd_pceNum[PIECES.bQ]) {
		if (0 == brd_pceNum[PIECES.bB] && 0 == brd_pceNum[PIECES.wB]) {
			if (brd_pceNum[PIECES.wN] < 3 && brd_pceNum[PIECES.bN] < 3) { return BOOL.TRUE; }
		} else if (0 == brd_pceNum[PIECES.wN] && 0 == brd_pceNum[PIECES.bN]) {
			if (Math.abs(brd_pceNum[PIECES.wB] - brd_pceNum[PIECES.bB]) < 2) { return BOOL.TRUE; }
		} else if ((brd_pceNum[PIECES.wN] < 3 && 0 == brd_pceNum[PIECES.wB]) || (brd_pceNum[PIECES.wB] == 1 && 0 == brd_pceNum[PIECES.wN])) {
			if ((brd_pceNum[PIECES.bN] < 3 && 0 == brd_pceNum[PIECES.bB]) || (brd_pceNum[PIECES.bB] == 1 && 0 == brd_pceNum[PIECES.bN])) { return BOOL.TRUE; }
		}
	} else if (0 == brd_pceNum[PIECES.wQ] && 0 == brd_pceNum[PIECES.bQ]) {
		if (brd_pceNum[PIECES.wR] == 1 && brd_pceNum[PIECES.bR] == 1) {
			if ((brd_pceNum[PIECES.wN] + brd_pceNum[PIECES.wB]) < 2 && (brd_pceNum[PIECES.bN] + brd_pceNum[PIECES.bB]) < 2) { return BOOL.TRUE; }
		} else if (brd_pceNum[PIECES.wR] == 1 && 0 == brd_pceNum[PIECES.bR]) {
			if ((brd_pceNum[PIECES.wN] + brd_pceNum[PIECES.wB] == 0) && (((brd_pceNum[PIECES.bN] + brd_pceNum[PIECES.bB]) == 1) || ((brd_pceNum[PIECES.bN] + brd_pceNum[PIECES.bB]) == 2))) { return BOOL.TRUE; }
		} else if (brd_pceNum[PIECES.bR] == 1 && 0 == brd_pceNum[PIECES.wR]) {
			if ((brd_pceNum[PIECES.bN] + brd_pceNum[PIECES.bB] == 0) && (((brd_pceNum[PIECES.wN] + brd_pceNum[PIECES.wB]) == 1) || ((brd_pceNum[PIECES.wN] + brd_pceNum[PIECES.wB]) == 2))) { return BOOL.TRUE; }
		}
	}
	return BOOL.FALSE;
}
function MIRROR120(sq) {
	var file = MirrorFiles[FilesBrd[sq]];
	var rank = MirrorRanks[RanksBrd[sq]];
	return FR2SQ(file, rank);
}
function MIRROR64(sq) { return Mirror64[sq]; }
function MOVE(from, to, captured, promoted, flag) { return (from | (to << 7) | (captured << 14) | (promoted << 20) | flag); }
function Move2FromTo(move) {
	var ff = FilesBrd[FROMSQ(move)];
	var rf = RanksBrd[FROMSQ(move)];
	var ft = FilesBrd[TOSQ(move)];
	var rt = RanksBrd[TOSQ(move)];
	return { from: { sq: FROMSQ(move), file: ff, rank: rf }, to: { sq: TOSQ(move), file: ft, rank: rt } };
}
function MoveExists(move) {
	GenerateMoves();
	var index;
	var moveFound = NOMOVE;
	for (index = brd_moveListStart[brd_ply]; index < brd_moveListStart[brd_ply + 1]; ++index) {
		moveFound = brd_moveList[index];
		if (MakeMove(moveFound) == BOOL.FALSE) {
			continue;
		}
		TakeMove();
		if (move == moveFound) {
			return BOOL.TRUE;
		}
	}
	return BOOL.FALSE;
}
function MoveGUIPiece(move) {
	var from = FROMSQ(move);
	var to = TOSQ(move);
	var flippedFrom = from;
	var flippedTo = to;
	var epWhite = -10;
	var epBlack = 10;
	if (GameController.BoardFlipped == BOOL.TRUE) {
		flippedFrom = MIRROR120(from);
		flippedTo = MIRROR120(to);
		epWhite = 10;
		epBlack = -10;
	}
	if (move & MFLAGEP) {
		var epRemove;
		if (brd_side == COLOURS.BLACK) {
			epRemove = flippedTo + epWhite;
		} else {
			epRemove = flippedTo + epBlack;
		}
		RemoveGUIPiece(epRemove);
	} else if (CAPTURED(move)) {
		RemoveGUIPiece(flippedTo);
	}
	var rank = RanksBrd[flippedTo];
	var file = FilesBrd[flippedTo];
	var rankName = "rank" + (rank + 1);
	var fileName = "file" + (file + 1);
	$(".Piece").each(function (index) {
		if ((RanksBrd[flippedFrom] == 7 - Math.round($(this).position().top / 60)) && (FilesBrd[flippedFrom] == Math.round($(this).position().left / 60))) {
			$(this).removeClass();
			$(this).addClass("Piece clickElement " + rankName + " " + fileName);
		}
	});
	if (move & MFLAGCA) {
		if (GameController.BoardFlipped == BOOL.TRUE) {
			switch (to) {
				case SQUARES.G1: RemoveGUIPiece(MIRROR120(SQUARES.H1)); AddGUIPiece(MIRROR120(SQUARES.F1), PIECES.wR); break;
				case SQUARES.C1: RemoveGUIPiece(MIRROR120(SQUARES.A1)); AddGUIPiece(MIRROR120(SQUARES.D1), PIECES.wR); break;
				case SQUARES.G8: RemoveGUIPiece(MIRROR120(SQUARES.H8)); AddGUIPiece(MIRROR120(SQUARES.F8), PIECES.bR); break;
				case SQUARES.C8: RemoveGUIPiece(MIRROR120(SQUARES.A8)); AddGUIPiece(MIRROR120(SQUARES.D8), PIECES.bR); break;
			}
		} else {
			switch (to) {
				case SQUARES.G1: RemoveGUIPiece(SQUARES.H1); AddGUIPiece(SQUARES.F1, PIECES.wR); break;
				case SQUARES.C1: RemoveGUIPiece(SQUARES.A1); AddGUIPiece(SQUARES.D1, PIECES.wR); break;
				case SQUARES.G8: RemoveGUIPiece(SQUARES.H8); AddGUIPiece(SQUARES.F8, PIECES.bR); break;
				case SQUARES.C8: RemoveGUIPiece(SQUARES.A8); AddGUIPiece(SQUARES.D8, PIECES.bR); break;
			}
		}
	}
	var prom = PROMOTED(move);
	if (prom != PIECES.EMPTY) {
		RemoveGUIPiece(flippedTo);
		AddGUIPiece(flippedTo, prom);
	}
	printGameLine();
}
function MovePiece(from, to) {
	var index = 0;
	var pce = brd_pieces[from];
	var col = PieceCol[pce];
	HASH_PCE(pce, from);
	brd_pieces[from] = PIECES.EMPTY;
	HASH_PCE(pce, to);
	brd_pieces[to] = pce;
	for (index = 0; index < brd_pceNum[pce]; ++index) {
		if (brd_pList[PCEINDEX(pce, index)] == from) {
			brd_pList[PCEINDEX(pce, index)] = to;
			break;
		}
	}
}
function NewGame(fen) {
	if (nundef(fen)) fen = START_FEN;
	ParseFen(fen);
	PrintBoard();
	SetInitialBoardPieces();
	GameController.PlayerSide = brd_side;
	CheckAndSet();
	GameController.GameSaved = BOOL.FALSE;
	if (SideChar[brd_side] == 'b') {
		GameController.PlayerSide = brd_side ^ 1;
		PreSearch();
	}
}
function NewGameAjax() {
}
function ParseFen(fen) {
	var rank = RANKS.RANK_8;
	var file = FILES.FILE_A;
	var piece = 0;
	var count = 0;
	var i = 0;
	var sq64 = 0;
	var sq120 = 0;
	var fenCnt = 0;
	ResetBoard();
	while ((rank >= RANKS.RANK_1) && fenCnt < fen.length) {
		count = 1;
		switch (fen[fenCnt]) {
			case 'p': piece = PIECES.bP; break;
			case 'r': piece = PIECES.bR; break;
			case 'n': piece = PIECES.bN; break;
			case 'b': piece = PIECES.bB; break;
			case 'k': piece = PIECES.bK; break;
			case 'q': piece = PIECES.bQ; break;
			case 'P': piece = PIECES.wP; break;
			case 'R': piece = PIECES.wR; break;
			case 'N': piece = PIECES.wN; break;
			case 'B': piece = PIECES.wB; break;
			case 'K': piece = PIECES.wK; break;
			case 'Q': piece = PIECES.wQ; break;
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
				piece = PIECES.EMPTY;
				count = fen[fenCnt].charCodeAt() - '0'.charCodeAt();
				break;
			case '/':
			case ' ':
				rank--;
				file = FILES.FILE_A;
				fenCnt++;
				continue;
			default:
				printf("FEN error \n");
				return;
		}
		for (i = 0; i < count; i++) {
			sq64 = rank * 8 + file;
			sq120 = SQ120(sq64);
			if (piece != PIECES.EMPTY) {
				brd_pieces[sq120] = piece;
			}
			file++;
		}
		fenCnt++;
	}
	brd_side = (fen[fenCnt] == 'w') ? COLOURS.WHITE : COLOURS.BLACK;
	fenCnt += 2;
	for (i = 0; i < 4; i++) {
		if (fen[fenCnt] == ' ') {
			break;
		}
		switch (fen[fenCnt]) {
			case 'K': brd_castlePerm |= CASTLEBIT.WKCA; break;
			case 'Q': brd_castlePerm |= CASTLEBIT.WQCA; break;
			case 'k': brd_castlePerm |= CASTLEBIT.BKCA; break;
			case 'q': brd_castlePerm |= CASTLEBIT.BQCA; break;
			default: break;
		}
		fenCnt++;
	}
	fenCnt++;
	if (fen[fenCnt] != '-') {
		file = fen[fenCnt].charCodeAt() - 'a'.charCodeAt();
		rank = fen[fenCnt + 1].charCodeAt() - '1'.charCodeAt();
		brd_enPas = FR2SQ(file, rank);
	}
	brd_posKey = GeneratePosKey();
	UpdateListsMaterial();
}
function ParseMove(from, to) {
	GenerateMoves();
	var Move = NOMOVE;
	var PromPce = PIECES.EMPTY;
	var found = BOOL.FALSE;
	for (index = brd_moveListStart[brd_ply]; index < brd_moveListStart[brd_ply + 1]; ++index) {
		Move = brd_moveList[index];
		if (FROMSQ(Move) == from && TOSQ(Move) == to) {
			PromPce = PROMOTED(Move);
			if (PromPce != PIECES.EMPTY) {
				if ((PromPce == PIECES.wQ && brd_side == COLOURS.WHITE) || (PromPce == PIECES.bQ && brd_side == COLOURS.BLACK)) {
					found = BOOL.TRUE;
					break;
				}
				continue;
			}
			found = BOOL.TRUE;
			break;
		}
	}
	if (found != BOOL.FALSE) {
		if (MakeMove(Move) == BOOL.FALSE) {
			return NOMOVE;
		}
		TakeMove();
		return Move;
	}
	return NOMOVE;
}
function PawnsInit() {
	var index = 0;
	for (index = 0; index < 10; ++index) {
		PawnRanksWhite[index] = RANKS.RANK_8;
		PawnRanksBlack[index] = RANKS.RANK_1;
	}
	pce = PIECES.wP;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		if (RanksBrd[sq] < PawnRanksWhite[FilesBrd[sq] + 1]) {
			PawnRanksWhite[FilesBrd[sq] + 1] = RanksBrd[sq];
		}
	}
	pce = PIECES.bP;
	for (pceNum = 0; pceNum < brd_pceNum[pce]; ++pceNum) {
		sq = brd_pList[PCEINDEX(pce, pceNum)];
		if (RanksBrd[sq] > PawnRanksBlack[FilesBrd[sq] + 1]) {
			PawnRanksBlack[FilesBrd[sq] + 1] = RanksBrd[sq];
		}
	}
}
function PCEINDEX(pce, pceNum) { return (pce * 10 + pceNum); }
function Perft(depth) {
	MakeNullMove();
	if (brd_posKey != GeneratePosKey()) {
		console.log(printGameLine());
		PrintBoard();
		srch_stop = BOOL.TRUE;
		console.log('Hash Error After Make');
	}
	TakeNullMove();
	if (brd_posKey != GeneratePosKey()) {
		console.log(printGameLine());
		PrintBoard();
		srch_stop = BOOL.TRUE;
		console.log('Hash Error After Take');
	}
	if (depth == 0) {
		perft_leafNodes++;
		return;
	}
	GenerateMoves();
	var index;
	var move;
	for (index = brd_moveListStart[brd_ply]; index < brd_moveListStart[brd_ply + 1]; ++index) {
		move = brd_moveList[index];
		if (MakeMove(move) == BOOL.FALSE) {
			continue;
		}
		Perft(depth - 1);
		TakeMove();
	}
	return;
}
function PerftTest(depth) {
	PrintBoard();
	perft_leafNodes = 0;
	GenerateMoves();
	var index;
	var move;
	var moveNum = 0;
	for (index = brd_moveListStart[brd_ply]; index < brd_moveListStart[brd_ply + 1]; ++index) {
		move = brd_moveList[index];
		if (MakeMove(move) == BOOL.FALSE) {
			continue;
		}
		moveNum++;
		var cumnodes = perft_leafNodes;
		Perft(depth - 1);
		TakeMove();
		var oldnodes = perft_leafNodes - cumnodes;
	}
	$("#FenOutput").text("Test Complete : " + perft_leafNodes + " leaf nodes visited");
	return;
}
function PickNextMove(moveNum) {
	var index = 0;
	var bestScore = 0;
	var bestNum = moveNum;
	for (index = moveNum; index < brd_moveListStart[brd_ply + 1]; ++index) {
		if (brd_moveScores[index] > bestScore) {
			bestScore = brd_moveScores[index];
			bestNum = index;
		}
	}
	temp = brd_moveList[moveNum];
	brd_moveList[moveNum] = brd_moveList[bestNum];
	brd_moveList[bestNum] = temp;
	temp = brd_moveScores[moveNum];
	brd_moveScores[moveNum] = brd_moveScores[bestNum];
	brd_moveScores[bestNum] = temp;
}
function PreSearch() {
	if (GameController.GameOver != BOOL.TRUE) {
		srch_thinking = BOOL.TRUE;
		StartThinking();
		setTimeout(function () { StartSearch(); }, 200);
	}
}
function PrintBoard() {
	return;
	var sq, file, rank, piece;
	for (rank = RANKS.RANK_8; rank >= RANKS.RANK_1; rank--) {
		var line = ((rank + 1) + "  ");
		for (file = FILES.FILE_A; file <= FILES.FILE_H; file++) {
			sq = FR2SQ(file, rank);
			piece = brd_pieces[sq];
			line += (" " + PceChar[piece] + " ");
		}
		console.log(line);
	}
	console.log("");
	var line = "   ";
	for (file = FILES.FILE_A; file <= FILES.FILE_H; file++) {
		line += (' ' + String.fromCharCode('a'.charCodeAt() + file) + ' ');
	}
	console.log(line);
	console.log("side:" + SideChar[brd_side]);
	console.log("enPas:" + brd_enPas);
	line = "";
	if (brd_castlePerm & CASTLEBIT.WKCA) line += 'K';
	if (brd_castlePerm & CASTLEBIT.WQCA) line += 'Q';
	if (brd_castlePerm & CASTLEBIT.BKCA) line += 'k';
	if (brd_castlePerm & CASTLEBIT.BQCA) line += 'q';
	console.log("castle:" + line);
	console.log("key:" + brd_posKey.toString(16));
}
function printGameLine() {
	var moveNum = 0;
	var gameLine = "";
	for (moveNum = 0; moveNum < brd_hisPly; ++moveNum) {
		gameLine += PrMove(brd_history[moveNum].move) + " ";
	}
	return $.trim(gameLine);
}
function PrintMoveList() {
	var index;
	var move;
	for (index = brd_moveListStart[brd_ply]; index < brd_moveListStart[brd_ply + 1]; ++index) {
		move = brd_moveList[index];
	}
}
function PrintPceLists() {
	var piece, pceNum;
	for (piece = PIECES.wP; piece <= PIECES.bK; ++piece) {
		for (pceNum = 0; pceNum < brd_pceNum[piece]; ++pceNum) {
			console.log("Piece " + PceChar[piece] + " on " + PrSq(brd_pList[PCEINDEX(piece, pceNum)]));
		}
	}
}
function PrintSqAttacked() {
	var sq, file, rank, piece;
	console.log("\nAttacked:\n");
	for (rank = RANKS.RANK_8; rank >= RANKS.RANK_1; rank--) {
		var line = ((rank + 1) + "  ");
		for (file = FILES.FILE_A; file <= FILES.FILE_H; file++) {
			sq = FR2SQ(file, rank);
			if (SqAttacked(sq, COLOURS.BLACK) == BOOL.TRUE) piece = "X";
			else piece = "-";
			line += (" " + piece + " ");
		}
		console.log(line);
	}
	console.log("");
}
function PrMove(move) {
	var MvStr;
	var ff = FilesBrd[FROMSQ(move)];
	var rf = RanksBrd[FROMSQ(move)];
	var ft = FilesBrd[TOSQ(move)];
	var rt = RanksBrd[TOSQ(move)];
	MvStr = String.fromCharCode('a'.charCodeAt() + ff) + String.fromCharCode('1'.charCodeAt() + rf) +
		String.fromCharCode('a'.charCodeAt() + ft) + String.fromCharCode('1'.charCodeAt() + rt)
	var promoted = PROMOTED(move);
	if (promoted != PIECES.EMPTY) {
		var pchar = 'q';
		if (PieceKnight[promoted] == BOOL.TRUE) {
			pchar = 'n';
		} else if (PieceRookQueen[promoted] == BOOL.TRUE && PieceBishopQueen[promoted] == BOOL.FALSE) {
			pchar = 'r';
		} else if (PieceRookQueen[promoted] == BOOL.FALSE && PieceBishopQueen[promoted] == BOOL.TRUE) {
			pchar = 'b';
		}
		MvStr += pchar;
	}
	return MvStr;
}
function ProbePvTable() {
	var index = brd_posKey % PVENTRIES;
	if (brd_PvTable[index].posKey == brd_posKey) {
		return brd_PvTable[index].move;
	}
	return NOMOVE;
}
function PROMOTED(m) { return (((m) >> 20) & 0xF); }
function PrSq(sq) {
	var file = FilesBrd[sq];
	var rank = RanksBrd[sq];
	var sqStr = String.fromCharCode('a'.charCodeAt() + file) + String.fromCharCode('1'.charCodeAt() + rank);
	return sqStr;
}
function Quiescence(alpha, beta) {
	if ((srch_nodes & 2047) == 0) CheckUp();
	srch_nodes++;
	if (IsRepetition() || brd_fiftyMove >= 100) {
		return 0;
	}
	if (brd_ply > MAXDEPTH - 1) {
		return EvalPosition();
	}
	var Score = EvalPosition();
	if (Score >= beta) {
		return beta;
	}
	if (Score > alpha) {
		alpha = Score;
	}
	GenerateCaptures();
	var MoveNum = 0;
	var Legal = 0;
	var OldAlpha = alpha;
	var BestMove = NOMOVE;
	Score = -INFINITE;
	var PvMove = ProbePvTable();
	if (PvMove != NOMOVE) {
		for (MoveNum = brd_moveListStart[brd_ply]; MoveNum < brd_moveListStart[brd_ply + 1]; ++MoveNum) {
			if (brd_moveList[MoveNum] == PvMove) {
				brd_moveScores[MoveNum].score = 2000000;
				break;
			}
		}
	}
	for (MoveNum = brd_moveListStart[brd_ply]; MoveNum < brd_moveListStart[brd_ply + 1]; ++MoveNum) {
		PickNextMove(MoveNum);
		if (MakeMove(brd_moveList[MoveNum]) == BOOL.FALSE) {
			continue;
		}
		Legal++;
		Score = -Quiescence(-beta, -alpha);
		TakeMove();
		if (srch_stop == BOOL.TRUE) return 0;
		if (Score > alpha) {
			if (Score >= beta) {
				if (Legal == 1) {
					srch_fhf++;
				}
				srch_fh++;
				return beta;
			}
			alpha = Score;
			BestMove = brd_moveList[MoveNum];
		}
	}
	if (alpha != OldAlpha) {
		StorePvMove(BestMove);
	}
	return alpha;
}
function RAND_32() { return (Math.floor((Math.random() * 255) + 1) << 23) | (Math.floor((Math.random() * 255) + 1) << 16) | (Math.floor((Math.random() * 255) + 1) << 8) | Math.floor((Math.random() * 255) + 1); }
function RemoveGUIPiece(sq) {
	$(".Piece").each(function (index) {
		if ((RanksBrd[sq] == 7 - Math.round($(this).position().top / 60)) && (FilesBrd[sq] == Math.round($(this).position().left / 60))) {
			$(this).remove();
		}
	});
}
function ResetBoard() {
	var index = 0;
	for (index = 0; index < BRD_SQ_NUM; ++index) {
		brd_pieces[index] = SQUARES.OFFBOARD;
	}
	for (index = 0; index < 64; ++index) {
		brd_pieces[SQ120(index)] = PIECES.EMPTY;
	}
	for (index = 0; index < 14 * 120; ++index) {
		brd_pList[index] = PIECES.EMPTY;
	}
	for (index = 0; index < 2; ++index) {
		brd_material[index] = 0;
	}
	for (index = 0; index < 13; ++index) {
		brd_pceNum[index] = 0;
	}
	brd_side = COLOURS.BOTH;
	brd_enPas = SQUARES.NO_SQ;
	brd_fiftyMove = 0;
	brd_ply = 0;
	brd_hisPly = 0;
	brd_castlePerm = 0;
	brd_posKey = 0;
	brd_moveListStart[brd_ply] = 0;
}
function SearchPosition() {
	var bestMove = NOMOVE;
	var bestScore = -INFINITE;
	var currentDepth = 0;
	var pvNum = 0;
	var line;
	ClearForSearch();
	if (GameController.BookLoaded == BOOL.TRUE) {
		bestMove = BookMove();
		if (bestMove != NOMOVE) {
			$("#OrderingOut").text("Ordering:");
			$("#DepthOut").text("Depth: ");
			$("#ScoreOut").text("Score:");
			$("#NodesOut").text("Nodes:");
			$("#TimeOut").text("Time: 0s");
			$("#BestOut").text("BestMove: " + PrMove(bestMove) + '(Book)');
			srch_best = bestMove;
			srch_thinking = BOOL.FALSE;
			return;
		}
	}
	for (currentDepth = 1; currentDepth <= srch_depth; ++currentDepth) {
		bestScore = AlphaBeta(-INFINITE, INFINITE, currentDepth, BOOL.TRUE);
		if (srch_stop == BOOL.TRUE) break;
		pvNum = GetPvLine(currentDepth);
		bestMove = brd_PvArray[0];
		line = ("Depth:" + currentDepth + " best:" + PrMove(bestMove) + " Score:" + bestScore + " nodes:" + srch_nodes);
		if (currentDepth != 1) {
			line += (" Ordering:" + ((srch_fhf / srch_fh) * 100).toFixed(2) + "%");
		}
		domUpdate_depth = currentDepth;
		domUpdate_move = bestMove;
		domUpdate_score = bestScore;
		domUpdate_nodes = srch_nodes;
		domUpdate_ordering = ((srch_fhf / srch_fh) * 100).toFixed(2);
	}
	$("#BestOut").text("BestMove: " + PrMove(bestMove));
	UpdateDOMStats();
	srch_best = bestMove;
	srch_thinking = BOOL.FALSE;
}
function SetInitialBoardPieces() {
	var sq;
	var sq120;
	var file, rank;
	var rankName;
	var fileName;
	var imageString;
	var pieceFileName;
	var pce;
	ClearAllPieces();
	for (sq = 0; sq < 64; ++sq) {
		sq120 = SQ120(sq);
		pce = brd_pieces[sq120]; // crucial here
		if (GameController.BoardFlipped == BOOL.TRUE) {
			sq120 = MIRROR120(sq120);
		}
		file = FilesBrd[sq120];
		rank = RanksBrd[sq120];
		if (pce >= PIECES.wP && pce <= PIECES.bK) {
			rankName = "rank" + (rank + 1);
			fileName = "file" + (file + 1);
			pieceFileName = "../assets/icons/chess/" + SideChar[PieceCol[pce]] + PceChar[pce].toUpperCase() + ".png";
			imageString = "<image src=\"" + pieceFileName + "\" class=\"Piece " + rankName + " " + fileName + "\"/>";
			$("#ChessBoard").append(imageString);
		}
	}
}
function SetSqSelected(sq) {
	if (GameController.BoardFlipped == BOOL.TRUE) {
		sq = MIRROR120(sq);
	}
	$(".Square").each(function (index) {
		if ((RanksBrd[sq] == 7 - Math.round($(this).position().top / 60)) && (FilesBrd[sq] == Math.round($(this).position().left / 60))) {
			$(this).addClass('SqSelected');
		}
	});
}
function ShowChessMessage(s, ms) {
	$("#GameStatus").text(s);
	if (isdef(ms)) setTimeout(() => $("#GameStatus").text(''), ms)
}
function ShowFenPosition() {
	$("#currentFenSpan").text(BoardToFen());
	let pl = SideChar[brd_side] == 'b' ? 'BLACK (AI)' : 'WHITE (you)';
	mStyle(dTitle, { align: 'left' }); //,bg:'random'});
	dTitle.innerHTML = `<div style='margin-left:78px;width:483px;text-align:center;'>Turn: ${pl}</div>`;
}
function SQ120(sq64) { return Sq64ToSq120[(sq64)]; }
function SQ64(sq120) { return Sq120ToSq64[(sq120)]; }
function SqAttacked(sq, side) {
	var pce;
	var t_sq;
	var index;
	if (side == COLOURS.WHITE) {
		if (brd_pieces[sq - 11] == PIECES.wP || brd_pieces[sq - 9] == PIECES.wP) {
			return BOOL.TRUE;
		}
	} else {
		if (brd_pieces[sq + 11] == PIECES.bP || brd_pieces[sq + 9] == PIECES.bP) {
			return BOOL.TRUE;
		}
	}
	for (index = 0; index < 8; ++index) {
		pce = brd_pieces[sq + KnDir[index]];
		if (pce != SQUARES.OFFBOARD && PieceKnight[pce] == BOOL.TRUE && PieceCol[pce] == side) {
			return BOOL.TRUE;
		}
	}
	for (index = 0; index < 4; ++index) {
		dir = RkDir[index];
		t_sq = sq + dir;
		pce = brd_pieces[t_sq];
		while (pce != SQUARES.OFFBOARD) {
			if (pce != PIECES.EMPTY) {
				if (PieceRookQueen[pce] == BOOL.TRUE && PieceCol[pce] == side) {
					return BOOL.TRUE;
				}
				break;
			}
			t_sq += dir;
			pce = brd_pieces[t_sq];
		}
	}
	for (index = 0; index < 4; ++index) {
		dir = BiDir[index];
		t_sq = sq + dir;
		pce = brd_pieces[t_sq];
		while (pce != SQUARES.OFFBOARD) {
			if (pce != PIECES.EMPTY) {
				if (PieceBishopQueen[pce] == BOOL.TRUE && PieceCol[pce] == side) {
					return BOOL.TRUE;
				}
				break;
			}
			t_sq += dir;
			pce = brd_pieces[t_sq];
		}
	}
	for (index = 0; index < 8; ++index) {
		pce = brd_pieces[sq + KiDir[index]];
		if (pce != SQUARES.OFFBOARD && PieceKing[pce] == BOOL.TRUE && PieceCol[pce] == side) {
			return BOOL.TRUE;
		}
	}
	return BOOL.FALSE;
}
function SqFromAlg(moveAlg) {
	if (moveAlg.length != 2) return SQUARES.NO_SQ;
	if (moveAlg[0] > 'h' || moveAlg[0] < 'a') return SQUARES.NO_SQ;
	if (moveAlg[1] > '8' || moveAlg[1] < '1') return SQUARES.NO_SQ;
	file = moveAlg[0].charCodeAt() - 'a'.charCodeAt();
	rank = moveAlg[1].charCodeAt() - '1'.charCodeAt();
	return FR2SQ(file, rank);
}
function SQOFFBOARD(sq) { if (FilesBrd[sq] == SQUARES.OFFBOARD) return BOOL.TRUE; return BOOL.FALSE; }
function StartChessGame() {
	InitFilesRanksBrd();
	InitSq120To64();
	InitHashKeys();
	InitBoardVars();
	InitMvvLva();
	InitBoardSquares();
	EvalInit();
	srch_thinking = BOOL.FALSE;
	$('#fenIn').val(START_FEN);
	NewGame();
	NewGameAjax();
}
function StartSearch() {
	srch_depth = MAXDEPTH;
	var t = $.now();
	var tt = $('#ThinkTimeChoice').val();
	if (nundef(tt)) tt = 6;
	srch_time = parseInt(tt) * 1000;
	SearchPosition();
	StopThinking();
	if (FLAG_HINT_ONLY) {
		FLAG_HINT_ONLY = false;
		let info = Move2FromTo(srch_best);
		let sq = info.from.sq;
		HintAnimation(sq, 1000);
	} else {
		MakeMove(srch_best);
		MoveGUIPiece(srch_best);
		CheckAndSet();
	}
}
$(document).on('click', '.Piece', function (e) {
	if (srch_thinking == BOOL.FALSE && GameController.PlayerSide == brd_side) {
		if (UserMove.from == SQUARES.NO_SQ)
			UserMove.from = ClickedSquare(e.pageX, e.pageY);
		else
			UserMove.to = ClickedSquare(e.pageX, e.pageY);
		MakeUserMove();
	}
});
$(document).on('click', '.Square', function (e) {
	if (srch_thinking == BOOL.FALSE && GameController.PlayerSide == brd_side && UserMove.from != SQUARES.NO_SQ) {
		UserMove.to = ClickedSquare(e.pageX, e.pageY);
		MakeUserMove();
	}
});
$(document).ajaxComplete(function () { });
function StartThinking() {
	let img = mBy('ThinkingPng');
	show(img);
	mClass(img, 'blinkFast');
	mBy('dShield').style.display = 'block';
}
function StopThinking() {
	let img = mBy('ThinkingPng');
	mClassRemove(img, 'blinkFast');
	hide(img);
	hideShield();
}
function StorePvMove(move) {
	var index = brd_posKey % PVENTRIES;
	brd_PvTable[index].move = move;
	brd_PvTable[index].posKey = brd_posKey;
}
function TakeMove() {
	brd_hisPly--;
	brd_ply--;
	var move = brd_history[brd_hisPly].move;
	var from = FROMSQ(move);
	var to = TOSQ(move);
	if (brd_enPas != SQUARES.NO_SQ) HASH_EP();
	HASH_CA();
	brd_castlePerm = brd_history[brd_hisPly].castlePerm;
	brd_fiftyMove = brd_history[brd_hisPly].fiftyMove;
	brd_enPas = brd_history[brd_hisPly].enPas;
	if (brd_enPas != SQUARES.NO_SQ) HASH_EP();
	HASH_CA();
	brd_side ^= 1;
	HASH_SIDE();
	if ((MFLAGEP & move) != 0) {
		if (brd_side == COLOURS.WHITE) {
			AddPiece(to - 10, PIECES.bP);
		} else {
			AddPiece(to + 10, PIECES.wP);
		}
	} else if ((MFLAGCA & move) != 0) {
		switch (to) {
			case SQUARES.C1: MovePiece(SQUARES.D1, SQUARES.A1); break;
			case SQUARES.C8: MovePiece(SQUARES.D8, SQUARES.A8); break;
			case SQUARES.G1: MovePiece(SQUARES.F1, SQUARES.H1); break;
			case SQUARES.G8: MovePiece(SQUARES.F8, SQUARES.H8); break;
			default: break;
		}
	}
	MovePiece(to, from);
	var captured = CAPTURED(move);
	if (captured != PIECES.EMPTY) {
		AddPiece(to, captured);
	}
	if (PROMOTED(move) != PIECES.EMPTY) {
		ClearPiece(from);
		AddPiece(from, (PieceCol[PROMOTED(move)] == COLOURS.WHITE ? PIECES.wP : PIECES.bP));
	}
}
function ThreeFoldRep() {
	var i = 0, r = 0;
	for (i = 0; i < brd_hisPly; ++i) {
		if (brd_history[i].posKey == brd_posKey) {
			r++;
		}
	}
	return r;
}
function TOSQ(m) { return (((m) >> 7) & 0x7F); }
function UpdateDOMStats() {
	var scoreText = "Score: " + (domUpdate_score / 100).toFixed(2);
	if (Math.abs(domUpdate_score) > MATE - MAXDEPTH) {
		scoreText = "Score: " + "Mate In " + (MATE - Math.abs(domUpdate_score)) + " moves";
	}
	$("#OrderingOut").text("Ordering: " + domUpdate_ordering + "%");
	$("#DepthOut").text("Depth: " + domUpdate_depth);
	$("#ScoreOut").text(scoreText);
	$("#NodesOut").text("Nodes: " + domUpdate_nodes);
	$("#TimeOut").text("Time: " + (($.now() - srch_start) / 1000).toFixed(1) + "s");
}
function UpdateListsMaterial() {
	var piece, sq, index, colour;
	for (index = 0; index < BRD_SQ_NUM; ++index) {
		sq = index;
		piece = brd_pieces[index];
		if (piece != PIECES.OFFBOARD && piece != PIECES.EMPTY) {
			colour = PieceCol[piece];
			brd_material[colour] += PieceVal[piece];
			brd_pList[PCEINDEX(piece, brd_pceNum[piece])] = sq;
			brd_pceNum[piece]++;
		}
	}
}
//#endregion chess

//#region markers
const MarkerText = ['✔️', '❌'];
const MarkerId = { SUCCESS: 0, FAIL: 1 };
var Markers = [];
function clearMarkers() {
	for (const m of Markers) {
		mRemove(m);
	}
	Markers = [];
}
function createMarker(markerId) {
	let divs = document.getElementsByClassName('feedbackMarker');
	let d;
	d = mCreate('div');
	d.innerHTML = MarkerText[markerId]; //>0? '✔️':'❌';
	mClass(d, 'feedbackMarker');
	document.body.appendChild(d);
	Markers.push(d);
	return d;
}
function getParamsForMaPicStyle(desc = 'segoeBlack') {
	desc = desc.toLowerCase();
	switch (desc) {
		case 'twittertext': return { isText: true, isOmoji: false };
		case 'twitterimage': return { isText: false, isOmoji: false };
		case 'openmojitext': return { isText: true, isOmoji: true };
		case 'openmojiimage': return { isText: false, isOmoji: true };
		case 'openmojiblacktext': return { isText: true, isOmoji: 'openmoBlack' };
		case 'segoe': return { isText: true, isOmoji: 'segoe ui emoji' };
		case 'segoeblack': return { isText: true, isOmoji: 'segoe ui symbol' };
		default: return { isText: true, isOmoji: false };
	}
}
function markerFail() { return createMarker(MarkerId.FAIL); }
function markerSuccess() { return createMarker(MarkerId.SUCCESS); }
function mpOver(d, dParent, fz, color, picStyle) {
	let b = getRect(dParent);
	let cx = b.w / 2 + b.x;
	let cy = b.h / 2 + b.y;
	d.style.top = picStyle == 'segoeBlack' ? ((cy - fz * 2 / 3) + 'px') : ((cy - fz / 2) + 'px');
	d.style.left = picStyle == 'segoeBlack' ? ((cx - fz / 3) + 'px') : ((cx - fz * 1.2 / 2) + 'px');
	d.style.color = color;
	d.style.fontSize = fz + 'px';
	d.style.display = 'block';
	let { isText, isOmoji } = getParamsForMaPicStyle(picStyle);
	d.style.fontFamily = isString(isOmoji) ? isOmoji : isOmoji ? 'emoOpen' : 'emoNoto';
	return d;
}
function mRemoveGracefully(elem) {
	mClass(elem, 'aniFastDisappear');
	setTimeout(() => mRemove(elem), 500);
}
function removeMarkers() {
	for (const m of Markers) {
		mRemoveGracefully(m);
	}
	Markers = [];
}
//#endregion markers

//#region menu
function createMenuUi(dParent, keys, clickMenuHandler, itemStyles = {}, hTotal = 600) {
	clearElement(dParent);
	mCenterFlex(dParent);
	mAppend(dParent, createElementFromHTML(`<h1>Choose Game:</h1>`));
	mLinebreak(dParent);
	let dMenuItems = mDiv(dParent, { w: '90%', h: hTotal });
	let games = keys; //isdef(keys)? keys : isdef(U)? jsCopy(U.avGames) : choose(Object.keys(DB.games),10); 
	if (!navigator.onLine) { removeInPlace(games, 'gSayPic'); }
	let items = [];
	let outerStyles = {
		display: 'inline-flex', 'flex-direction': 'column',
		'justify-content': 'center', 'align-items': 'center', 'vertical-align': 'top',
		wmin: 140, hmin: 110, margin: 8, rounding: 6
	};
	copyKeys(itemStyles, outerStyles);
	for (const g of games) {
		let item = { o: DB.games[g], id: g }; iRegister(item, g);
		item.bg = getColorDictColor(item.o.color);
		item.label = capitalize(item.o.friendly);
		item.info = Syms[item.o.logo];
		let d = makeItemDiv(item, {
			outerStyles: outerStyles, ifs: { bg: true },
			picStyles: { fz: 60 },
			showPic: true, showLabels: true, labelBottom: true, handler: clickMenuHandler
		});
		iAdd(item, { div: d });
		mAppend(dMenuItems, d);
		items.push(item);
	}
	if (nundef(G)) return;
	SelectedMenuKey = G.id;
	let selItem = Items[SelectedMenuKey]; //SelectedMenuItem = firstCond(MenuItems, x => x.id == SelectedMenuKey);	//console.log(selItem)
	toggleItemSelection(selItem);
}
function createMenuUiNew(dParent, keys, clickMenuHandler, outerStyles = {},picStyles={}, labelStyles={}, hTotal = 600) {
	clearElement(dParent);
	mCenterFlex(dParent);
	mAppend(dParent, createElementFromHTML(`<h1>Choose Game:</h1>`));
	mLinebreak(dParent);
	let dMenuItems = mDiv(dParent, { w: '90%', h: hTotal });
	let games = keys; //isdef(keys)? keys : isdef(U)? jsCopy(U.avGames) : choose(Object.keys(DB.games),10); 
	if (!navigator.onLine) { removeInPlace(games, 'gSayPic'); }
	let items = [];
	let defaultOuterStyles = {
		display: 'inline-flex', 'flex-direction': 'column',
		'justify-content': 'center', 'align-items': 'center', 'vertical-align': 'top',
		wmin: hTotal/4, hmin: hTotal/6, margin: 8, rounding: 6
	};
	addKeys(defaultOuterStyles, outerStyles);
	let defaultPicStyles = {fz:hTotal/10,'line-height':hTotal/10 + 'px'};
	addKeys(defaultPicStyles,picStyles);
	for (const g of games) {
		let item = { o: DB.games[g], id: g }; iRegister(item, g);
		item.bg = getColorDictColor(item.o.color);
		item.label = capitalize(item.o.friendly);
		item.info = Syms[item.o.logo];
		let d = makeItemDiv(item, {
			outerStyles: outerStyles, ifs: { bg: true },
			picStyles: picStyles,
			labelStyles: labelStyles,
			showPic: true, showLabels: true, labelBottom: true, handler: clickMenuHandler
		});
		iAdd(item, { div: d });
		mAppend(dMenuItems, d);
		items.push(item);
	}
	if (nundef(G)) return;
	SelectedMenuKey = G.id;
	let selItem = Items[SelectedMenuKey]; //SelectedMenuItem = firstCond(MenuItems, x => x.id == SelectedMenuKey);	//console.log(selItem)
	toggleItemSelection(selItem);
}
//#endregion menu

//#region mGraph
class AGraph {
	constructor() {
		this.init(...arguments);
		this.posDict = {};
	}
	init() {
		let defOptions = {
			maxZoom: 1,
			minZoom: .001,
			motionBlur: false,
			zoomingEnabled: false,
			userZoomingEnabled: false,
			panningEnabled: false,
			userPanningEnabled: false,
			boxSelectionEnabled: false,
			layout: { name: 'preset' },
			elements: [],
		};
		this.cy = cytoscape(defOptions);
	}
	clear() { this.cy.destroy(); }
	getComponents() { return this.cy.elements().components(); }
	getComponentIds() { return this.cy.elements().components().map(x => x.id()); }
	getCommonEdgeId(nid1, nid2) { return nid1 + '_' + nid2; }
	getNumComponents() { return this.cy.elements().components().length; }
	getNode(id) { return this.cy.getElementById(id); }
	getEdge(id) { return this.cy.getElementById(id); }
	getNodes() { return this.cy.nodes(); }
	getNodeIds() { return this.cy.nodes().map(x => x.id()); }
	getNodeData() { return this.cy.nodes().map(x => x.data()); }
	getNodePositions() { return this.cy.nodes.map(x => x.position()); }
	getEdges() { return this.cy.edges(); }
	getEdgeIds() { return this.cy.edges().map(x => x.id()); }
	getPosition(id) {
		let node = this.getNode(id);
		let pos = node.renderedPosition();
		return pos; //this.cy.getElementById(id).renderedPosition();
	}
	getSize(id) {
		let node = this.getNode(id);
		let pos = node.bb();//renderedBoundingBox();
		return pos; //this.cy.getElementById(id).renderedPosition();
	}
	getProp(id, prop) { return this.cy.getElementById(id).data(prop); }
	getDegree(id) { return this.cy.getElementById(id).degree(); }
	getNodeWithMaxDegree(idlist) {
		if (nundef(idlist)) idlist = this.cy.elements().filter('node').map(x => x.data().id);
		let imax = arrMinMax(idlist, x => this.getDegree(x)).imax;
		let id = idlist[imax];
		return id;
	}
	getShortestPathsFrom(id) { let res = this.cy.elements().dijkstra('#' + id); return res; }
	getShortestPathFromTo(nid1, nid2) {
		let funcs = this.dijkstra = this.getShortestPathsFrom(nid1);
		let path = funcs.pathTo('#' + nid2);
		return path;
	}
	getLengthOfShortestPath(nid1, nid2) {
		let funcs = this.dijkstra = this.getShortestPathsFrom(nid1);
		let len = funcs.distanceTo('#' + nid2);
		return len;
	}
	setPositionData(prop = 'center') {
		let ids = this.getNodeIds();
		for (const id of ids) {
			let pos = this.getProp(id, prop);
			if (isdef(pos)) this.setPosition(id, pos.x, pos.y);
			else return false;
		}
		return true;
	}
	sortNodesByDegree(idlist, descending = true) {
		if (nundef(idlist)) idlist = this.cy.nodes.map(x => x.data().id);
		let nodes = idlist.map(x => this.getNode(x));
		for (const n of nodes) {
			n.degree = this.getDegree(n.id());
		}
		if (descending) sortByDescending(nodes, 'degree'); else sortBy(nodes, 'degree');
		return nodes;
	}
	storeCurrentPositions(prop = 'center') {
		for (const n of this.getNodes()) {
			let id = n.id();
			let pos = this.getPosition(id);
			this.setProp(id, prop, pos);
		}
	}
	addNode(data, coords) {
		if (nundef(data)) data = {};
		if (nundef(data.id)) data.id = getFruid();
		if (isdef(coords)) {
			coords.x -= this.cy.pan().x;
			coords.y -= this.cy.pan().y;
		} else { coords = { x: 0, y: 0 }; }
		var ele = this.cy.add({
			group: 'nodes',
			data: data,
			position: coords
		});
		return ele.id();
	}
	addNodes(n, datalist, coordlist) {
		let ids = [];
		if (nundef(datalist)) datalist = new Array(n).map(x => ({ id: getFruid() }));
		if (nundef(coordlist)) coordlist = new Array(n).map(x => ({ coords: { x: 0, y: 0 } }));
		for (let i = 0; i < n; i++) {
			let id = this.addNode(datalist[i], coordlist[i]);
			ids.push(id);
		}
		return ids;
	}
	addEdge(nid1, nid2, data) {
		if (nundef(data)) data = {};
		data.id = this.getCommonEdgeId(nid1, nid2);
		data.source = nid1;
		data.target = nid2;
		var ele = this.cy.add({
			group: 'edges',
			data: data,
		});
		return ele.id();
	}
	addEdges(nOrNodePairList) {
		if (isNumber(nOrNodePairList)) {
			let nids = this.getNodeIds();
			let prod = arrPairs(nids);
			nOrNodePairList = choose(prod, nOrNodePairList);
		}
		let res = [];
		for (const pair of nOrNodePairList) {
			res.push(this.addEdge(pair[0], pair[1]));
		}
		return res;
	}
	removeNode(node) { this.removeElement(node); return this.getNodeIds(); }
	removeEdge(edge) { this.removeElement(edge); return this.getEdgeIds(); }
	removeElement(ne) { if (!isString(ne)) ne = ne.id(); this.cy.getElementById(ne).remove(); }
	setPosition(id, x, y) { this.cy.getElementById(id).position({ x: x, y: y }); }
	setProp(id, prop, val) { this.cy.getElementById(id).data(prop, val); }
}
class UIGraph extends AGraph {
	init(dParent, styles = {}) {
		let defOptions = {
			maxZoom: 1,
			minZoom: .001,
			motionBlur: false,
			wheelSensitivity: 0.05,
			zoomingEnabled: true,
			userZoomingEnabled: true,
			panningEnabled: true,
			userPanningEnabled: true,
			boxSelectionEnabled: false,
			elements: [],
		};
		this.id = getUID();
		let dOuter = mDiv(dParent, styles.outer, this.id);//, 'Outer graph');
		let gStyles = valf(styles.inner, { w: 640, h: 420 });
		let dContainer = mDiv(dOuter, { position: 'relative', w: gStyles.w, h: gStyles.h, align: 'left' });
		let styleDict = {
			node: { 'label': 'data(label)', width: 25, height: 25, 'background-color': 'red', color: "#fff", "text-valign": "center", "text-halign": "center" },
			edge: { width: 2, 'line-color': 'silver', 'curve-style': 'haystack', },
			'node.high': { 'background-color': 'yellow' },
			'node.trans': { opacity: '0.5' },
		}
		for (const ks of ['node', 'edge', 'node.high', 'node.trans']) {
			if (isdef(styles[ks])) {
				let mStyles = styles[ks];
				let cyStyles = translateStylesToCy(mStyles, ks);
				copyKeys(cyStyles, styleDict[ks]);
			}
		}
		let cyStyle = [];
		for (const k in styleDict) { cyStyle.push({ selector: k, style: styleDict[k] }); }
		let options = { container: dContainer, style: cyStyle };
		copyKeys(options, defOptions);
		this.cy = cytoscape(defOptions);
		iAdd(this, { div: dOuter, dCy: dContainer });
	}
	hex(rows, cols, wCell, hCell) {
		let centers = this.hexPositions = getCentersFromRowsCols('hex', rows, cols, wCell, hCell)[0];
		this.storePositions('hex', centers);
		this.storePositions('preset', centers);
		this.retrievePositions('hex');
		this.cy.layout({ name: 'preset' }).run();
		this.center();
	}
	hex1(rows, cols, wCell, hCell) {
		let centers = this.hexPositions = getCentersFromRowsCols('hex1', rows, cols, wCell, hCell)[0];
		this.storePositions('hex1', centers);
		this.storePositions('preset', centers);
		let nodes = this.getNodes();
		for (let i = 0; i < nodes.length; i++) {
			let node = nodes[i];
			let center = centers[i];
			node.data('center', center);
		}
		this.retrievePositions('hex1');
		this.cy.layout({ name: 'preset' }).run();
		this.center();
	}
	breadthfirst() { this.cy.layout({ name: 'breadthfirst', animate: true }).run(); }
	circle() { this.cy.layout({ name: 'circle', animate: 'end' }).run(); }
	concentric() { this.cy.layout({ name: 'concentric', animate: true }).run(); }
	comcola() {
		let defaults = {
			name: 'cola',
			animate: true, // whether to show the layout as it's running
			refresh: 1, // number of ticks per frame; higher is faster but more jerky
			maxSimulationTime: 4000, // max length in ms to run the layout
			ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
			fit: true, // on every layout reposition of nodes, fit the viewport
			padding: 30, // padding around the simulation
			boundingBox: undefined, //{x1:0,y1:0,x2:200,y2:200,w:200,h:200}, //undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
			nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node
			ready: function () { }, // on layoutready
			stop: function () { }, // on layoutstop
			randomize: false, // use random node positions at beginning of layout
			avoidOverlap: true, // if true, prevents overlap of node bounding boxes
			handleDisconnected: true, // if true, avoids disconnected components from overlapping
			convergenceThreshold: 0.01, // when the alpha value (system energy) falls below this value, the layout stops
			nodeSpacing: function (node) { return 10; }, // extra spacing around nodes
			flow: undefined, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
			alignment: undefined, // relative alignment constraints on nodes, e.g. function( node ){ return { x: 0, y: 1 } }
			gapInequalities: undefined, // list of inequality constraints for the gap between the nodes, e.g. [{"axis":"y", "left":node1, "right":node2, "gap":25}]
			edgeLength: undefined, // sets edge length directly in simulation
			edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
			edgeJaccardLength: undefined, // jaccard edge length in simulation
			unconstrIter: undefined, // unconstrained initial layout iterations
			userConstIter: undefined, // initial layout iterations with user-specified constraints
			allConstIter: undefined, // initial layout iterations with all constraints including non-overlap
			infinite: false // overrides all other options for a forces-all-the-time mode
		};
		let options = {
			name: 'cola',
			convergenceThreshold: 100,
			boundingBox: { x1: 20, y1: 20, w: 200, h: 200 },
		};
		copyKeys(options, defaults);
		console.log(defaults.boundingBox)
		this.cy.layout(defaults).run();
	}
	cola() { this.cy.layout({ name: 'cola' }).run(); }
	cose() { this.cy.layout({ name: 'cose', animate: 'end' }).run(); }
	euler() { this.cy.layout({ name: 'euler', fit: true, padding: 25, animate: 'end' }).run(); }
	fcose() {
		var defaultOptions = {
			quality: "default",
			randomize: true,
			animate: true,
			animationDuration: 500,
			animationEasing: undefined,
			fit: true,
			padding: 30,
			nodeDimensionsIncludeLabels: false,
			uniformNodeDimensions: false,
			packComponents: true,
			step: "all",
			/* spectral layout options */
			samplingType: true,
			sampleSize: 25,
			nodeSeparation: 75,
			piTol: 0.0000001,
			/* incremental layout options */
			nodeRepulsion: node => 4500,
			idealEdgeLength: edge => 50,
			edgeElasticity: edge => 0.45,
			nestingFactor: 0.1,
			numIter: 2500,
			tile: true,
			tilingPaddingVertical: 10,
			tilingPaddingHorizontal: 10,
			gravity: 0.25,
			gravityRangeCompound: 1.5,
			gravityCompound: 1.0,
			gravityRange: 3.8,
			initialEnergyOnIncremental: 0.3,
			/* constraint options */
			fixedNodeConstraint: undefined,
			alignmentConstraint: undefined,
			relativePlacementConstraint: undefined,
			/* layout event callbacks */
			ready: () => { }, // on layoutready
			stop: () => { }, // on layoutstop
			name: 'fcose',
		};
		this.cy.layout(defaultOptions).run(); //{name: 'fcose'}).run(); 
	}
	gridLayout() { this.cy.layout({ name: 'grid', animate: true }).run(); }
	presetLayout_dep() {
		let hasCenterProp = this.setPositionData();
		if (!hasCenterProp) {
			console.log('no positions are preset: store first!');
		} else {
			let options = {
				name: 'preset',
				positions: undefined, //function (n){return this.getNode(n.id()).data().center;}, //this.posDict, //undefined, // undefined, // map of (node id) => (position obj); or function(node){ return somPos; }
				zoom: undefined, // the zoom level to set (prob want fit = false if set)
				pan: undefined, // the pan level to set (prob want fit = false if set)
				fit: true, // whether to fit to viewport
				padding: 30, // padding on fit
				animate: true, // whether to transition the node positions
				animationDuration: 500, // duration of animation in ms if enabled
				animationEasing: undefined, // easing of animation if enabled
				animateFilter: function (node, i) { return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
				ready: undefined, // callback on layoutready
				stop: undefined, // callback on layoutstop
				transform: function (node, position) { return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
			};
			this.cy.layout(options);
			this.reset();
		}
	}
	presetLayout() {
		this.retrievePositions('prest');
		this.cy.layout({ name: 'preset' }).run();
		this.center();
	}
	randomLayout() { this.cy.layout({ name: 'random', animate: 'true' }).run(); }
	klay() {
		let klayDefaults = {
			addUnnecessaryBendpoints: false, // Adds bend points even if an edge does not change direction.
			aspectRatio: 1.6, // The aimed aspect ratio of the drawing, that is the quotient of width by height
			borderSpacing: 20, // Minimal amount of space to be left to the border
			compactComponents: false, // Tries to further compact components (disconnected sub-graphs).
			crossingMinimization: 'LAYER_SWEEP', // Strategy for crossing minimization.
			/* LAYER_SWEEP The layer sweep algorithm iterates multiple times over the layers, trying to find node orderings that minimize the number of crossings. The algorithm uses randomization to increase the odds of finding a good result. To improve its results, consider increasing the Thoroughness option, which influences the number of iterations done. The Randomization seed also influences results.
			INTERACTIVE Orders the nodes of each layer by comparing their positions before the layout algorithm was started. The idea is that the relative order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive layer sweep algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
			cycleBreaking: 'GREEDY', // Strategy for cycle breaking. Cycle breaking looks for cycles in the graph and determines which edges to reverse to break the cycles. Reversed edges will end up pointing to the opposite direction of regular edges (that is, reversed edges will point left if edges usually point right).
			/* GREEDY This algorithm reverses edges greedily. The algorithm tries to avoid edges that have the Priority property set.
			INTERACTIVE The interactive algorithm tries to reverse edges that already pointed leftwards in the input graph. This requires node and port coordinates to have been set to sensible values.*/
			direction: 'UNDEFINED', // Overall direction of edges: horizontal (right / left) or vertical (down / up)
			/* UNDEFINED, RIGHT, LEFT, DOWN, UP */
			edgeRouting: 'ORTHOGONAL', // Defines how edges are routed (POLYLINE, ORTHOGONAL, SPLINES)
			edgeSpacingFactor: 0.5, // Factor by which the object spacing is multiplied to arrive at the minimal spacing between edges.
			feedbackEdges: false, // Whether feedback edges should be highlighted by routing around the nodes.
			fixedAlignment: 'NONE', // Tells the BK node placer to use a certain alignment instead of taking the optimal result.  This option should usually be left alone.
			/* NONE Chooses the smallest layout from the four possible candidates.
			LEFTUP Chooses the left-up candidate from the four possible candidates.
			RIGHTUP Chooses the right-up candidate from the four possible candidates.
			LEFTDOWN Chooses the left-down candidate from the four possible candidates.
			RIGHTDOWN Chooses the right-down candidate from the four possible candidates.
			BALANCED Creates a balanced layout from the four possible candidates. */
			inLayerSpacingFactor: 1.0, // Factor by which the usual spacing is multiplied to determine the in-layer spacing between objects.
			layoutHierarchy: false, // Whether the selected layouter should consider the full hierarchy
			linearSegmentsDeflectionDampening: 0.3, // Dampens the movement of nodes to keep the diagram from getting too large.
			mergeEdges: false, // Edges that have no ports are merged so they touch the connected nodes at the same points.
			mergeHierarchyCrossingEdges: true, // If hierarchical layout is active, hierarchy-crossing edges use as few hierarchical ports as possible.
			nodeLayering: 'NETWORK_SIMPLEX', // Strategy for node layering.
			/* NETWORK_SIMPLEX This algorithm tries to minimize the length of edges. This is the most computationally intensive algorithm. The number of iterations after which it aborts if it hasn't found a result yet can be set with the Maximal Iterations option.
			LONGEST_PATH A very simple algorithm that distributes nodes along their longest path to a sink node.
			INTERACTIVE Distributes the nodes into layers by comparing their positions before the layout algorithm was started. The idea is that the relative horizontal order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive node layering algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
			nodePlacement: 'BRANDES_KOEPF', // Strategy for Node Placement
			/* BRANDES_KOEPF Minimizes the number of edge bends at the expense of diagram size: diagrams drawn with this algorithm are usually higher than diagrams drawn with other algorithms.
			LINEAR_SEGMENTS Computes a balanced placement.
			INTERACTIVE Tries to keep the preset y coordinates of nodes from the original layout. For dummy nodes, a guess is made to infer their coordinates. Requires the other interactive phase implementations to have run as well.
			SIMPLE Minimizes the area at the expense of... well, pretty much everything else. */
			randomizationSeed: 1, // Seed used for pseudo-random number generators to control the layout algorithm; 0 means a new seed is generated
			routeSelfLoopInside: false, // Whether a self-loop is routed around or inside its node.
			separateConnectedComponents: true, // Whether each connected component should be processed separately
			spacing: 20, // Overall setting for the minimal amount of space to be left between objects
			thoroughness: 7 // How much effort should be spent to produce a nice layout..
		};
		var options = {
			nodeDimensionsIncludeLabels: false, // Boolean which changes whether label dimensions are included when calculating node dimensions
			fit: true, // Whether to fit
			padding: 20, // Padding on fit
			animate: true, // Whether to transition the node positions
			animateFilter: function (node, i) { return true; }, // Whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
			animationDuration: 500, // Duration of animation in ms if enabled
			animationEasing: undefined, // Easing of animation if enabled
			transform: function (node, pos) { return pos; }, // A function that applies a transform to the final node position
			ready: this.reset.bind(this), // Callback on layoutready
			stop: undefined, // Callback on layoutstop
			klay: {
				addUnnecessaryBendpoints: false, // Adds bend points even if an edge does not change direction.
				aspectRatio: 1.6, // The aimed aspect ratio of the drawing, that is the quotient of width by height
				borderSpacing: 20, // Minimal amount of space to be left to the border
				compactComponents: false, // Tries to further compact components (disconnected sub-graphs).
				crossingMinimization: 'LAYER_SWEEP', // Strategy for crossing minimization.
				cycleBreaking: 'GREEDY', // Strategy for cycle breaking. Cycle breaking looks for cycles in the graph and determines which edges to reverse to break the cycles. Reversed edges will end up pointing to the opposite direction of regular edges (that is, reversed edges will point left if edges usually point right).
				direction: 'UNDEFINED', // Overall direction of edges: /* UNDEFINED, RIGHT, LEFT, DOWN, UP */
				edgeRouting: 'ORTHOGONAL', // Defines how edges are routed (POLYLINE, ORTHOGONAL, SPLINES)
				edgeSpacingFactor: 0.5, // Factor by which the object spacing is multiplied to arrive at the minimal spacing between edges.
				feedbackEdges: false, // Whether feedback edges should be highlighted by routing around the nodes.
				fixedAlignment: 'NONE', // node placer alignment: NONE | LEFTUP | RIGHTUP | LEFTDOWN | RIGHTDOWN | BALANCED
				inLayerSpacingFactor: 1.0, // Factor by which the usual spacing is multiplied to determine the in-layer spacing between objects.
				layoutHierarchy: false, // Whether the selected layouter should consider the full hierarchy
				linearSegmentsDeflectionDampening: 0.3,// 0.3, // Dampens the movement of nodes to keep the diagram from getting too large.
				mergeEdges: false, // Edges that have no ports are merged so they touch the connected nodes at the same points.
				mergeHierarchyCrossingEdges: true, // If hierarchical layout is active, hierarchy-crossing edges use as few hierarchical ports as possible.
				nodeLayering: 'NETWORK_SIMPLEX', // Strategy for node layering NETWORK_SIMPLEX (expensive!) | LONGEST_PATH | INTERACTIVE comparing their positions before the layout algorithm was started. The idea is that the relative horizontal order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive node layering algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
				nodePlacement: 'INTERACTIVE', // Strategy for Node Placement BRANDES_KOEPF | LINEAR_SEGMENTS | INTERACTIVE | SIMPLE
				/* BRANDES_KOEPF Minimizes the number of edge bends at the expense of diagram size: diagrams drawn with this algorithm are usually higher than diagrams drawn with other algorithms.
				LINEAR_SEGMENTS Computes a balanced placement.
				INTERACTIVE Tries to keep the preset y coordinates of nodes from the original layout. For dummy nodes, a guess is made to infer their coordinates. Requires the other interactive phase implementations to have run as well.
				SIMPLE Minimizes the area at the expense of... well, pretty much everything else. */
				randomizationSeed: 1, // Seed used for pseudo-random number generators to control the layout algorithm; 0 means a new seed is generated
				routeSelfLoopInside: false, // Whether a self-loop is routed around or inside its node.
				separateConnectedComponents: true, // Whether each connected component should be processed separately
				spacing: 20, // Overall setting for the minimal amount of space to be left between objects
				thoroughness: 3 // How much effort should be spent to produce a nice layout..
			},
			name: 'klay',
			priority: function (edge) { return null; }, // Edges with a non-nil value are skipped when greedy edge cycle breaking is enabled
		};
		this.cy.layout(options).run();
	}
	retrievePositions(key) {
		if (nundef(key)) key = 'prest';
		let di = this.posDict[key];
		for (const n of this.getNodes()) {
			let id = n.id();
			let pos = di[id];
			if (isdef(pos)) this.setPosition(id, pos.x, pos.y);
		}
	}
	storePositions(key, poslist = []) {
		if (nundef(key)) key = 'prest';
		this.posDict[key] = {};
		let i = 0;
		for (const n of this.getNodes()) {
			let id = n.id();
			let pos = valf(poslist[i], this.getPosition(id));
			i += 1;
			this.posDict[key][id] = pos;
		}
	}
	storeSizes(key, poslist = []) {
		if (nundef(key)) key = 'size';
		this.posDict[key] = {};
		let i = 0;
		for (const n of this.getNodes()) {
			let id = n.id();
			let pos = valf(poslist[i], this.getSize(id));
			i += 1;
			this.posDict[key][id] = pos;
		}
	}
	fit() { this.cy.fit(); }
	center() { this.cy.center(); } //console.log('bb:', this.cy.elements().bb()); }
	reset() { this.pan0(); this.zoom1(); this.center(); this.fit(); }
	pan0() { this.cy.pan({ x: 0, y: 0 }); }
	zoom1() { this.cy.zoom(1); }
	isPan() { return this.cy.panningEnabled(); }
	isZoom() { return this.cy.zoomingEnabled(); }
	enablePanZoom() { this.pan(true); this.zoom(true); }
	pan(isOn, reset = true) {
		this.cy.panningEnabled(isOn);
		this.cy.userPanningEnabled(isOn);
		if (!isOn && reset) { this.pan0(); this.center(); }
	}
	zoom(isOn, minZoom = .25, maxZoom = 1, reset = true) {
		this.cy.zoomingEnabled(isOn);
		this.cy.userZoomingEnabled(isOn);
		if (!isOn && reset) { this.zoom1(); this.center(); }
		else if (isOn) { this.cy.minZoom(minZoom); this.cy.maxZoom(maxZoom); }
	}
	setSizeToContent() {
		this.cy.zoomingEnabled(false);
		this.updateBounds();
	}
	updateBounds() {
		var bounds = this.cy.elements().boundingBox();
		let dContainer = this.live.dCy;
		dContainer.css('height', bounds.h + 100);
		dContainer.css('width', bounds.w + 100);
		this.cy.center();
		this.cy.resize();
		dContainer.cytoscapeEdgehandles('resize');
	}
	enableDD() { this.enableDragging(); }
	disableDD() { this.disableDragging(); }
	enableDragging() { this.cy.nodes().grabify(); }
	disableDragging() { this.cy.nodes().ungrabify(); }
	showGraph() { }
	showControls(dWhere, lWhich) {
		if (!this.hasControls) this.addLayoutControls(dWhere, lWhich);
		if (nundef(dWhere)) dWhere = iDiv(this);
	}
	showExtent() { let bb = this.cy.elements().bb(); console.log('graph size:', bb.w, bb.h); }
	showSize() { this.showExtent(); }
	hideGraph() { }
	hideControls() { }
	mount() { }
	unmount() { }
	closeLayoutControls() { if (isdef(this.sb)) hide(this.sb); }
	addLayoutControls(dParent, buttonlist) {
		if (nundef(dParent)) dParent = iDiv(this);
		let buttons = {
			BFS: mButton('BFS', () => this.breadthfirst(), dParent, {}, ['tbb']),
			circle: mButton('circle', () => this.circle(), dParent, {}, ['tbb']),
			CC: mButton('CC', () => this.concentric(), dParent, {}, ['tbb']),
			cola: mButton('cola', () => this.comcola(), dParent, {}, ['tbb']),
			cose: mButton('cose', () => this.cose(), dParent, {}, ['tbb']),
			euler: mButton('euler', () => this.euler(), dParent, {}, ['tbb']),
			fcose: mButton('fcose', () => this.fcose(), dParent, {}, ['tbb']),
			grid: mButton('grid', () => this.gridLayout(), dParent, {}, ['tbb']),
			klay: mButton('klay', () => this.klay(), dParent, {}, ['tbb']),
			prest: mButton('prest', () => this.presetLayout(), dParent, {}, ['tbb']),
			rand: mButton('rand', () => this.randomLayout(), dParent, {}, ['tbb']),
			center: mButton('center', () => this.center(), dParent, {}, ['tbb']),
			fit: mButton('fit', () => this.fit(), dParent, {}, ['tbb']),
			reset: mButton('reset', () => this.reset(), dParent, {}, ['tbb']),
			show: mButton('show', () => this.showGraph(), dParent, {}, ['tbb']),
			hide: mButton('hide', () => this.hideGraph(), dParent, {}, ['tbb']),
			store: mButton('store', () => this.storeCurrentPositions(), dParent, {}, ['tbb']),
		};
		for (const b in buttons) {
			if (isdef(buttonlist) && !buttonlist.includes(b)) hide(buttons[b]);
		}
		return buttons;
	}
	addVisual(dParent, styles = {}) {
		if (this.hasVisual) return;
		this.hasVisual = true;
		this.id = nundef(dParent.id) ? getUID() : dParent.id;
		let styleDict = {
			node: { 'width': 25, 'height': 25, 'background-color': 'red', "color": "#fff", 'label': 'data(id)', "text-valign": "center", "text-halign": "center", },
			edge: { 'width': 2, 'line-color': 'silver', 'curve-style': 'haystack', },
			'node.highlight': { 'background-color': 'yellow' },
			'node.trans': { 'opacity': '0.5' },
		}
		for (const ks of ['node', 'edge', 'node.highlight', 'node.trans']) {
			if (isdef(styles[ks])) {
				for (const k in styles[ks]) {
					let [prop, val] = translateToCssStyle(k, styles[ks][k], false);
					styleDict[ks][prop] = val;
				}
			}
		}
		let cyStyle = [];
		for (const k in styleDict) { cyStyle.push({ selector: k, style: styleDict[k] }); }
		let size = getSize(dParent);
		let d1 = mDiv(dParent, { position: 'relative', bg: 'green', w: size.w, left: 0, top: 0, h: size.h, align: 'left' });
		this.cy.mount(d1);
		this.cy.style(cyStyle);
		this.enablePanZoom();
		iAdd(this, { div: dParent, dCy: d1 });
	}
	nodeEvent(evname, handler) { this.cy.on(evname, 'node', ev => handler(ev.target)); }
	mStyle(elid, styles, group = 'node') {
		if (isString(elid)) elid = this.cy.getElementById(elid);
		let di = translateStylesToCy(styles, group);
		for (const k in di) {
			elid.style(k, di[k]);
		}
	}
	setLabel(id, label, styles) {
		let ele = this.cy.getElementById(id);
		ele.data('label', label);
		this.mStyle(id, styles, isdef(this.getNode(id)) ? 'node' : 'edge');
	}
	setStyle(elid, prop, val) {
		if (isString(elid)) elid = this.cy.getElementById(elid);
		elid.style(prop, val);
	}
	setClass(elid, className) {
		if (isString(elid)) elid = this.cy.getElementById(elid);
		elid.class(className);
	}
}
function applyStyles(g, id, styles) { g.mStyle(id, styles, isdef(g.getNode(id)) ? 'node' : 'edge'); }
function setSymLabel(g, id, key, styles = {}) {
	if (nundef(Syms[key])) return;
	let info = Syms[key];
	console.log('family', info.family);
	g.setLabel(id, info.text, addKeys({ fz: 40, family: info.family }, styles));
}
//#endregion mGraph

//#region speech
const MASTERVOLUME = 0.1;
const germanNumbers = {
	ein: 1, eins: 1, zwei: 2, 1: 'eins', 2: 'zwei', 3: 'drei', drei: 3, vier: 4, 4: 'vier', 5: 'fuenf', fuenf: 5, sechs: 6, 6: 'sechs', sex: 6,
	sieben: 7, 7: 'sieben', 8: 'acht', acht: 8, 9: 'neun', neun: 9, zehn: 10, elf: 11, zwoelf: 12, zwanzig: 20, dreissig: 30,
	10: 'zehn', 11: 'elf', 12: 'zwoelf', 20: 'zwanzig', 30: 'dreissig', vierzig: 40, fuenfzig: 50, 40: 'vierzig', 50: 'fuenfzig'
};
var RecogOutput = false;
var RecogOutputError = true;
var RecogHighPriorityOutput = true;
var SpeakerOutput = false;
var MicrophoneUi;
var SessionId;
class SpeechAPI {
	constructor(lang) {
		this.recorder = new Recorder(lang);
		this.speaker = new Speaker(lang);
		SessionId = Date.now();
	}
	testRecorder() {
		this.recorder.start();
	}
	train() {
	}
	setLanguage(lang) {
		this.speaker.setLanguage(lang);
		this.recorder.setLanguage(lang);
	}
	isSpeakerRunning() { return this.speaker.isRunning; }
	startRecording(lang, callback) {
		this.recorder.isCancelled = false;
		this.recorder.callback = callback;
		this.recorder.setLanguage(lang);
		this.recorder.start();
	}
	stopRecording() {
		this.recorder.isCancelled = true;
		this.recorder.stop();
	}
	say(text, r = .5, p = .8, v = MASTERVOLUME, voicekey, callback, lang) {
		if (isdef(lang)) this.speaker.setLanguage(lang);
		this.speaker.enq(arguments);
		this.speaker.deq();
	}
	stopSpeaking() {
		this.speaker.clearq();
	}
}
class Recorder {
	constructor(lang) {
		let rec = this.rec = new webkitSpeechRecognition();
		rec.continuous = true;
		rec.interimResults = true;
		rec.maxAlternatives = 5;
		this.setLanguage(lang);
		this.isRunning = false;
		this.isCancelled = false;
		this.result = null;
		this.isFinal = null;
		this.confidence = null;
		this.callback = null;
		let genHandler = (ev, name) => {
			if (RecogOutput) console.log('recorder', name, 'isCancelled', this.isCancelled, 'isRunning', this.isRunning);
		}
		rec.onerror = ev => {
			genHandler(ev, 'error');
			if (ev.error == 'network') {
				alert('no internet connection: Speech Recognition is not available! (error:'+ev.error+')');
				RecognitionAvailable = false;
			} //else {
			if (RecogOutputError) console.error(ev);
			this.stop();
		};
		rec.onstart = ev => {
			genHandler(ev, 'started');
			if (!this.isCancelled) this.isRunning = true;
		};
		rec.onresult = ev => {
			genHandler(ev, 'result!');
			if (!this.isCancelled) this.processResult(ev);
		};
		rec.onend = ev => {
			genHandler(ev, 'ended');
			if (!this.isCancelled && this.callback) {
				this.callback(this.isFinal, this.result, this.confidence, SessionId);
			}
			this.isCancelled = this.isRunning = false;
			this.callback = null;
		};
	}
	processResult(ev) {
		let res = ev.results[0];
		this.isFinal = res.isFinal;
		this.result = res[0].transcript;
		this.confidence = res[0].confidence;
		if (this.isFinal) {
			this.stop();
		}
	}
	setLanguage(lang) { this.rec.lang = (lang == 'E' ? 'en-US' : 'de-DE'); }
	start() {
		MicrophoneShow();
		setTimeout(() => this.rec.start(), 10);
	}
	stop() {
		MicrophoneHide();
		setTimeout(() => this.rec.stop(), 10);
	}
	getLastResult() {
		return { isFinal: this.isFinal, result: this.result, confidence: this.confidence };
	}
}
class Speaker {
	static get VOICES() {
		return {
			david: 'Microsoft David - English (United States)', //'Microsoft David Desktop - English',
			mark: 'Microsoft Mark - English (United States)',
			austria: 'Microsoft Michael - German (Austria)',
			zira: 'Microsoft Zira Desktop - English',
			us: 'Google US English',
			ukFemale: 'Google UK English Female',
			ukMale: 'Google UK English Male',
			deutsch: 'Google Deutsch',
			spanish: 'Google español',
			D: 'Google Deutsch',
			S:'Google español',
			F: 'Google français',
			french: 'Google français',
			C: 'Google 日本語',
			E: 'Google US English',
		};
	}
	constructor(lang) {
		this.lang = lang;
		this.q = [];
		this.isRunning = false;
		let awaitVoices = new Promise(resolve =>
			speechSynthesis.onvoiceschanged = resolve)
			.then(this.initVoices.bind(this));
	}
	initVoices() {
		this.voices = speechSynthesis.getVoices().sort(function (a, b) {
			const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
			if (aname < bname) return -1;
			else if (aname == bname) return 0;
			else return +1;
		});
	}
	setLanguage(lang) { this.lang = lang; }
	enq(args) { this.q.push(args); }
	deq() {
		if (nundef(this.voices)){
			setTimeout(this.deq.bind(this),500);
		}
		else if (!isEmpty(this.q)) {
			let args = this.q.pop();
			this.utter(...args);
		} else {
			this.isRunning = false;
		}
	}
	clearq() {
		this.q = [];
	}
	utter(text, r = .5, p = .8, v = MASTERVOLUME, voicekey, callback = null) {
		speechSynthesis.cancel();
		var u = new SpeechSynthesisUtterance();
		let [vkey, voice] = this.findSuitableVoice(text, voicekey);
		u.text = sepWords(text, vkey);// 'Hi <silence msec="2000" /> Flash!'; //text.toLowerCase();
		u.rate = r;
		u.pitch = p;
		u.volume = v;
		u.voice = voice;
		u.onend = ev => {
			if (isdef(callback)) callback();
			this.deq();
		};
		this.isRunning = true;
		speechSynthesis.speak(u);
	}
	findSuitableVoice(text, voicekey) {
		let voicenames = Speaker.VOICES;
		let vkey = 'zira';
		if (this.lang == 'D') {
			vkey = 'deutsch';
		} else if (text.includes('bad')) {
			vkey = 'zira';
		} else if (voicekey == 'random') {
			vkey = chooseRandom(['david', 'zira', 'us', 'ukFemale', 'ukMale']);
		} else if (isdef(voicenames[voicekey])) {
			vkey = voicekey;
		} else if (isdef(voicekey)) {
			let tryVoiceKey = firstCondDict(voicenames, x => startsWith(x, voicekey));
			if (tryVoiceKey) vkey = tryVoiceKey;
		}
		let voiceName = voicenames[vkey];
		let voice = firstCond(this.voices, x => startsWith(x.name, voiceName));
		return [vkey, voice];
	}
}
function convertTimesAndNumbersToWords(w) {
	if (w.includes(':')) {
		let h = stringBefore(w, ':');
		let m = stringAfter(w, ':');
		let hn = Number(h);
		let mn = Number(m);
		let xlist = allIntegers(w);
		if (xlist.length == 2) {
			if (xlist[1] == 0) xlist = [xlist[0]];
			xlist = xlist.map(n => n.toString());
			let res1 = xlist.join('');
			w = res1;
		}
	}
	if (isNumber(w)) {
		let res = toWords(w);
		return res;
	}
	return w;
}
function detectSilben(words) {
	const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
	return words.match(syllableRegex);
}
function differInAtMost(req, given, n = 1) {
	let diffs = levDist(req, given);
	return diffs <= n;
}
function isSimilar(reqAnswer, answer, lang) {
	if (answer == reqAnswer) return true;
	else if (replaceAll(answer, ' ', '') == replaceAll(reqAnswer, ' ', '')) return true;
	else if (differInAtMost(reqAnswer, answer, 1)) return true;
	else if (isSimilarSound(reqAnswer, answer, lang)) return true;
	else return false;
}
function isSimilarSound(reqAnswer, s, lang) {
	let sParts = s.split(' ');
	let aParts = reqAnswer.split(' ');
	if (isNumber(s) || isTimeString(s, lang)) s = convertTimesAndNumbersToWords(s);
	if (isNumber(reqAnswer) || isTimeString(reqAnswer, lang)) reqAnswer = convertTimesAndNumbersToWords(reqAnswer);
	if (sParts.length != aParts.length) return false;
	for (let i = 0; i < sParts.length; i++) {
		if (!soundsSimilar(sParts[i], aParts[i], lang)) return false;
	}
	return true;
}
function isTimeString(w, lang) {
	let res1 = (w.includes(':') && w.length >= 4 && w.length <= 5);
	let res2 = (lang == 'D' && stringAfterLast(w.toLowerCase(), ' ') == 'uhr'); //endsWith(w.trim().toUpperCase(), 'UHR'));
	return res1 || res2;
}
function levDist(s, t) {
	var d = []; //2d matrix
	var n = s.length;
	var m = t.length;
	if (n == 0) return m;
	if (m == 0) return n;
	for (var i = n; i >= 0; i--) d[i] = [];
	for (var i = n; i >= 0; i--) d[i][0] = i;
	for (var j = m; j >= 0; j--) d[0][j] = j;
	for (var i = 1; i <= n; i++) {
		var s_i = s.charAt(i - 1);
		for (var j = 1; j <= m; j++) {
			if (i == j && d[i][j] > 4) return n;
			var t_j = t.charAt(j - 1);
			var cost = (s_i == t_j) ? 0 : 1; // Step 5
			var mi = d[i - 1][j] + 1;
			var b = d[i][j - 1] + 1;
			var c = d[i - 1][j - 1] + cost;
			if (b < mi) mi = b;
			if (c < mi) mi = c;
			d[i][j] = mi; // Step 6
			if (i > 1 && j > 1 && s_i == t.charAt(j - 2) && s.charAt(i - 2) == t_j) {
				d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
			}
		}
	}
	return d[n][m];
}
function MicrophoneHide() {
	if (nundef(MicrophoneUi)) return;
	if (RecogOutput) console.log('* mic end')
	MicrophoneUi.style.opacity = .31;
}
function MicrophoneShow() {
	if (nundef(MicrophoneUi)) return;
	if (RecogOutput) console.log('* mic start')
	MicrophoneUi.style.opacity = 1;
}
function mMicrophone(dParent, color) {
	let d = mDiv(dParent);
	d.innerHTML = '🎤';
	let c = bestContrastingColor(color, ['yellow', 'orange', 'red']);
	let bg = c;
	let style = { bg: bg, rounding: '50%', fz: 50, padding: 5, transition: 'opacity .35s ease-in-out' };
	mStyle(d, style);
	mLinebreak(dParent);
	return d;
}
function sepWords(text, voiceKey, s = '') { //<silence msec="200" />') {
	text = text.toLowerCase();
	if (voiceKey == 'zira') {
		return text; // + ' hello <audio src="/assets/sounds/down.mp3">didnt get your MP3 audio file</audio> no way!';
	} else if (startsWith(voiceKey, 'u')) { return text; }
	let words = text.split(' ');
	text = words.join(' '); text += s;
	return text;
}
function soundsSimilar(w1, w2, lang) {
	w1 = convertTimesAndNumbersToWords(w1);
	w2 = convertTimesAndNumbersToWords(w2);
	const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
	function syllabify(words) {
		return words.match(syllableRegex);
	}
	let a1 = syllabify(w1);
	let a2 = syllabify(w2);
	if (!a1) a1 = [w1];
	if (!a2) a2 = [w2];
	if (lang == 'D' && isdef(germanNumbers[a1]) && germanNumbers[a1] == germanNumbers[a2]) return true;
	if (a1.length != a2.length) return false;
	let SUPER_WEAK_SIMILARTY = false;
	if (SUPER_WEAK_SIMILARTY) {
		for (let i = 0; i < a1.length; i++) {
			let s1 = a1[i];
			let s2 = a2[i];
			if (s1 == s2) return true;
			let x1 = stringAfterLeadingConsonants(s1);
			let x2 = stringAfterLeadingConsonants(s2);
			if (lang == 'E' && 'ou'.includes(x1) && 'ou'.includes(x2) && x1.substring(1) == x2.substring(1)) return true;
			if (lang == 'E' && 'oa'.includes(x1) && 'ao'.includes(x2) && x1.substring(1) == x2.substring(1)) return true;
			if (lang == 'E' && x1.replace('ee', 'i') == x2.replace('ee', 'i')) return true;
			if (lang == 'E' && x1.replace('ea', 'ai') == x2.replace('ea', 'ai')) return true;
			if (lang == 'E' && x1.replace('au', 'o') == x2.replace('au', 'o')) return true;
		}
	} else {
		for (let i = 0; i < a1.length; i++) {
			let yesItsAMatch = false;
			let s1 = a1[i];
			let s2 = a2[i];
			if (s1 == s2) yesItsAMatch = true;
			let x1 = stringAfterLeadingConsonants(s1);
			let x2 = stringAfterLeadingConsonants(s2);
			if (x1 == x2) yesItsAMatch = true;
			if (lang == 'E' && 'ou'.includes(x1) && 'ou'.includes(x2) && x1.substring(1) == x2.substring(1)) yesItsAMatch = true;
			if (lang == 'E' && 'oa'.includes(x1) && 'ao'.includes(x2) && x1.substring(1) == x2.substring(1)) yesItsAMatch = true;
			if (lang == 'E' && x1.replace('ee', 'i') == x2.replace('ee', 'i')) yesItsAMatch = true;
			if (lang == 'E' && x1.replace('ea', 'ai') == x2.replace('ea', 'ai')) yesItsAMatch = true;
			if (lang == 'E' && x1.replace('au', 'o') == x2.replace('au', 'o')) yesItsAMatch = true;
			if (!yesItsAMatch) return false;
		}
		return true;
	}
	return false;
}
function stringAfterLeadingConsonants(s) {
	let regexpcons = /^([^aeiou])+/g;
	let x = s.match(regexpcons);
	return x ? s.substring(x[0].length) : s;
}
function toWords(s) {
	var th = ['', 'thousand', 'million', 'billion', 'trillion'];
	var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	s = s.toString();
	s = s.replace(/[\, ]/g, '');
	if (s != parseFloat(s)) return 'not a number';
	var x = s.indexOf('.');
	if (x == -1) x = s.length;
	if (x > 15) return 'too big';
	var n = s.split('');
	var str = '';
	var sk = 0;
	for (var i = 0; i < x; i++) {
		if ((x - i) % 3 == 2) {
			if (n[i] == '1') { str += tn[Number(n[i + 1])] + ' '; i++; sk = 1; }
			else if (n[i] != 0) { str += tw[n[i] - 2] + ' '; sk = 1; }
		} else if (n[i] != 0) {
			str += dg[n[i]] + ' '; if ((x - i) % 3 == 0) str += 'hundred '; sk = 1;
		} if ((x - i) % 3 == 1) {
			if (sk) str += th[(x - i - 1) / 3] + ' '; sk = 0;
		}
	}
	if (x != s.length) {
		var y = s.length;
		str += 'point ';
		str.replace(/\s+/g, ' ');
	}
	return str.trim();
}
//#endregion speech

//#region settings
class SettingsClass {
	constructor(settingsObject, userObject, dParent) {
		this.o = settingsObject;
		this.u = userObject;
		this.dParent = dParent;
	}
	createSettingsUi(dParent) {
		dParent = valf(dParent, this.dParent);
		clearElement(dParent);
		this.list = [];
		let ttag = 'h2';
		mAppend(dParent, createElementFromHTML(`<${ttag}>Settings for ${this.o.friendly}</${ttag}>`));
		let nGroupNumCommonAllGames = this.mInputGroup(dParent);
		this.setzeEineZahl(nGroupNumCommonAllGames, 'samples', 25, ['samplesPerGame']);
		this.setzeEineZahl(nGroupNumCommonAllGames, 'minutes', 1, ['minutesPerUnit']);
		this.setzeEineZahl(nGroupNumCommonAllGames, 'correct streak', 5, ['incrementLevelOnPositiveStreak']);
		this.setzeEineZahl(nGroupNumCommonAllGames, 'fail streak', 2, ['decrementLevelOnNegativeStreak']);
		this.setzeEinOptions(nGroupNumCommonAllGames, 'show labels', ['toggle', 'always', 'never'], ['toggle', 'always', 'never'], 'toggle', ['pictureLabels']);
		let avail = toLetterList(this.o.availableLanguages);
		const langs = { E: 'English', D: 'Deutsch', S: 'Spanish', F: 'French', C: 'Chinese' };
		let labels = avail.map(x => langs[x]);
		this.setzeEinOptions(nGroupNumCommonAllGames, 'language', avail, labels, 'E', ['language']);
		let vocabs = Object.keys(KeySets);
		vocabs.sort();
		this.setzeEinOptions(nGroupNumCommonAllGames, 'vocabulary', vocabs, vocabs, 'best25', ['vocab']);
		this.setzeEineCheckbox(nGroupNumCommonAllGames, 'show time', false, ['showTime']);
		this.setzeEineCheckbox(nGroupNumCommonAllGames, 'spoken feedback', true, ['spokenFeedback']);
		this.setzeEineCheckbox(nGroupNumCommonAllGames, 'silent', false, ['silent']);
		this.setzeEineCheckbox(nGroupNumCommonAllGames, 'switch game after level', false, ['switchGame']);
		this.setzeEineZahl(nGroupNumCommonAllGames, 'trials', 3, ['trials']);
		this.setzeEineCheckbox(nGroupNumCommonAllGames, 'show hint', true, ['showHint']);
	}
	setSettingsKeys(elem) {
		let val = elem.type == 'number' ? Number(elem.value) : elem.type == 'checkbox' ? elem.checked : elem.value;
		lookupSetOverride(this.o, elem.keyList, val);
		this.hasChanged = true;
	}
	setSettingsKeysSelect(elem) {
		let val;
		for (const opt of elem.children) {
			if (opt.selected) val = opt.value;
		}
		this.hasChanged = true;
		lookupSetOverride(this.o, elem.keyList, val);
	}
	setzeEineZahl(dParent, label, init, skeys) {
		let d = mDiv(dParent);
		let val = lookup(this.o, skeys);
		if (nundef(val)) val = init;
		let inp = createElementFromHTML(
			`<input type="number" class="input" value="${val}" onfocusout="Settings.setSettingsKeys(this)" />`);
		let labelui = createElementFromHTML(`<label>${label}</label>`);
		mAppend(d, labelui);
		mAppend(labelui, inp);
		mStyle(inp, { maleft: 12, mabottom: 4 });
		mClass(inp, 'input');
		inp.keyList = skeys;
		this.addSetting(skeys[0]);
	}
	setzeEineCheckbox(dParent, label, init, skeys) {
		let d = mDiv(dParent);
		let val = lookup(this.o, skeys);
		if (nundef(val)) val = init;
		let inp = createElementFromHTML(
			`<input type="checkbox" class="checkbox" ` + (val === true ? 'checked=true' : '') + ` onfocusout="Settings.setSettingsKeys(this)" >`
		);
		let labelui = createElementFromHTML(`<label>${label}</label>`);
		mAppend(d, labelui);
		mAppend(labelui, inp);
		mStyle(inp, { maleft: 12, mabottom: 4 });
		mClass(inp, 'input');
		inp.keyList = skeys;
		this.addSetting(skeys[0]);
	}
	setzeEinOptions(dParent, label, optionList, friendlyList, init, skeys) {
		let d = mDiv(dParent);
		let val = lookup(this.o, skeys);
		if (nundef(val)) val = init;
		let inp = createElementFromHTML(`<select class="options" onfocusout="Settings.setSettingsKeysSelect(this)"></select>`);
		for (let i = 0; i < optionList.length; i++) {
			let opt = optionList[i];
			let friendly = friendlyList[i];
			let optElem = createElementFromHTML(`<option value="${opt}">${friendly}</option>`);
			mAppend(inp, optElem);
			if (opt == val) optElem.selected = true;
		}
		let labelui = createElementFromHTML(`<label>${label}</label>`);
		mAppend(d, labelui);
		mAppend(labelui, inp);
		mStyle(inp, { maleft: 12, mabottom: 4 });
		inp.keyList = skeys;
		this.addSetting(skeys[0]);
	}
	mInputGroup(dParent, styles) {
		let baseStyles = { display: 'inline-block', align: 'right', bg: '#00000080', rounding: 10, padding: 20, margin: 12 };
		if (isdef(styles)) styles = mergeOverride(baseStyles, styles); else styles = baseStyles;
		return mDiv(dParent, styles);
	}
	addSetting(keylist) { if (nundef(this.list)) this.list = []; this.list.push(keylist); }
	updateSettings() {
		this.updateLabelSettings();
		this.updateTimeSettings();
		this.updateSpeakmodeSettings();
		let scope = 'user';//'game' 'level','temp','all'
		if (scope == 'temp' || nundef(this.list)) return;
		for (const k of this.list) {
			if (scope == 'user') lookupSetOverride(U, ['settings', k], this.o[k]);
			else if (scope == 'game') lookupSetOverride(U, ['games', this.o.id, k], this.o[k]);
			else if (scope == 'level') lookupSetOverride(U, ['games', this.o.id, 'levels', this.o.level, k], this.o[k]);
			else if (scope == 'all') lookupSetOverride(DB, ['settings', k], this.o[k]);
		}
	}
	updateSpeakmodeSettings() { if (this.o.silent && this.o.spokenFeedback) this.o.spokenFeedback = false; }
	updateTimeSettings() { if (PROJECTNAME != 'chatas') checkTimer(this.o); }//let timeElem = mBy('time'); if (this.o.showTime) { show(timeElem); startTime(timeElem); } else hide(timeElem); }
	updateLabelSettings() {
		if (this.o.pictureLabels == 'toggle') this.o.showLabels = true;
		else this.o.showLabels = (this.o.pictureLabels == 'always');
	}
	updateGameValues(U) {
		let game = this.o.id;
		let level = this.o.level;
		let settings = { numColors: 1, numRepeat: 1, numPics: 1, numSteps: 1, colors: ColorList }; // general defaults
		settings = mergeOverride(settings, DB.settings);
		if (isdef(U.settings)) settings = mergeOverride(settings, U.settings);
		if (isdef(DB.games[game])) settings = mergeOverride(settings, DB.games[game]);
		let next = lookup(DB.games, [game, 'levels', level]); if (next) settings = mergeOverride(settings, next);
		next = lookup(U, ['games', game]); if (next) settings = mergeOverride(settings, next);
		next = lookup(U, ['games', game, 'levels', level]); if (next) settings = mergeOverride(settings, next);
		delete settings.levels;
		delete settings.colors;
		let lang = settings.language;
		let avail = toLetterList(settings.availableLanguages);
		if (!avail.includes(lang)) lang = chooseRandom(avail);
		settings.language = settings.lang = lang;
		Speech.setLanguage(settings.language);
		copyKeys(settings, this.o);
		this.updateSettings();
	}
}
//#endregion settings

//#region test_ui_helpers
function addColorPicker(){
	let form = mBy('myform');
	let img = mBy('imgPreview');
	let picker = mColorPickerBehavior(U.settings.userColor, img, form,
		(a) => { console.log('new color is', a); DA.newColor = a; DA.colorChanged = true; },//d.style.background = a;DA.UserColor = a; }, 
		{ w: 322, h: 45, bg: 'green', rounding: 6, margin: 'auto', align: 'center' });
}
function createAccountContent(userdata) {
	DA.imageChanged = DA.colorChanged = false;
	return `
	<style type="text/css">
		@keyframes appear1{
		 0%{opacity:0;transform: translateY(50px) rotate(5deg);transform-origin:100% 100%;}
		 100%{opacity:1;transform: translateY(0px) rotate(0deg);transform-origin:100% 100%;}
		}
		form{
		 margin: auto;
		 padding: 10px;
		 width:100%;
		 max-width: 400px;
		}
		input[type=text],input[type=password],input[type=button]{
		 padding:10px;
		 margin: 10px;
		 width: 300px;
		 border-radius: 5px;
		 border:solid 1px grey;
		 outline: none;
		 font-size:20px;
		}
		input[type=button]{
			width: 320px;
			cursor: pointer;
			background-color: #2b5488;
			color: white;
			font-size:16px;
		}
	 #error{
		 text-align: center;
		 padding: 0.5em;
		 background-color: #ecaf91;
		 color: white;
		 display: none;
	 }
	 .dragging{
		 border: dashed 2px #aaa;
	 }
	 </style>
	<div style="max-width=500px; margin-top:10px; display:flex; animation: appear1 1s ease;justify-content:center; align-content:center">
		<div id="error">some text</div>
		<div style='text-align:center'>
			<form id="myform" autocomplete="off" style='text-align:center'>
				<span style="font-size:11px;">drag and drop an image to change</span><br>
				<img id="imgPreview" onload='addColorPicker()' src='${userdata.imagePath + '?=' + Date.now()}' ondragover="handle_drag_and_drop(event)" ondrop="handle_drag_and_drop(event)" ondragleave="handle_drag_and_drop(event)"
					style="height:200px;margin:10px;" />
				<input id='iUsername' type="text" name="username" placeholder='username' value="${userdata.username}" autofocus
					onkeydown="if (event.keyCode === 13){event.preventDefault();console.log('WTF!!!!!!!!!!!!!!!!!!!!!!!!!!!!');collect_data(event);}" />
				<br />
				<input id='save_settings_button' type="button" value="Submit" onclick="collect_data(event)" ><br>
			</form>
	</div></div>
	`;
}
function createAccountContent1(userdata) {
	var d = mBy("inner_left_panel");
	clearElement(d);
	let d1 = mDiv(d, { w: '100%', matop: 10, animation: 'rotateIntoView 1s ease' });
	mCenterFlex(d1);
	let d2 = mDiv(d1, {}, 'error', 'hallo das ist ein error');
	let d3 = mDiv(d1, { align: 'center', bg: 'yellow' });
	let form = mCreate('form', { align: 'center', bg: 'red' }, 'myform');
	form.id = 'myform';
	form.setAttribute('autocomplete', 'off');
	form.onsubmit = (ev)=>{ev.preventDefault();collect_data();}
	mAppend(d3, form);
	let sp1 = mSpan(form, { fz: 11 }, null, 'drag and drop an image to change');
	form.innerHTML += '<br>';
	DA.imageChanged = DA.colorChanged = false;
	let img = mImg(userdata.imagePath + '?=' + Date.now(), form, { h: 200, margin: 10 });
	img.onload = () => {
		let inp = mCreate('input');
		mAppend(form, inp);
		inp.setAttribute('type', 'text');
		inp.setAttribute('placeholder', 'username');
		inp.setAttribute('name', 'username');
		inp.setAttribute('id', 'iUsername');
		inp.setAttribute('value', userdata.username);
		inp.setAttribute('autofocus', true);
		inp.onkeydown = ev => {
			if (ev.keyCode === 13) {
				ev.preventDefault();
				collect_data(ev);
			}
		};
		form.innerHTML += '<br />';
		let picker = mColorPickerBehavior(U.settings.userColor, img, form,
			(a) => { console.log('new color is', a); DA.newColor = a; DA.colorChanged = true; },//d.style.background = a;DA.UserColor = a; }, 
			{ w: 322, h: 45, bg: 'green', rounding: 6, margin: 'auto', align: 'center' });
		form.innerHTML += `<input id='save_account_button' type="button" value="Submit" onclick="collect_data(event)" ><br>`;
	};
	img.id = 'imgPreview';
	img.setAttribute('allowDrop',true);
	img.ondragover = img.ondrop = img.ondragleave = handle_drag_and_drop;
}
function createContactsContent(myusers, msgs) {
	let mydata = uiGetContactStylesAndStart();
	mydata += uiGetContacts(myusers, msgs);
	return mydata;
}
function createGamesContent(mygames, tables = []) {
	let mydata = uiGetGamesStylesAndStart();
	mydata += uiGetGames(mygames, tables);
	return mydata;
}
function createMessageContent(messages, me, other) {
	let result = `<div id='messages_holder_parent' onclick='set_seen(event)' style='background:silver;height:680px;'>
	<div id='messages_holder' style='box-sizing:border-box;height:580px;padding:10px;margin-bottom:10px;overflow-y:auto;'>`;
	result += `start of chat with ${other.username} <img src="${other.imagePath}" style="margin-left:10px;display:inline;height:30px;"/><br><br>`;
	for (const m of messages) {
		if (m.sender == me.username) { result += message_right(m, me); } else { result += message_left(m, other); }
	}
	result += message_controls(); //`</div></div>`;
	return result;
}
function ipadd(elem) {
	elem.setAttribute('draggable', true);
	function OnDragOver(ev) {
		elem.setAttribute('DragOver', true);
		ev.stopPropagation();    //  let child accept and don't pass up to parent element
		ev.preventDefault();     //  ios to accept drop
		ev.dataTransfer.dropEffect = 'copy';//   move has no icon? adding copy shows +
	}
	function OnDragLeave(ev) {
		elem.removeAttribute('DragOver');
	}
	function OnDrop(ev) {
		elem.removeAttribute('DragOver');
		ev.preventDefault();     //  dont let page attempt to load our data
		ev.stopPropagation();
		elem.innerHTML = ev.dataTransfer.getData('text/plain');
	}
	function OnDragStart(ev) {
		ev.stopPropagation(); // let child take the drag
		ev.dataTransfer.dropEffect = 'move';
		ev.dataTransfer.setData('text/plain', this.innerHTML);
	}
	function OnClickClick(ev) {
		ev.preventDefault();     //  dont let page attempt to load our data
		ev.stopPropagation(); // let child take the drag
		let aname = 'data_transport'; //hallo hallo hallo
		let source = DA[aname];
		if (isdef(source)) {
			elem.innerHTML = source.innerHTML;
			toggleSelectionOfPicture(source);
			DA[aname] = null;
		} else {
			toggleSelectionOfPicture(elem);
			DA[aname] = elem;
		}
	}
	elem.addEventListener('dragstart', OnDragStart);
	elem.addEventListener('dragover', OnDragOver);
	elem.addEventListener('dragleave', OnDragLeave);
	elem.addEventListener('drop', OnDrop);
	elem.onclick = OnClickClick;
	DA.data_transport=null;
}
function message_controls() {
	return `
	</div>
	<div style='display:flex;gap:10px;padding:10px;box-sizing:border-box;width:100%;height:60px;'>
		<label for='message_file'><img src='../assets/images/icons/clip.png' style='opacity:0.8;width:30px;cursor:pointer;' ></label>
		<input type='file' id='message_file' name='file' style='display:none' onchange='send_image(this.files)' />
		<input id='message_text' onkeyup='enter_pressed(event)' style='flex:6;border:solid thin #ccc;border-bottom:none;font-size:14px;padding:4px;outline:none;' type='text' placeHolder='type your message'/>
		<input style='flex:1;cursor:pointer;outline:none;' type='button' value='send' onclick='send_message(event)'/>
	</div>
	<span onclick='delete_thread(event)' style='color:white;cursor:pointer;'>Delete this thread </span>
	</div>`;
}
function message_left(msg, sender) {
	image = sender.imagePath;
	$a = `
	<div id='message_left'>
	<div></div>
		<img  id='prof_img' src='${image}' class='img_person sz50' style='float: left;margin:2px;'>
		<b>${sender.username}</b><br>
		${msg.message}<br><br>`;
	if (msg.files != "") {
		$a += `<img src='${msg.files}' style='margin:30px;cursor:pointer;' onclick='image_show(event)' /> <br>`;
	}
	$a += `<span style='font-size:11px;color:white;'>${msg.date}<span>
	<img id='trash' src='../assets/images/icons/trash.png' onclick='delete_message(event)' msgid='${msg.id}' />
	</div>`;
	return $a;
}
function message_right(msg, sender) {
	image = sender.imagePath;
	$a = `
	<div id='message_right'>
	<div>`;
	if (msg.seen) {
		$a += "<img src='../assets/images/tick.png' style=''/>";
	} else if (msg.received) {
		$a += "<img src='../assets/images/tick_grey.png' style=''/>";
	}
	$a += `</div>
		<img id='prof_img' src='${image}' style='float:right;margin:2px;' class='img_person sz50'>
		<b>${sender.username}</b><br>
		${msg.message}<br><br>`;
	if (msg.files != "") {
		$a += `<img src='${msg.files}' style='margin:30px;cursor:pointer;' onclick='image_show(event)' /> <br>`;
	}
	$a += `<span style='font-size:11px;color:#888;'>${msg.date}<span>
		<img id='trash' src='../assets/images/icons/trash.png' onclick='delete_message(event)' msgid='${msg.id}' />
	</div>`;
	return $a;
}
function uiGetContact(row, msgs={}) {
	let image = `../assets/images/${row.image}`; //row.hasImage ? "../assets/images/row.image.jpg" : "../assets/images/unknown_user.jpg";
	let mydata = `
      <div class='contact' style='position:relative;text-align:center;margin-bottom:18px;' username='${row.username}' onclick='start_chat(event)'>
        <img src='${image}' draggable='true' ondragstart='drag(event)' class='img_person sz100' style='margin:0;'/>
        <br>${row.username}`;
	if (isdef(msgs[row.username])) {
		mydata += `<div style='width:20px;height:20px;border-radius:50%;background-color:orange;color:white;position:absolute;left:0px;top:0px;'>` + msgs[row.username] + "</div>";
	}
	mydata += "</div>";
	return mydata;
}
function uiGetContacts(myusers, msgs) {
	mydata = '';
	for (const r of myusers) {
		row = r;
		mydata += uiGetContact(row, msgs);
	}
	return mydata;
}
function uiGetContactStylesAndStart() {
	let mydata = `
	<style>
		@keyframes appear{
			0%{opacity:0;transform: translateY(50px)}
			100%{opacity:1;transform: translateY(0px)}
 		}
 		.contact{
 			cursor:pointer;
 			transition: all .5s cubic-bezier(0.68, -2, 0.265, 1.55);
	 	}
	 	.contact:hover{
	 		transform: scale(1.1);
	 	}
	</style>
	<div style="text-align: center; animation: appear 1s ease">`;
	return mydata;
}
function uiGetGame(gi, tables = []) {
	let sym = Syms[gi.logo];
	let bg = getColorDictColor(gi.color);
	return `
	<div onclick="start_game(event)" gamename=${gi.id} style='cursor:pointer;border-radius:10px;margin:10px;padding:5px;padding-top:15px;width:120px;height:90px;display:inline-block;background:${bg}'>
	<span style='font-size:50px;font-family:${sym.family}'>${sym.text}</span><br>${gi.friendly}</div>
	`;
}
function uiGetGames(mygames, tables) {
	mydata = '';
	for (const r of mygames) {
		row = r;
		mydata += uiGetGame(row, tables);
	}
	return mydata;
}
function uiGetGamesStylesAndStart() {
	let mydata = `
	<style>
		@keyframes appear{
			0%{opacity:0;transform: translateY(50px)}
			100%{opacity:1;transform: translateY(0px)}
 		}
 		.contact{
 			cursor:pointer;
 			transition: all .5s cubic-bezier(0.68, -2, 0.265, 1.55);
	 	}
	 	.contact:hover{
	 		transform: scale(1.1);
	 	}
	</style>
	<div id='game_menu' style="text-align: center; animation: appear 1s ease">
  `;
	return mydata;
}
//#endregion test_ui_helpers

//#region time
class CTimer {
	constructor(elem, msTick, onTick, msTotal, onElapsed) {
		this.elem = elem;
		this.msTotal = this.msLeft = msTotal;
		this.onTick = onTick;
		this.onElapsed = onElapsed;
		this.interval = msTick;
		this.running = false;
		this.paused = false;
		this.game = G.name;
		this.button = mButton('click', this.togglePause.bind(this), this.elem, { transition: 'all 1s ease', display: 'inline-block', fz: 20, rounding: 12, bg: GREEN, w: 260 }, 'mybutton');
		this.TO = null;
	}
	togglePause() { if (this.paused) this.continue(); else this.pause(); }
	clear() { this.stop(); clearElement(this.elem); }
	continue() {
		if (!this.running) this.start();
		else if (!this.paused) return;
		else { this.paused = false; this.TO = setInterval(this.tickHandler.bind(this), this.interval); }
	}
	tickHandler() {
		this.msLeft -= this.interval;
		let [ms, unit] = [this.msLeft, this.msTotal / 6];
		this.msElapsed = this.msTotal - this.msLeft;
		this.button.innerHTML = timeConversion(Math.max(this.msLeft, 0), 'sh');
		let bg = ms > unit * 4 ? GREEN : ms > unit * 2 ? YELLOW : ms > unit ? 'orange' : RED;
		this.button.style.background = bg;
		if (isdef(this.onTick)) this.onTick();
		if (this.msLeft <= 0) {
			this.stop();
			if (isdef(this.onElapsed)) {
				console.assert(G.name == this.game,'game not the same!!! '+G.name + ' ' +this.game);
				this.onElapsed();
			}
		}
	}
	start() {
		if (this.running) this.stop();
		this.started = new Date().now;
		this.msLeft = this.msTotal;
		this.msElapsed = 0;
		this.running = true;
		this.TO = setInterval(this.tickHandler.bind(this), this.interval);
	}
	stop() {
		if (!this.running) return;
		clearInterval(this.TO);
		this.running = false;
	}
	pause() {
		if (this.paused || !this.running) return;
		clearInterval(this.TO);
		this.paused = true;
	}
}
class TimerClass {
	constructor(g, elem) {
		this.started, this.elapsed, this.onTimeOver = null, this.elem, this.timeLeft, this.settings = g;
		if (isdef(elem)) this.setElem(elem);
	}
	setElem(elem) {
		if (nundef(elem) && isdef(this.elem)) { elem = this.elem; }
		else if (nundef(elem)) { let d = mBy('time'); if (isdef(d)) this.elem = d; }
		else if (isString(elem)) { elem = mBy(elem); this.elem = elem; }
	}
	check(g) { this.settings = g; if (g.showTime) { show(this.elem); this.start(); } else { hide(this.elem); } return g.showTime; }
	clear() { clearTimeout(this.TO); }
	restart(g, elem, onTimeOver = null) {
		this.clear();
		this.setElem(elem);
		let active = this.check(g);
		this.started = msNow();
		this.elapsed = 0;
		if (isdef(onTimeOver)) this.onTimeOver = onTimeOver;
		if (active) this.start();
	}
	start() {
		if (nundef(this.settings.showTime) || !this.settings.showTime) return;
		if (nundef(this.settings.minutesPerUnit)) this.settings.minutesPerUnit = 10;
		if (nundef(this.started)) { this.started = msNow(); this.elapsed = 0; }
		var timeLeft = this.timeLeft = this.settings.minutesPerUnit * 60000 - this.getTimeElapsed();
		if (timeLeft > 0) {
			let t = msToTime(timeLeft);
			let s = format2Digits(t.h) + ":" + format2Digits(t.m) + ":" + format2Digits(t.s);
			this.elem.innerHTML = s;//h + ":" + m + ":" + s;
			this.TO = setTimeout(() => this.start(), 500);
		} else {
			this.elem.innerHTML = '00:00:00';
			if (this.onTimeOver) this.onTimeOver();
		}
	}
	unitTimeUp() {
		return (this.settings.minutesPerUnit * 60000 - this.getTimeElapsed()) <= 0;
	}
	startClock(elem) {
		if (nundef(this.settings.showTime) || !this.settings.showTime) return;
		var today = new Date(),
			h = format2Digits(today.getHours()),
			m = format2Digits(today.getMinutes()),
			s = format2Digits(today.getSeconds());
		if (isString(elem)) elem = mBy(elem); elem.innerHTML = h + ":" + m + ":" + s;
		this.TO = setTimeout(() => this.startClock(elem), 500);
	}
	getTimeElapsed() { return this.elapsed + msElapsedSince(this.started); }
}
class TimeoutManager {
	constructor() {
		this.TO = {};
	}
	clear(key) {
		if (nundef(key)) key = Object.keys(this.TO);
		else if (isString(key)) key = [];
		for (const k of key) {
			clearTimeout(this.TO[k]);
			delete this.TO[k];
		}
	}
	set(ms, callback, key) {
		if (nundef(key)) key = getUID();
		TO[key] = setTimeout(ms, callback);
	}
}
class CountdownTimer {
	constructor(ms, elem) {
		this.timeLeft = ms;
		this.msStart = Daat.now();
		this.elem = elem;
		this.tick();
	}
	msElapsed() { return Date.now() - this.msStart; }
	tick() {
		this.timeLeft -= this.msElapsed;
		this.elem.innerHTML = this.timeLeft;
		if (this.timeLeft > 1000) {
			setTimeout(this.tick.bind(this), 500);
		} else this.elem.innerHTML = 'timeover';
	}
}
function checkTimer(G) { if (nundef(GameTimer)) return false; return GameTimer.check(G); }
function renewTimer(G, elem, onTimeOver = null) { if (nundef(GameTimer)) GameTimer = new TimerClass(G); GameTimer.restart(G, elem, onTimeOver); }
function timeConversion(duration, format = 'Hmsh') {
	const portions = [];
	const msInHour = 1000 * 60 * 60;
	const hours = Math.trunc(duration / msInHour);
	if (format.includes('H')) portions.push((hours < 10 ? '0' : '') + hours);
	duration = duration - (hours * msInHour); // hours + 'h');
	const msInMinute = 1000 * 60;
	const minutes = Math.trunc(duration / msInMinute);
	if (format.includes('m')) portions.push((minutes < 10 ? '0' : '') + minutes);// minutes + 'm');
	duration = duration - (minutes * msInMinute);
	const msInSecond = 1000;
	const seconds = Math.trunc(duration / 1000);
	if (format.includes('s')) portions.push((seconds < 10 ? '0' : '') + seconds);//seconds + 's');
	duration = duration - (seconds * msInSecond);
	const hundreds = duration / 10;
	if (format.includes('h')) portions.push((hundreds < 10 ? '0' : '') + hundreds);//hundreds);
	return portions.join(':');
}
//#endregion time

//#region maze
class MazeGraph extends AGraph {
	constructor(dParent, rows, cols, sz, gap = 4) {
		super();
		[this.cols, this.rows, this.sz, this.gap] = [cols, rows, sz, gap];
		let m = this.m = this.createMaze(cols, rows, sz, gap);
		let dMaze = this.dMaze = this.createDiv(dParent, cols, rows, sz, gap);
		let szMaze = getSize(dMaze);
		let dGraph = this.dGraph = mDiv(dParent, { align:'left', w: szMaze.w, h: szMaze.h, bg: 'pink', maleft: 20});//, opacity: 0 });
		this.mazeId = dGraph.id = getUID();
		let sb = this.sb = mDiv(dParent, { w: 40 }); mCenterCenterFlex(this.sb);
		hide(dGraph);hide(sb);
		this.items = this.createCellItems();
	}
	clear(){super.clear(); } //dTable.firstChild.remove(); } //mBy(this.mazeId).remove();}
	getTopLeftCell() { return this.getCell(0, 0); }
	getTopRightCell() { return this.getCell(0, this.cols - 1); }
	getBottomLeftCell() { return this.getCell(this.rows - 1, 0); }
	getBottomRightCell() { return this.getCell(this.rows - 1, this.cols - 1); }
	getCell(row, col) { return this.matrix[row][col]; }// mBy(this.getCommonIdTable(row, col)); }
	getCommonId(row, col) { return '' + row + "-" + col; }
	getCommonIdTable(row, col) { return 'td_' + this.getCommonId(row, col); }
	getRCI(edgeId) {
		let [r1, c1, r2, c2] = allNumbers(edgeId).map(x => Math.abs(x));	//console.log('r,c 1:',r1,c1,'\nr,c 2:',r2,c2);
		let i1, i2; //indices that have to be switched form 1 to 0
		i1 = r1 < r2 ? 2 : r1 > r2 ? 0 : c1 < c2 ? 1 : 3;
		i2 = i1 == 0 ? 2 : i1 == 1 ? 3 : i1 == 2 ? 0 : 1;
		return [r1, c1, i1, r2, c2, i2];
	}
	getRelativeDirections(item1, item2) {
		let [r1, c1, r2, c2] = [item1.row, item1.col, item2.row, item2.col];//allNumbers(edgeId).map(x=>Math.abs(x));	//console.log('r,c 1:',r1,c1,'\nr,c 2:',r2,c2);
		let i1, i2; //indices that have to be switched form 1 to 0
		i1 = r1 < r2 ? 2 : r1 > r2 ? 0 : c1 < c2 ? 1 : 3;
		i2 = i1 == 0 ? 2 : i1 == 1 ? 3 : i1 == 2 ? 0 : 1;
		return [i1, i2];
	}
	createCellItems() {
		let items = [];
		this.matrix = [];
		for (let r = 0; r < this.rows; r++) {
			this.matrix[r] = [];
			for (let c = 0; c < this.cols; c++) {
				let id = this.getCommonId(r, c);
				let item = { id: id, nid: id, nodeId: id, cellId: this.getCommonIdTable(r, c), row: r, col: c, sz: this.sz, marr: this.m[r, c] };
				delete Items[id];
				iAdd(item, { div: mBy(this.getCommonIdTable(r, c)) });
				items.push(item);
				this.matrix[r][c] = item;
			}
		}
		return items;
	}
	createDiv(dParent, cols, rows, sz, gap) {
		let [wCell, hCell] = [sz, sz];
		let [wTotal, hTotal] = [cols * (wCell + gap), rows * (hCell + gap)];
		let dGridOuter = this.dMaze = mDiv(dParent, { wmin: wTotal, hmin: hTotal });
		let m = this.m;
		let id = 'tMaze';
		setCSSVariable('--wCell', `${wCell}px`);
		setCSSVariable('--hCell', `${hCell}px`);
		let tMaze = createElementFromHtml(`
			<table id="${id}">
			<tbody></tbody>
			</table>
		`);
		mAppend(dGridOuter, tMaze);
		let sBorder = `${gap}px solid black`;
		for (var i = 0; i < m.length; i++) {
			$('#tMaze > tbody').append("<tr>");
			for (var j = 0; j < m[i].length; j++) {
				var selector = this.getCommonIdTable(i, j);
				$('#tMaze > tbody').append("<td id='" + selector + "'>&nbsp;</td>");
				if (m[i][j][0] == 0) { $('#' + selector).css('border-top', sBorder); }
				if (m[i][j][1] == 0) { $('#' + selector).css('border-right', sBorder); }
				if (m[i][j][2] == 0) { $('#' + selector).css('border-bottom', sBorder); }
				if (m[i][j][3] == 0) { $('#' + selector).css('border-left', sBorder); }
			}
			$('tMmaze > tbody').append("</tr>");
		}
		return dGridOuter;
	}
	createMaze(cols, rows, sz, gap) {
		var dxy = sz + 2 * gap;
		var offs = dxy / 2 + gap;
		var totalCells = cols * rows;
		var cells = new Array();
		var unvis = new Array();
		for (var i = 0; i < rows; i++) {
			cells[i] = new Array();
			unvis[i] = new Array();
			for (var j = 0; j < cols; j++) {
				cells[i][j] = [0, 0, 0, 0];
				let pos = { x: offs + dxy * j, y: offs + dxy * i };
				this.addNode({ id: this.getCommonId(i, j), row: i, col: j, center: pos }, pos);
				unvis[i][j] = true;
			}
		}
		var currentCell = [Math.floor(Math.random() * rows), Math.floor(Math.random() * cols)];
		var path = [currentCell];
		unvis[currentCell[0]][currentCell[1]] = false;
		var visited = 1;
		while (visited < totalCells) {
			var pot = [[currentCell[0] - 1, currentCell[1], 0, 2],
			[currentCell[0], currentCell[1] + 1, 1, 3],
			[currentCell[0] + 1, currentCell[1], 2, 0],
			[currentCell[0], currentCell[1] - 1, 3, 1]];
			var neighbors = new Array();
			for (var l = 0; l < 4; l++) {
				if (pot[l][0] > -1 && pot[l][0] < rows && pot[l][1] > -1 && pot[l][1] < cols && unvis[pot[l][0]][pot[l][1]]) { neighbors.push(pot[l]); }
			}
			if (neighbors.length) {
				let next = neighbors[Math.floor(Math.random() * neighbors.length)];
				cells[currentCell[0]][currentCell[1]][next[2]] = 1;
				cells[next[0]][next[1]][next[3]] = 1;
				let row = currentCell[0];
				let col = currentCell[1];
				let row2 = next[0];
				let col2 = next[1];
				this.addEdge(this.getCommonId(row, col), this.getCommonId(row2, col2), {});
				unvis[next[0]][next[1]] = false;
				visited++;
				currentCell = [next[0], next[1]];
				path.push(currentCell);
			}
			else {
				currentCell = path.pop();
			}
		}
		return cells;
	}
	setItemBorder(item, dir) {
		let prop = getBorderPropertyForDirection(dir);
		iDiv(item).style[prop] = `${this.gap}px solid black`;
	}
	setItemColor(item, color) { mStyle(iDiv(item), { bg: color }); }
	setItemContent(item, text) { iDiv(item).innerHTML = text; }
	removeItemContent(item) { iDiv(item).innerHTML = ''; }
	disconnectCells(nid1, nid2) {
		this.removeEdge(this.getCommonEdgeId(nid1, nid2));
		let [item1, item2] = [Items[nid1], Items[nid2]];
		let [dir1, dir2] = this.getRelativeDirections(item1, item2);
		this.setItemBorder(item1, dir1);
		this.setItemBorder(item2, dir2);
	}
	cutPath(path, min, max) {
		let edges = path.edges();
		let len = edges.length;
		let [imin, imax] = [Math.floor(len * min), Math.floor(len * max)];
		let i = randomNumber(imin, imax);
		let edge = edges[i];
		let [nid1, nid2] = edge.connectedNodes().map(x => x.id());
		this.disconnectCells(nid1, nid2);
	}
	breadCrumbs(path, color = 'sienna', sz = 10) {
		for (const cell of path.nodes().map(x => Items[x.id()])) {
			mCellContent(iDiv(cell), { w: sz, h: sz, bg: color, fg: 'white', rounding: '50%' });
		}
	}
	colorComponents() {
		let comps = this.getComponents();
		let wheel = getColorWheel('red', comps.length);
		let i = 0;
		for (const comp of comps) {
			this.breadCrumbs(comp, wheel[i], 20); i += 1;
		}
	}
	showGraph() {
		this.dGraph.style.opacity = 1;
		if (this.hasVisual) {show(this.dGraph); return;}
		this.addVisual(this.dGraph);
		this.storeCurrentPositions();
		this.addLayoutControls(this.sb, ['show','hide','prest', 'grid', 'klay', 'rand', 'euler', 'reset', 'store']);//,'grid','euler','prest');		
	}
	hideGraph() {
		if (isdef(this.dGraph) && this.hasVisual) {
			this.dGraph.style.display = 'none';
		}
	}
}
//#endregion maze

//#region ai
var CCC = 0;
class SoloPlayer {
	constructor(user) {
		this.color = getColorDictColor(user.settings.userColor);
		this.id = user.id;
		this.score = 0;
	}
}
class AIPlayer {
	constructor(max_depth = -1) {
		this.id = getUID('AI');
		this.color = randomColor();
		this.type = 'ai';
		this.score = 0;
	}
	setData(o) { copyKeys(o, this); }
}
function AIMinimax(g, callback) {
	let state = g.getState();
	state = boardToNode(state);
	F_END = g.evalState;
	F_HEURISTIC = g.heuristic;
	F_MOVES = g.getAvailableMoves;
	F_APPLYMOVE = g.applyMove;
	F_UNDOMOVE = g.undoMove;
	MAXIMIZER = g.plTurn;
	MINIMIZER = g.plOpp;
	SelectedMove = null;
	let algorithm = g.copyState==true ? minimaxCopy : myMinimax;
	let val = algorithm(state, 0, -Infinity, Infinity, g.searchDepth, true);
	CCC = 0;
	callback(SelectedMove);
}
function minimaxCopy(node, depth, alpha, beta, maxDepth, maxim) {
	CCC += 1;
	if (depth >= maxDepth) return F_HEURISTIC(node,MAXIMIZER,MINIMIZER);
	let ec = F_END(node, depth); if (ec.reached) return ec.val;
	depth += 1;
	var move, result;
	var availableMoves = F_MOVES(node);
	let player = maxim ? MAXIMIZER : MINIMIZER;
	let nodeSafe = jsCopy(node);
	for (var i = 0; i < availableMoves.length; i++) {
		move = availableMoves[i];
		let node1 = jsCopy(node);
		console.assert(sameList(nodeSafe,node),'HA!');
		F_APPLYMOVE(node1, move, player);
		result = minimaxCopy(node1, depth, alpha, beta, maxDepth, !maxim);
		if (maxim) {
			if (result > alpha) {
				alpha = result;
				if (depth == 1) SelectedMove = move;
			} else if (alpha >= beta) { return alpha; }
		} else {
			if (result < beta) {
				beta = result;
				if (depth == 1) SelectedMove = move;
			} else if (beta <= alpha) { return beta; }
		}
	}
	return maxim ? alpha : beta;
}
function myMinimax(node, depth, alpha, beta, maxDepth, maxim) {
	CCC += 1;
	if (depth >= maxDepth) return 1;
	let ec = F_END(node, depth); if (ec.reached) return ec.val;
	depth += 1;
	var move, result;
	var availableMoves = F_MOVES(node);
	let player = maxim ? MAXIMIZER : MINIMIZER;
	for (var i = 0; i < availableMoves.length; i++) {
		move = availableMoves[i];
		F_APPLYMOVE(node, move, player);
		result = myMinimax(node, depth, alpha, beta, maxDepth, !maxim);
		F_UNDOMOVE(node, move, player);
		if (maxim) {
			if (result > alpha) {
				alpha = result;
				if (depth == 1) SelectedMove = move;
			} else if (alpha >= beta) { return alpha; }
		} else {
			if (result < beta) {
				beta = result;
				if (depth == 1) SelectedMove = move;
			} else if (beta <= alpha) { return beta; }
		}
	}
	return maxim ? alpha : beta;
}
//#endregion ai

//#region all
function all2DigitFractions() {
	let fr = {
		1: [2, 3, 4, 5, 6, 7, 8, 9],
		2: [3, 5, 7, 9],
		3: [2, 4, 5, 7, 8],
		4: [3, 5, 7, 9],
		5: [2, 3, 4, 6, 7, 8, 9],
		6: [5, 7],
		7: [2, 3, 4, 5, 6, 8, 9],
		8: [3, 5, 7, 9],
		9: [2, 4, 5, 7, 8],
	};
	return fr;
}
function all2DigitFractionsExpanded() {
	let f = all2DigitFractions();
	let res = [];
	for (const i in f) {
		for (const j of f[i]) {
			res.push({ numer: i, denom: j });
		}
	}
	return res;
}
function all2DigitFractionsUnder1() {
	let fr = {
		1: [2, 3, 4, 5, 6, 7, 8, 9],
		2: [3, 5, 7, 9],
		3: [4, 5, 7, 8],
		4: [5, 7, 9],
		5: [6, 7, 8, 9],
		6: [7],
		7: [8, 9],
		8: [9],
	};
	return fr;
}
function all2DigitFractionsUnder1Expanded() {
	let f = all2DigitFractionsUnder1();
	let res = [];
	for (const i in f) {
		for (const j of f[i]) {
			res.push({ numer: i, denom: j });
		}
	}
	return res;
}
function canAct() { return (aiActivated || uiActivated) && !auxOpen; }
function canAIAct() { return aiActivated && !auxOpen; }
function canHumanAct() { return uiActivated && !auxOpen; }
function fractionsUnder1ByDenominator() {
	let fr = {
		2: [1],
		3: [1, 2],
		4: [1, 3],
		5: [1, 2, 3, 4],
		6: [1, 5],
		7: [1, 2, 3, 4, 5, 6],
		8: [1, 3, 5, 7],
		9: [1, 2, 4, 5, 7, 8],
	};
	return fr;
}
function get3FractionVariants(fr, sameNum = false, sameDenom = true) {
	let num = fr.n;
	let rnd1 = randomNumber(1, 2);
	let rnd2 = rnd1 + randomNumber(1, 3);
	let rnd3 = rnd2 + randomNumber(1, 5);
	let nums = sameNum ? [num, num, num, num] : [num, num + rnd1, num > 5 ? (num - rnd2) : num + rnd2, num + rnd3];
	let den = fr.d;
	let denoms = sameDenom ? [den, den, den, den] : sameNum ? [den, den + 1, den + 2, den > 2 ? den - 1 : den + 3]
		: [den, den + 1, den + 2, den];
	let frlist = [];
	for (let i = 0; i < 4; i++) {
		frlist.push(math.fraction(nums[i], denoms[i]));
	}
	return frlist;
}
function getFractionVariantsTrial1(res) {
	let num = getRandomFractions(res, 8);
	let resInList = firstCond(nums, x => x.n == res.n && x.d == res.d);
	if (!resInList) nums.push(res);
	let finalNums = nums.filter(x => x.n == res.n);
	let otherNums = nums.filter(x => x.n != res.n);
	if (finalNums.length < 4) {
		let nMissing = 4 - finalNums.length;
		let additional = choose(otherNums, nMissing);
		finalNums = finalNums.concat(additional);
	}
	nums = finalNums;
	return nums;
}
function getMixedNumber(num, denom) {
	const quotient = Math.floor(num / denom);
	const remainder = num % denom;
	if (remainder === 0) {
		return { full: quotient, frac: null, n: null, d: null };
	} else {
		return { full: quotient, frac: math.fraction(remainder, denom), n: remainder, d: denom };
	};
}
function getRandomFraction(num, denom) {
	if (isdef(denom)) {
		if (nundef(num)) num = randomNumber(1, denom - 1);
		return math.fraction(num, denom);
	} else if (isdef(num)) {
		denom = randomNumber(2, 9);
		return math.fraction(num, denom);
	}
	let flist = all2DigitFractionsUnder1Expanded();
	let fr = chooseRandom(flist);
	return math.fraction(Number(fr.numer), Number(fr.denom));
}
function getRandomFractions(n) {
	let flist = all2DigitFractionsUnder1Expanded();
	let frlist = choose(flist, n);
	return frlist.map(x => math.fraction(Number(x.numer), Number(x.denom)));
}
function getTextForFraction(num, denom) {
	let s = '' + num + '&frasl;' + denom; return s;
}
function getTextForFractionX(num, denom) {
	if (num == denom) return '1';
	else if (denom == 1) return num;
	else if (num / denom > 2) {
		let mixed = getMixedNumber(num, denom);
		return getTextForMixed(mixed.full, mixed.n, mixed.d);
	} else {
		let s = '' + num + '&frasl;' + denom; return s;
	}
}
function getTextForMixed(full, num, denom) {
	let s = '' + full;
	if (isdef(num) && isdef(denom)) s += ' ' + num + '&frasl;' + denom;
	return s;
}
function setGame(game, immediate = false) {
	cleanupOldGame();
	resetUIDs();
	if (isdef(G) && G.id != game) Score.gameChange = true;
	G = new (classByName(capitalize(game)))(game, DB.games[game]);
	Settings = new SettingsClass(G, dAux);
	if (nundef(U.games[game])) {
		if (G.controllerType == 'solitaire') { U.games[game] = { nTotal: 0, nCorrect: 0, nCorrect1: 0, startLevel: 0 }; }
		else U.games[game] = {};
	}
	if (isdef(G.maxLevel)) G.level = Math.min(getUserStartLevel(game), G.maxLevel);
	if (G.id != 'gAristo') Settings.updateGameValues(U, G); //hier werden die belinda settings geadded
	save_user(); //das sollte nur gemacht werden wenn wirklich was sich geaendert hat!
	switch (G.controllerType) {
		case 'solitaire': GC = PROJECTNAME.startsWith('bel')?new ControllerSolitaire(G, U):new ControllerSolitaireMinimal(G, U); break;
		case 'solo': GC = new ControllerTTT(G, U); break;
		case 'chess': GC = new ControllerChess(G, U); break;
		case 'c52': GC = new ControllerC52(G, U); break;
	}
	G.controller = GC;
	showGameTitle();
	if (immediate) GC.startGame();
}
function simplifyFraction(numerator, denominator) {
	var gcd = function gcd(a, b) {
		return b ? gcd(b, a % b) : a;
	};
	gcd = gcd(numerator, denominator);
	return [numerator / gcd, denominator / gcd];
}
//#endregion all

//#region classes
class Game {
	constructor(name, o) {
		this.name = name;
		copyKeys(o, this);
		this.maxLevel = isdef(this.levels) ? Object.keys(this.levels).length - 1 : 0;
		this.id = name;
		this.color = getColorDictColor(this.color);
	}
	clear() { clearTimeout(this.TO); clearFleetingMessage(); }
	startGame() { }
	start_Level() {
		this.keys = setKeysG(this, filterWordByLengthG, 25);
		console.assert(nundef(this.numPics) || this.keys.length >= this.numPics, 'WAAAAAAAAAAAS? nMin in setKeys nicht richtig!!!!! ' + this.numPics + ' ' + this.keys.length)
	}
	startRound() { }
	prompt() {
		myShowPics(this.controller.evaluate.bind(this.controller));
		setGoal();
		show_instruction(`click <b>${Goal.label.toUpperCase()}</b>`, dTitle, `click ${Goal.label}`);
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		if (this.showHint) shortHintPic();
		return 10;
	}
	activate() { }
	interact() { }
	eval(ev) {
		ev.cancelBubble = true;
		let item = findItemFromEvent(Pictures, ev);
		Selected = { pic: item, feedbackUI: iDiv(item), sz: getRect(iDiv(item)).h };
		Selected.reqAnswer = Goal.label;
		Selected.answer = item.label;
		if (item.label == Goal.label) { return true; } else { return false; }
	}
}
class GAbacus extends Game {
	constructor(name, o) { super(name, o); }
	startGame() { this.successFunc = successThumbsUp; this.failFunc = failThumbsDown; this.correctionFunc = this.showCorrectSequence.bind(this); }
	showCorrectSequence() { let t = correctBlanks(); if (this.level <= 1 && (this.step <= 3 || this.op != 'mult')) showSayHint(3); return t + 1000; }
	start_Level() { if (!isList(this.steps)) this.steps = [this.steps]; this.numPics = 2; }
	prompt() {
		mLinebreak(dTable, 2);
		showHiddenThumbsUpDown(110);
		mLinebreak(dTable);
		this.seq = makeExpSequence();
		let panel = mDiv(dTable, { bg: '#00000080', padding: 20, rounding: 10 });
		[this.words, this.letters] = showEquation(this.seq, panel);
		setNumberSequenceGoal();
		mLinebreak(dTable, 30);
		let wr = (this.language == 'E' ? 'calculate' : "rechne");
		let spOp = this.oop.sp; if (this.language == 'D') spOp = DD[spOp];
		let sp = this.operand + ' ' + spOp + ' ' + this.step + ' ?';
		show_instruction(wr, dTitle, sp);
		if (this.level <= 1 && this.showHint && (this.step <= 3 || this.op != 'mult'))
			hintEngineStart(getOperationHintString, [0, 1], 5000 + this.level * 1000);
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		if (this.level <= 1 && this.showHint && (this.step <= 3 || this.op != 'mult')) hintEngineStart(getOperationHintString, [0, 1], 5000 + this.level * 1000);
		TOMain = setTimeout(() => getWrongChars().map(x => unfillChar(x)), 500);
		return 600;
	}
	activate() { addKeyup('G', this.interact.bind(this)); }
	interact(ev) {
		if (!isNumber(ev.key) && ev.key != '-') return;
		clearFleetingMessage();
		if (!canAct()) return;
		let sel = Selected = onKeyWordInput(ev);
		if (nundef(sel)) return;
		let lastInputCharFilled = sel.target;
		console.assert(sel.isMatch == (lastInputCharFilled.letter == sel.ch), lastInputCharFilled, sel.ch);
		if (sel.isMatch && sel.isVeryLast) {
			deactivateFocusGroup();
			this.controller.evaluate.bind(this.controller)(true);
		} else if (sel.isMatch && sel.isLastOfGroup) {
			sel.target.isBlank = false;
			sel.target.group.hasBlanks = false;
			removeInPlace(Goal.blankWords, sel.target.group);
			removeInPlace(Goal.blankChars, sel.target);
			deactivateFocusGroup();
			console.log('haaaaaaaaaaaalo', Goal.isFocus)
		} else if (sel.isMatch) {
			removeInPlace(Goal.blankChars, sel.target);
			sel.target.isBlank = false;
		} else if (sel.isVeryLast) {
			Selected.words = getInputWords();
			Selected.answer = getInputWordString();
			Selected.req = getCorrectWordString();
			deactivateFocusGroup();
			this.controller.evaluate.bind(this.controller)(false);
		} else if (sel.isLastOfGroup) {
			Selected.words = getInputWords();
			Selected.answer = getInputWordString();
			Selected.req = getCorrectWordString();
			deactivateFocusGroup();
			this.controller.evaluate.bind(this.controller)(false);
		} else {
			if (!this.silent) { writeSound(); playSound('incorrect1'); }
			deactivateFocusGroup();
			showFleetingMessage('does NOT fit: ' + Selected.ch, 0, { fz: 24 });
			setTimeout(() => unfillCharInput(Selected.target), 500);
		}
	}
	eval(isCorrect) { return isCorrect; }
}
class GAnagram extends Game {
	constructor(name, o) {
		super(name, o);
		if (this.language == 'C') {
			this.realLanguage = this.language;
			this.language = chooseRandom('E', 'S', 'F', 'D');
		}
	}
	clear() { super.clear(); if (isdef(this.language)) this.language = this.language; }
	start_Level() {
		this.keys = setKeysG(this, filterWordByLengthG, 10);
		if (this.keys.length < 10) { this.keys = setKeysG(this, filterWordByLengthG, 10, 'all'); }
	}
	prompt() {
		myShowPics(null, {}, {});
		if (this.hidden) {
			let d = iDiv(Pictures[0]);
			animate(d, 'aniAppearMinute', 100000);
		}
		setGoal();
		let w = this.showWord ? Goal.label : '';
		let wr = `drag letters to form ${w}`;
		let sp = `form ${w}`;
		show_instruction(wr, dTitle, sp);
		mLinebreak(dTable, 22);
		let word = Goal.label.toUpperCase();
		let wlen = word.length;
		let wTable = getRect(mBy('table')).w;
		let wmax = wTable / wlen;
		let gap = 4;
		let fzMax = wTable / wlen - 3 * gap;
		let fz = Math.min(70, fzMax);
		let dpEmpty = createLetterInputsX(word, dTable, { pabottom: 5, bg: 'grey', display: 'inline-block', fz: fz, w: fz, h: fz * 1.1, margin: gap }); //,w:40,h:80,margin:10});
		let inputs = blankInputs(dpEmpty, range(0, wlen - 1), false);
		for (let i = 0; i < inputs.length; i++) {
			let l = iDiv(inputs[i]);
			ipadd(l);
			mClass(l, 'dropzone');
			l.id = 'input' + i;
		}
		this.inputs = inputs;
		let x = mLinebreak(dTable, 35);
		fz = Math.min(60, fzMax);
		let dp = createLetterInputsX(word, dTable, { bg: 'silver', display: 'inline-block', fz: fz, w: fz, h: fz * 1.1, margin: 4 }); //,w:40,h:80,margin:10});
		scrambleInputs(dp);
		let letters = Array.from(dp.children);
		for (let i = 0; i < letters.length; i++) {
			let l = letters[i];
			l.setAttribute('draggable', true);
			ipadd(l);
			l.id = 'letter' + i;
		}
		this.letters = letters;
		mLinebreak(dTable, 35);
		this.bDone = mButton('Done!', this.controller.evaluate.bind(this.controller), dTable, { fz: 28, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
		if (this.hidden) showFleetingMessage('category: ' + Pictures[0].info.subgroup, 5000);
		else if (!this.showWord) { showLabelPercentHintAfter(50, 6000); }
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		setTimeout(() => {
			this.inputs.map(x => iDiv(x).innerHTML = '_')
		}, 1500);
		return 10;
	}
	eval() {
		let s = this.inputs.map(x => iDiv(x).innerHTML);
		let w = s = s.join('');
		let word = Goal.label.toUpperCase();
		Selected = { answer: w, reqAnswer: word, feedbackUI: iDiv(Goal) };
		return w == word;
	}
	onTimeup() { this.controller.evaluate(); }
}
class GAnagramBROKEN extends Game {
	constructor(name, o) {
		super(name, o);
		if (this.language == 'C') {
			this.realLanguage = this.language;
			this.language = chooseRandom('E', 'S', 'F', 'D');
		}
	}
	clear() { super.clear(); if (isdef(this.language)) this.language = this.language; }
	start_Level() {
		this.keys = setKeysG(this, filterWordByLengthG, 10);
		if (this.keys.length < 10) { this.keys = setKeysG(this, filterWordByLengthG, 10, 'all'); }
	}
	prompt() {
		myShowPics(null, {}, {});
		if (this.hidden) {
			let d = iDiv(Pictures[0]);
			animate(d, 'aniAppearMinute', 100000);
		}
		setGoal();
		let w = this.showWord ? Goal.label : '';
		let wr = `drag letters to form ${w}`;
		let sp = `forme ${w}`;
		show_instruction(wr, dTitle, sp);
		mLinebreak(dTable, 22);
		let word = Goal.label.toUpperCase();
		let wlen = word.length;
		let wTable = getRect(mBy('table')).w;
		let wmax = wTable / wlen;
		let gap = 4;
		let fzMax = wTable / wlen - 3 * gap;
		let fz = Math.min(70, fzMax);
		let dpEmpty = createLetterInputsX(word, dTable, { pabottom: 5, bg: 'grey', display: 'inline-block', fz: fz, w: fz, h: fz * 1.1, margin: gap }); //,w:40,h:80,margin:10});
		let inputs = blankInputs(dpEmpty, range(0, wlen - 1), false);
		for (let i = 0; i < inputs.length; i++) {
			let l = iDiv(inputs[i]);
			ipadd(l);
			mClass(l, 'dropzone');
			l.id = 'input' + i;
		}
		this.inputs = inputs;
		let x = mLinebreak(dTable, 35);
		fz = Math.min(60, fzMax);
		let dp = createLetterInputsX(word, dTable, { bg: 'silver', display: 'inline-block', fz: fz, w: fz, h: fz * 1.1, margin: 4 }); //,w:40,h:80,margin:10});
		scrambleInputs(dp);
		let letters = Array.from(dp.children);
		for (let i = 0; i < letters.length; i++) {
			let l = letters[i];
			l.setAttribute('draggable', true);
			ipadd(l);
			l.id = 'letter' + i;
		}
		this.letters = letters;
		mLinebreak(dTable, 35);
		this.bDone = mButton('Done!', this.controller.evaluate.bind(this.controller), dTable, { fz: 28, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
		if (this.hidden) showFleetingMessage('category: ' + Pictures[0].info.subgroup, 5000);
		else if (!this.showWord) { showLabelPercentHintAfter(50, 6000); }
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		setTimeout(() => {
			this.inputs.map(x => iDiv(x).innerHTML = '_')
		}, 1500);
		return 10;
	}
	eval() {
		let s = this.inputs.map(x => iDiv(x).innerHTML);
		let w = s = s.join('');
		let word = Goal.label.toUpperCase();
		Selected = { answer: w, reqAnswer: word, feedbackUI: iDiv(Goal) };
		return w == word;
	}
	onTimeup() { this.controller.evaluate(); }
}
class GColoku extends Game {
	startGame() {
		this.correctionFunc = () => {
			if (this.qName == 'isThisSudokuCorrect') {
				mStyle(Goal.buttonCorrect, { bg: 'green' });
				animate(Goal.buttonCorrect, 'komisch', 1000);
				if (!Goal.correct) {
					animateColorScale(Goal.correctionFeedbackUI, Goal.item.color, 1.5, 1500);
					this.dComment.innerHTML = 'rule broken! duplicate in ' + Goal.err.type;
				} else {
					this.dComment.innerHTML = 'this coloku is correct!';
				}
			} else {
				this.dWordArea.remove();
				this.bDone.remove();
				if (Goal.err) {
					this.dComment.innerHTML = 'rule broken! duplicate in ' + Goal.err.type;
					animateColorScale(Goal.correctionFeedbackUI, Goal.item.color, 1.5, 1500);
				} else {
					this.dComment.innerHTML = 'Coloku is incomplete!!!!';
				}
			}
			return 20000;
		};
		this.failFunc = () => {
			if (this.qName == 'isThisSudokuCorrect') {
				if (Goal.choice == Goal.correctChoice) { mStyle(Goal.buttonClicked, { bg: 'green' }); mCheckit(Goal.feedbackUI, 100); }
				else { mXit(Goal.buttonClicked, 100); }
			} else {
				mXit(this.dGrid, 200);
			}
		}
		this.successFunc = () => {
			if (this.qName == 'isThisSudokuCorrect') {
				if (Goal.choice == Goal.correctChoice) { mStyle(Goal.buttonClicked, { bg: 'green' }); mCheckit(Goal.feedbackUI, 100); }
				else { mXit(Goal.buttonClicked, 100); }
			} else {
				mCheckit(this.dGrid, 200);
			}
		}
	}
	prompt() {
		this.trials = 1;
		let [rows, cols] = [this.rows, this.cols];// = [4, 4]; //
		this.dGrid = mGrid(rows, cols, dTable, { position: 'relative', w: 400, h: 400, gap: 8, bg: 'white' });
		let o = getSudokuPatternFromDB(rows, cols);
		let [pattern, minPuzzle] = [this.pattern, this.minPuzzle] = [o.pattern, o.puzzle];
		mLinebreak(dTable, 20);
		this.dChoices = mDiv(dTable);
		mLinebreak(dTable);
		this.dComment = mDiv(dTable);
		mLinebreak(dTable);
		let qName = this.qName = this.level == 0 && coin() && PROJECTNAME.startsWith('bel') ? 'isThisSudokuCorrect' : 'solve';
		this[qName]();
		this.controller.activateUi.bind(this.controller)();
	}
	fillGrid(pattern) {
		let items = this.items = [];
		let [rows, cols, dGrid] = [this.rows, this.cols, this.dGrid];
		let colors = this.colors = rows == 4 ? [RED, YELLOW, BLUE, GREEN]
			: rows == 6 ? [RED, YELLOW, BLUE, GREEN, PURPLE, ORANGE]
				: [BLUEGREEN, PURPLE, ORANGE, RED, YELLOW, BLUE, GREEN, LIGHTBLUE, OLIVE];
		shuffle(colors);
		for (let r = 0; r < rows; r++) {
			let arr = [];
			for (let c = 0; c < cols; c++) {
				let nch = pattern[r][c];
				let color = isNumber(nch) ? colors[pattern[r][c]] : null;
				let d = mDiv(dGrid, { bg: color }, getUID());
				let item = { row: r, col: c, id: d.id, color: color, val: nch };
				iAdd(item, { div: d });
				arr.push(item);
			}
			items.push(arr);
		}
		return items;
	}
	makeLines() {
		let [wline, dGrid, sz] = [2, this.dGrid, this.rows];
		let gSize = getSize(dGrid);
		let rh = sz != 9 ? makeRect((gSize.w - wline) / 2, 0, wline, gSize.h) : makeRect((gSize.w - wline) / 3, 0, wline, gSize.h);
		let rv = sz == 4 ? makeRect(0, (gSize.h - wline) / 2, gSize.w, wline) : makeRect(0, (gSize.h - wline) / 3, gSize.w, wline);
		let vLine = mDiv(dGrid, { bg: this.color, position: 'absolute', left: rh.l, top: rh.t, w: rh.w, h: rh.h });
		if (sz == 9) vLine = mDiv(dGrid, { bg: this.color, position: 'absolute', left: rh.l * 2, top: rh.t, w: rh.w, h: rh.h });
		let hLine = mDiv(dGrid, { bg: this.color, position: 'absolute', left: rv.l, top: rv.t, w: rv.w, h: rv.h });
		if (sz != 4) vLine = mDiv(dGrid, { bg: this.color, position: 'absolute', left: rv.l, top: 2 * rv.t, w: rv.w, h: rv.h });
	}
	setGoal(pattern) {
		let err = checkSudokuRule(pattern);
		let incomplete = false;
		for (const el of arrFlatten(pattern)) {
			if (!isNumber(el)) { incomplete = true; break; }
		}
		let answer = (err == null) && !incomplete; //console.log('correct', answer);
		Goal = { correct: answer, err: err, incomplete: incomplete };
	}
	isThisSudokuCorrect() {
		this.trials = 1;
		let [pattern, rows, cols, dGrid] = [this.pattern, this.rows, this.cols, this.dGrid];
		destroySudokuRule(pattern, rows, cols);
		this.setGoal(pattern);
		let items = this.fillGrid(pattern);
		this.makeLines();
		let wsp = {
			D: 'ist dieses coloku korrekt?',
			E: 'is this coloku correct?',
			S: 'es este coloku correcto?',
			F: 'est ce que ce coloku est exacte?',
		};
		let sp = wsp[this.language];
		show_instruction(sp, dTitle, sp);
		showFleetingMessage('rule: each color must be unique in every row, column and quadrant!', 15000);
		let correct, incorrect;
		if (Goal.correct) { correct = { num: 1, text: 'yes' }; incorrect = [{ num: 0, text: 'no' }]; }
		else { correct = { num: 0, text: 'no' }; incorrect = [{ num: 1, text: 'yes' }]; }
		let feedbackUI = Goal.correctionFeedbackUI = Goal.correct ? this.dGrid : iDiv(this.items[Goal.err.row][Goal.err.col]);
		createMultipleChoiceElements(correct, incorrect, this.dChoices, feedbackUI, {});
		Goal.item = Goal.correct ? this.items[0] : this.items[Goal.err.row][Goal.err.col];
	}
	solve() {
		let [rrand, crand] = [randomNumber(0, this.rows - 1), randomNumber(0, this.cols - 1)];
		let puzzle = this.puzzle = jsCopy(this.pattern);
		let [min, rows, cols] = [this.minPuzzle, this.rows, this.cols];
		let combis = [];
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				if (min[r][c] === ' ') combis.push({ row: r, col: c });
			}
		}
		let combisToRemove = choose(combis, this.numMissing);
		for (const o of combisToRemove) {
			puzzle[o.row][o.col] = ' ';
		}
		this.fillGrid(puzzle);
		this.makeLines();
		let sp = 'solve this coloku!'
		show_instruction(sp, dTitle, sp);
		let itemlist = this.itemlist = arrFlatten(this.items);
		let containers = this.containers = itemlist.filter(x => x.val === ' ');
		let dWordArea = this.dWordArea = mDiv(dTable, { h: 70, display: 'flex', 'flex-wrap': 'wrap', layout: 'fhcc' });
		let colorItems = this.colorItems = [];
		for (const color of this.colors) {
			let colorItem = { id: getUID(), color: color };
			let d = mDiv(dWordArea, { w: 40, h: 40, bg: color, margin: 10, cursor: 'pointer' }, colorItem.id);
			iAdd(colorItem, { div: d });
			colorItems.push(colorItem);
		}
		enableDD(colorItems, containers, this.dropHandler.bind(this), true);
		mLinebreak(dTable, 50);
		this.bDone = mButton('Done!', this.controller.evaluate.bind(this.controller), dTable, { fz: 28, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
	}
	dropHandler(source, target, isCopy = true) {
		let dSource = iDiv(source);
		let dTarget = iDiv(target);
		mStyle(dTarget, { bg: source.color });
		target.color = source.color;
		target.val = this.colors.indexOf(source.color);
	}
	evalIsCorrect() {
		Selected = { feedbackUI: Goal.buttonClicked };
		return Goal.buttonClicked == Goal.buttonCorrect;
	}
	evalSolve() {
		let [items, pattern, rows, cols] = [this.items, this.pattern, this.rows, this.cols];
		let pat = items.map(x => x.map(y => y.val));
		this.setGoal(pat);
		if (Goal.err) {
			Goal.correctionFeedbackUI = iDiv(this.items[Goal.err.row][Goal.err.col]);
			Goal.item = this.items[Goal.err.row][Goal.err.col];
		}
		Selected = { feedbackUI: this.dGrid };
		return Goal.correct;
	}
	eval() {
		clearFleetingMessage();
		return this.qName == 'solve' ? this.evalSolve() : this.evalIsCorrect();
	}
	onTimeup() { this.controller.evaluate(); }
}
class GCats extends Game {
	constructor(name, o) { super(name, o); }
	startGame() { this.correctionFunc = showCorrectPictureLabels; this.failFunc = failSomePictures; }
	dropHandler(source, target, isCopy = true) {
		let dSource = iDiv(source);
		let dTarget = iDiv(target);
		if (!isCopy) {
			mAppend(dTarget, dSource);
		} else {
			let dNew = mText(dSource.innerHTML, dTarget, { wmin: 100, fz: 20, padding: 4, margin: 4, display: 'inline-block' });
			addDDSource(dNew, false);
		}
		if (isOverflown(dTarget)) {
			let d = dTarget.parentNode;
			let r = getRect(d);
			let w = r.w + 100;
			mSize(d, w, r.h);
			console.log('overflow!!!!', r.w, '=>', w)
		}
	}
	prompt() {
		let items;
		let data = this.keysByCat = genCats(this.numCats);
		this.keylists = [], this.catsByKey = {};
		for (const cat in data) {
			this.keylists.push({ keys: data[cat], cat: cat });
			for (const k of data[cat]) {
				this.catsByKey[k] = cat;
			}
		}
		this.cats = Object.keys(this.keysByCat);
		this.allKeys = Object.keys(this.catsByKey);
		this.options = {}; _extendOptions(this.options);
		if (this.pickRandom == false) {
			items = Pictures = getNItemsPerKeylist(this.numPics, this.keylists, this.options);
		} else {
			let keys = choose(this.allKeys, this.numPics * this.numCats);
			items = Pictures = genItemsFromKeys(keys, this.options);
			items.map(x => x.cat = this.catsByKey[x.key]);
		}
		shuffle(items);
		let wr = this.language == 'E' ? 'drag pictures to categories' : "ordne die bilder in kategorien";
		show_instruction(wr, dTitle, wr);
		mLinebreak(dTable);
		let dArea = mDiv(dTable, { display: 'flex', 'flex-wrap': 'wrap' });
		let containers, dWordArea;
		containers = this.containers = createContainers(this.cats, dArea, { w: 'auto', wmin: 150, wmax: 300, hmin: 250, fz: 24, fg: 'contrast' }); //['animals', 'sport', 'transport'], dArea);
		mLinebreak(dTable);
		dWordArea = this.dWordArea = mDiv(dTable, { h: 70, display: 'flex', 'flex-wrap': 'wrap', layout: 'fhcc' });
		for (const item of items) { let d = miPic(item, dWordArea); iAdd(item, { div: d }); }
		enableDD(items, containers, this.dropHandler.bind(this), false);
		mLinebreak(dTable, 50);
		mButton('Done!', this.controller.evaluate.bind(this.controller), dTable, { fz: 28, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		TOMain = setTimeout(() => {
			for (const p of Pictures) {
				if (!p.isCorrect) {
					mAppend(this.dWordArea, iDiv(p));
					if (this.trialNumber == 1) miAddLabel(p, { bg: '#00000080', margin: 4, fz: 20 });
				}
			}
		}, 1000);
		return 1200;
	}
	eval() {
		this.piclist = Pictures;
		Selected = { piclist: this.piclist, feedbackUI: this.piclist.map(x => iDiv(x)), sz: getRect(iDiv(this.piclist[0])).h };
		let isCorrect = true;
		for (const p of Pictures) {
			let label = p.label;
			let d = iDiv(p);
			let cont = d.parentNode;
			for (const c of this.containers) {
				if (iDiv(c) == cont) {
					p.classified = true;
					if (p.cat == c.label) p.isCorrect = true;
					else { p.isCorrect = isCorrect = false; }
					break;
				}
			}
			if (!p.classified) p.isCorrect = isCorrect = false;
		}
		return isCorrect;
	}
}
class GElim extends Game {
	constructor(name, o) { super(name, o); }
	startGame() {
		this.correctionFunc = () => { writeSound(); playSound('incorrect1'); return this.spokenFeedback ? 1800 : 300; };
		this.successFunc = () => { Goal.pics.map(x => iDiv(x).style.opacity = .3); successPictureGoal(); }
	}
	start_Level() {
		super.start_Level();
		this.keys = this.keys.filter(x => containsColorWord(x));
	}
	prompt() {
		this.piclist = [];
		let colorKeys = this.numColors > 1 ? choose(this.colors, this.numColors) : null;
		let showRepeat = this.numRepeat > 1;
		let rows = this.numColors > 1 ? this.numColors : undefined;
		myShowPics(this.interact.bind(this), { bg: 'white' },// { contrast: this.contrast, },
			{
				showRepeat: showRepeat, colorKeys: colorKeys, numRepeat: this.numRepeat,
				contrast: this.contrast, rows: rows
			});
		let [sSpoken, sWritten, piclist] = logicMulti(Pictures);
		this.piclist = piclist;
		Goal = { pics: this.piclist, sammler: [] };
		show_instruction(sWritten, dTitle, sSpoken, { fz: 22, voice: 'zira' });
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		let msg = this.language == 'D' ? 'noch einmal!' : 'try again!'
		showFleetingMessage(msg, 0, { margin: -8, fz: 22 }, true);
		return 1000;
	}
	activate() {
		for (const p of this.piclist) { if (p.isSelected) toggleSelectionOfPicture(p); }
		this.piclist = [];
	}
	interact(ev) {
		ev.cancelBubble = true;
		if (!canAct()) return;
		let pic = findItemFromEvent(Pictures, ev);
		writeSound(); playSound('hit');
		if (Goal.pics.includes(pic)) {
			removePicture(pic);
			Goal.sammler.push(pic);
		}
		if (Goal.pics.length == Goal.sammler.length) this.controller.evaluate.bind(this.controller)(true);
		else if (!Goal.pics.includes(pic)) { this.lastPic = pic; this.controller.evaluate.bind(this.controller)(false); }
	}
	eval(isCorrect) {
		Selected = { piclist: this.piclist, feedbackUI: isCorrect ? Goal.pics.map(x => iDiv(x)) : iDiv(this.lastPic) };
		return isCorrect;
	}
}
class GHouse extends Game {
	constructor(name, o) { super(name, o); }
	startGame() {
		this.correctionFunc = () => {
			mStyle(Goal.buttonCorrect, { bg: 'green' });
			animate(Goal.buttonCorrect, 'komisch', 1000);
			mStyle(this.dGraph, { opacity: 1 });
			return 20000;
		};
		this.failFunc = () => {
			if (Goal.choice == Goal.correctChoice) { mStyle(Goal.buttonClicked, { bg: 'green' }); mCheckit(Goal.feedbackUI, 100); }
			else { mXit(Goal.buttonClicked, 100); }
			mStyle(this.dGraph, { opacity: 1 });
		}
		this.successFunc = () => {
			if (Goal.choice == Goal.correctChoice) { mStyle(Goal.buttonClicked, { bg: 'green' }); mCheckit(Goal.feedbackUI, 100); }
			else { mXit(Goal.buttonClicked, 100); }
			mStyle(this.dGraph, { opacity: 1 });
		}
	}
	prompt() {
		if (isdef(this.graph)) this.graph.clear();
		this.trials = 1;
		let n = randomNumber(this.minRooms, this.maxRooms); //console.log('n',n)
		let qFuncs = [this.areRoomsConnected.bind(this)];
		if (n > 5) qFuncs.push(this.isThereAPath.bind(this));
		let q = this.q = this.level > 1 ? arrLast(qFuncs) : chooseRandom(qFuncs); // this.isThereAPath.bind(this);//
		let s = n;
		let wTotal = n < 4 || n > 12 ? 700 : n > 10 ? 600 : 500;
		let dGridOuter = mDiv(dTable, { wmin: wTotal, hmin: 400 });
		let house = this.house = iHouse(dGridOuter, s, { w: wTotal, h: 400 });
		let rooms = this.rooms = house.rooms.map(x => Items[x]);
		this.addLabelsToRooms();
		let dirs = coin() ? ['n', 'w'] : ['s', 'e'];
		let doors = this.doors = [];
		for (const r of rooms) {
			let dir = coin() ? dirs[0] : dirs[1];
			let door = iDoor(r.id, dir);
			doors.push(door);
		}
		if (q.name.includes('Path')) hideOuterDoors(house);
		mLinebreak(dTable, 20);
		this.dChoices = mDiv(dTable);
		mLinebreak(dTable);
		let r = getRect(dGridOuter); //console.log('r',r);
		mStyle(dGridOuter, { position: 'relative' });
		let dGraph = this.dGraph = mDiv(dGridOuter, { box: true, align: 'left', position: 'absolute', bg: '#ffffff80', top: 0, left: 0, w: r.w, h: r.h });
		let innerStyles = { box: true, align: 'left', position: 'absolute', bg: '#ffffff80', top: 0, left: 0, w: r.w, h: r.h };
		let g1 = this.graph = new UIGraph(dGraph, { edge: { bg: 'blue' }, outer: { align: 'left', w: wTotal, h: 400 }, inner: innerStyles });//{ box: true, align: 'left', position: 'absolute', bg: '#ffffff80', top: 0, left: 0, w: r.w, h: r.h });
		convertToGraphElements(g1, house);
		g1.presetLayout();
		g1.reset();
		mStyle(dGraph, { opacity: 0 });
		q();
		this.controller.activateUi.bind(this.controller)();
	}
	isThereAPath() {
		let house = this.house;
		let corners = getCornerRoomsDict(house); //console.log('corners', corners); 
		let clist = Object.values(corners);	//console.log('cornerlist',clist);
		let g = this.graph;
		let id = g.getNodeWithMaxDegree(clist); //console.log('max degree node:',id);
		let cornerRoomIds = g.sortNodesByDegree(clist).map(x => x.id());
		let [r1, r2] = [Items[cornerRoomIds[0]], Items[cornerRoomIds[1]]]; //take first 2 nodes, and order by dir: n,e,
		if (r1 == r2 || areNeighbors(r1, r2) && cornerRoomIds.length > 2) r2 = Items[cornerRoomIds[2]];
		if (!r1.isW && (r2.isW || !r1.N)) [r1, r2] = [r2, r1];
		let roomFrom = r1.id; // corners.NW; 	// console.log('nw', nw)
		let funcs = this.dijkstra = g.getShortestPathsFrom(roomFrom);	// console.log('funcs', funcs);
		let roomTo = r2.id; //null;
		for (const k in corners) {
			if (k != 'NW') {
				let dist = funcs.distanceTo('#' + corners[k]);
				if (dist != Infinity && dist >= 3) {
					roomTo = corners[k];
					break;
				} //else console.log('distance to', k, dist);
			}
		}
		if (!roomTo) { roomTo = corners.SE; }
		this.roomFrom = roomFrom;
		this.roomTo = roomTo;
		let sp1 = {
			D: ['gibt es einen weeg von', 'gibt es einen weg von'],
			E: ['is there a path from', 'is there a path from'],
			S: ['hay un camino de', 'hay un camino de'],
			F: ["y a 'til un chemin de", "y a 'til un chemin de"],
		};
		let sp2 = {
			D: ['zu', 'zu'],
			E: ['to', 'to'],
			S: ['a', 'a'],
			F: ['!. a! ', 'à'],
		};
		let fill1 = [`. "${Items[roomFrom].id.toUpperCase()}"! `, ` ${Items[roomFrom].id} `];
		let fill2 = [`. "${Items[roomTo].id.toUpperCase()}"`, ` ${Items[roomTo].id}`];
		let l = 'E'; //this.language;
		let sp = sp1[l][0] + fill1[0] + sp2[l][0] + fill2[0] + '?';
		let wr = sp1[l][1] + fill1[1] + sp2[l][1] + fill2[1] + '?';
		let voice = this.language == 'E' ? coin() ? 'ukMale' : 'zira' : this.language;
		show_instruction(wr, dTitle, sp, { voice: voice });
		let answer = funcs.distanceTo('#' + roomTo) != Infinity;
		let correct, incorrect;
		if (answer) { correct = { num: 1, text: 'yes' }; incorrect = [{ num: 0, text: 'no' }]; }
		else { correct = { num: 0, text: 'no' }; incorrect = [{ num: 1, text: 'yes' }]; }
		createMultipleChoiceElements(correct, incorrect, this.dChoices, iDiv(this.house), {});
	}
	howMany() {
		let wr = this.language == 'E' ? 'how many units are there in this house?' : "wieviele wohneinheiten hat dieses haus?";
		show_instruction(wr, dTitle, wr);
		let numUnits = this.graph.getNumComponents(); //howManyComponents();
		let otherChoices = [
			numUnits * 2,
			Math.round(numUnits / 2),
			numUnits + randomNumber(1, 10)
		];
		let di = {};
		for (let i = 0; i < otherChoices.length; i++) {
			let n = otherChoices[i];
			while (n == numUnits || isdef(di[n])) { n += 1; } //console.log('!!!!!'); }
			di[n] = true;
			otherChoices[i] = n;
		}
		createMultipleChoiceElements({ num: numUnits, text: numUnits },
			otherChoices.map(x => ({ num: x, text: x })), this.dChoices, iDiv(this.house), {});
	}
	areRoomsConnected() {
		let wr = this.language == 'E' ? 'are all rooms connected?' : "sind alle zimmer verbunden?";
		showInstruction(wr, dTitle, wr);
		let numUnits = this.graph.getNumComponents(); //howManyComponents();
		let correct, incorrect;
		if (numUnits == 1) { correct = { num: 1, text: 'yes' }; incorrect = [{ num: 0, text: 'no' }]; }
		else { correct = { num: 0, text: 'no' }; incorrect = [{ num: 1, text: 'yes' }]; }
		createMultipleChoiceElements(correct, incorrect, this.dChoices, iDiv(this.house), {});
	}
	showPath() {
		mStyle(this.dGraph, { opacity: 1 });
	}
	addLabelsToRooms() {
		let roomlist = ['bedroom', 'livingroom', 'bathroom', 'kitchen'];
		sortByFunc(this.rooms, x => x.rect.w * x.rect.h);
		this.rooms.map(x => addLabel(x, x.ch, {}));
	}
	addOneDoorPerRoom(directions) {
		for (const r of this.rooms) {
			let door = makeRandomDoor(r, this.house, directions); this.doors.push(door);
		}
	}
	addWallFinderByMouseClick() {
		dTable.onclick = ev => {
			console.log(ev.clientX, ev.clientY);
			let w = findWall(ev.clientX, ev.clientY, this.walls);
			console.log('found wall', w)
		}
	}
	addFurnitureItems() {
		let keys = ['bed', 'bathtub', 'chair', 'couch and lamp', 'toilet', 'door', 'table'];//ByGroupSubgroup.Objects.household;
		let items = Pictures = genItemsFromKeys(keys);
		console.assert(arrLast(items).key == 'table', 'NOOOOOOO');
		let itable = arrLast(items);
		shuffle(items);
		let dWordArea = this.dWordArea = mDiv(dTable, { h: 70, display: 'flex', 'flex-wrap': 'wrap', layout: 'fhcc' });
		for (const item of items) { let d = miPic(item, dWordArea); iAdd(item, { div: d }); }
		mStyle(iDiv(itable), { fg: BROWN });
		enableDD(items, rooms, this.dropHandler.bind(this), false);
	}
	eval() {
		clearFleetingMessage();
		Selected = { reqAnswer: G.correctAnswer, answer: Goal.choice.text, feedbackUI: Goal.buttonClicked };
		return (Goal.buttonClicked == Goal.buttonCorrect);
	}
}
class GMaze extends Game {
	constructor(name, o) { super(name, o); }
	clear() { super.clear(); if (isdef(this.cy)) { this.cy.destroy(); } }//maze.clear();this.maze=null;clearElement(dTable);console.log('MAZE CLEARING!')} }
	startGame() {
		this.correctionFunc = () => {
			mStyle(Goal.buttonCorrect, { bg: 'green' });
			animate(Goal.buttonCorrect, 'komisch', 1000);
			if (Goal.correctChoice.text == 'yes') this.maze.breadCrumbs(this.path); else this.maze.colorComponents();
			return 20000;
		};
		this.failFunc = () => {
			if (Goal.choice == Goal.correctChoice) { mStyle(Goal.buttonClicked, { bg: 'green' }); mCheckit(Goal.feedbackUI, 100); }
			else { mXit(Goal.buttonClicked, 100); }
		}
		this.successFunc = () => {
			if (Goal.choice == Goal.correctChoice) { mStyle(Goal.buttonClicked, { bg: 'green' }); mCheckit(Goal.feedbackUI, 100); }
			else { mXit(Goal.buttonClicked, 100); }
		}
	}
	startRound() { if (isdef(this.cy)) this.cy.destroy(); clearElement(dTable); } //clearElement(dTable); this.maze = null; }// if (isdef(this.maze)) this.maze.clear(); }
	prompt() {
		this.trials = 1;
		let maze = this.maze = new MazeGraph(dTable, this.rows, this.cols, this.sz, this.gap);
		this.cy = maze.cy;
		mLinebreak(dTable, 20);
		this.dChoices = mDiv(dTable);
		mLinebreak(dTable);
		this.isThereAPath(maze);
		this.controller.activateUi.bind(this.controller)();
	}
	isThereAPath(maze) {
		let cellStart = maze.getTopLeftCell();
		mCellContent(iDiv(cellStart), { w: '50%', h: '50%', fz: '60%', bg: 'green', fg: 'white', rounding: '50%' }, 'A');
		let cellGoal = maze.getBottomRightCell();
		mCellContent(iDiv(cellGoal), { w: '50%', h: '50%', fz: '60%', bg: 'red', fg: 'white', rounding: '50%' }, 'B');
		[this.roomFrom, this.roomTo] = [cellStart.nodeId, cellGoal.nodeId];
		let sp1 = {
			D: ['gibt es einen weeg von', 'gibt es einen weg von'],
			E: ['is there a path from', 'is there a path from'],
			S: ['hay un camino de', 'hay un camino de'],
			F: ["y a 'til un chemin de", "y a 'til un chemin de"],
		};
		let sp2 = {
			D: ['zu', 'zu'],
			E: ['to', 'to'],
			S: ['a', 'a'],
			F: ['!. a! ', 'à'],
		};
		let fill1 = [`. "A"! `, ` A `];
		let fill2 = [`. "B"`, ` B`];
		let l = this.language;
		let sp = sp1[l][0] + fill1[0] + sp2[l][0] + fill2[0] + '?';
		let wr = sp1[l][1] + fill1[1] + sp2[l][1] + fill2[1] + '?';
		let voice = this.language == 'E' ? coin() ? 'ukMale' : 'zira' : this.language;
		show_instruction(wr, dTitle, sp, { voice: voice });
		let path = this.path = maze.getShortestPathFromTo(this.roomFrom, this.roomTo);
		console.assert(path.length < Infinity, 'WAAAAAAAAAAAAAAS?');
		if (coin(this.level > 2 ? 50 : 40)) maze.cutPath(this.path, .5, .75);
		let len = maze.getLengthOfShortestPath(this.roomFrom, this.roomTo); //verify that no longer a path!!!!!
		let answer = len != Infinity;
		let correct, incorrect;
		if (answer) { correct = { num: 1, text: 'yes' }; incorrect = [{ num: 0, text: 'no' }]; }
		else { correct = { num: 0, text: 'no' }; incorrect = [{ num: 1, text: 'yes' }]; }
		createMultipleChoiceElements(correct, incorrect, this.dChoices, maze.dMaze, {});
	}
	eval() {
		clearFleetingMessage();
		Selected = { reqAnswer: G.correctAnswer, answer: Goal.choice.text, feedbackUI: Goal.buttonClicked };
		return (Goal.buttonClicked == Goal.buttonCorrect);
	}
}
class GMem extends Game {
	constructor(name, o) { super(name, o); }
	clear() { clearTimeout(this.TO); showMouse(); }
	prompt() {
		this.trials = 1;
		myShowPics(this.interact.bind(this),
			{ border: '3px solid #ffffff80' },
			{});
		setGoal();
		let wr = (this.language == 'E' ? 'remember ' : 'merke dir ') + (this.level > 2 ? (this.language == 'E' ? 'all' : 'alle') : Goal.label);
		show_instruction(wr, dTitle, wr);
		let secs = calcMemorizingTime(this.numPics, this.level > 2);
		hideMouse();
		TOMain = setTimeout(() => turnCardsAfter(secs), 300, this.level >= 5); //needed fuer ui update! sonst verschluckt er last label
	}
	interact(ev) {
		ev.cancelBubble = true;
		if (!canAct()) return;
		let pic = findItemFromEvent(Pictures, ev);
		turnFaceUpSimple(pic);
		if (this.trialNumber == this.trials - 1) turnFaceUpSimple(Goal);
		TOMain = setTimeout(() => this.controller.evaluate.bind(this.controller)(ev), 300);
	}
}
class GMissingLetter extends Game {
	constructor(name, o) { super(name, o); }
	start_Level() {
		super.start_Level();
		this.maxPosMissing = this.posMissing == 'start' ? this.numMissing - 1 : 100;
	}
	prompt() {
		myShowPics(() => fleetingMessage('just enter the missing letter!'));
		setGoal();
		if (this.instruction == 'all') {
			let wr = (this.language == 'E' ? 'complete ' : "ergänze ") + `<b>${Goal.label.toUpperCase()}</b>`;
			let sp = (this.language == 'E' ? 'complete ' : "ergänze ") + `${Goal.label}`;
			show_instruction(wr, dTitle, sp);
		} else if (this.instruction == 'spokenGoal') {
			let wr = this.language == 'E' ? 'complete the word' : "ergänze das wort";
			let sp = (this.language == 'E' ? 'complete' : "ergänze") + ' ' + Goal.label;
			show_instruction(wr, dTitle, sp);
		} else {
			let wr = this.language == 'E' ? 'complete the word' : "ergänze das wort";
			show_instruction(wr, dTitle, wr);
		}
		mLinebreak(dTable, 20);
		let style = { margin: 6, fg: 'white', display: 'inline', bg: 'transparent', align: 'center', border: 'transparent', outline: 'none', family: 'Consolas', fz: 80 };
		let d = createLetterInputs(Goal.label.toUpperCase(), dTable, style); // acces children: d.children
		let indices = getIndicesCondi(Goal.label, (x, i) => isAlphaNum(x) && i <= this.maxPosMissing);
		this.nMissing = Math.min(indices.length, this.numMissing);
		let ilist = choose(indices, this.nMissing); sortNumbers(ilist);
		this.inputs = [];
		for (const idx of ilist) {
			let inp = d.children[idx];
			inp.innerHTML = '_';
			mClass(inp, 'blink');
			this.inputs.push({ letter: Goal.label[idx].toUpperCase(), div: inp, index: idx });
		}
		mLinebreak(dTable);
		let msg = this.composeFleetingMessage();
		let ms = this.instruction == 'all' ? 3000 : this.instruction == 'spokenGoal' ? 9000 : 15000;
		showFleetingMessage(msg, ms);
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		let selinp = Selected.inp;
		sayTryAgain();
		TOMain = setTimeout(() => {
			let d = selinp.div;
			d.innerHTML = '_';
			mClass(d, 'blink');
		}, 1200);
		showFleetingMessage(this.composeFleetingMessage(), 3000);
		return 1500;
	}
	activate() {
		addKeyup('G', ev => {
			if (!isLetter(ev.key)) return;
			clearFleetingMessage();
			if (!canAct()) return;
			let charEntered = ev.key.toString();
			if (!isAlphaNum(charEntered)) return;
			Selected = { lastLetterEntered: charEntered.toUpperCase() };
			if (this.nMissing == 1) {
				let d = Selected.feedbackUI = this.inputs[0].div;
				Selected.positiveFeedbackUI = iDiv(Goal);
				Selected.lastIndexEntered = this.inputs[0].index;
				Selected.inp = this.inputs[0];
				d.innerHTML = Selected.lastLetterEntered;
				mRemoveClass(d, 'blink');
				let result = buildWordFromLetters(mParent(d));
				this.controller.evaluate.bind(this.controller)(result);
			} else {
				let ch = charEntered.toUpperCase();
				for (const inp of this.inputs) {
					if (inp.letter == ch) {
						Selected.lastIndexEntered = inp.index;
						Selected.inp = inp;
						let d = Selected.feedbackUI = inp.div;
						d.innerHTML = ch;
						mRemoveClass(d, 'blink');
						removeInPlace(this.inputs, inp);
						this.nMissing -= 1;
						break;
					}
				}
				if (nundef(Selected.lastIndexEntered)) {
					showFleetingMessage('you entered ' + Selected.lastLetterEntered);
					sayRandomVoice('try a different letter!', 'anderer Buchstabe!')
				}
				showFleetingMessage(this.composeFleetingMessage(), 3000);
			}
		})
	}
	eval(word) {
		let answer = normalize(word, this.language);
		let reqAnswer = normalize(Goal.label, this.language);
		Selected.reqAnswer = reqAnswer;
		Selected.answer = answer;
		if (answer == reqAnswer) return true;
		else if (this.language == 'D' && fromUmlaut(answer) == fromUmlaut(reqAnswer)) {
			return true;
		} else {
			return false;
		}
	}
	composeFleetingMessage() {
		let lst = this.inputs;
		let msg = lst.map(x => x.letter).join(',');
		let edecl = lst.length > 1 ? 's ' : ' ';
		let ddecl = lst.length > 1 ? 'die' : 'den';
		let s = (this.language == 'E' ? 'Type the letter' + edecl : 'Tippe ' + ddecl + ' Buchstaben ');
		return s + msg;
	}
}
class GNamit extends Game {
	constructor(name, o) { super(name, o); }
	startGame() { this.correctionFunc = showCorrectPictureLabels; this.failFunc = failSomePictures; }
	prompt() {
		this.showLabels = false;
		myShowPics(null, {}, { rows: 1 });
		Pictures.map(x => x.correctLabel = x.label);
		Goal = { pics: Pictures };
		let wr = this.language == 'E' ? 'drag labels to pictures' : "ordne die texte den bildern zu";
		show_instruction(wr, dTitle, wr);
		mLinebreak(dTable);
		mLinebreak(dTable, 50);
		let keys = Pictures.map(x => x.key);
		shuffle(keys);
		G.showLabels = true;
		let titems = this.letters = myShowLabels(null, undefined, { rows: 1, showLabels: true }, keys);
		titems.map(x => iDiv(x).style.cursor = 'pointer');
		mLinebreak(dTable, 50);
		enableDD(this.letters, Pictures, this.dropHandler.bind(this), true, false, null);
		mButton('Done!', this.controller.evaluate.bind(this.controller), dTable, { fz: 32, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
		this.controller.activateUi.bind(this.controller)();
	}
	dropHandler(source, target, isCopy = true) {
		let dSource = iDiv(source);
		let dTarget = iDiv(target);
		let label = iLabel(target);
		let div = iDiv(target);
		addLabel(target, source.label, {});
	}
	trialPrompt() {
		this.failFunc();
		sayTryAgain();
		TOMain = setTimeout(() => { removeMarkers(); Pictures.map(x => removeLabel(x)) }, 1200);
		return 1500;
	}
	eval() {
		this.piclist = Pictures;
		Selected = { piclist: this.piclist, feedbackUI: this.piclist.map(x => iDiv(x)), sz: getRect(iDiv(this.piclist[0])).h };
		let isCorrect = true;
		for (const p of Pictures) {
			let correctLabel = p.correctLabel;
			let dLabel = iLabel(p);
			if (nundef(dLabel) || p.label != correctLabel) p.isCorrect = isCorrect = false;
			else p.isCorrect = true;
		}
		return isCorrect;
	}
}
class GPremem extends Game {
	constructor(name, o) { super(name, o); this.piclist = []; }
	prompt() {
		this.piclist = [];
		this.showLabels = false;
		myShowPics(this.interact.bind(this), { border: '3px solid #ffffff80' }, {});
		let wr = this.language == 'E' ? 'click any picture' : 'click irgendein Bild';
		show_instruction(wr, dTitle, wr);
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		for (const p of this.piclist) { toggleSelectionOfPicture(p); }
		this.piclist = [];
		show_instruction('try again: click any picture', dTitle, 'try again: click any picture');
		return 10;
	}
	interact(ev) {
		ev.cancelBubble = true;
		if (!canAct()) return;
		let pic = findItemFromEvent(Pictures, ev);
		if (!isEmpty(this.piclist) && this.piclist.length < this.numRepeat - 1 && this.piclist[0].label != pic.label) return;
		toggleSelectionOfPicture(pic, this.piclist);
		if (isEmpty(this.piclist)) {
			let wr = this.language == 'E' ? 'click any picture' : 'click irgendein Bild';
			show_instruction(wr, dTitle, wr);
		} else if (this.piclist.length < this.numRepeat - 1) {
			let wr = (this.language == 'E' ? 'click another ' : 'click ein andres Bild mit ');
			show_instruction(wr + `<b>${pic.label.toUpperCase()}</b>`, dTitle, wr + pic.label);
		} else if (this.piclist.length == this.numRepeat - 1) {
			let picGoal = firstCond(Pictures, x => x.label == pic.label && !x.isSelected);
			setGoal(picGoal.index);
			let wr = (this.language == 'E' ? 'click the ' + (this.numRepeat == 2 ? 'other ' : 'last ')
				: 'click das ' + (this.numRepeat == 2 ? 'andere ' : 'letzte ') + ' Bild mit')
			show_instruction(wr + `<b>${picGoal.label.toUpperCase()}</b>`, dTitle, wr + picGoal.label);
		} else {
			this.controller.evaluate.bind(this.controller)(this.piclist);
		}
	}
	eval(piclist) {
		Selected = { piclist: piclist, feedbackUI: piclist.map(x => iDiv(x)), sz: getRect(iDiv(piclist[0])).h };
		let req = Selected.reqAnswer = piclist[0].label;
		Selected.answer = piclist[piclist.length - 1].label;
		if (Selected.answer == req) { return true; } else { return false; }
	}
}
class GRiddle extends Game {
	constructor(name, o) { super(name, o); }
	startGame() {
		this.successFunc = successThumbsUp; this.failFunc = failThumbsDown;
		this.correctionFunc = () => {
			mStyle(Goal.buttonCorrect, { bg: 'green' });
			animate(Goal.buttonCorrect, 'komisch', 1000);
			return 20000;
		};
	}
	prompt() {
		this.trials = 1;
		show_instruction('Solve the Riddle:', dTitle, 'Solve the Riddle:');
		let wp = this.wp = getRandomWP(this.minIndex, this.maxIndex);
		let haveResult = wp.isTextResult = instantiateNames(wp);
		if (!haveResult) instantiateNumbers(wp);
		mLinebreak(dTable, 2);
		showHiddenThumbsUpDown(90);
		mLinebreak(dTable);
		let dArea = this.textArea = mDiv(dTable, { w: '70%' });
		let d = mText(wp.text, dArea, { fz: 28 });
		mLinebreak(dTable, 20);
		let dResult = this.dResult = mDiv(dTable);
		Goal = { label: wp.result.text };
		this.createMultipleChoiceElements();
		mLinebreak(dTable);
		this.controller.activateUi.bind(this.controller)();
	}
	createMultipleChoiceElements() {
		let wp = this.wp;
		let choices = [], nums = [], texts = [];
		if (wp.isTextResult == true) {
			texts = Object.values(wp.diNames);
			for (let i = 0; i < texts.length; i++) { choices.push({ number: 0, text: texts[i] }); }
			Goal.correctChoice = firstCond(choices, x => x.text == Goal.label);
		} else if (wp.isFractionResult == true) {
			let res = wp.result.number; //das ist eine fraction
			if (res.n / res.d > 2) {
				wp.result.isMixed = true;
				wp.result.mixed = getMixedNumber(res.n, res.d);
			}
			nums = get3FractionVariants(res);
			texts = nums.map(x => getTextForFractionX(x.n, x.d));
			wp.result.text = texts[0];
			for (let i = 0; i < texts.length; i++) { choices.push({ number: nums[i], text: texts[i] }); }
			Goal.correctChoice = firstCond(choices, x => x.text == wp.result.text);
		} else {
			let res = wp.result.number;
			nums = [res, res + randomNumber(1, 25), res / randomNumber(2, 5), res * randomNumber(2, 5)];
			texts = nums.map(x => (Math.round(x * 100) / 100));
			for (let i = 0; i < texts.length; i++) { choices.push({ number: nums[i], text: texts[i] }); }
			Goal.correctChoice = choices[0];
		}
		shuffle(choices);
		if (coin()) shuffle(choices);
		Goal.choices = choices;
		let dParent = this.dResult;
		let idx = 0;
		for (const ch of choices) {
			let dButton = mButton(ch.text, this.onClickChoice.bind(this), dParent, { wmin: 100, fz: 36, margin: 20, rounding: 4, vpadding: 4, hpadding: 10 }, ['toggleButtonClass']);
			dButton.id = 'bChoice_' + idx; idx += 1;
			if (ch.text == wp.result.text) {
				Goal.choice = ch.toString();
				Goal.buttonCorrect = dButton; //else console.log('ch', ch.toString(), 'res', wp.result.text)
			}
		}
	}
	onClickChoice(ev) {
		let id = evToClosestId(ev);
		let b = mBy(id);
		let index = Number(stringAfter(id, '_'));
		Goal.choice = Goal.choices[index];
		Goal.buttonClicked = b;
		if (Goal.choice == Goal.correctChoice) { mStyle(b, { bg: 'green' }); mCheckit(this.textArea, 100); }
		else { mXit(b, 100); }
		this.controller.evaluate.bind(this.controller)();
	}
	eval() {
		clearFleetingMessage();
		Selected = { delay: 5000, reqAnswer: this.wp.result.number, answer: Goal.choice.number, feedbackUI: Goal.buttonClicked };
		if (this.wp.isTextResult) { Selected.reqAnswer = this.wp.result.text; Selected.answer = Goal.choice.text; }
		return (Goal.buttonClicked == Goal.buttonCorrect);
	}
	createInputElements() {
		this.inputBox = addNthInputElement(this.dResult, 0);
		this.defaultFocusElement = this.inputBox.id;
		onclick = () => mBy(this.defaultFocusElement).focus();
		mBy(this.defaultFocusElement).focus();
	}
	activate() { }//this.activate_input(); }
	eval_dep(ev) {
		console.log('#', this.trialNumber, 'of', this.trials);
		clearFleetingMessage();
		Selected = {};
		let answer = normalize(this.inputBox.value, 'E');
		let reqAnswer = normalize(this.wp.result.text, 'E');
		console.log('answer', answer, 'req', reqAnswer);
		let isCorrect = answer == reqAnswer;
		Selected = { reqAnswer: reqAnswer, answer: answer, feedbackUI: isCorrect ? Goal.buttonClicked : Goal.buttonCorrect };
		return (answer == reqAnswer);
	}
	trialPrompt_dep() {
		sayTryAgain();
		let n = this.trialNumber; // == 1 ? 1 : (this.trialNumber + Math.floor((Goal.label.length - this.trialNumber) / 2));
		showFleetingMessage('try again!', 0, {}, true);
		this.inputBox = addNthInputElement(this.dResult, this.trialNumber);
		this.defaultFocusElement = this.inputBox.id;
		mLinebreak(dTable);
		return 10;
	}
	activate_input() {
		this.inputBox.onkeyup = ev => {
			if (!canAct()) return;
			if (ev.key === "Enter") {
				ev.cancelBubble = true;
				this.controller.evaluate.bind(this.controller)(ev);
			}
		};
		this.inputBox.focus();
	}
}
class GSayPic extends Game {
	constructor(name, o) { super(name, o); }
	clear() { Speech.stopRecording(); }
	prompt() {
		myShowPics();
		setGoal();
		let wr = (this.language == 'E' ? 'say: ' : "sage: ");
		show_instruction(wr + `<b>${Goal.label.toUpperCase()}</b>`, dTitle); //, wr+Goal.label);
		animate(dInstruction, 'pulse800' + bestContrastingColor(this.color, ['yellow', 'red']), 900);
		mLinebreak(dTable, 25);
		MicrophoneUi = mMicrophone(dTable, this.color);
		MicrophoneHide();
		TOMain = setTimeout(this.controller.activateUi.bind(this.controller), 200);
	}
	trialPrompt(nTrial) {
		sayRandomVoice(nTrial < 2 ? 'speak UP!!!' : 'Louder!!!', 'LAUTER!!!');
		animate(dInstruction, 'pulse800' + bestContrastingColor(this.color, ['yellow', 'red']), 500);
		return 600;
	}
	activate() {
		if (Speech.isSpeakerRunning()) {
			TOMain = setTimeout(this.activate.bind(this), 200);
		} else {
			TOMain = setTimeout(() => Speech.startRecording(this.language, this.controller.evaluate.bind(this.controller)), 100);
		}
	}
	eval(isfinal, speechResult, confidence, sessionId) {
		if (sessionId != SessionId) {
			alert('NOT THIS BROWSER!!!!!!'); return undefined;
		}
		let answer = Goal.answer = normalize(speechResult, this.language);
		let reqAnswer = Goal.reqAnswer = normalize(Goal.label, this.language);
		Selected = { reqAnswer: reqAnswer, answer: answer, feedbackUI: iDiv(Goal) };
		if (isEmpty(answer)) return false;
		else return isSimilar(answer, reqAnswer) || isList(Goal.info.valid) && firstCond(Goal.info.valid, x => x.toUpperCase() == answer.toUpperCase());
	}
}
class GSentence extends Game {
	constructor(name, o) {
		super(name, o);
		this.prevLanguage = this.language;
		this.language = 'E';
	}
	startGame() {
		this.correctionFunc = () => {
			let sent = this.sentenceList[0].join(' ');
			this.dWordArea.innerHTML = `<h1>${sent}</h1>`;
			if (this.spokenFeedback) sayRandomVoice(sent);
			return 3000;
		}
		this.successFunc = () => { mCheckit(this.dWordArea, 120); };
	}
	clear() { super.clear(); this.language = this.prevLanguage; }
	start_Level() {
		this.sentences = [];
		for (const s of EnglishSentences) {
			let slist = isList(s) ? s : [s];
			slist = slist.map(x => x.split(' '));
			if (slist[0].length <= this.maxWords && slist[0].length >= this.minWords) this.sentences.push(slist);
		}
	}
	dropHandler(source, target, isCopy = false, clearTarget = false) {
		let prevTarget = source.target;
		source.target = target;
		let dSource = iDiv(source);
		let dTarget = iDiv(target);
		if (clearTarget) {
			let ch = dTarget.children[0];
			let chSource = firstCond(Pictures, x => iDiv(x) == ch);
			if (chSource) {
				if (isdef(prevTarget)) {
					mAppend(iDiv(prevTarget), ch);
					chSource.target = prevTarget;
				} else {
					mAppend(this.dWordArea, ch);
					delete chSource.target;
				}
			}
			clearElement(dTarget);
		}
		if (isCopy) {
			let dNew = mText(dSource.innerHTML, dTarget, { wmin: 100, fz: 20, padding: 4, margin: 4, display: 'inline-block' });
			addDDSource(dNew, isCopy, clearTarget);
		} else {
			mAppend(dTarget, dSource);
		}
	}
	prompt() {
		show_instruction('form a correct sentence', dTitle, 'form a correct sentence');
		mLinebreak(dTable);
		let sl = this.sentenceList = chooseRandom(this.sentences);
		let words = this.sentenceList[0];
		let fz = 32;
		let h = fz * 1.25, wmin = fz * 1.25;
		let items = Pictures = [];
		let containers = this.containers = [];
		let options = _simpleOptions({ fz: fz, bg: 'transparent', fg: 'white', showPic: false, showLabels: true }, { wmin: wmin });
		let dArea = mDiv(dTable, { h: 150, display: 'flex', 'flex-wrap': 'wrap', layout: 'fhcc' });
		mLinebreak(dTable);
		let dWordArea = this.dWordArea = mDiv(dTable, { h: 70, wmin: 20, display: 'flex', 'flex-wrap': 'wrap', layout: 'fhcc' });//,{layout:'fhcc'})
		let i = 0;
		for (const word of words) {
			let item = { label: word, index: i };
			let container = { label: word, index: i };
			i += 1;
			let d = makeItemDiv(item, options);
			let dCont = mDiv(dArea, { wmin: wmin + 12, hmin: h + 10, bg: colorTrans('beige', .25), fg: 'black', margin: 12 });
			container.div = dCont;
			items.push(item);
			containers.push(container);
		}
		shuffle(items);
		items.map(x => { mAppend(dWordArea, iDiv(x)); mStyle(iDiv(x), { h: h, w: 'auto' }); });
		enableDD(items, containers, this.dropHandler.bind(this), false, true);
		mLinebreak(dTable, 50);
		mButton('Done!', this.controller.evaluate.bind(this.controller), dTable, { fz: 28, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		showFleetingMessage('Try again!', 0, { fg: 'white' });
		TOMain = setTimeout(() => { Pictures.map(x => mAppend(this.dWordArea, iDiv(x))); }, 1200);
		return 1500;
	}
	eval() {
		let words = [];
		for (const cont of this.containers) {
			let d = iDiv(cont);
			let ch = d.firstChild;
			if (ch && isdef(ch.firstChild)) {
				words.push(ch.firstChild.innerHTML);
			} else break;
		}
		let answer = words.join(' ');
		let isCorrect = false;
		for (const sent of this.sentenceList) {
			let variant = sent.join(' ');
			if (answer == variant) isCorrect = true;
		}
		Selected = { piclist: Pictures, feedbackUI: Pictures.map(x => iDiv(x)), sz: getRect(iDiv(Pictures[0])).h + 10 };
		return isCorrect;
	}
}
class GSteps extends Game {
	constructor(name, o) { super(name, o); }
	startGame() { this.correctionFunc = showCorrectWords; }
	start_Level() {
		super.start_Level();
		this.keys = this.keys.filter(x => containsColorWord(x));
	}
	prompt() {
		this.piclist = [];
		let colorKeys = this.numColors > 1 ? choose(this.colors, this.numColors) : null;
		let bg = this.numColors > 1 || this.numRepeat > 1 ? 'white' : 'random';
		let rows = this.numColors > 1 ? this.numColors : undefined;
		let showRepeat = this.numRepeat > 1;
		myShowPics(this.interact.bind(this), { bg: bg },// { contrast: this.contrast, },
			{ rows: rows, showRepeat: showRepeat, colorKeys: colorKeys, numRepeat: this.numRepeat, contrast: this.contrast });
		setMultiGoal(this.numSteps);
		let cmd = 'click';
		let spoken = [], written = [], corr = [];
		for (let i = 0; i < this.numSteps; i++) {
			let goal = Goal.pics[i];
			let sOrdinal = getOrdinal(goal.iRepeat);
			[written[i], spoken[i], corr[i]] = getOrdinalColorLabelInstruction(cmd, sOrdinal, goal.color, goal.label);
			goal.correctionPhrase = corr[i];
			cmd = 'then';
		}
		let sWritten = this.showVisualInstruction ? written.join('; ') : 'listen to instruction!';
		show_instruction(sWritten, dTitle, spoken.join('. '), { fz: 20 });
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		showFleetingMessage(this.message, 0);
		return 1000;
	}
	activate() {
		for (const p of this.piclist) { toggleSelectionOfPicture(p); }
		this.piclist = [];
	}
	interact(ev) {
		ev.cancelBubble = true;
		if (!canAct()) { console.log('no act'); return; }
		let pic = findItemFromEvent(Pictures, ev);
		toggleSelectionOfPicture(pic, this.piclist);
		if (this.piclist.length == Goal.pics.length) {
			clearFleetingMessage();
			Selected = { piclist: this.piclist }; this.controller.evaluate.bind(this.controller)();
		}
	}
	eval() {
		Selected = { piclist: this.piclist, feedbackUI: this.piclist.map(x => iDiv(x)), sz: getRect(iDiv(this.piclist[0])).h };
		let isCorrect = true;
		this.message = this.language == 'D' ? 'beachte die REIHENFOLGE!' : 'mind the ORDER!';
		for (let i = 0; i < this.piclist.length; i++) {
			let p = this.piclist[i];
			if (!Goal.pics.includes(p)) this.message = this.language == 'D' ? 'noch einmal!' : 'try again!';
			if (this.piclist[i] != Goal.pics[i]) isCorrect = false;
		}
		return isCorrect;
	}
}
class GSwap extends Game {
	constructor(name, o) {
		super(name, o);
		if (this.language == 'C') { this.prevLanguage = this.language; this.language = chooseRandom('E', 'D'); }
		ensureDictionary();
	}
	startGame() { this.correctionFunc = showCorrectLabelSwapping; } //this.successFunc = showCorrectLabelSwapping;  }
	clear() { super.clear(); if (isdef(this.prevLanguage)) this.language = this.prevLanguage; }
	start_Level() {
		this.keys = setKeysG(this, filterWordByLengthG, 25);
		if (this.keys.length < 25) { this.keys = setKeysG(this, filterWordByLengthG, 25, 'all'); }
		this.trials = 2;
	}
	dropHandler(source, target, isCopy = false, clearTarget = false) {
		let prevTarget = source.target;
		source.target = target;
		let dSource = iDiv(source);
		let dTarget = iDiv(target);
		if (clearTarget) {
			let ch = dTarget.children[0];
			let chSource = firstCond(Pictures, x => iDiv(x) == ch);
			if (chSource) {
				if (isdef(prevTarget)) {
					mAppend(iDiv(prevTarget), ch);
					chSource.target = prevTarget;
				} else {
					mAppend(this.dWordArea, ch);
					delete chSource.target;
				}
			}
			clearElement(dTarget);
		}
		if (isCopy) {
			let dNew = mText(dSource.innerHTML, dTarget, { wmin: 100, fz: 20, padding: 4, margin: 4, display: 'inline-block' });
			addDDSource(dNew, isCopy, clearTarget);
		} else {
			mAppend(dTarget, dSource);
		}
	}
	prompt() {
		show_instruction('swap letter to form words', dTitle, 'swap letter to form words');
		mLinebreak(dTable);
		let fz = 32;
		let options = _simpleOptions({ language: this.language, w: 200, h: 200, keySet: this.keys, luc: 'u', fz: fz, bg: 'random', fg: 'white', showLabels: true });
		let n = 2;
		let items = gatherItems(n, options); // items haben jetzt swaps dictionary
		let style = { margin: 3, cursor: 'pointer', fg: 'white', display: 'inline', bg: '#00000020', align: 'center', border: 'transparent', outline: 'none', family: 'Consolas', fz: 80 };
		for (const item of items) {
			let d1 = item.container = mDiv(dTable, { hmin: 250 });
			let d = iLetters(item.label, d1, style); //statt makeItemDiv
			iAdd(item, { div: d }); //this is the item's standard div now!
			let letters = item.letters = [];
			for (let i = 0; i < arrChildren(d).length; i++) {
				let ch = d.children[i];
				let l = {
					itemId: item.id, div: ch, i: i, letter: ch.innerHTML,
					swapInfo: item.swaps[i],
					state: 'swapped',
					isBlinking: false, fg: 'white', bg: 'transparent'
				};
				letters.push(l);
				ch.onclick = () => { startBlinking(l, item.letters, true) };
			}
			mStyle(d, { margin: 35 });
			delete item.swaps;
		}
		showPictureHints(Pictures, 'container');
		mLinebreak(dTable, 50);
		this.buttonDone = mButton('Done!', () => {
			if (!canAct()) return;
			for (let i = 0; i < Pictures.length; i++) {
				let p = Pictures[i];
				let blinking = getBlinkingLetter(p);
				if (!blinking) {
					let msg = 'You need to pick 1 letter to swap in EACH word!!!';
					Speech.say(msg);
					sayRandomVoice(msg);
					showFleetingMessage('You need to pick 1 letter to swap in EACH word!!!', 0, { fz: 30 });
					return;
				}
			}
			this.controller.evaluate.bind(this.controller)();
		}, dTable, { fz: 28, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		if (this.trialNumber % 2 == 0) showPictureHints(Pictures, 'container'); else showTextHints(Pictures, 'container', 'origLabel');
		TOMain = setTimeout(() => {
			for (const p of Pictures) {
				for (const l of p.letters) {
					l.state = 'swapped';
					if (isdef(l.swapInfo)) {
						iDiv(l).innerHTML = p.label[l.i];
					}
				}
			}
		}, 1500);
		return 1800;
	}
	activate() {
		if (this.trialNumber >= 1) { sayTryAgain(); showFleetingMessage('Try again!'); }
		else { showFleetingMessage('click one letter in each word!'); }
	}
	eval() {
		let n = Pictures.length;
		let blinkInfo = this.blinkInfo = [];
		clearFleetingMessage();
		for (let i = 0; i < n; i++) {
			let p = Pictures[i];
			let blinking = getBlinkingLetter(p);
			blinkInfo.push({ i: i, blinking: blinking });
		}
		for (let i = 0; i < n; i++) { let l = blinkInfo[i].blinking; if (!l) continue; stopBlinking(l); }
		for (const blinki of blinkInfo) { if (!blinki.blinking) { return false; } }
		let isCorrect = true;
		for (let i = 0; i < n; i++) {
			let b1 = blinkInfo[i].blinking;
			let b2 = blinkInfo[(i + 1) % blinkInfo.length].blinking;
			let item = Items[b1.itemId];
			let item2 = Items[b2.itemId];
			let l = item.letters[b1.i];
			let sw = l.swapInfo;
			if (nundef(sw)) { sw = l.swapInfo = { correct: { itemId: item.id, index: b1.i, l: b1.letter } }; }
			sw.temp = { itemId: item2.id, index: b2.i, l: b2.letter };
			item.testLabel = replaceAtString(item.label, b1.i, b2.letter);
			iDiv(l).innerHTML = b2.letter;
			l.state = 'temp';
		}
		for (const p of Pictures) { if (p.testLabel != p.origLabel) { isCorrect = false; } }
		let feedbackList = [];
		for (let i = 0; i < n; i++) {
			let item = Pictures[i];
			let d;
			if (isCorrect) d = iDiv(item.letters[item.iLetter]);
			else {
				let iLetter = blinkInfo[i].blinking.i;
				if (item.iLetter != iLetter) d = iDiv(item.letters[iLetter]);
			}
			if (isdef(d)) feedbackList.push(d);
		}
		Selected = { piclist: Pictures, feedbackUI: feedbackList, sz: getRect(iDiv(Pictures[0])).h, delay: 800 };
		return isCorrect;
	}
}
class GTouchColors extends Game {
	constructor(name, o) { super(name, o); }
	start_Level() {
		super.start_Level();
		this.keys = this.keys.filter(x => containsColorWord(x));
	}
	prompt() {
		let colorKeys = choose(this.colors, this.numColors);
		let rows = this.numColors;
		let showLabels = this.lang == 'C' || this.showLabels;
		console.log('showLabels', showLabels);
		myShowPics(this.controller.evaluate.bind(this.controller), { bg: 'white' }, { showLabels: showLabels, colorKeys: colorKeys, rows: rows });
		if (this.shuffle == true) {
			let dParent = iDiv(Pictures[0]).parentNode;
			shuffleChildren(dParent);
		}
		setGoal(randomNumber(0, Pictures.length - 1));
		let [written, spoken] = getOrdinalColorLabelInstruction('click'); //getColorLabelInstruction('click');
		show_instruction(written, dTitle, spoken);
		this.controller.activateUi.bind(this.controller)();
	}
	eval(ev) {
		ev.cancelBubble = true;
		let item = findItemFromEvent(Pictures, ev);
		Selected = { answer: item.label, reqAnswer: Goal.label, pic: item, feedbackUI: iDiv(item) };
		if (item == Goal) { return true; } else { return false; }
	}
}
class GTouchPic extends Game {
	constructor(name, o) { super(name, o); }
	prompt() {
		myShowPics(this.controller.evaluate.bind(this.controller), {}, { showLabels: (this.lang == 'C' || this.showLabels) });
		setGoal();
		let wr = 'click ';
		show_instruction(wr + `<b>${Goal.label.toUpperCase()}</b>`, dTitle, Goal.label);
		this.controller.activateUi.bind(this.controller)();
	}
}
class GWritePic extends Game {
	constructor(name, o) { super(name, o); }
	startGame() {
		this.correctionFunc = showCorrectWordInTitle;
		onkeydown = ev => {
			if (!canAct()) return;
			if (isdef(this.inputBox)) { this.inputBox.focus(); }
		}
	}
	start_Level() {
		this.keys = setKeysG(this, filterWordByLengthG, 25);
		if (this.keys.length < 25) { this.keys = setKeysG(this, filterWordByLengthG, 25, 'all'); }
	}
	prompt() {
		let showLabels = this.showLabels == true && this.labels == true;
		myShowPics(() => mBy(this.defaultFocusElement).focus(), {}, { showLabels: showLabels });
		setGoal();
		if (this.instruction == 'all') {
			let wr = (this.language == 'E' ? 'type ' : "schreib' ");
			show_instruction(wr + `<b>${Goal.label.toUpperCase()}</b>`, dTitle, wr + Goal.label);
		} else if (this.instruction == 'spokenGoal') {
			let wr = this.language == 'E' ? 'type the correct word' : "schreib' das passende wort";
			let sp = (this.language == 'E' ? 'type' : "schreib'") + ' ' + Goal.label;
			show_instruction(wr, dTitle, sp);
		} else {
			let wr = this.language == 'E' ? 'type the correct word' : "schreib' das passende wort";
			show_instruction(wr, dTitle, wr);
		}
		mLinebreak(dTable, 20);
		this.inputBox = addNthInputElement(dTable, this.trialNumber);
		this.defaultFocusElement = this.inputBox.id;
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		let n = this.trialNumber == 1 ? 1 : (this.trialNumber + Math.floor((Goal.label.length - this.trialNumber) / 2));
		showFleetingMessage(Goal.label.substring(0, n));
		mLinebreak(dTable);
		this.inputBox = addNthInputElement(dTable, this.trialNumber);
		this.defaultFocusElement = this.inputBox.id;
		return 10;
	}
	activate() {
		this.inputBox.onkeyup = ev => {
			if (!canAct()) return;
			if (ev.key === "Enter") {
				ev.cancelBubble = true;
				this.controller.evaluate.bind(this.controller)(ev);
			} //else if (!isLetter(ev.key) && ![' ', '-', '_'].includes(ev.key)) return;
		};
		this.inputBox.focus();
	}
	eval(ev) {
		let answer = normalize(this.inputBox.value, this.language);
		let reqAnswer = normalize(Goal.label, this.language);
		let correctPrefix = this.correctPrefix = getCorrectPrefix(Goal.label, this.inputBox.value);
		Selected = { reqAnswer: reqAnswer, answer: answer, feedbackUI: iDiv(Goal) };
		if (answer == reqAnswer) { showFleetingMessage(Goal.label); return true; }
		else { return false; }
	}
}
class GameTimed1 extends Game{
	constructor(name, o) { super(name, o); }
	clear() { clearInterval(this.TOI); super.clear(); }
	makeTimer() {
		if (nundef(this.msTotal)) this.msTotal = 5000;
		if (nundef(this.msInterval)) this.msInterval = 100;
		let w = this.wTimerOuter = 200;
		this.dTimeOuter = mDiv(dTable, { w: w, h: 25, border: 'white', rounding: 10, position: 'relative' });
		[this.wTimer, this.r, this.g] = [0, 0, 255];
		this.dTimeInner = mDiv(this.dTimeOuter, { h: 25, w: this.wTimer, rounding: 10, bg: `rgb(${this.r},${this.g},0)`, position: 'absolute', left: 0, top: 0 });
		this.dTimeDisplay = mDiv(this.dTimeOuter, { patop: 2, align: 'center', h: 25, w: w, position: 'absolute', left: 0, top: 0 });
		mLinebreak(dTable);
		this.dPause = mDiv(dTable, { cursor: 'pointer', fz: 12, hpadding: 30, vpadding: 10 }, null, 'click to pause');
		this.dPause.onclick = () => this.pause();
	}
	pause() {
		clearInterval(this.TOI);
		this.dPause.innerHTML = 'click to resume...';
		this.dPause.onclick = () => this.resume();
	}
	resume() {
		this.dPause.innerHTML = 'click to pause...';
		this.dPause.onclick = () => this.pause();
		this.TOI = setInterval(this.onTick.bind(this), this.msInterval);
	}
	activate() {
		this.msLeft = valf(this.msTotal, 10000);
		this.dTimeDisplay.innerHTML = timeConversion(this.msLeft, 'sh');
		this.TOI = setInterval(this.onTick.bind(this), this.msInterval);
	}
	onTick() {
		this.msLeft -= this.msInterval;
		this.wTimer += this.wTimerOuter * this.msInterval / this.msTotal;
		let inc_color = 255 * this.msInterval / this.msTotal; // 25
		this.r += inc_color; this.g -= inc_color;
		mStyle(this.dTimeInner, { w: this.wTimer, bg: `rgb(${this.r},${this.g},0)` });
		this.dTimeDisplay.innerHTML = timeConversion(this.msLeft, 'sh');
		if (this.msLeft < 100) {
			clearInterval(this.TOI);
			this.dPause.style.opacity = 0;
			this.onTimeup();
		}
	}
}
class GSpotit1 extends GameTimed1 {
	constructor(name, o) { super(name, o); }
	startGame() { this.correctionFunc = showCorrectUis; }
	start_Level() {
		this.colarr = _calc_hex_col_array(this.rows, this.cols);
		let perCard = arrSum(this.colarr);
		this.nShared = (this.numCards * (this.numCards - 1)) / 2;
		this.nUnique = perCard - this.numCards + 1;
		this.numKeysNeeded = this.nShared + this.numCards * this.nUnique;
		this.keys = setKeysG(this, (_, x) => !x.includes(' '), this.numKeysNeeded + 1);
	}
	deal() {
		let keys = choose(this.keys, this.numKeysNeeded);
		let dupls = keys.slice(0, this.nShared); //these keys are shared: cards 1 and 2 share the first one, 1 and 3 the second one,...
		let uniqs = keys.slice(this.nShared);
		let infos = [];
		for (let i = 0; i < this.numCards; i++) {
			let keylist = uniqs.slice(i * this.nUnique, (i + 1) * this.nUnique);
			let info = { id: getUID(), shares: {}, keys: keylist, rows: this.rows, cols: this.cols, colarr: this.colarr };
			infos.push(info);
		}
		let iShared = 0;
		for (let i = 0; i < this.numCards; i++) {
			for (let j = i + 1; j < this.numCards; j++) {
				let c1 = infos[i];
				let c2 = infos[j];
				let dupl = dupls[iShared++];
				c1.keys.push(dupl);
				c1.shares[c2.id] = dupl;
				c2.shares[c1.id] = dupl;
				c2.keys.push(dupl);
			}
		}
		for (const info of infos) { shuffle(info.keys); }
		return infos;
	}
	interact(ev) {
		ev.cancelBubble = true;
		if (!canAct()) { console.log('no act'); return; }
		let keyClicked = evToProp(ev, 'key');
		let id = evToId(ev);
		if (isdef(keyClicked) && isdef(Items[id])) {
			this.pause();
			let item = Items[id];
			if (Object.values(item.shares).includes(keyClicked)) {
				let otherCard = spotitFindCardSharingSymbol(item, keyClicked);
				let cardSymbol = ev.target;
				let otherSymbol = spotitFindSymbol(otherCard, keyClicked);
				Selected = { isCorrect: true, feedbackUI: [cardSymbol, otherSymbol] };
			} else {
				let cardSymbol = ev.target;
				Selected = { isCorrect: false, feedbackUI: [cardSymbol], correctUis: this.getSharedSymbols(), correctionDelay: this.items.length * 1500 };
			}
			this.controller.evaluate.bind(this.controller)();
		}
	}
	getSharedSymbols() {
		let result = [];
		for (const item of this.items) {
			for (const id in item.shares) {
				let k = item.shares[id];
				let ui = iGetl(item, k);
				result.push(ui);
			}
		}
		return result;
	}
	eval() { return Selected.isCorrect; }
	prompt() {
		this.trials = 1;
		show_instruction('find common symbol', dTitle);
		this.makeTimer();
		mLinebreak(dTable, 25);
		let infos = this.deal(); //backend
		let items = this.items = [];
		for (const info of infos) {
			let item = spotitCard(info, dTable, { margin: 10 }, this.interact.bind(this));
			items.push(item);
		}
		this.controller.activateUi.bind(this.controller)();
	}
	onTimeup() {
		Selected = { isCorrect: false, correctUis: this.getSharedSymbols(), correctionDelay: this.items.length * 2000 };
		this.controller.evaluate.bind(this.controller)();
	}
}
class GameTimed extends Game{
	constructor(name, o) { super(name, o); }
	clear() { clearInterval(this.TOI); super.clear(); this.timer = null; }
	makeTimer() {
		this.timer = true;
		if (nundef(this.msTotal)) this.msTotal = 5000;
		if (nundef(this.msInterval)) this.msInterval = 100;
		let w = this.wTimerOuter = 200;
		this.dTimeOuter = mDiv(dTable, { w: w, h: 25, border: 'white', rounding: 10, position: 'relative' });
		[this.wTimer, this.r, this.g] = [0, 0, 255];
		this.dTimeInner = mDiv(this.dTimeOuter, { h: 25, w: this.wTimer, rounding: 10, bg: `rgb(${this.r},${this.g},0)`, position: 'absolute', left: 0, top: 0 });
		this.dTimeDisplay = mDiv(this.dTimeOuter, { patop: 2, align: 'center', h: 25, w: w, position: 'absolute', left: 0, top: 0 });
		mLinebreak(dTable);
		this.dPause = mDiv(dTable, { cursor: 'pointer', fz: 12, hpadding: 30, vpadding: 10 }, null, 'click to pause');
		this.dPause.onclick = () => this.pause();
	}
	pause() {
		if (nundef(this.timer)) return;
		clearInterval(this.TOI);
		this.dPause.innerHTML = 'click to resume...';
		this.dPause.onclick = () => this.resume();
	}
	resume() {
		if (nundef(this.timer)) return;
		this.dPause.innerHTML = 'click to pause...';
		this.dPause.onclick = () => this.pause();
		this.TOI = setInterval(this.onTick.bind(this), this.msInterval);
	}
	activate() {
		if (nundef(this.timer)) return;
		this.msLeft = valf(this.msTotal, 10000);
		this.dTimeDisplay.innerHTML = timeConversion(this.msLeft, 'sh');
		this.TOI = setInterval(this.onTick.bind(this), this.msInterval);
	}
	onTick() {
		this.msLeft -= this.msInterval;
		this.wTimer += this.wTimerOuter * this.msInterval / this.msTotal;
		let inc_color = 255 * this.msInterval / this.msTotal; // 25
		this.r += inc_color; this.g -= inc_color;
		mStyle(this.dTimeInner, { w: this.wTimer, bg: `rgb(${this.r},${this.g},0)` });
		this.dTimeDisplay.innerHTML = timeConversion(this.msLeft, 'sh');
		if (this.msLeft < 100) {
			clearInterval(this.TOI);
			this.dPause.style.opacity = 0;
			this.onTimeup();
		}
	}
}
class GSpotit extends GameTimed {
	constructor(name, o) { super(name, o); }
	startGame() { this.correctionFunc = showCorrectUis; }
	start_Level() {
		super.start_Level();
		this.colarr = _calc_hex_col_array(this.rows, this.cols);
		let perCard = arrSum(this.colarr);
		this.nShared = (this.numCards * (this.numCards - 1)) / 2;
		this.nUnique = perCard - this.numCards + 1;
		this.numKeysNeeded = this.nShared + this.numCards * this.nUnique;
		this.keys = setKeysG(this, (_, x) => !x.includes(' '), this.numKeysNeeded + 1);
	}
	deal() {
		let keys = choose(this.keys, this.numKeysNeeded);
		let dupls = keys.slice(0, this.nShared); //these keys are shared: cards 1 and 2 share the first one, 1 and 3 the second one,...
		let uniqs = keys.slice(this.nShared);
		let infos = [];
		for (let i = 0; i < this.numCards; i++) {
			let keylist = uniqs.slice(i * this.nUnique, (i + 1) * this.nUnique);
			let info = { id: getUID(), shares: {}, keys: keylist, rows: this.rows, cols: this.cols, colarr: this.colarr };
			infos.push(info);
		}
		let iShared = 0;
		for (let i = 0; i < this.numCards; i++) {
			for (let j = i + 1; j < this.numCards; j++) {
				let c1 = infos[i];
				let c2 = infos[j];
				let dupl = dupls[iShared++];
				c1.keys.push(dupl);
				c1.shares[c2.id] = dupl;
				c2.shares[c1.id] = dupl;
				c2.keys.push(dupl);
			}
		}
		for (const info of infos) { shuffle(info.keys); }
		return infos;
	}
	interact(ev) {
		ev.cancelBubble = true;
		if (!canAct()) { console.log('no act'); return; }
		let keyClicked = evToProp(ev, 'key');
		let id = evToId(ev);
		if (isdef(keyClicked) && isdef(Items[id])) {
			this.pause();
			let item = Items[id];
			if (Object.values(item.shares).includes(keyClicked)) {
				let otherCard = spotitFindCardSharingSymbol(item, keyClicked);
				let cardSymbol = ev.target;
				let otherSymbol = spotitFindSymbol(otherCard, keyClicked);
				Selected = { isCorrect: true, feedbackUI: [cardSymbol, otherSymbol] };
			} else {
				let cardSymbol = ev.target;
				Selected = { isCorrect: false, feedbackUI: [cardSymbol], correctUis: this.getSharedSymbols(), correctionDelay: this.items.length * 1500 };
			}
			this.controller.evaluate.bind(this.controller)();
		}
	}
	getSharedSymbols() {
		let result = [];
		for (const item of this.items) {
			for (const id in item.shares) {
				let k = item.shares[id];
				let ui = iGetl(item, k);
				result.push(ui);
			}
		}
		return result;
	}
	eval() { return Selected.isCorrect; }
	prompt() {
		this.trials = 1;
		show_instruction('find common symbol', dTitle);
		mLinebreak(dTable, 25);
		let infos = this.deal(); //backend
		let items = this.items = [];
		for (const info of infos) {
			let item = spotitCard(info, dTable, { margin: 10 }, this.interact.bind(this));
			items.push(item);
		}
		this.controller.activateUi.bind(this.controller)();
	}
	activate(){}
	onTimeup() {
		Selected = { isCorrect: false, correctUis: this.getSharedSymbols(), correctionDelay: this.items.length * 2000 };
		this.controller.evaluate.bind(this.controller)();
	}
}
class GMissingNumber extends Game {
	constructor(name, o) { super(name, o); }
	startGame() {
		this.successFunc = successThumbsUp;
		this.failFunc = failThumbsDown;
		this.correctionFunc = this.showCorrectSequence.bind(this);
	}
	showCorrectSequence() { return numberSequenceCorrectionAnimation(getNumSeqHint); }
	start_Level() {
		if (!isList(this.steps)) this.steps = [this.steps];
		this.numPics = 2;
		this.labels = false;
	}
	prompt() {
		mLinebreak(dTable, 12);
		showHiddenThumbsUpDown(110);
		mLinebreak(dTable);
		this.step = chooseRandom(this.steps);
		this.op = chooseRandom(this.ops);
		this.oop = OPS[this.op];
		this.seq = createNumberSequence(this.seqLen, this.minNum, this.maxNum, this.step, this.op);
		[this.words, this.letters] = showNumberSequence(this.seq, dTable);
		setNumberSequenceGoal();
		mLinebreak(dTable);
		let instr1 = (this.language == 'E' ? 'complete the sequence' : "ergänze die reihe");
		show_instruction(instr1, dTitle, instr1);
		if (this.showHint) {
			hintEngineStart(getNumSeqHintString, [0, 1, 2, 3, 4], 5000 + this.level * 1000);
		}
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		let hintlist = this.trialNumber >= 4 ? [this.trialNumber] : range(this.trialNumber, 4);
		if (this.showHint) hintEngineStart(getNumSeqHintString, hintlist, 3000 + this.level * 1000);
		TOMain = setTimeout(() => getWrongChars().map(x => unfillChar(x)), 500);
		return 600;
	}
	activate() { addKeyup('G', this.interact.bind(this)); }
	interact(ev) {
		if (!isNumber(ev.key) && ev.key != '-') return;
		clearFleetingMessage();
		if (!canAct()) return;
		let sel = Selected = onKeyWordInput(ev);
		if (nundef(sel)) return;
		let lastInputCharFilled = sel.target;
		console.assert(sel.isMatch == (lastInputCharFilled.letter == sel.ch), lastInputCharFilled, sel.ch);
		if (sel.isMatch && sel.isVeryLast) {
			deactivateFocusGroup();
			this.controller.evaluate.bind(this.controller)(true);
		} else if (sel.isMatch && sel.isLastOfGroup) {
			sel.target.isBlank = false;
			sel.target.group.hasBlanks = false;
			removeInPlace(Goal.blankWords, sel.target.group);
			removeInPlace(Goal.blankChars, sel.target);
			deactivateFocusGroup();
			console.log('haaaaaaaaaaaalo', Goal.isFocus)
		} else if (sel.isMatch) {
			removeInPlace(Goal.blankChars, sel.target);
			sel.target.isBlank = false;
		} else if (sel.isVeryLast) {
			Selected.words = getInputWords();
			Selected.answer = getInputWordString();
			Selected.req = getCorrectWordString();
			deactivateFocusGroup();
			this.controller.evaluate.bind(this.controller)(false);
		} else if (sel.isLastOfGroup) {
			Selected.words = getInputWords();
			Selected.answer = getInputWordString();
			Selected.req = getCorrectWordString();
			deactivateFocusGroup();
			this.controller.evaluate.bind(this.controller)(false);
		} else {
			if (!this.silent) { writeSound(); playSound('incorrect1'); }
			deactivateFocusGroup();
			showFleetingMessage('does NOT fit: ' + Selected.ch, 0, { fz: 24 });
			setTimeout(() => unfillCharInput(Selected.target), 500);
		}
	}
	eval(isCorrect) { return isCorrect; }
}
class GAnagram_orig extends Game {
	constructor(name, o) {
		super(name, o);
		if (this.language == 'C') {
			this.realLanguage = this.language;
			this.language = chooseRandom('E', 'S', 'F', 'D');
		}
	}
	clear() { super.clear(); if (isdef(this.language)) this.language = this.language; }
	start_Level() {
		this.keys = setKeysG(this, filterWordByLengthG, 10);
		if (this.keys.length < 10) { this.keys = setKeysG(this, filterWordByLengthG, 10, 'all'); }
	}
	prompt() {
		myShowPics(null, {}, {});
		if (this.hidden) {
			let d = iDiv(Pictures[0]);
			animate(d, 'aniAppearMinute', 100000);
		}
		setGoal();
		showInstruction(this.showWord ? Goal.label : '', this.language == 'E' ? 'drag letters to form' : "forme", dTitle, true);
		mLinebreak(dTable, 25);
		this.inputs = createDropInputs();
		let x = mLinebreak(dTable, 50);
		this.letters = createDragLetters();
		if (this.hidden) showFleetingMessage('category: ' + Pictures[0].info.subgroup, 5000);
		else if (!this.showWord) { showLabelPercentHintAfter(50, 6000); }
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		setTimeout(() => {
			this.inputs.map(x => iDiv(x).innerHTML = '_')
		}, 1500);
		return 10;
	}
	eval(w, word) {
		Selected = { answer: w, reqAnswer: word, feedbackUI: iDiv(Goal) }; //this.inputs.map(x => iDiv(x)) };
		return w == word;
	}
}
class GAnagram_MESSY extends Game {
	constructor(name, o) {
		super(name, o);
		if (this.language == 'C') {
			this.realLanguage = this.language;
			this.language = chooseRandom('E', 'S', 'F', 'D');
		}
	}
	clear() { super.clear(); if (isdef(this.language)) this.language = this.language; }
	start_Level() {
		this.keys = setKeysG(this, filterWordByLengthG, 10);
		if (this.keys.length < 10) { this.keys = setKeysG(this, filterWordByLengthG, 10, 'all'); }
	}
	prompt() {
		myShowPics(null, {}, {});
		if (this.hidden) {
			let d = iDiv(Pictures[0]);
			animate(d, 'aniAppearMinute', 100000);
		}
		setGoal();
		showInstruction(this.showWord ? Goal.label : '', this.language == 'E' ? 'drag letters to form' : "forme", dTitle, true);
		mLinebreak(dTable, 25);
		let fz = 120; let word = Goal.label.toUpperCase(); let wlen = word.length;
		let dpEmpty = createLetterInputsX(word, dTable, { pabottom: 5, bg: 'grey', display: 'inline-block', fz: fz, w: fz, h: fz * 1.1, margin: 4 }); //,w:40,h:80,margin:10});
		let inputs = blankInputs(dpEmpty, range(0, wlen - 1), false);
		for (let i = 0; i < inputs.length; i++) {
			let l = iDiv(inputs[i]);
			l.ondragover = ev => ev.preventDefault();
			l.ondrop = event => {
				event.preventDefault();
				var data = event.dataTransfer.getData("Text");
				event.target.innerHTML = data;
			}
			makeDraggableInner(l);
			mClass(l, 'dropzone');
			l.id = 'input' + i;
		}
		this.inputs = inputs;
		let x = mLinebreak(dTable, 50);
		fz = 60; word = Goal.label.toUpperCase(); //let wlen = word.length;
		let dp = createLetterInputsX(word, dTable, { bg: 'silver', display: 'inline-block', fz: fz, w: fz, h: fz * 1.1, margin: 4 }); //,w:40,h:80,margin:10});
		scrambleInputs(dp);
		let letters = Array.from(dp.children);
		for (let i = 0; i < letters.length; i++) {
			let l = letters[i];
			l.setAttribute('draggable', true);
			makeDraggableInner(l);
			l.id = 'letter' + i;
		}
		this.letters = letters;
		if (this.hidden) showFleetingMessage('category: ' + Pictures[0].info.subgroup, 5000);
		else if (!this.showWord) { showLabelPercentHintAfter(50, 6000); }
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		setTimeout(() => {
			this.inputs.map(x => iDiv(x).innerHTML = '_')
		}, 1500);
		return 10;
	}
	eval(w, word) {
		Selected = { answer: w, reqAnswer: word, feedbackUI: iDiv(Goal) }; //this.inputs.map(x => iDiv(x)) };
		return w == word;
	}
}
class GAnagram_PCOnly extends Game {
	constructor(name, o) {
		super(name, o);
		if (this.language == 'C') {
			this.realLanguage = this.language;
			this.language = chooseRandom('E', 'S', 'F', 'D');
		}
	}
	clear() { super.clear(); if (isdef(this.language)) this.language = this.language; }
	start_Level() {
		this.keys = setKeysG(this, filterWordByLengthG, 10);
		if (this.keys.length < 10) { this.keys = setKeysG(this, filterWordByLengthG, 10, 'all'); }
	}
	prompt() {
		myShowPics(null, {}, {});
		if (this.hidden) {
			let d = iDiv(Pictures[0]);
			animate(d, 'aniAppearMinute', 100000);
		}
		setGoal();
		showInstruction(this.showWord ? Goal.label : '', this.language == 'E' ? 'drag letters to form' : "forme", dTitle, true);
		mLinebreak(dTable, 25);
		let fz = 120; let word = Goal.label.toUpperCase(); let wlen = word.length;
		let dpEmpty = createLetterInputsX(word, dTable, { pabottom: 5, bg: 'grey', display: 'inline-block', fz: fz, w: fz, h: fz * 1.1, margin: 4 }); //,w:40,h:80,margin:10});
		let inputs = blankInputs(dpEmpty, range(0, wlen - 1), false);
		for (let i = 0; i < inputs.length; i++) {
			let l = iDiv(inputs[i]);
			l.ondragover = ev => ev.preventDefault();
			l.ondrop = event => { event.preventDefault(); var data = event.dataTransfer.getData("Text"); event.target.innerHTML = data; }
			makeDraggableInner(l);
			mClass(l, 'dropzone');
			l.id = 'input' + i;
		}
		this.inputs = inputs;
		let x = mLinebreak(dTable, 50);
		fz = 60; word = Goal.label.toUpperCase();
		let dp = createLetterInputsX(word, dTable, { bg: 'silver', display: 'inline-block', fz: fz, w: fz, h: fz * 1.1, margin: 4 }); //,w:40,h:80,margin:10});
		scrambleInputs(dp);
		let letters = Array.from(dp.children);
		for (let i = 0; i < letters.length; i++) {
			let l = letters[i];
			l.setAttribute('draggable', true);
			makeDraggableInner(l);
			l.id = 'letter' + i;
		}
		this.letters = letters;
		mLinebreak(dTable, 50);
		this.bDone = mButton('Done!', this.controller.evaluate.bind(this.controller), dTable, { fz: 28, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
		if (this.hidden) showFleetingMessage('category: ' + Pictures[0].info.subgroup, 5000);
		else if (!this.showWord) { showLabelPercentHintAfter(50, 6000); }
		this.controller.activateUi.bind(this.controller)();
	}
	trialPrompt() {
		sayTryAgain();
		setTimeout(() => {
			this.inputs.map(x => iDiv(x).innerHTML = '_')
		}, 1500);
		return 10;
	}
	eval() {
		let s = this.inputs.map(x => iDiv(x).innerHTML);
		let w = s = s.join('');
		let word = Goal.label.toUpperCase();
		Selected = { answer: w, reqAnswer: word, feedbackUI: iDiv(Goal) };
		return w == word;
	}
}
function ensureDictionary(){
	if (nundef(Dictionary)) { Dictionary = { E: {}, S: {}, F: {}, C: {}, D: {} } };
	for (const k in Syms) {
		for (const lang of ['E', 'D', 'F', 'C', 'S']) {
			let w = Syms[k][lang];
			if (nundef(w)) continue;
			Dictionary[lang][w.toLowerCase()] = Dictionary[lang][w.toUpperCase()] = k;
		}
	}
}
function makeDraggableInner(elem) {
	elem.setAttribute('draggable', true);
	elem.ondragstart = ev => {
		if (!canAct()) return;
		let id = evToClosestId(ev);
		let source = mBy(id);
		if (isLetterElement(source)) {
			ev.dataTransfer.setData("Text", source.innerHTML);
		}
	}
	mClass(elem, 'draggable');
}
//#endregion classes

//#region controller
class ControllerSolitaire {
	constructor(g, user) { this.g = g; this.player = user; }
	stopGame() { resetState(); }
	startGame() {
		resetState();
		this.g.successFunc = successPictureGoal;
		this.g.failFunc = failPictureGoal;
		this.g.correctionFunc = showCorrectWord;
		this.g.startGame();
		this.startLevel();
	}
	startLevel() {
		Settings.updateGameValues(this.player, this.g);
		this.g.start_Level();
		this.startRound();
	}
	startRound() {
		resetRound(); //hier passiert clear table!
		uiActivated = false;
		this.g.startRound();
		TOMain = setTimeout(() => this.prompt(), 300);
	}
	prompt() {
		QContextCounter += 1;
		showStats();
		this.g.trialNumber = 0;
		this.g.prompt();
	}
	promptNextTrial() {
		QContextCounter += 1;
		clearTimeout(TOTrial);
		uiActivated = false;
		let delay = this.g.trialPrompt(this.g.trialNumber);
		TOMain = setTimeout(() => this.activateUi(), delay);
	}
	activateUi() {
		Selected = null;
		uiActivated = true;
		this.g.activate();
	}
	evaluate() {
		if (!canAct()) return;
		uiActivated = false; clearTimeouts();
		IsAnswerCorrect = this.g.eval(...arguments);
		if (IsAnswerCorrect === undefined) { this.promptNextTrial(); return; }
		this.g.trialNumber += 1;
		if (!IsAnswerCorrect && this.g.trialNumber < this.g.trials) { this.promptNextTrial(); return; }
		if (IsAnswerCorrect) { DELAY = isdef(Selected.delay) ? Selected.delay : this.g.spokenFeedback ? 1500 : 300; this.g.successFunc(); }
		else { DELAY = this.g.correctionFunc(); this.g.failFunc(); }
		let nextLevel = scoring(IsAnswerCorrect);
		if (DELAY > 2000) showActiveMessage('click to continue...', () => this.gotoNext(nextLevel));
		TOMain = setTimeout(() => this.gotoNext(nextLevel), DELAY);
	}
	gotoNext(nextLevel) {
		onclick = null;
		removeMarkers();
		clearTimeouts();
		if (Score.gameChange) {
			setNextGame();
			if (GameTimer.unitTimeUp()) { gameOver('Great job! Time for a break!'); } else { GC.startGame(); }
		} else if (Score.levelChange && nextLevel <= this.g.maxLevel) {
			this.g.level = nextLevel;
			setBadgeLevel(this.g.level);
			this.startLevel();
		} else { this.startRound(); }
	}
}
//#endregion controller

//#region classes3
class G2Player {
	constructor(name, o) {
		this.name = name;
		copyKeys(o, this);
		this.maxLevel = isdef(this.levels) ? Object.keys(this.levels).length - 1 : 0;
		this.id = name;
		this.color = getColorDictColor(this.color);
		this.moveCounter = 0;
	}
	startGame() {
		this.moveCounter = 0;
		this.winner = this.gameOver = null;
		this.setStartPlayer();
	}
	clear() { clearTimeout(this.TO); clearFleetingMessage(); }
	changePlayer() {
		let idx = this.iPlayer = (this.iPlayer + 1) % this.players.length;
		this.setPlayers();
	}
	heuristic(state) { return 1; }
	setPlayers() {
		this.plTurn = this.playerOrder[this.iPlayer];
		this.plOpp = this.plTurn == this.ai ? this.human : this.ai;
	}
	setStartPlayer() {
		if (this.startPlayer == 'human') this.playerOrder = [this.human, this.ai];
		else if (this.startPlayer == 'ai') this.playerOrder = [this.ai, this.human];
		else this.playerOrder = chooseRandom([[this.human, this.ai], [this.ai, this.human]]);
		this.iPlayer = 0;
		this.setPlayers();
	}
	startRound() { }//console.log('startRound', this.name); }
	prompt() { }
	eval() { } //should set gameOver,winner,tie,info,
	activate() { }
}
class GKrieg extends G2Player {
	write() { write('game', ...arguments); }
	startGame() {
		this.write('start game')
		super.startGame();
		let back = this.back = new GKriegBack();
		this.setStartPosition();
		this.front = new GKriegFront(130, dTable);
		this.front.presentState(this.back.get_state());
		mLinebreak(dTable, 50);
		this.moveButton = mButton('Move!', this.interact.bind(this), dTable, { fz: 28, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
	}
	setStartPosition() {
		this.back.load(null);
	}
	prompt() {
		this.write('prompt')
		let msg = this.plTurn == this.ai ? 'Ai thinking...' : 'Deterministic: click Move!';
		show_instruction(msg, dTitle);
		this.controller.activateUi();
	}
	activate() {
		let pl = this.plTurn;
		let autoplay = false;
		let manual = true;
		if (!manual && (autoplay || pl == this.ai)) {
			if (this.ai == pl) uiActivated = false;
			setTimeout(this.interact.bind(this), 500);
		} else {
			this.moveButton.style.opacity = 1;
		}
	}
	interact() {
		if (!canAct()) { console.log('NOPE!!!!', 'ai', aiActivated, 'ui', uiActivated); return; }
		this.controller.deactivateUi();
		this.write('interact');
		let back = this.back;
		back.make_random_move();
		this.front.animatePlayerMove(back.turn(), this.onPlayerMoveCompleted.bind(this));
	}
	onPlayerMoveCompleted() {
		let back = this.back;
		this.front.presentState(this.back.get_state());
		let x = this.back.resolve();
		if (isdef(x)) {
			this.moveButton.style.opacity = .3;
			this.TO = setTimeout(() => { this.front.animateResolve(x, () => { GC.evaluate(x) }) },	//console.log('...resolve completed!',this.front);}
				1000
			);
		} else this.controller.evaluate(x);
	}
	changePlayer() {
		this.write('change player')
		this.back.swap_turn();
		this.plTurn = this.players[this.back.player().index];
		this.opp = this.players[this.back.opponent().index];
	}
	eval(x) {
		let back = this.back;
		this.write('eval', x)
		if (isdef(x)) this.front.presentState(this.back.get_state());
		if (back.is_out_of_cards()) {
			this.moveButton.remove();
			this.gameOver = true;
			let w = back.winner();
			if (isdef(w)) this.winner = this.players[w.index];
			this.bannerPos = -480;
		}
	}
}
class GKriegBack {
	load(state) {
		this.history = [];
		let deck = this.deck = new DeckClass('52');
		let n = 4;
		this.pl1 = { hand: deck.deal(n), trick: [], index: 0 }; if (isdef(state) && isdef(state.pl1)) addKeys(state.pl1, this.pl1);
		this.pl2 = { hand: deck.deal(n), trick: [], index: 1 }; if (isdef(state) && isdef(state.pl2)) addKeys(state.pl2, this.pl2);
		this.players = [this.pl1, this.pl2];
		this.iturn = 0;
		if (nundef(state)) return;
		/* example of a state:
		{
			pl1: { hand: ['TH', 'QH'], trick: [['QH']] },
			pl2: { hand: ['TC', 'QC'], trick: [['KC']] },
		},
		*/
		if (isdef(state.pl1.hand)) this.pl1.hand = parseHand(state.pl1.hand, deck);
		if (isdef(state.pl2.hand)) this.pl2.hand = parseHand(state.pl2.hand, deck);
		if (isdef(state.pl1.trick)) state.pl1.trick.map(x => this.pl1.trick.push(parseHand(x, deck)));
		if (isdef(state.pl2.trick)) state.pl2.trick.map(x => this.pl2.trick.push(parseHand(x, deck)));
		if (isdef(state.deck)) this.deck.setData(parseHand(state.deck));
		if (!isEmpty(this.pl1.trick)) {
			let len1 = this.pl1.trick.length;
			let len2 = this.pl2.trick.length;
			if (len1 > len2) this.iturn = 1;
			else {
				this.resolve();
				this.iturn = 0;
			}
		}
	}
	get_state() { return { pl1: this.pl1, pl2: this.pl2, deck: this.deck } };
	turn() { return this.iturn; }
	top(pl) {
		return Card52.getRankValue(arrFirstOfLast(pl.trick));
	}
	get_moves() {
		let pl = this.player();
		let x = pl.trick.length > 0 ? arrTakeFromEnd(pl.hand, 3) : [arrLast(pl.hand)];
		x.reverse();
		return [x];
	}
	make_random_move() {
		let moves = this.get_moves();
		let move = chooseRandom(moves);
		this.make_move(move);
	}
	make_move(move) {
		let pl = this.player();
		pl.trick.push(move);
		move.map(x => removeInPlace(pl.hand, x));
		this.lastMove = move;
	}
	resolve() {
		let result = this._resolve();
		this.push_history(this.iturn, this.lastMove, result);//add move to history!
		return result ? result.iWinner : null;
	}
	swap_turn() { this.iturn = this.iturn == 0 ? 1 : 0; }
	make_random_moveX() {
		let moves = this.get_moves();
		let move = chooseRandom(moves);
		this.make_moveX(move);
	}
	make_moveX(move) {
		this.make_move(move);
		let result = this._resolve();
		this.push_history(this.iturn, move, result);//add move to history!
		this.swap_turn();
	}
	_resolve() {
		let pl = this.player(), opp = this.opponent();
		console.log('...resolve', pl.trick, opp.trick)
		if (opp.trick.length != pl.trick.length) return null; //this.in_trick()) return null;
		let t1 = this.top(pl); let t2 = this.top(opp);
		console.log('resolve: compare t1', t1, 't2', t2);
		if (isdef(t1) && isdef(t2)) {
			if (t1 > t2) { return this.add_trick_from_to(opp, pl); }
			else if (t2 > t1) { return this.add_trick_from_to(pl, opp); }
			else if (isEmpty(pl.hand)) { return this.add_trick_from_to(pl, opp); }
			else if (isEmpty(opp.hand)) { return this.add_trick_from_to(opp, pl); }
			else return null;
		}
		return null;
	}
	add_trick_from_to(plFrom, plTo) {
		let t1 = plFrom.trick;
		let t2 = plTo.trick;
		let iLoser = plFrom.index;
		let iWinner = plTo.index;
		let cards1 = arrFlatten(plFrom.trick); //console.log('cards from loser:', cards1);//, plFrom);
		let cards2 = arrFlatten(plTo.trick); //console.log('cards from winner:', cards2);//, plTo);
		let cards = cards1.concat(cards2);
		plTo.hand = cards.concat(plTo.hand);
		plFrom.trick = [];
		plTo.trick = [];
		return { iWinner: iWinner, winnerTrick: t2, iLoser: iLoser, loserTrick: t1, cards: cards };
	}
	undo() {
		let hist = this.pop_history();
		if (hist == null) { return null; }
		let move = hist.move;
		this.iturn = hist.iturn;
		let pl = this.player();
		pl.hand.push(move);
		move.map(x => removeInPlace(pl.trick, x));
		if (isdef(hist.result)) {
			let plWin = this.players[hist.iWinner];
			let plLose = this.players[hist.iLoser];
			plWin.trick = hist.winnerTrick;
			plLose.trick = hist.loserTrick;
			plWin.hand = arrTake(plWin.hand, plWin.hand.length - hist.cards.length);
		}
	}
	print_state(comment = '') {
		if (nundef(this.history)) this.history = [];
		let state = jsCopy(this.get_state());
		console.log('____' + comment + ' #' + this.history.length, 'turn=' + this.iturn);
		console.log('pl1: hand:' + arrString(this.pl1.hand, iToValue), 'trick', arrString(this.pl1.trick, iToValue), 'top', this.top(this.pl1));
		console.log('pl2: hand:' + arrString(this.pl2.hand, iToValue), 'trick', arrString(this.pl2.trick, iToValue), 'top', this.top(this.pl2));
	}
	player() { return this.players[this.iturn]; }
	opponent() { return this.players[(this.iturn + 1) % this.players.length]; }
	push_history(iturn, move, result) { if (nundef(this.history)) this.history = []; this.history.push({ iturn: iturn, move: move, result: result }); return this.history; }
	pop_history() { if (nundef(this.history)) this.history = []; return this.history.pop(); }
	is_war() { let pl = this.player(), opp = this.opponent(); return pl.trick.length > 0 && pl.trick.length == opp.trick.length && this.top(pl) == this.top(opp); }
	in_war() { let pl = this.player(), opp = this.opponent(); return pl.trick.length != opp.trick.length && pl.trick.length > 1; }
	in_trick() { let pl = this.player(), opp = this.opponent(); return pl.trick.length == 0 && opp.trick.length == 1; }
	is_out_of_cards() { return this._is_out_of_cards(this.player()) || this._is_out_of_cards(this.opponent()); }
	player_is_out_of_cards() { return this._is_out_of_cards(this.player()); }
	_is_out_of_cards(pl) { return (isEmpty(pl.trick) && isEmpty(pl.hand)); }
	winner() { return firstCond(this.players, x => !isEmpty(x.hand) || !isEmpty(x.trick)); }
}
class GKriegFront {
	constructor(hPlayer, dParent) { this.hPlayer = hPlayer; this.dParent = dParent; this.setup(); }
	write() { write('front', ...arguments); }
	setup() { this.areas = makeAreasKrieg(this.dParent); }
	clear() { this.areas.map(x => clearElement(diContent(x))); }
	clearZones() { for (const k of ['t0', 't1', 'h0', 'h1']) this.clearZones(k); }
	clearZone(k) { clearElement(this.getZoneDiv(k)); }
	getZoneDiv(k) { return this.hands[k].zone; }
	getTrickZoneDiv(iPlayer) { return this.getZoneDiv('t' + iPlayer); }
	getHandZoneDiv(iPlayer) { return this.getZoneDiv('h' + iPlayer); }
	getPlayerCards(iPlayer) { return this.hands['h' + iPlayer].iHand.items; }
	getTrickCards() {
		let res = [];
		let t0 = this.hands.t0;
		if (isdef(t0.iHand.items)) {
			res = res.concat(t0.iHand.items);
		}
		let t1 = this.hands.t1;
		if (isdef(t1.iHand.items)) {
			res = res.concat(t1.iHand.items);
		}
		return res;
	}
	animatePlayerMove(iPlayer, callback) {
		let cards = this.getPlayerCards(iPlayer);
		let c = arrLast(cards);
		let dSource = this.hands['h' + iPlayer].zone; // this.getHandZoneDiv(iPlayer);
		let key = 't' + iPlayer;
		let trick = this.hands[key];
		let pos1 = lookup(this, ['pos1', key]);
		let dTarget, offset;
		if (isdef(pos1)) {
			dTarget = trick.zone; //diContent(this.areas[0]);
			offset = { x: pos1.x - 10, y: pos1.y - 10 };
		} else {
			dTarget = trick.zone; // this.getZoneDiv(iPlayer);
			let empty = nundef(trick.iHand.items);
			offset = { x: empty ? 0 : 0, y: 0 };//getCenter(dTarget); // n1 * ov;
		}
		aMove(iDiv(c), dSource, dTarget, callback, offset, 500, 'EASE', 1);
	}
	animateResolve(iWinner, callback) {
		let cards = this.getTrickCards();
		let dSource = this.hands.t0.zone;  //iDiv(this.areas[0]); // this.getHandZoneDiv(iPlayer);
		let dTarget = this.hands['h' + iWinner].zone; //iDiv(this.areas[1]);;//// this.getZoneDiv(iPlayer);
		let offset = { x: 0, y: 0 };//getCenter(dTarget); // n1 * ov;
		let trickCards = this.getTrickCards();
		let iLast = trickCards.length, i = 0;
		for (const c of trickCards) {
			dSource = iDiv(c);
			i++; let f;
			if (i == iLast) {
				f = callback;
			} else {
				f = null;//() => console.log('just moving', c);
			}
			iMoveFromToPure(c, dSource, dTarget, f, offset);
		}
	}
	presentState(state) {
		this.write('present', jsCopy(state))
		this.clear();
		let trick1 = arrFlatten(state.pl1.trick)
		let trick2 = arrFlatten(state.pl2.trick);
		let pl1Hand = state.pl1.hand;
		let pl2Hand = state.pl2.hand;
		let arrs = [[trick1, trick2], [pl1Hand], [pl2Hand]];
		let hands = [];
		for (let i = 0; i < 3; i++) {
			let area = this.areas[i];
			let d = diContent(area);
			iMessage(area, '');
			for (let j = 0; j < arrs[i].length; j++) {
				let arr = arrs[i][j]; //arr is an object {key:cardArr} cardArr can be empty!
				let id = 'a' + i + '_h' + j;
				let what = iH01(arr, d, {}, id, i == 0 ? 20 : 0); //iH00(arr, d, {}, id);
				hands.push(what);
			}
		}
		for (let i = 0; i < 2; i++) {
			let cards = hands[i].iHand.items;
			if (isEmpty(hands[i].arr)) continue;
			for (let j = 0; j < cards.length - 1; j++) {
				Card52.turnFaceDown(cards[j]);
			}
		}
		this.hands = {};
		let handNames = ['t0', 't1', 'h0', 'h1'];
		if (nundef(this.pos1)) { this.pos1 = {}; }
		for (let i = 0; i < 4; i++) {
			let hi = hands[i];
			this.hands[handNames[i]] = hi;
			hi.key = handNames[i];
			if (!isEmpty(hi.arr)) {
				let hih = hi.iHand;
				this.pos1[handNames[i]] = getRect(iDiv(hih), hi.zone);
			}
		}
	}
}
class GTTT extends G2Player {
	startGame() {
		super.startGame();
		this.createBoard();
		this.human.sym = 'O';
		this.ai.sym = 'X';
		this.setStartPosition();
	}
	createBoard() {
		this.rows = this.cols = this.boardSize;
		this.board = new Board(this.rows, this.cols, this.controller.uiInteract.bind(this.controller));
	}
	setStartPosition() {
		return;
		let positions = [
			new Array(9).fill(null),
			['X', 'X', null, 'O', null, null, 'O', null, null],
			[null, 'X', null, 'X', null, 'O', null, 'O', null],
			[null, null, null, null, 'X', 'O', null, 'O', null],
		];
		if (isdef(this.iPosition)) {
			let idx = this.iPosition + 1; idx = idx % positions.length; this.iPosition = idx;
		} else this.iPosition = 0;
		let state = nundef(this.startPosition) || this.startPosition == 'empty' ? positions[0]
			: this.startPosition == 'random' ? chooseRandom(positions)
				: positions[this.iPosition];
		this.board.setState(state, { X: this.ai.color, O: this.human.color });
	}
	prompt() {
		let msg = this.plTurn == this.ai ? 'Ai thinking...' : 'click an empty field!';
		show_instruction(msg, dTitle);
		this.controller.activateUi();
	}
	activate() {
		let pl = this.plTurn;
		let autoplay = false;
		if (autoplay || pl == this.ai) {
			if (this.ai == pl) uiActivated = false;
			setTimeout(() => AIMinimax(this, this.afterComputerMove.bind(this)), 200);
		}
	}
	interact(ev) {
		let tile = evToItemC(ev);
		if (isdef(tile.label)) return; //illegal move!
		let pl = this.plTurn;
		addLabel(tile, pl.sym, { fz: 60, fg: pl.color });
		this.controller.evaluate(tile);
	}
	afterComputerMove(iMove) {
		let tile = this.board.items[iMove];
		this.interact({ target: iDiv(tile) });
	}
	eval() {
		let done = this.checkFinal();
		this.gameOver = done > 0;
		if (this.gameOver) { this.winner = done > 1 ? this.plTurn : null; this.tie = done == 1; }
	}
	checkFinal(state) {
		if (nundef(state)) state = this.getState();
		let isTie = false;
		let isWin = checkWinnerTTT(state);
		if (!isWin) { isTie = checkBoardFull(state) || !checkPotentialTTT(state); }
		return isWin ? 2 : isTie ? 1 : 0;
	}
	getState() { return this.board.getState(); }
	applyMove(state, move, player) { arrReplaceAtInPlace(state, move, player.sym); }
	undoMove(state, move, player) { arrReplaceAtInPlace(state, move, ' '); }
	getAvailableMoves(state) {
		let moves = [];
		for (let i = 0; i < state.length; i++) {
			if (EmptyFunc(state[i])) moves.push(i);
		}
		shuffle(moves);
		return moves;
	}
	heuristic1(node, depth) { }
	evalState(node, depth) {
		let x = checkWinnerTTT(node);
		if (checkBoardFull(node) || x) {
			return { reached: true, val: (!x ? 0 : (10 - depth) * (x == MAXIMIZER.sym ? 1 : -1)) };
		}
		return { reached: false };
	}
	evalStateL(node, depth) {
		let key = node.join('');
		let val = DMM[key];
		let x = isdef(val) ? val : checkWinnerTTT(node);
		DMM[key] = x;
		if (checkBoardFull(node) || x) {
			return { reached: true, val: (!x ? 0 : (10 - depth) * (x == MAXIMIZER.sym ? 1 : -1)) };
		}
		return { reached: false };
	}
	evalStateL2(node, depth) {
		let full = checkBoardFull(node);
		if (full) {
			let key = JSON.stringify(node);
			let x = DMM[key];
			if (nundef(x)) DMM[key] = x = checkWinnerTTT(node);
			return { reached: true, val: (!x ? 0 : (10 - depth) * (x == MAXIMIZER.sym ? 1 : -1)) };
		} else {
			let x = checkWinnerTTT(node);
			if (x) return { reached: true, val: (!x ? 0 : (10 - depth) * (x == MAXIMIZER.sym ? 1 : -1)) };
			return { reached: false };
		}
	}
}
class GC4 extends GTTT {
	startGame() {
		super.startGame();
	}
	createBoard() {
		this.board = new Board(this.rows, this.cols, this.controller.uiInteract.bind(this.controller), { margin: 6, w: 60, h: 60, bg: 'white', fg: 'black', rounding: '50%' });
	}
	setStartPosition() {
		let positions = [
			[[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]],
			[[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			['O', 'X', 0, 0, 0, 0, 0],
			['O', 'X', 0, 0, 0, 0, 0]],
			[[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			['O', 'X', 0, 0, 0, 0, 0],
			['O', 'X', 0, 0, 0, 0, 0],
			['O', 'X', 0, 0, 0, 0, 0]],
			[[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 'O', 0, 0, 0],
			['O', 'X', 0, 'O', 0, 0, 0],
			['O', 'X', 0, 'O', 0, 0, 0]],
			[[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, "X", 0, 0, 0],
			["X", 0, 0, "O", 0, 0, 0],
			["O", "X", 0, "O", 0, 0, 0],
			["O", "X", "O", "O", 0, 0, 0]],
			[[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			["X", 0, 0, 0, 0, 0, 0],
			["X", 0, 0, 0, "O", "O", 0]],
		];
		this.iPosition = 4;
		if (isdef(this.iPosition)) {
			let idx = this.iPosition + 1; idx = idx % positions.length; this.iPosition = idx;
		} else this.iPosition = 0;
		let state = nundef(this.startPosition) || this.startPosition == 'empty' ? positions[0]
			: this.startPosition == 'random' ? chooseRandom(positions)
				: positions[this.iPosition];
		this.board.setState(state, { X: this.ai.color, O: this.human.color });
	}
	checkFinal(state) {
		if (nundef(state)) state = this.getState();
		let isTie = false;
		let isWin = checkWinnerC4(state, this.rows, this.cols, this.stride);
		if (!isWin) { isTie = checkBoardFull(state); }// || !checkPotentialC4(state); }
		return isWin ? 2 : isTie ? 1 : 0;
	}
	checkLegal(tile) {
		let col = tile.col;
		let topmost = this.board.items[col];
		if (EmptyFunc(topmost.label)) return true; else return false;
	}
	findBottomEmptyTileInColumn(col) {
		let x = lastCond(this.board.items, x => x.col == col && EmptyFunc(x.label));
		return x;
	}
	interact(ev) {
		let tile = evToItemC(ev);
		let legal = this.checkLegal(tile);
		if (!legal) { console.log('illegal move!'); return; } //illegal move!
		let pl = this.plTurn;
		let bottomMost = this.findBottomEmptyTileInColumn(tile.col);
		addLabel(bottomMost, pl.sym, { fz: 60, fg: pl.color });
		this.controller.evaluate(tile);
	}
	getAvailableMoves(state) {
		let moves = [];
		for (let c = 0; c < G.cols; c++) {
			for (let r = G.rows - 1; r >= 0; r--) {
				let i = r * G.cols + c;
				if (EmptyFunc(state[i])) { moves.push(i); break; }
			}
		}
		shuffle(moves)
		return moves;
	}
	evalState(node, depth) {
		let x = checkWinnerC4(node);
		if (checkBoardFull(node) || x) {
			let res = { reached: true, val: (!x ? 0 : (10 - depth) * (x == MAXIMIZER.sym ? 1 : -1)) };
			return res;
		}
		return { reached: false };
	}
}
class GReversi extends GTTT {
	createBoard() {
		this.board = new Board(this.rows, this.cols, this.controller.uiInteract.bind(this.controller), { margin: 6, w: 60, h: 60, bg: 'white', fg: 'black', rounding: '50%' });
	}
	setStartPosition() {
		let positions = [
			[[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 'O', 'X', 0, 0],
			[0, 0, 'X', 'O', 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]],
		];
		if (isdef(this.iPosition)) {
			let idx = this.iPosition + 1; idx = idx % positions.length; this.iPosition = idx;
		} else this.iPosition = 0;
		if (this.startPosition == 'empty' || this.rows != 6 || this.cols != 6) {
			let pos = bCreateEmpty(this.rows, this.cols);
			let r1 = this.rows / 2 - 1, r2 = this.rows / 2, c1 = this.cols / 2 - 1, c2 = this.cols / 2;
			pos[r1 * this.cols + c1] = pos[r2 * this.cols + c2] = 'O';
			pos[r1 * this.cols + c2] = pos[r2 * this.cols + c1] = 'X';
			positions[0] = pos;
		}
		let state = nundef(this.startPosition) || this.startPosition == 'empty' ? positions[0]
			: this.startPosition == 'random' ? chooseRandom(positions)
				: positions[this.iPosition];
		this.board.setState(state, { X: this.ai.color, O: this.human.color });
	}
	startGame() {
		super.startGame();
		this.setStartPosition();
	}
	checkLegal(tile) {
		let state = this.getState();
		if (!EmptyFunc(tile.label)) return false;
		let nei = bNei(state, tile.index, this.rows, this.cols, true);
		for (const n of nei) {
			if (!n) continue;
			let t = state[n];
			if (!EmptyFunc(t)) return true;
		}
		console.log('ILLEGAL MOVE! tile', tile.index, 'does not have neighbor!')
		return false;
	}
	interact(ev) {
		let tile = evToItemC(ev);
		if (!this.checkLegal(tile)) return; //illegal move!
		let pl = this.plTurn;
		addLabel(tile, pl.sym, { fz: 60, fg: pl.color });
		let state = this.getState();
		let iCapt = bCapturedPieces(pl.sym, state, tile.index, this.rows, this.cols);
		for (const i of iCapt) {
			let item = this.board.get(i);
			modLabel(item, this.plTurn.sym, { fg: this.plTurn.color });
		}
		this.controller.evaluate(tile);
	}
	activate() {
		let pl = this.plTurn;
		let autoplay = false;
		if (autoplay || pl == this.ai) {
			if (this.ai == pl) uiActivated = false;
			setTimeout(() => AIMinimax(this, this.afterComputerMove.bind(this)), 200);
		}
	}
	checkFinal(state, pl1, pl2) {
		if (nundef(state)) state = this.getState();
		if (nundef(pl1)) pl1 = this.plTurn;
		if (nundef(pl2)) pl2 = this.plOpp;
		return GReversi.checkEnd(state, pl1, pl2);
	}
	static checkEnd(state, pl1, pl2) {
		let hasPl1 = false, hasPl2 = false, s1 = pl1.sym, s2 = pl2.sym, hasEmpty = false;
		for (const s of state) {
			if (!hasPl1 && s == s1) hasPl1 = true;
			else if (!hasPl2 && s == s2) hasPl2 = true;
			else if (!hasEmpty && EmptyFunc(s)) hasEmpty = true;
			if (hasPl1 && hasPl2 && hasEmpty) return false;
		}
		let winner = !hasPl2 ? pl1 : !hasPl1 ? pl2 : 0;
		let full = !hasEmpty;
		if (full) {
			let n1 = arrCount(state, x => x == s1);
			let n2 = arrCount(state, x => x == s2);
			if (!winner && n1 != n2) {
				if (n1 > n2) winner = pl1; else winner = pl2;
			}
		}
		return winner ? { reached: true, winner: winner } : full ? { reached: true, winner: null } : { reached: false };
	}
	heuristic(state, plMax, plMin) {
		let vmax = 0, vmin = 0;
		vmax = vmax + arrCount(state, x => x == plMax.sym);
		vmin = vmin + arrCount(state, x => x == plMin.sym);
		return vmax - vmin;
	}
	heureval(state) {
		let heurinfo = GReversi.heuristic(state, MAXIMIZER, MINIMIZER);
		let val = heurinfo.val; //* (info.winner == MAXIMIZER ? 1 : -1)
		return val;
	}
	eval() {
		this.moveCounter += 1;
		let info = this.checkFinal();
		this.gameOver = info.reached;
		if (this.gameOver) {
			this.winner = info.winner;
			this.tie = !info.winner;
			if (this.winner) {
				this.loser = this.winner == this.ai ? this.human : this.ai;
				let state = this.getState();
				let nWinner = arrCount(state, x => x == this.winner.sym);
				let nLoser = arrCount(state, x => x == this.loser.sym);
				this.info = '(' + nWinner + ':' + nLoser + ')';
			}
		}
	}
	getAvailableMoves(state) {
		let moves = [];
		for (let i = 0; i < state.length; i++) {
			if (EmptyFunc(state[i])) {
				let nei = bNei(state, i, G.rows, G.cols, true);
				let iFull = firstCond(nei, x => !EmptyFunc(state[x]));
				if (iFull != null) moves.push(i);
			}
		}
		return moves;
	}
	evalState(state, depth) {
		let info = GReversi.checkEnd(state, MAXIMIZER, MINIMIZER);
		let val = info.reached && info.winner ? (100 - depth) * (info.winner == MAXIMIZER ? 1 : -1) : 0;
		return { reached: info.reached, val: val };
	}
	applyMove(state, move, player) {
		arrReplaceAtInPlace(state, move, player.sym);
		let iCapt = bCapturedPieces(player.sym, state, move, G.rows, G.cols);
		for (const i of iCapt) { state[i] = player.sym; }
	}
}
class GMinimalGame {
	constructor(name, o) {
		this.name = name;
		copyKeys(o, this);
		this.id = name;
		this.color = getColorDictColor(this.color);
	}
	clear() { clearTimeout(this.TO); clearFleetingMessage(); }
	startGame() { clearElement(dTable); }
	clear() { }
	prompt() { }
	activate() { }
}
class GChess extends GMinimalGame {
	constructor(name, o) { super(name, o); }
	simpleHtml(d) {
		let html = createElementFromHTML(`<div id="ChessBoard"></div>`);
		mAppend(d, html);
	}
	complexHtml(d) {
		let html = createElementFromHTML(`
		<div id="FenInDiv">			
			<input type="text" id="fenIn"/>		
			<button type="button" id="SetFen">Set Position</button>	
		</div>	
		<div id="ThinkingImageDiv">	
		</div>
		<div id="ChessBoard">
		</div>
		<div id="CurrentFenDiv">
			<span id="currentFenSpan"></span>		
		</div>	
		<span id="LoadingBook">Loading book, please wait....</span><br/>
		<div id="EngineOutput">Thinking Time: <br/>
			<select id="ThinkTimeChoice">
			  <option value="1">1s</option>
			  <option value="2">2s</option>
			  <option value="4">4s</option>
			  <option value="6">6s</option>
			  <option value="8">8s</option>
			  <option value="10">10s</option>
			</select><br/><br/><br/>
			<span id="BestOut">BestMove:</span><br/>
			<span id="DepthOut">Depth:</span><br/>
			<span id="ScoreOut">Score:</span><br/>
			<span id="NodesOut">Nodes:</span><br/>
			<span id="OrderingOut">Ordering:</span><br/>
			<span id="TimeOut">Time:</span><br/><br/>
			<button type="button" id="SearchButton">Move Now</button><br/>
			<button type="button" id="NewGameButton">New Game</button><br/>
			<button type="button" id="FlipButton">Flip Board</button><br/><br/>
			<button type="button" id="UndoButton">Take Back</button><br/><br/><br/>
			<span id="GameStatus"></span>
		</div>
		`);
		mAppend(d, html);
	}
	testHtml(d) {
		let html = `<div id="ChessBoard"></div>`;
		mAppend(d, createElementFromHTML(html));
		html = `
		<div id="EngineOutput">Thinking Time:<br/>
			<select id="ThinkTimeChoice" class='chess_select'>
			  <option value="1">1 second</option>
			  <option value="3">3s</option>
			  <option value="6">6s</option>
			  <option value="10">10s</option>
			  <option value="60">1 minute</option>
			</select><br/><br/>
			<div id="ThinkingImageDiv" style='height:100px;text-align:center;'><image height=50 src="../assets/icons/chess/think3.png" id="ThinkingPng"/></div><br/>
			<div style='display:none;'>
				<span id="BestOut">BestMove:</span><br/>
				<span id="DepthOut">Depth:</span><br/>
				<span id="ScoreOut">Score:</span><br/>
				<span id="NodesOut">Nodes:</span><br/>
				<span id="OrderingOut">Ordering:</span><br/>
				<span id="TimeOut">Time:</span><br/><br/>
			</div>
			<button class='chess_button' type="button" id="HintButton">Hint</button><br/>
			<!--<button class='chess_button' type="button" id="SearchButton">Move Now</button><br/>-->
			<button class='chess_button' type="button" id="UndoButton">Undo</button><br/><br/>
			<button class='chess_button' type="button" id="NewGameButton">Start</button><br/>
			<button class='chess_button' type="button" id="EndGameButton">Endgame</button><br/><br/>
			<button class='chess_button' type="button" id="NextGameButton" onclick='onClickNextGame()'>Next Game</button><br/>
			<!--<button class='chess_button' type="button" id="FlipButton">Flip Board</button><br/><br/>-->
			<!--<span id="GameStatus"></span>-->
		</div>
		`;
		mAppend(d, createElementFromHTML(html));
		html = `<div id="GameStatus"></div>`;
		mAppend(d, createElementFromHTML(html));
		ActivateChessWidgets();
	}
	startGame() {
		clearElement(dTable);
		let d = mDiv(dTable, { w: '100%', h: '100%', bg: 'transparent' });
		this.testHtml(d);
		StartChessGame(GC.evaluate.bind(GC));
	}
}
class GChess_old extends G2Player {
	clear() { super.clear(); if (isdef(this.game)) { this.game.reset(); } }
	startGame() {
		super.startGame();
		this.createBoard();
		this.game = new Chess();
		this.setStartPosition();
		let c = this.game.turn();
		if (c == 'b') { this.plTurn.color = 'black'; this.plOpp.color = 'white'; } else { this.plTurn.color = 'white'; this.plOpp.color = 'black'; }
		showFleetingMessage(`You play ${this.human.color}`)
	}
	createBoard() {
		let d = mDiv(dTable, { h: 500, w: 500 }, 'dChessBoard');
		let config = {
			pieceTheme: '../alibs/chessBoard/img/chesspieces/wikipedia/{piece}.png',
			draggable: true,
			onDragStart: this.onDragStart.bind(this),
			onDrop: this.onDrop.bind(this),
			onSnapEnd: this.onSnapEnd.bind(this),
		}
		this.board = ChessBoard('dChessBoard', config);
		mLinebreak(dTable);
	}
	setStartPosition() {
		let positions = [
			'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', //default start pos
		];
		if (nundef(this.iPosition)) this.iPosition = 0;
		let state = nundef(this.startPosition) || this.startPosition == 'empty' ? positions[0] : this.startPosition == 'random' ? chooseRandom(positions) : positions[this.iPosition];
		if (!isString(state)) state = arrToFen(state.arr, state.plStart);
		this.game.load(state); //'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 1');
		this.board.position(this.game.fen());
		let idx = this.iPosition + 1; idx = idx % positions.length; this.iPosition = idx;//advance iPosition for next time!
	}
	prompt() {
		let msg = this.plTurn == this.ai && !this.manual ? `Ai (${this.ai.color.toUpperCase()}) thinking...`
			: `player: ${this.plTurn.color.toUpperCase()}`;
		show_instruction(msg +(this.game.in_check() ? '- CHECK!!!' : ''), dTitle);
		this.controller.activateUi();
	}
	activate() {
		let pl = this.plTurn;
		let autoplay = false;
		if (autoplay || pl == this.ai) {
			if (this.ai == pl) { uiActivated = false; aiActivated = true; }
			this.TO = setTimeout(() => {
				let color = this.game.turn();
				if (color === 'b') { var move = getBestMove(this.game, color, globalSum)[0]; }
				else { var move = getBestMove(this.game, color, -globalSum)[0]; }
				globalSum = evaluateBoard(move, globalSum, 'b');
				this.game.move(move);
				this.board.position(this.game.fen());
				this.controller.evaluate();
			}, 100);
		} else { aiActivated = false; uiActivated = true; }
	}
	getTurnColor() { return this.getPlayer(this.game.turn() == 'b' ? 'black' : 'white'); }
	getOppColor() { return this.getPlayer(this.game.turn() == 'b' ? 'white' : 'black'); }
	getPlayer(color) { return firstCond(this.players, x => x.color == color); }
	changePlayer() { this.plTurn = this.game.turn() == 'b' ? this.getPlayer('black') : this.getPlayer('white'); }
	onDragStart(source, piece, position, orientation) {
		if (this.game.game_over() || !uiActivated) return false;
		if ((this.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
			(this.game.turn() === 'b' && piece.search(/^w/) !== -1)) {
			return false
		}
	}
	onDrop(source, target) {
		var move = this.game.move({
			from: source,
			to: target,
			promotion: 'q' // NOTE: always promote to a queen for example simplicity
		});
		if (move === null) return 'snapback';
		this.controller.evaluate();
	}
	onSnapEnd() { this.board.position(this.game.fen()) }
	eval() {
		this.info = null;
		let over = this.gameOver = this.game.game_over();
		if (this.game.in_draw()) { this.tie = true; console.log('in_draw'); this.info = '(draw)'; }
		if (this.game.in_stalemate()) { this.tie = true; console.log('in_stalemate'); this.info = '(stalemate)'; }
		if (this.game.in_threefold_repetition()) { this.tie = true; console.log('in_threefold_repetition'); this.info = '(threefold repetition)'; }
		if (this.game.in_checkmate()) {
			this.tie = false;
			this.winner = this.getOppColor();
			console.log('in_checkmate');
			this.info = `(${this.winner.color.toUpperCase()})`;
		}
	}
}
function iToValue(l) { if (isdef(l)) l = l % 13; return isdef(l) ? l == 0 ? 13 : l : null; }
function makeAreasKrieg(dParent) {
	let dGrid = mDiv(dParent, { gap: 10, bg: 'white', w: '90%', padding: 10, display: 'inline-grid', rounding: 10 }, 'dGrid');
	let layout = ['T', 'H A'];
	let x = createGridLayout(dGrid, layout); //teilt dGrid in areas ein
	let areaStyles = { bg: 'green', hmin: 200, rounding: 6 };//,box:true, padding:10};
	let contentStyles = { lowerRounding: 6 };
	let messageStyles = { fg: 'yellow' };
	let titleStyles = { bg: 'dimgray', family: 'AlgerianRegular', upperRounding: 6 };
	let areas = {
		T: { title: 'table', id: 'dTrick', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles, titleOnTop: true },
		H: { title: 'YOU', id: 'dHuman', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles, titleOnTop: false },
		A: { title: 'opponent', id: 'dAI', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles, titleOnTop: false },
	};
	let items = [];
	for (const k in areas) {
		let item = areas[k];
		item.areaStyles['grid-area'] = k;
		let dCell = mTitledMessageDiv(item.title, dGrid, item.id, item.areaStyles, item.contentStyles, item.titleStyles, item.messageStyles, item.titleOnTop)
		iRegister(item, item.id);
		if (item.titleOnTop) iAdd(item, { div: dCell, dTitle: dCell.children[0], dMessage: dCell.children[1], dContent: dCell.children[2] });
		else iAdd(item, { div: dCell, dTitle: dCell.children[2], dMessage: dCell.children[0], dContent: dCell.children[1] });
		mCenterCenterFlex(diContent(item));
		mStyle(diContent(item), { gap: 10 });//,padding:10, box:true});
		items.push(item);
	}
	return items;
}
function parseHand(keys, deck) {
	let h1 = keys.map(x => Card52._fromKey(x));
	if (isdef(deck)) h1.map(x => deck.remove(x));
	return h1;
}
//#endregion classes3

//#region controller3
var verbose = false;
class ControllerTTT {
	constructor(g, user) {
		this.g = g;
		this.createPlayers(user);
		GameCounter = 0;
	}
	write() { write('gc', ...arguments); }
	createPlayers(user) {
		this.write('create players');
		let players = this.players = this.g.players = [];
		let h = this.human = this.g.human = new SoloPlayer(user);
		let a = this.ai = this.g.ai = new AIPlayer();
		players.push(this.human);
		players.push(this.ai);
		this.ai.color = RED;
	}
	startGame() {
		this.write('start game')
		GameCounter += 1;
		resetState();
		this.g.startGame();
		this.startRound();
	}
	startRound() {
		this.write('start round')
		this.deactivateUi();
		this.g.startRound();
		showStats();
		this.prompt();
	}
	prompt() {
		this.write('prompt')
		this.g.prompt();
	}
	uiInteract(ev) { if (canHumanAct()) this.g.interact(ev); }
	activateUi() {
		this.write('activate');
		if (this.g.plTurn == this.g.ai) aiActivated = true; else uiActivated = true;
		this.g.activate();
	}
	deactivateUi() { aiActivated = uiActivated = false; }
	evaluate() {
		this.write('evaluate')
		this.deactivateUi();
		this.g.eval(...arguments);
		this.write('gameOver', this.g.gameOver)
		if (this.g.gameOver) {
			let msg, sp;
			if (this.g.winner && this.g.winner == this.ai) { msg = 'AI wins!'; sp = 'A.I. wins!'; this.ai.score += 1; }
			else if (this.g.winner) { msg = sp = 'You win!!!'; this.human.score += 1; }
			else { msg = "It's a tie"; sp = 'tie: no one wins'; if (nundef(this.tie)) this.tie = 1; else this.tie += 1; }
			if (this.g.info) msg += ' ' + this.g.info;
			Score.nTotal += 1;
			Score.nCorrect = Score.nWins = this.human.score;
			Score.nLoses = this.ai.score;
			Score.nTied = this.tie;
			showScore();
			show_instruction(msg, dTitle, sp);
			TOMain = setTimeout(() => {
				if (GameCounter <= 3) this.bPlay = mButton('play again', () => { resetRound(); this.startGame(); }, dTable, { fz: 28, margin: 20, rounding: 10, vpadding: 6, hpadding: 12, border: 8 }, ['buttonClass']);
				this.bPlay = mButton('next game', () => { setNextGame(); GC.startGame(); }, dTable, { fz: 28, margin: 20, rounding: 10, vpadding: 6, hpadding: 12, border: 8 }, ['buttonClass']);
			}, 1500);
		} else {
			this.g.changePlayer();
			this.startRound();
		}
	}
}
class ControllerMinimal {
	constructor(g, user) {
		this.g = g;
		this.user = user;
		GameCounter = 0;
	}
	write() { write('gc', ...arguments); }
	startGame(fen) {
		this.write(`__________ start ${this.g.name} game`);
		GameCounter += 1;
		resetState();
		this.g.startGame(fen);
	}
	startRound(){}
	prompt(){}
	uiInteract(){}
	activateUi(){}
	deactivateUi(){}
	evaluate() {
		this.write('evaluate');
		return;
	}
}
class ControllerChess extends ControllerMinimal{
	constructor(g,user){super(g,user);}
	evaluate() {
		super.evaluate();
		this.write('____________GameController\n', GameController);
	}
}
class ControllerC52 extends ControllerMinimal {
	constructor(g, user) { super(g, user); }
}
function write() { if (verbose) console.log(...arguments); }
//#endregion controller3

//#region game
var DropZones = []; //all possible drop elements
var DropZoneItem = null;
var DropZoneItems = [];
var DragSource = null; //original element
var DragSourceItem = null;
var DragSourceItems = [];
var TOFleetingMessage;
function _simpleOptions(options = {}, defsOuter = {}) {
	options.showPic = valf(options.showPic, isdef(options.fzPic));
	options.showLabels = isdef(options.fz);
	options.szPic = { w: options.w, h: options.h };
	options.fzText = options.fz;
	if (nundef(options.rounding)) options.rounding = 4;
	if (nundef(options.margin)) options.margin = 4;
	if (nundef(options.padding)) options.padding = 0;
	if (nundef(options.labelStyles)) options.labelStyles = {};
	if (options.showLabels) { if (nundef(options.labelPos)) options.labelBottom = true; options.labelStyles.fz = options.fzText; }
	options.picStyles = { fz: options.fzPic };
	let [w, h] = [options.szPic.w, options.szPic.h];
	options.outerStyles = {
		w: w, h: h, bg: options.bg, fg: options.fg,
		display: 'inline-flex', 'flex-direction': 'column',
		'justify-content': 'center', 'align-items': 'center', 'vertical-align': 'top',
		padding: 0, box: true, margin: options.margin, rounding: options.rounding,
	};
	if (isdef(defsOuter)) addKeys(defsOuter, options.outerStyles);
	return options;
}
function _visualizeAritOp(op, a, b, dParent, symResult) {
	op = isString(op) ? OPS[op] : op;
	let dx = mDiv(dParent); mFlex(dx); mStyle(dx, { 'align-items': 'center', gap: 16 });
	let d1 = visNumber(a, dx, 'blue');
	let d2 = visOperator(op.wr, dx);
	let d3 = visNumber(b, dx, 'green');
	let d4 = visOperator('=', dx);
	let result = isdef(symResult) ? symResult : op.f(a, b);
	let d5 = visNumber(result, dx, 'red');
	return dx;
}
function _visualizeMult(a, b, dParent, symResult) {
	op = OPS.mult;
	let dx = mDiv(dParent); mFlex(dx); mStyle(dx, { 'align-items': 'center', gap: 16 });
	visNumber(a, dx, 'blue', 'v');
	for (let i = 1; i < b; i++) {
		let d2 = visOperator('+', dx);
		visNumber(a, dx, 'blue', 'v');
	}
	let d4 = visOperator('=', dx);
	let result = isdef(symResult) ? symResult : op.f(a, b);
	let d5 = visNumber(result, dx, 'red');
	return dx;
}
function _visualizeNumber(n, dParent, color, or = 'h') {
	let root = Math.sqrt(n);
	let rows = Math.floor(root);
	let cols = Math.ceil(root);
	if (or == 'v') { let h = rows; rows = cols; cols = h; }
	let dArea = mDiv(dParent, { display: 'inline-grid', 'grid-template-columns': `repeat(${cols}, 1fr)`, bg: 'white', fg: color });
	for (let i = 0; i < n; i++) {
		let item = getItem('plain-circle');
		let d = miPic(item, dArea, { fz: 12, margin: 6 });
		iAdd(item, { div: d });
		mAppend(dArea, d);
	}
	return dArea;
}
function activateFocusGroup(iFocus) {
	if (isdef(iFocus)) Goal.iFocus = iFocus;
	if (Goal.iFocus === null) {
		console.log('nothing to activate');
		return;
	}
	let g = Goal.words[Goal.iFocus];
	g.div.style.backgroundColor = 'black';
}
function addNthInputElement(dParent, n) {
	mLinebreak(dParent, 10);
	let d = mDiv(dParent);
	let dInp = mCreate('input');
	dInp.type = "text"; dInp.autocomplete = "off";
	dInp.style.margin = '10px;'
	dInp.id = 'inputBox' + n;
	dInp.style.fontSize = '20pt';
	mAppend(d, dInp);
	return dInp;
}
function aniFadeIn(elem, secs) { //BROKEN!!!
	elem.style.opacity = 0;
	setTimeout(() => { mRemoveClass(elem, 'transopaOff'); mClass(elem, 'transopaOn'); }, secs * 1000);
}
function aniFadeInOut(elem, secs) {
	mClass(elem, 'transopaOn');
	return setTimeout(() => { mRemoveClass(elem, 'transopaOn'); mClass(elem, 'transopaOff'); }, secs * 1000);
}
function aniFadeInOut_new(elem, msDuration) {
	elem.animate()
	mClass(elem, 'transopaOn');
	return setTimeout(() => { mRemoveClass(elem, 'transopaOn'); mClass(elem, 'transopaOff'); }, secs * 1000);
}
function aniGameOver(msg, silent = false) {
	if (!silent && !G.silent) { writeSound(); playSound('goodBye'); }
	interrupt();
	show('freezer2');
	let dComment = mBy('dCommentFreezer2');
	let dMessage = mBy('dMessageFreezer2');
	let d = mBy('dContentFreezer2');
	clearElement(d);
	mStyle(d, { fz: 20, matop: 40, bg: 'silver', fg: 'indigo', rounding: 20, padding: 25 })
	let style = { matop: 4 };
	dComment.innerHTML = 'Great Job!';
	dMessage.innerHTML = isdef(msg) ? msg : 'Time for a Break...';
	d.style.textAlign = 'center';
	mText('Unit Score:', d, { fz: 22 });
	for (const gname in U.session) {
		let sc = U.session[gname];
		if (sc.nTotal == 0) continue;
		if (DB.games[gname].controllerType == 'solitaire') mText(`${DB.games[gname].friendly}: ${sc.nCorrect}/${sc.nTotal} correct answers (${sc.percentage}%) `, d, style);
		else if (DB.games[gname].controllerType == 'solo') {
			mText(`${DB.games[gname].friendly}: Won:${sc.nWins}, Lost:${sc.nLoses}, Tied:${sc.nTied} `, d, style);
		}
	}
	mClass(mBy('freezer2'), 'aniSlowlyAppear');
}
function aniInstruction(spoken,v) {
	if (isdef(spoken)) say(spoken,v);
	mClass(dInstruction, 'onPulse');
	setTimeout(() => mRemoveClass(dInstruction, 'onPulse'), 500);
}
function animate(elem, aniclass, timeoutms) {
	mClass(elem, aniclass);
	setTimeout(() => mRemoveClass(elem, aniclass), timeoutms);
}
function animateColor(elem, from, to, classes, ms) {
	elem.style.backgroundColor = from;
	setTimeout(() => animate(elem, classes, ms), 10);
}
function animateColorScale(elem, color = 'green', scale = 1.5, timeoutms = 2000, aniClass = 'scaleInColor') {
	setCSSVariable('--aniColor', color);
	setCSSVariable('--aniScale', scale);
	mClass(elem, aniClass);
	setTimeout(() => mRemoveClass(elem, aniClass), timeoutms);
}
function animationCallback(secs, callback, removeBg = false) {
	for (const p of Pictures) { slowlyTurnFaceDown(p, secs - 1, removeBg); }
	TOMain = setTimeout(() => {
		callback();
	}, secs * 1000);
}
function aniPulse(elem, ms) { animate(elem, 'onPulse', ms); }
function blankExpResult() { }
function blankInputs(d, ilist, blink = true) {
	let inputs = [];
	for (const idx of ilist) {
		let inp = d.children[idx];
		inp.innerHTML = '_';
		if (blink) mClass(inp, 'blink');
		inputs.push({ letter: Goal.label[idx].toUpperCase(), div: inp, index: idx });
	}
	return inputs;
}
function blankOperand2() { }
function blankOperator() { }
function blankWordInputs(wi, n, pos = 'random') {
	let indivInputs = [];
	let remels =
		pos == 'random' ? choose(wi, n)
			: pos == 'notStart' ? arrTake(wi.slice(1, wi.length - 1), n)
				: pos == 'start' ? arrTake(wi, n)
					: takeFromTo(wi, wi.length - n, wi.length);
	for (const el of remels) {
		for (const inp of el.charInputs) { unfillCharInput(inp); }
		indivInputs = indivInputs.concat(el.charInputs);
		el.hasBlanks = true;
		el.nMissing = el.charInputs.length;
		if (n > 1) iDiv(el).onclick = onClickWordInput;
	}
	return { iFocus: null, words: remels, letters: indivInputs };
}
function buildWordFromLetters(dParent) {
	let letters = Array.from(dParent.children);
	let s = letters.map(x => x.innerHTML);
	s = s.join('');
	return s;
}
function calcMemorizingTime(numItems, randomGoal = true) {
	let ldep = Math.max(6, randomGoal ? numItems * 2 : numItems);
	return ldep;
}
function calcRowsColsSizeAbWo(n, wmax, hmax, showLabels, wimax = 200, himax = 200, fw = 1, fh = 1) {
	let rows = n > 35 ? 6 : n > 28 ? 5 : n > 24 && !showLabels || n > 21 ? 4 : n > 8 ? 3 : n > 3 ? 2 : 1;
	let cols = Math.ceil(n / rows);
	return calcSizeAbWo(n, rows, cols, wmax, hmax, wimax, himax, fw, fh);
}
function calcSizeAbWo(n, rows, cols, wmax, hmax, wimax = 200, himax = 200, fw = 1, fh = 1) {
	if (nundef(cols)) cols = Math.ceil(n / rows); else if (nundef(rows)) rows = Math.ceil(n / cols);
	let wi = wmax * fw / cols;
	let hi = hmax * fh / rows;
	wi = Math.min(wi, wimax);
	hi = Math.min(hi, himax);
	return [wi, hi, rows, cols];
}
function clearFleetingMessage() {
	clearTimeout(TOFleetingMessage);
	clearElement(dLineBottom);
}
function clearGameTitle() { clearElement(dGameTitle); }
function clearLevel() { clearElement(dLevel); clearBadges(); }
function clearScore() { clearElement(dScore) }
function clearStats() {
	clearLevel();
	clearScore();
	clearGameTitle();
}
function clearTable() {
	clearElement(dLineTableMiddle); clearElement(dLineTitleMiddle); removeMarkers();
}
function colorPrepper(val) {
	return `<span style="color:${ColorDict[val].c}">${ColorDict[val][G.language].toUpperCase()}</span>`;
}
function containsColorWord(s) {
	let colors = ['old', 'blond', 'red', 'blue', 'green', 'purple', 'black', 'brown', 'white', 'grey', 'gray', 'yellow', 'orange'];
	for (const c of colors) {
		if (s.toLowerCase().includes(c)) return false;
	}
	return true;
}
function correctBlanks() {
	let wrong = getWrongWords();
	if (nundef(TOList)) TOList = {};
	Selected.feedbackUI = wrong.map(x => iDiv(x));
	failPictureGoal();
	let t1 = setTimeout(removeMarkers, 1000);
	let t2 = setTimeout(() => wrong.map(x => { correctWordInput(x); animate(iDiv(x), 'komisch', 1300); }), 1000);
	TOList.correction = [t1, t2];
	return 2500;
}
function correctWordInput(winp) { winp.charInputs.map(x => refillCharInput(x, x.letter)); }
function createContainers(list, dArea, styles) {
	let i = 0;
	let containers = [];
	let defStyles = { w: 150, h: 200, bg: 'random', rounding: 12, display: 'inline-block', margin: 12 };
	addKeys(defStyles, styles);
	for (const cat of list) {
		let cont = mTitledDiv(cat, dArea, styles, {}, 'c' + i);
		mStyle(cont, { h: '100%' });
		i += 1;
		containers.push({ label: cat, div: cont });
	}
	return containers;
}
function createDragLetters() {
	fz = 60; let word = Goal.label.toUpperCase(); //let wlen = word.length;
	let dp = createLetterInputsX(word, dTable, { bg: 'silver', display: 'inline-block', fz: fz, w: fz, h: fz * 1.1, margin: 4 }); //,w:40,h:80,margin:10});
	scrambleInputs(dp);
	let letters = Array.from(dp.children);
	for (let i = 0; i < letters.length; i++) {
		let l = letters[i]
		l.onmousedown = onMouseDownOnLetter;
		mClass(l, 'draggable');
		l.id = 'letter' + i;
	}
	return letters;
}
function createDropInputs() {
	let fz = 120; let word = Goal.label.toUpperCase(); let wlen = word.length;
	let dpEmpty = createLetterInputsX(word, dTable, { pabottom: 5, bg: 'grey', display: 'inline-block', fz: fz, w: fz, h: fz * 1.1, margin: 4 }); //,w:40,h:80,margin:10});
	let inputs = blankInputs(dpEmpty, range(0, wlen - 1), false);
	DropZones = [];
	for (let i = 0; i < inputs.length; i++) {
		let l = iDiv(inputs[i]);
		l.onmousedown = onMouseDownOnLetter;
		l.onclick = l.innerHTML = '_';
		mClass(l, 'dropzone');
		l.id = 'input' + i;
		DropZones.push(l);
	}
	return inputs;
}
function createLetterInputs(s, dParent, style, idForContainerDiv, colorWhiteSpaceChars = true, preserveColorsBetweenWhiteSpace = true) {
	let d = mDiv(dParent);
	if (isdef(idForContainerDiv)) d.id = idForContainerDiv;
	inputs = [];
	let whiteStyle = jsCopy(style);
	if (!colorWhiteSpaceChars) {
		if (isdef(whiteStyle.fg)) delete whiteStyle.fg;
		if (isdef(whiteStyle.bg)) delete whiteStyle.bg;
		if (isdef(whiteStyle.border)) delete whiteStyle.border;
	}
	let fg, fgOrig, bg, bgOrig;
	fgOrig = style.fg;
	bgOrig = style.bg;
	if (isVariableColor(fgOrig) && isdef(style.fg)) { fg = computeColorX(fgOrig); style.fg = fg; }
	if (isVariableColor(bgOrig) && isdef(style.bg)) { bg = computeColorX(bgOrig); style.bg = bg; }
	for (let i = 0; i < s.length; i++) {
		let d1 = mCreate('div');
		mAppend(d, d1);
		d1.innerHTML = s[i];
		let white = isWhiteSpace2(s[i]);
		if (white) {
			if (isVariableColor(fgOrig) && isdef(style.fg)) { fg = computeColorX(fgOrig); style.fg = fg; }
			if (isVariableColor(bgOrig) && isdef(style.bg)) { bg = computeColorX(bgOrig); style.bg = bg; }
		}
		mStyle(d1, white ? whiteStyle : style);
	}
	return d;
}
function createLetterInputsX(s, dParent, style, idForContainerDiv) {
	let d = mDiv(dParent);
	if (isdef(idForContainerDiv)) d.id = idForContainerDiv;
	inputs = [];
	for (let i = 0; i < s.length; i++) {
		let d1 = mDiv(d);
		d1.innerHTML = s[i];
		mStyle(d1, style);
	}
	return d;
}
function createMultipleChoiceElements(correctAnswer, wrongAnswers, dParent, dFeedbackUI, styles) {
	if (nundef(Goal)) Goal = {};
	let choices = wrongAnswers; choices.push(correctAnswer);
	Goal.correctChoice = correctAnswer;
	if (isYesNo(choices)) {
		sortByDescending(choices, 'text');// = [{ num: 1, text: 'yes' }, { num: 0, text: 'no' }];
	} else {
		shuffle(choices);
		if (coin()) shuffle(choices);
	}
	Goal.choices = choices;
	Goal.feedbackUI = dFeedbackUI;
	let idx = 0;
	for (const ch of choices) {
		let dButton = mButton(ch.text, onClickChoice, dParent, { wmin: 100, fz: 36, margin: 20, rounding: 4, vpadding: 4, hpadding: 10 }, ['toggleButtonClass']);
		dButton.id = 'bChoice_' + idx; idx += 1;
		if (ch.text == correctAnswer.text) {
			Goal.choice = ch.toString();
			Goal.buttonCorrect = dButton; //else console.log('ch', ch.toString(), 'res', wp.result.text)
		}
	}
}
function createNumberSequence(n, min, max, step, op = 'plus') {
	let fBuild = x => { return op == 'plus' ? (x + step) : op == 'minus' ? (x - step) : x; };
	if (op == 'minus') min += step * (n - 1);
	if (min >= (max - 10)) max = min + 10;
	let seq = getRandomNumberSequence(n, min, max, fBuild, lastPosition);
	lastPosition = seq[0];
	return seq;
}
function createWordInputs(words, dParent, idForContainerDiv = 'seqContainer', sep = null, styleContainer = {}, styleWord = {}, styleLetter = {}, styleSep = {}, colorWhiteSpaceChars = true, preserveColorsBetweenWhiteSpace = true) {
	if (isEmpty(styleWord)) {
		let sz = 80;
		styleWord = {
			margin: 10, padding: 4, rounding: '50%', w: sz, h: sz, display: 'flex', fg: 'lime', bg: 'yellow', 'align-items': 'center',
			border: 'transparent', outline: 'none', fz: sz - 25, 'justify-content': 'center',
		};
	}
	let dContainer = mDiv(dParent);
	if (!isEmpty(styleContainer)) mStyle(dContainer, styleContainer); else mClass(dContainer, 'flexWrap');
	dContainer.id = idForContainerDiv;
	let inputGroups = [];
	let charInputs = [];
	let iWord = 0;
	let idx = 0;
	let numWords = words.length;
	let wheel = getHueWheel(G.color, 40, numWords <= 4 ? 60 : numWords <= 10 ? 30 : 15, 0);
	wheel = wheel.map(x => colorHSLBuild(x, 100, 50));
	wheel = shuffle(wheel);
	let wheel1 = colorPalShadeX(anyColorToStandardString(wheel[0]), numWords);
	wheel = jsCopy(wheel1);
	if (G.op == 'plus') wheel.reverse();
	for (const w of words) {
		let dGroup = mDiv(dContainer);
		mStyle(dGroup, styleWord);
		let bg = wheel[iWord]; // dGroup.style.backgroundColor=randomColorX(G.color,40,60,0,50,50);//'yellow';//randomColorX(G.color,70,80);
		dGroup.style.backgroundColor = bg;
		dGroup.style.color = colorIdealText(bg);// randomColorX(bg,20,30);
		dGroup.id = idForContainerDiv + '_' + iWord;
		let g = { dParent: dContainer, word: w, iWord: iWord, div: dGroup, oStyle: styleWord, ofg: dGroup.style.color, obg: dGroup.style.backgroundColor };
		inputGroups.push(g);
		let inputs = [];
		let iLetter = 0;
		let wString = w.toString();
		for (const l of wString) {
			let dLetter = mDiv(dGroup);
			if (!isEmpty(styleLetter)) mStyle(dLetter, styleLetter);
			dLetter.innerHTML = l;
			let inp = { group: g, div: dLetter, letter: l, iLetter: iLetter, index: idx, oStyle: styleLetter, ofg: dLetter.style.color, obg: dLetter.style.backgroundColor };
			charInputs.push(inp);
			inputs.push(inp);
			iLetter += 1; idx += 1;
		}
		g.charInputs = inputs;
		if (iWord < words.length - 1 && isdef(sep)) {
			let dSep = mDiv(dContainer);
			dSep.innerHTML = sep;
			if (isdef(styleSep)) mStyle(dSep, styleSep);
		}
		iWord += 1;
	}
	return { words: inputGroups, letters: charInputs };
}
function deactivateFocusGroup() {
	if (Goal.iFocus === null) {
		return;
	}
	let g = Goal.words[Goal.iFocus];
	g.div.style.backgroundColor = g.obg;
	Goal.iFocus = null;
}
function detectArea(dParent, w, h) {
	let rect = isdef(dParent) ? getRect(dParent) : null;
	if (nundef(w)) { w = rect ? rect.w : window.innerWidth; }
	if (nundef(h)) { h = rect ? rect.h : window.innerHeight; }
	return [w, h];
}
function evalExp() { }
function failPictureGoal(withComment = false) {
	if (withComment && G.spokenFeedback) {
		let lang = G.language;
		const comments = {
			E: ['too bad', 'oh', 'oops', 'nope'],
			D: ['aber geh', 'nicht ganz', 'falsch'],
			S: ['no'],
			F: ['non'],
			C: ['不正确'],
		}[lang];
		say(chooseRandom(comments), lang);
	}
	if (isdef(Selected) && isdef(Selected.feedbackUI)) {
		let uilist = isList(Selected.feedbackUI) ? Selected.feedbackUI : [Selected.feedbackUI];
		let sz = getRect(uilist[0]).h;
		for (const ui of uilist) {
			mpOver(markerFail(), ui, sz * (1 / 2), 'red', 'openMojiTextBlack');
		}
	}
}
function failSomePictures(withComment = false) {
	if (withComment && G.spokenFeedback) {
		const comments = (G.language == 'E' ? ['too bad'] : ["aber geh'"]);
		sayRandomVoice(chooseRandom(comments));
	}
	for (const p of Pictures) {
		let ui = iDiv(p);
		let sz = getRect(ui).h;
		if (p.isCorrect == false) {
			mpOver(markerFail(), ui, sz * (1 / 2), 'red', 'openMojiTextBlack');
		}else mpOver(markerSuccess(), ui, sz * (4 / 5), 'limegreen', 'segoeBlack');
	}
}
function failThumbsDown(withComment = false) {
	if (withComment && G.spokenFeedback) {
		const comments = (G.language == 'E' ? ['too bad'] : ["aber geh'"]);
		sayRandomVoice(chooseRandom(comments));
	}
	let p1 = firstCond(Pictures, x => x.key == 'thumbs down');
	iDiv(p1).style.opacity = 1;
	let p2 = firstCond(Pictures, x => x.key == 'thumbs up');
	iDiv(p2).style.display = 'none';
}
function failThumbsDownPlus(withComment = false) {
	if (withComment && G.spokenFeedback) {
		const comments = (G.language == 'E' ? ['too bad'] : ["aber geh'"]);
		sayRandomVoice(chooseRandom(comments));
	}
	let p1 = firstCond(Pictures, x => x.key == 'thumbs down');
	iDiv(p1).style.opacity = 1;
	let p2 = firstCond(Pictures, x => x.key == 'thumbs up');
	iDiv(p2).style.display = 'none';
	if (isdef(Selected) && isdef(Selected.feedbackUI)) {
		let uilist = isList(Selected.feedbackUI) ? Selected.feedbackUI : [Selected.feedbackUI];
		let sz = getRect(uilist[0]).h;
		for (const ui of uilist) mpOver(markerFail(), ui, sz * (1 / 2), 'red', 'openMojiTextBlack');
	}
}
function fillCharInput(inp, ch) {
	let d = iDiv(inp);
	d.innerHTML = ch;
	mRemoveClass(d, 'blink');
}
function fleetingMessage(msg, styles, fade = false, ms=3000) {
	let d = mDiv(dLineBottom);
	if (isString(msg)) {
		d.innerHTML = msg;
		mStyle(d, styles)
	} else {
		mAppend(d, msg);
	}
	if (fade) animateProperty(dLineBottom, 'opacity', 1, .4, 0, ms);
	return d;
}
function gameOver(msg, silent = false) { TOMain = setTimeout(aniGameOver(msg, silent), DELAY); }
function generateExpAnswers() { }
function getActualText(item) {
	if (isdef(item.live.dLabel)) return item.live.dLabel.innerHTML;
}
function getColorLabelInstruction(cmd, color, label) {
	if (nundef(color)) color = Goal.color;
	let colorWord = color[G.language];
	let colorSpan = `<span style='color:${color.c}'>${colorWord.toUpperCase()}</span>`;
	if (nundef(label)) label = Goal.label;
	let labelSpan = `<b>${label.toUpperCase()}</b>`;
	let eCommand, dCommand;
	switch (cmd) {
		case 'click': eCommand = cmd + ' the'; dCommand = cmd; break
		case 'then': eCommand = cmd + ' the'; dCommand = 'dann'; break
	}
	let eInstr = `${eCommand} ${colorWord} ${label}`;
	let dInstr = `${dCommand} ${label} in ${colorWord}`;
	let spoken = G.language == 'E' ? eInstr : dInstr;
	let written = spoken.replace(colorWord, colorSpan).replace(label, labelSpan);
	console.log('spoken', spoken, 'written', written);
	return [written, spoken];
}
function getCorrectlyAnsweredWords() { return getQWords().filter(x => getInputStringOfWord(x) == x.word); }
function getCorrectWords() { return Goal.seq; }
function getCorrectWordString(sep = ' ') { return getCorrectWords().join(sep); }
function getDistinctVals(list, prop) {
	let res = [];
	for (const item of list) {
		let val = item[prop];
		addIf(res, val);
	}
	return res;
}
function getGameOrLevelInfo(k, defval) {
	let val = lookup(DB.games, [G.id, 'levels', G.level, k]);
	if (!val) val = lookupSet(DB.games, [G.id, k], defval);
	return val;
}
function getGlobalColors() { return Object.keys(ColorDict).map(x => x.E); }
function getIndicesOfCorrectlyAnsweredWords() { return getCorrectlyAnsweredWords().map(x => x.iWord); }
function getIndicesOfWrongChars() { return getWrongChars().map(x => x.index); }
function getIndicesOfWrongWords() { return getWrongWords().map(x => x.iWord); }
function getInputStringOfChar(inp) { return iDiv(inp).innerHTML; }
function getInputStringOfChari(index) { return getInputStringOfChar(Goal.chars[index]); }
function getInputStringOfWord(winp) { return winp.charInputs.map(x => iDiv(x).innerHTML).join(''); }
function getInputStringOfWordi(iWord) { return getInputStringOfWord(Goal.words[iWord]); }
function getInputWords() { return Goal.words.map(x => getInputStringOfWord(x)); }
function getInputWordString(sep = ' ') { return getInputWords().join(sep); }
function getNextIndexOfMissingNumber(iStart = 0) {
	for (let i = iStart; i < G.seq.length; i++) {
		if (Goal.words[i].hasBlanks) return i;
	}
	return null;
}
function getNumSeqHint() {
	let l = G.op == 'plus' ? 'to' : 'from';
	let msg = `${G.op} ${G.step} ${l} the previous number`;
	msg = `${G.oop.cmd} ${G.step} ${G.oop.link} the previous number`;
	return msg;
}
function getNumSeqHintString(i) {
	console.log('i', i, 'trial#', G.trialNumber)
	let cmd = G.op;
	let m = G.step;
	let lstSpoken, lstWritten;
	if (i == 0) {
		lstSpoken = [G.oop.cmd, m];
	} else if (i == 1) {
		let decl = G.op == 'plus' ? 'to' : G.op == 'minus' ? 'from' : 'by';
		let phrase = decl + ' the previous number';
		lstSpoken = [G.oop.cmd, m, G.oop.link, ' the previous number'];
	} else if (i == 2) {
		let iBlank = getNextIndexOfMissingNumber();
		let iPrevious = iBlank - 1;
		let n = G.seq[iPrevious];
		lstSpoken = ['the previous number', 'is', n];
	} else if (i >= 3) { //  || i > 4) {
		let iBlank = getNextIndexOfMissingNumber();
		let iPrevious = iBlank - 1;
		let n = G.seq[iPrevious];
		let oop = OPS[cmd];//let op = cmd;// == 'plus' ? 'plus' : cmd == 'minus' ? 'minus' : cmd == 'mult' ? 'times' : 'divided by';
		let erg = i >= 4 ? Goal.words[iBlank].word : '?';
		lstSpoken = ['', n, oop.sp, m, 'equals', erg];
		lstWritten = [n, oop.wr, m, '=', erg]; //erg == '?' ? '?' : erg]
	} else {
		let iBlank = getNextIndexOfMissingNumber();
		lstSpoken = ['enter', Goal.words[iBlank].word];
	}
	if (G.language == 'D') lstSpoken = lstSpoken.map(x => translateToGerman(x));
	if (nundef(lstWritten)) lstWritten = lstSpoken;
	return [lstSpoken.join(' '), lstWritten.join(' ')];
}
function getOperationHintString(i) {
	if (i == 0) {
		let spOp = G.oop.sp; if (G.language == 'D') spOp = DD[spOp];
		let sSpoken = [G.operand, spOp, G.step].join(' ');
		let sWritten = visOperation(G.op, G.operand, G.step, null, '?');
		return [sSpoken, sWritten];
	} else {
		let result = G.oop.f(G.operand, G.step);
		let lstSpoken = i == 1 ? result == 0 ? [result] : ['count', 'the red dots'] : [G.operand, G.oop.sp, G.step, 'equals', result];
		if (G.language == 'D') lstSpoken = lstSpoken.map(x => translateToGerman(x));
		let sSpoken = lstSpoken.join(' ');
		let sWritten = visOperation(G.op, G.operand, G.step, null);
		return [sSpoken, sWritten];
	}
}
function getOptionsMinimalistic(dParent, handler, w = 0, h = 0, ifs = {}, options = {}, g) {
	[w, h] = detectArea(dParent, w, h);
	let defOptions = {
		isRegular: true, hugeFont: true, szPic: { w: 200, h: 200 }, gap: 15, shufflePositions: true,
		showPic: true, showLabels: true, luc: 'l', labelPos: 'bottom', language: g.language, keySet: g.vocab,
		w: w, h: h, fz: 24, fzText: 24, fzPic: 96, ifs: ifs, handler: handler, ifs: ifs, handler: handler,
	};
	addSimpleProps(g, options);
	addKeys(defOptions, options);
	if (options.numRepeat > 1 && nundef(options.ifs.bg)) {
		let bg = isdef(options.colorKeys) ? 'white' : (i) => options.sameBackground ? computeColor('random') : 'random';
		let fg = isdef(options.colorKeys) ? 'black' : 'contrast';
		options.ifs.bg = bg;
		options.ifs.fg = fg;
	}
	return options;
}
function getOrdinal(i) { return G.numRepeat == 1 ? '' : G.language == 'E' ? ordinal_suffix_of(i) : '' + i + '. '; }
function getOrdinalColorLabelInstruction(cmd, ordinal, color, label) {
	if (nundef(ordinal)) ordinal = getOrdinal(Goal.iRepeat);
	if (nundef(color)) color = Goal.color;
	let colorWord = '', colorSpan = '';
	if (isdef(color)) {
		colorWord = nundef(color) ? '' : nundef(color[G.language]) ? color.E : color[G.language];
		if (G.language == 'D' && !isEmpty(ordinal) && !['lila', 'rosa'].includes(colorWord)) colorWord += 'e';
		colorSpan = `<span style='color:${color.c}'>${colorWord.toUpperCase()}</span>`;
	}
	if (nundef(label)) label = Goal.label;
	let labelSpan = `<b>${label.toUpperCase()}</b>`;
	let eCommand, dCommand;
	switch (cmd) {
		case 'click': eCommand = cmd + ' the'; dCommand = cmd; break
		case 'then': eCommand = cmd + ' the'; dCommand = 'dann'; break
	}
	let eInstr = `${eCommand} ${ordinal} ${colorWord} ${label}`;
	let dInstr = ordinal == '' ? `${dCommand} ${label} ${colorWord == '' ? '' : 'in ' + colorWord}`
		: `${dCommand} ${ordinal} ${colorWord} ${label}`;
	let ecorr = `${ordinal} ${colorWord} ${label}`
	let dcorr = ordinal == '' ? `${label} ${colorWord == '' ? '' : 'in ' + colorWord}`
		: `${ordinal} ${colorWord} ${label}`;
	let corr = G.language == 'E' ? ecorr : dcorr;
	let spoken = G.language == 'E' ? eInstr : dInstr;
	let written = spoken.replace(colorWord, colorSpan).replace(label, labelSpan);
	return [written, spoken, corr];
}
function getPrefixHint() {
	let oldHintLength = isdef(G.hintLength) ? G.hintLength : 0;
	if (nundef(G.hintLength)) G.hintLength = 0;
	G.input.value = G.correctPrefix;
	let progress = G.correctPrefix.length > G.nCorrect;
	if (G.correctPrefix.length > G.nCorrect) {
		G.hintLength = 1;
		G.nCorrect = G.correctPrefix.length;
	} else if (G.hintLength < G.goal.label.length - G.nCorrect) G.hintLength += 1;
	if (G.hintLength == 0) G.hintLength = 1;
	let wr = substringOfMinLength(G.goal.label, G.correctPrefix.length, G.hintLength);
	let sp = oldHintLength == G.hintLength && !progress ? G.lastHintPrompt : null;
	return [wr, sp];
}
function getQChars() {
	return Goal.qCharIndices.map(x => Goal.chars[x]);
}
function getQWords() { return Goal.qWordIndices.map(x => Goal.words[x]); }
function getStandardFz(wi, hi, showPic, showLabels, wLongest) {
	let hText = showPic ? hi / 3 : hi;
	return showLabels ? idealFontSize(wLongest, wi, hText) : 0;
}
function getStandardFzPic(wi, hi, showLabels) { return Math.min(wi * .8, showLabels ? hi * .6 : hi * .75); }
function getStyledItems(words, bgFunc, fgFunc = 'contrast', fzFunc) {
	let items = [];
	if (isString(bgFunc)) { bgFunc = () => bgFunc; }
	if (isLiteral(fzFunc)) { fzFunc = () => fzFunc; }
	if (isString(fgFunc)) { fgFunc = () => fgFunc; }
	else if (nundef(fgFunc)) fgFunc = (i, w, bg) => colorIdealText(bg);
	for (let i = 0; i < words.length; i++) {
		let w = words[i];
		let bg = bgFunc(i, w);
		let fg = fgFunc(i, w, bg);
		let item = { w: w, bg: bg, fg: fg, i: i, fz: fzFunc(i, w) };
		items.push(item)
	}
	return items;
}
function getStyledItems1(words, bgFunc, fgFunc = 'contrast', fzFunc) {
	let items = [];
	if (isString(bgFunc)) { bgFunc = () => bgFunc; }
	if (isLiteral(fzFunc)) { fzFunc = () => fzFunc; }
	if (isString(fgFunc)) { fgFunc = () => fgFunc; }
	else if (nundef(fgFunc)) fgFunc = (i, w, bg) => colorIdealText(bg);
	for (let i = 0; i < words.length; i++) {
		let w = words[i];
		let bg = bgFunc(i, w);
		let fg = fgFunc(i, w, bg);
		let item = { w: w, bg: bg, fg: fg, i: i, fz: fzFunc(i, w) };
		items.push(item)
	}
	return items;
}
function getWrongChars() { return getQChars().filter(x => getInputStringOfChar(x) != x.letter); }
function getWrongWords() { return getQWords().filter(x => getInputStringOfWord(x) != x.word); }
function hideMouse() {
	var x = dTable.getElementsByTagName("DIV");
	for (const el of x) { el.prevCursor = el.style.cursor; }
	for (const p of Pictures) {
		mRemoveClass(iDiv(p), 'frameOnHover'); iDiv(p).style.cursor = 'none';
		for (const ch of iDiv(p).children) ch.style.cursor = 'none';
	}
	for (const el of x) { mClass(el, 'noCursor'); }
}
function hintEngineStart(hintFunc, hintlist, initialDelay) {
	G.hintFunc = hintFunc;
	recShowHints(hintlist, QContextCounter, initialDelay, d => initialDelay + 2000); //showNumSeqHint(G.trialNumber);
}
function isLetterElement(elem) { return isCapitalLetterOrDigit(elem.innerHTML); }
function isVariableColor(c) { return c == 'random' || c == 'randPastel' || c == 'randDark' || c == 'randLight' || isList(c); }
function isYesNo(choices) { return !firstCond(choices, x => !(['yes', 'no'].includes(x.text))); }
function justClick(ev) { console.log('click', ev.target, 'item', evToItemC(ev)); }
function labelPrepper(val) { return `<b>${val.toUpperCase()}</b>`; }
function logicCheck(pic) {
}
function logicFilter(allPics, exceptProps) {
	let props = { label: { vals: getDistinctVals(allPics, 'label'), friendly: '' } };
	if (G.numColors > 1) props.colorKey = { vals: getDistinctVals(allPics, 'colorKey'), friendly: 'color' };
	if (G.numRepeat > 1) props.iRepeat = { vals: getDistinctVals(allPics, 'iRepeat'), friendly: 'number' };
	if (sameList(Object.keys(props), exceptProps)) return ['no props left', 'no', [], 'unknown'];
	let lstSpoken, lstWritten, piclist = [];
	let prop = chooseRandom(arrWithout(Object.keys(props), exceptProps));
	let val = chooseRandom(props[prop].vals);
	lstSpoken = [];
	if (prop == 'label') {
		lstSpoken.push(val);// + (G.language == 'E' ? 's' : ''));
		lstWritten = [labelPrepper(val)];
		piclist = allPics.filter(x => x.label == val);
	} else if (prop == 'colorKey') {
		lstSpoken = lstSpoken.concat(['with', props[prop].friendly, ColorDict[val][G.language]]);
		lstWritten = ['with', props[prop].friendly, colorPrepper(val)];
		piclist = allPics.filter(x => x[prop] == val);
	} else if (prop == 'iRepeat') {
		let op = (G.level > 2 && G.numRepeat > 2 && val > 1 && val < G.numRepeat) ? chooseRandom(['leq', 'geq', 'eq']) : 'eq';
		let oop = OPS[op];
		lstSpoken = lstSpoken.concat(['with', props[prop].friendly, oop.sp, val]);
		lstWritten = ['with', props[prop].friendly, oop.wr, val];
		piclist = allPics.filter(x => oop.f(x[prop], val));
	}
	if (nundef(lstWritten)) lstWritten = lstSpoken;
	let s = lstSpoken.join(' ');
	let w = lstWritten.join(' ');
	if (G.language == 'D') {
		s = s.split(' ').map(x => translateToGerman(x)).join(' ');
		w = w.split(' ').map(x => translateToGerman(x)).join(' ');
	}
	return [s, w, piclist, prop];
}
function logicMulti(n) {
	let allPics = Pictures;
	let maxPics = 4;
	let [s1, w1, pics1, prop1] = logicFilter(allPics, []);
	let [s, w, pics, prop] = [s1, w1, pics1, prop1];
	let maxloop = 3; cntloop = 0; let propsUsed = [prop1];
	while (pics.length > maxPics && cntloop < maxloop) {
		cntloop += 1;
		let opp = arrMinus(allPics, pics);
		if (opp.length <= maxPics) {
			let lst = ['eliminate', 'all', 'EXCEPT'];
			if (G.language == 'D') lst = lst.map(x => DD[x]);
			let prefix = lst.join(' ');
			s = prefix + ' ' + s;
			w = prefix + ' ' + w;
			return [s, w, opp];
		}
		[s1, w1, pics1, prop1] = logicFilter(pics, propsUsed);
		if (isEmpty(pics1)) return [s, w, pics];
		else {
			pics = pics1;
			prop = prop1;
			if (prop1 == 'label') {
				s = s1 + ' ' + s;
				w = w1 + ' ' + w;
			} else if (arrLast(propsUsed) == 'label') {
				let conn = G.language == 'E' ? ' with ' : ' mit ';
				s1 = s1.substring(s1.indexOf(' '));
				w1 = w1.substring(w1.indexOf(' '));
				s = s + conn + s1; w = w + conn + w1;
			} else {
				let conn = G.language == 'E' ? ' and ' : ' und ';
				s1 = s1.substring(s1.indexOf(' '));
				w1 = w1.substring(w1.indexOf(' '));
				s = s + conn + s1; w = w + conn + w1;
			}
			propsUsed.push(prop1);
		}
	}
	let lst1 = ['click', 'all'];
	if (G.language == 'D') lst1 = lst1.map(x => DD[x]);
	let prefix = lst1.join(' ');
	s = prefix + ' ' + s;
	w = prefix + ' ' + w;
	return [s, w, pics];
}
function logicReset() {
}
function makeExpSequence() {
	G.operand = randomNumber(G.minNum, G.maxNum);
	G.op = chooseRandom(G.ops); //G.op ist jetzt ein key in OPS
	G.step = G.op == 'minus' ? randomNumber(0, G.operand) : randomNumber(G.minFactor, G.maxFactor); // > upper ? 0 : randomNumber(G.minFactor, upper); // chooseRandom(G.steps);
	G.oop = OPS[G.op];
	G.result = G.oop.f(G.operand, G.step);
	G.seq = [G.operand, G.oop.wr, G.step, '=', G.result];//,'=',13]; // _createNumberSequence(G.seqLen, G.minNum, G.maxNum, G.step, G.op);
	return G.seq;
}
function makeSurePlayerColorsAreContrasting(human, ai) {
	ai.color = RED;// bestContrastingColor(human,[GREEN,RED,YELLOW])
}
function mCheckit(elem, sz = 50) {
	if (G.spokenFeedback) {
		const comments = (G.language == 'E' ? ['YEAH!', 'Excellent!!!', 'CORRECT!', 'Great!!!'] : ['gut', 'Sehr Gut!!!', 'richtig!!', 'Bravo!!!']);
		sayRandomVoice(chooseRandom(comments));
	}
	if (nundef(sz)) sz = getRect(elem).h;
	let d = markerSuccess();
	mpOver(d, elem, sz * (4 / 5), 'limegreen', 'segoeBlack');
	mMoveBy(d, 0, -4);
	return d;
}
function mXit(elem, sz = 50) {
	if (nundef(sz)) sz = getRect(elem).h;
	let d = markerFail();
	mpOver(d, elem, sz / 2, 'red', 'openMojiTextBlack');
	mMoveBy(d, 0, -4);
	return d;
}
function myPresent(dArea, items, options) {
	let showLabels = options.showLabels;
	let w = options.w * valf(options.fw, .9);
	let h = options.h * valf(options.fh, .7);
	let wi, hi, rows, cols;
	if (isdef(options.rows) || isdef(options.cols)) {
		[wi, hi, rows, cols] = calcSizeAbWo(items.length, options.rows, options.cols, w, h, options.wimax, options.himax);
	} else[wi, hi, rows, cols] = calcRowsColsSizeAbWo(items.length, w, h, showLabels, options.wimax, options.himax);
	let gap = wi * .1; if (cols > 1) wi -= gap; if (rows > 1) hi -= gap;
	let fzPic = options.fzPic = getStandardFzPic(wi, hi, showLabels);
	let fz = getStandardFz(wi, hi, options.showPic, options.showLabels, options.wLongest);
	options.szPic = { w: wi, h: hi };
	if (nundef(options.ifs)) options.ifs = {};
	let outerStyles = {
		w: showLabels ? wi : 'auto', h: hi, rounding: 6, //maleft:50,//maleft: 50,//gap / 2,
		bg: valf(options.ifs.bg, 'random'), fg: 'contrast', display: 'inline-flex', 'flex-direction': 'column',
		'justify-content': 'center', 'align-items': 'center', 'vertical-align': 'top',
	};
	let picStyles = { fz: fzPic };
	let labelStyles = { fz: fz };
	for (const item of items) {
		for (const k in options.ifs) if (isdef(item[k])) outerStyles[k] = item[k];
		if (isdef(item.textShadowColor)) {
			let sShade = '0 0 0 ' + item.textShadowColor;
			if (options.showPic) {
				picStyles['text-shadow'] = sShade;
				picStyles.fg = anyColorToStandardString('black', options.contrast); //'#00000080' '#00000030' 
			} else {
				labelStyles['text-shadow'] = sShade;
				labelStyles.fg = anyColorToStandardString('black', options.contrast); //'#00000080' '#00000030' 
			}
		}
		let dOuter = mCreate('div', outerStyles, item.id);
		dOuter.onclick = options.handler;
		picStyles.family = item.info.family;
		let dLabel, dPic;
		if (options.showPic) { dPic = mDiv(dOuter, picStyles); dPic.innerHTML = item.info.text; }
		if (showLabels) dLabel = mText(item.label, dOuter, labelStyles);
		if (options.showRepeat) addRepeatInfo(dOuter, item.iRepeat, wi);
		iAdd(item, { options: options, div: dOuter, dLabel: dLabel, dPic: dPic });
	}
	mStyle(dArea, { display: 'inline-grid', gap: gap, 'grid-template-columns': `repeat(${cols},${wi}px)` });
	items.map(x => mAppend(dArea, iDiv(x)));
	return getRect(dArea);
}
function myShowLabels(onClickPictureHandler, ifs = {}, options = {}, keys, labels) {
	options.wimax = 200; options.himax = 50;
	options.w = window.innerWidth - 180; options.h = 50; options.fz = 22;
	options.showPic = false; options.showLabels = true;
	return showPictures(dTable, onClickPictureHandler, ifs, options, keys, labels);
}
function myShowPics(handler, ifs = {}, options = {}, keys, labels) {
	options.showPic = true; //if (nundef(options.showLabels)) options.showLabels = G.showLabels;
	options.wimax = options.himax = 200;
	options.w = window.innerWidth - 180; options.h = window.innerHeight - 220;
	Pictures = showPictures(dTable, handler, ifs, options, keys, labels);
}
function numberSequenceCorrectionAnimation(stringFunc) {
	let wrong = getWrongWords();
	if (nundef(TOList)) TOList = {};
	let msg = stringFunc();
	showFleetingMessage(msg, 0, { fz: 32 }); //return;
	Selected.feedbackUI = wrong.map(x => iDiv(x));
	failPictureGoal();
	let t1 = setTimeout(removeMarkers, 1000);
	let t2 = setTimeout(() => wrong.map(x => { correctWordInput(x); animate(iDiv(x), 'komisch', 1300); }), 1000);
	t4 = setTimeout(() => { if (G.spokenFeedback) sayRandomVoice(msg); }, 500);
	TOList.numseq = [t1, t2, t4];//, t3, t4];//, t4];
	return 2800;
}
function onClickChoice(ev) {
	let id = evToClosestId(ev);
	let b = mBy(id);
	let index = Number(stringAfter(id, '_'));
	Goal.choice = Goal.choices[index];
	Goal.buttonClicked = b;
	G.controller.evaluate.bind(G.controller)();
}
function onClickWordInput(ev) {
	return;
	if (!canAct()) return;
	ev.cancelBubble = true;
	let id = evToClosestId(ev);
	let iWord = Number(stringAfter(id, '_'));
	let g = Goal.words[iWord];
	if (nundef(g.hasBlanks) || !g.hasBlanks) return;
	deactivateFocusGroup();
	activateFocusGroup(g.iWord);
}
function onDraggingCloneAround(ev) {
	console.log('YES!')
	if (DragElem === null) return;
	console.log('ev',ev);
	let mx = ev.clientX;
	let my = ev.clientY;
	let dx = mx - DragElem.drag_info.offsetX;
	let dy = my - DragElem.drag_info.offsetY;
	mStyle(DragElem, { left: dx, top: dy });
}
function onDragLetter(ev) {	console.log('YES!',ev.clientX,ev.clientY);}
function onDragStartOnLetter1(ev) {
	if (!canAct()) return;
	ev.preventDefault();
	let id = evToClosestId(ev);
	let source = mBy(id);
	if (isLetterElement(source)) {
		var clone = DragElem = source.cloneNode(true);
		clone.id = DragElem.id + '_' + clone;
		DragSource = source;
		mAppend(document.body, clone);
		mClass(clone, 'letter')
		mClass(clone, 'dragelem');
		mStyle(clone, { left: ev.clientX - ev.offsetX, top: ev.clientY - ev.offsetY });
		clone.drag_info = { offsetX: ev.offsetX, offsetY: ev.offsetY };
		clone.setAttribute('draggable',true);
		clone.ondrag = onDraggingCloneAround;
		document.body.ondragend = onReleaseLetter;// ev=>console.log('mouse up')
	}
}
function onDropLetter(ev) {
	let els = allElementsFromPoint(ev.clientX, ev.clientY);
	let inputs = DropZones; //Array.from(mBy('dInputs').children);
	for (const inp of inputs) {
		if (els.includes(inp)) {
			inp.innerHTML = DragElem.innerHTML;
			if (startsWith(DragElem.id, 'input')) DragSource.innerHTML = '_';
			let w = buildWordFromLetters(inp.parentNode);
			if (!w.includes('_')) GC.evaluate(w, Goal.label.toUpperCase());
		}
	}
	DragElem.remove();
	DragElem = DragSource = null;
	document.body.ondrag = document.body.ondragend = null;
}
function onKeyWordInput(ev) {
	let charEntered = ev.key.toString();
	if (!isAlphaNum(charEntered)) return;
	let ch = charEntered.toUpperCase();
	Selected = { lastLetterEntered: ch };
	let cands = Goal.blankChars;
	if (Goal.iFocus) {
		let word = Goal.words[Goal.iFocus];
		if (word.hasBlanks) cands = word.charInputs.filter(x => x.isBlank);
		else deactivateFocusGroup();
	}
	console.assert(!isEmpty(cands));
	let isLastOfGroup = (Goal.iFocus != null) && cands.length == 1;
	let isVeryLast = Goal.blankChars.length == 1;
	let target = firstCond(cands, x => x.letter == ch);
	let isMatch = target != null;
	if (!isMatch) target = cands[0];
	fillCharInput(target, ch);
	return { target: target, isMatch: isMatch, isLastOfGroup: isLastOfGroup, isVeryLast: isVeryLast, ch: ch };
}
function onMouseDownOnLetter(ev) {
	if (!canAct()) return;
	ev.preventDefault();
	let id = evToClosestId(ev);
	let source = mBy(id);
	if (isLetterElement(source)) {
		var clone = DragElem = source.cloneNode(true);
		clone.id = DragElem.id + '_' + clone;
		DragSource = source;
		mAppend(document.body, clone);
		mClass(clone, 'letter')
		mClass(clone, 'dragelem');
		mStyle(clone, { left: ev.clientX - ev.offsetX, top: ev.clientY - ev.offsetY });
		clone.drag = { offsetX: ev.offsetX, offsetY: ev.offsetY };
		document.body.onmousemove = onMovingCloneAround;
		document.body.onmouseup = onReleaseLetter;// ev=>console.log('mouse up')
	}
}
function onReleaseLetter(ev) {
	let els = allElementsFromPoint(ev.clientX, ev.clientY);
	let inputs = DropZones; //Array.from(mBy('dInputs').children);
	for (const inp of inputs) {
		if (els.includes(inp)) {
			inp.innerHTML = DragElem.innerHTML;
			if (startsWith(DragElem.id, 'input')) DragSource.innerHTML = '_';
			let w = buildWordFromLetters(inp.parentNode);
			if (!w.includes('_')) GC.evaluate(w, Goal.label.toUpperCase());
		}
	}
	DragElem.remove();
	DragElem = DragSource = null;
	document.body.ondrag = document.body.ondragend = null;
}
function readExp() { }
function recShowHints(ilist, rc, delay = 3000, fProgression = d => d * 1.5) {
	if (isEmpty(ilist) || QContextCounter != rc) return;
	let i = ilist.shift();
	TOTrial = setTimeout(() => recShowHintsNext(i, ilist, rc, fProgression(delay), fProgression), delay);
}
function recShowHintsNext(i, ilist, rc, delay, fProgression) {
	showSayHint(i);
	if (QContextCounter == rc) recShowHints(ilist, rc, delay, fProgression);
}
function refillCharInput(inp, ch) { fillCharInput(inp, ch); }
function removePicture(pic, reorder = false) {
	removeInPlace(Pictures, pic);
	if (reorder) {
		iDiv(pic).remove();
		maLayout(Pictures, dTable);
	} else {
		iDiv(pic).style.opacity = 0;
	}
}
function resetRound() {
	clearTimeouts();
	clearFleetingMessage();
	clearTable();
}
function resetScore() {
	Score = { gameChange: true, levelChange: true, nTotal: 0, nCorrect: 0, nCorrect1: 0, nPos: 0, nNeg: 0, labels: true };
}
function resetState() {
	clearTimeouts();
	pauseSound();
	removeKeyHandler('G'); //
	lastPosition = 0;
	DELAY = 1000;
	setBackgroundColor();
}
function say(text, voice = 'random', v = 1, r = .8, p = .9) {
	if (!G.silent) Speech.say(text, r, p, v, voice);
}
function sayRandomVoice(e, g, voice = 'random') {
	if (arguments.length == 1) voice = 'random';
	let [r, p, v] = [.8, .9, 1];
	if (!G.silent) Speech.say(G.language == 'E' || nundef(g) ? e : g, r, p, v, voice);
}
function sayTryAgain() { 
	if (G.silent) showFleetingMessage('Try Again!',0,{},true); 
	else sayRandomVoice('try again!'); 
}
function scrambleInputs(d) {
	let children = Array.from(d.children);
	shuffle(children);
	for (const ch of children) {
		mAppend(d, ch);
	}
}
function setBackgroundColor(elem,color) { if (nundef(elem)) elem = mBy('md').parentNode; mStyle(elem, { bg: getColorDictColor(isdef(color) ? color : G.color) }); }
function setEquationGoal() {
	let blank = blankWordInputs(G.words, G.numMissing, G.posMissing);
	Goal = { seq: G.seq, words: G.words, chars: G.letters, blankWords: blank.words, blankChars: blank.letters, iFocus: blank.iFocus };
	Goal.qCharIndices = Goal.blankChars.map(x => x.index);
	Goal.qWordIndices = Goal.blankWords.map(x => x.iWord);
	let yes = true;
	for (let i = 0; i < Goal.chars.length; i++) if (Goal.chars[i].index != i) yes = false;
	console.assert(yes == true);
}
function setExpGoal() { }
function setGoal(index) {
	if (nundef(index)) {
		let rnd = G.numPics < 2 ? 0 : randomNumber(0, G.numPics - 2);
		if (G.numPics >= 2 && rnd == lastPosition && coin(70)) rnd = G.numPics - 1;
		index = rnd;
	}
	lastPosition = index;
	Goal = Pictures[index];
}
function setLanguageHALLO(l) { Settings.language = G.language = l; Speech.setLanguage(l); console.log('SET LANGUAGE TO', l, G.language, G.lang); }
function setMultiGoal(n, indices) {
	Goal = { pics: [] };
	if (nundef(indices)) {
		Goal.pics = choose(Pictures, n);
	} else {
		for (const i of indices) Goal.pics.push(Pictures[i]);
	}
}
function setNumberSequenceGoal() {
	let blank = blankWordInputs(G.words, G.numMissing, G.posMissing);
	Goal = { seq: G.seq, words: G.words, chars: G.letters, blankWords: blank.words, blankChars: blank.letters, iFocus: blank.iFocus };
	Goal.qCharIndices = Goal.blankChars.map(x => x.index);
	Goal.qWordIndices = Goal.blankWords.map(x => x.iWord);
}
function setPlayer(g, pl) {
	let idx;
	if (isdef(g.iPlayer)) {
		idx = (g.iPlayer + 1) % g.players.length;
	} else if (isdef(pl)) {
		idx = g.players.indexOf(pl);
	} else idx = 0;
	pl = g.players[idx];
	[GC.iPlayer, GC.plTurn] = [g.iPlayer, g.plTurn] = [idx, pl];
}
function shortHintPic() {
	mClass(mBy(Goal.id), 'onPulse1');
	TOMain = setTimeout(() => shortHintPicRemove(), 800);
}
function shortHintPicRemove() {
	mRemoveClass(mBy(Goal.id), 'onPulse1');
}
function show_instruction(written, dParent, spoken, { fz, voice } = {}) {
	clearElement(dParent);
	let d = mDiv(dParent);
	mStyle(d, { margin: 15 })
	mClass(d, 'flexWrap');
	if (nundef(fz)) fz = 36;
	let d1 = mText(written, d, { fz: fz, display: 'inline-block' });
	let sym = symbolDict.speaker;
	let d2 = mText(sym.text, d, {
		fz: fz + 2, weight: 900, display: 'inline-block',
		family: sym.family, 'padding-left': 14
	});
	dFeedback = dInstruction = d;
	dInstruction.addEventListener('click', () => aniInstruction(spoken));
	if (isdef(spoken)) say(spoken, isdef(voice)?voice:G.lang == 'E'?'random':G.lang); //sayRandomVoice(spoken, spoken, voice);
}
function showActiveMessage(msg, handler, styles = {}, fade = false) {
	let defStyles = { fz: 22, rounding: 10, vpadding: 12, hpadding: 0, matop: 50 };
	styles = mergeOverride(defStyles, styles);
	if (nundef(styles.fg)) styles.fg = colorIdealText(G.color);
	clearFleetingMessage();
	let d = fleetingMessage(msg, styles, fade);
	d.onclick = handler;
}
function showCorrectPictureLabels(sayit = true) { return 1000; }
function showCorrectUis() {
	let anim = 'onPulse5'; 
	for(const ui of Selected.correctUis){		mClass(ui,anim);	}
	return Selected.correctionDelay;
}
function showCorrectWord(sayit = true) {
	let anim = G.spokenFeedback ? 'onPulse' : 'onPulse1';
	let div = mBy(Goal.id);
	mClass(div, anim);
	if (!sayit || !G.spokenFeedback) G.spokenFeedback ? 3000 : 300;
	let correctionPhrase = isdef(Goal.correctionPhrase) ? Goal.correctionPhrase : Goal.label;
	say(correctionPhrase, G.language);
	return G.spokenFeedback ? 3000 : 300;
}
function showCorrectWordInTitle(sayit = true) {
	let anim = G.spokenFeedback ? 'onPulse' : 'onPulse1';
	clearElement(dInstruction);
	let d1 = mText(`<b>${Goal.label}</b>`, dInstruction, { fz: 36, display: 'inline-block' });
	mClass(dInstruction, anim);
	showFleetingMessage(Goal.label);
	if (!sayit || !G.spokenFeedback) G.spokenFeedback ? 3000 : 300;
	let correctionPhrase = isdef(Goal.correctionPhrase) ? Goal.correctionPhrase : Goal.label;
	sayRandomVoice(correctionPhrase);
	return G.spokenFeedback ? 3000 : 300;
}
function showCorrectWords(sayit = true) {
	if (nundef(TOList)) TOList = {};
	TOList.correctWords = [];
	let anim = 'onPulse2';
	let to = 0;
	let speaking = sayit && G.spokenFeedback;
	let ms = speaking ? 2000 : 1000;
	for (const goal of Goal.pics) {
		TOList.correctWords.push(setTimeout(() => {
			let div = mBy(goal.id);
			mClass(div, anim);
			if (speaking) sayRandomVoice((G.language == 'E' ? 'the ' : ' ') + goal.correctionPhrase);
		}, to));
		to += ms;
	}
	if (!sayit || !G.spokenFeedback) return to;
	return to + ms;
}
function showEquation(words, dParent, idForContainerDiv, sep = null, styleContainer = {}, styleWord = {}, styleLetter = {}, styleSep = {}, colorWhiteSpaceChars = true, preserveColorsBetweenWhiteSpace = true) {
	if (isEmpty(styleWord)) {
		let sz = 80;
		let fg = helleFarbe(G.color);
		styleWord = {
			margin: 8, padding: 8, rounding: '50%', w: 'auto', h: sz, display: 'flex', fg: fg, bg: 'transparent',
			'align-items': 'center', border: 'transparent', outline: 'none', fz: sz, 'justify-content': 'center',
		};
	}
	let dContainer = mDiv(dParent);
	if (!isEmpty(styleContainer)) mStyle(dContainer, styleContainer); else mClass(dContainer, 'flexWrap');
	dContainer.id = idForContainerDiv;
	let inputGroups = [];
	let charInputs = [];
	let iWord = 0;
	let idx = 0;
	let numWords = words.length;
	for (const w of words) {
		let dGroup = mDiv(dContainer);
		mStyle(dGroup, styleWord);
		dGroup.id = idForContainerDiv + '_' + iWord;
		let g = { dParent: dContainer, word: w, iWord: iWord, div: dGroup, oStyle: styleWord, ofg: dGroup.style.color, obg: dGroup.style.backgroundColor };
		inputGroups.push(g);
		let inputs = [];
		let iLetter = 0;
		let wString = w.toString();
		for (const l of wString) {
			let dLetter = mDiv(dGroup);
			if (!isEmpty(styleLetter)) mStyle(dLetter, styleLetter);
			dLetter.innerHTML = l;
			let inp = { group: g, div: dLetter, letter: l, iLetter: iLetter, index: idx, oStyle: styleLetter, ofg: dLetter.style.color, obg: dLetter.style.backgroundColor };
			charInputs.push(inp);
			inputs.push(inp);
			iLetter += 1; idx += 1;
		}
		g.charInputs = inputs;
		if (iWord < words.length - 1 && isdef(sep)) {
			let dSep = mDiv(dContainer);
			dSep.innerHTML = sep;
			if (isdef(styleSep)) mStyle(dSep, styleSep);
		}
		iWord += 1;
	}
	return [inputGroups, charInputs];// { words: inputGroups, letters: charInputs };
}
function showFleetingMessage(msg, msDelay, styles = {}, fade = false, ms = 3000) {
	let defStyles = { fz: 22, rounding: 10, padding: '2px 12px', matop: 50 };
	styles = mergeOverride(defStyles, styles);
	if (nundef(styles.fg)) styles.fg = colorIdealText(G.color);
	clearFleetingMessage();
	if (msDelay) {
		TOFleetingMessage = setTimeout(() => fleetingMessage(msg, styles, fade, ms), msDelay);
	} else {
		fleetingMessage(msg, styles, fade, ms);
	}
}
function showGameTitle() { dGameTitle.innerHTML = G.friendly; }
function showHiddenThumbsUpDown(sz = 100) {
	let d = mDiv(dTable, { hmin: sz * 1.5 });
	mCenterFlex(d);
	let keys = ['thumbs up', 'thumbs down'];
	let options = getOptionsMinimalistic(d, null, 300, 100, { bg: 'transparent', display: 'inline' }, {}, G);//,{fzPic:50,w:60,h:60});
	let items = Pictures = genItemsFromKeys(keys, options);
	for (const item of items) {
		let d1 = makeItemDiv(item, options);
		mAppend(d, d1);
		mStyle(d1.firstChild, { fz: sz, mabottom: 12 });
		mStyle(d1, { opacity: 0 });
	}
}
function showInstruction(text, cmd, dParent, isSpoken, spoken, fz, voice) {
	clearElement(dParent);
	let d = mDiv(dParent);
	mStyle(d, { margin: 15 })
	mClass(d, 'flexWrap');
	let msg = cmd + " " + `<b>${text.toUpperCase()}</b>`;
	if (nundef(fz)) fz = 36;
	let d1 = mText(msg, d, { fz: fz, display: 'inline-block' });
	if (isSpoken) {
		let sym = symbolDict.speaker;
		let d2 = mText(sym.text, d, {
			fz: fz + 2, weight: 900, display: 'inline-block',
			family: sym.family, 'padding-left': 14
		});
	}
	dFeedback = dInstruction = d;
	spoken = isSpoken ? isdef(spoken) ? spoken : cmd + " " + text : null;
	dInstruction.addEventListener('click', () => aniInstruction(spoken));
	if (!isSpoken) return;
	sayRandomVoice(isdef(spoken) ? spoken : (cmd + " " + text), null, "david");
}
function showLabelPercentHintAfter(percent, msecs) {
	let len = Goal.label.length;
	let sublen = Math.floor(len * percent / 100); let restlen = len - sublen;
	let hintWord = Goal.label.substring(0, sublen);
	for (let i = 0; i < restlen; i++) hintWord += ' _';
	hintWord = hintWord.toUpperCase();
	showFleetingMessage(hintWord, msecs, { fz: 32 });
}
function showLevel() {
	dLevel.innerHTML = 'level: ' + (G.level + 1) + '/' + (G.maxLevel + 1);
}
function showListOfLists(arr) { let s = ''; arr.map(x => { s += '[' + x.toString() + '] ' }); return s; }
function showMouse() {
	var x = dTable.getElementsByTagName("DIV");
	if (nundef(x) || nundef(x[0]) || nundef(x[0].prevCursor)) { console.log('did NOT hide mouse!'); return; }
	for (const el of x) {
		mRemoveClass(el, 'noCursor');
	} //.style.cursor = 'none';
	for (const el of x) { el.style.cursor = el.prevCursor; }
	for (const p of Pictures) {
		mRemoveClass(iDiv(p), 'noCursor');
		mClass(iDiv(p), 'frameOnHover'); iDiv(p).style.cursor = 'pointer';
		for (const ch of iDiv(p).children) ch.style.cursor = 'pointer';
	} //iDiv(p)mClass.style.cursor = 'none';}
}
function showNumberSequence(words, dParent, idForContainerDiv = 'seqContainer', sep = null, styleContainer = {}, styleWord = {}, styleLetter = {}, styleSep = {}, colorWhiteSpaceChars = true, preserveColorsBetweenWhiteSpace = true) {
	if (isEmpty(styleWord)) {
		let sz = 80;
		styleWord = {
			margin: 10, padding: 4, rounding: '50%', w: sz, h: sz, display: 'flex', fg: 'lime', bg: 'yellow', 'align-items': 'center',
			border: 'transparent', outline: 'none', fz: sz - 25, 'justify-content': 'center',
		};
	}
	let dContainer = mDiv(dParent);
	if (!isEmpty(styleContainer)) mStyle(dContainer, styleContainer); else mClass(dContainer, 'flexWrap');
	dContainer.id = idForContainerDiv;
	let inputGroups = [];
	let charInputs = [];
	let iWord = 0;
	let idx = 0;
	let numWords = words.length;
	let wheel = getHueWheel(G.color, 40, numWords <= 4 ? 60 : numWords <= 10 ? 30 : 15, 0);
	wheel = wheel.map(x => colorHSLBuild(x, 100, 50));
	wheel = shuffle(wheel);
	let wheel1 = colorPalShadeX(anyColorToStandardString(wheel[0]), numWords);
	wheel = jsCopy(wheel1);
	if (G.op == 'plus') wheel.reverse();
	for (const w of words) {
		let dGroup = mDiv(dContainer);
		mStyle(dGroup, styleWord);
		let bg = wheel[iWord]; // dGroup.style.backgroundColor=randomColorX(G.color,40,60,0,50,50);//'yellow';//randomColorX(G.color,70,80);
		dGroup.style.backgroundColor = bg;
		dGroup.style.color = colorIdealText(bg);// randomColorX(bg,20,30);
		dGroup.id = idForContainerDiv + '_' + iWord;
		let g = { dParent: dContainer, word: w, iWord: iWord, div: dGroup, oStyle: styleWord, ofg: dGroup.style.color, obg: dGroup.style.backgroundColor };
		inputGroups.push(g);
		let inputs = [];
		let iLetter = 0;
		let wString = w.toString();
		for (const l of wString) {
			let dLetter = mDiv(dGroup);
			if (!isEmpty(styleLetter)) mStyle(dLetter, styleLetter);
			dLetter.innerHTML = l;
			let inp = { group: g, div: dLetter, letter: l, iLetter: iLetter, index: idx, oStyle: styleLetter, ofg: dLetter.style.color, obg: dLetter.style.backgroundColor };
			charInputs.push(inp);
			inputs.push(inp);
			iLetter += 1; idx += 1;
		}
		g.charInputs = inputs;
		if (iWord < words.length - 1 && isdef(sep)) {
			let dSep = mDiv(dContainer);
			dSep.innerHTML = sep;
			if (isdef(styleSep)) mStyle(dSep, styleSep);
		}
		iWord += 1;
	}
	return [inputGroups, charInputs];
	return { words: inputGroups, letters: charInputs };
	return [wi.words, wi.letters];
}
function showPictureHints(items, dParentProp) {
	for (const item of items) {
		let d1 = item[dParentProp];
		mRemoveChildrenFromIndex(d1, 1);
		let dHint = item.dHint = miPic(item, d1);
	}
}
function showPictures(dParent, handler, ifs = {}, options = {}, keys, labels) {
	options = getOptionsMinimalistic(dParent, handler, options.w, options.h, ifs, options, G);
	if (nundef(keys)) keys = choose(G.keys, G.numPics);
	let items = genItemsFromKeys(keys, options);
	if (isdef(labels)) {
		options.showLabels = true;
		for (let i = 0; i < items.length; i++) item[i].label = labels[i % labels.length];
	}
	let dArea = mDiv(dParent);
	let rect = myPresent(dArea, items, options);
	return items;
}
function showSayHint(i) {
	let [spoken, written] = G.hintFunc(i);
	if (spoken) sayRandomVoice(spoken); //setTimeout(() => sayRandomVoice(spoken), 300+ms);
	if (written) showFleetingMessage(written, 0, { fz: 40 });
}
function showScore(showScoreString=true) {
	if (G.controllerType == 'solitaire') {
		if (Score.gameChange) showBadgesX(dLeiste, G.level, onClickBadgeX, G.maxLevel);
		if (showScoreString) scoreString = 'question: ' + (Score.nTotal + 1) + '/' + G.samplesPerGame;
		if (Score.levelChange) {
			if (showScoreString) dScore.innerHTML = scoreString;
			setBadgeLevel(G.level);
		} else {
			setTimeout(() => {
				if (showScoreString) dScore.innerHTML = scoreString;
				setBadgeLevel(G.level);
			}, 300);
		}
	} else {
		setTimeout(() => { if (showScoreString) dScore.innerHTML = 'score ' + GC.human.score + ':' + GC.ai.score; }, 300);
	}
}
function showStats(showScoreString=true) {
	if (nundef(Score)) initScore();
	showGameTitle();
	showLevel();
	showScore(showScoreString);
	Score.levelChange = false;
	Score.gameChange = false;
}
function showTextHints(items, dParentProp, textProp, removeFirst = true) {
	for (const item of items) {
		let d1 = item[dParentProp];
		let hint = item[textProp];
		let dHint = item.dHint = mText(hint, d1);
	}
}
function slowlyTurnFaceDown(pic, secs = 5, removeBg = false) {
	let ui = iDiv(pic);
	for (const p1 of ui.children) {
		p1.style.transition = `opacity ${secs}s ease-in-out`;
		p1.style.opacity = 0;
	}
	if (removeBg) {
		ui.style.transition = `background-color ${secs}s ease-in-out`;
		ui.style.backgroundColor = 'dimgray';
	}
	pic.isFaceUp = false;
}
function successPictureGoal(withComment = true) {
	if (withComment && G.spokenFeedback) {
		let lang = G.language;
		const comments = {
			E: ['YEAH!', 'Excellent!!!', 'CORRECT!', 'Great!!!'],
			D: ['gut', 'Sehr Gut!!!', 'richtig!!', 'Bravo!!!'],
			S: ['bien', 'muy bien!!!', 'eccelente!!', 'bravo!!!'],
			F: ['bien', 'tres bien!!!', 'fantastique!!', 'bravo!!!', 'excellent!!!'],
			C: ['优秀', '好的!!!', '正确的!!', 'Bravo!!!'],
		}[lang];
		say(chooseRandom(comments), lang);
	}
	if (isdef(Selected) && isdef(Selected.feedbackUI)) {
		let uilist;
		if (isdef(Selected.positiveFeedbackUI)) uilist = [Selected.positiveFeedbackUI];
		else uilist = isList(Selected.feedbackUI) ? Selected.feedbackUI : [Selected.feedbackUI];
		let sz = getRect(uilist[0]).h;
		for (const ui of uilist) {
			let d = markerSuccess();
			mpOver(d, ui, sz * (4 / 5), 'limegreen', 'segoeBlack');
		}
	}
}
function successThumbsUp(withComment = true) {
	if (withComment && G.spokenFeedback) {
		const comments = (G.language == 'E' ? ['YEAH!', 'Excellent!!!', 'CORRECT!', 'Great!!!'] : ['gut', 'Sehr Gut!!!', 'richtig!!', 'Bravo!!!']);
		sayRandomVoice(chooseRandom(comments));
	}
	let p1 = firstCond(Pictures, x => x.key == 'thumbs up');
	iDiv(p1).style.opacity = 1;
	let p2 = firstCond(Pictures, x => x.key == 'thumbs down');
	iDiv(p2).style.display = 'none';
}
function successThumbsUpPlus(withComment = true) {
	if (withComment && G.spokenFeedback) {
		const comments = (G.language == 'E' ? ['YEAH!', 'Excellent!!!', 'CORRECT!', 'Great!!!'] : ['gut', 'Sehr Gut!!!', 'richtig!!', 'Bravo!!!']);
		sayRandomVoice(chooseRandom(comments));
	}
	let p1 = firstCond(Pictures, x => x.key == 'thumbs up');
	iDiv(p1).style.opacity = 1;
	let p2 = firstCond(Pictures, x => x.key == 'thumbs down');
	iDiv(p2).style.display = 'none';
	if (isdef(Selected) && isdef(Selected.feedbackUI)) {
		let uilist;
		if (isdef(Selected.positiveFeedbackUI)) uilist = [Selected.positiveFeedbackUI];
		else uilist = isList(Selected.feedbackUI) ? Selected.feedbackUI : [Selected.feedbackUI];
		let sz = getRect(uilist[0]).h;
		for (const ui of uilist) {
			let d = markerSuccess();
			mpOver(d, ui, sz * (4 / 5), 'limegreen', 'segoeBlack');
		}
	}
}
function tileCondBelongsTo(t, pl, prop) { return t[prop] == pl.id; }
function toggleFace(pic) { if (pic.isFaceUp) turnFaceDown(pic); else turnFaceUp(pic); }
function toggleFaceSimple(pic) { if (pic.isFaceUp) turnFaceDownSimple(pic); else turnFaceUpSimple(pic); }
function toggleSelectionOfPicture(pic, selectedPics) {
	let ui = iDiv(pic);
	pic.isSelected = !pic.isSelected;
	if (pic.isSelected) mClass(ui, 'framedPicture'); else mRemoveClass(ui, 'framedPicture');
	if (isdef(selectedPics)) {
		if (pic.isSelected) {
			console.assert(!selectedPics.includes(pic), 'UNSELECTED PIC IN PICLIST!!!!!!!!!!!!')
			selectedPics.push(pic);
		} else {
			console.assert(selectedPics.includes(pic), 'PIC NOT IN PICLIST BUT HAS BEEN SELECTED!!!!!!!!!!!!')
			removeInPlace(selectedPics, pic);
		}
	}
}
function translateToGerman(w) {
	if (isNumber(w)) return w;
	else if (isdef(DD[w])) return DD[w];
	else return w;
}
function turnCardsAfter(secs, removeBg = false) {
	let qc = QContextCounter;
	for (const p of Pictures) { slowlyTurnFaceDown(p, secs - 1, removeBg); }
	TOMain = setTimeout(() => {
		let wr = 'click '+`<b>${Goal.label}</b>`;
		let sp = `click ${Goal.label}`;
		show_instruction(wr, dTitle, sp);
		showMouse();
		GC.activateUi.bind(GC)(); //activateUi();
	}, secs * 1000);
}
function turnFaceDown(pic) {
	let ui = iDiv(pic);
	for (const p1 of ui.children) p1.style.opacity = 0; //hide(p1);
	ui.style.backgroundColor = 'dimgray';
	pic.isFaceUp = false;
}
function turnFaceDownSimple(pic) {
	let ui = iDiv(pic);
	ui.style.transition = null;
	mRemoveClass(ui, 'frameOnHover');
	for (const ch of ui.children) { ch.style.transition = null; ch.style.opacity = 0; }
	pic.isFaceUp = false;
}
function turnFaceUp(pic, secTransition = 1) {
	let div = iDiv(pic);
	for (const ch of div.children) {
		ch.style.transition = `opacity ${secTransition}s ease-in-out`;
		ch.style.opacity = 1; //show(ch,true);
	}
	div.style.transition = null;
	div.style.backgroundColor = pic.bg;
	pic.isFaceUp = true;
}
function turnFaceUpSimple(pic) {
	let ui = iDiv(pic);
	mRemoveClass(ui, 'frameOnHover');
	ui.style.transition = null;
	for (const ch of ui.children) { ch.style.transition = null; ch.style.opacity = 1; }
	pic.isFaceUp = true;
}
function unfillChar(inp) { unfillCharInput(inp); }
function unfillCharInput(inp) {
	let d = iDiv(inp);
	d.innerHTML = '_';
	mClass(d, 'blink');
	inp.isBlank = true;
}
function unfillWord(winp) { winp.charInputs.map(x => unfillCharInput(x)); }
function visNumber(n, dParent, color, or = 'h', asNumber = [0]) {
	if (!isNumber(n) || asNumber.includes(n)) return zText('' + n, dParent, { fg: 'white', fz: 64 });
	return _visualizeNumber(n, dParent, color, or);
}
function visOperation(op, a, b, dParent, symResult) {
	switch (op) {
		case 'plus':
		case 'minus': return _visualizeAritOp(op, a, b, dParent, symResult); break;
		case 'mult': return _visualizeMult(a, b, dParent, symResult); break;
	}
}
function visOperator(s, dParent, styles = { fg: 'white', fz: 64 }) {
	zText(s, dParent, styles);
}
function writeExp() { }
function writeSound() { return; console.log('calling playSound'); }
function zText(text, dParent, textStyles, hText, vCenter = false) {
	let tSize = getSizeWithStyles(text, textStyles);
	let extra = 0, lines = 1;
	if (isdef(hText)) {
		extra = hText - tSize.h;
		if (textStyles.fz) lines = Math.floor(tSize.h / textStyles.fz);
	}
	let dText = isdef(text) ? mText(text, dParent, textStyles) : mDiv(dParent);
	if (extra > 0 && vCenter) {
		dText.style.paddingTop = (extra / 2) + 'px';
		dText.style.paddingBottom = (extra / 2) + 'px';
	}
	return { text: text, div: dText, extra: extra, lines: lines, h: tSize.h, w: tSize.w, fz: textStyles.fz };
}
//#endregion game

//#region house
function addAdjacencyFromTo(r1, r2, dir, rect) {
	let house = Items[r1.house];
	if (!r2) rect = rrto(rect, house.rect);
	lookupAddToList(r1, ['walls', dir], { rect: rect, dir: dir, room: r2 ? r2.id : r2, door: null });
	let dir2 = r2 ? getOppDir(dir) : dir;
	lookupAddToList(r2 ? r2 : Items[r1.house], ['walls', dir2], { rect: rect, dir: dir2, room: r1.id, door: null });
}
function areNeighbors(r1, r2) {
	let res = firstCond(r1.doors, x => x.includes(r1.id) && x.includes(r2.id));
	return res != null;
}
function convertToGraphElements(g1,house) {
	let vertices = house.rooms.map(x => Items[x]);
	let doors = [];
	for (const v of vertices) {
		v.center = getCenter(v.rect);
		v.center.x+=v.rect.l-house.rect.l;
		v.center.y+=v.rect.t-house.rect.t;
		g1.addNode(v,v.center);
		doors = union(doors, v.doors);
	}
	let centers = g1.getNodes().map(x=>x.data('center'));
	g1.storePositions('prest',centers);
	let edges = doors.map(x => Items[x]).filter(x => x.rooms.length == 2);
	for (const e of edges) {
		if (e.rooms.length < 2) continue;
		e.source = e.rooms[0];
		e.target = e.rooms[1];
		g1.addEdge(e.source,e.target,e);
	}
}
function convertToGraphElements_dep(g1,house) {
	let elements = { nodes: [], edges: [] };
	let vertices = house.rooms.map(x => Items[x]);
	let doors = [];
	for (const v of vertices) {
		v.center = getCenter(v.rect);
		elements.nodes.push({ data: v, position: v.center });
		doors = union(doors, v.doors);
	}
	let edges = doors.map(x => Items[x]).filter(x => x.rooms.length == 2);
	for (const e of edges) {
		if (e.rooms.length < 2) continue;
		e.source = e.rooms[0];
		e.target = e.rooms[1];
		elements.edges.push({ data: e });
	}
	return elements;
}
function findFreeWall(r1, walls) {
	r1 = isString(r1) ? Items[r1] : r1;
	if (nundef(walls)) {
		walls = [];
		for (const dir in r1.walls) {
			walls = walls.concat(r1.walls[dir]);
		}
	}
	walls = walls.filter(x => !x.door);
	return isEmpty(walls) ? null : chooseRandom(walls);
}
function findWall(r1, r2) {
	for (const dir in r1.walls) {
		let walls = r1.walls[dir];
		for (const wall of walls) {
			if (wall.r2 == r2.id) return wall;
		}
	}
	return null;
}
function getCornerRooms(house) {
	let rooms = house.rooms.map(x => Items[x]);
	let result = [];
	for (const r of rooms) {
		if (isCornerRoom(house, r)) {
			result.push(r.id);
		}
	}
	return result;
}
function getCornerRoomsDict(house) {
	let rooms = house.rooms.map(x => Items[x]);
	let result = {};
	for (const r of rooms) {
		let isN = r.isN = isNorthRoom(house, r);
		let isS = r.isS = isSouthRoom(house, r);
		let isW = r.isW = isWestRoom(house, r);
		let isE = r.isE = isEastRoom(house, r);
		if (isN && isW) result.NW = r.id;
		else if (isN && isE) result.NE = r.id;
		else if (isS && isE) result.SE = r.id;
		else if (isS && isW) result.SW = r.id;
	}
	return result;
}
function getDiagonallyOpposedCornerRooms(house) {
	if (coin()) return [getRoomNW(house), getRoomSE(house)]; else return [getRoomSW(house), getRoomNE(house)];
}
function getDiagRoomPairs(house) {
	return [[getRoomNW(house), getRoomSE(house)], [getRoomSW(house), getRoomNE(house)]];
}
function getDoorId(r1, r2) { return r1 + '_' + r2 + '_' + r1; }
function getLayoutSample(n) {
	if (G.level > 4){
	}
	let samples = {
		1: '"a"',
		2: '"a b"', //'"a" "b"',
		3: ['"a b c"', '"a a" "b c"', '"a b" "c c"'], // "cd"',
		4: ['"z z d" "a a c" "a a c"', '"a b" "c d"'],
		5: ['"a b e" "c c d"', '"a a b" "c d e"', '"a b e" "c d e"'],
		6: ['"a b b c" "d d e f"', '"a b b c" "a d e f"', '"a b b b" "c d e f"'],
		7: ['"a b c d" "a b e f"', '"a b b c" "a d e c" "a d f g"'],
		8: ['"a a b c" "d d e c" "f g e h"', '"a b b c" "a d e c" "f g e h"'],
		9: ['"a a b b" "c d d e" "f g h i"', '"a d e b" "c d e b" "f g h i"'],
		10: '"j a b b" "c d d e" "f g h i"',
		11: '"j a a b b" "j c d d e" "f g h i k"',
		12: '"j a a b b l" "j c d d e l" "f g h i k k"',
		13: '"j a a b b" "j c d d e" "f g h i k" "l l m m k"',
		14: '"n j a a b b" "n j c d d e" "f g h i i k" "l l m m m k"',
		15: '"n j o o b b" "n j a a b b" "n j c d d e" "f g h i i k" "l l m m m k"',
		16: [
			'"a b c d e" "f f g h e" "o p i h j" "k l i m n"',
			'"a b b d e" "n f p g e" "i j j o k" "l l c m h"',
			'"a a p g c h" "a a b b c h" "n d d e e f" "o i j k l m"',
			'"a b c o d e" "f b c p g e" "f i i j g k" "n l m j h k"'
		],
		17: [
			'"a b c d e" "f g h i j" "k l m i o" "p n q q o"',
			'"a a c d e" "f g h i j" "k l m i o" "p n q b o"',
			'"a b c d e" "f b h i j" "k l m i o" "p n m q g"'
		],
		18: [
			'"a b c d e" "a g h i j" "k l m n o" "p q r f o"',
			'"a b b c d e" "a g h h i j" "k l l m n o" "p q q r f o"',
			'"a b b c d e" "a g g h i j" "k g g m n o" "p q l r f o"',
			'"a b b c d e" "a g h h i j" "k k l m n o" "p q l r f o"',
		],
		19: [
			'"a b c d e" "f b h i j" "k l m s o" "p n q g r"',
			'"a a b c d e" "f h b i i j" "k l m m s o" "p n q g g r"',
			'"a a b c d e" "f h b i l j" "k h m m s o" "p n q g g r"',
			'"a q b c d e" "f h b i l j" "k h m m s o" "p n m m g r"',
			'"a q b c d e" "f h b i l j" "k h m m s o" "p n m m g r"',
		],
		20: [
			'"a b c d e" "f g h i j" "k l m n o" "p q r s t"',
			'"a b b c d e" "f g h h i j" "k k l m n o" "p q r s s t"',
			'"a b b c d e" "f g h h i j" "k k l m i o" "p q r n s t"',
			'"a f b c d e" "a g h h i j" "k k l m i o" "p q r n s t"',
		],
		21: [
			'"a b b c d e" "f g h h i j" "k u l m n o" "p q r s s t"',
			'"a b b c d e" "f u g h i j" "k u l m n o" "p q r s n t"',
			'"a b b c d e" "f g h u i j" "k k l m i o" "p q r n s t"',
			'"a f b c d e" "a g h h i j" "k u l m i o" "p q r n s t"',
		],
		22: [
			'"a v b c d e" "f g h h i j" "k u l m n o" "p q r s s t"',
			'"a b b c d e e" "f u g h i j v" "k u l m n o v" "p q r s n t t"',
			'"a b b c d e e" "f u g h i j j" "k u l m n o v" "p q r s n t t"',
			'"a b b c d d e" "m b b c i j e" "f u g h i j v" "k u l l n o v" "p q r s n t t"',
		],
		23: [
			'"a v b c d e" "f g h h i j" "k u l m n o" "p q r w s t"',
			'"a w b c d e e" "f u g h i j v" "k u l m n o o" "p q r s n t t"',
			'"a b b c d e e" "f w g h i j j" "k u l m n o v" "p q r s n t t"',
		],
		24: [
			'"a v b c d e" "f g h x i j" "k u l m n o" "p q r w s t"',
			'"a v v b c d e" "f g h x x i j" "k u l l n o m" "p q r w s t m"',
		],
		25: ['"a b c d e f g" "a h i k l m g" "o p n r s m u" "v w x y q t j"'],
		26: ['"a a c d e f g" "h i b k l j n" "o p q r s m u" "v w x y z t u"'],
		27: ['"a b c d e f g" "h i j k l m n" "o p q r s t u" "v w x y z A u"'],
		28: ['"a b c d e f g" "h i j k l m n" "o p q r s t u" "v w x y z A B"'],
		29: ['"a b c d e f g h" "i j k d m n o p" "q r r t u v w x" "y z A B C s l l"'],
		30: ['"a b c d e f g h" "i j k d m n o p" "q r s t u v w x" "y z A B C D l l"'],
		31: ['"a b c d e f g h" "i j k l m n o p" "q r s t u v w x" "y z A B C D E E"'],
		32: ['"a b c d e f g h" "i j k l m n o p" "q r s t u v w x" "y z A B C D E F"'],
	};
	let s;
	if (nundef(n)) {
		let l = chooseRandom(Object.keys(samples));
		s = samples[l];
	} else {
		s = samples[n];
	}
	s = isList(s) ? chooseRandom(s) : s;
	s = getLetterSwapEncoding(s);
	return s;
}
function getOppDir(dir) { return { e: 'w', w: 'e', n: 's', s: 'n' }[dir]; }
function getRoomNE(house) { return firstCond(house.rooms, x => isNorthRoom(house, Items[x]) && isEastRoom(house, Items[x])); }
function getRoomNW(house) { return firstCond(house.rooms, x => isNorthRoom(house, Items[x]) && isWestRoom(house, Items[x])); }
function getRoomSE(house) {
	let rooms = house.rooms.map(x => Items[x]);
	for (const r of rooms) {
		let isSouth = isSouthRoom(house, r);
		let isEast = isEastRoom(house, r);
	}
	return firstCond(house.rooms, x => isSouthRoom(house, Items[x]) && isEastRoom(house, Items[x]));
}
function getRoomSW(house) { return firstCond(house.rooms, x => isSouthRoom(house, Items[x]) && isWestRoom(house, Items[x])); }
function hideOuterDoors(house) {
	for (const did of jsCopy(house.doors)) {
		let door = Items[did];
		hide(iDiv(door));//.remove();
	}
}
function iDoor(r1, dir, r2, styles = {}) {
	r1 = isString(r1) ? Items[r1] : r1;
	let house = Items[r1.house];
	r2 = isdef(r2) ? isString(r2) ? Items[r2] : r2 : null;
	let wall = r2 ? findWall(r1, r2) : isdef(dir) ? findFreeWall(r1, r1.walls[dir]) : findFreeWall(r1);
	if (wall.door) { errlog('there is already a door between', r1.id, 'and', r2); return; }
	let szDoor = valf(styles.szDoor, house.szDoor);
	let bg = valf(styles.bg, house.bg);
	let dParent = iDiv(house);
	let wr = wall.rect;
	if (nundef(r2) && wall.room) { r2 = Items[wall.room]; } //console.log('r2',r2); }
	let dr = jsCopy(wr);
	let or = wall.dir == 'e' || wall.dir == 'w' ? 'v' : 'h';
	if (or == 'v') {
		let len = wr.h;
		let offy = (len - szDoor) / 2;
		dr.y = dr.t = dr.t + offy;
		dr.h = szDoor;
	} else {
		let len = wr.w;
		let offx = (len - szDoor) / 2;
		dr.x = dr.l = dr.l + offx;
		dr.w = szDoor;
	}
	let id = getDoorId(r1.id, r2 ? r2.id : house.id);
	let door = { rooms: [r1.id], rect: dr, id: id, or: or }; //, source: r1.id, target: r2 ? r2.id : house.id };
	if (r2) { r2.doors.push(id); door.rooms.push(r2.id); } else { house.doors.push(id); }
	r1.doors.push(id);
	let stylesPlus = { position: 'absolute', left: dr.x, top: dr.y, w: dr.w, h: dr.h, bg: bg };
	copyKeys(stylesPlus, styles);
	d = mDiv(dParent, styles);
	iAdd(door, { div: d });
	return door;
}
function iHouse(dParent, ns = 1, styles = { w: 500, h: 400 }) {
	let d = mDiv(dParent, { display: 'inline-grid', position: 'relative', box: true });
	ns = isNumber(ns) ? d.style.gridTemplateAreas = getLayoutSample(ns) : ns; //'"z z d" "a a c" "a a c"';// getLayoutSample(3);
	let s = d.style.gridTemplateAreas = ns;
	let letterList = filterDistinctLetters(s);
	let wallWidth = valf(styles.gap, 4);
	let lines = s.split('"').filter(x => !isWhiteSpaceString(x));
	let cols = lines[0].split(' ').length;
	let rows = lines.length;
	let wHouse = Math.round(styles.w / cols) * cols + wallWidth * cols + 1;
	let hHouse = Math.round(styles.h / rows) * rows + wallWidth * rows + 1;
	d.style.gridTemplateRows = `repeat(${rows}, 1fr)`;// / repeat(${cols}, 1fr)`;
	d.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;// / repeat(${cols}, 1fr)`;
	let szDoor = valf(styles.szDoor, 40);
	let [wallColor, floorColor] = [valf(styles.fg, 'white'), valf(styles.bg, BLUE)];
	mStyle(d, { bg: wallColor, w: wHouse, h: hHouse, gap: wallWidth, padding: wallWidth });
	let rooms = [];
	for (const ch of letterList) { //['a', 'c', 'd', 'f', 'z']) {
		let r = iRoom(d, ch, { bg: floorColor });
		rooms.push(r);
	}
	let house = { rect: getRect(d), fg: wallColor, bg: floorColor, doors: [], rooms: rooms.map(x => x.id), roomLetters: letterList, szDoor: szDoor, wallWidth: wallWidth };
	house.roomsByLetter = {};
	rooms.map(x => house.roomsByLetter[x.ch] = x.id);
	iAdd(house, { div: d });
	rooms.map(x => x.house = house.id);
	roomAdjacency(house);
	return house;
}
function iLabyrint(dParent, cols,rows, styles = { w: 800, h: 400 }) {
	let d = mDiv(dParent, { display: 'inline-grid', position: 'relative', box: true });
	ns = isNumber(ns) ? d.style.gridTemplateAreas = getLayoutSample(ns) : ns; //'"z z d" "a a c" "a a c"';// getLayoutSample(3);
	let s = d.style.gridTemplateAreas = ns;
	let letterList = filterDistinctLetters(s);
	let wallWidth = valf(styles.gap, 4);
	let lines = s.split('"').filter(x => !isWhiteSpaceString(x));
	let wHouse = Math.round(styles.w / cols) * cols + wallWidth * cols + 1;
	let hHouse = Math.round(styles.h / rows) * rows + wallWidth * rows + 1;
	d.style.gridTemplateRows = `repeat(${rows}, 1fr)`;// / repeat(${cols}, 1fr)`;
	d.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;// / repeat(${cols}, 1fr)`;
	let szDoor = valf(styles.szDoor, 40);
	let [wallColor, floorColor] = [valf(styles.fg, 'white'), valf(styles.bg, BLUE)];
	mStyle(d, { bg: wallColor, w: wHouse, h: hHouse, gap: wallWidth, padding: wallWidth });
	let rooms = [];
	for (const ch of letterList) { //['a', 'c', 'd', 'f', 'z']) {
		let r = iRoom(d, ch, { bg: floorColor });
		rooms.push(r);
	}
	let house = { rect: getRect(d), fg: wallColor, bg: floorColor, doors: [], rooms: rooms.map(x => x.id), roomLetters: letterList, szDoor: szDoor, wallWidth: wallWidth };
	house.roomsByLetter = {};
	rooms.map(x => house.roomsByLetter[x.ch] = x.id);
	iAdd(house, { div: d });
	rooms.map(x => x.house = house.id);
	roomAdjacency(house);
	return house;
}
function iRoom(dParent, ch, styles) {
	let def = { 'grid-area': ch, position: 'relative' };
	copyKeys(def, styles);
	let dCell = mDiv(dParent, styles);
	let rect = getRect(dCell);
	let size = Math.round(rect.w * rect.h / 1000);
	let room = { id: ch, ch: ch, bg: dCell.style.backgroundColor, rect: rect, size: size };
	delete Items[ch];
	iAdd(room, { div: dCell });
	room.doors = [];
	room.furniture = [];
	room.hasDoor = () => !isEmpty(room.doors)
	room.hasPassThrough = () => room.doors.length >= 2;
	return room;
}
function isCornerRoom(house, room) {
	let rr = room.rect;
	let rh = house.rect;
	let w = house.wallWidth;
	let isHorSide = isCloseTo(rr.x, rh.x, w) || isCloseTo(rr.r, rh.r, w);
	let isVertSide = isCloseTo(rr.y, rh.y, w) || isCloseTo(rr.b, rh.b, w);
	return isHorSide && isVertSide;
}
function isEastRoom(house, room) { return isCloseTo(room.rect.r, house.rect.r, house.wallWidth); }
function isNorthRoom(house, room) { return isCloseTo(room.rect.t, house.rect.t, house.wallWidth); }
function isSouthRoom(house, room) { return isCloseTo(room.rect.b, house.rect.b, house.wallWidth); }
function isWestRoom(house, room) { return isCloseTo(room.rect.l, house.rect.l, house.wallWidth); }
function makeAreas(dParent, layout) {
	let dGrid = mDiv(dParent, { gap: 10, bg: 'white', w: '90%', padding: 10, display: 'inline-grid', rounding: 10 }, 'dGrid');
	if (nundef(layout)) layout = ['T', 'H A'];
	let x = createGridLayout(dGrid, layout); //teilt dGrid in areas ein
	let areaStyles = { bg: 'green', rounding: 6 };//,box:true, padding:10};
	let contentStyles = { lowerRounding: 6 };
	let messageStyles = { fg: 'yellow' };
	let titleStyles = { bg: 'dimgray', family: 'AlgerianRegular', upperRounding: 6 };
	let areas = {
		T: { title: 'table', id: 'dTrick', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles, titleOnTop: true },
		H: { title: 'YOU', id: 'dHuman', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles, titleOnTop: false },
		A: { title: 'opponent', id: 'dAI', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles, titleOnTop: false },
	};
	let items = [];
	for (const k in areas) {
		let item = areas[k];
		item.areaStyles['grid-area'] = k;
		let dCell = mTitledMessageDiv(item.title, dGrid, item.id, item.areaStyles, item.contentStyles, item.titleStyles, item.messageStyles, item.titleOnTop)
		iRegister(item, item.id);
		if (item.titleOnTop) iAdd(item, { div: dCell, dTitle: dCell.children[0], dMessage: dCell.children[1], dContent: dCell.children[2] });
		else iAdd(item, { div: dCell, dTitle: dCell.children[2], dMessage: dCell.children[0], dContent: dCell.children[1] });
		mCenterCenterFlex(diContent(item));
		mStyle(diContent(item), { gap: 10 });//,padding:10, box:true});
		items.push(item);
	}
	return items;
}
function makeNewLayout(g1) {
	let nodes = g1.getNodes();
	let x = 10; let y = 10;
	for (n of nodes) {
		n.position({ x: x, y: y });
		x += 50; y += 50; if (y > 250) { y = 10; } if (x > 550) { x = 10; }
	}
}
function paint(dParent, r, color = 'random') {
	let d = mDiv(dParent, { position: 'absolute', left: r.x, top: r.y, w: r.w, h: r.h, bg: color });
	return d;
}
function removeOuterDoors(house) {
	console.log(house.doors);
	for (const did of jsCopy(house.doors)) {
		console.log(did)
		let door = Items[did];
		iDiv(door).remove();
		console.log('door', door);
		for (const rid of door.rooms) { removeInPlace(Items[rid].doors, did); }
		removeInPlace(house.doors, did);
	}
	console.log(house.doors);
}
function roomAdjacency(house) {
	let rooms = house.rooms.map(x => Items[x]);
	for (let i = 0; i < rooms.length; i++) {
		for (let j = i + 1; j < rooms.length; j++) {
			let [r1, r2] = [rooms[i], rooms[j]];
			let [e1, e2] = [r1.rect, r2.rect];
			let rhoeher = e1.t < e2.t ? r1 : r2;
			let rleft = e1.x < e2.x ? r1 : r2;
			let rniedriger = (rhoeher == r1 ? r2 : r1);
			let rright = (rleft == r1 ? r2 : r1);
			let diff = 2 * house.wallWidth; // =min length between rooms to warrant a wall
			let y1 = Math.max(e1.t, e2.t);
			let y2 = Math.min(e1.b, e2.b);
			let dCommony = y2 - y1;
			if (dCommony > diff && isCloseTo(rright.rect.l, rleft.rect.r)) {
				let dr = {
					x: rleft.rect.r - house.rect.l,
					y: rniedriger.rect.t - house.rect.t, //fuer door: + (dCommony - szDoor) / 2,
					w: rright.rect.l - rleft.rect.r, //house.wallWidth,
					h: dCommony, //fuer door: szDoor
				};
				extendRect(dr);
				addAdjacencyFromTo(rleft, rright, 'e', dr);
			}
			let x1 = Math.max(e1.l, e2.l);
			let x2 = Math.min(e1.r, e2.r);
			let dCommonx = x2 - x1;
			if (dCommonx > diff && isCloseTo(rniedriger.rect.t, rhoeher.rect.b)) {
				let dr = {
					x: rright.rect.l - house.rect.l, //fuer door: + (dCommonx - szDoor) / 2,
					y: rhoeher.rect.b - house.rect.t,
					w: dCommonx, //fuer door: szDoor, 
					h: house.wallWidth
				};
				extendRect(dr);
				addAdjacencyFromTo(rhoeher, rniedriger, 's', dr);
			}
		}
	}
	for (let i = 0; i < rooms.length; i++) {
		let r = rooms[i];
		if (isCloseTo(r.rect.l, house.rect.l)) {
			let wallRect = { x: house.rect.l, y: r.rect.t, w: house.wallWidth, h: r.rect.h };
			extendRect(wallRect);
			addAdjacencyFromTo(r, null, 'w', wallRect);
		}
		if (isCloseTo(r.rect.r, house.rect.r)) {
			let wallRect = { x: r.rect.r, y: r.rect.t, w: house.wallWidth, h: r.rect.h };
			extendRect(wallRect);
			addAdjacencyFromTo(r, null, 'e', wallRect);
		}
		if (isCloseTo(r.rect.t, house.rect.t)) {
			let wallRect = { x: r.rect.l, y: house.rect.t, w: r.rect.w, h: house.wallWidth };
			extendRect(wallRect);
			addAdjacencyFromTo(r, null, 'n', wallRect);
		}
		if (isCloseTo(r.rect.b, house.rect.b)) {
			let wallRect = { x: r.rect.l, y: r.rect.b, w: r.rect.w, h: house.wallWidth };
			extendRect(wallRect);
			addAdjacencyFromTo(r, null, 's', wallRect);
		}
	}
}
function rrto(r1, r2) {
	let r = jsCopy(r1);
	r.x -= r2.x; r.l -= r2.x; r.r -= r2.x;
	r.y -= r2.y; r.t -= r2.y; r.b -= r2.y;
	return r;
}
function setGranularityFactor(s, f = 2) {
	let lines = s.split('"');
	let lines1 = lines.filter(x => !isEmptyOrWhiteSpace(x));
	let lines2 = [];
	for (const l of lines1) {
		let lNew = '';
		for (let i = 0; i < l.length; i++) {
			if (l[i] == ' ') continue;// lNew += ' ';
			for (let x = 0; x < f; x++) lNew += l[i] + ' ';
		}
		lines2.push(lNew.trim());
	}
	let lines3 = [];
	for (const l of lines2) { for (let i = 0; i < f; i++) { lines3.push(l); } }
	return lines3;
}
function setPositionData(g1) {
	let ids = g1.getNodeIds();
	for (const id of ids) {
		let pos = g1.getProp(id, 'center');
		g1.setPosition(id, pos.x, pos.y);
	}
	g1.reset();
}
function showRect(s, o) {
	let r = o.rect;
	console.log('\n', s, 'w', Math.round(r.w), '=', Math.round(r.l), Math.round(r.r), 'h', Math.round(r.h), '=', Math.round(r.t), Math.round(r.b));
}
function showRectReal(s, o) {
	let r = o.rect;
	console.log('\n', s, 'w', r.w, '=', r.l, r.r, 'h', r.h, '=', r.t, r.b);
}
function storePositionData(g1) {
	let ids = g1.getNodeIds();
	let x = 10; let y = 10;
	for (const id of ids) {
		g1.setProp(id, 'center', { x: x, y: y });
		x += 50; y += 50; if (y > 250) { y = 10; } if (x > 550) { x = 10; }
	}
}
function storeRoomPositions(g1, house) {
	let ids = g1.getNodeIds();
	let di = g1.posDict = {};
	for (const id of ids) {
		let r = Items[id];
		let center = getCenter(iDiv(r));
		center.x += r.rect.x;
		center.y += r.rect.y;
		g1.setProp(id, 'center', center);
		di[id] = center;
	}
}
//#endregion house

//#region item
var IconSet, lastIndex;
class ItemViewerClass {
	constructor(dParent, dButtons, keys) {
		this.options = {
			n: 100, dParent: dParent,
			wper: 100, hper: 100, //dParent: dTable, is default!
			szPic: { w: 80, h: 80 }, padding: 0, fzPic: 40,
			showLabels: true, showPic: true, fixTextFont: true,
			isUniform: true, fillArea: true, isRegular: false, hugeFont: true,
			handler: _standardHandler(this.handSelectSpecialKeys.bind(this)),
		};
		_extendOptions(this.options);
		this.options.wLongest = 'alabama';
		let items = this.allItems = genItemsFromKeys(isdef(keys) ? keys : SymKeys, this.options);
		console.log(this.allItems.length);
		this.iStart = 0;
		if (isdef(dButtons)) {
			dButtons = mDiv(dButtons, { display: 'flex', 'flex-direction': 'column', matop: -12 });
			mButton('download', this.saveSpecialKeys.bind(this), dButtons, { outline: 'none' });
			if (this.allItems.length > 100) mButton('next', this.itemViewerNext.bind(this), dButtons, { outline: 'none', mabottom: 6, matop: 10 });
		}
		this.itemViewerNext(); //revealMain();
	}
	itemViewerNext() {
		let i = this.iStart;
		let options = this.options;
		let items = arrFromTo(this.allItems, i, i + options.n);
		options.n = options.N = items.length;
		this.iStart += options.n;
		clearElement(options.dArea);
		options.fzText = 20;
		items.map(x => x.label = x.key);
		items.map(x => makeItemDiv(x, options));
		items.map(x => mAppend(options.dArea, iDiv(x)));
	}
	handSelectSpecialKeys(item) {
		if (nundef(this.specialKeys)) this.specialKeys = [];
		toggleItemSelection(item, this.specialKeys);
		return this.specialKeys.map(x => x.key);
	}
	saveSpecialKeys() {
		let items = this.specialKeys;
		let dict = {};
		for (const item of items) {
			dict[item.key] = item.info;
		}
		downloadAsYaml(dict, 'specialKeys');
	}
}
function _calcFontPicFromText(options, overrideExisting = true) {
	if (nundef(options.fzPic) || overrideExisting) options.fzPic = Math.floor(options.fzText * 4 * (options.luc == 'u' ? .7 : .6)); //taking 4 as min word length
	return options.fzPic;
}
function _extendItemsAndOptions(items, options) {
	options.longestLabel = findLongestWord(items.map(x => x.label));
	options.wLongest = extendWidth(options.longestLabel);
	let ifs = options.ifs;
	for (let i = 0; i < items.length; i++) {
		let item = items[i];
		item.index = i;
		let val;
		for (const propName in ifs) {
			let prop = ifs[propName];
			if (isLiteral(prop)) val = prop;
			else if (isList(prop)) val = prop[i % prop.length];
			else if (typeof (prop) == 'function') val = prop(i, item, options, items);
			else val = null;
			if (isdef(val)) item[propName] = val;
		}
	}
	if (options.numRepeat > 1) { items = zRepeatEachItem(items, options.numRepeat, options.shufflePositions); }
	if (isdef(options.colorKeys)) items = zRepeatInColorEachItem(items, options.colorKeys);
	options.N = items.length;
	return items;
}
function _extendOptions(options, defOptions, createArea = true) {
	defOptions = {
		wper: 96, hper: 96, dParent: dTable,
		showPic: true, szPic: { w: 120, h: 120 }, bg: 'random', fg: 'white', margin: 4, rounding: 6,
		showLabels: true, luc: 'l', labelPos: 'bottom', lang: 'E', keySet: 'all',
		fzText: 20, fzPic: 60,
		padding: .025, gap: .1, isUniform: true, isRegular: false, fillArea: true,
		shufflePositions: false, sameBackground: true, showRepeat: false, repeat: 1,
		contrast: .32,
		ifs: {},
		handler: _standardHandler,
	};
	addKeys(defOptions, options);
	if (createArea && nundef(options.dArea)) {
		if (isdef(options.wArea) && isdef(options.hArea)) {
			options.dArea = getMainArea(options.dParent, { w: options.wArea, h: options.hArea });
		} else if (isdef(options.areaPadding)) {
			options.dArea = getMainAreaPadding(options.dParent, padding = options.areaPadding);
		} else options.dArea = getMainAreaPercent(options.dParent, null, options.wper, options.hper, getUID());
		options.area = getRect(options.dArea);
		options.idArea = options.dArea.id;
		options.aRatio = options.area.w / options.area.h;
		options.containerShape = options.area.w > options.area.h ? 'L' : 'P';
	}
	if (options.repeat > 1 && nundef(options.ifs.bg)) {
		let bg = isdef(options.colorKeys) ? 'white' : (i) => options.sameBackground ? computeColor('random') : 'random';
		let fg = isdef(options.colorKeys) ? 'black' : 'white';
		options.ifs.bg = bg;
		options.ifs.fg = fg;
	}
	_calcFontPicFromText(options, false);
	if (nundef(options.labelStyles)) options.labelStyles = {};
	if (options.showLabels) {
		if (options.labelPos == 'bottom') options.labelBottom = true; else options.labelTop = true;
		options.labelStyles.fz = options.fzText;
	}
	options.picStyles = { fz: options.fzPic };
	let [w, h] = [options.szPic.w, options.szPic.h];
	options.outerStyles = {
		w: w, h: h, bg: options.bg, fg: options.fg,
		display: 'inline-flex', 'flex-direction': 'column',
		'justify-content': 'center', 'align-items': 'center', 'vertical-align': 'top',
		padding: 0, box: true, margin: options.margin, rounding: options.rounding,
	};
	return options;
}
function _getKeysCond(n, cond, keySet = 'all') {
	if (isString(keySet)) keySet = KeySets[keySet];
	let keys = isdef(cond) ? isString(cond) ?
		isdef(KeySets[cond]) ? KeySets[cond] : keySet.filter(x => x.includes(cond))
		: keySet.filter(x => cond(Syms[x])) : keySet;
	keys = n >= keys.length ? keys : choose(keys, n);
	return keys;
}
function _standardHandler(handler) {
	let f = isdef(handler) ?
		ev => { ev.cancelBubble = true; let res = handler(ev, evToItem(ev)); } //console.log('clicked', evToItem(ev).key, 'res', res); }
		: ev => { ev.cancelBubble = true; console.log('clicked on', evToClosestId(ev), evToLive(ev), evToItem(ev)); };
	return f;
}
function addIds(items) { for (let i = 0; i < items.length; i++) { let id = items[i].id = getUID(); Items[id] = items[i]; } }
function addLabel(item, label, styles) {
	item.label = label;
	let div = iDiv(item);
	if (isdef(item.live.dLabel)) mRemove(item.live.dLabel);
	let dLabel = item.live.dLabel = mDiv(div, styles, null, label);
	mCenterFlex(div, true, true);
	mStyle(div, { 'vertical-align': 'top' });
	return dLabel;
}
function addLabel1(item, label, replaceOld = true) {
	let div = iDiv(item);
	mStyle(div, { 'vertical-align': 'top' });
	if (isdef(item.live.dLabel)) mRemove(item.live.dLabel);
	let dLabel = item.live.dLabel = mDiv(div, { fz: 20 }, null, label);
	return div;
}
function addLabels(items, lang = 'E', luc = 'c') {
	for (const item of items) {
		let label = item.info[lang];
		item.label = luc == 'c' ? toNoun(label) : luc == 'l' ? label : label.toUpperCase();
	}
}
function addRepeatInfo(dPic, iRepeat, wpic) {
	let szi = Math.max(Math.floor(wpic / 8), 8);
	dPic.style.position = 'relative';
	let d2 = mText('' + iRepeat, dPic, { fz: szi, weight: 'bold', fg: 'contrast', position: 'absolute', left: szi / 2, top: szi / 2 - 2 });
	return d2;
}
function applyColorkey(item) {
	let l = item.live;
	let sShade = '0 0 0 ' + item.textShadowColor;
	item.shadeStyles = { 'text-shadow': sShade, fg: anyColorToStandardString('black', l.options.contrast) };
	let ui = l.options.showPic ? l.dPic : l.dLabel;
	mStyle(ui, item.shadeStyles);
}
function downloadKeySet() {
	let keys = Pictures.filter(x => x.isSelected).map(x => x.info.key);
	downloadAsYaml(keys, 'keyset');
}
function evToItem(ev) { let id = evToClosestId(ev); return isdef(id) ? Items[id] : null; }
function evToItemC(ev) { ev.cancelBubble = true; return evToItem(ev); }
function findItemFromElem(items, elem) { let item = firstCond(items, x => iDiv(x) == elem); return item; }
function findItemFromEvent(items, ev) { return evToItemC(ev); }
function findItemFromKey(items, key) { return firstCond(items, x => x.key == key); }
function genItems(n, options) { let keys = genKeys(n, options); let items = genItemsFromKeys(keys, options); return items; }
function genItemsFromKeys(keys, options = {}) {
	let items = [];
	for (const k of keys) {
		console.assert(isdef(Syms[k]), 'key not found: ' + k);
		let info = Syms[k];
		let item = infoToItem(info);
		items.push(item);
	}
	addLabels(items, options.language, options.luc);
	items = _extendItemsAndOptions(items, options);
	return items;
}
function genItemsFromObjects(list, keyProp, labelProp, options) {
	let keys = [];
	for (const l of list) keys.push(l[keyProp]);
	let items = list.map(x => infoToItem(Syms[x[keyProp]]));
	let i = 0, luc = options.luc;
	for (const item of items) {
		let label = list[i][labelProp];
		item.o = list[i];
		item.label = luc == 'c' ? toNoun(label) : luc == 'l' ? label : label.toUpperCase();
		i += 1;
	}
	items = _extendItemsAndOptions(items, options);
	return items;
}
function genKeys(n, options) {
	let [maxlen, lang, keySet] = [options.maxlen, valf(options.language, 'E'), valf(options.keySet, 'all')];
	let cond = isdef(maxlen) ? ((x) => x[lang].length <= maxlen) : null;
	let keys = _getKeysCond(n, cond, keySet);
	return keys;
}
function getAllItems(cond, keySet = 'all') { return getItems(10000, cond, keySet); }
function getArea(dParent, styles, id) {
	let defStyles = { display: 'inline-block' };
	styles = mergeOverride(defStyles, styles);
	let d = mDiv(dParent, styles, id);
	return d;
}
function getItem(k) { return infoToItem(Syms[k]); }
function getItems(n, cond, keySet = 'all') {
	if (isNumber(n)) { n = _getKeysCond(n, cond, keySet); }
	if (isString(n[0])) n = n.map(x => Syms[x]);
	if (nundef(n[0].info)) n = n.map(x => infoToItem(x));
	return n;
}
function getItemsMaxLen(n, len, keySet = 'all', lang = 'E', luc = 'c') { return getItemsMaxWordLength(...arguments); }
function getItemsMaxWordLength(n, len, keySet = 'all', lang = 'E', luc = 'c') {
	let items = getItems(n, x => x[lang].length <= len, keySet); // cond is on Syms object!!!
	addLabels(items, lang, luc);
	return items;
}
function getMainAreaPercent(dParent, bg = 'grey', wPercent = 94, hPercent = 96, id) {
	clearElement(dParent);
	let aTable = percentOf(dParent, wPercent, hPercent); //getRect(dTable);
	let dArea = getArea(dParent, { w: aTable.w, h: aTable.h, layout: 'hcc', bg: bg }, id);
	return dArea;
}
function getNItemsPerKeylist(n, keylists, options = {}) {
	let items = [];
	for (const list of keylists) {
		options.keySet = list.keys;
		let cat = list.cat;
		let newItems = genItems(n, options);
		newItems.map(x => { x.cat = cat; items.push(x) });
	}
	return items;
}
function iconViewer(keys) {
	console.log('hallo!!!')
	onclick = show100;
	IconSet = isdef(keys) ? keys : symKeysBySet['nosymbols'];
	lastIndex = 0;
	Pictures = [];
	show100();
}
function iconViewerTestKeysets() {
	let allKeys = symKeysBySet.nosymbols;
	let keys = allKeys.filter(x => isdef(symbolDict[x].best100));
	let keys1 = allKeys.filter(x => isdef(symbolDict[x].best100) && isdef(symbolDict[x].bestE));
	let keys2 = allKeys.filter(x => isdef(symbolDict[x].best50));
	let keys3 = allKeys.filter(x => isdef(symbolDict[x].best25));
	console.log(keys3);
	iconViewer(keys3);
}
function makeItemDiv(item, options) {
	if (isdef(options.outerStyles) && isdef(options.ifs)) copyKeys(item, options.outerStyles, {}, Object.keys(options.ifs)); //options.ifs contains per item dynamic styles!!!!!
	let dOuter = mCreate('div', options.outerStyles, item.id);
	if (isdef(item.textShadowColor)) {
		let sShade = '0 0 0 ' + item.textShadowColor;
		if (options.showPic) {
			options.picStyles['text-shadow'] = sShade;
			options.picStyles.fg = anyColorToStandardString('black', options.contrast); //'#00000080' '#00000030' 
		} else {
			options.labelStyles['text-shadow'] = sShade;
			options.labelStyles.fg = anyColorToStandardString('black', options.contrast); //'#00000080' '#00000030' 
		}
	}
	let dLabel;
	if (options.showLabels && options.labelTop == true) { dLabel = mText(item.label, dOuter, options.labelStyles); }
	let dPic;
	if (options.showPic) {
		dPic = mDiv(dOuter, { family: item.info.family });
		dPic.innerHTML = item.info.text;
		if (isdef(options.picStyles)) mStyle(dPic, options.picStyles);
	}
	if (options.showLabels && options.labelBottom == true) { dLabel = mText(item.label, dOuter, options.labelStyles); }
	if (isdef(options.handler)) dOuter.onclick = options.handler;
	iAdd(item, { options: options, div: dOuter, dLabel: dLabel, dPic: dPic });
	if (isdef(item.textShadowColor)) { applyColorkey(item, options); }
	return dOuter;
}
function makeItemDivs(items, options) { for (let i = 0; i < items.length; i++) { makeItemDiv(items[i], options) } }
function makeItemHintable(item) {
	let d = iDiv(item);
	let dov = mDiv100(d);
	let rect = getRect(d);
	mStyle(dov, { position: 'absolute', w: rect.w, h: rect.h })
	iAdd(item, { overlay: dov });
	dov.style.userSelect = 'none';
}
function modifyColorkey(item) {
	let colorkey = chooseRandom(Object.keys(ColorDict));
	let textShadowColor = ColorDict[colorkey].c;
	item.textShadowColor = textShadowColor;
	item.color = ColorDict[colorkey];
	item.colorKey = colorkey;
	applyColorkey(item);
}
function modLabel(item, newLabel, styles) {
	let dLabel = iLabel(item);
	dLabel.innerHTML = newLabel;
	mStyle(dLabel, styles);
	item.label = newLabel;
	return dLabel;
}
function newItemSelection(item, items, onSelectSelected = null) {
	console.log('===>', item, items)
	let selectedItem = firstCond(items, x => x.isSelected);
	if (selectedItem && selectedItem != item) toggleItemSelection(selectedItem);
	else if (onSelectSelected && selectedItem) { onSelectSelected(item); }
	toggleItemSelection(item);
}
function registerAsNewItem(item) { item.id = iRegister(item); return item; }
function registeredItemCopy(orig) { let item = jsCopy(orig); item.id = iRegister(item); return item; }
function removeLabel(item) {
	if (isdef(item.live.dLabel)) {
		item.live.dLabel.remove();
		delete item.live.dLabel;
	}
	return item;
}
function show100() {
	console.log('hallo!!!')
	let table = mBy('table');
	clearElement(table);
	mButton('download key set', downloadKeySet, table, { fz: 30 });
	mButton('next 100', () => show100(), table, { fz: 30 });
	mLinebreak(table);
	let N = 150; //100
	let keys = takeFromTo(IconSet, lastIndex, lastIndex + N);//chooseRandom() ['keycap: 0', 'keycap: 1', 'keycap: #', 'keycap: *'];
	lastIndex += N;
	for (const k of keys) {
		let item = mPic(k, table, { margin: 8, w: 50, h: 70, bg: 'dimgray', fz: 30 });
		addLabel(item, k, { fz: 12 })
		item.onclick = toggleSelectionOfPicture;
	}
}
function toggleItemSelection(item, selectedItems) {
	let ui = iDiv(item);
	item.isSelected = nundef(item.isSelected) ? true : !item.isSelected;
	if (item.isSelected) mClass(ui, 'framedPicture'); else mRemoveClass(ui, 'framedPicture');
	if (isdef(selectedItems)) {
		if (item.isSelected) {
			console.assert(!selectedItems.includes(item), 'UNSELECTED PIC IN PICLIST!!!!!!!!!!!!')
			selectedItems.push(item);
		} else {
			console.assert(selectedItems.includes(item), 'PIC NOT IN PICLIST BUT HAS BEEN SELECTED!!!!!!!!!!!!')
			removeInPlace(selectedItems, item);
		}
	}
}
function zRepeatEachItem(items, repeat, shufflePositions = false) {
	let orig = items;
	let itRepeat = items;
	for (let i = 1; i < repeat; i++) { itRepeat = itRepeat.concat(orig.map(x => registeredItemCopy(x))); }
	if (shufflePositions) { shuffle(itRepeat); }
	let labelRepeat = {};
	let idx = 0;
	for (const item of itRepeat) {
		let iRepeat = labelRepeat[item.label];
		if (nundef(iRepeat)) iRepeat = 1; else iRepeat += 1;
		item.iRepeat = iRepeat;
		item.index = idx; idx += 1;
		labelRepeat[item.label] = iRepeat;
	}
	return itRepeat;
}
function zRepeatInColorEachItem(items, colorKeys) {
	let itColors = [];
	for (let i = 0; i < colorKeys.length; i++) {
		let newItems;
		if (i > 0) { newItems = jsCopy(items); newItems.map(x => registerAsNewItem(x)); }
		else newItems = items;
		itColors = itColors.concat(newItems);
	}
	for (let i = 0; i < colorKeys.length; i++) {
		let colorKey = colorKeys[i];
		let textShadowColor = ColorDict[colorKey].c;
		for (let j = 0; j < items.length; j++) {
			let index = i * items.length + j;
			let x = itColors[index];
			x.index = index;
			x.textShadowColor = textShadowColor;
			x.color = ColorDict[colorKey];
			x.colorKey = colorKey;
		}
	}
	return itColors;
}
//#endregion item

//#region keys
function filterWordByLengthG(g, k, w, allowSpaces = false) {
	if (nundef(g.minWordLength)) g.minWordLength = 0;
	if (nundef(g.maxWordLength)) g.maxWordLength = 50;
	return filterByLength(w, g.minWordLength, g.maxWordLength, allowSpaces);
}
function genCats(n) {
	let di = {};
	let cats = Object.keys(Categories);
	for (let i = 0; i < n; i++) {
		let cat = chooseRandom(cats);
		let incompat = Daat.incompatibleCats[cat];
		cats = arrMinus(cats, incompat);
		removeInPlace(cats, cat);
		di[cat] = Categories[cat];
	}
	return di;
}
function getAnimals() {
	let gr = 'Animals & Nature';
	let result = [];
	for (const sg in ByGroupSubgroup[gr]) {
		if (startsWith(sg, 'anim')) result = result.concat(ByGroupSubgroup[gr][sg]);
	}
	return result;
}
function getGSGElements(gCond, sCond) {
	let keys = [];
	let byg = ByGroupSubgroup;
	for (const gKey in byg) {
		if (!gCond(gKey)) continue;
		for (const sKey in byg[gKey]) {
			if (!sCond(sKey)) continue;
			keys = keys.concat(byg[gKey][sKey]);
		}
	}
	return keys.sort();
}
function getKeySets() {
	makeCategories();	//console.log('Categories',Categories)
	let res = {};
	for (const k in Syms) {
		let info = Syms[k];
		if (nundef(info.cats)) continue;
		for (const ksk of info.cats) {
			lookupAddIfToList(res, [ksk], k);
		}
	}
	res.animals = getAnimals();
	res.nature = getNature();
	localStorage.setItem('KeySets', JSON.stringify(res));
	return res;
}
function getNature() {
	let gr = 'Animals & Nature';
	let result = [];
	for (const sg in ByGroupSubgroup[gr]) {
		result = result.concat(ByGroupSubgroup[gr][sg]);
	}
	return result;
}
function makeCategories() {
	let keys = Categories = {
		animal: getGSGElements(g => g == 'Animals & Nature', s => startsWith(s, 'animal')),
		clothing: getGSGElements(g => g == 'Objects', s => s == 'clothing'),
		emotion: getGSGElements(g => g == 'Smileys & Emotion', s => startsWith(s, 'face') && !['face-costume', 'face-hat'].includes(s)),
		food: getGSGElements(g => g == 'Food & Drink', s => startsWith(s, 'food')),
		'game/toy': (['sparkler', 'firecracker', 'artist palette', 'balloon', 'confetti ball'].concat(ByGroupSubgroup['Activities']['game'])).sort(),
		gesture: getGSGElements(g => g == 'People & Body', s => startsWith(s, 'hand')),
		job: ByGroupSubgroup['People & Body']['job'],
		mammal: ByGroupSubgroup['Animals & Nature']['animal-mammal'],
		music: getGSGElements(g => g == 'Objects', s => startsWith(s, 'musi')),
		object: getGSGElements(g => g == 'Objects', s => true),
		place: getGSGElements(g => g == 'Travel & Places', s => startsWith(s, 'place')),
		plant: getGSGElements(g => g == 'Animals & Nature' || g == 'Food & Drink', s => startsWith(s, 'plant') || s == 'food-vegetable' || s == 'food-fruit'),
		sport: ByGroupSubgroup['Activities']['sport'],
		tool: getGSGElements(g => g == 'Objects', s => s == 'tool'),
		transport: getGSGElements(g => g == 'Travel & Places', s => startsWith(s, 'transport')),
	};
	let incompatible = Daat.incompatibleCats = {
		animal: ['mammal'],
		clothing: ['object'],
		emotion: ['gesture'],
		food: ['plant', 'animal'],
		'game/toy': ['object', 'music'],
		gesture: ['emotion'],
		job: ['sport'],
		mammal: ['animal'],
		music: ['object', 'game/toy'],
		object: ['music', 'clothing', 'game/toy', 'tool'],
		place: [],
		plant: ['food'],
		sport: ['job'],
		tool: ['object'],
		transport: [],
	}
}
function oneWordKeys(keys) { return keys.filter(x => !x.includes(' ')); }
function removeDuplicates(keys, prop) {
	let di = {};
	let res = [];
	let items = keys.map(x => Syms[x]);
	for (const item of items) {
		if (isdef(di[item.best])) { continue; }
		res.push(item);
		di[item.key] = true;
	}
	return res.map(x => x.key);
}
function setKeys({ allowDuplicates, nMin = 25, lang, key, keySets, filterFunc, param, confidence, sortByFunc } = {}) {
	let keys = jsCopy(keySets[key]);
	if (isdef(nMin)) {
		let diff = nMin - keys.length;
		let additionalSet = diff > 0 ? nMin > 100 ? firstCondDictKeys(keySets, k => k != key && keySets[k].length > diff) : 'best100' : null;
		if (additionalSet) KeySets[additionalSet].map(x => addIf(keys, x)); //
	}
	let primary = [];
	let spare = [];
	for (const k of keys) {
		let info = Syms[k];
		info.best = info[lang];
		if (nundef(info.best)) {
			let ersatzLang = (lang == 'D' ? 'D' : 'E');
			let klang = 'best' + ersatzLang;
			if (nundef(info[klang])) info[klang] = lastOfLanguage(k, ersatzLang);
		}
		let isMatch = true;
		if (isdef(filterFunc)) isMatch = isMatch && filterFunc(param, k, info.best);
		if (isdef(confidence)) isMatch = info[klang + 'Conf'] >= confidence;
		if (isMatch) { primary.push(k); } else { spare.push(k); }
	}
	if (isdef(nMin)) {
		let len = primary.length;
		let nMissing = nMin - len;
		if (nMissing > 0) { let list = choose(spare, nMissing); spare = arrMinus(spare, list); primary = primary.concat(list); }
	}
	if (isdef(sortByFunc)) { sortBy(primary, sortByFunc); }
	if (isdef(nMin)) console.assert(primary.length >= nMin);
	if (nundef(allowDuplicates)) {
		primary = removeDuplicates(primary);
	}
	return primary;
}
function setKeysG(g, filterFunc, nMin, key) {
	if (nundef(nMin)) nMin = 25;
	if (isdef(g.numPics)) nMin = Math.max(25, g.numPics);
	return setKeys({ nMin: nMin, lang: g.language, key: valf(key, g.vocab), keySets: KeySets, filterFunc: filterFunc, param: g });
}
//#endregion keys

//#region legacy
function _bestRowsColsFill(items, options) {
	let combis = _getSLCombis(items.length, options.isRegular);
	let wa = options.area.w, ha = options.area.h, wp = options.szPic.w, hp = options.szPic.h;
	let rows, cols;
	cols = wa / wp;
	rows = ha / hp;
	let aRatio = cols < rows ? cols / rows : rows / cols;
	options.or = cols < rows ? 'P' : 'L';
	let rmin = 20000, best;
	for (const r of combis) {
		let rnew = Math.abs(aRatio - r.s / r.l);
		if (rnew < rmin) { rmin = rnew; best = r; }
	}
	if (options.or == 'P') { rows = best.l; cols = best.s; } else { rows = best.s; cols = best.l; }
	let [w, h] = [options.szPic.w, options.szPic.h] = [wa / cols, ha / rows];
	return [rows, cols, w, h, options.or];
}
function _bestRowsColsSize(items, options) {
	let combis = _getSLCombis(items.length, options.isRegular, true);
	options.szPicTest = { w: options.szPic.w, h: options.szPic.h };
	let bestCombi = safeLoop(_findBestCombiOrShrink, [items, options, combis]);
	let [rows, cols, w, h] = [bestCombi.rows, bestCombi.cols, options.szPicTest.w, options.szPicTest.h]
	delete options.szPicTest;
	return [rows, cols, w, h, rows < cols ? 'L' : 'P'];
}
function _bestRowsColsSizeWH(items, wTotal, hTotal, options) {
	let combis = _getSLCombis(items.length, options.isRegular, true);
	options.szPicTest = { w: options.szPic.w, h: options.szPic.h };
	let bestCombi = safeLoop(_findBestCombiOrShrinkWH, [items, wTotal, hTotal, options, combis]);
	let [rows, cols, w, h] = [bestCombi.rows, bestCombi.cols, options.szPicTest.w, options.szPicTest.h]
	delete options.szPicTest;
	return [rows, cols, w, h, rows < cols ? 'L' : 'P'];
}
function _calcPadGap(p, w, h) {
	if (isString(p)) { // has a %
		let pad = Math.min(w, h) * firstNumber(p) / 100;
		console.log('pad', padding);
		return pad;
	} else if (p > 0 && p < 1) return Math.min(w, h) * p;
	else return p;
}
function _centerGridVerticallyWithinArea(items, options) {
	let dGrid = mBy(options.idGrid);
	let dArea = mBy(options.idArea);
	let gRect = getRect(dGrid);
	let aRect = getRect(dArea);
	let itemRect = getRect(lDiv(items[0]));
	let [gsz, asz, itemsz] = [rectToSize(gRect), rectToSize(aRect), rectToSize(itemRect)]
	let extra = options.area.h - gRect.h;
	let pv = valf(options.percentVertical, 50);
	let matop = extra * pv / 100;
	mStyle(dGrid, { matop: matop });
	mReveal(dMain);
}
function _checkOverflow(items, options, dGrid) {
	console.log('exec...')
	if (isOverflown(dGrid)) { _sizeByFactor(items, options, dGrid, .99); }
}
function _checkOverflowPixel(items, options, dGrid) {
	console.log('exec...')
	if (isOverflown(dGrid)) { _sizeByPixel(items, options, dGrid, -1); }
}
function _extendOptions_0(dArea, options, defOptions) {
	defOptions = {
		szPic: { w: 100, h: 100 },
		showLabels: true, maxlen: 25, luc: 'c', labelPos: 'bottom', lang: 'D',
		fzText: 20, fzPic: 60,
		padding: .025, gap: .1, isUniform: true, isRegular: true, fillArea: false,
		shufflePositions: false, sameBackground: true, showRepeat: false, repeat: 1,
		contrast: .32,
		ifs: {},
		handler: _standardHandler,
	};
	addKeys(defOptions, options);
	if (options.repeat > 1 && nundef(options.ifs.bg)) {
		let bg = isdef(options.colorKeys) ? 'white' : (i) => options.sameBackground ? computeColor('random') : 'random';
		options.ifs.bg = bg;
	}
	_calcFontPicFromText(options, false);
	options.area = getRect(dArea);
	options.idArea = dArea.id;
	options.aRatio = options.area.w / options.area.h;
	options.containerShape = options.area.w > options.area.h ? 'L' : 'P';
	if (nundef(options.labelStyles)) options.labelStyles = {};
	if (options.showLabels) {
		if (options.labelPos == 'bottom') options.labelBottom = true; else options.labelTop = true;
		options.labelStyles.fz = options.fzText;
	}
	options.picStyles = { fz: options.fzPic };
	options.outerStyles = {
		bg: 'springgreen', fg: 'contrast',
		display: 'inline-flex', 'flex-direction': 'column', 'place-content': 'center',
		padding: 0, box: true, rounding: 6,
	};
	return options;
}
function _extendOptionsFillArea(dArea, options) {
	defOptions = {
		szPic: { w: 100, h: 100 },
		showLabels: true, maxlen: 25, padding: .025, gap: .1,
		isUniform: true, fillArea: true,
		fzText: 8, luc: 'c', labelPos: 'bottom', lang: 'E',
	};
	if (nundef(options.fzPic)) options.fzPic = Math.floor(options.fzText * 4 * (options.luc == 'u' ? .7 : .6)); //taking 4 as min word length
	_extendOptions_0(dArea, options, defOptions);
}
function _findBestCombiOrShrink(items, options, combis) {
	bestCombi = firstCond(combis, x => options.area.w / x.cols > options.szPicTest.w && options.area.h / x.rows > options.szPicTest.h);
	if (isdef(bestCombi)) return bestCombi;
	options.szPicTest = { w: .9 * options.szPicTest.w, h: .9 * options.szPicTest.h };//otherwise, have to reduce the size
	return null;
}
function _findBestCombiOrShrinkWH(items, wTotal, hTotal, options, combis) {
	bestCombi = firstCond(combis, x => wTotal / x.cols > options.szPicTest.w && hTotal / x.rows > options.szPicTest.h);
	if (isdef(bestCombi)) return bestCombi;
	options.szPicTest = { w: .9 * options.szPicTest.w, h: .9 * options.szPicTest.h };//otherwise, have to reduce the size
	return null;
}
function _genOptions(opt = {}) {
	let defOptions = {
		szPic: { w: 100, h: 100 }, wper: 80, hper: 80, n: 20,
		showLabels: true, maxlen: 25, luc: 'c', labelPos: 'bottom', lang: 'D',
		fzText: 20, fzPic: 60,
		padding: .025, gap: .1, isUniform: true, isRegular: true, fillArea: false,
	};
	addKeys(defOptions, opt);
	if (nundef(opt.dArea)) opt.dArea = getMainAreaPercent(dTable, YELLOW, opt.wper, opt.hper, 'dArea');
	if (nundef(opt.items)) opt.items = genItems(opt.n, opt);
	_calcFontPicFromText(opt, false);
	opt.area = getRect(opt.dArea);
	opt.aRatio = opt.area.w / opt.area.h;
	opt.containerShape = opt.area.w > opt.area.h ? 'L' : 'P';
	if (nundef(opt.labelStyles)) opt.labelStyles = {};
	if (opt.showLabels) {
		if (opt.labelPos == 'bottom') opt.labelBottom = true; else opt.labelTop = true;
		opt.labelStyles.fz = opt.fzText;
	}
	opt.picStyles = { fz: opt.fzPic };
	opt.outerStyles = {
		bg: 'random', display: 'inline-flex', 'flex-direction': 'column', 'place-content': 'center',
		padding: 0, box: true, rounding: 6,
	};
	return opt;
}
function _getRandomRegularN(from = 2, to = 100) {
	const arr = [2, 3, 4, 6, 8, 9, 12, 15, 16, 20, 24, 30, 36, 40, 42, 44, 48, 56, 64, 72, 84, 96, 100];
	return chooseRandom(arr.filter(x => x >= from && x <= to));
}
function _getRegularN(from = 2, to = 100) {
	const arr = [2, 3, 4, 6, 8, 9, 12, 15, 16, 20, 24, 30, 36, 40, 42, 44, 48, 56, 64, 72, 84, 96, 100];
	return arr.filter(x => x >= from && x <= to);
}
function _getSLCombis(n, onlyRegular = false, addColsRows_cr = false) {
	let sq = Math.ceil(Math.sqrt(n));
	let res = [];
	for (let i = 1; i <= sq; i++) {
		let s = i;
		let l = Math.ceil(n / s);
		if (s <= l && s * l >= n) res.push({ s: s, l: l });
	}
	if (onlyRegular) res = res.filter(x => x.s * x.l == n);
	if (addColsRows_cr) {
		let resX = [];
		for (const res1 of res) {
			resX.push({ rows: res1.s, cols: res1.l, s: res1.s, l: res1.l, sum: res1.s + res1.l });
			if (res1.s != res1.l) resX.push({ rows: res1.l, cols: res1.s, s: res1.s, l: res1.l, sum: res1.s + res1.l });
		}
		sortBy(resX, 'rows');
		sortBy(resX, 'sum');
		return resX;
	}
	return res;
}
function _handleEvent(ev) { ev.cancelBubble = true; return evToItem(ev); }
function _handleTextTooSmall(fz, fzPic, wn, hn, options) {
	console.log('???????fzText too small!!!', fz, 'fzPic', fzPic, 'N=', options.N, !options.isUniform);
	fz = Math.ceil(fz + 2);
	fzPic = Math.floor(Math.min(hn - fz * 1.5, fz * 3));
	options.fzPic = options.picStyles.fz = fzPic; //Math.floor(fzPic)
	options.fzText = options.labelStyles.fz = fz; // Math.floor(fz);
}
function _makeGridGrid(items, options, dGrid, showBorder = false) {
	let wcol = options.isUniform ? '1fr' : 'auto';
	let display = options.fillArea ? 'grid' : 'inline-grid';
	mStyle(dGrid, {
		display: display,
		'grid-template-columns': `repeat(${options.cols}, ${wcol})`,
		gap: options.gap,
		box: true
	});
	if (showBorder) mStyle(dGrid, { border: '5px solid yellow' });
}
function _makeNoneGrid(items, options, dGrid) {
	options.szPic = { w: options.area.w / options.cols, h: options.area.h / options.rows };
	_setRowsColsSize(options);
	for (const item of items) {
		let live = item.live;
		if (options.isUniform) {
			mStyle(live.div, { w: options.szPic.w, h: options.szPic.h, margin: options.gap / 2, padding: options.padding / 2 });
		} else {
			mStyle(live.div, { margin: options.gap / 2, padding: options.padding });
		}
		mStyle(live.dLabel, { fz: options.fzText });
		mStyle(live.dPic, { fz: options.fzPic });
	}
	mStyle(dGrid, { padding: 0, border: '5px solid blue', box: true })
	let ov = getVerticalOverflow(dGrid);
	if (Math.floor(ov) == 0 && !options.isUniform) {
		_tryGrow(items, options);
	}
	if (ov > 0) {
		options.fzPic = options.picStyles.fz = options.fzPic * .9;//*fact;
		for (const it of items) { mStyle(lGet(it).dPic, { fz: options.fzPic }); }
		ov = getVerticalOverflow(dGrid);
		let newGap = Math.ceil(options.gap / 2);
		while (ov > 0) {
			for (const it of items) { mStyle(lDiv(it), { fz: 4, margin: newGap, padding: newGap / 2, rounding: 0 }); }
			ov = getVerticalOverflow(dGrid);
			if (ov && newGap == 1) {
				for (const it of items) { mStyle(lDiv(it), { margin: 0, padding: 0 }); }
				break;
			}
			newGap = Math.ceil(newGap / 2);
		}
	}
}
function _reduceFontsBy(tx, px, items, options) {
	fz = options.fzText - tx;
	fzPic = options.fzPic - px;
	options.fzPic = options.picStyles.fz = fzPic; //Math.floor(fzPic)
	options.fzText = options.labelStyles.fz = fz; // Math.floor(fz);
	for (const item of items) {
		let ui = item.live;
		if (tx != 0) mStyle(ui.dLabel, { fz: fz });
		if (px != 0) mStyle(ui.dPic, { fz: fzPic });
	}
}
function _reduceSizeBy(tx, px, items, options) {
	w = options.szPic.w - tx;
	h = options.szPic.h - tx;
	fz = options.fzText - tx;
	fzPic = options.fzPic - px;
	options.fzPic = options.picStyles.fz = fzPic; //Math.floor(fzPic)
	options.fzText = options.labelStyles.fz = fz; // Math.floor(fz);
	options.szPic = { w: w, h: h };
	for (const item of items) {
		let ui = item.live;
		if (tx != 0) {
			mStyle(ui.dLabel, { fz: fz }); mStyle(ui.div, { w: w, h: h });
		}
		if (px != 0) mStyle(ui.dPic, { fz: fzPic });
	}
	console.log('fonts set to', fz, fzPic);
}
function _setRowsColsSize(options) {
	let [rows, cols, wb, hb] = [options.rows, options.cols, options.szPic.w, options.szPic.h];
	options.or = rows < cols ? 'L' : 'P'
	let gap = options.gap = _calcPadGap(options.gap, wb, hb);
	let [wOffset, hOffset] = [gap / cols, gap / rows];
	let offset = Math.max(wOffset, hOffset, gap * .25);
	let w = wb - gap - offset, h = hb - gap - offset; //w = wb - gap * 1.25, h = hb - gap * 1.25;
	options.szPic.w = w;
	options.szPic.h = h;
	options.padding = _calcPadGap(options.padding, w, h);
	options.outerStyles.padding = options.padding;
	let wn = w - options.padding * 2;
	let hn = h - options.padding * 2;
	let fz = options.showLabels == true ? (wn / options.longestLabelLen) * (options.luc != 'u' ? 1.9 : 1.7) : 0; //set font size for uniform: needs to match longest label
	let fzPic = Math.min(wn / 1.3, (hn - fz * 1.2) / 1.3);
	if (fzPic < fz * 2) { fz = Math.floor(hn / 4); fzPic = fz * 2; }
	let fzTest = Math.min(hn / 3, idealFontDims(options.longestLabel, wn, hn - fzPic, fz, 4).fz);//set font size for uniform: needs to match longest label
	options.fzPic = options.picStyles.fz = Math.floor(fzPic)
	options.fzText = options.labelStyles.fz = options.isUniform ? Math.min(Math.floor(fz), Math.floor(fzTest)) : Math.floor(fz);
	if (!options.isUniform && fz < 6 && fz * 4 < fzPic) { _handleTextTooSmall(fz, fzPic, wn, hn, options); }
}
function _setTextFont(items, options, fz) {
	options.fzText = options.labelStyles.fz = fz; // Math.floor(fz);
	console.log('items', items)
	items.map(x => { let dl = x.live.dLabel; if (isdef(dl)) dl.style.fontSize = fz + 'px'; });
}
function _sizeByFactor(items, options, dGrid, factor = .9) {
	console.log('vorher', options.szPic, options.fzText, options.fzPic, options.padding, options.gap);
	w = options.szPic.w * factor;
	h = options.szPic.h * factor;
	fz = options.fzText;// * factor;
	fzPic = options.fzPic * factor;
	options.fzPic = options.picStyles.fz = fzPic; //Math.floor(fzPic)
	options.fzText = options.labelStyles.fz = fz; // Math.floor(fz);
	options.szPic = { w: w, h: h };
	options.padding *= factor;
	options.gap *= factor;
	mStyle(dGrid, { gap: options.gap / 2 });
	for (const item of items) { let ui = item.live; mStyle(ui.dLabel, { fz: fz }); mStyle(ui.div, { padding: options.padding, w: w, h: h }); mStyle(ui.dPic, { fz: fzPic }); }
	console.log('fonts set to', fz, fzPic);
	console.log('...nachher', options.szPic, options.fzText, options.fzPic, options.padding, options.gap);
}
function _sizeByPixel(items, options, dGrid, factor = -1) {
	console.log('vorher', options.szPic, options.fzText, options.fzPic, options.padding, options.gap);
	w = options.szPic.w + factor;
	h = options.szPic.h + factor;
	fz = options.fzText + factor;
	fzPic = options.fzPic + factor;
	options.fzPic = options.picStyles.fz = fzPic; //Math.floor(fzPic)
	options.fzText = options.labelStyles.fz = fz; // Math.floor(fz);
	options.szPic = { w: w, h: h };
	options.padding += factor;
	options.gap += factor;
	mStyle(dGrid, { gap: options.gap / 2 });
	for (const item of items) { let ui = item.live; mStyle(ui.dLabel, { fz: fz }); mStyle(ui.div, { padding: options.padding, w: w, h: h }); mStyle(ui.dPic, { fz: fzPic }); }
	console.log('fonts set to', fz, fzPic);
	console.log('...nachher', options.szPic, options.fzText, options.fzPic, options.padding, options.gap);
}
function _tryGrow(items, options) {
	let again = false;
	let lastItem = items[items.length - 1];
	let rect = getRect(lDiv(lastItem));
	let bottom = rect.y + rect.h;
	let hArea = options.area.h;
	if (hArea > rect.h + 2 * options.gap) {
		fz = options.fzText + 1;
		fzPic = options.fzPic + 2;
		options.fzPic = options.picStyles.fz = fzPic;
		options.fzText = options.labelStyles.fz = fz;
		for (const item of items) {
			let live = item.live;
			mStyle(live.dLabel, { fz: options.fzText });
			mStyle(live.dPic, { fz: options.fzPic });
		}
		let ov = getVerticalOverflow(mBy(options.idGrid));
		if (Math.floor(ov) <= 0) again = true; else again = false;
	}
	if (again) _tryGrow(items, options);
	else {
		fz = options.fzText - 1;
		fzPic = options.fzPic - 2;
		options.fzPic = options.picStyles.fz = fzPic;
		options.fzText = options.labelStyles.fz = fz;
		for (const item of items) {
			let live = item.live;
			mStyle(live.dLabel, { fz: options.fzText });
			mStyle(live.dPic, { fz: options.fzPic });
		}
	}
}
function addDummy() {
	let b = mButton('d', null, dTitleRight, { opacity: 0, h: 0, w: 0, padding: 0, margin: 0, outline: 'none', border: 'none', bg: 'transparent' });
	b.id = 'dummy';
}
function calcRowsCols(num, rows, cols) {
	const table = {
		2: { rows: 1, cols: 2 },
		5: { rows: 2, cols: 3 },
		7: { rows: 2, cols: 4 },
		11: { rows: 3, cols: 4 },
	};
	let shape = 'rect';
	if (isdef(rows) && isdef(cols)) {
	} else if (isdef(table[num])) {
		return table[num];
	} else if (isdef(rows)) {
		cols = Math.ceil(num / rows);
	} else if (isdef(cols)) {
		rows = Math.ceil(num / cols);
	} else if (num == 2) {
		rows = 1; cols = 2;
	} else if ([4, 6, 9, 12, 16, 20, 25, 30, 36, 42, 49, 56, 64].includes(num)) {
		rows = Math.floor(Math.sqrt(num));
		cols = Math.ceil(Math.sqrt(num));
	} else if ([3, 8, 15, 24, 35, 48, 63].includes(num)) {
		let lower = Math.floor(Math.sqrt(num));
		console.assert(num == lower * (lower + 2), 'RECHNUNG FALSCH IN calcRowsCols');
		rows = lower;
		cols = lower + 2;
	} else if (num > 1 && num < 10) {
		shape = 'circle';
	} else if (num > 16 && 0 == num % 4) {
		rows = 4; cols = num / 4;
	} else if (num > 9 && 0 == num % 3) {
		rows = 3; cols = num / 3;
	} else if (0 == num % 2) {
		rows = 2; cols = num / 2;
	} else {
		rows = 1; cols = num;
	}
	return { rows: rows, cols: cols, recommendedShape: shape };
}
function calcRowsColsX(num, rows, cols) {
	const tableOfDims = {
		2: { rows: 1, cols: 2 },
		5: { rows: 2, cols: 3 },
		7: { rows: 2, cols: 4 },
		11: { rows: 3, cols: 4 },
		40: { rows: 5, cols: 8 },
	};
	if (isdef(rows) || isdef(cols)) return calcRowsCols(num, rows, cols);
	else if (isdef(tableOfDims[num])) return tableOfDims[num];
	else return calcRowsCols(num, rows, cols);
}
function createPageDivsFullVisibleArea(above, tableStyles, below, defs = { bg: 'random', fg: 'contrast' }) {
	clearElement(dMain);
	let dRightSide = mDiv(dMain, { display: 'flex', 'flex-direction': 'column', 'flex-grow': 10 });
	let table = mDiv(dRightSide, {}, 'table'); //table.innerHTML='hallo';
	for (const k in above) {
		let name = 'd' + capitalize(k);
		let ltop = get3ColLine(table, name + 'Left', name, name + 'Right', mergeOverride(defs, above[k]));
	}
	let vals = Object.values(above);
	vals = vals.concat(Object.values(below));
	let sum = arrSum(vals, 'h');
	let sum1 = arrSum(vals, 'hmin');
	console.log('sum', sum, 'sum1', sum1);
	sum += sum1;
	let hTable = percentVh(100) - sum;// + 4;//??????? //die 10 sind abstand von footer, die 30 sind footer
	let wTable = percentVw(100) - 20; //die 20 sind padding (je 10) von get3ColLine
	if (nundef(tableStyles)) tableStyles = {};
	tableStyles = mergeOverride({ bg: 'dimgray', w: wTable, h: hTable, vpadding: 0, hpadding: 0 }, tableStyles);
	let ltable = get3ColLine(table, 'dTableLeft', 'dTable', 'dTableRight', tableStyles);
	ltable.id = 'lTable';
	mSize(dTable.parentNode, '100%', '100%');
	mSize(dTable, '100%', '100%');
	console.log('below', below);
	for (const k in below) {
		let name = 'd' + capitalize(k);
		let lbottom = get3ColLine(table, name + 'Left', name, name + 'Right', mergeOverride(defs, below[k]));
	}
	dFooter.innerHTML = 'HALLO'; //mStyle(lfooter, { bottom: 0 })
	let rect = getRect(dTable);
	return rect;
}
function createSubtitledPage(bg = 'silver', title = 'Aristocracy', subtitle = '', footer = 'a game by F. Ludos') {
	setPageBackground(bg);
	createPageDivsFullVisibleArea({
		title: { h: 42, family: 'AlgerianRegular', fz: 36 },
		subtitle: { h: 30, fz: 16 },
		titleLine: { h: 5, bg: '#00000080' },
	}, { bg: '#00000050' }, { footer: { h: 30, fz: 16 } }, {}); //table is above footer
	dTitle.innerHTML = title;
	dSubtitle.innerHTML = subtitle;
	dFooter.innerHTML = footer;
	addDummy();
}
function get3ColLine(dParent, idleft, idmiddle, idright, styles = {}) {
	let dOuter = mDiv(dParent);
	let middleStyles = { fz: styles.fz, family: styles.family };
	delete styles.fz; delete styles.family;
	styles = mergeOverride({ wmin: '100%', hmin: 30, vpadding: 4, hpadding: 10, box: true }, styles);
	mStyle(dOuter, styles);
	let dInner = mDiv(dOuter, { position: 'relative' });
	let l = mDiv(dInner, { family: 'arial', fz: 16, display: 'inline-block', position: 'absolute', wmin: 20 }, idleft)
	let m = mDiv(dInner, { fz: middleStyles.fz, family: middleStyles.family, w: '100%', align: 'center' }, idmiddle);
	let r = mDiv(dInner, { family: 'arial', fz: 16, display: 'inline-block', position: 'absolute', wmin: 20, top: 0, right: 0 }, idright);
	return dOuter;
}
function get3ColLineName(dParent, name, styles = {}) {
	name = 'd' + capitalize(name);
	let dLine = get3ColLine(dParent, name + 'Left', name, name + 'Right', styles);
	return dLine;
}
function getGameValues() {
	let user = U.id;
	let game = G.id;
	let level = G.level;
	let settings = { numColors: 1, numRepeat: 1, numPics: 1, numSteps: 1, colors: ColorList }; // general defaults
	settings = mergeOverride(settings, DB.settings);
	if (isdef(U.settings)) settings = mergeOverride(settings, U.settings);
	if (isdef(DB.games[game])) settings = mergeOverride(settings, DB.games[game]);
	let next = lookup(DB.games, [game, 'levels', level]); if (next) settings = mergeOverride(settings, next);
	next = lookup(U, ['games', game]); if (next) settings = mergeOverride(settings, next);
	next = lookup(U, ['games', game, 'levels', level]); if (next) settings = mergeOverride(settings, next);
	delete settings.levels;
	Speech.setLanguage(settings.language);
	return settings;
}
function getMainArea(dParent, styles = {}) {
	clearElement(dParent);
	let dArea = getArea(dParent, styles);
	return dArea;
}
function getMainAreaPadding(dParent, padding = 10, bg = 'grey', styles = {}) {
	let aTable = percentOf(dParent, 100, 100);
	let defAreaStyles = { margin: padding, w: aTable.w - 2 * padding, h: aTable.h - 2 * padding, bg: bg, layout: 'hcc', };
	clearElement(dParent);
	let dArea = getArea(dParent, mergeOverride(defAreaStyles, styles));
	return dArea;
}
function initSidebar1() {
	show(dSidebar);
	clearElement(dSidebar);
	mDiv(dSidebar, { 'min-width': 50, 'max-height': '100vh', display: 'flex', 'flex-flow': 'column wrap', 'align-content': 'center' }, 'dLeiste');
}
function initTable() {
	let table = mBy('table');
	clearElement(table);
	mStyle(table, { overflow: 'hidden' });
	initLineTop();
	initLineTitle();
	initLineTable();
	initLineBottom();
	dTable = dLineTableMiddle;
	dTitle = dLineTitleMiddle;
}
function layoutFlex(elist, dGrid, containerStyles, { rows, cols, isInline = false } = {}) {
	console.log(elist, elist.length)
	let dims = calcRowsCols(elist.length, rows, cols);
	console.log('dims', dims);
	let parentStyle = jsCopy(containerStyles);
	if (containerStyles.orientation == 'v') {
		parentStyle['writing-mode'] = 'vertical-lr';
	}
	parentStyle.display = 'flex';
	parentStyle.flex = '0 0 auto';
	parentStyle['flex-wrap'] = 'wrap';
	mStyle(dGrid, parentStyle);
	let b = getRect(dGrid);
	return { w: b.w, h: b.h };
}
function layoutGrid(elist, dGrid, containerStyles, { rows, cols, isInline = false } = {}) {
	console.log('layoutGrid in _legacy!')
	let dims = calcRowsCols(elist.length, rows, cols);
	let parentStyle = jsCopy(containerStyles);
	parentStyle.display = isInline ? 'inline-grid' : 'grid';
	parentStyle['grid-template-columns'] = `repeat(${dims.cols}, auto)`;
	parentStyle['box-sizing'] = 'border-box'; // TODO: koennte ev problematisch sein, leave for now!
	mStyle(dGrid, parentStyle);
	let b = getRect(dGrid);
	return { w: b.w, h: b.h };
}
function picInfo(key) {
	/*	
	*/
	if (isdef(symbolDict[key])) return symbolDict[key];
	else {
		ensureSymByHex();
		let info = symByHex[key];
		if (isdef(info)) { return info; }
		else {
			let infolist = picSearch({ keywords: key });
			if (infolist.length == 0) return null;
			else return chooseRandom(infolist);
		}
	}
}
function picRandom(type, keywords, n = 1) {
	let infolist = picSearch({ type: type, keywords: keywords });
	return n == 1 ? chooseRandom(infolist) : choose(infolist, n);
}
function picSearch({ keywords, type, func, set, group, subgroup, props, isAnd, justCompleteWords }) {
	/*	
>the following params are used to select one of standard filter functions (see helpers region filter functions)
	*/
	if (isdef(set)) ensureSymBySet();
	if (isdef(type) && type != 'all') ensureSymByType();
	let [dict, list] = isdef(set) ? [symBySet[set], symListBySet[set]]
		: nundef(type) || type == 'all' ? [symbolDict, symbolList] : [symByType[type], symListByType[type]];
	if (set == 'role' && firstCond(dict2list(dict), x => x.id == 'rotate')) console.log('===>', symBySet[set], dict, dict2list(dict));
	if (nundef(keywords)) return isdef(func) ? func(dict) : list;
	if (!isList(keywords)) keywords = [keywords];
	if (isString(props)) props = [props];
	let infolist = [];
	if (isList(props)) {
		if (isAnd) {
			if (justCompleteWords) {
				infolist = allWordsContainedInPropsAsWord(dict, keywords, props);
			} else {
				infolist = allWordsContainedInProps(dict, keywords, props);
			}
		} else {
			if (justCompleteWords) {
				infolist = anyWordContainedInPropsAsWord(dict, keywords, props);
			} else {
				infolist = anyWordContainedInProps(dict, keywords, props);
			}
		}
	} else if (nundef(props) && nundef(func)) {
		if (isAnd) {
			if (justCompleteWords) {
				infolist = allWordsContainedInKeysAsWord(dict, keywords);
			} else {
				infolist = allWordsContainedInKeys(dict, keywords);
			}
		} else {
			if (justCompleteWords) {
				infolist = anyWordContainedInKeysAsWord(dict, keywords);
			} else {
				infolist = anyWordContainedInKeys(dict, keywords);
			}
		}
	} else if (isdef(func)) {
		infolist = func(dict, keywords);
	}
	return infolist;
}
function picSet(setname) {
	ensureSymBySet();
	return chooseRandom(symListBySet[setname]);
}
function present00(items, options) {
	[options.rows, options.cols, options.szPic.w, options.szPic.h] = [10, 10, 50, 50];
	console.log('present00: rows', options.rows, 'cols', options.cols);
	let fzOrig = options.fzOrig = options.fzText;
	_setRowsColsSize(options);
	makeItemDivs(items, options);
	if (options.fixTextFont == true) {
		_setTextFont(items, options, (options.fzOrig + options.fzText) / 2);
	}
	let dGrid = mDiv(options.dArea, { hmax: options.area.h, fz: 2, padding: options.gap }, getUID());
	options.idGrid = dGrid.id;
	for (const item of items) { mAppend(dGrid, iDiv(item)); }
	_makeGridGrid(items, options, dGrid);
	let wa = options.area.w, ha = options.area.h;
	let wi = (wa / options.cols) - 1.25 * options.gap;
	let hi = ha / options.rows - 1.25 * options.gap;
	wi = Math.min(200, wi); wi = Math.round(wi);
	hi = Math.min(200, hi); hi = Math.round(hi);
	let fzMax, fpMax;
	if (options.showLabels) {
		fzMax = Math.floor(idealFontDims(options.wLongest, wi - 2 * options.padding, hi, 24).fz); //or longestLabel!
		fpMax = options.showPic ? Math.min(hi / 2, wi * 2 / 3, hi - fzMax) : 0;
	} else { fzMax = 1; fpMax = options.showPic ? Math.min(hi * 2 / 3, wi * 2 / 3) : 0; }
	options.fzPic = options.picStyles.fz = fpMax; //Math.floor(fzPic)
	options.fzText = options.labelStyles.fz = fzMax; // Math.floor(fz);
	options.szPic = { w: wi, h: hi };
	for (const item of items) {
		let ui = item.live;
		mStyle(ui.div, { wmin: wi, hmin: hi, padding: 0 });
		if (isdef(ui.dPic)) mStyle(ui.dPic, { fz: fpMax });
		if (isdef(ui.dLabel)) mStyle(ui.dLabel, { fz: fzMax });
	}
	if (options.fzText < options.fzOrig && options.fixTextFont == true) _setTextFont(items, options, (options.fzOrig + options.fzText) / 2)
	mStyle(dGrid, { display: 'inline-grid', wmax: options.area.w, hmax: options.area.h });
	if (isOverflown(dGrid)) {
		let factor = .9;
		w = options.szPic.w * factor;
		h = options.szPic.h * factor;
		fz = options.fzText * factor; // idealFontDims(options.longestLabel, w, h, 22).fz; //options.fzText;// * factor;
		fzPic = options.fzPic * factor;
		options.fzPic = options.picStyles.fz = fzPic; //Math.floor(fzPic)
		options.fzText = options.labelStyles.fz = fz; // Math.floor(fz);
		options.szPic = { w: w, h: h };
		options.padding *= factor;
		options.gap *= factor;
		mStyle(dGrid, { gap: options.gap / 2 });
		for (const item of items) {
			let ui = item.live;
			if (options.showLabels) mStyle(ui.dLabel, { fz: fz });
			mStyle(ui.div, { padding: options.padding, w: w, h: h });
			mStyle(ui.dPic, { fz: fzPic });
		}
	}
	return [items, options];
}
function setPageBackground(bg, fg = 'white', isBase = true) {
	bg = colorHex(bg);
	if (isBase) DA.pageBaseColor = bg;
	mStyle(dMain, { bg: bg, fg: isdef(fg) ? fg : 'contrast' });
}
function setTableBackground(bg, fg = 'white', isBase = true) {
	bg = colorHex(bg);
	if (isBase) DA.tableBaseColor = bg;
	mStyle(dTableBackground, { bg: bg, fg: isdef(fg) ? fg : 'contrast' });
}
function setTheme_dep(isDark = true) {
	let bg = dMain.style.backgroundColor;
	let lum = getBrightness(bg);
	console.log('bg is', bg, 'lum', lum)
	if (isDark) {
		if (lum < .5) return;
		else {
			bg = colorDarker(bg);
			setPageBackground(bg);
		}
	} else if (lum > .5) return; else { setPageBackground(colorLighter(bg)); }
}
function toggleTheme() {
	let bg = colorHex(dMain.style.backgroundColor);
	let lum = getBrightness(bg);
	console.log('current:\nbg', bg, '\nbaseColor', DA.pageBaseColor, '\nlum', lum);
	if (bg != DA.pageBaseColor) setPageBackground(DA.pageBaseColor, 'white', false);
	else if (lum <= .5) setPageBackground(colorLighter(bg), 'black', false);
	else setPageBackground(colorDarker(bg, 1), 'white', false);
}
//#endregion legacy

//#region letter
function arrCycleSwap(arr, prop, clockwise = true) {
	let n = arr.length;
	let h = arr[0].prop;
	for (let i = 1; i < n; i++) { arr[i - 1][prop] = arr[i][prop]; }
	arr[n - 1][prop] = h;
}
function gatherItems(n, options) {
	let items = null;
	while (!items) { items = Pictures = pickSuitableItems(n, options); }
	let l = items[0].letter;
	for (let i = 0; i < n; i++) {
		let item1 = items[i];
		let item2 = items[(i + 1) % n];
		let label = item1.origLabel = item1.label;
		let idx = item1.iLetter;
		item1.label = replaceAtString(label, idx, item2.letter);
		if (isWord(item1.label)) {
			item2.iLetter = (item2.iLetter + 1) % item2.label.length;
			item2.letter = item2.label[item2.iLetter];
			item1.label = replaceAtString(label, idx, item2.letter); // label.substring(0, idx) + item2.letter + label.substring(idx + 1);
			if (isWord(item1.label)) return gatherItems(n, options);
		}
		item1.swaps = {};
		item1.swaps[idx] = {
			swapped: { itemId: item2.id, index: item2.iLetter, l: item2.letter },
			correct: { itemId: item1.id, index: item1.iLetter, l: item1.letter },
			temp: null,
		};
	}
	return items;
}
function getBlinkingLetter(item) {
	if (nundef(item.letters)) return null;
	return firstCond(item.letters, x => x.isBlinking);
}
function getConsonants(w, except = []) {
	w = w.toLowerCase();
	let vowels = 'aeiouy' + except.join('');
	let res = [];
	for (let i = 0; i < w.length; i++) {
		if (!vowels.includes(w[i])) res.push({ i: i, letter: w[i] });
	}
	return res;
}
function getLettersExcept(w, except = []) {
	w = w.toLowerCase();
	let res = [];
	for (let i = 0; i < w.length; i++) {
		if (!except.includes(w[i])) res.push({ i: i, letter: w[i] });
	}
	return res;
}
function getRandomConsonant(w, except = []) { let cons = getConsonants(w, except); return chooseRandom(cons); }
function getRandomLetter(w, except = []) { let cons = getLettersExcept(w, except); return chooseRandom(cons); }
function getRandomVowel(w, except = []) { let vowels = getVowels(w, except); return chooseRandom(vowels); }
function getVowels(w, except = []) {
	w = w.toLowerCase();
	let vowels = 'aeiouy';
	let res = [];
	for (let i = 0; i < w.length; i++) {
		if (vowels.includes(w[i]) && !except.includes(w[i])) res.push({ i: i, letter: w[i] });
	}
	return res;
}
function iLetters(s, dParent, style) {
	let d = mDiv(dParent);
	for (let i = 0; i < s.length; i++) {
		let d1 = mDiv(d);
		d1.innerHTML = s[i];
		mStyle(d1, style);
	}
	return d;
}
function isWord(w) { return lookup(Dictionary,[G.language,w]); }//isdef(Dictionary[G.language][w]); }
function pickSuitableItems(n, options) {
	let items = genItems(n, options);
	let words = items.map(x => x.label);
	let minlen = arrMinMax(words, x => x.length).min;
	let used = [];
	for (const item of items) {
		let res = minlen > 6 ? getRandomVowel(item.label, used) : minlen > 3 ? getRandomConsonant(item.label, used) : getRandomLetter(item.label, used);
		if (isEmpty(res)) return null;
		let i = item.iLetter = res.i;
		let letter = item.letter = item.label[i];
		used.push(letter);
	}
	return items;
}
function pickSuitableItems_dep(n, options) {
	let items = genItems(n, options);
	let words = items.map(x => x.label);
	let used = [];
	for (const item of items) {
		let res = getRandomConsonant(item.label, used);
		if (isEmpty(res)) return null;
		let i = item.iLetter = res.i;
		let letter = item.letter = item.label[i];
		used.push(letter);
	}
	return items;
}
function showCorrectLabelSwapping() {
	for (const p of Pictures) {
		for (const l of p.letters) {
			let sw = l.swapInfo;
			if (isdef(sw)) {
				iDiv(l).innerHTML = sw.correct.l;
				if (l.i == p.iLetter) animate(iDiv(l), 'komisch', 2300);
			}
		}
	}
	DELAY = 3000;
	return 3000;
}
function startBlinking(item, items, unique = true) {
	if (unique) {
		let prevLetter = firstCond(items, x => x.isBlinking == true);
		stopBlinking(prevLetter);
	}
	mClass(iDiv(item), 'blink');
	item.isBlinking = true;
}
function startPulsating(item, items, unique = true) {
	if (unique) {
		let prevLetter = firstCond(items, x => x.isPulsating == true);
		stopPulsating(prevLetter);
	}
	mClass(iDiv(item), 'onPulse');
	item.isPulsating = true;
}
function stopBlinking(item) { if (isdef(item)) { item.isBlinking = false; mRemoveClass(iDiv(item), 'blink'); } }
function stopPulsating(item) { if (isdef(item)) { item.isPulsating = false; mRemoveClass(iDiv(item), 'onPulse'); } }
//#endregion letter

//#region math
function evalWP(wp) {
	let title = wp.title;
	if (title.includes('Adding') && !titla.includes('Fractions')) {
	}
}
function fractionConvert(wp, diop) {
	let n = wp.result.number;
	let t = typeof n;
	if (isFractionType(n)) {
		wp.isFractionResult = true;
		wp.result.text = getTextForFraction(n.n, n.d);
	}
}
function getOperand(type) { let x = OPS[type]; return randomNumber(Math.max(2, x.min), x.max); }
function getRandomWP(min = 0, max = 35) { let n=randomNumber(min, max); console.log('wp',n); return jsCopy(WordP[n]); }// chooseRandom(WordP.slice(min,max));}
function instantiateFractions(wp) {
	let text = wp.text;
	let parts = text.split('{');
	console.log('parts', parts);
	let tnew = '';
	if (!startsWith(text, '{')) { tnew += parts[0]; parts = parts.slice(1); }
	let denom;
	for (const part of parts) {
		let textPart = stringAfter(part, '}');
		let key = part.substring(0, 2);
		console.log('key', key);
		if (part[0] == 'F') { //{Fa/b}
			let numer = part[1] == 'a' ? 1 : isdef(denom) ? denom : randomNumber(2, 8);
			if (nundef(denom)) {
				denom = numer <= 2 ? randomNumber(numer + 1, 9) :
					numer < 9 ? coin() ? randomNumber(2, numer - 1) : randomNumber(numer + 1, 9) : randomNumber(2, number - 1);
			}
			tnew += ' ' + getTextForFraction(numer, denom);
			operands.push(numer / denom);
		}
		tnew += ' ' + textPart.trim();
	}
	wp.text = tnew.trim();
}
function instantiateNames(wp) {
	let text = wp.text;
	let parts = text.split('@P');
	let diNames = wp.diNames = {};
	let tnew = '';
	let allNames = jsCopy(arrPlus(GirlNames, BoyNames));
	let gNames = jsCopy(GirlNames);
	let bNames = jsCopy(BoyNames);
	if (!startsWith(text, '@P')) { tnew += parts[0]; parts = parts.slice(1); }
	for (const part of parts) {
		let textPart = stringAfter(part, ' ');
		let hasDot = part[2] == '.';
		let key = part.substring(0, 2);
		if (['G', 'B', 'P'].includes(part[0])) {
			let nlist = part[0] == 'P' ? allNames : part[0] == 'B' ? bNames : gNames;
			if (isdef(diNames[key])) {
				tnew += ' ' + diNames[key];
			} else {
				diNames[key] = chooseRandom(nlist);
				removeInPlace(nlist, diNames[key]);
				removeInPlace(allNames, diNames[key]);
				tnew += ' ' + diNames[key];
			}
		}
		tnew += (hasDot ? '. ' : ' ') + textPart.trim();
	}
	wp.text = tnew.trim();
	if (wp.sol[0] == 'p') {
		let k = wp.sol.trim().substring(3);
		wp.result = { number: 0, text: diNames[k] };
		return true;
	} else { return false; }
}
function instantiateNumbers(wp) {
	let text = wp.text;
	if (wp.sol[0] == 's') { wp.result = { number: 0, text: wp.sol.substring(1) }; return [{}, '']; }
	let diop = wp.diop = {}, res, result = [], eq;
	let solist = wp.sol.split('=>');
	for (const sol of solist) {
		[res, eq] = replaceSol(sol, diop);
		result.push(res);
	}
	result = arrLast(result).res;
	wp.result = { number: isdef(diop.R) ? diop.R : result };
	wp.result.text = '' + wp.result.number;
	for (const k in diop) {
		if (k == 'R') continue;
		text = replaceAll(text, '@' + k, valToString(diop[k]));
	}
	wp.text = text;
	fractionConvert(wp, diop);
	return [diop, eq];
}
function instantiateNumbers_dep(wp) {
	let text = wp.text;
	let diop = {};
	let sol = wp.sol;
	let rhs = stringBefore(sol, '=');
	let type = rhs.includes('*') ? rhs.includes('R') ? 'div' : 'mult' : rhs.includes('R') ? 'minus' : 'plus';
	let i = 0;
	while (i < rhs.length) {
		if (rhs[i] == 'R') { diop.R = getOperand(type); i += 1; }
		else if (rhs[i] == 'N') {
			i += 1;
			let inum = Number(rhs[i]);
			let k = 'N' + inum;
			diop[k] = getOperand(type);
			i += 1;
		} else i += 1;
	}
	i = 0;
	while (i < rhs.length) {
		if (rhs[i] == 'n') {
			i += 1;
			let inum = Number(rhs[i]);
			let k = 'n' + inum;
			let kN = 'N' + inum;
			let x = diop[kN];
			diop[k] = randomNumber(1, x - 1);
			i += 1;
		} else i += 1;
	}
	let eq = rhs;
	for (const k in diop) {
		eq = eq.replace(k, diop[k]);
	}
	let result = eval(eq);
	let lhs = stringAfter(sol, '=');
	diop[lhs] = result;
	wp.result = { number: isdef(diop.R) ? diop.R : result };
	wp.result.text = '' + wp.result.number;
	for (const k in diop) {
		if (k == 'R') continue;
		text = text.replace('@' + k, diop[k]);
	}
	wp.text = text;
	return [diop, eq];
}
function instantiateNumbersIncludingFractions(wp) {
	let sol = wp.sol;
	console.log('________________sol', sol)
	let parts = sol.split('{');
	let di = {};
	let newSol = '';
	for (const p of parts) {
		if (p[0] == 'N') {
			let key = p.substring(0, 2);
			let n;
			console.log('p', p)
			if (p[2] == '(') {
				let nums = stringBetween(p, '(', ')');
				let lst = allNumbers(nums);
				if (lst.length <= 3 && lst[0] <= lst[1]) {
					n = randomNumber(...lst);
				} else {
					n = chooseRandom(lst);
				}
			} else {
				n = randomNumber(2, 9);
			}
			let rest = stringAfter(p, '}');
			newSol += '' + n + rest;
			di[key] = n;
		} else newSol += p;
	}
	console.log('newSol', newSol);
	let res = eval(newSol);
	console.log('res of simplify', res);
	let numResult = res[0] / res[1];
	let textResult = numResult == Math.round(numResult) ? numResult : '' + res[0] + '/' + res[1];
	wp.result = { number: numResult, text: textResult };
	let text = wp.text;
	for (const k in di) {
		if (k == 'R') continue;
		text = replaceAll(text, '{' + k + '}', di[k]);
	}
	console.log('_________ text', text);
	parts = text.split('{');
	let tnew = '';
	for (const p of parts) {
		if (p[0] == 'F') {
			let s = stringBefore(p, '}');
			console.log('s', s)
			let [n, d] = allNumbers(s);
			tnew += getTextForFraction(n, d);
			tnew += '; ' + stringAfter(p, '}');
		} else tnew += p;
	}
	text = tnew;
	wp.text = text;
	mText(wp.text, dTable)
}
function instantiateWP(wp) {
	if (wp.title.includes('Fractions')) instantiateNumbersIncludingFractions(wp); else instantiateNumbers(wp);
	instantiateNames(wp);
	console.log('wp', wp.text, wp.result);
}
function isFractionType(x) { return isDict(x) && isdef(x.n) && isdef(x.d); }
function replaceSol(sol, diop) {
	let rhs = stringBefore(sol, '=');
	let type = rhs.includes('*') ? rhs.includes('R') ? 'div' : 'mult' : rhs.includes('R') ? 'minus' : 'plus';
	let i = 0;
	while (i < rhs.length) {
		if (rhs[i] == 'R') { diop.R = getOperand(type); i += 1; }
		else if (rhs[i] == 'r' && !isLetter(rhs[i+1])) { if (nundef(diop.r)) diop.r = getOperand(type); i += 1; } //zwischenergebnis
		else if (rhs[i] == 'N') {
			i += 1;
			let inum = Number(rhs[i]);
			let k = 'N' + inum;
			if (nundef(diop[k])) diop[k] = getOperand(type);
			i += 1;
		} else if (rhs[i] == 'D') {
			i += 1;
			let inum = Number(rhs[i]);
			let k = 'D' + inum;
			i += 1;
			if (rhs[i] == '{') {
				let subs = rhs.substring(i);
				let inKlammern = stringBefore(subs, '}');
				rhs = rhs.substring(0, i) + stringAfter(subs, '}');
				i += inKlammern.length;
				let nums = allNumbers(inKlammern);
				diop[k] = chooseRandom(nums);
			} else if (nundef(diop[k])) {
				diop[k] = randomNumber(2, 9); //getOperand(type);
			}
		} else if (rhs[i] == 'F') {
			if (isdef(diop[rhs.substring(i, i + 2)])) { i += 2; continue; }
			let s_ab_i = rhs.substring(i);
			let s_vor_klammer_zu = stringBefore(s_ab_i, ')');
			let lenRaus = s_vor_klammer_zu.length + 1;
			let s_nach_fraction = stringAfter(s_ab_i, ')');
			let kFraction = s_ab_i.substring(0, 2);
			let kNum = s_ab_i.substring(3); kNum = stringBefore(kNum, ',');
			let kDenom = stringAfter(s_ab_i, ','); kDenom = stringBefore(kDenom, ')'); //s_ab_i.substring(6, 8);
			rhs = rhs.substring(0, i) + 'math.fraction(' + kNum + ',' + kDenom + ')' + s_nach_fraction;
			let num = isNumber(kNum) ? Number(kNum) : isdef(diop[kNum]) ? diop[kNum] : null;
			let denom = isNumber(kDenom) ? Number(kDenom) : isdef(diop[kDenom]) ? diop[kDenom] : null;
			let fr = getRandomFraction(num, denom);
			diop[kFraction] = fr;
			if (!num) diop[kNum] = fr.n;
			if (!denom) diop[kDenom] = fr.d;
			i += 20; //length of new rhs middle text
		} else i += 1;
	}
	i = 0;
	while (i < rhs.length) {
		if (rhs[i] == 'n') {
			i += 1;
			let inum = Number(rhs[i]);
			let k = 'n' + inum;
			let kN = 'N' + inum;
			let x = diop[kN];
			if (nundef(diop[k])) diop[k] = randomNumber(2, x - 1);
			i += 1;
		} else i += 1;
	}
	let eq = rhs;
	for (const k in diop) {
		let val = diop[k];
		if (isFractionType(val)) val = `math.fraction(${val.n},${val.d})`;
		eq = eq.replace(k, val); //diop[k]);
	}
	let result = eval(eq);
	let lhs = stringAfter(sol, '=').trim();
	if (isEmpty(lhs)) lhs = 'R';
	diop[lhs] = result;
	return [result, eq];
}
function valToString(n) { if (isFractionType(n)) return getTextForFractionX(n.n, n.d); else return n; }
//#endregion math

//#region onClick
function clearTimeouts() {
	onclick = null;
	clearTimeout(TOMain); //console.log('TOMain cleared')
	clearTimeout(TOFleetingMessage);
	clearTimeout(TOTrial);
	if (isdef(TOList)) { for (const k in TOList) { TOList[k].map(x => clearTimeout(x)); } }
}
function closeAux() {
	hide(dAux);
	hide('dGo');
	show('dGear');
	show('dFloppy');
	show('dTemple');
	if (Settings.hasChanged) { Settings.updateSettings(); db_save(); }
	Settings.hasChanged = false;
	auxOpen = false;
}
function hideShield(){setTimeout(()=>{mBy('dShield').style.display = 'none'},500);}
function interrupt() {
	STOPAUS = true;
	uiActivated = aiActivated = false;
	clearTimeouts(); //legacy
	if (isdef(G.clear)) G.clear();
	if (isdef(GC.clear)) GC.clear();
	TOMan.clear();
	clearMarkers();
}
function onClickFloppy() {
	savedb();
}
function onClickFreezer2(ev) {
	clearTable(); mRemoveClass(mBy('freezer2'), 'aniSlowlyAppear'); hide('freezer2'); auxOpen = false;
	savedb();
}
function onClickGear() {
	openAux();
	hide('dGear');
	hide('dFloppy');
	hide('dCalibrate');
	Settings.createSettingsUi(dAux);
}
function onClickGo(ev) {
	if (isVisible('dTemple')) {
		closeAux();
		if (G.controllerType == 'solitaire') GC.startGame(); else GC.activateUi();
	} else {
		let item = isdef(ev) ? evToItemC(ev) : null;
		let gKey = nundef(ev) ? SelectedMenuKey : isString(ev) ? ev : item.id; // divKeyFromEv(ev);
		if (gKey != SelectedMenuKey) {
			if (isdef(SelectedMenuKey)) toggleItemSelection(Items[SelectedMenuKey]);
			SelectedMenuKey = gKey;
			let item = Items[SelectedMenuKey];
			toggleItemSelection(item);
		} else {
			closeAux();
			setGame(gKey);
			GC.startGame();
		}
	}
}
function onClickMenuItem(ev) { onClickGo(ev); }
function onClickNextGame(){	setNextGame(); GC.startGame();}
function onClickShield(ev){ 
	ev.stopPropagation(); 
	console.log('wait...');
	hideShield();
}
function onClickTemple() {
	openAux();
	hide('dTemple');
	createMenuUi(dAux, U.avGames, onClickMenuItem);
}
function openAux() { interrupt(); show(dAux); show('dGo'); }
function showShield(){mBy('dShield').style.display = 'block';}
//#endregion onClick

//#region scoring
function initScore() { resetScore(); }//Score = { gameChange: true, levelChange: true, nTotal: 0, nCorrect: 0, nCorrect1: 0, nPos: 0, nNeg: 0 }; }
function lastStreakCorrect(items) {
	let n = G.incrementLevelOnPositiveStreak;
	let iFrom = items.length - 1;
	let iTo = iFrom - n;
	for (let i = iFrom; i > iTo; i--) {
		if (i < 0) return false;
		else if (!items[i].isCorrect) return false;
	}
	return true;
}
function lastStreakFalse(items) {
	let n = G.decrementLevelOnNegativeStreak;
	let iFrom = items.length - 1;
	let iTo = iFrom - n;
	for (let i = iFrom; i > iTo; i--) {
		if (i < 0) return false;
		else if (items[i].isCorrect) return false;
	}
	return true;
}
function scoring(isCorrect) {
	Score.nTotal += 1;
	if (isCorrect) { Score.nCorrect += 1; if (G.trialNumber == 1) Score.nCorrect1 += 1; }
	percentageCorrect = Math.round(100 * Score.nCorrect / Score.nTotal);
	if (isCorrect) { Score.nPos += 1; Score.nNeg = 0; } else { Score.nPos = 0; Score.nNeg += 1; }
	let levelChange = 0;
	let gameChange = false;
	let nextLevel = G.level;
	let toggle = G.pictureLabels == 'toggle';
	let hasLabels = G.showLabels == true; //currently has labels
	let boundary = G.samplesPerGame;
	let pos = G.incrementLevelOnPositiveStreak;
	let posSeq = pos > 0 && Score.nPos >= pos;
	let halfposSeq = pos > 0 && Score.nPos >= pos / 2;
	let neg = G.decrementLevelOnNegativeStreak;
	let negSeq = neg > 0 && Score.nNeg >= neg;
	let halfnegSeq = neg > 0 && Score.nNeg >= neg / 2;
	let labelsNextRound = G.showLabels;
	if (halfposSeq && hasLabels && toggle) { labelsNextRound = false; }
	else if (posSeq) { levelChange = 1; nextLevel += 1; Score.nPos = 0; }
	if (halfnegSeq && !hasLabels && toggle) { labelsNextRound = true; }
	else if (negSeq) { levelChange = -1; if (nextLevel > 0) nextLevel -= 1; Score.nNeg = 0; }
	if (nextLevel != G.Level && nextLevel > 0 && nextLevel <= G.maxLevel) {
		userUpdate(['games', G.id, 'startLevel'], nextLevel);
	}
	if (Score.nTotal >= boundary) {
		gameChange = true; levelChange = false;
	}
	if (levelChange || gameChange) {
		if (toggle) labelsNextRound = true;
	} else if (!halfnegSeq && toggle && hasLabels && Score.nTotal >= G.samplesPerGame / 2) {
		labelsNextRound = false;
	}
	G.showLabels = labelsNextRound;
	Score.gameChange = gameChange;
	Score.levelChange = levelChange;
	return nextLevel;
}
//#endregion scoring

//#region testing
class AbsGraph1 {
	constructor() {
		let defOptions = {
			maxZoom: 1,
			minZoom: .001,
			motionBlur: false,
			wheelSensitivity: 0.05,
			zoomingEnabled: false,
			userZoomingEnabled: false,
			panningEnabled: false,
			userPanningEnabled: false,
			boxSelectionEnabled: false,
			layout: { name: 'preset' },
			elements: [],
		};
		this.cy = cytoscape(defOptions);
	}
	clear() { this.cy.destroy(); }
	getComponents() { return this.cy.elements().components(); }
	getComponentIds() { return this.cy.elements().components().map(x => x.id()); }
	getCommonEdgeId(nid1, nid2) { return nid1 + '_' + nid2; }
	getNumComponents() { return this.cy.elements().components().length; }
	getNode(id) { return this.cy.getElementById(id); }
	getNodes() { return this.cy.nodes(); }
	getNodeIds() { return this.cy.nodes().map(x => x.id()); }
	getNodeData() { return this.cy.nodes().map(x => x.data()); }
	getNodePositions() { return this.cy.nodes.map(x => x.position()); }
	getEdges() { return this.cy.edges(); }
	getEdgeIds() { return this.cy.edges().map(x => x.id()); }
	getPosition(id) {
		let node = this.getNode(id);
		let pos = node.renderedPosition();
		return pos; //this.cy.getElementById(id).renderedPosition();
	}
	setPosition(id, x, y) { this.cy.getElementById(id).position({ x: x, y: y }); }
	setProp(id, prop, val) { this.cy.getElementById(id).data()[prop] = val; }
	getProp(id, prop) { return this.cy.getElementById(id).data()[prop]; }
	getDegree(id) { return this.cy.nodes('#' + id).degree(); }
	getNodeWithMaxDegree(idlist) {
		if (nundef(idlist)) idlist = this.cy.elements().filter('node').map(x => x.data().id);
		let imax = arrMinMax(idlist, x => this.getDegree(x)).imax;
		let id = idlist[imax];
		return id;
	}
	getShortestPathsFrom(id) { let res = this.cy.elements().dijkstra('#' + id); return res; }
	getShortestPathFromTo(nid1, nid2) {
		let funcs = this.dijkstra = this.getShortestPathsFrom(nid1);
		let path = funcs.pathTo('#' + nid2);
		return path;
	}
	getLengthOfShortestPath(nid1, nid2) {
		let funcs = this.dijkstra = this.getShortestPathsFrom(nid1);
		let len = funcs.distanceTo('#' + nid2);
		return len;
	}
	storeCurrentPositions(prop = 'center') {
		for (const n of this.getNodes()) {
			let id = n.id();
			let pos = this.getPosition(id);
			this.setProp(id, prop, pos);
		}
	}
	setPositionData(prop = 'center') {
		let ids = this.getNodeIds();
		for (const id of ids) {
			let pos = this.getProp(id, prop);
			if (isdef(pos)) this.setPosition(id, pos.x, pos.y);
			else return false;
		}
		return true;
	}
	sortNodesByDegree(idlist, descending = true) {
		if (nundef(idlist)) idlist = this.cy.nodes.map(x => x.data().id);
		let nodes = idlist.map(x => this.getNode(x));
		for (const n of nodes) {
			n.degree = this.getDegree(n.id());
		}
		if (descending) sortByDescending(nodes, 'degree'); else sortBy(nodes, 'degree');
		return nodes;
	}
	addNode(data, coords) {
		if (nundef(data)) data = {};
		if (nundef(data.id)) data.id = getFruid();
		if (isdef(coords)) {
			coords.x -= this.cy.pan().x;
			coords.y -= this.cy.pan().y;
		} else { coords = { x: 0, y: 0 }; }
		var ele = this.cy.add({
			group: 'nodes',
			data: data,
			position: coords
		});
		return ele.id();
	}
	addNodes(n, datalist, coordlist) {
		let ids = [];
		if (nundef(datalist)) datalist = new Array(n).map(x => ({ id: getFruid() }));
		if (nundef(coordlist)) coordlist = new Array(n).map(x => ({ coords: { x: 0, y: 0 } }));
		for (let i = 0; i < n; i++) {
			let id = this.addNode(datalist[i], coordlist[i]);
			ids.push(id);
		}
		return ids;
	}
	addEdge(nid1, nid2, data) {
		if (nundef(data)) data = {};
		data.id = this.getCommonEdgeId(nid1, nid2);
		data.source = nid1;
		data.target = nid2;
		var ele = this.cy.add({
			group: 'edges',
			data: data,
		});
		return ele.id();
	}
	addEdges(nOrNodePairList) {
		if (isNumber(nOrNodePairList)) {
			let nids = this.getNodeIds();
			let prod = arrPairs(nids);
			nOrNodePairList = choose(prod, nOrNodePairList);
		}
		let res = [];
		for (const pair of nOrNodePairList) {
			res.push(this.addEdge(pair[0], pair[1]));
		}
		return res;
	}
	removeNode(node) { this.removeElement(node); return this.getNodeIds(); }
	removeEdge(edge) { this.removeElement(edge); return this.getEdgeIds(); }
	removeElement(ne) { if (!isString(ne)) ne = ne.id(); this.cy.getElementById(ne).remove(); }
	breadthfirst() { this.cy.layout({ name: 'breadthfirst', animate: true }).run(); }
	circle() { this.cy.layout({ name: 'circle', animate: 'end' }).run(); }
	concentric() { this.cy.layout({ name: 'concentric', animate: true }).run(); }
	comcola() {
		let defaults = {
			name: 'cola',
			animate: true, // whether to show the layout as it's running
			refresh: 1, // number of ticks per frame; higher is faster but more jerky
			maxSimulationTime: 4000, // max length in ms to run the layout
			ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
			fit: true, // on every layout reposition of nodes, fit the viewport
			padding: 30, // padding around the simulation
			boundingBox: undefined, //{x1:0,y1:0,x2:200,y2:200,w:200,h:200}, //undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
			nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node
			ready: function () { }, // on layoutready
			stop: function () { }, // on layoutstop
			randomize: false, // use random node positions at beginning of layout
			avoidOverlap: true, // if true, prevents overlap of node bounding boxes
			handleDisconnected: true, // if true, avoids disconnected components from overlapping
			convergenceThreshold: 0.01, // when the alpha value (system energy) falls below this value, the layout stops
			nodeSpacing: function (node) { return 10; }, // extra spacing around nodes
			flow: undefined, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
			alignment: undefined, // relative alignment constraints on nodes, e.g. function( node ){ return { x: 0, y: 1 } }
			gapInequalities: undefined, // list of inequality constraints for the gap between the nodes, e.g. [{"axis":"y", "left":node1, "right":node2, "gap":25}]
			edgeLength: undefined, // sets edge length directly in simulation
			edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
			edgeJaccardLength: undefined, // jaccard edge length in simulation
			unconstrIter: undefined, // unconstrained initial layout iterations
			userConstIter: undefined, // initial layout iterations with user-specified constraints
			allConstIter: undefined, // initial layout iterations with all constraints including non-overlap
			infinite: false // overrides all other options for a forces-all-the-time mode
		};
		let options = {
			name: 'cola',
			convergenceThreshold: 100,
			boundingBox: { x1: 20, y1: 20, w: 200, h: 200 },
		};
		copyKeys(options, defaults);
		console.log(defaults.boundingBox)
		this.cy.layout(defaults).run();
	}
	cose() { this.cy.layout({ name: 'cose', animate: 'end' }).run(); }
	euler() { this.cy.layout({ name: 'euler', fit: true, padding: 25, animate: 'end' }).run(); }
	fcose() {
		var defaultOptions = {
			quality: "default",
			randomize: true,
			animate: true,
			animationDuration: 500,
			animationEasing: undefined,
			fit: true,
			padding: 30,
			nodeDimensionsIncludeLabels: false,
			uniformNodeDimensions: false,
			packComponents: true,
			step: "all",
			/* spectral layout options */
			samplingType: true,
			sampleSize: 25,
			nodeSeparation: 75,
			piTol: 0.0000001,
			/* incremental layout options */
			nodeRepulsion: node => 4500,
			idealEdgeLength: edge => 50,
			edgeElasticity: edge => 0.45,
			nestingFactor: 0.1,
			numIter: 2500,
			tile: true,
			tilingPaddingVertical: 10,
			tilingPaddingHorizontal: 10,
			gravity: 0.25,
			gravityRangeCompound: 1.5,
			gravityCompound: 1.0,
			gravityRange: 3.8,
			initialEnergyOnIncremental: 0.3,
			/* constraint options */
			fixedNodeConstraint: undefined,
			alignmentConstraint: undefined,
			relativePlacementConstraint: undefined,
			/* layout event callbacks */
			ready: () => { }, // on layoutready
			stop: () => { }, // on layoutstop
			name: 'fcose',
		};
		this.cy.layout(defaultOptions).run(); //{name: 'fcose'}).run(); 
	}
	gridLayout() { this.cy.layout({ name: 'grid', animate: true }).run(); }
	presetLayout() {
		let hasCenterProp = this.setPositionData();
		if (!hasCenterProp) {
			console.log('no positions are preset: store first!');
		} else {
			let options = {
				name: 'preset',
				positions: undefined, //function (n){return this.getNode(n.id()).data().center;}, //this.posDict, //undefined, // undefined, // map of (node id) => (position obj); or function(node){ return somPos; }
				zoom: undefined, // the zoom level to set (prob want fit = false if set)
				pan: undefined, // the pan level to set (prob want fit = false if set)
				fit: true, // whether to fit to viewport
				padding: 30, // padding on fit
				animate: true, // whether to transition the node positions
				animationDuration: 500, // duration of animation in ms if enabled
				animationEasing: undefined, // easing of animation if enabled
				animateFilter: function (node, i) { return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
				ready: undefined, // callback on layoutready
				stop: undefined, // callback on layoutstop
				transform: function (node, position) { return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
			};
			this.cy.layout(options);
			this.reset();
		}
	}
	randomLayout() { this.cy.layout({ name: 'random', animate: 'true' }).run(); }
	klay() {
		let klayDefaults = {
			addUnnecessaryBendpoints: false, // Adds bend points even if an edge does not change direction.
			aspectRatio: 1.6, // The aimed aspect ratio of the drawing, that is the quotient of width by height
			borderSpacing: 20, // Minimal amount of space to be left to the border
			compactComponents: false, // Tries to further compact components (disconnected sub-graphs).
			crossingMinimization: 'LAYER_SWEEP', // Strategy for crossing minimization.
			/* LAYER_SWEEP The layer sweep algorithm iterates multiple times over the layers, trying to find node orderings that minimize the number of crossings. The algorithm uses randomization to increase the odds of finding a good result. To improve its results, consider increasing the Thoroughness option, which influences the number of iterations done. The Randomization seed also influences results.
			INTERACTIVE Orders the nodes of each layer by comparing their positions before the layout algorithm was started. The idea is that the relative order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive layer sweep algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
			cycleBreaking: 'GREEDY', // Strategy for cycle breaking. Cycle breaking looks for cycles in the graph and determines which edges to reverse to break the cycles. Reversed edges will end up pointing to the opposite direction of regular edges (that is, reversed edges will point left if edges usually point right).
			/* GREEDY This algorithm reverses edges greedily. The algorithm tries to avoid edges that have the Priority property set.
			INTERACTIVE The interactive algorithm tries to reverse edges that already pointed leftwards in the input graph. This requires node and port coordinates to have been set to sensible values.*/
			direction: 'UNDEFINED', // Overall direction of edges: horizontal (right / left) or vertical (down / up)
			/* UNDEFINED, RIGHT, LEFT, DOWN, UP */
			edgeRouting: 'ORTHOGONAL', // Defines how edges are routed (POLYLINE, ORTHOGONAL, SPLINES)
			edgeSpacingFactor: 0.5, // Factor by which the object spacing is multiplied to arrive at the minimal spacing between edges.
			feedbackEdges: false, // Whether feedback edges should be highlighted by routing around the nodes.
			fixedAlignment: 'NONE', // Tells the BK node placer to use a certain alignment instead of taking the optimal result.  This option should usually be left alone.
			/* NONE Chooses the smallest layout from the four possible candidates.
			LEFTUP Chooses the left-up candidate from the four possible candidates.
			RIGHTUP Chooses the right-up candidate from the four possible candidates.
			LEFTDOWN Chooses the left-down candidate from the four possible candidates.
			RIGHTDOWN Chooses the right-down candidate from the four possible candidates.
			BALANCED Creates a balanced layout from the four possible candidates. */
			inLayerSpacingFactor: 1.0, // Factor by which the usual spacing is multiplied to determine the in-layer spacing between objects.
			layoutHierarchy: false, // Whether the selected layouter should consider the full hierarchy
			linearSegmentsDeflectionDampening: 0.3, // Dampens the movement of nodes to keep the diagram from getting too large.
			mergeEdges: false, // Edges that have no ports are merged so they touch the connected nodes at the same points.
			mergeHierarchyCrossingEdges: true, // If hierarchical layout is active, hierarchy-crossing edges use as few hierarchical ports as possible.
			nodeLayering: 'NETWORK_SIMPLEX', // Strategy for node layering.
			/* NETWORK_SIMPLEX This algorithm tries to minimize the length of edges. This is the most computationally intensive algorithm. The number of iterations after which it aborts if it hasn't found a result yet can be set with the Maximal Iterations option.
			LONGEST_PATH A very simple algorithm that distributes nodes along their longest path to a sink node.
			INTERACTIVE Distributes the nodes into layers by comparing their positions before the layout algorithm was started. The idea is that the relative horizontal order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive node layering algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
			nodePlacement: 'BRANDES_KOEPF', // Strategy for Node Placement
			/* BRANDES_KOEPF Minimizes the number of edge bends at the expense of diagram size: diagrams drawn with this algorithm are usually higher than diagrams drawn with other algorithms.
			LINEAR_SEGMENTS Computes a balanced placement.
			INTERACTIVE Tries to keep the preset y coordinates of nodes from the original layout. For dummy nodes, a guess is made to infer their coordinates. Requires the other interactive phase implementations to have run as well.
			SIMPLE Minimizes the area at the expense of... well, pretty much everything else. */
			randomizationSeed: 1, // Seed used for pseudo-random number generators to control the layout algorithm; 0 means a new seed is generated
			routeSelfLoopInside: false, // Whether a self-loop is routed around or inside its node.
			separateConnectedComponents: true, // Whether each connected component should be processed separately
			spacing: 20, // Overall setting for the minimal amount of space to be left between objects
			thoroughness: 7 // How much effort should be spent to produce a nice layout..
		};
		var options = {
			nodeDimensionsIncludeLabels: false, // Boolean which changes whether label dimensions are included when calculating node dimensions
			fit: true, // Whether to fit
			padding: 20, // Padding on fit
			animate: true, // Whether to transition the node positions
			animateFilter: function (node, i) { return true; }, // Whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
			animationDuration: 500, // Duration of animation in ms if enabled
			animationEasing: undefined, // Easing of animation if enabled
			transform: function (node, pos) { return pos; }, // A function that applies a transform to the final node position
			ready: this.reset.bind(this), // Callback on layoutready
			stop: undefined, // Callback on layoutstop
			klay: {
				addUnnecessaryBendpoints: false, // Adds bend points even if an edge does not change direction.
				aspectRatio: 1.6, // The aimed aspect ratio of the drawing, that is the quotient of width by height
				borderSpacing: 20, // Minimal amount of space to be left to the border
				compactComponents: false, // Tries to further compact components (disconnected sub-graphs).
				crossingMinimization: 'LAYER_SWEEP', // Strategy for crossing minimization.
				cycleBreaking: 'GREEDY', // Strategy for cycle breaking. Cycle breaking looks for cycles in the graph and determines which edges to reverse to break the cycles. Reversed edges will end up pointing to the opposite direction of regular edges (that is, reversed edges will point left if edges usually point right).
				direction: 'UNDEFINED', // Overall direction of edges: /* UNDEFINED, RIGHT, LEFT, DOWN, UP */
				edgeRouting: 'ORTHOGONAL', // Defines how edges are routed (POLYLINE, ORTHOGONAL, SPLINES)
				edgeSpacingFactor: 0.5, // Factor by which the object spacing is multiplied to arrive at the minimal spacing between edges.
				feedbackEdges: false, // Whether feedback edges should be highlighted by routing around the nodes.
				fixedAlignment: 'NONE', // node placer alignment: NONE | LEFTUP | RIGHTUP | LEFTDOWN | RIGHTDOWN | BALANCED
				inLayerSpacingFactor: 1.0, // Factor by which the usual spacing is multiplied to determine the in-layer spacing between objects.
				layoutHierarchy: false, // Whether the selected layouter should consider the full hierarchy
				linearSegmentsDeflectionDampening: 0.3,// 0.3, // Dampens the movement of nodes to keep the diagram from getting too large.
				mergeEdges: false, // Edges that have no ports are merged so they touch the connected nodes at the same points.
				mergeHierarchyCrossingEdges: true, // If hierarchical layout is active, hierarchy-crossing edges use as few hierarchical ports as possible.
				nodeLayering: 'NETWORK_SIMPLEX', // Strategy for node layering NETWORK_SIMPLEX (expensive!) | LONGEST_PATH | INTERACTIVE comparing their positions before the layout algorithm was started. The idea is that the relative horizontal order of nodes as it was before layout was applied is not changed. This of course requires valid positions for all nodes to have been set on the input graph before calling the layout algorithm. The interactive node layering algorithm uses the Interactive Reference Point option to determine which reference point of nodes are used to compare positions. */
				nodePlacement: 'INTERACTIVE', // Strategy for Node Placement BRANDES_KOEPF | LINEAR_SEGMENTS | INTERACTIVE | SIMPLE
				/* BRANDES_KOEPF Minimizes the number of edge bends at the expense of diagram size: diagrams drawn with this algorithm are usually higher than diagrams drawn with other algorithms.
				LINEAR_SEGMENTS Computes a balanced placement.
				INTERACTIVE Tries to keep the preset y coordinates of nodes from the original layout. For dummy nodes, a guess is made to infer their coordinates. Requires the other interactive phase implementations to have run as well.
				SIMPLE Minimizes the area at the expense of... well, pretty much everything else. */
				randomizationSeed: 1, // Seed used for pseudo-random number generators to control the layout algorithm; 0 means a new seed is generated
				routeSelfLoopInside: false, // Whether a self-loop is routed around or inside its node.
				separateConnectedComponents: true, // Whether each connected component should be processed separately
				spacing: 20, // Overall setting for the minimal amount of space to be left between objects
				thoroughness: 3 // How much effort should be spent to produce a nice layout..
			},
			name: 'klay',
			priority: function (edge) { return null; }, // Edges with a non-nil value are skipped when greedy edge cycle breaking is enabled
		};
		this.cy.layout(options).run();
	}
	fit() { this.cy.fit(); }
	center() { this.cy.center(); this.cy.fit(); }
	reset() { this.pan0(); this.zoom1(); this.center(); }
	pan0() { this.cy.pan({ x: 0, y: 0 }); }
	zoom1() { this.cy.zoom(1); }
	isPan() { return this.cy.panningEnabled(); }
	isZoom() { return this.cy.zoomingEnabled(); }
	enablePanZoom() { this.pan(true); this.zoom(true); }
	pan(isOn, reset = true) {
		this.cy.panningEnabled(isOn);
		this.cy.userPanningEnabled(isOn);
		if (!isOn && reset) { this.pan0(); this.center(); }
	}
	zoom(isOn, minZoom = .25, maxZoom = 1, reset = true) {
		this.cy.zoomingEnabled(isOn);
		this.cy.userZoomingEnabled(isOn);
		if (!isOn && reset) { this.zoom1(); this.center(); }
		else if (isOn) { this.cy.minZoom(minZoom); this.cy.maxZoom(maxZoom); }
	}
	closeLayoutControls() { if (isdef(this.sb)) hide(this.sb); }
	addLayoutControls(sb, buttonlist) {
		let buttons = {
			BFS: mButton('BFS', () => this.breadthfirst(), sb, {}, ['tbb']),
			circle: mButton('circle', () => this.circle(), sb, {}, ['tbb']),
			CC: mButton('CC', () => this.concentric(), sb, {}, ['tbb']),
			cola: mButton('cola', () => this.comcola(), sb, {}, ['tbb']),
			cose: mButton('cose', () => this.cose(), sb, {}, ['tbb']),
			euler: mButton('euler', () => this.euler(), sb, {}, ['tbb']),
			fcose: mButton('fcose', () => this.fcose(), sb, {}, ['tbb']),
			grid: mButton('grid', () => this.gridLayout(), sb, {}, ['tbb']),
			klay: mButton('klay', () => this.klay(), sb, {}, ['tbb']),
			prest: mButton('prest', () => this.presetLayout(), sb, {}, ['tbb']),
			rand: mButton('rand', () => this.randomLayout(), sb, {}, ['tbb']),
			reset: mButton('reset', () => this.reset(), sb, {}, ['tbb']),
			fit: mButton('fit', () => this.fit(), sb, {}, ['tbb']),
			show: mButton('show', () => this.showGraph(), sb, {}, ['tbb']),
			hide: mButton('hide', () => this.hideGraph(), sb, {}, ['tbb']),
			store: mButton('store', () => this.storeCurrentPositions(), sb, {}, ['tbb']),
		};
		for (const b in buttons) {
			if (isdef(buttonlist) && !buttonlist.includes(b)) hide(buttons[b]);
		}
		return buttons;
	}
	addVisual(dParent, styles = {}) {
		if (this.hasVisual) return;
		this.hasVisual = true;
		this.id = nundef(dParent.id) ? getUID() : dParent.id;
		let styleDict = {
			node: { 'width': 25, 'height': 25, 'background-color': 'red', "color": "#fff", 'label': 'data(id)', "text-valign": "center", "text-halign": "center", },
			edge: { 'width': 2, 'line-color': 'silver', 'curve-style': 'haystack', },
			'node.highlight': { 'background-color': 'yellow' },
			'node.trans': { 'opacity': '0.5' },
		}
		for (const ks of ['node', 'edge', 'node.highlight', 'node.trans']) {
			if (isdef(styles[ks])) {
				for (const k in styles[ks]) {
					let [prop, val] = translateToCssStyle(k, styles[ks][k], false);
					styleDict[ks][prop] = val;
				}
			}
		}
		let cyStyle = [];
		for (const k in styleDict) { cyStyle.push({ selector: k, style: styleDict[k] }); }
		let size = getSize(dParent);
		let d1 = mDiv(dParent, { position: 'relative', bg: 'green', w: size.w, left: 0, top: 0, h: size.h, align: 'left' });
		this.cy.mount(d1);
		this.cy.style(cyStyle);
		this.enablePanZoom();
		iAdd(this, { div: dParent, dCy: d1 });
	}
}
class SimpleGraph extends AbsGraph1 { //das wird jetzt schon ein Item!
	constructor(dParent, styles = {}) {
		super();
		upgradeToSimpleGraph(this, dParent, styles);
	}
}
function bTest01() {
	let arr = [1, 1, 1, 1, 2, 1, 0, 1, 0], rows = 3, cols = 3, irow = 0;// =>1
	console.log(bFullRow(arr, irow, rows, cols));
	console.log('____________')
	arr = [1, 1, 1, 1, 2, 1, 1, 1, 0], rows = 3, cols = 3, irow = 2;// =>null
	console.log(bFullRow(arr, irow, rows, cols));
	console.log('____________')
	arr = [1, 1, 1, 1, 2, 1, 1, 1, 0], rows = 3, cols = 3, icol = 0;// =>1
	console.log(bFullCol(arr, icol, rows, cols));
	console.log('____________')
	arr = [1, 1, 0, 2, 1, 1, 1, 0, 1], rows = 3, cols = 3;// =>1
	console.log(bFullDiag(arr, rows, cols));
	console.log('____________')
	arr = [2, 1, 0, 2, 1, 1, 1, 0, 1], rows = 3, cols = 3;// =>null
	console.log(bFullDiag(arr, rows, cols));
	console.log('____________')
	arr = [2, 1, 0, 0, 2, 1, 1, 0, 1], rows = 3, cols = 3;// =>null
	console.log(bFullDiag(arr, rows, cols));
	console.log('____________')
	arr = [2, 2, 1, 2, 1, 2, 1, 2, 2], rows = 3, cols = 3;// =>1
	console.log(bFullDiag2(arr, rows, cols));
	console.log('____________')
	arr = [2, 1, 0, 0, 0, 1, 0, 0, 1], rows = 3, cols = 3;// =>0
	console.log(bFullDiag2(arr, rows, cols));
	console.log('============================')
}
function bTest02() {
	let arr = [1, null, 1, 1, 2, 1, 0, 1, 0], rows = 3, cols = 3, irow = 0;// =>1
	console.log(bPartialRow(arr, irow, rows, cols));
	console.log('____________')
	arr = [1, 1, 1, 1, 0, 1, 1, 1, 2], rows = 3, cols = 3, irow = 2;// =>null
	console.log(bPartialRow(arr, irow, rows, cols));
	console.log('____________')
	arr = [1, 1, 1, null, 2, 1, 1, 1, 0], rows = 3, cols = 3, icol = 0;// =>1
	console.log(bPartialCol(arr, icol, rows, cols));
	console.log('____________')
	arr = [1, 1, 0, 2, null, 1, 1, 0, 1], rows = 3, cols = 3;// =>1
	console.log(bPartialDiag(arr, rows, cols));
	console.log('____________')
	arr = [2, 1, 0, 2, 1, 1, 1, 0, 1], rows = 3, cols = 3;// =>null
	console.log(bPartialDiag(arr, rows, cols));
	console.log('____________')
	arr = [2, 1, 0, 0, 2, 1, 1, 0, 1], rows = 3, cols = 3;// =>null
	console.log(bPartialDiag(arr, rows, cols));
	console.log('____________')
	arr = [2, 2, 1, 2, null, 2, 1, 2, 2], rows = 3, cols = 3;// =>1
	console.log(bPartialDiag2(arr, rows, cols));
	console.log('____________')
	arr = [2, 1, 0, 0, 0, 1, 0, 0, 1], rows = 3, cols = 3;// =>0
	console.log(bPartialDiag2(arr, rows, cols));
}
function bTest03() {
	let arr = [[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	['O', 'X', 0, 0, 0, 0, 0],
	['O', 'O', 'O', 'O', 0, 0, 0]]
	let arrf = arrFlatten(arr), rows = 6, cols = 7, irow = 5, stride = 4;// =>1
	console.log('arr', arr[5]);
	console.log('stride in row', irow + ':', bStrideRow(arrf, irow, rows, cols, stride));
	console.log('____________');
	arr = [[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	['O', 'X', 0, 0, 0, 0, 0],
	[0, 0, 0, 'O', 'O', 'O', 0]]
	arrf = arrFlatten(arr), rows = 6, cols = 7, irow = 5, stride = 4;// =>1
	console.log('arr', arr[5]);
	console.log('stride in row', irow + ':', bStrideRow(arrf, irow, rows, cols, stride));
	console.log('____________');
	arr = [[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	['O', 'X', 0, 0, 0, 0, 0],
	[0, 'O', 'O', 'O', 'O', 0, 0]]
	arrf = arrFlatten(arr), rows = 6, cols = 7, irow = 5, stride = 4;// =>1
	console.log('arr', arr[5]);
	console.log('stride in row', irow + ':', bStrideRow(arrf, irow, rows, cols, stride));
	console.log('____________');
	arr = [[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	['O', 'X', 0, 0, 0, 0, 0],
	[0, 0, 0, 'O', 'O', 'O', 'O']]
	arrf = arrFlatten(arr), rows = 6, cols = 7, irow = 5, stride = 4;// =>1
	console.log('arr', arr[5]);
	console.log('stride in row', irow + ':', bStrideRow(arrf, irow, rows, cols, stride));
	console.log('____________');
}
function bTest04() {
	let arr = [[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	['O', 0, 0, 0, 0, 0, 0],
	['O', 0, 0, 0, 0, 0, 0],
	['O', 'X', 0, 0, 0, 0, 0],
	['O', 'O', 'O', 'O', 0, 0, 0]]
	let arrf = arrFlatten(arr), rows = 6, cols = 7, icol = 0, stride = 4;// =>1
	console.log('stride in col', icol + ':', bStrideCol(arrf, icol, rows, cols, stride));
	console.log('____________');
	arr = [[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 'X', 0, 0],
	['O', 0, 0, 0, 'X', 0, 0],
	['O', 0, 0, 0, 'O', 0, 0],
	['O', 'X', 0, 0, 'X', 0, 0],
	['O', 'O', 'O', 'O', 0, 0, 0]]
	arrf = arrFlatten(arr), rows = 6, cols = 7, icol = 4, stride = 4;// =>1
	console.log('stride in col', icol + ':', bStrideCol(arrf, icol, rows, cols, stride));
	console.log('____________');
	arr = [[0, 0, 'X', 0, 'X', 0, 0],
	[0, 0, 0, 0, 'X', 0, 0],
	['O', 0, 0, 0, 'X', 0, 0],
	['O', 0, 0, 0, 'X', 0, 0],
	['O', 'X', 0, 0, 'O', 0, 0],
	['O', 'O', 'O', 'O', 0, 0, 0]]
	arrf = arrFlatten(arr), rows = 6, cols = 7, icol = 4, stride = 4;// =>1
	console.log('stride in col', icol + ':', bStrideCol(arrf, icol, rows, cols, stride));
	console.log('____________');
}
function bTest05() {
	let arr = [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		['O', 0, 0, 0, 0, 0, 0],
		[0, 'O', 0, 0, 0, 0, 0],
		['O', 'X', 'O', 0, 0, 0, 0],
		['O', 'O', 'O', 'O', 0, 0, 0]]
	let arrf = arrFlatten(arr), rows = 6, cols = 7, irow = 2, icol = 0, stride = 4;// =>1
	console.log('stride in diag', irow, icol + ':', bStrideDiagFrom(arrf, irow, icol, rows, cols, stride));
	console.log('____________');
	arr = [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 'X', 0],
		['O', 0, 0, 0, 0, 0, 'X'],
		[0, 'O', 0, 0, 0, 0, 0],
		['O', 'X', 'O', 0, 0, 0, 0],
		['O', 'O', 'O', 'O', 0, 0, 0]]
	arrf = arrFlatten(arr), rows = 6, cols = 7, irow = 1, icol = 5, stride = 4;// =>1
	console.log('stride in diag', irow, icol + ':', bStrideDiagFrom(arrf, irow, icol, rows, cols, stride));
	console.log('____________');
	arr = [
		[0, 0, 0, 0, 0, 0, 'X'],
		[0, 0, 0, 0, 0, 'X', 0],
		['O', 0, 0, 0, 'X', 0, 'X'],
		[0, 'O', 0, 'X', 0, 0, 0],
		['O', 'X', 'O', 0, 0, 0, 0],
		['O', 'O', 'O', 'O', 0, 0, 0]]
	arrf = arrFlatten(arr), rows = 6, cols = 7, irow = 0, icol = 6, stride = 4;// =>1
	console.log('stride in diag2', irow, icol + ':', bStrideDiag2From(arrf, irow, icol, rows, cols, stride));
	console.log('____________');
	arr = [
		[0, 0, 0, 0, 0, 0, 'X'],
		[0, 0, 0, 0, 0, 'X', 0],
		['O', 0, 0, 'O', 'X', 0, 'X'],
		[0, 'O', 'O', 'X', 0, 0, 0],
		['O', 'O', 'O', 0, 0, 0, 0],
		['O', 'O', 'O', 'O', 0, 0, 0]]
	arrf = arrFlatten(arr), rows = 6, cols = 7, irow = 2, icol = 3, stride = 4;// =>1
	console.log('stride in diag2', irow, icol + ':', bStrideDiag2From(arrf, irow, icol, rows, cols, stride));
	console.log('____________');
}
function bTest06() {
	let pos = [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 'X', 0, 0, 0, 0, 0],
		[0, 'X', 0, 'O', 0, 0, 0],
		['O', 'X', 0, 'O', 0, 0, 0],
		['O', 'X', 0, 'O', 0, 0, 0]];
	let arr = arrFlatten(pos);
	let str = bStrideCol(arr, 1, 6, 7, 4);
	console.log('stride', str)
	let w = checkWinnerC4(arr, 6, 7, 4);
	printState(arr)
	console.log('w', w);
}
function bTest07() {
	let arr = [0, 0, 0, 0, 0, 0, 0, "X", 0, 0, 0, 0, 0, 0, "X", 0, 0, "X", "X", 0, "O", "X", 0, "X", "O", "O", "O", "X", "O", "X", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O", "X", "O"];
	let w = checkWinnerC4(arr, 6, 7, 4);
	printState(arr)
	console.log('w', w);
}
function bTest08() {
	let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "X", 0, 0, 0, "X", 0, 0, "O", 0, 0, 0, "O", "X", 0, "O", 0, 0, 0, "O", "X", "O", "O", "O", "O", 0];
	let w = checkWinnerC4(arr, 6, 7, 4);
	printState(arr)
	console.log('w', w);
}
function bTest09() {
	let pos = [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 'X', 0, 0, 0],
		[0, 'X', 0, 'O', 0],
		['O', 'X', 0, 'O', 0]];
	let arr = arrFlatten(pos);
	let nei = bNei(arr, 6, 5, 5);
	console.log(nei)
	nei = bNei(arr, 0, 5, 5);
	console.log(nei)
	nei = bNei(arr, 24, 5, 5);
	console.log(nei)
}
function bTest10() {
	let pos = [
		[0, 1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10, 11],
		[12, 13, 14, 15, 16, 17],
		[18, 19, 20, 21, 22, 23],
		[24, 25, 26, 27, 28, 29]];
	let arr = arrFlatten(pos);
	printState(arr);
	let nei = bNei(arr, 6, 6, 6);
	console.log(nei);
	nei = bNei(arr, 7, 6, 6);
	console.log(nei);
	nei = bNei(arr, 16, 6, 6);
	console.log(nei);
}
function btest11_fractions() {
	let a = math.fraction(1, 4);
	let b = math.fraction(1, 4);
	let c = math.multiply(a, b);
	console.log(a, b, c);
	let d = math.add(a, b);
	console.log(d)
	let e = math.multiply(2, a);
	console.log(e)
}
function cardGameTest01() {
	rAreas();
}
function cardGameTest02() {
	setBackgroundColor(null,'random');
	mStyle(dTable, { h: 400, bg: 'black', padding: 10 });
	let SPEC = { layout: ['T', 'H A'], showAreaNames: true };
	let s = '';
	let m = [];
	for (const line of SPEC.layout) {
		s += '"' + line + '" ';
		let letters = line.split(' ');
		let arr = [];
		for (const l of letters) { if (!isEmpty(l)) arr.push(l); }
		m.push(arr);
	}
	console.log('m', m, '\ns', s); return;
}
function cardGameTest03_OK() {
	setBackgroundColor(null,'random');
	mStyle(dTable, { h: 400, bg: 'black', padding: 10 });
	let dGrid = mDiv100(dTable, { display: 'inline-grid' });//,'dGrid');
	let layout = ['T', 'H A'];
	let x = createGridLayout(dGrid, layout);
	console.log('result', x);
	createAreas(dGrid, x, 'a');
}
function cardGameTest04() {
	setBackgroundColor(null,'random');
	let dGrid = mDiv(dTable, { bg: 'red', w: '80%', h: 400, padding: 10, display: 'inline-grid', rounding: 10 }, 'dGrid');
	let layout = ['T', 'H A'];
	let x = createGridLayout(dGrid, layout);
	console.log('result', x);
	createAreas(dGrid, x, 'dGrid');
}
function cardGameTest05() {
	setBackgroundColor(null,'random');
	let dGrid = mDiv(dTable, { gap: 10, bg: 'white', w: '80%', h: 400, padding: 10, display: 'inline-grid', rounding: 10 }, 'dGrid');
	let layout = ['T', 'H A'];
	let areaStyles = { bg: 'random', rounding: 6 };//,box:true };
	let contentStyles = { bg: 'dimgray', lowerRounding: 6 };
	let messageStyles = { bg: 'dimgray', fg: 'yellow' };
	let titleStyles = { family: 'AlgerianRegular', upperRounding: 6 };
	let areas = {
		T: { title: 'table', id: 'dTrick', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles },
		H: { title: 'YOU', id: 'dHuman', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles },
		A: { title: 'opponent', id: 'dAI', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles },
	};
	let x = createGridLayout(dGrid, layout);
	console.log('result', x);
	let items = [];
	for (const k in areas) {
		let item = areas[k];
		item.areaStyles['grid-area'] = k;
		let dCell = mTitledMessageDiv(item.title, dGrid, item.id, item.areaStyles, item.contentStyles, item.titleStyles, item.messageStyles)
		iRegister(item, item.id);
		iAdd(item, { div: dCell, dTitle: dCell.children[0], dMessage: dCell.children[1], dContent: dCell.children[2] });
		items.push(item);
	}
	return items;
}
function cardGameTest06_clean_OK() {
	setBackgroundColor(null,'random');
	let dGrid = mDiv(dTable, { gap: 10, bg: 'white', w: '90%', hmin: 400, padding: 10, display: 'inline-grid', rounding: 10 }, 'dGrid');
	let layout = ['T', 'H A'];
	let areaStyles = { bg: 'green', rounding: 6 };//,box:true, padding:10};
	let contentStyles = { lowerRounding: 6 };
	let messageStyles = { fg: 'yellow' };
	let titleStyles = { bg: 'dimgray', family: 'AlgerianRegular', upperRounding: 6 };
	let areas = {
		T: { title: 'table', id: 'dTrick', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles },
		H: { title: 'YOU', id: 'dHuman', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles },
		A: { title: 'opponent', id: 'dAI', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles },
	};
	areas.T.areaStyles.w = '100%';
	let x = createGridLayout(dGrid, layout);
	console.log('result', x);
	let items = [];
	for (const k in areas) {
		let item = areas[k];
		item.areaStyles['grid-area'] = k;
		let dCell = mTitledMessageDiv(item.title, dGrid, item.id, item.areaStyles, item.contentStyles, item.titleStyles, item.messageStyles)
		iRegister(item, item.id);
		iAdd(item, { div: dCell, dTitle: dCell.children[0], dMessage: dCell.children[1], dContent: dCell.children[2] });
		mCenterCenterFlex(diContent(item));
		mStyle(diContent(item), { gap: 10 });//,padding:10, box:true});
		items.push(item);
	}
	return items;
}
function cardGameTest07() {
	let items = cardGameTest07_helper();
	for (let i = 0; i < 3; i++) {
		let arr = [0, 1, 2, 10, 11].map(x => 1 + (x + i * 13) % 52);
		let d = diContent(items[i]);
		let id = 'h' + i;
		iH00(arr, d, { bg: 'blue' }, id);
	}
}
function cardGameTest07_helper() {
	setBackgroundColor(null,'random');
	let dGrid = mDiv(dTable, { gap: 10, bg: 'white', w: '90%', padding: 10, display: 'inline-grid', rounding: 10 }, 'dGrid');
	let layout = ['T', 'H A'];
	let areaStyles = { bg: 'green', rounding: 6 };//,box:true, padding:10};
	let contentStyles = { lowerRounding: 6 };
	let messageStyles = { fg: 'yellow' };
	let titleStyles = { bg: 'dimgray', family: 'AlgerianRegular', upperRounding: 6 };
	let areas = {
		T: { title: 'table', id: 'dTrick', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles },
		H: { title: 'YOU', id: 'dHuman', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles },
		A: { title: 'opponent', id: 'dAI', showTitle: true, messageArea: true, areaStyles: areaStyles, contentStyles: contentStyles, messageStyles: messageStyles, titleStyles: titleStyles },
	};
	let x = createGridLayout(dGrid, layout);
	console.log('result', x);
	let items = [];
	for (const k in areas) {
		let item = areas[k];
		item.areaStyles['grid-area'] = k;
		let dCell = mTitledMessageDiv(item.title, dGrid, item.id, item.areaStyles, item.contentStyles, item.titleStyles, item.messageStyles)
		iRegister(item, item.id);
		iAdd(item, { div: dCell, dTitle: dCell.children[0], dMessage: dCell.children[1], dContent: dCell.children[2] });
		mCenterCenterFlex(diContent(item));
		mStyle(diContent(item), { gap: 10 });//,padding:10, box:true});
		items.push(item);
	}
	return items;
}
function cardGameTest08() {
	let state = {
		pl1: { hand: [1, 2, 3, 4, 5], trick: [[6]] },
		pl2: { hand: [11, 12, 13, 14, 15], trick: [[16]] },
	};
	let trick = arrFlatten(state.pl1.trick).concat(arrFlatten(state.pl2.trick));
	let pl1Hand = state.pl1.hand;
	let pl2Hand = state.pl2.hand;
	let arrs = [trick, pl1Hand, pl2Hand];
	let items = makeAreasKrieg(dTable); //cardGameTest07_helper();
	for (let i = 0; i < 3; i++) {
		let arr = arrs[i];
		let item = items[i];
		let d = diContent(item);
		let id = 'h' + i;
		iMessage(item, '');
		iH00(arr, d, { bg: 'blue' }, id);
	}
}
function cardGameTest09() {
	let state = {
		pl1: { hand: [1, 2, 3, 4, 5], trick: [[6], [7, 8, 9]] },
		pl2: { hand: [11, 12, 13, 14, 15], trick: [[16], [17, 18, 19]] },
	};
	let areaItems = makeAreasKrieg(dTable);
	presentState1(state, areaItems);
}
function createSampleHex1(rows = 5, topcols = 3, w = 50, h = 50) {
	initTable();
	let styles = {
		outer: { bg: 'pink', padding: 25 },
		inner: { w: 500, h: 400 },
		node: { bg: 'pink', shape: 'hex', w: w, h: h },
		edge: { bg: 'white' }
	};
	let g = hex1Board(dTable, rows, topcols, styles);
	g.addLayoutControls();
	return g;
}
function cTest03_2Hands_transfer() {
	let deck1 = DA.h1.deck;
	let deck2 = DA.h2.deck;
	let item = DA.item;
	deck1.addTop(item.val);
	deck2.remove(item.val);
	iPresentHand_test(dTable, DA.h1);
	iPresentHand_test(dTable, DA.h2);
	iSortHand_test(dTable, DA.h1)
}
function cTest03_2Hands_transferStarts() {
	let h1 = DA.h1.iHand;
	let n1 = h1.items.length;
	let h2 = DA.h2.iHand;
	let n2 = h2.items.length;
	let c = chooseRandom(h2.items);
	DA.item = c;
	let w = c.w;
	let ov = w / 4;
	let xOffset = n1 * ov;
	console.log('w', w, 'ov', ov, 'xOffset', xOffset)
	iMoveFromTo(c, h2.div, h1.div, cTest03_2Hands_transfer, { x: xOffset, y: 0 });
}
function cTest03_2HandsRandom() {
	let h1 = iMakeHand_test(dTable, [33, 7, 1, 2, 3, 4], 'h1');
	let h2 = iMakeHand_test(dTable, [13, 14, 15, 16, 17], 'h2');
	setTimeout(cTest03_2Hands_transferStarts, 1000);
}
function cTest04_2HandsRandom() {
	let iarr = [33, 7, 1, 2, 3, 4], dParent = dTable, id = 'h1';
	let data = DA[id] = {};
	let h = data.deck = new DeckClass();
	h.init(iarr);
	let redo = true;
	h = data;
	if (nundef(h.zone)) {
		let nmax = 10, padding = 10;
		let sz = netHandSize(nmax);
		h.zone = mZone(dParent, { w: sz.w, h: sz.h, bg: 'random', padding: padding, rounding: 10 });
	} else {
		clearElement(h.zone);
	}
	if (nundef(h.iHand)) {
		let items = i52(h.deck.cards());
		h.iHand = iSplay(items, h.zone);
	} else if (redo) {
		clearElement(h.zone);
		let items = i52(h.deck.cards());
		h.iHand = iSplay(items, h.zone);
	}
	let h2 = iMakeHand([13, 14, 15, 16, 17], dParent, {}, 'h2');
	setTimeout(cTest03_2Hands_transferStarts, 1000);
}
function cTest05() {
	setBackgroundColor(null,'random')
	mStyle(dTable, { h: 400, bg: 'black', padding: 10 });
	let SPEC = { layout: ['T T', 'H A'], showAreaNames: true };
	let s = '';
	let m = [];
	for (const line of SPEC.layout) {
		s += '"' + line + '" ';
		let letters = line.split(' ');
		let arr = [];
		for (const l of letters) { if (!isEmpty(l)) arr.push(l); }
		m.push(arr);
	}
	console.log('m', m, '\ns', s); return;
	let rows = SPEC.layout.length;
	let hCard = 110;
	let hTitle = 20;
	let gap = 4;
	let hGrid = rows * (hCard + hTitle) + gap * (rows + 1);
	let wGrid = '80%';
	let dGrid = mDiv(dTable, { h: hGrid, w: wGrid, 'grid-template-areas': s, bg: 'yellow' });
}
function cTest05B() {
	let dGridContainer = mDiv100(dTable, { bg: 'yellow' });
	let areas = mAreas(dGridContainer);
	areas.map(x => mCenterCenterFlex(x.div));
	let dGrid = dGridContainer.children[0];
	mStyle(dGrid, { gap: 5, bg: 'blue', box: true, padding: 5 })
	console.log(dTrick, dGridContainer.children[0]);
	areas.map(x => mStyle(x.div, { h: 110 }));
}
function cTest10() {
	let layout = ['T', 'H A'];
	let x = createGridLayout(dTable, layout);
	console.log('x', x);
}
function gTest00() {
	let g = new AbsGraph1();
	let nid1 = g.addNode();
	let nid2 = g.addNode();
	let eid1 = g.addEdge(nid1, nid2);
	console.log('g', g.getNodeIds(), g.getEdgeIds());
}
function gTest01() {
	let g = new AbsGraph1();
	let nids = g.addNodes(10);
	let eids = g.addEdges(15);
	console.log('g', g.getNodeIds(), g.getEdgeIds());
}
function gTest02() {
	initTable();
	let d = mDiv(dTable, { w: 500, h: 300, bg: 'blue', align: 'left' });
	let g = new SimpleGraph(d);
	let nids = g.addNodes(10);
	let eids = g.addEdges(15);
	console.log('g', g.getNodeIds(), g.getEdgeIds());
	g.cose();
	g.addLayoutControls();
}
function gTest03() {
	initTable();
	let d = mDiv(dTable, { w: 500, h: 360, bg: 'blue', align: 'left' });
	let g = new AbsGraph1(d);
	upgradeToSimpleGraph(g, d); //g.addVisual(d);
	let nids = g.addNodes(10);
	let eids = g.addEdges(15);
	console.log('g', g.getNodeIds(), g.getEdgeIds());
	g.cose();
	g.addLayoutControls();
}
function gTest04() {
	initTable();
	let d = mDiv(dTable, { w: 500, h: 360, bg: 'blue', align: 'left' });
	let g = new AbsGraph1(d);
	g.addVisual(d);
	let nids = g.addNodes(10);
	let eids = g.addEdges(15);
	console.log('g', g.getNodeIds(), g.getEdgeIds());
	g.cose();
	g.addLayoutControls(d);
}
function gTest05() {
	initTable();
	let hexPoints = [0, -1, 1, -0.5, 1, 0.5, 0, 1, -1, 0.5, -1, -0.5];
	let styles = {
		outer: { bg: 'pink', padding: 25 },
		inner: { w: 500, h: 400 },
		node: { shape: 'polygon', 'shape-polygon-points': hexPoints, w: 90, h: 100, bg: 'black', fg: 'red', fz: 40 }
	};
	let g = new UIGraph(dTable, styles);
	let nids = g.addNodes(7);
	console.log('g', g.getNodeIds(), g.getEdgeIds());
	g.hex1(3, 2, styles.node.w + 2, styles.node.h + 2);
	g.addLayoutControls();
	g.disableDD(); //cool!!!!
	g.nodeEvent('click', x => { let id = x.id(); console.log('clicked ' + id); g.mStyle(id, { bg: 'yellow', fg: 'blue' }); });
}
function gTest06() {
	initTable();
	let hexPoints = [0, -1, 1, -0.5, 1, 0.5, 0, 1, -1, 0.5, -1, -0.5];
	let styles = {
		outer: { bg: 'pink', padding: 25 },
		inner: { w: 500, h: 400 },
		node: { bg: 'pink' },
		edge: { bg: 'blue' }
	};
	let g = new UIGraph(dTable, styles);
	let cy = g.cy;
	let nids = g.addNodes(10);
	let eids = g.addEdges(10);
	let node = g.getNodes()[0];
	node.addClass('high');
	g.cose();
	cy.style().selector('node.field').style('color', 'black');
	cy.style().selector('node.city').style('shape', 'hexagon');
	let node1 = g.getNodes()[1];
	node.addClass('city');
	node1.addClass('field');
}
function gTest07() {
	initTable();
	let hexPoints = [0, -1, 1, -0.5, 1, 0.5, 0, 1, -1, 0.5, -1, -0.5];
	let styles = {
		outer: { bg: 'pink', padding: 25 },
		inner: { w: 500, h: 400 },
		node: { bg: 'pink', shape: 'hex' },
		edge: { bg: 'blue' }
	};
	let g = new UIGraph(dTable, styles);
	let cy = g.cy;
	let nids = g.addNodes(10);
	let eids = g.addEdges(10);
	let node = g.getNodes()[0];
	node.addClass('high');
	g.cose();
	cy.style().selector('node.field').style('color', 'black');
	cy.style().selector('node.city').style('shape', 'hexagon');
	let node1 = g.getNodes()[1];
	node.addClass('city');
	node1.addClass('field');
}
function gTest08() {
	initTable();
	let styles = {
		outer: { bg: 'pink', padding: 25 },
		inner: { w: 500, h: 400 },
		node: { bg: 'pink', shape: 'hex' },
		edge: { bg: 'green' }
	};
	let g = new UIGraph(dTable, styles);
	let nids = g.addNodes(10);
	let eids = g.addEdges(10);
	g.cose();
	g.addLayoutControls();
	let nodes = g.getNodes();
	console.log('nodes', nodes[0]);
	g.mStyle(nodes[0], { shape: 'ellipse', bg: 'black' });
}
function gTest09() {
	initTable();
	let [w, h] = [50, 50];
	let styles = {
		outer: { bg: 'pink', padding: 25 },
		inner: { w: 500, h: 400 },
		node: { bg: 'pink', shape: 'hex', w: w, h: h },
		edge: { bg: 'green' }
	};
	let g = new UIGraph(dTable, styles);
	let [rows, topcols] = [5, 3];
	let total = hex1Count(rows, topcols);
	console.log('for rows', rows, 'and cols', topcols, 'need', total, 'nodes')
	let nids = g.addNodes(total);
	g.hex1(rows, topcols, w + 4, h + 4);
	let indices = hex1Indices(rows, topcols);
	console.log('indices', indices);
	let ids = g.getNodeIds();
	console.log('node ids:', ids);
	let di = {};
	for (let i = 0; i < ids.length; i++) {
		let [row, col] = [indices[i].row, indices[i].col];
		let id = ids[i];
		lookupSet(di, [row, col], id);
		g.setProp(id, 'row', row);
		g.setProp(id, 'col', col);
		g.setProp(id, 'label', `${row},${col}`);
	}
	let labels = g.getNodes().map(x => x.data().label);
	console.log('labels', labels);
	let label = g.cy.getElementById(ids[1]).data('label');
	for (let i = 0; i < ids.length; i++) {
		let [row, col] = [indices[i].row, indices[i].col];
		let id = ids[i];
		let nid2 = lookup(di, [row, col + 2]); if (nid2) g.addEdge(id, nid2);
		nid2 = lookup(di, [row + 1, col - 1]); if (nid2) g.addEdge(id, nid2);
		nid2 = lookup(di, [row + 1, col + 1]); if (nid2) g.addEdge(id, nid2);
	}
	let deg = g.getDegree(ids[1]); //cy.getElementById(ids[1]).data('label');
	let deg1 = g.getDegree(ids[10]); //cy.getElementById(ids[1]).data('label');
	let deg2 = g.getDegree(ids[18]); //cy.getElementById(ids[1]).data('label');
	console.log('das geht: label', label, deg, deg1, deg2);
}
function gTest10() {
	initTable();
	let [rows, topcols, w, h] = [7, 10, 50, 50];
	let styles = {
		outer: { bg: 'pink', padding: 25 },
		inner: { w: 500, h: 400 },
		node: { bg: 'pink', shape: 'hex', w: w, h: h },
		edge: { bg: 'green' }
	};
	let g = hex1Board(dTable, rows, topcols, styles);
}
function gTest11() {
	let g = createSampleHex1();
	let ids = g.getNodeIds();
	let id = ids[0];
	console.log('size', g.getSize(id), g.cy.getElementById(id).bb());
	let n = g.cy.getElementById(id);
	n.css({ width: '40px', height: '40px' });
	g.zoom(false);
	let bb = g.cy.elements().bb();
	console.log('gesamt graph braucht:', bb)
}
function gTest12() {
	let g = createSampleHex1(21, 11); let ids = g.getNodeIds(); let id = ids[0];
	g.showExtent();
}
function gTest13() {
	let g = createSampleHex1(3, 2, 100, 100); let ids = g.getNodeIds(); let id = ids[0]; g.showExtent();
	let center = g.getProp(id, 'center');//jetzt geht es weil ich bei hex1Board die center prop in jedem node abspeichere!!!
	console.log('center prop', center);
	center = g.posDict['preset'][id];//ja das geht
	console.log('center', center);
	let size = g.getSize(id); // das returned eigentlich die bounding box! hab auch x1,y1,x2,y2
	console.log('size', size);
	let pN = { x: center.x, y: size.y1 }; //falsch!
	let node = g.getNode(id);
	let b = node.renderedBoundingBox();
	pN = { x: b.x1 + b.w / 2, y: b.y1 };
	let nNew = g.addNode({ width: 25, height: 25 }, pN);
	console.log('new node', nNew);
	let n1 = g.getNode(nNew);
	n1.css('background-color', 'blue');
	let st = { bg: 'red', shape: 'ellipse', w: 25, h: 25 };
	let st1 = mStyleToCy(st);
	n1.css(st1);
}
function houseTest00() {
	let s = '"a a b c" "d d e c" "f g e h"'; console.log(getRandomLetterMapping(s)); console.log('_____\n', s, '\n', getLetterSwapEncoding(s));
}
async function iPrepper() {
	symbolDict = Syms = await localOrRoute('syms', '../assets/allSyms.yaml');
	SymKeys = Object.keys(Syms);
	initTable();
}
async function iTest00() {
	await iPrepper();
	let keys = SymKeys;
	let k = chooseRandom(keys);
	let item = miPic(k, dTable, { w: 100, h: 100, fz: 80, bg: 'blue' });
}
function kriegTest00(game) {
	game.load({ pl1: { hand: ['TH', 'KH'] }, pl2: { hand: ['9C', 'QC'] } }); game.deck.sort(); game.print_state();
	for (let i = 0; i < 2; i++) { game.make_random_move(); game.make_random_move(); game.print_state(); if (game.is_out_of_cards()) { console.log('game over!'); break; } }
}
function kriegTest00UI() {
	setBackgroundColor(null,'random');
	clearElement(dTable)
	let back = new GKriegBack();
	back.load({ pl1: { name: 'felix', hand: ['TH', 'KH'] }, pl2: { name: 'tom', hand: ['9C', 'QC'] } }); back.deck.sort(); back.print_state();
	let front = new GKriegFront(130, dTable);
	front.presentState(back.get_state(), dTable);
	mLinebreak(dTable, 50);
	mButton('Move!', () => kriegTest00UI_engine(back, front), dTable, { fz: 28, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
}
function kriegTest00UI_engine(back, front) {
	if (back.is_out_of_cards()) { console.log('!!!!!!!!!!!!!!!!'); front.presentGameover(back.winner(), kriegTest00UI); return; }
	clearTable(dTable);
	back.make_random_moveX();
	back.make_random_moveX();
	back.print_state();
	front.presentState(back.get_state(), dTable);
	if (back.is_out_of_cards()) { console.log('game over!'); front.presentGameover(back.winner(), kriegTest00UI); return; }
	mLinebreak(dTable, 50);
	mButton('Move!', () => kriegTest00UI_engine(back, front), dTable, { fz: 28, matop: 10, rounding: 10, padding: 16, border: 8 }, ['buttonClass']);
}
function kriegTest01(game) {
	game.load({ pl1: { hand: ['TH', 'QH'] }, pl2: { hand: ['9C', 'KC'] } }); game.deck.sort(); //game.print_state();
	game.print_state();
	for (let i = 0; i < 8; i++) {
		game.make_random_moveX();
		game.print_state();
		if (game.is_out_of_cards()) { console.log('game over!'); break; }
	}
}
function kriegTest02(game) {
	game.load({ pl1: { hand: ['TH'], trick: [['2H']] }, pl2: { hand: ['9C', 'KC'] } }); game.deck.sort(); //game.print_state();
	game.print_state('start:');
	for (let i = 0; i < 12; i++) {
		game.make_random_move();
		game.print_state('move:');
		game.resolve();
		game.swap_turn();
		if (i % 2 == 0) game.print_state('after resolve:');
		if (game.is_out_of_cards()) { console.log('game over!'); break; }
	}
}
function kriegTest03(game) {
	game.load({ pl1: { hand: ['TH'], trick: [['2H']] }, pl2: { hand: ['9C'], trick: [['KC']] } }); game.deck.sort(); //game.print_state();
	game.print_state('start:');
	for (let i = 0; i < 10; i++) {
		game.make_random_move();
		game.print_state('move:');
		game.resolve();
		game.swap_turn();
		if (i % 2 == 1) game.print_state('after resolve:');
		if (game.is_out_of_cards()) { console.log('game over!'); break; }
	}
}
function kriegTest04(game) {
	game.load({ pl1: { name: 'felix', hand: ['TH'], trick: [['2H']] }, pl2: { name: 'max', hand: ['9C'], trick: [['2C']] } }); game.deck.sort(); //game.print_state();
	game.print_state('start:');
	for (let i = 0; i < 2; i++) {
		game.make_random_move();
		game.print_state('move:');
		console.log('turn', game.iturn)
		if (game.iturn == 1) {
			game.resolve();
			game.swap_turn();
			game.print_state('after resolve:');
		} else game.swap_turn();
		if (game.is_out_of_cards()) { console.log('game over! winner', game.winner().name); break; }
	}
}
function kriegTest05(game) {
	game.load();//{ pl1: { name:'felix',hand: ['TH'], trick: [['2H']] }, pl2: { name:'max',hand: ['9C'], trick: [['2C']] } }); game.deck.sort(); //game.print_state();
	game.print_state('start:');
	for (let i = 0; i < 25; i++) {
		game.make_random_move();
		game.print_state('move:');
		console.log('turn', game.iturn)
		if (game.iturn == 1) {
			game.resolve();
			game.swap_turn();
			game.print_state('after resolve:');
		} else game.swap_turn();
		if (game.is_out_of_cards()) { console.log('game over! winner', game.winner().index); break; }
	}
}
function kriegTest06(game) {
	game.load();//{ pl1: { name:'felix',hand: ['TH'], trick: [['2H']] }, pl2: { name:'max',hand: ['9C'], trick: [['2C']] } }); game.deck.sort(); //game.print_state();
	game.print_state('start:');
	let front = new GKriegFront(130, dTable);
	front.presentState(game.get_state(), dTable);
	return;
	for (let i = 0; i < 25; i++) {
		game.make_random_move();
		game.print_state('move:');
		console.log('turn', game.iturn)
		if (game.iturn == 1) {
			game.resolve();
			game.swap_turn();
			game.print_state('after resolve:');
		} else game.swap_turn();
		if (game.is_out_of_cards()) { console.log('game over! winner', game.winner().index); break; }
	}
}
function presentState1(state, areas) {
	let trick1 = arrFlatten(state.pl1.trick)
	let trick2 = arrFlatten(state.pl2.trick);
	let pl1Hand = state.pl1.hand;
	let pl2Hand = state.pl2.hand;
	let arrs = [[trick1, trick2], [pl1Hand], [pl2Hand]];
	let hands = [];
	for (let i = 0; i < 3; i++) {
		let area = areas[i];
		let d = diContent(area);
		iMessage(area, '');
		for (let j = 0; j < arrs[i].length; j++) {
			let arr = arrs[i][j]; //arr is an object {key:cardArr} cardArr can be empty!
			let id = 'a' + i + '_h' + j;
			let what = iH00(arr, d, {}, id);
			hands.push(what);
		}
	}
	for (let i = 0; i < 2; i++) {
		let cards = hands[i].iHand.items;
		if (isEmpty(hands[i].arr)) continue;
		console.log('cards', cards, 'hands[i]', hands[i])
		for (let j = 0; j < cards.length - 1; j++) {
			Card52.turnFaceDown(cards[j]);
		}
	}
}
async function serverTest00_postData() {
	console.log('hallo'); //return;
	let o = { liste: [1, 2, 3], hut: 'hutX' };
	let path = './DATA/file.yaml';
	let resp = await postData('http://localhost:3000/db', { obj: o, path: path });
	console.log('response', resp); return;
}
function suTest00() {
	let [rows, cols] = [4, 4];
	let pattern = getSudokuPattern(rows, cols);
	printMatrix(pattern, 'pattern');
	let colarrs = bGetCols(pattern); printMatrix(colarrs, 'transposed');
	let rowarrs = bGetCols(colarrs); printMatrix(rowarrs, 'normal');
	let cFlat = arrFlatten(rowarrs);
	let aRows = bGetRows(pattern);
	let rFlat = arrFlatten(aRows);
	console.assert(sameList(cFlat, rFlat), 'TRANSPOSE DOES NOT WORK!!!!!!!!!!!!!!!')
	let correct = checkSudokuRule(pattern);
}
function upgradeToSimpleGraph(g, dParent, styles = {}) {
	g.id = nundef(dParent.id) ? getUID() : dParent.id;
	let styleDict = {
		node: { 'width': 25, 'height': 25, 'background-color': 'red', "color": "#fff", 'label': 'data(id)', "text-valign": "center", "text-halign": "center", },
		edge: { 'width': 2, 'line-color': 'silver', 'curve-style': 'haystack', },
		'node.highlight': { 'background-color': 'yellow' },
		'node.trans': { 'opacity': '0.5' },
	}
	for (const ks of ['node', 'edge', 'node.highlight', 'node.trans']) {
		if (isdef(styles[ks])) {
			for (const k in styles[ks]) {
				let [prop, val] = translateToCssStyle(k, styles[ks][k], false);
				styleDict[ks][prop] = val;
			}
		}
	}
	let cyStyle = [];
	for (const k in styleDict) { cyStyle.push({ selector: k, style: styleDict[k] }); }
	let size = getSize(dParent);
	let d1 = mDiv(dParent, { position: 'relative', bg: 'green', w: size.w - 80, left: 40, top: 0, h: size.h, align: 'left' });
	g.cy.mount(d1);
	g.cy.style(cyStyle);
	g.enablePanZoom();
	iAdd(g, { div: dParent, dCy: d1 });
}
//#endregion testing

//#region ui
function initAux() {
	dAux = mBy('dAux');
}
function initLineBottom() {
	dLineBottomOuter = mDiv(table); dLineBottomOuter.id = 'lineBottomOuter';
	dLineBottom = mDiv(dLineBottomOuter); dLineBottom.id = 'lineBottom';
	dLineBottomLeft = mDiv(dLineBottom); dLineBottomLeft.id = 'lineBottomLeft';
	dLineBottomRight = mDiv(dLineBottom); dLineBottomRight.id = 'lineBottomRight';
	dLineBottom = mDiv(dLineBottom); dLineBottom.id = 'lineBottomMiddle';
	mLinebreak(table);
}
function initLineTable() {
	dLineTableOuter = mDiv(table); dLineTableOuter.id = 'lineTableOuter';
	dLineTable = mDiv(dLineTableOuter); dLineTable.id = 'lineTable';
	dLineTableLeft = mDiv(dLineTable); dLineTableLeft.id = 'lineTableLeft';
	dLineTableMiddle = mDiv(dLineTable); dLineTableMiddle.id = 'lineTableMiddle';
	mClass(dLineTableMiddle, 'flexWrap');
	dLineTableRight = mDiv(dLineTable); dLineTableRight.id = 'lineTableRight';
	mLinebreak(table);
}
function initLineTitle() {
	dLineTitleOuter = mDiv(table); dLineTitleOuter.id = 'lineTitleOuter';
	dLineTitle = mDiv(dLineTitleOuter); dLineTitle.id = 'lineTitle';
	if (!PROJECTNAME.startsWith('bel')) mStyle(dLineTitle,{matop:5});
	dLineTitleLeft = mDiv(dLineTitle); dLineTitleLeft.id = 'lineTitleLeft';
	dLineTitleRight = mDiv(dLineTitle); dLineTitleRight.id = 'lineTitleRight';
	dLineTitleMiddle = mDiv(dLineTitle); dLineTitleMiddle.id = 'lineTitleMiddle';
	mLinebreak(table);
}
function initLineTop() {
	dLineTopOuter = mDiv(table); dLineTopOuter.id = 'lineTopOuter';
	dLineTop = mDiv(dLineTopOuter); dLineTop.id = 'lineTop';
	dLineTopLeft = mDiv(dLineTop); dLineTopLeft.id = 'lineTopLeft';
	dLineTopRight = mDiv(dLineTop); dLineTopRight.id = 'lineTopRight';
	dLineTopMiddle = mDiv(dLineTop); dLineTopMiddle.id = 'lineTopMiddle';
	dScore = mDiv(dLineTopMiddle);
	dScore.id = 'dScore';
	dLevel = mDiv(dLineTopLeft);
	dLevel.id = 'dLevel';
	dGameTitle = mDiv(dLineTopRight);
	dGameTitle.id = 'dGameTitle';
	let d = mDiv(dLineTopRight);
	d.id = 'time';
	mLinebreak(table);
}
function initSidebar() {
	let dParent = mBy('sidebar');
	clearElement(dParent);
	dLeiste = mDiv(dParent);
	mStyle(dLeiste, { 'min-width': 70, 'max-height': '100vh', display: 'flex', 'flex-flow': 'column wrap' });
}
//#endregion ui

//#region user
function changeUserTo(name) {
	if (name != Username) { save_user(); }
	mBy('spUser').innerHTML = name;
	loadUser(name);
	startUnit();
}
function cleanupOldGame() {
	updateUserScore();//this saves user data + clears the score.nTotal,nCorrect,nCorrect1!!!!!
	if (isdef(G)) { G.clear(); }
	clearTable();
	clearStats();
	clearFleetingMessage();
}
function editableUsernameUi(dParent) {
	let inp = mEditableInput(dParent, 'user: ', Username);
	inp.id = 'spUser';
	inp.addEventListener('focusout', () => { changeUserTo(inp.innerHTML.toLowerCase()); });
	return inp;
}
function getUserStartLevel(game) { return valf(lookup(U, ['games', game, 'startLevel']), 0); }
function getUserStartLevel_dep(game) { gInfo = U.games[game]; level = isdef(gInfo) && isdef(gInfo.startLevel) ? gInfo.startLevel : 0; return level; }
function loadUFromDB(newUser) {
	if (newUser == Username && isdef(U)) { return; } //console.log('user up to date! ' + Username); return; }
	Username = isdef(newUser) ? newUser : localStorage.getItem('user');
	if (nundef(Username)) Username = DEFAULTUSERNAME;
	let uData = lookupSet(DB, ['users', Username]);
	if (!uData) {
		if (startsWith(newUser, 'test')) { uData = DB.users[Username] = jsCopy(DB.users.test0); uData.id = Username; }
		else { uData = DB.users[Username] = jsCopy(DB.users.guest0); uData.id = Username; }
	}
	U = DB.users[Username]; //load user data
	if (nundef(U.games)) U.games = jsCopy(DB.users.guest0.games);
	lookupSet(U, ['settings', 'userColor'], randomColor());
	return U;
}
function loadUser(newUser, game) {
	cleanupOldGame();
	loadUFromDB(newUser);
	if (PROJECTNAME.startsWith('bel')) showUsernameOnScreen(true);
	if (nundef(game)) {
		game = !window.navigator.onLine && U.lastGame == 'gSayPic' ? 'gTouchPic' : U.lastGame; //do NOT start in gSayPic if no internet!!!
		if (nundef(game)) game = U.avGames[0];
	}
	console.assert(isdef(game), "user.js: no game in loadUser!!!!!!!");
	setGame(game);
}
function save_user(db_dirty = true) {
	if (isdef(G)) U.lastGame = G.id;
	if (!startsWith(Username, 'test')) localStorage.setItem('user', Username);
	DB.users[Username] = U;
	if (db_dirty) db_save();
}
function setNextGame() {
	let game = G.id;
	let i = U.avGames.indexOf(game);
	let iNew = (i + 1) % U.avGames.length;
	setGame(U.avGames[iNew]);
}
function showUsernameOnScreen(isEditable=true){
	let uiName = 'spUser';
	let dUser = mBy(uiName);
	if (isdef(dUser)) return;
	dUser = isEditable? editableUsernameUi(dLineTopLeft):mText(Username, dLineTopLeft);
	dUser.id = uiName; 
}
function updateUserScore() {
	if (nundef(Score.nTotal) || Score.nTotal <= 0) return;
	let sc = { nTotal: Score.nTotal, nCorrect: Score.nCorrect, nCorrect1: Score.nCorrect1, nWins: Score.nWins, nLoses: Score.nLoses, nTied: Score.nTied };
	let g = G.id;
	let recOld = lookupSet(U, ['games', g], { startLevel: 0, nTotal: 0, nCorrect: 0, nCorrect1: 0, nWins: 0, nLoses: 0, nTied: 0 });
	let recSession = lookupSet(U, ['session', g], { startLevel: 0, nTotal: 0, nCorrect: 0, nCorrect1: 0, nWins: 0, nLoses: 0, nTied: 0 });
	addByKey(sc, recSession);
	let counts = DB.games[g].controllerType == 'solo' ? recSession.nWins : recSession.nCorrect;
	recSession.percentage = Math.round(100 * counts / recSession.nTotal);
	addByKey(sc, recOld);
	counts = DB.games[g].controllerType == 'solo' ? recOld.nWins : recOld.nCorrect;
	recOld.percentage = Math.round(100 * recOld.nCorrect / recOld.nTotal);
	Score.nTotal = Score.nCorrect = Score.nCorrect1 = 0;
	save_user();
}
function userUpdate(proplist, val) {
	lookupSetOverride(U, proplist, val);
	save_user();
}
//#endregion user

//#region workUI
function ani_say(d, fSpeak) {
	if (isdef(fSpeak)) fSpeak(); // sayRandomVoice(spoken);
	mClass(d, 'onPulse');
	setTimeout(() => mRemoveClass(d, 'onPulse'), 500);
}
function show_click_vocab() {
	let cmd = 'click';
	let vocab = Goal.label;
	let voice = G.language;
	let dParent = dTitle;
	let fz = 36;
	let fSpeak = () => {
		Speech.say(cmd, 1, .8, .9, 'random', () => {
			Speech.say(vocab, 1, .8, .9, voice);
		}, 'E');
	};
	fSpeak();
	clearElement(dParent);
	let d = mDiv(dParent);
	mStyle(d, { margin: 15 })
	mClass(d, 'flexWrap');
	let msg = cmd + " " + `<b>${vocab.toUpperCase()}</b>`;
	if (nundef(fz)) fz = 36;
	let d1 = mText(msg, d, { fz: fz, display: 'inline-block' });
	let sym = symbolDict.speaker;
	let d2 = mText(sym.text, d, {
		fz: fz + 2, weight: 900, display: 'inline-block',
		family: sym.family, 'padding-left': 14
	});
	dFeedback = dInstruction = d;
	dInstruction.addEventListener('click', () => ani_say(dInstruction, () => {
		Speech.say(vocab, 1, .8, .9, voice);}));
}
function show_instruction_different(dParent, wlist, slist, styles) {
	wlist = [
		{ phrase: 'click', styles: { fg: 'red' } },
		{ phrase: 'tomato', styles: { fg: 'red' } },
	];
	slist = [
		{ phrase: 'click', voice: 'default', }
	];
	console.assert(isdef(Speech));
	clearElement(dParent);
	let d = mDiv(dParent);
	mStyle(d, { margin: 15 })
	mClass(d, 'flexWrap');
	let msg = cmd + " " + `<b>${text.toUpperCase()}</b>`;
	if (nundef(fz)) fz = 36;
	let d1 = mText(msg, d, { fz: fz, display: 'inline-block' });
	if (nundef(fz)) fz = 36;
	d1 = mText(written, d, { fz: fz, display: 'inline-block' });
	if (isSpoken) {
		let sym = symbolDict.speaker;
		let d2 = mText(sym.text, d, {
			fz: fz + 2, weight: 900, display: 'inline-block',
			family: sym.family, 'padding-left': 14
		});
	}
	dFeedback = dInstruction = d;
	spoken = isSpoken ? isdef(spoken) ? spoken : cmd + " " + text : null;
	dInstruction.addEventListener('click', () => aniInstruction(spoken));
	if (!isSpoken) return;
	sayRandomVoice(isdef(spoken) ? spoken : (cmd + " " + text), null, "david");
	let sym = symbolDict.speaker;
	let d2 = mText(sym.text, d, {
		fz: fz + 2, weight: 900, display: 'inline-block',
		family: sym.family, 'padding-left': 14
	});
	dFeedback = dInstruction = d;
	dInstruction.addEventListener('click', () => aniInstruction(spoken));
	if (isdef(spoken)) sayRandomVoice(spoken, spoken, voice);
}
function showSpoken() { }
function showWritten(cmd, vocab, dParent, styles) { }
function success_pic_goal(withComment = true) {
	let lang = G.language;
	if (withComment && G.spokenFeedback) {
		const comments = {
			E: ['YEAH!', 'Excellent!!!', 'CORRECT!', 'Great!!!'],
			D: ['gut', 'Sehr Gut!!!', 'richtig!!', 'Bravo!!!'],
			S: ['bien', 'muy bien!!!', 'eccelente!!', 'bravo!!!'],
			F: ['bien', 'tres bien!!!', 'fantastique!!', 'bravo!!!', 'excellent!!!'],
			C: ['优秀', '好的!!!', '正确的!!', 'Bravo!!!'],
		}[lang];
		say(chooseRandom(comments), lang);
	}
	if (isdef(Selected) && isdef(Selected.feedbackUI)) {
		let uilist;
		if (isdef(Selected.positiveFeedbackUI)) uilist = [Selected.positiveFeedbackUI];
		else uilist = isList(Selected.feedbackUI) ? Selected.feedbackUI : [Selected.feedbackUI];
		let sz = getRect(uilist[0]).h;
		for (const ui of uilist) {
			let d = markerSuccess();
			mpOver(d, ui, sz * (4 / 5), 'limegreen', 'segoeBlack');
		}
	}
}
//#endregion workUI

//#region start
function start() {
	PROJECTNAME = 'belinda';
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
//#endregion start

