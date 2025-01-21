
function colorCalculator(p, c0, c1, l) {
	function pSBCr(d) {
		let i = parseInt, m = Math.round, a = typeof c1 == 'string';
		let n = d.length,
			x = {};
		if (n > 9) {
			([r, g, b, a] = d = d.split(',')), (n = d.length);
			if (n < 3 || n > 4) return null;
			(x.r = parseInt(r[3] == 'a' ? r.slice(5) : r.slice(4))), (x.g = parseInt(g)), (x.b = parseInt(b)), (x.a = a ? parseFloat(a) : -1);
		} else {
			if (n == 8 || n == 6 || n < 4) return null;
			if (n < 6) d = '#' + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : '');
			d = parseInt(d.slice(1), 16);
			if (n == 9 || n == 5) (x.r = (d >> 24) & 255), (x.g = (d >> 16) & 255), (x.b = (d >> 8) & 255), (x.a = m((d & 255) / 0.255) / 1000);
			else (x.r = d >> 16), (x.g = (d >> 8) & 255), (x.b = d & 255), (x.a = -1);
		}
		return x;
	}
	let r, g, b, P, f, t, h, i = parseInt, m = Math.round, a = typeof c1 == 'string';
	if (typeof p != 'number' || p < -1 || p > 1 || typeof c0 != 'string' || (c0[0] != 'r' && c0[0] != '#') || (c1 && !a)) return null;
	h = c0.length > 9;
	h = a ? (c1.length > 9 ? true : c1 == 'c' ? !h : false) : h;
	f = pSBCr(c0);
	P = p < 0;
	t = c1 && c1 != 'c' ? pSBCr(c1) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 };
	p = P ? p * -1 : p;
	P = 1 - p;
	if (!f || !t) return null;
	if (l) { r = m(P * f.r + p * t.r); g = m(P * f.g + p * t.g); b = m(P * f.b + p * t.b); }
	else { r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5); g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5); b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5); }
	a = f.a;
	t = t.a;
	f = a >= 0 || t >= 0;
	a = f ? (a < 0 ? t : t < 0 ? a : a * P + t * p) : 0;
	if (h) return 'rgb' + (f ? 'a(' : '(') + r + ',' + g + ',' + b + (f ? ',' + m(a * 1000) / 1000 : '') + ')';
	else return '#' + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2);
}
function colorComplement(color) {
	let [r, g, b] = colorHexToRgbArray(colorFrom(color));
	let compR = 255 - r;
	let compG = 255 - g;
	let compB = 255 - b;
	return colorRgbArgsToHex79(compR, compG, compB);
}
function colorGradient(sColors, type = 'linear', param = null) {
	if (type == 'linear' && !param) param = '45deg';
	if (param && isNumber(param)) param += 'deg';
	if (param) param = `${param},`; else param = '';
	if (nundef(sColors)) sColors = `${rColor()},${rColor()}`;
	else if (!sColors.includes('#')) {
		let list = toWords(sColors,true); console.log(list);
		sColors=list.map(x=>colorFrom(x)).join(', ');
	}
	return `${type}-gradient(${param}${sColors})`;
}
function colorBucket(s) {
	let di = { black: '', blue: '', bluered: 'bluemagenta', child: 'childrenRoomColors', cyan: '', sky: 'cyanblue', rich: 'deepRichColors', green: '', greenblue: 'greencyan', magenta: '', pink: 'magentapink', modern: 'modernColors', orange: '', orangered: '', orangeyellow: '', player: 'playerColors', red: '', vibrant: 'vibrantColors', yellow: '', lime: 'yellowgreen' };
	let c = di[s];
	if (isEmpty(c)) c = s;
	return rChoose(Object.keys(dicolor[c]));
}
function colorMix(c1, c2, percent = 50) {
	return colorCalculator(percent / 100, colorFrom(c2), colorFrom(c1), true);
}
function mShape(shape, dParent, styles = {}, opts = {}) {
	styles = jsCopy(styles);
	styles.display = 'inline-block';
	let [w, h] = mSizeSuccession(styles, 100);
	//if (nundef(styles.bg)) styles.background = 'conic-gradient(green,red,blue,yellow,green)';
	addKeys({ w, h }, styles);
	let clip = PolyClips[shape];
	if (nundef(clip)) styles.round = true; else styles.clip = clip;
	let d = mDom(dParent, styles, opts);
	if (isdef(opts.pos)) { mPlace(d, opts.pos); }
	else if (isdef(opts.center)) centerAt(d, opts.center.x, opts.center.y);
	return d;
}






