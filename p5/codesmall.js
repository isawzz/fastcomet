

function addKeys(ofrom, oto) { for (const k in ofrom) if (nundef(oto[k])) oto[k] = ofrom[k]; return oto; }
function alphaToHex(a01) {
	a01 = Math.round(a01 * 100) / 100;
	var alpha = Math.round(a01 * 255);
	var hex = (alpha + 0x10000).toString(16).slice(-2).toUpperCase();
	return hex;
}
function applyOpts(d, opts = {}) {
	const aliases = {
		classes: 'className',
		inner: 'innerHTML',
		html: 'innerHTML',
		w: 'width',
		h: 'height',
	};
	for (const opt in opts) {
		let name = valf(aliases[opt], opt), val = opts[opt];
		if (['style', 'tag', 'innerHTML', 'className', 'checked', 'value'].includes(name) || name.startsWith('on')) d[name] = val;
		else d.setAttribute(name, val);
	}
}
function arrCycle(arr, count) { return arrRotate(arr, count); }
function arrLast(arr) { return arr.length > 0 ? arr[arr.length - 1] : null; }
function arrNoDuplicates(arr) { return [...new Set(arr)]; }
function arrRange(from = 1, to = 10, step = 1) { let res = []; for (let i = from; i <= to; i += step)res.push(i); return res; }
function arrRemovip(arr, el) {
	let i = arr.indexOf(el);
	if (i > -1) arr.splice(i, 1);
	return i;
}
function arrRotate(arr, count) {
	var unshift = Array.prototype.unshift,
		splice = Array.prototype.splice;
	var len = arr.length >>> 0, count = count >> 0;
	let arr1 = jsCopy(arr);
	unshift.apply(arr1, splice.call(arr1, count % len, len));
	return arr1;
}
function arrShuffle(arr) { if (isEmpty(arr)) return []; else return fisherYates(arr); }
function assertion(cond) {
	if (!cond) {
		let args = [...arguments];
		for (const a of args) {
			console.log('\n', a);
		}
		throw new Error('TERMINATING!!!')
	}
}
function calculateSecondsDifference(timestamp1, timestamp2) {
	const differenceInMilliseconds = Math.abs(timestamp1 - timestamp2);
	const differenceInSeconds = Math.ceil(differenceInMilliseconds / 1000); // (1000 * 60));
	return differenceInSeconds;
}
function capitalize(s) {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
}
function clearTimeouts() { for (const tok in TO) { clearTimeout(TO[tok]); TO[tok] = null; } }
function coin(percent = 50) { return Math.random() * 100 < percent; }
function colorFrom(c, a) {
	c = colorToHex79(c);
	if (nundef(a)) return c;
	return c.substring(0, 7) + (a < 1 ? alphaToHex(a) : '');
}
function colorHex45ToHex79(c) {
	let r = c[1];
	let g = c[2];
	let b = c[3];
	if (c.length == 5) return `#${r}${r}${g}${g}${b}${b}${c[4]}${c[4]}`;
	return `#${r}${r}${g}${g}${b}${b}`;
}
function colorHex79ToRgbArray(c) {
	let r = 0, g = 0, b = 0;
	r = parseInt(c[1] + c[2], 16);
	g = parseInt(c[3] + c[4], 16);
	b = parseInt(c[5] + c[6], 16);
	if (c.length == 7) return [r, g, b];
	let a = parseInt(c[7] + c[8], 16) / 255;
	return [r, g, b, a];
}
function colorHexToRgbArray(c) {
	if (c.length < 7) c = colorHex45ToHex79(c);
	return colorHex79ToRgbArray(c);
}
function colorHexToRgbObject(c) {
	let arr = colorHexToRgbArray(c);
	let o = { r: arr[0], g: arr[1], b: arr[2] };
	if (arr.length > 3) o.a = arr[3];
	return o;
}
function colorHsl01ArgsToHex79(h, s, l, a) {
	let rgb = colorHsl01ArgsToRgbArray(h, s, l, a);
	let res = colorRgbArgsToHex79(rgb[0], rgb[1], rgb[2], rgb.length > 3 ? rgb[3] : null);
	return res;
}
function colorHsl01ArgsToRgbArray(h, s, l, a) {
	let r, g, b;
	function hue2rgb(p, q, t) {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1 / 6) return p + (q - p) * 6 * t;
		if (t < 1 / 2) return q;
		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		return p;
	}
	if (s === 0) {
		r = g = b = l;
	} else {
		let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		let p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}
	let res = [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	if (nundef(a) || a == 1) return res;
	res.push(a);
	return res;
}
function colorHsl01ObjectToHex79(c) {
	if (isdef(c.a)) return colorHsl01ArgsToHex79(c.h, c.s, c.l, c.a);
	return colorHsl01ArgsToHex79(c.h, c.s, c.l);
}
function colorHsl360ArgsToHex79(h, s, l, a) {
	let o01 = colorHsl360ArgsToHsl01Object(h, s, l, a);
	return colorHsl01ArgsToHex79(o01.h, o01.s, o01.l, o01.a)
}
function colorHsl360ArgsToHsl01Object(h, s, l, a) {
	let res = { h: h / 360, s: s / 100, l: l / 100 };
	if (isdef(a)) res.a = a;
	return res;
}
function colorHsl360ObjectToHex79(c) {
	let o01 = colorHsl360ArgsToHsl01Object(c.h, c.s, c.l, c.a);
	return colorHsl01ObjectToHex79(o01)
}
function colorHsl360StringToHex79(c) {
	let o360 = colorHsl360StringToHsl360Object(c);
	let o01 = colorHsl360ArgsToHsl01Object(o360.h, o360.s, o360.l, o360.a);
	return colorHsl01ObjectToHex79(o01);
}
function colorHsl360StringToHsl360Object(c) {
	let [h, s, l, a] = c.match(/\d+\.?\d*/g).map(Number);
	if (isdef(a) && a > 1) a /= 10;
	return { h, s, l, a };
}
function colorIdealText(bg, grayPreferred = false, nThreshold = 105) {
	let rgb = colorHexToRgbObject(colorFrom(bg));
	let r = rgb.r;
	let g = rgb.g;
	let b = rgb.b;
	var bgDelta = r * 0.299 + g * 0.587 + b * 0.114;
	var foreColor = 255 - bgDelta < nThreshold ? 'black' : 'white';
	if (grayPreferred) foreColor = 255 - bgDelta < nThreshold ? 'dimgray' : 'snow';
	return foreColor;
}
function colorIsHex79(c) { return isString(c) && c[0] == '#' && (c.length == 7 || c.length == 9); }
function colorRgbArgsToHex79(r, g, b, a) {
	r = Math.round(r).toString(16).padStart(2, '0');
	g = Math.round(g).toString(16).padStart(2, '0');
	b = Math.round(b).toString(16).padStart(2, '0');
	if (nundef(a)) return `#${r}${g}${b}`;
	a = Math.round(a * 255).toString(16).padStart(2, '0');
	return `#${r}${g}${b}${a}`;
}
function colorRgbArrayToHex79(arr) { return colorRgbArgsToHex79(...arr); }
function colorRgbStringToHex79(c) {
	let parts = c.split(',');
	let r = firstNumber(parts[0]);
	let g = firstNumber(parts[1]);
	let b = firstNumber(parts[2]);
	let a = parts.length > 3 ? Number(stringBefore(parts[3], ')')) : null;
	return colorRgbArgsToHex79(r, g, b, a);
}
function colorToHex79(c) {
	if (colorIsHex79(c)) return c;
	ColorDi = M.colorByName;
	let tString = isString(c), tArr = isList(c), tObj = isDict(c);
	if (tString && c[0] == '#') return colorHex45ToHex79(c);
	else if (tString && isdef(ColorDi) && lookup(ColorDi, [c])) return ColorDi[c].hex;
	else if (tString && c.startsWith('rand')) {
		let spec = capitalize(c.substring(4));
		let func = window['color' + spec];
		c = isdef(func) ? func() : rColor();
		assertion(colorIsHex79(c), 'ERROR coloFrom!!!!!!!!! (rand)');
		return c;
	} else if (tString && (c.startsWith('linear') || c.startsWith('radial'))) return c;
	else if (tString && c.startsWith('rgb')) return colorRgbStringToHex79(c);
	else if (tString && c.startsWith('hsl')) return colorHsl360StringToHex79(c);
	else if (tString && c == 'transparent') return '#00000000';
	else if (tString && c == 'inherit') return c;
	else if (tString) { ensureColorDict(); let c1 = ColorDi[c]; assertion(isdef(c1), `UNKNOWN color ${c}`); return c1.hex; }
	else if (tArr && (c.length == 3 || c.length == 4) && isNumber(c[0])) return colorRgbArrayToHex79(c);
	else if (tArr) return colorToHex79(rChoose(tArr));
	else if (tObj && 'h' in c && c.h > 1) { return colorHsl360ObjectToHex79(c); } //console.log('!!!');
	else if (tObj && 'h' in c) return colorHsl01ObjectToHex79(c);
	else if (tObj && 'r' in c) return colorRgbArgsToHex79(c.r, c.g, c.b, c.a);
	assertion(false, `NO COLOR FOUND FOR ${c}`);
}
function colorTrans(cAny, alpha = 0.5) { return colorFrom(cAny, alpha); }
function detectSessionType() {
	let loc = window.location.href;
	DA.sessionType =
		loc.includes('moxito.online') ? 'fastcomet' :
			loc.includes('vidulus') ? 'vps' :
				loc.includes('telecave') ? 'telecave' : loc.includes('8080') ? 'php'
					: loc.includes(':40') ? 'nodejs'
						: loc.includes(':60') ? 'flask' : 'live';
	return DA.sessionType;
}
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
function endsWith(s, sSub) { let i = s.indexOf(sSub); return i >= 0 && i == s.length - sSub.length; }
function ensureColorDict() {
	if (isdef(ColorDi)) return;
	ColorDi = {};
	let names = getColorNames();
	let hexes = getColorHexes();
	for (let i = 0; i < names.length; i++) {
		ColorDi[names[i].toLowerCase()] = { hex: '#' + hexes[i] };
	}
	const newcolors = {
		black: { hex: '#000000', D: 'schwarz' },
		blue: { hex: '#0000ff', D: 'blau' },
		BLUE: { hex: '#4363d8', E: 'blue', D: 'blau' },
		BLUEGREEN: { hex: '#004054', E: 'bluegreen', D: 'blaugrün' },
		BROWN: { hex: '#96613d', E: 'brown', D: 'braun' },
		deepyellow: { hex: '#ffed01', E: 'yellow', D: 'gelb' },
		FIREBRICK: { hex: '#800000', E: 'darkred', D: 'rotbraun' },
		gold: { hex: 'gold', D: 'golden' },
		green: { hex: 'green', D: 'grün' },
		GREEN: { hex: '#3cb44b', E: 'green', D: 'grün' },
		grey: { hex: 'grey', D: 'grau' },
		lightblue: { hex: 'lightblue', D: 'hellblau' },
		LIGHTBLUE: { hex: '#42d4f4', E: 'lightblue', D: 'hellblau' },
		lightgreen: { hex: 'lightgreen', D: 'hellgrün' },
		LIGHTGREEN: { hex: '#afff45', E: 'lightgreen', D: 'hellgrün' },
		lightyellow: { hex: '#fff620', E: 'lightyellow', D: 'gelb' },
		NEONORANGE: { hex: '#ff6700', E: 'neonorange', D: 'neonorange' },
		NEONYELLOW: { hex: '#efff04', E: 'neonyellow', D: 'neongelb' },
		olive: { hex: 'olive', D: 'oliv' },
		OLIVE: { hex: '#808000', E: 'olive', D: 'oliv' },
		orange: { hex: 'orange', D: 'orange' },
		ORANGE: { hex: '#f58231', E: 'orange', D: 'orange' },
		PINK: { hex: 'deeppink', D: 'rosa' },
		pink: { hex: 'pink', D: 'rosa' },
		purple: { hex: 'purple', D: 'lila' },
		PURPLE: { hex: '#911eb4', E: 'purple', D: 'lila' },
		red: { hex: 'red', D: 'rot' },
		RED: { hex: '#e6194B', E: 'red', D: 'rot' },
		skyblue: { hex: 'skyblue', D: 'himmelblau' },
		SKYBLUE: { hex: 'deepskyblue', D: 'himmelblau' },
		teal: { hex: '#469990', D: 'blaugrün' },
		TEAL: { hex: '#469990', E: 'teal', D: 'blaugrün' },
		transparent: { hex: '#00000000', E: 'transparent', D: 'transparent' },
		violet: { hex: 'violet', E: 'violet', D: 'violett' },
		VIOLET: { hex: 'indigo', E: 'violet', D: 'violett' },
		white: { hex: 'white', D: 'weiss' },
		yellow: { hex: 'yellow', D: 'gelb' },
		yelloworange: { hex: '#ffc300', E: 'yellow', D: 'gelb' },
		YELLOW: { hex: '#ffe119', E: 'yellow', D: 'gelb' },
	};
	for (const k in newcolors) {
		let cnew = newcolors[k];
		if (cnew.hex[0] != '#' && isdef(ColorDi[k])) cnew.hex = ColorDi[k].hex;
		ColorDi[k] = cnew;
	}
}
function evNoBubble(ev) { ev.preventDefault(); ev.stopPropagation(); }
function evToAttr(ev, attr) {
	let elem = ev.target;
	let val = null;
	while (nundef(val) && isdef(elem)) {
		val = elem.getAttribute(attr);
		if (isdef(val)) return val;
		elem = elem.parentNode;
	}
	return null;
}
function firstCond(aos, func) {
	//return first elem that fulfills condition
	if (nundef(aos)) return null;
	else if (isDict(aos)) for (const k in aos) { if (func(k) || func(aos[k])) return k; }
	else for (const a of aos) { if (func(a)) return a; }
	return null;
}
function firstNCond(n, arr, func) {
	//return first n elements that fulfills condition
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
function fisherYates(arr) {
	if (arr.length == 2 && coin()) { return arr; }
	var rnd, temp;
	let last = arr[0];
	for (var i = arr.length - 1; i; i--) {
		rnd = Math.random() * i | 0;
		temp = arr[i];
		arr[i] = arr[rnd];
		arr[rnd] = temp;
	}
	return arr;
}
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
}
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
}
function getDateTimeData(from, to) {
	let dt = new Date(from);
	const year = dt.getFullYear();
	const month = String(dt.getMonth() + 1).padStart(2, '0'); // Months are 0-based
	const day = String(dt.getDate()).padStart(2, '0'); // Add leading zero if needed
	const hour = String(dt.getHours()).padStart(2, '0'); // Get hours (24-hour format)
	const minute = String(dt.getMinutes()).padStart(2, '0'); // Get minutes
	const second = String(dt.getSeconds()).padStart(2, '0'); // Get minutes
	let dateSort = `${year}.${month}.${day}`;
	let date = `${day}.${month}.${year}`;
	let time = `${hour}:${minute}:${second}`;
	let secs = calculateSecondsDifference(from, to);
	return { dt, year, month, day, hour, minute, second, date, time, secs, dateSort };
}
function getInnermostTextString(div) {
	if (!div || !div.children.length) {
		return div && div.innerHTML.trim() && !/<[^>]+>/.test(div.innerHTML) ? div.innerHTML.trim() : null;
	}
	for (let child of div.children) {
		let result = getInnermostTextString(child);
		if (result) return result;
	}
	return null;
}
function getKeyLists() {
	if (isdef(M.byKeyType)) return M.byKeyType;
	let types = getKeyTypes();
	let di = {};
	let keys = M.symKeys = Object.keys(M.superdi);
	for (const k of keys) {
		let o = M.superdi[k];
		for (const t of types) if (isdef(o[t])) lookupAddToList(di, [t], k);
	}
	di.plain = jsCopy(commandWords);
	M.byKeyType = di;
	return di;
}
function getKeyTypes() { return ['plain', 'fa', 'ga', 'fa6', 'img', 'text', 'photo']; }
function getListAndDictsForDicolors() {
	let bucketlist = Object.keys(M.dicolor);
	bucketlist = arrCycle(bucketlist, 8);
	let dicolorlist = [];
	for (const bucket of bucketlist) {
		let list = dict2list(M.dicolor[bucket]);
		for (const c of list) {
			let o = w3color(c.value);
			o.name = c.id;
			o.hex = c.value;
			o.bucket = bucket;
			dicolorlist.push(o);
		}
	}
	let byhex = list2dict(dicolorlist, 'hex');
	let byname = list2dict(dicolorlist, 'name');
	return [dicolorlist, byhex, byname];
}
function getNow() { return Date.now(); }
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
	let r = { x: res.left, y: res.top, w: res.width, h: res.height };
	addKeys({ l: r.x, t: r.y, r: r.x + r.w, b: r.y + r.h }, r);
	return r;
}
function getStyleProp(elem, prop) { return getComputedStyle(elem).getPropertyValue(prop); }
function isDict(d) { let res = (d !== null) && (typeof (d) == 'object') && !isList(d); return res; }
function isEmpty(arr) {
	return arr === undefined || !arr
		|| (isString(arr) && (arr == 'undefined' || arr == ''))
		|| (Array.isArray(arr) && arr.length == 0)
		|| Object.entries(arr).length === 0;
}
function isKeyDown(key) { return lookup(DA.keysToCheck, [key]); }
function isList(arr) { return Array.isArray(arr); }
function isNumber(x) { return x !== ' ' && x !== true && x !== false && isdef(x) && (x == 0 || !isNaN(+x)); }
function isString(param) { return typeof param == 'string'; }
function isdef(x) { return x !== null && x !== undefined && x !== 'undefined'; }
function jsCopy(o) { return JSON.parse(JSON.stringify(o)); }
function last(arr) {
	return arr.length > 0 ? arr[arr.length - 1] : null;
}
function lastCond(arr, func) {
	if (nundef(arr)) return null;
	for (let i = arr.length - 1; i >= 0; i--) { let a = arr[i]; if (func(a)) return a; }
	return null;
}
function list2dict(arr, keyprop = 'id', uniqueKeys = true) {
	let di = {};
	for (const a of arr) {
		let key = typeof (a) == 'object' ? a[keyprop] : a;
		if (uniqueKeys) lookupSet(di, [key], a);
		else lookupAddToList(di, [key], a);
	}
	return di;
}
async function loadAssetsStatic() {
	if (nundef(M)) M = {};
	M = await loadStaticYaml('y/m.yaml');
	M.superdi = await loadStaticYaml('y/superdi.yaml');
	M.details = await loadStaticYaml('y/details.yaml');
	M.config = await loadStaticYaml('y/config.yaml');
	loadColors();
	M.users = {};
	for (const uname of M.config.users) {
		M.users[uname] = await loadStaticYaml(`y/users/${uname}.yaml`);
	}
	let [di, byColl, byFriendly, byCat, allImages] = [M.superdi, {}, {}, {}, {}];
	for (const k in di) {
		let o = di[k];
		for (const cat of o.cats) lookupAddIfToList(byCat, [cat], k);
		for (const coll of o.colls) lookupAddIfToList(byColl, [coll], k);
		lookupAddIfToList(byFriendly, [o.friendly], k)
		if (isdef(o.img)) {
			let fname = stringAfterLast(o.img, '/')
			allImages[k] = { fname, path: o.img, key:k };
		}
		if (isdef(o.photo)) {
			let fname = stringAfterLast(o.photo, '/')
			allImages[k+'_photo'] = { fname, path: o.photo, key:k };
		}
	}
	M.allImages = allImages;
	M.byCat = byCat;
	M.byCollection = byColl;
	M.byFriendly = byFriendly;
	M.categories = Object.keys(byCat); M.categories.sort();
	M.collections = Object.keys(byColl); M.collections.sort();
	M.names = Object.keys(byFriendly); M.names.sort();
	[M.colorList, M.colorByHex, M.colorByName] = getListAndDictsForDicolors();
}
function loadColors(bh = 18, bs = 20, bl = 20) {
	if (nundef(M.dicolor)) {
		M.dicolor = dicolor;
		[M.colorList, M.colorByHex, M.colorByName] = getListAndDictsForDicolors();
		M.colorNames = Object.keys(M.colorByName); M.colorNames.sort();
	}
	let list = M.colorList;
	for (const x of list) {
		let fg = colorIdealText(x.hex);
		x.fg = fg;
		x.sorth = Math.round(x.hue / bh) * bh;
		x.sortl = Math.round(x.lightness * 100 / bl) * bl;
		x.sorts = Math.round(x.sat * 100 / bs) * bs;
	}
	list = sortByMultipleProperties(list, 'fg', 'sorth', 'sorts', 'sortl', 'hue');
	return list;
}
async function loadStaticYaml(path) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : '../';
	let ditext = await fetch(server + path).then(res => res.text());
	return jsyaml.load(ditext);
}
function lookup(dict, keys) {
	if (nundef(dict)) return null;
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
	return lookupAddToList(dict, keys, val);
}
function lookupAddToList(dict, keys, val) {
	let d = dict;
	let ilast = keys.length - 1;
	let i = 0;
	for (const k of keys) {
		if (i == ilast) {
			if (nundef(k)) {
				console.assert(false, 'lookupAddToList: last key indefined!' + keys.join(' '));
				return null;
			} else if (isList(d[k])) {
				d[k].push(val);
			} else {
				d[k] = [val];
			}
			return d[k];
		}
		if (nundef(k)) continue;
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
		if (nundef(k)) continue;
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
				return null;
			} else {
				d[k] = val;
			}
			return d[k];
		}
		if (nundef(k)) continue;
		if (nundef(d[k])) d[k] = {};
		d = d[k];
		i += 1;
	}
	return d;
}
function mAppend(d, child) { toElem(d).appendChild(child); return child; }
function mAreas(dParent, areas, gridCols, gridRows) {
	mClear(dParent); mStyle(dParent, { padding: 0 })
	let names = arrNoDuplicates(toWords(areas));
	let dg = mDom(dParent);
	for (const name of names) {
		let d = mDom(dg, { family: 'opensans' }, { id: name });
		d.style.gridArea = name;
	}
	mStyle(dg, { display: 'grid', gridCols, gridRows, h: '100%' });
	dg.style.gridTemplateAreas = areas;
	return names;
}
function mBy(id, what, elem) {
	if (nundef(elem)) elem = document;
	if (nundef(what)) return elem.getElementById(id);
	switch (what) {
		case 'class': return Array.from(elem.getElementsByClassName(id)); break;
		case 'tag': return Array.from(elem.getElementsByTagName(id)); break;
		case 'name': return Array.from(elem.getElementsByName(id)); break;
		case 'query': return Array.from(elem.querySelectorAll(id)); break;
		default: return elem.getElementById(id);
	}
}
function mClass(d) {
	d = toElem(d);
	if (arguments.length == 2) {
		let arg = arguments[1];
		if (isString(arg) && arg.indexOf(' ') > 0) { arg = [toWords(arg)]; }
		else if (isString(arg)) arg = [arg];
		if (isList(arg)) {
			for (let i = 0; i < arg.length; i++) {
				d.classList.add(arg[i]);
			}
		}
	} else for (let i = 1; i < arguments.length; i++) d.classList.add(arguments[i]);
}
function mClassRemove(d) { d = toElem(d); for (let i = 1; i < arguments.length; i++) d.classList.remove(arguments[i]); }
function mClassToggle(d, classes) {
	let wlist = toWords(classes);
	d = toElem(d);
	for (const c of wlist) if (d.classList.contains(c)) mClassRemove(d, c); else mClass(d, c);
}
function mClear(d) {
	toElem(d).innerHTML = '';
}
function mDom(dParent, styles = {}, opts = {}) {
	let tag = valf(opts.tag, 'div');
	let d = document.createElement(tag);
	if (isdef(dParent)) mAppend(dParent, d);
	if (tag == 'textarea') styles.wrap = 'hard';
	mStyle(d, styles);
	applyOpts(d, opts);
	return d;
}
function mGetStyle(elem, prop) {
	let val;
	elem = toElem(elem);
	if (prop == 'bg') { val = getStyleProp(elem, 'background-color'); if (isEmpty(val)) return getStyleProp(elem, 'background'); }
	else if (isdef(STYLE_PARAMS_2[prop])) { val = getStyleProp(elem, STYLE_PARAMS_2[prop]); }
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
	if (nundef(val)) val = getStyleProp(elem, prop);
	if (val.endsWith('px')) return firstNumber(val); else return val;
}
function mHasClass(el, className) {
	if (el.classList) return el.classList.contains(className);
	else {
		let x = !!el.className;
		return isString(x) && !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
}
function mImg(src, d, styles = {}, opts = {}) {
	let [w, h] = mSizeSuccession(styles, 40);
	addKeys({ w, h, 'object-fit': 'cover', 'object-position': 'center center' }, styles);
	addKeys({ tag: 'img', src }, opts)
	let img = mDom(d, styles, opts);
	return img;
}
function mLayout(bg, dParent, rowlist, colt, rowt) {
	dParent = toElem(dParent);
	mStyle(dParent, { w: '100%', h: '100%', bg, 'caret-color': '#ffffff00' });
	let areas = `'${rowlist.join("' '")}'`;
	if (dParent.id == 'dPage') M.divNames = [];
	let newNames = mAreas(dParent, areas, colt, rowt);
	let names = M.divNames = Array.from(new Set(M.divNames.concat(newNames)));
	mShade(newNames);
	return names.map(x => mBy(x));
}
function mLayoutTLMRS(bg, dParent, suffix = '', wcol = 30, hrow = 30) {
	let rowlist = [`dTop${suffix} dTop${suffix} dTop${suffix}`, `dLeft${suffix} dMain${suffix} dRight${suffix}`, `dStatus${suffix} dStatus${suffix} dStatus${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr minmax(${wcol}px, auto)`;
	let rowt = `minmax(${hrow}px, auto) 1fr minmax(${hrow}px, auto)`;
	return mLayout(bg, dParent, rowlist, colt, rowt);
}
function mMagnify(elem, scale = 5) {
	elem.classList.add(`topmost`);
	MAGNIFIER_IMAGE = elem;
	const rect = elem.getBoundingClientRect();
	let [w, h] = [rect.width * scale, rect.height * scale];
	let [cx, cy] = [rect.width / 2 + rect.left, rect.height / 2 + rect.top];
	let [l, t, r, b] = [cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2];
	let originX = 'center';
	let originY = 'center';
	let [tx, ty] = [0, 0];
	if (l < 0) { tx = -l / scale; }
	if (t < 0) { ty = -t / scale; }
	if (r > window.innerWidth) { tx = -(r - window.innerWidth) / scale; }
	if (b > window.innerHeight) { ty = -(b - window.innerHeight) / scale; }
	elem.style.transform = `scale(${scale}) translate(${tx}px,${ty}px)`;
	elem.style.transformOrigin = `${originX} ${originY}`;
}
function mMagnifyOff() {
	if (!MAGNIFIER_IMAGE) return;
	let elem = MAGNIFIER_IMAGE;
	MAGNIFIER_IMAGE = null;
	elem.classList.remove(`topmost`);
	elem.style.transform = null;
}
async function mPostPhp(cmd, o, jsonResult = true) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	if (isdef(o.path) && (o.path.startsWith('zdata') || o.path.startsWith('y'))) o.path = '../../' + o.path;
	let res = await fetch(server + `p5/php/${cmd}.php`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(o), // Send the line in POST request
		}
	);
	let text;
	try {
		text = await res.text();
		if (!jsonResult) {
			//console.log('!!!asking for plain text!!!');
			return text;
		}
		let obj = JSON.parse(text);
		return obj;
		//return res.ok? await res.json(): res; //jsonResult ? await res.json() : await res.text() : res;
	} catch (e) {
		return isString(text) ? text : e;
	}
}
async function mPhpGetFile(path) { return await mPostPhp('read_file', { path }, false); }
async function mPhpPostFile(text, path) { return await mPostPhp('write_file', { text, path }, false); }
async function mPhpPostLine(line, path) { return await mPostPhp('append_action', { line, path }, false); }
async function mPhpPostText(text, path) { return await mPostPhp('append_text', { text, path }, false); }
async function mPhpDeleteFile(path) { return await mPostPhp('delete_file', { path }); }
function mShade(names, offset = 1, contrast = 1) {
	let palette = paletteTransWhiteBlack(names.length * contrast + 2 * offset).slice(offset);
	for (const name of names) {
		let d = toElem(name);
		mStyle(d, { bg: palette.shift(), fg: 'contrast', wbox: true });
	}
}
function mSizeSuccession(styles = {}, szDefault = 100, fromWidth = true) {
	let [w, h] = [styles.w, styles.h];
	if (fromWidth) {
		w = valf(w, styles.sz, h, szDefault);
		h = valf(h, styles.sz, w, szDefault);
	} else {
		h = valf(h, styles.sz, w, szDefault);
		w = valf(w, styles.sz, h, szDefault);
	}
	return [w, h];
}
function mStyle(elem, styles = {}, opts = {}) {
	elem = toElem(elem);
	styles = jsCopy(styles);
	let noUnit = ['opacity', 'flex', 'grow', 'shrink', 'grid', 'z', 'iteration', 'count', 'orphans', 'widows', 'weight', 'order', 'index'];
	const STYLE_PARAMS_3 = {
		bgSrc: (elem, v) => elem.style.backgroundImage = `url(${v})`,
		gridRows: (elem, v) => elem.style.gridTemplateRows = isNumber(v) ? `repeat(${v},1fr)` : v,
		gridCols: (elem, v) => elem.style.gridTemplateColumns = isNumber(v) ? `repeat(${v},1fr)` : v,
		html: (elem, v) => elem.innerHTML = v,
		hpadding: (elem, v) => elem.style.padding = `0 ${v}px`,
		vpadding: (elem, v) => elem.style.padding = `${v}px ${valf(styles.hpadding, 0)}px`,
		hmargin: (elem, v) => elem.style.margin = `0 ${v}px`,
		vmargin: (elem, v) => elem.style.margin = `${v}px ${valf(styles.hmargin, 0)}px`,
		w100: elem => elem.style.width = '100%',
		h100: elem => elem.style.height = '100%',
		round: elem => elem.style.borderRadius = '50%',
		wbox: (elem, v) => elem.style.boxSizing = v ? 'border-box' : 'content-box',
		wrap: (elem, v) => { if (v == 'hard') elem.setAttribute('wrap', 'hard'); else elem.style.flexWrap = 'wrap'; }
	};
	for (const k in styles) {
		let v = styles[k];
		let key = STYLE_PARAMS_2[k];
		let val = isNumber(v) && !noUnit.some(x => k.includes(x)) || k == 'fz' ? '' + Number(v) + 'px' : v;
		//if (k.includes('flex')) console.log(k,v,key, val);
		if (isdef(key)) { elem.style.setProperty(key, val); continue; }
		if (v == 'contrast') { //nur bei fg verwenden!!!!
			let bg = nundef(styles.bg) ? mGetStyle(elem, 'bg') : colorFrom(styles.bg);
			elem.style.setProperty('color', colorIdealText(bg));
		} else if (k == 'bg') {
			if (v.includes('grad')) elem.style.setProperty('background', v);
			else elem.style.setProperty('background-color', colorFrom(v, styles.alpha));
			continue;
		} else if (k == 'fg') {
			elem.style.setProperty('color', colorFrom(v, styles.alpha));
			continue;
		} else if (k.startsWith('class')) {
			mClass(elem, v)
			continue;
		} else if (isdef(STYLE_PARAMS_3[k])) {
			STYLE_PARAMS_3[k](elem, v);
		} else elem.style.setProperty(k, val);
	}
	applyOpts(elem, opts);
}
function nundef(x) { return x === null || x === undefined || x === 'undefined'; }
function onHoverMagnify(d, controlkey = null, ms = 1000, scale = 5) {
	d = toElem(d);
	d.onmouseenter = function () { if (controlkey && !isKeyDown(controlkey)) return; clearTimeout(TO.onhover); TO.onhover = setTimeout(() => mMagnify(d, scale), ms); };
	d.onmouseleave = function () { clearTimeout(TO.onhover); TO.onhover = null; mMagnifyOff(); };
}
function onHoverTooltip(d, text, controlkey = null, ms = 2000, xfactor = 0.7, yfactor = 0.5) {

	d = toElem(d);
	mClass(d.parentNode, 'tooltip-container');
	if (nundef(DA.tooltip)) DA.tooltip = mDom('dPage', { className: 'tooltip' }, { tag: 'span', html: 'this is a tooltip' }); //return;

	d.addEventListener('mouseenter', () => {
		if (controlkey && !isKeyDown(controlkey)) return;
		if (DA.tooltip.innerHTML == text) return;
		TO.onhover = setTimeout(() => {

			DA.tooltip.innerHTML = text;
			DA.tooltip.style.visibility = 'visible';
			DA.tooltip.style.opacity = '1';

			// Position the tooltip
			const rect = d.getBoundingClientRect();
			DA.tooltip.style.left = `${rect.left + rect.width * xfactor + window.scrollX}px`;
			DA.tooltip.style.top = `${rect.top + rect.height * yfactor + window.scrollY}px`; // Add 5px spacing
		}, ms);
	});

	// Hide tooltip immediately on mouseleave
	d.addEventListener('mouseleave', () => {
		clearTimeout(TO.onhover); TO.onhover = null;// Clear timeout if mouse leaves early
		DA.tooltip.style.visibility = 'hidden';
		DA.tooltip.style.opacity = '0';
		DA.tooltip.innerHTML = '';
	});
}
function paletteTransWhiteBlack(n = 9) {
	let c = 'white';
	let pal = [c];
	let [iw, ib] = [Math.floor(n / 2), Math.floor((n - 1) / 2)];
	let [incw, incb] = [1 / (iw + 1), 1 / (ib + 1)];
	for (let i = 1; i < iw; i++) {
		let alpha = 1 - i * incw;
		pal.push(colorTrans(c, alpha));
	}
	pal.push('transparent');
	c = 'black';
	for (let i = 1; i < ib; i++) {
		let alpha = i * incb;
		pal.push(colorTrans(c, alpha));
	}
	pal.push(c);
	return pal;
}
function rChoose(arr, n = 1, func = null, exceptIndices = null) {
	if (isDict(arr)) { arr = dict2list(arr, 'key'); } //console.log(arr); }
	let indices = arrRange(0, arr.length - 1);
	if (isdef(exceptIndices)) {
		for (const i of exceptIndices) removeInPlace(indices, i);
	}
	if (isdef(func)) indices = indices.filter(x => func(arr[x]));
	if (n == 1) {
		let idx = Math.floor(Math.random() * indices.length);
		return arr[indices[idx]];
	}
	arrShuffle(indices);
	return indices.slice(0, n).map(x => arr[x]);
}
function rColor(lum,sat,hue){
	if (nundef(lum) && isdef(M.colorList)) return rChoose(M.colorList).hex;
	return rColorHex(lum,sat,hue);
}
function rColorHex(lum100OrAlpha01 = 50, sat100Alpha01 = 100, hueVari = 60) {
	let c;
	if (lum100OrAlpha01 <= 1) {
		c = '#';
		for (let i = 0; i < 6; i++) { c += rChoose(['f', 'c', '9', '6', '3', '0']); }
		sat100Alpha01 = lum100OrAlpha01;
	} else {
		let hue = rHue(hueVari);
		let sat = 100;
		let b = isNumber(lum100OrAlpha01) ? lum100OrAlpha01 : lum100OrAlpha01 == 'dark' ? 25 : lum100OrAlpha01 == 'light' ? 75 : 50;
		c = colorHsl360ArgsToHex79(hue, sat, b);
	}
	return sat100Alpha01 < 1 ? colorTrans(c, sat100Alpha01) : c;
}
function rColorNames(n=1){return rChoose(M.colorNames,n);}
function rHue(vari = 36) { return (rNumber(0, vari) * Math.round(360 / vari)) % 360; }
function rKeyType() {
	return rChoose(getKeyTypes());
}
function rNumber(min = 0, max = 100) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
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
	arrRemovip(arr, el);
}
function sortByMultipleProperties(list) {
	let props = Array.from(arguments).slice(1);
	return list.sort((a, b) => {
		for (const p of props) {
			if (a[p] < b[p]) return -1;
			if (a[p] > b[p]) return 1;
		}
		return 0;
	});
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
async function test8() {
	await loadAssetsStatic();
	window.onkeydown = keyDownHandler;
	window.onkeyup = keyUpHandler;
	let di = getKeyLists();
	let elems = mLayoutTLMRS(rColor(), dPage);
	mStyle(dTop, { display: 'flex', padding: 4, wbox: true, gap: 4 });
	let d = dTop;
	for (const i of range(3)) {
		let type = rKeyType();
		let list = di[type];
		let key = rChoose(list);
		let elem = mKey(key, type, d);
		onHoverTooltip(elem, `${key} (${type})`)
	}
}
function toElem(d) { return isString(d) ? mBy(d) : d; }
function toWords(s, allow_ = false) {
	let arr = allow_ ? s.split(/[\W]+/) : s.split(/[\W|_]+/);
	return arr.filter(x => !isEmpty(x));
}
function valf() {
	for (const arg of arguments) if (isdef(arg)) return arg;
	return null;
}

