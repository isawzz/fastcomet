
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
function binomialCdf(n, p, lb, ub) {
	let cumulativeProbability = 0;
	for (let k = lb; k <= ub; k++) {
		cumulativeProbability += binomialPdf(n, p, k);
	}
	return cumulativeProbability;
}
function binomialCoefficient(n, k) {
	return factorial(n) / (factorial(k) * factorial(n - k));
}
function binomialPdf(n, p, k) {
	if (k < 0 || k > n) {
		return 0;
	}
	const binomCoeff = binomialCoefficient(n, k);
	return binomCoeff * Math.pow(p, k) * Math.pow(1 - p, n - k);
}
function calculateCDF(xValues, probabilities) {
	if (xValues.length !== probabilities.length) {
		throw new Error("The lengths of xValues and probabilities must be equal.");
	}
	const totalProbability = probabilities.reduce((sum, prob) => sum + prob, 0);
	const normalizedProbabilities = probabilities.map(prob => prob / totalProbability);
	let cumulativeSum = 0;
	const cdf = normalizedProbabilities.map((prob, index) => {
		cumulativeSum += prob;
		return {
			x: xValues[index],
			cumulativeProbability: cumulativeSum
		};
	});
	return cdf;
}
function calculateInterval(mu, sigma, percent) {
	if (percent <= 0 || percent >= 100) {
		throw new Error("Percent must be between 0 and 100.");
	}
	const p = percent / 100;
	const z = inverseCDF((1 + p) / 2);
	const lowerBound = mu - z * sigma;
	const upperBound = mu + z * sigma;
	return [lowerBound, upperBound];
}
function calculateStatistics(xlist, ylist) {
	let n = xlist.length;
	let mu = 0;
	for (let i = 0; i < n; i++) {
		mu += xlist[i] * ylist[i];
	}
	let v = 0;
	for (let i = 0; i < n; i++) {
		v += ylist[i] * (xlist[i] - mu) ** 2;
	}
	let stdev = Math.sqrt(v);
	const mean = xlist.reduce((sum, value) => sum + value, 0) / xlist.length;
	const sortedValues = [...xlist].sort((a, b) => a - b);
	const mid = Math.floor(sortedValues.length / 2);
	const median = sortedValues.length % 2 === 0 ?
		(sortedValues[mid - 1] + sortedValues[mid]) / 2 :
		sortedValues[mid];
	const frequencyMap = {};
	let maxFreq = 0;
	let mode = [];
	xlist.forEach(value => {
		frequencyMap[value] = (frequencyMap[value] || 0) + 1;
		if (frequencyMap[value] > maxFreq) {
			maxFreq = frequencyMap[value];
			mode = [value];
		} else if (frequencyMap[value] === maxFreq) {
			mode.push(value);
		}
	});
	mode = [...new Set(mode)];
	return { mu, v, stdev, mean, median, mode };
}
function capitalize(s) {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
}
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
function contains(s, sSub) { return s.toLowerCase().includes(sSub.toLowerCase()); }
function detectSessionType() {
	let loc = window.location.href; //console.log('loc', loc);
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
function erf(x) {
	const a1 = 0.254829592;
	const a2 = -0.284496736;
	const a3 = 1.421413741;
	const a4 = -1.453152027;
	const a5 = 1.061405429;
	const p = 0.3275911;
	const sign = x < 0 ? -1 : 1;
	x = Math.abs(x);
	const t = 1 / (1 + p * x);
	const y = ((((((a5 * t + a4) * t) + a3) * t + a2) * t) + a1) * t;
	return sign * (1 - y * Math.exp(-x * x));
}
function factorial(x) {
	if (x === 0 || x === 1) {
		return 1;
	}
	return x * factorial(x - 1);
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
function getStyleProp(elem, prop) { return getComputedStyle(elem).getPropertyValue(prop); }
function getUID(pref = '') {
	UIDCounter += 1;
	return pref + '_' + UIDCounter;
}
function getValuesFromInput(id) {
	let input = document.getElementById(id).value;
	input = replaceCommasWithDots(input);
	let values = input.split(' ').map(s => eval(s.trim())).map(num => parseFloat(num)).filter(num => !isNaN(num));
	console.log(values);
	return values;
}
function inverseCDF(p) {
	const a1 = -3.969683028665376e+01;
	const a2 = 2.209460984245205e+02;
	const a3 = -2.759285104469687e+02;
	const a4 = 1.383577518672690e+02;
	const a5 = -3.066479806614716e+01;
	const a6 = 2.506628277459239e+00;
	const b1 = -5.447609879822406e+01;
	const b2 = 1.615858368580409e+02;
	const b3 = -1.556989798598866e+02;
	const b4 = 6.680131188771972e+01;
	const b5 = -1.328068155288572e+01;
	const c1 = -7.784894002430293e-03;
	const c2 = -3.223964580411365e-01;
	const c3 = -2.400758277161838e+00;
	const c4 = -2.549732539343734e+00;
	const c5 = 4.374664141464968e+00;
	const c6 = 2.938163982698783e+00;
	const d1 = 7.784695709041462e-03;
	const d2 = 3.224671290700398e-01;
	const d3 = 2.445134137142996e+00;
	const d4 = 3.754408661907416e+00;
	const pLow = 0.02425;
	const pHigh = 1 - pLow;
	let q, r;
	if (p < pLow) {
		q = Math.sqrt(-2 * Math.log(p));
		return (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
			((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
	} else if (p <= pHigh) {
		q = p - 0.5;
		r = q * q;
		return (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q /
			(((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
	} else {
		q = Math.sqrt(-2 * Math.log(1 - p));
		return -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
			((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
	}
}
function isDict(d) { let res = (d !== null) && (typeof (d) == 'object') && !isList(d); return res; }
function isEmpty(arr) {
	return arr === undefined || !arr
		|| (isString(arr) && (arr == 'undefined' || arr == ''))
		|| (Array.isArray(arr) && arr.length == 0)
		|| Object.entries(arr).length === 0;
}
function isList(arr) { return Array.isArray(arr); }
function isNumber(x) { return x !== ' ' && x !== true && x !== false && isdef(x) && (x == 0 || !isNaN(+x)); }
function isString(param) { return typeof param == 'string'; }
function isdef(x) { return x !== null && x !== undefined && x !== 'undefined'; }
function jsCopy(o) { return JSON.parse(JSON.stringify(o)); }
function last(arr) {
	return arr.length > 0 ? arr[arr.length - 1] : null;
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
			allImages[fname] = { fname, path: o.img, k };
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
function mAppend(d, child) { toElem(d).appendChild(child); return child; }
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
function mCreateFrom(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();
	return div.firstChild;
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
function mFlex(d, or = 'h') {
	d = toElem(d);
	d.style.display = 'flex';
	d.style.flexFlow = (or == 'v' ? 'column' : 'row') + ' ' + (or == 'w' ? 'wrap' : 'nowrap');
}
function mFlexV(d) { mStyle(d, { display: 'flex', 'align-items': 'center' }); }
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
function mInput(dParent, styles, id, placeholder, classtr = 'input', tabindex = null, value = '', selectOnClick = false, type = "text") {
	let html = `<input type="${type}" autocomplete="off" ${selectOnClick ? 'onclick="this.select();"' : ''} id=${id} class="${classtr}" placeholder="${valf(placeholder, '')}" tabindex="${tabindex}" value="${value}">`;
	let d = mAppend(dParent, mCreateFrom(html));
	if (isdef(styles)) mStyle(d, styles);
	return d;
}
function mLinebreak(dParent, gap = 0) {
	dParent = toElem(dParent);
	let display = getComputedStyle(dParent).display;
	if (display == 'flex') {
		d = mDom(dParent, { 'flex-basis': '100%', h: gap, hline: gap, w: '100%' }, { html: '' });
	} else {
		d = mDom(dParent, { hline: gap, h: gap }, { html: '&nbsp;' });
	}
	return d;
}
function mRemoveClass(d) { for (let i = 1; i < arguments.length; i++) d.classList.remove(arguments[i]); }
function mShade(names, offset = 1, contrast = 1) {
	let palette = paletteTransWhiteBlack(names.length * contrast + 2 * offset).slice(offset);
	for (const name of names) {
		let d = mBy(name);
		mStyle(d, { bg: palette.shift(), fg: 'contrast', wbox: true });
	}
}
function mShadeLight(names, offset = 1, contrast = 1) {
	let palette = paletteTransWhite(names.length * contrast + 2 * offset).slice(offset);
	for (const name of names) {
		let d = mBy(name);
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
		hpadding: (elem, v) => elem.style.padding = `0 ${v}px`,
		vpadding: (elem, v) => elem.style.padding = `${v}px ${valf(styles.hpadding, 0)}px`,
		hmargin: (elem, v) => elem.style.margin = `0 ${v}px`,
		vmargin: (elem, v) => elem.style.margin = `${v}px ${valf(styles.hmargin, 0)}px`,
		wbox: (elem, v) => elem.style.boxSizing = v ? 'border-box' : 'content-box',
		wrap: (elem, v) => { if (v == 'hard') elem.setAttribute('wrap', 'hard'); else elem.style.flexWrap = 'wrap'; }
	};
	for (const k in styles) {
		let v = styles[k];
		let key = STYLE_PARAMS_2[k];
		let val = isNumber(v) && !noUnit.some(x => k.includes(x)) || k == 'fz' ? '' + Number(v) + 'px' : v;
		if (k.includes('flex')) console.log(key, val);
		if (isdef(key)) { elem.style.setProperty(key, val); continue; }
		if (v == 'contrast') { //nur bei fg verwenden!!!!
			let bg = nundef(styles.bg) ? mGetStyle(elem, 'bg') : colorFrom(styles.bg);
			elem.style.setProperty('color', colorIdealText(bg));
		} else if (k == 'bg') {
			elem.style.setProperty('background-color', colorFrom(v, styles.alpha));
			continue;
		} else if (k == 'fg') {
			elem.style.setProperty('color', colorFrom(v));
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
function minTrialsForSuccess(x, p) {
	console.log(x, p);
	const xDecimal = x;
	const trials = Math.ceil(Math.log(1 - xDecimal) / Math.log(1 - p));
	return trials;
}
function normalBetween(x1, x2, mean, stdev) {
	let res = jStat.normal.cdf(x2, mean, stdev) - jStat.normal.cdf(x1, mean, stdev);
	return res;
}
function normalCdf(x, mean, stdDev) {
	return 0.5 * (1 + erf((x - mean) / (stdDev * Math.sqrt(2))));
}
function normalPdf(x, mean, stdDev) {
	const exponent = -0.5 * Math.pow((x - mean) / stdDev, 2);
	const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
	return coefficient * Math.exp(exponent);
}
function nundef(x) { return x === null || x === undefined || x === 'undefined'; }
async function onclickAll(ev) {
	hToggleClassMenu(ev); mClear('dTable');
	let dTable = mBy('dTable'); mStyle('dTable', { padding: 10, display: 'flex', wrap: 'true', acontent: 'start', gap: 10 });
	let d1 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d1, {}, { html: 'normal:' })
	let inputs = ['xmin', 'xmax', 'percent', 'mean', 'stdev'];
	for (const name of inputs) {
		mInput(d1, { hpadding: 10, vpadding: 2 }, `inp_n${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d1, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', html: `GO!`, onclick: onclickNormalAlles });
	mDom(d1, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', html: `clear`, onclick: onclickNormalClear });
	mDom(d1, {}, { html: 'min:' })
	mDom(d1, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_min`, html: '&nbsp;' });
	mDom(d1, {}, { html: 'max:' })
	mDom(d1, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_max`, html: '&nbsp;' });
	mDom(d1, {}, { html: 'f(x):' })
	mDom(d1, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_pdf`, html: '&nbsp;' });
	mDom(d1, {}, { html: 'F(x):' })
	mDom(d1, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_cdf`, html: '&nbsp;' });
	mBy('inp_nxmin').value = 0;
	mBy('inp_nxmax').value = 0;
	mBy('inp_npercent').value = 90;
	mBy('inp_nmean').value = 320;
	mBy('inp_nstdev').value = 156;
}
async function onclickArchive(ev) {
}
async function onclickBinomial(ev) {
	hToggleClassMenu(ev); mClear('dTable');
	let dTable = mBy('dTable'); mStyle('dTable', { padding: 10, display: 'flex', wrap: 'true', acontent: 'start', gap: 10 });
	let d1 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d1, {}, { html: 'Calculate binomialPdf:' })
	let inputs = ['n', 'p', 'k'];
	for (const name of inputs) {
		mInput(d1, { hpadding: 10, vpadding: 2 }, `inp_${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d1, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', id: `b_pdf`, html: `GO!`, onclick: onclickBinomialPdf });
	mDom(d1, {}, { html: 'Result:' })
	mDom(d1, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_pdf`, html: '&nbsp;' });
	let d2 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d2, {}, { html: 'Calculate binomialCdf:' })
	inputs = ['n', 'p', 'from', 'to'];
	for (const name of inputs) {
		mInput(d2, { hpadding: 10, vpadding: 2 }, `inp_c${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d2, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', id: `b_cdf`, html: `GO!`, onclick: onclickBinomialCdf });
	mDom(d2, {}, { html: 'Result:' })
	mDom(d2, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_cdf`, html: '&nbsp;' });
	let d3 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d3, {}, { html: 'binomial Erwartungswert:' })
	inputs = ['n', 'p'];
	for (const name of inputs) {
		mInput(d3, { hpadding: 10, vpadding: 2 }, `inp_mu${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d3, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', id: `b_mu`, html: `GO!`, onclick: onclickBinomialMu });
	mDom(d3, {}, { html: 'Erwartungswert:' })
	mDom(d3, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_mu`, html: '&nbsp;' });
	let d4 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d4, {}, { html: 'binomial Varianz / Standardabweichung:' })
	inputs = ['n', 'p'];
	for (const name of inputs) {
		mInput(d4, { hpadding: 10, vpadding: 2 }, `inp_v${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d4, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', id: `b_v`, html: `GO!`, onclick: onclickBinomialVar });
	mDom(d4, {}, { html: 'Varianz:' })
	mDom(d4, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_var`, html: '&nbsp;' });
	mDom(d4, {}, { html: 'Standardabweichung:' })
	mDom(d4, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_stdev`, html: '&nbsp;' });
	let d5 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d5, {}, { html: 'Min trials for success with probability x:' })
	inputs = ['x', 'p'];
	for (const name of inputs) {
		mInput(d5, { hpadding: 10, vpadding: 2 }, `inp_mt${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d5, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', id: `b_mt`, html: `GO!`, onclick: onclickBinomialMinTrials });
	mDom(d5, {}, { html: 'Result:' })
	mDom(d5, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_mt`, html: '&nbsp;' });
}
async function onclickBinomialCdf(ev) {
	let n = +mBy('inp_cn').value;
	let p = +mBy('inp_cp').value;
	let lb = +mBy('inp_cfrom').value;
	let ub = +mBy('inp_cto').value;
	let res = binomialCdf(n, p, lb, ub);
	mBy('result_cdf').innerHTML = res;
}
async function onclickBinomialMinTrials(ev) {
	let x = +mBy('inp_mtx').value;
	let p = +mBy('inp_mtp').value;
	let res = minTrialsForSuccess(x, p);
	mBy('result_mt').innerHTML = res;
}
async function onclickBinomialMu(ev) {
	let n = +mBy('inp_mun').value;
	let p = +mBy('inp_mup').value;
	let res = n * p;
	mBy('result_mu').innerHTML = res;
}
async function onclickBinomialPdf(ev) {
	let n = +mBy('inp_n').value;
	let p = +mBy('inp_p').value;
	let k = +mBy('inp_k').value;
	let res = binomialPdf(n, p, k);
	mBy('result_pdf').innerHTML = res;
}
async function onclickBinomialVar(ev) {
	let n = +mBy('inp_vn').value;
	let p = +mBy('inp_vp').value;
	let v = n * p * (1 - p);
	mBy('result_var').innerHTML = v;
	mBy('result_stdev').innerHTML = Math.sqrt(v);
}
async function onclickCalc(ev) {
	let names = hPrepUi(ev, ` 'dSide dTable' `, 'auto 1fr', '1fr', 'classic_rose');
	mShadeLight(names)
	let dSide = mBy('dSide'); mStyle(dSide, { padding: 10, wbox: true });
	let dMenu = mDom('dSide', { display: 'flex', dir: 'column' }); //side menu
	let gencase = mLinkMenu(dMenu, 'Manual', {}, onclickStatistik, 'side');
	let x = mLinkMenu(dMenu, 'Binomial', {}, onclickBinomial, 'side');
	let normal = mLinkMenu(dMenu, 'Normal', {}, onclickNormal, 'side');
	let all = mLinkMenu(dMenu, 'Alles', {}, onclickAll, 'side');
}
async function onclickDay(ev) {
	let names = hPrepUi(ev, ` 'dVormittag'  'dNachmittag' `, '1fr', '1fr 1fr', 'dark_powder_blue');
	mShade(names)
}
async function onclickExample(ev) {
	let names = hPrepUi(ev, ` 'dSide dTable' `, 'auto 1fr', '1fr', 'light_green');
	mShadeLight(names)
	let dSide = mBy('dSide');
	mStyle(dSide, { padding: 10, wbox: true })
	mDom(dSide, {}, { html: 'TODO:' });
	mDom('dTable', {}, { html: 'dTable' });
	let list = ['Nil github', 'get up v', 'get dressed', 'cleanup f', 'LG github', 'email check', 'stretching', 'plan', 'tune violin', 'schradiek'];
	for (const item of list) {
		mDom(dSide, { margin: 0 }, { tag: 'button', html: item, onclick: onclickExampleItem });
		mLinebreak(dSide, 3);
	}
}
async function onclickExampleItem(ev) {
	mClear('dTable');
	mDom('dTable', {}, { html: ev.target.innerHTML })
}
async function onclickFMuVar(ev) {
	let xlist = getValuesFromInput('inp_x');
	let ylist = getValuesFromInput('inp_y');
	let cdfResult = calculateCDF(xlist, ylist); console.log(cdfResult);
	mBy('res_F').innerHTML = cdfResult.map(x => x.cumulativeProbability).join(' ');
	let res = calculateStatistics(xlist, ylist); console.log(res)
	mBy('res_mu').innerHTML = res.mu;
	mBy('res_var').innerHTML = res.v;
	mBy('res_stdev').innerHTML = res.stdev;
	mBy('res_mean').innerHTML = res.mean;
	mBy('res_median').innerHTML = res.median;
	mBy('res_mode').innerHTML = res.mode.join(' ');
}
async function onclickGame(ev) {
	let names = hPrepUi(ev, ` 'dSide dTable' `, 'auto 1fr', '1fr', 'orange');
	mShadeLight(names)
}
async function onclickHome(ev) {
	let names = hPrepUi(ev, ` 'dSide dTable' `, 'auto 1fr', '1fr', 'skyblue');
	mShadeLight(names)
	mRemoveClass(ev.target, 'active'); //just set other top menu buttons inactive!
	let d = mBy('dSide');
	for (const name in { new: onclickNew, archive: onclickArchive }) {
		mDom(d, {}, { tag: 'button', html: name })
	}
}
async function onclickNew(ev) {
	let a = mBy('dTable');
	let b = mDom(a, {}, {});
	mFlex(b);
	let c = mDom(b, {}, {})
}
async function onclickNormal(ev) {
	hToggleClassMenu(ev); mClear('dTable');
	let dTable = mBy('dTable'); mStyle('dTable', { padding: 10, display: 'flex', wrap: 'true', acontent: 'start', gap: 10 });
	let d1 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d1, {}, { html: 'Calculate normalPdf:' })
	let inputs = ['x', 'mean', 'stdev'];
	for (const name of inputs) {
		mInput(d1, { hpadding: 10, vpadding: 2 }, `inp_${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d1, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', id: `b_pdf`, html: `GO!`, onclick: onclickNormalPdf });
	mDom(d1, {}, { html: 'Result:' })
	mDom(d1, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_pdf`, html: '&nbsp;' });
	let d2 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d2, {}, { html: 'Calculate normalCdf:' })
	inputs = ['x', 'mean', 'stdev'];
	for (const name of inputs) {
		mInput(d2, { hpadding: 10, vpadding: 2 }, `inp_c${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d2, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', id: `b_cdf`, html: `GO!`, onclick: onclickNormalCdf });
	mDom(d2, {}, { html: 'Result:' })
	mDom(d2, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_cdf`, html: '&nbsp;' });
	let d3 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d3, {}, { html: 'normal Erwartungswert:' })
	inputs = ['mean'];
	for (const name of inputs) {
		mInput(d3, { hpadding: 10, vpadding: 2 }, `inp_mu${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d3, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', id: `b_mu`, html: `GO!`, onclick: onclickNormalMu });
	mDom(d3, {}, { html: 'Erwartungswert:' })
	mDom(d3, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_mu`, html: '&nbsp;' });
	let d4 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d4, {}, { html: 'normal Varianz / Standardabweichung:' })
	inputs = ['stdev'];
	for (const name of inputs) {
		mInput(d4, { hpadding: 10, vpadding: 2 }, `inp_v${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d4, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', id: `b_v`, html: `GO!`, onclick: onclickNormalVar });
	mDom(d4, {}, { html: 'Varianz:' })
	mDom(d4, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_var`, html: '&nbsp;' });
	mDom(d4, {}, { html: 'Standardabweichung:' })
	mDom(d4, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_stdev`, html: '&nbsp;' });
	let d5 = mDom(dTable, { display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d5, {}, { html: 'Intervall in dem X mit p prozent wahrscheinlichkeit liegt:' })
	inputs = ['percent', 'mu', 'sigma'];
	for (const name of inputs) {
		mInput(d5, { hpadding: 10, vpadding: 2 }, `inp_i${name}`, `<Enter ${name}>`, 'input', 0, '', true, 'number');
	}
	mDom(d5, { hpadding: 10, vpadding: 2, className: 'input' }, { tag: 'button', id: `b_v`, html: `GO!`, onclick: onclickNormalInterval });
	mDom(d5, {}, { html: 'min:' })
	mDom(d5, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_min`, html: '&nbsp;' });
	mDom(d5, {}, { html: 'max:' })
	mDom(d5, { hpadding: 10, vpadding: 2, className: 'input' }, { id: `result_max`, html: '&nbsp;' });
}
async function onclickNormalAlles(ev) {
	let xmin = +mBy('inp_nxmin').value;
	let xmax = +mBy('inp_nxmax').value;
	let percent = +mBy('inp_npercent').value;
	let mean = +mBy('inp_nmean').value;
	let stdev = +mBy('inp_nstdev').value;
	if (!isNaN(percent)) {
		let res = calculateInterval(mean, stdev, percent);
		mBy('result_min').innerHTML = res[0];
		mBy('result_max').innerHTML = res[1];
	} else {
		if (isNaN(xmin)) xmin = -Infinity;
		if (isNaN(xmax)) xmax = Infinity;
		mBy('result_cdf').innerHTML = normalBetween(xmin, xmax, mean, stdev);
	}
}
async function onclickNormalCdf(ev) {
	let x = +mBy('inp_cx').value;
	let mean = +mBy('inp_cmean').value;
	let stdev = +mBy('inp_cstdev').value;
	let res = normalCdf(x, mean, stdev);
	mBy('result_cdf').innerHTML = res;
}
async function onclickNormalClear(ev) {
	let inputs = ['xmin', 'xmax', 'percent', 'mean', 'stdev'];
	for (const name of inputs) {
		mBy(`inp_n${name}`).value = '';
	}
	let names = ['min', 'max', 'pdf', 'cdf'];
	for (const name of names) {
		mBy(`result_${name}`).innerHTML = '&nbsp;';
	}
}
async function onclickNormalInterval(ev) {
	let percent = +mBy('inp_ipercent').value;
	let mean = +mBy('inp_imu').value;
	let stdev = +mBy('inp_isigma').value;
	let res = calculateInterval(mean, stdev, percent);
	mBy('result_min').innerHTML = res[0];
	mBy('result_max').innerHTML = res[1];
}
async function onclickNormalMu(ev) {
	let mean = +mBy('inp_mumean').value;
	let res = mean;
	mBy('result_mu').innerHTML = res;
}
async function onclickNormalPdf(ev) {
	let x = +mBy('inp_x').value;
	let mean = +mBy('inp_mean').value;
	let stdev = +mBy('inp_stdev').value;
	let res = normalPdf(x, mean, stdev);
	mBy('result_pdf').innerHTML = res;
}
async function onclickNormalVar(ev) {
	let stdev = +mBy('inp_vstdev').value;
	let v = stdev * stdev;
	mBy('result_var').innerHTML = v;
	mBy('result_stdev').innerHTML = stdev;
}
async function onclickStatistik(ev) {
	hToggleClassMenu(ev); mClear('dTable');
	let dTable = mBy('dTable'); //mStyle('dTable',{padding:10, display:'flex',wrap:'true',gap:10}); //,acontent:'start'});
	let d1 = mDom(dTable, { w: '100%', margin: 10, display: 'flex', dir: 'column', padding: 10, gap: 10, className: 'input' });
	mDom(d1, {}, { html: '<h1>Mit wenigen Daten:</h1>' })
	let inputs = [['Werte fuer X:', 'x Werte', 'x'], ['Wahrscheinlichkeiten:', 'f(x) Werte', 'y']];
	for (const list of inputs) {
		let [title, name, id] = list;
		mDom(d1, {}, { html: title })
		mInput(d1, { hpadding: 10, vpadding: 6, matop: -5 }, `inp_${id}`, `<Enter ${name}> (separate by space)`, 'input', 0, '', true);
	}
	mDom(d1, { hpadding: 10, vpadding: 6, className: 'input', wmax: 140 }, { tag: 'button', id: `b_pdf`, html: `GO!`, onclick: onclickFMuVar });
	let results = [['Verteilungsfunktion', 'F'], ['Erwartungswert', 'mu'], ['Varianz', 'var'], ['Standardabweichung', 'stdev']];
	for (const list of results) {
		let [title, id] = list;
		mDom(d1, {}, { html: title + ':' })
		mDom(d1, { hpadding: 10, vpadding: 2, matop: -5 }, { id: `res_${id}`, html: '&nbsp;' });
	}
	results = [['Mittelwert', 'mean'], ['Median', 'median'], ['Modus', 'mode']];
	for (const list of results) {
		let [title, id] = list;
		mDom(d1, {}, { html: title + ':' })
		mDom(d1, { hpadding: 10, vpadding: 2, matop: -5 }, { id: `res_${id}`, html: '&nbsp;' });
	}
}
async function onclickZone(ev) {
	let names = hPrepUi(ev, ` 'dSide dTable' `, 'auto 1fr', '1fr', 'indigo');
	mShadeLight(names)
}
function paletteTransWhite(n = 9) {
	let c = 'white';
	let pal = [c];
	let incw = 1 / (n - 1);
	for (let i = 1; i < n - 1; i++) {
		let alpha = 1 - i * incw;
		pal.push(colorTrans(c, alpha));
	}
	pal.push('transparent');
	return pal;
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
	if (isDict(arr)) arr = dict2list(arr, 'key');
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
function rColor(lum100OrAlpha01 = 1, alpha01 = 1, hueVari = 60) {
	let c;
	if (lum100OrAlpha01 <= 1) {
		c = '#';
		for (let i = 0; i < 6; i++) { c += rChoose(['f', 'c', '9', '6', '3', '0']); }
		alpha01 = lum100OrAlpha01;
	} else {
		let hue = rHue(hueVari);
		let sat = 100;
		let b = isNumber(lum100OrAlpha01) ? lum100OrAlpha01 : lum100OrAlpha01 == 'dark' ? 25 : lum100OrAlpha01 == 'light' ? 75 : 50;
		c = colorHsl360ArgsToHex79(hue, sat, b);
	}
	return alpha01 < 1 ? colorTrans(c, alpha01) : c;
}
function rHue(vari = 36) { return (rNumber(0, vari) * Math.round(360 / vari)) % 360; }
function rNumber(min = 0, max = 100) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function removeInPlace(arr, el) {
	arrRemovip(arr, el);
}
function replaceCommasWithDots(inputString) {
	return inputString.replace(/,/g, '.');
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
async function start() { await test3(); }
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
async function test3() {
	await loadAssetsStatic();
	let dPage = document.getElementById('dPage');
	mStyle(dPage, { w: '100%', h: '100%', bg: 'sienna' }); //page coloring
	let names = M.divNames = mAreas(dPage, ` 'dTop' 'dMain' 'dStatus' `, '1fr', 'auto 1fr auto');
	mShade(names);
	mStyle('dMain', { padding: 4, overy: 'auto' })
	mFlexV('dTop');
	mStyle('dTop', { padding: 4 })
	mStyle('dStatus', { padding: 4 }, { html: '&nbsp;' })
	let dTop = mDom('dTop'); //top menu
	mDom(dTop, { fz: 30, display: 'inline' }, { html: `play!` })
	mKey('baby', dTop, { h: 30 });
	mKey('baby', dTop, { h: 30 });
	let dHome = mHomeLogo(dTop, 'airplane', onclickHome, 'top'); //logo
	let dCalc = mLinkMenu(dTop, 'CALC', {}, onclickCalc, 'top');
	mLinkMenu(dTop, 'DAY', {}, onclickDay, 'top');
	let dExample = mLinkMenu(dTop, 'EXAMPLE', {}, onclickExample, 'top');
	mLinkMenu(dTop, 'GAME', {}, onclickGame, 'top');
	mLinkMenu(dTop, 'ZONE', {}, onclickZone, 'top');
}
function toElem(d) { return isString(d) ? mBy(d) : d; }
function toWords(s, allow_ = false) {
	let arr = allow_ ? s.split(/[\W]+/) : s.split(/[\W|_]+/);
	return arr.filter(x => !isEmpty(x));
}
function trim(str) {
	return str.replace(/^\s+|\s+$/gm, '');
}
function valf() {
	for (const arg of arguments) if (isdef(arg)) return arg;
	return null;
}







