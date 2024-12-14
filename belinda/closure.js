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
var PROJECTNAME = 'belinda';
var START_IN_MENU = false;
var DEFAULTUSERNAME = 'gul';
var Daat = {};
var DA = {};
var Items = {};
var FenPositionList;
var Syms;
var KeySets;
var Categories;
var ByGroupSubgroup;
var Dictionary;
var WordP; //, CatSets, SymbolDict, SInfo;
var DB;
var U;
var Userdata;
var Username;
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
var SelectedMenuKey; //var G, T, P, U, User, ????? , G...Game, T...Table, U...Userdata
var GC;
var GameCounter;
var F_END;
var F_MOVES;
var F_APPLYMOVE;
var F_UNDOMOVE;
var MAXIMIZER;
var MINIMIZER;
var SelectedMove;
var DMM = {};
var timit;
var ColorNames; //see base.js colors
var levelKeys = ['island', 'justice star', 'materials science', 'mayan pyramid', 'medieval gate',
	'great pyramid', 'meeple', 'smart', 'stone tower', 'trophy cup', 'viking helmet',
	'flower star', 'island', 'justice star', 'materials science', 'mayan pyramid',];
//#endregion globals

//#region base
const _overwriteMerge = (destinationArray, sourceArray, options) => sourceArray
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
function addIf(arr, el) {
	if (!arr.includes(el)) arr.push(el);
}
function addKeys(ofrom, oto) { for (const k in ofrom) if (nundef(oto[k])) oto[k] = ofrom[k]; return oto; }
function addKeyup(k, f) {
	if (nundef(DA.keyup)) DA.keyup = {};
	DA.keyup[k] = f;
}
function addSimpleProps(ofrom, oto = {}) { for (const k in ofrom) { if (nundef(oto[k]) && isLiteral(k)) oto[k] = ofrom[k]; } return oto; }
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
function arrChildren(elem) { return [...elem.children]; }
function arrCount(arr, func) { let filt = arr.filter(func); return filt.length; }
function arrFlatten(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			res.push(arr[i][j]);
		}
	}
	return res;
}
function arrLast(arr) { return arr.length > 0 ? arr[arr.length - 1] : null; }
function arrMax(arr) { return arr.reduce((m, n) => Math.max(m, n)); }
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
function arrReplaceAtInPlace(arr, index, val) { arr[index] = val; }
function arrSum(arr, props) { if (!isList(props)) props = [props]; return arr.reduce((a, b) => a + (lookup(b, props) || 0), 0); }
function arrSwap2d(arr, r1, c1, r2, c2) { let h = arr[r1][c1]; arr[r1][c1] = arr[r2][c2]; arr[r2][c2] = h; }
function arrTake(arr, n) { return takeFromStart(arr, n); }
function arrWithout(a, b) { return arrMinus(a, b); }
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
function capitalize(s) {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
}
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
function colorNameToHex(cName) { let key = cName.toLowerCase(); ensureColorNames(); return key in ColorNames ? ColorNames[key] : randomHexColor(); } //ok
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
function createElementFromHtml(s) { return createElementFromHTML(s); }
function createElementFromHTML(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();// '<div>halloooooooooooooo</div>';// htmlString.trim();
	return div.firstChild;
}
function csv2list(allText, hasHeadings = true) {
	var numHeadings = 11;  // or however many elements there are in each row
	if (!allText || nundef(allText)) return [];
	//console.log(allText)
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
function distance(x1, y1, x2, y2) { return Math.sqrt(dSquare({ x: x1, y: y1 }, { x: x2, y: y2 })); }
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
function errlog() { console.log('ERROR!', ...arguments); }
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
function filterByLength(w, min, max, allowSpaces = false) { return w.length <= max && w.length >= min && (allowSpaces || !w.includes(' ')); }
function filterDistinctLetters(s) {
	let arr = [];
	for (let i = 0; i < s.length; i++) {
		let ch = s[i];
		if (isLetter(ch) && !arr.includes(ch)) arr.push(ch);
	}
	return arr;
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
function findLongestWord(arr) { return arr[arrMinMax(arr, x => x.length).imax]; }
function findParentWithId(elem) { while (elem && !elem.id) { elem = elem.parentNode; } return elem; }
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
function format2Digits(i) { return (i < 10) ? "0" + i : i; }
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
function getBorderPropertyForDirection(dir) { return { 0: 'border-top', 1: 'border-right', 2: 'border-bottom', 3: 'border-left' }[dir]; }
function getCenter(elem) { let r = isdef(elem.x) ? elem : getRect(elem); return { x: (r.w) / 2, y: (r.h) / 2 }; }
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
function getFruid(pref = '') {
	const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	FRUIDCounter += 1;
	if (FRUIDCounter < alpha.length) return pref + alpha[FRUIDCounter];
	return pref + FRUIDCounter - alpha.length;
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
function iDiv(i) { return isdef(i.live) ? i.live.div : isdef(i.div) ? i.div : i; }
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
function iLabel(i) { return isdef(i.live) ? i.live.dLabel : isdef(i.dLabel) ? i.dLabel : null; }
function iMeasure(item, sizingOptions) {
	if (nundef(iDiv(item))) return;
	setRect(iDiv(item), valf(sizingOptions, { hgrow: true, wgrow: true }));
}
function infoToItem(x) { let item = { info: x, key: x.key }; item.id = iRegister(item); return item; }
function init_keyhandlers() {
	onkeyup = onkeyupHandler;
}
function iRegister(item, id) { let uid = isdef(id) ? id : getUID(); Items[uid] = item; return uid; }
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
function isCloseTo(n, m, acc = 10) { return Math.abs(n - m) <= acc + 1; }
function isdef(x) { return x !== null && x !== undefined; }
function isDict(d) { let res = (d !== null) && (typeof (d) == 'object') && !isList(d); return res; }
function isEmpty(arr) {
	return arr === undefined || !arr
		|| (isString(arr) && (arr == 'undefined' || arr == ''))
		|| (Array.isArray(arr) && arr.length == 0)
		|| Object.entries(arr).length === 0;
}
function isEmptyOrWhiteSpace(s) { return isEmpty(s.trim()); }
function isLetter(s) { return /^[a-zA-Z]$/i.test(s); }
function isList(arr) { return Array.isArray(arr); }
function isLiteral(x) { return isString(x) || isNumber(x); }
function isNumber(x) { return x !== ' ' && x !== true && x !== false && isdef(x) && (x == 0 || !isNaN(+x)); }
function isOverflown(element) {
	return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
function isString(param) { return typeof param == 'string'; }
function isSvg(elem) { return startsWith(elem.constructor.name, 'SVG'); }
function isVisible(elem) { // Where el is the DOM element you'd like to test for visibility
	if (isString(elem)) elem = document.getElementById(elem);
	let x = elem.style.flex;
	return (elem.style.display != 'none' || elem.offsetParent !== null) && (nundef(elem.style.flex) || !endsWith(elem.style.flex, '0%'));
}
function isWhiteSpace2(ch) {
	const alphanum = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
	return !alphanum.includes(ch);
}
function isWhiteSpaceString(s) { return isEmptyOrWhiteSpace(s); }
function jsCopy(o) {
	return JSON.parse(JSON.stringify(o));
}
function lastCond(arr, func) {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (func(arr[i])) return arr[i];
	}
	return null;
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
function makeRect(x, y, w, h) { let r = { x: x, y: y, w: w, h: h }; extendRect(r); return r; }
function makeUnitString(nOrString, unit = 'px', defaultVal = '100%') {
	if (nundef(nOrString)) return defaultVal;
	if (isNumber(nOrString)) nOrString = '' + nOrString + unit;
	return nOrString;
}
function mAppend(d, child) { d.appendChild(child); return child; }
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
function mCenterCenterFlex(d) { mCenterFlex(d, true, true, true); }
function mCenterFlex(d, hCenter = true, vCenter = false, wrap = true) {
	let styles = { display: 'flex' };
	if (hCenter) styles['justify-content'] = 'center';
	styles['align-content'] = vCenter ? 'center' : 'flex-start';
	if (wrap) styles['flex-wrap'] = 'wrap';
	mStyle(d, styles);
}
function mClass(d) {
	if (arguments.length == 2 && isList(arguments[1])) for (let i = 0; i < arguments[1].length; i++) d.classList.add(arguments[1][i]);
	else for (let i = 1; i < arguments.length; i++) d.classList.add(arguments[i]);
}
function mClassRemove(d) { for (let i = 1; i < arguments.length; i++) d.classList.remove(arguments[i]); }
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
function mergeOverride(base, drueber) { return _deepMerge(base, drueber, { arrayMerge: _overwriteMerge }); }
function mFlex(d, or = 'h') {
	d.style.display = 'flex';
	d.style.flexFlow = (or == 'v' ? 'column' : 'row') + ' ' + (or == 'w' ? 'wrap' : 'nowrap');
}
function mGrid(rows, cols, dParent, styles = {}) {
	let d = mDiv(dParent, styles);
	d.style.gridTemplateColumns = 'repeat(' + cols + ',1fr)';
	d.style.gridTemplateRows = 'repeat(' + rows + ',1fr)';
	d.style.display = 'inline-grid';
	d.style.padding = valf(styles.padding, styles.gap) + 'px';
	return d;
}
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
function mLinebreak(dParent, gap) {
	if (isString(dParent)) dParent = mBy(dParent);
	let d = mDiv(dParent);
	if (dParent.style.display == 'flex' || mHasClass(dParent, 'flexWrap')) mClass(d, 'linebreak');
	else d.innerHTML = '<br>';
	if (isdef(gap)) { d.style.minHeight = gap + 'px'; d.innerHTML = ' &nbsp; '; d.style.opacity = .2; }//return mLinebreak(dParent);}
	return d;
}
function mMoveBy(elem, dx, dy) { let rect = getRect(elem); mPos(elem, rect.x + dx, rect.y + dy); }
function mParent(elem) { return elem.parentNode; }
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
function mRemove(elem) { mDestroy(elem); }
function mRemoveChildrenFromIndex(dParent, i) { while (dParent.children[i]) { mRemove(dParent.children[i]); } }
function mRemoveClass(d) { for (let i = 1; i < arguments.length; i++) d.classList.remove(arguments[i]); }
function msElapsedSince(msStart) { return Date.now() - msStart; }
function mSize(d, w, h, unit = 'px', sizing) { if (nundef(h)) h = w; mStyle(d, { width: w, height: h }, unit); if (isdef(sizing)) setRect(d, sizing); }
function msNow() { return Date.now(); }
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
function mTitledDiv(title, dParent, outerStyles = {}, innerStyles = {}, id) {
	let d = mDiv(dParent, outerStyles);
	let dTitle = mDiv(d);
	dTitle.innerHTML = title;
	innerStyles.w = '100%';
	innerStyles.h = outerStyles.h - getRect(dTitle).h;
	let dContent = mDiv(d, innerStyles, id);
	return dContent;
}
function normalize(text, language) {
	if (isEmpty(text)) return '';
	text = text.toLowerCase().trim();
	if (language == 'D') {
		text = convertUmlaute(text);
	}
	return text;
}
function nundef(x) { return x === null || x === undefined; }
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
function percentOf(elem, percentW, percentH) {
	if (nundef(percentH)) percentH = percentW;
	if (nundef(percentW)) percentW = percentH = 100;
	let r = getRect(elem);
	return { w: r.w * percentW / 100, h: r.h * percentH / 100 };
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
function randomColor(s, l, a) { return isdef(s) ? randomHslaColor(s, l, a) : randomHexColor(); }
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
function randomName() { return chooseRandom(coin() ? GirlNames : BoyNames); }
function randomNumber(min = 0, max = 100) {
	return Math.floor(Math.random() * (max - min + 1)) + min; //min and max inclusive!
}
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
function resetUIDs() { UIDCounter = 0; FRUIDCounter = -1; }
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
function sameList(l1, l2) {
	if (l1.length != l2.length) return false;
	for (const s of l1) {
		if (!l2.includes(s)) return false;
	}
	return true;
}
function setCSSVariable(varName, val) {
	let root = document.documentElement;
	root.style.setProperty(varName, val);
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
function sortBy(arr, key) { arr.sort((a, b) => (a[key] < b[key] ? -1 : 1)); return arr; }
function sortByDescending(arr, key) { arr.sort((a, b) => (a[key] > b[key] ? -1 : 1)); return arr; }
function sortByFunc(arr, func) { arr.sort((a, b) => (func(a) < func(b) ? -1 : 1)); return arr; }
function sortNumbers(ilist) { ilist.sort(function (a, b) { return a - b }); return ilist; }
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
function toLetterArray(s) { return toLetterList(s); }
function toLetterList(s) { return [...s]; }
function toNoun(s) { return capitalize(s.toLowerCase()); }
function toRadian(deg) { return deg * 2 * Math.PI / 360; }
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
function union(lst1, lst2) {
	return [...new Set([...lst1, ...lst2])];
}
function valf(val, def) { return isdef(val) ? val : def; }
//#endregion base

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
function _deqSound() {
	let key = _qSound.shift();
	let url = _audioSources[key];
	_sndPlayer = new Audio(url);
	_sndPlayer.onended = whenSoundPaused;
	_sndPlayer.onloadeddata = () => { _loaded = true; _sndPlayer.play(); };
	_sndPlayer.load();
}
function _enqSound(key) { if (nundef(_qSound)) _qSound = []; _qSound.push(key); }
function pauseSound() {
	_qSound = [];
	if (_loaded && isdef(_sndPlayer)) {
		clearTimeout(TOSound);
		_sndPlayer.onended = null;
		_sndPlayer.onpause = whenSoundPaused;
		_sndPlayer.pause();
	}
}
function playSound(key, wait = true) {
	if (!wait) _qSound = [];
	_enqSound(key);
	if (_idleSound) { _idleSound = false; _deqSound(); }
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
function clearBadges() {
	removeBadges(null, 0);
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

//#region board
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
function _calc_hex_col_array(rows, cols) {
	let colarr = []; //how many cols in each row
	let even = rows % 2 == 0;
	for (let i = 0; i < rows; i++) {
		colarr[i] = cols;
		if (even && i < (rows / 2) - 1) cols += 1;
		else if (even && i > rows / 2) cols -= 1;
		else if (!even && i < (rows - 1) / 2) cols += 1;
		else if (!even || i >= (rows - 1) / 2) cols -= 1;
	}
	return colarr;
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
function bCreateEmpty(rows, cols) { return new Array(rows * cols).fill(null); }
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
function getCentersFromRowsCols(layout, rows, cols, wCell, hCell) {
	let info;
	if (layout == 'quad') { info = quadCenters(rows, cols, wCell, hCell); }
	else if (layout == 'hex') { info = hexCenters(rows, cols, wCell, hCell); }
	else if (layout == 'hex1') { info = hex1Centers(rows, cols, wCell, hCell); }
	else if (layout == 'circle') { info = circleCenters(rows, cols, wCell, hCell); }
	return info;
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
function isOppPiece(sym, plSym) { return sym && sym != plSym; }
function iToRowCol(idx, rows, cols) { let c = idx % cols; let r = (idx - c) / rows; return [r, c]; }
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
//#endregion board

//#region cards
var CSZ = 300;
function cBlank(dParent, styles = {}, id) {
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
function cRound(dParent, styles = {}, id) {
	styles.w = valf(styles.w, CSZ);
	styles.h = valf(styles.h, CSZ);
	styles.rounding = '50%';
	return cBlank(dParent, styles, id);
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
function mSymInDivShrink(sym, dParent, styles = { sz: CSZ / 5, fg: 'random' }) {
	dResult = mDiv(dParent);
	let ds = mSym(sym, dResult, styles);
	let scale = chooseRandom([.4, .7, 1, 1.25]);
	let [scaleX, scaleY] = [coin() ? scale : -scale, scale];
	if (coin()) ds.style.transform = `scale(${scaleX},${scaleY})`;
	return dResult;
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
function spotitFindCardSharingSymbol(card, key) {
	let id = firstCondDict(card.shares, x => x == key);
	return Items[id];
}
function spotitFindSymbol(card, key) {
	let k = firstCondDictKey(card.live, x => x == key);
	return iGetl(card, k);
}
//#endregion cards

//#region chess
var FLAG_HINT_ONLY = false;
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
var PieceVal = [0, 100, 325, 325, 550, 1000, 50000, 100, 325, 325, 550, 1000, 50000];
var PieceCol = [COLOURS.BOTH, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK];
var PiecePawn = [BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE];
var PieceKnight = [BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE];
var PieceKing = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE];
var PieceRookQueen = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE];
var PieceBishopQueen = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE];
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
				alert('no internet connection: Speech Recognition is not available! (error:' + ev.error + ')');
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
			S: 'Google español',
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
		if (nundef(this.voices)) {
			setTimeout(this.deq.bind(this), 500);
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
	DA.data_transport = null;
}
//#endregion test_ui_helpers

//#region time
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
		let dGraph = this.dGraph = mDiv(dParent, { align: 'left', w: szMaze.w, h: szMaze.h, bg: 'pink', maleft: 20 });//, opacity: 0 });
		this.mazeId = dGraph.id = getUID();
		let sb = this.sb = mDiv(dParent, { w: 40 }); mCenterCenterFlex(this.sb);
		hide(dGraph); hide(sb);
		this.items = this.createCellItems();
	}
	clear() { super.clear(); } //dTable.firstChild.remove(); } //mBy(this.mazeId).remove();}
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
		if (this.hasVisual) { show(this.dGraph); return; }
		this.addVisual(this.dGraph);
		this.storeCurrentPositions();
		this.addLayoutControls(this.sb, ['show', 'hide', 'prest', 'grid', 'klay', 'rand', 'euler', 'reset', 'store']);//,'grid','euler','prest');		
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
	let algorithm = g.copyState == true ? minimaxCopy : myMinimax;
	let val = algorithm(state, 0, -Infinity, Infinity, g.searchDepth, true);
	CCC = 0;
	callback(SelectedMove);
}
function minimaxCopy(node, depth, alpha, beta, maxDepth, maxim) {
	CCC += 1;
	if (depth >= maxDepth) return F_HEURISTIC(node, MAXIMIZER, MINIMIZER);
	let ec = F_END(node, depth); if (ec.reached) return ec.val;
	depth += 1;
	var move, result;
	var availableMoves = F_MOVES(node);
	let player = maxim ? MAXIMIZER : MINIMIZER;
	let nodeSafe = jsCopy(node);
	for (var i = 0; i < availableMoves.length; i++) {
		move = availableMoves[i];
		let node1 = jsCopy(node);
		console.assert(sameList(nodeSafe, node), 'HA!');
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
function canHumanAct() { return uiActivated && !auxOpen; }
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
		case 'solitaire': GC = PROJECTNAME.startsWith('bel') ? new ControllerSolitaire(G, U) : new ControllerSolitaireMinimal(G, U); break;
		case 'solo': GC = new ControllerTTT(G, U); break;
		case 'chess': GC = new ControllerChess(G, U); break;
		case 'c52': GC = new ControllerC52(G, U); break;
	}
	G.controller = GC;
	showGameTitle();
	if (immediate) GC.startGame();
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
class GameTimed extends Game {
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
	activate() { }
	onTimeup() {
		Selected = { isCorrect: false, correctUis: this.getSharedSymbols(), correctionDelay: this.items.length * 2000 };
		this.controller.evaluate.bind(this.controller)();
	}
}
function ensureDictionary() {
	if (nundef(Dictionary)) { Dictionary = { E: {}, S: {}, F: {}, C: {}, D: {} } };
	for (const k in Syms) {
		for (const lang of ['E', 'D', 'F', 'C', 'S']) {
			let w = Syms[k][lang];
			if (nundef(w)) continue;
			Dictionary[lang][w.toLowerCase()] = Dictionary[lang][w.toUpperCase()] = k;
		}
	}
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
	startRound() { }
	prompt() { }
	uiInteract() { }
	activateUi() { }
	deactivateUi() { }
	evaluate() {
		this.write('evaluate');
		return;
	}
}
class ControllerChess extends ControllerMinimal {
	constructor(g, user) { super(g, user); }
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
function aniInstruction(spoken, v) {
	if (isdef(spoken)) say(spoken, v);
	mClass(dInstruction, 'onPulse');
	setTimeout(() => mRemoveClass(dInstruction, 'onPulse'), 500);
}
function animate(elem, aniclass, timeoutms) {
	mClass(elem, aniclass);
	setTimeout(() => mRemoveClass(elem, aniclass), timeoutms);
}
function animateColorScale(elem, color = 'green', scale = 1.5, timeoutms = 2000, aniClass = 'scaleInColor') {
	setCSSVariable('--aniColor', color);
	setCSSVariable('--aniScale', scale);
	mClass(elem, aniClass);
	setTimeout(() => mRemoveClass(elem, aniClass), timeoutms);
}
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
		} else mpOver(markerSuccess(), ui, sz * (4 / 5), 'limegreen', 'segoeBlack');
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
function fillCharInput(inp, ch) {
	let d = iDiv(inp);
	d.innerHTML = ch;
	mRemoveClass(d, 'blink');
}
function fleetingMessage(msg, styles, fade = false, ms = 3000) {
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
function getInputStringOfChar(inp) { return iDiv(inp).innerHTML; }
function getInputStringOfWord(winp) { return winp.charInputs.map(x => iDiv(x).innerHTML).join(''); }
function getInputWords() { return Goal.words.map(x => getInputStringOfWord(x)); }
function getInputWordString(sep = ' ') { return getInputWords().join(sep); }
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
function getQChars() {
	return Goal.qCharIndices.map(x => Goal.chars[x]);
}
function getQWords() { return Goal.qWordIndices.map(x => Goal.words[x]); }
function getStandardFz(wi, hi, showPic, showLabels, wLongest) {
	let hText = showPic ? hi / 3 : hi;
	return showLabels ? idealFontSize(wLongest, wi, hText) : 0;
}
function getStandardFzPic(wi, hi, showLabels) { return Math.min(wi * .8, showLabels ? hi * .6 : hi * .75); }
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
function isVariableColor(c) { return c == 'random' || c == 'randPastel' || c == 'randDark' || c == 'randLight' || isList(c); }
function isYesNo(choices) { return !firstCond(choices, x => !(['yes', 'no'].includes(x.text))); }
function labelPrepper(val) { return `<b>${val.toUpperCase()}</b>`; }
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
function makeExpSequence() {
	G.operand = randomNumber(G.minNum, G.maxNum);
	G.op = chooseRandom(G.ops); //G.op ist jetzt ein key in OPS
	G.step = G.op == 'minus' ? randomNumber(0, G.operand) : randomNumber(G.minFactor, G.maxFactor); // > upper ? 0 : randomNumber(G.minFactor, upper); // chooseRandom(G.steps);
	G.oop = OPS[G.op];
	G.result = G.oop.f(G.operand, G.step);
	G.seq = [G.operand, G.oop.wr, G.step, '=', G.result];//,'=',13]; // _createNumberSequence(G.seqLen, G.minNum, G.maxNum, G.step, G.op);
	return G.seq;
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
	if (G.silent) showFleetingMessage('Try Again!', 0, {}, true);
	else sayRandomVoice('try again!');
}
function scrambleInputs(d) {
	let children = Array.from(d.children);
	shuffle(children);
	for (const ch of children) {
		mAppend(d, ch);
	}
}
function setBackgroundColor(elem, color) { if (nundef(elem)) elem = mBy('md').parentNode; mStyle(elem, { bg: getColorDictColor(isdef(color) ? color : G.color) }); }
function setGoal(index) {
	if (nundef(index)) {
		let rnd = G.numPics < 2 ? 0 : randomNumber(0, G.numPics - 2);
		if (G.numPics >= 2 && rnd == lastPosition && coin(70)) rnd = G.numPics - 1;
		index = rnd;
	}
	lastPosition = index;
	Goal = Pictures[index];
}
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
	if (isdef(spoken)) say(spoken, isdef(voice) ? voice : G.lang == 'E' ? 'random' : G.lang); //sayRandomVoice(spoken, spoken, voice);
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
	for (const ui of Selected.correctUis) { mClass(ui, anim); }
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
function showScore(showScoreString = true) {
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
function showStats(showScoreString = true) {
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
		let wr = 'click ' + `<b>${Goal.label}</b>`;
		let sp = `click ${Goal.label}`;
		show_instruction(wr, dTitle, sp);
		showMouse();
		GC.activateUi.bind(GC)(); //activateUi();
	}, secs * 1000);
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
function convertToGraphElements(g1, house) {
	let vertices = house.rooms.map(x => Items[x]);
	let doors = [];
	for (const v of vertices) {
		v.center = getCenter(v.rect);
		v.center.x += v.rect.l - house.rect.l;
		v.center.y += v.rect.t - house.rect.t;
		g1.addNode(v, v.center);
		doors = union(doors, v.doors);
	}
	let centers = g1.getNodes().map(x => x.data('center'));
	g1.storePositions('prest', centers);
	let edges = doors.map(x => Items[x]).filter(x => x.rooms.length == 2);
	for (const e of edges) {
		if (e.rooms.length < 2) continue;
		e.source = e.rooms[0];
		e.target = e.rooms[1];
		g1.addEdge(e.source, e.target, e);
	}
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
function getDoorId(r1, r2) { return r1 + '_' + r2 + '_' + r1; }
function getLayoutSample(n) {
	if (G.level > 4) {
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
function isEastRoom(house, room) { return isCloseTo(room.rect.r, house.rect.r, house.wallWidth); }
function isNorthRoom(house, room) { return isCloseTo(room.rect.t, house.rect.t, house.wallWidth); }
function isSouthRoom(house, room) { return isCloseTo(room.rect.b, house.rect.b, house.wallWidth); }
function isWestRoom(house, room) { return isCloseTo(room.rect.l, house.rect.l, house.wallWidth); }
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
function setPositionData(g1) {
	let ids = g1.getNodeIds();
	for (const id of ids) {
		let pos = g1.getProp(id, 'center');
		g1.setPosition(id, pos.x, pos.y);
	}
	g1.reset();
}
//#endregion house

//#region item
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
function addLabel(item, label, styles) {
	item.label = label;
	let div = iDiv(item);
	if (isdef(item.live.dLabel)) mRemove(item.live.dLabel);
	let dLabel = item.live.dLabel = mDiv(div, styles, null, label);
	mCenterFlex(div, true, true);
	mStyle(div, { 'vertical-align': 'top' });
	return dLabel;
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
function evToItem(ev) { let id = evToClosestId(ev); return isdef(id) ? Items[id] : null; }
function evToItemC(ev) { ev.cancelBubble = true; return evToItem(ev); }
function findItemFromEvent(items, ev) { return evToItemC(ev); }
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
function genKeys(n, options) {
	let [maxlen, lang, keySet] = [options.maxlen, valf(options.language, 'E'), valf(options.keySet, 'all')];
	let cond = isdef(maxlen) ? ((x) => x[lang].length <= maxlen) : null;
	let keys = _getKeysCond(n, cond, keySet);
	return keys;
}
function getArea(dParent, styles, id) {
	let defStyles = { display: 'inline-block' };
	styles = mergeOverride(defStyles, styles);
	let d = mDiv(dParent, styles, id);
	return d;
}
function getItem(k) { return infoToItem(Syms[k]); }
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
function modLabel(item, newLabel, styles) {
	let dLabel = iLabel(item);
	dLabel.innerHTML = newLabel;
	mStyle(dLabel, styles);
	item.label = newLabel;
	return dLabel;
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
//#endregion legacy

//#region letter
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
function isWord(w) { return lookup(Dictionary, [G.language, w]); }//isdef(Dictionary[G.language][w]); }
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
function stopBlinking(item) { if (isdef(item)) { item.isBlinking = false; mRemoveClass(iDiv(item), 'blink'); } }
//#endregion letter

//#region math
function fractionConvert(wp, diop) {
	let n = wp.result.number;
	let t = typeof n;
	if (isFractionType(n)) {
		wp.isFractionResult = true;
		wp.result.text = getTextForFraction(n.n, n.d);
	}
}
function getOperand(type) { let x = OPS[type]; return randomNumber(Math.max(2, x.min), x.max); }
function getRandomWP(min = 0, max = 35) { let n = randomNumber(min, max); console.log('wp', n); return jsCopy(WordP[n]); }// chooseRandom(WordP.slice(min,max));}
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
function isFractionType(x) { return isDict(x) && isdef(x.n) && isdef(x.d); }
function replaceSol(sol, diop) {
	let rhs = stringBefore(sol, '=');
	let type = rhs.includes('*') ? rhs.includes('R') ? 'div' : 'mult' : rhs.includes('R') ? 'minus' : 'plus';
	let i = 0;
	while (i < rhs.length) {
		if (rhs[i] == 'R') { diop.R = getOperand(type); i += 1; }
		else if (rhs[i] == 'r' && !isLetter(rhs[i + 1])) { if (nundef(diop.r)) diop.r = getOperand(type); i += 1; } //zwischenergebnis
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
function hideShield() { setTimeout(() => { mBy('dShield').style.display = 'none' }, 500); }
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
function onClickNextGame() { setNextGame(); GC.startGame(); }
function onClickTemple() {
	openAux();
	hide('dTemple');
	createMenuUi(dAux, U.avGames, onClickMenuItem);
}
function openAux() { interrupt(); show(dAux); show('dGo'); }
//#endregion onClick

//#region scoring
function initScore() { resetScore(); }//Score = { gameChange: true, levelChange: true, nTotal: 0, nCorrect: 0, nCorrect1: 0, nPos: 0, nNeg: 0 }; }
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
	if (!PROJECTNAME.startsWith('bel')) mStyle(dLineTitle, { matop: 5 });
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
function showUsernameOnScreen(isEditable = true) {
	let uiName = 'spUser';
	let dUser = mBy(uiName);
	if (isdef(dUser)) return;
	dUser = isEditable ? editableUsernameUi(dLineTopLeft) : mText(Username, dLineTopLeft);
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

