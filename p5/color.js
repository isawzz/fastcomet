function arrRemoveDuplicates(arr) { return Array.from(new Set(arr)); }
function colorBlendMode(c1, c2, blendMode) {
  function colorBurn(base, blend) {
    return (blend === 0) ? 0 : Math.max(0, 255 - Math.floor((255 - base) / blend));
  }
  function blendColorBurn(baseColor, blendColor) {
    let [baseR, baseG, baseB] = colorHexToRgbArray(baseColor);
    let [blendR, blendG, blendB] = colorHexToRgbArray(blendColor);
    let resultR = colorBurn(baseR, blendR);
    let resultG = colorBurn(baseG, blendG);
    let resultB = colorBurn(baseB, blendB);
    return colorRgbArgsToHex79(resultR, resultG, resultB);
  }
  function blendColorDodge(baseColor, blendColor) {
    let [r1, g1, b1] = colorHexToRgbArray(baseColor);
    let [r2, g2, b2] = colorHexToRgbArray(blendColor);
    const dodge = (a, b) => (b === 255) ? 255 : Math.min(255, ((a << 8) / (255 - b)));
    let r = dodge(r1, r2);
    let g = dodge(g1, g2);
    let b = dodge(b1, b2);
    return colorRgbArgsToHex79(r, g, b);
  }
  function blendColor(baseColor, blendColor) {
    let [r1, g1, b1] = colorHexToRgbArray(baseColor);
    let [r2, g2, b2] = colorHexToRgbArray(blendColor);
    let [h1, s1, l1] = colorRgbArgsToHsl01Array(r1, g1, b1);
    let [h2, s2, l2] = colorRgbArgsToHsl01Array(r2, g2, b2);
    let cfinal = colorHsl01ArgsToRgbArray(h2, s1, l1);
    return colorRgbArgsToHex79(...cfinal);
  }
  function blendDarken(baseColor, blendColor) {
    let [r1, g1, b1] = colorHexToRgbArray(baseColor);
    let [r2, g2, b2] = colorHexToRgbArray(blendColor);
    let r = Math.min(r1, r2);
    let g = Math.min(g1, g2);
    let b = Math.min(b1, b2);
    return colorRgbArgsToHex79(r, g, b);
  }
  function difference(a, b) {
    return Math.abs(a - b);
  }
  function blendDifference(baseColor, blendColor) {
    let [baseR, baseG, baseB] = colorHexToRgbArray(baseColor);
    let [blendR, blendG, blendB] = colorHexToRgbArray(blendColor);
    let resultR = difference(baseR, blendR);
    let resultG = difference(baseG, blendG);
    let resultB = difference(baseB, blendB);
    return colorRgbArgsToHex79(resultR, resultG, resultB);
  }
  function exclusion(a, b) {
    a /= 255;
    b /= 255;
    return (a + b - 2 * a * b) * 255;
  }
  function blendExclusion(baseColor, blendColor) {
    let [baseR, baseG, baseB] = colorHexToRgbArray(baseColor);
    let [blendR, blendG, blendB] = colorHexToRgbArray(blendColor);
    let resultR = Math.round(exclusion(baseR, blendR));
    let resultG = Math.round(exclusion(baseG, blendG));
    let resultB = Math.round(exclusion(baseB, blendB));
    return colorRgbArgsToHex79(resultR, resultG, resultB);
  }
  function hardLight(a, b) {
    a /= 255;
    b /= 255;
    return (b < 0.5) ? (2 * a * b) : (1 - 2 * (1 - a) * (1 - b));
  }
  function blendHardLight(baseColor, blendColor) {
    let [baseR, baseG, baseB] = colorHexToRgbArray(baseColor);
    let [blendR, blendG, blendB] = colorHexToRgbArray(blendColor);
    let resultR = Math.round(hardLight(baseR, blendR) * 255);
    let resultG = Math.round(hardLight(baseG, blendG) * 255);
    let resultB = Math.round(hardLight(baseB, blendB) * 255);
    return colorRgbArgsToHex79(resultR, resultG, resultB);
  }
  function blendHue(baseColor, blendColor) {
    let [baseR, baseG, baseB] = colorHexToRgbArray(baseColor);
    let [blendR, blendG, blendB] = colorHexToRgbArray(blendColor);
    let [baseH, baseS, baseL] = colorRgbArgsToHsl01Array(baseR, baseG, baseB);
    let [blendH, blendS, blendL] = colorRgbArgsToHsl01Array(blendR, blendG, blendB);
    let [resultR, resultG, resultB] = colorHsl01ArgsToRgbArray(blendH, baseS, baseL);
    return colorRgbArgsToHex79(resultR, resultG, resultB);
  }
  function blendLighten(baseColor, blendColor) {
    let [r1, g1, b1] = colorHexToRgbArray(baseColor);
    let [r2, g2, b2] = colorHexToRgbArray(blendColor);
    let r = Math.max(r1, r2);
    let g = Math.max(g1, g2);
    let b = Math.max(b1, b2);
    return colorRgbArgsToHex79(r, g, b);
  }
  function blendLuminosity(baseColor, blendColor) {
    let [r1, g1, b1] = colorHexToRgbArray(baseColor);
    let [r2, g2, b2] = colorHexToRgbArray(blendColor);
    let [h1, s1, l1] = colorRgbArgsToHsl01Array(r1, g1, b1);
    let [h2, s2, l2] = colorRgbArgsToHsl01Array(r2, g2, b2);
    let [r, g, b] = colorHsl01ArgsToRgbArray(h1, s1, l2);
    return colorRgbArgsToHex79(r, g, b);
  }
  function blendMultiply(color1, color2) {
    let [r1, g1, b1] = colorHexToRgbArray(color1);
    let [r2, g2, b2] = colorHexToRgbArray(color2);
    let r = (r1 * r2) / 255;
    let g = (g1 * g2) / 255;
    let b = (b1 * b2) / 255;
    return colorRgbArgsToHex79(Math.round(r), Math.round(g), Math.round(b));
  }
  function blendNormal(baseColor, blendColor) {
    return blendColor;
  }
  function blendOverlay(baseColor, blendColor) {
    let [r1, g1, b1] = colorHexToRgbArray(baseColor);
    let [r2, g2, b2] = colorHexToRgbArray(blendColor);
    const overlayCalculate = (a, b) => (a <= 128) ? (2 * a * b / 255) : (255 - 2 * (255 - a) * (255 - b) / 255);
    let r = overlayCalculate(r1, r2);
    let g = overlayCalculate(g1, g2);
    let b = overlayCalculate(b1, b2);
    return colorRgbArgsToHex79(r, g, b);
  }
  function blendSaturation(baseColor, blendColor) {
    let [r1, g1, b1] = colorHexToRgbArray(baseColor);
    let [r2, g2, b2] = colorHexToRgbArray(blendColor);
    let [h1, s1, l1] = colorRgbArgsToHsl01Array(r1, g1, b1);
    let [h2, s2, l2] = colorRgbArgsToHsl01Array(r2, g2, b2);
    let cfinal = colorHsl01ArgsToRgbArray(h1, s2, l1);
    return colorRgbArgsToHex79(...cfinal);
  }
  function blendScreen(color1, color2) {
    let [r1, g1, b1] = colorHexToRgbArray(color1);
    let [r2, g2, b2] = colorHexToRgbArray(color2);
    let r = 255 - (((255 - r1) * (255 - r2)) / 255);
    let g = 255 - (((255 - g1) * (255 - g2)) / 255);
    let b = 255 - (((255 - b1) * (255 - b2)) / 255);
    return colorRgbArgsToHex79(r, g, b);
  }
  function softLight(a, b) {
    a /= 255;
    b /= 255;
    let result;
    if (a < 0.5) {
      result = (2 * a - 1) * (b - b * b) + b;
    } else {
      result = (2 * a - 1) * (Math.sqrt(b) - b) + b;
    }
    return Math.min(Math.max(result * 255, 0), 255);
  }
  function blendSoftLight(baseColor, blendColor) {
    let [baseR, baseG, baseB] = colorHexToRgbArray(baseColor);
    let [blendR, blendG, blendB] = colorHexToRgbArray(blendColor);
    let resultR = Math.round(softLight(baseR, blendR));
    let resultG = Math.round(softLight(baseG, blendG));
    let resultB = Math.round(softLight(baseB, blendB));
    return colorRgbArgsToHex79(resultR, resultG, resultB);
  }
  let di = {
    darken: blendDarken, lighten: blendLighten, color: blendColor, colorBurn: blendColorBurn, colorDodge: blendColorDodge,
    difference: blendDifference, exclusion: blendExclusion, hardLight: blendHardLight, hue: blendHue,
    luminosity: blendLuminosity, multiply: blendMultiply, normal: blendNormal, overlay: blendOverlay,
    saturation: blendSaturation, screen: blendScreen, softLight: blendSoftLight
  };
  if (blendMode.includes('-')) blendMode = stringCSSToCamelCase(blendMode);
  let func = di[blendMode]; if (nundef(di)) { console.log('blendMode', blendMode); return c1; }
  c1hex = colorFrom(c1);
  c2hex = colorFrom(c2);
  let res = func(c1hex, c2hex);
  return res;
}
function colorBucket(s) {
	let di = { black: '', blue: '', bluered: 'bluemagenta', child: 'childrenRoomColors', cyan: '', sky: 'cyanblue', rich: 'deepRichColors', green: '', greenblue: 'greencyan', magenta: '', pink: 'magentapink', modern: 'modernColors', orange: '', orangered: '', orangeyellow: '', player: 'playerColors', red: '', vibrant: 'vibrantColors', yellow: '', lime: 'yellowgreen' };
	let c = di[s];
	if (isEmpty(c)) c = s;
	return rChoose(Object.keys(dicolor[c]));
}
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
function colorContrastFromElem(elem, list = ['white', 'black']) {
  let bg = mGetStyle(elem, 'bg');
  return colorContrastPickFromList(bg, list);
}
function colorContrastPickFromList(color, colorlist = ['white', 'black']) {
  let contrast = 0;
  let result = null;
  let rgb = colorHexToRgbArray(colorFrom(color));
  for (c1 of colorlist) {
    let x = colorHexToRgbArray(colorFrom(c1));
    let c = colorGetContrast(rgb, x);
    if (c > contrast) { contrast = c; result = c1; }
  }
  return result;
}
function colorDark(c, percent = 50, log = true) {
  if (nundef(c)) c = rColor(); else c = colorFrom(c);
  let zero1 = -percent / 100;
  return colorCalculator(zero1, c, undefined, !log);
}
function colorDistance(color1, color2) {
  let [r1, g1, b1] = colorHexToRgbArray(colorFrom(color1));
  let [r2, g2, b2] = colorHexToRgbArray(colorFrom(color2));
  let distance = Math.sqrt(
    Math.pow(r2 - r1, 2) +
    Math.pow(g2 - g1, 2) +
    Math.pow(b2 - b1, 2)
  );
  return Number(distance.toFixed(2));
}
function colorDistanceHSL(color1, color2) {
  let hsl1 = hexToHSL(color1);
  let hsl2 = hexToHSL(color2);
  let hueDiff = Math.abs(hsl1.h - hsl2.h);
  let hueDistance = Math.min(hueDiff, 360 - hueDiff) / 180;
  let lightnessDistance = Math.abs(hsl1.l - hsl2.l) / 100;
  let distance = hueDistance + 0.5 * lightnessDistance;
  return distance;
}
function colorDistanceHue(color1, color2) {
  let c1 = colorO(color1);
  let c2 = colorO(color2);
  let hueDiff = Math.abs(c1.hue - c2.hue);
  let hueDistance = Math.min(hueDiff, 360 - hueDiff) / 180;
  let num = (hueDistance * 100).toFixed(2);
  return Number(num);
}
function colorDistanceHueLum(color1, color2) {
  let c1 = colorO(color1);
  let c2 = colorO(color2);
  let hueDiff = Math.abs(c1.hue - c2.hue);
  let hueDistance = Math.min(hueDiff, 360 - hueDiff) / 180;
  let lightnessDistance = Math.abs(c1.lightness - c2.lightness);
  let distance = hueDistance + lightnessDistance;
  return Number((distance * 100).toFixed(2));
}
function colorFarestNamed(inputColor, namedColors) {
  let maxDistance = 0;
  let nearestColor = null;
  namedColors.forEach(namedColor => {
    let distance = colorDistance(inputColor, namedColor.hex);
    if (distance > maxDistance) {
      maxDistance = distance;
      nearestColor = namedColor;
    }
  });
  return nearestColor;
}
function colorFrom(c, a) {
  c = colorToHex79(c);
  if (nundef(a)) return c;
  return c.substring(0, 7) + (a < 1 ? alphaToHex(a) : '');
}
function colorFromHsl(h, s = 100, l = 50) { return colorFrom({ h, s, l }); }
function colorFromHslNamed(h, s = 100, l = 50) { let x = colorFrom({ h, s, l }); return colorNearestNamed(x); }
function colorFromHue(h, s = 100, l = 50) { return colorFrom({ h, s, l }); }
function colorFromHueNamed(h, s = 100, l = 50) { return colorFromHslNamed(h, s, l); }
function colorFromHwb(h, wPercent, bPercent) {
  let [r, g, b] = colorHwb360ToRgbArray(h, wPercent, bPercent);
  return colorRgbArgsToHex79(r, g, b);
}
function colorFromNat(ncol, wPercent, bPercent) {
  return colorFromNcol(ncol, wPercent, bPercent);
}
function colorFromNcol(ncol, wPercent, bPercent) {
  let h = colorNcolToHue(ncol); console.log('hue', h);
  return colorFromHwb(h, wPercent, bPercent);
}
function colorFromRgb(r, g, b) { return colorFrom({ r, g, b }); }
function colorFromRgbNamed(r, g, b) { let x = colorFrom({ r, g, b }); return colorNearestNamed(x); }
function colorGetBlack(c) { return colorToHwb360Object(c).b; }
function colorGetBucket(c) {
  let buckets = 'red orange yellow lime green greencyan cyan cyanblue blue bluemagenta magenta magentared black'.split(' ');
  c = colorFrom(c);
  let hsl = colorHexToHsl360Object(c);
  let hue = hsl.h;
  let hshift = (hue + 16) % 360;
  let ib = Math.floor(hshift / 30);
  return buckets[ib];
}
function colorGetContrast(c1, c2) {
  function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
        ? v / 12.92
        : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
  let rgb1 = colorHexToRgbArray(colorFrom(c1));
  let rgb2 = colorHexToRgbArray(colorFrom(c2));
  var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
  var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  let res = (brightest + 0.05) / (darkest + 0.05);
  return Number(res.toFixed(3));
}
function colorGetDicolorList() {
  let di = M.dicolor;
  let list = [];
  for (const k in di) {
    let bucket = di[k];
    for (const name in bucket) {
      let o = { name, bucket: k, hex: bucket[name] };
      list.push(o);
    }
  }
  return list;
}
function colorGetHue(c) { return colorGetHue01(c) * 360; }
function colorGetHue01(c) {
  let hex = colorFrom(c);
  let hsl = colorHexToHsl01Array(hex);
  return hsl[0];
}
function colorGetLum(c) { return colorGetLum01(c) * 100; }
function colorGetLum01(c) {
  let hex = colorFrom(c);
  let hsl = colorHexToHsl01Array(hex);
  return hsl[2];
}
function colorGetPureHue(c) { c = colorO(c); return c.hue == 0 ? c.hex : colorFromHsl(c.hue, 100, 50); }
function colorGetSat(c) { return colorGetSat01(c) * 100; }
function colorGetSat01(c) {
  let hex = colorFrom(c);
  let hsl = colorHexToHsl01Array(hex);
  return hsl[1];
}
function colorGetWhite(c) { return colorToHwb360Object(c).w; }
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
function colorHexToHsl01Array(c) { return colorRgbArgsToHsl01Array(...colorHexToRgbArray(c)); }
function colorHexToHsl360Object(c) {
  let arr = colorHexToHsl01Array(c);
  return colorHsl01ArrayToHsl360Object(arr);
}
function colorHexToHsl360String(c) {
  let arr = colorHexToHsl01Array(c);
  let o = colorHsl01ArrayToHsl360Object(arr);
  if (nundef(o.a)) return `hsl(${o.h},${o.s}%,${o.l}%)`;
  return `hsla(${o.h},${o.s}%,${o.l}%,${o.a})`;
}
function colorHexToHslRounded(c) {
  let arr = colorHexToHsl01Array(c);
  let o = colorHsl01ArrayToHsl360Object(arr);
  return { h: Math.round(o.h), s: Math.round(o.s), l: Math.round(o.l) };
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
function colorHexToRgbString(hex) {
  let o = colorHexToRgbObject(hex);
  if (nundef(o.a)) return `rgb(${o.r},${o.g},${o.b})`;
  return `rgba(${o.r},${o.g},${o.b},${o.a})`;
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
function colorHsl01ArrayToHsl360Object(arr) {
  let res = { h: arr[0] * 360, s: arr[1] * 100, l: arr[2] * 100 };
  if (arr.length > 3) res.a = arr[3];
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
function colorHueToNat(hue) {
  let x = Math.floor(hue / 60);
  let pure = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];
  let color = pure[x];
  let inc = hue % 60;
  return color.toUpperCase()[0] + inc;
}
function colorHueToNcol(hue) {
  let x = Math.floor(hue / 60);
  let pure = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];
  let color = pure[x];
  let inc = (hue % 60) / 0.6;
  return color.toUpperCase()[0] + toPercent(hue % 60, 60);
}
function colorHwb360ToRgbArray(h, w, b) {
  let [r, g, blue] = colorHsl01ArgsToRgbArray(h / 360, 1, 0.5);
  let whiteness = w / 100;
  let blackness = b / 100;
  r = Math.round((r / 255 * (1 - whiteness - blackness) + whiteness) * 255);
  g = Math.round((g / 255 * (1 - whiteness - blackness) + whiteness) * 255);
  b = Math.round((blue / 255 * (1 - whiteness - blackness) + whiteness) * 255);
  return [r, g, b];
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
function colorIsGrey(c, tolerance = 5) {
  let { r, g, b } = colorHexToRgbObject(colorFrom(c));
  return Math.abs(r - g) <= tolerance && Math.abs(r - b) <= tolerance && Math.abs(g - b) <= tolerance;
}
function colorIsHex79(c) { return isString(c) && c[0] == '#' && (c.length == 7 || c.length == 9); }
function colorLight(c, percent = 20, log = true) {
  if (nundef(c)) {
    return colorHsl360ArgsToHex79(rHue(), 100, 85);
  } else c = colorFrom(c);
  let zero1 = percent / 100;
  return colorCalculator(zero1, c, undefined, !log);
}
function colormapAsString() {
  let html = `
    <area style='cursor:pointer' shape='poly' coords='63,0,72,4,72,15,63,19,54,15,54,4' onclick='clickColor("#003366",-200,54)' onmouseover='mouseOverColor("#003366")' alt='#003366' />
    <area style='cursor:pointer' shape='poly' coords='81,0,90,4,90,15,81,19,72,15,72,4' onclick='clickColor("#336699",-200,72)' onmouseover='mouseOverColor("#336699")' alt='#336699' />
    <area style='cursor:pointer' shape='poly' coords='99,0,108,4,108,15,99,19,90,15,90,4' onclick='clickColor("#3366CC",-200,90)' onmouseover='mouseOverColor("#3366CC")' alt='#3366CC' />
    <area style='cursor:pointer' shape='poly' coords='117,0,126,4,126,15,117,19,108,15,108,4' onclick='clickColor("#003399",-200,108)' onmouseover='mouseOverColor("#003399")' alt='#003399' />
    <area style='cursor:pointer' shape='poly' coords='135,0,144,4,144,15,135,19,126,15,126,4' onclick='clickColor("#000099",-200,126)' onmouseover='mouseOverColor("#000099")' alt='#000099' />
    <area style='cursor:pointer' shape='poly' coords='153,0,162,4,162,15,153,19,144,15,144,4' onclick='clickColor("#0000CC",-200,144)' onmouseover='mouseOverColor("#0000CC")' alt='#0000CC' />
    <area style='cursor:pointer' shape='poly' coords='171,0,180,4,180,15,171,19,162,15,162,4' onclick='clickColor("#000066",-200,162)' onmouseover='mouseOverColor("#000066")' alt='#000066' />
    <area style='cursor:pointer' shape='poly' coords='54,15,63,19,63,30,54,34,45,30,45,19' onclick='clickColor("#006666",-185,45)' onmouseover='mouseOverColor("#006666")' alt='#006666' />
    <area style='cursor:pointer' shape='poly' coords='72,15,81,19,81,30,72,34,63,30,63,19' onclick='clickColor("#006699",-185,63)' onmouseover='mouseOverColor("#006699")' alt='#006699' />
    <area style='cursor:pointer' shape='poly' coords='90,15,99,19,99,30,90,34,81,30,81,19' onclick='clickColor("#0099CC",-185,81)' onmouseover='mouseOverColor("#0099CC")' alt='#0099CC' />
    <area style='cursor:pointer' shape='poly' coords='108,15,117,19,117,30,108,34,99,30,99,19' onclick='clickColor("#0066CC",-185,99)' onmouseover='mouseOverColor("#0066CC")' alt='#0066CC' />
    <area style='cursor:pointer' shape='poly' coords='126,15,135,19,135,30,126,34,117,30,117,19' onclick='clickColor("#0033CC",-185,117)' onmouseover='mouseOverColor("#0033CC")' alt='#0033CC' />
    <area style='cursor:pointer' shape='poly' coords='144,15,153,19,153,30,144,34,135,30,135,19' onclick='clickColor("#0000FF",-185,135)' onmouseover='mouseOverColor("#0000FF")' alt='#0000FF' />
    <area style='cursor:pointer' shape='poly' coords='162,15,171,19,171,30,162,34,153,30,153,19' onclick='clickColor("#3333FF",-185,153)' onmouseover='mouseOverColor("#3333FF")' alt='#3333FF' />
    <area style='cursor:pointer' shape='poly' coords='180,15,189,19,189,30,180,34,171,30,171,19' onclick='clickColor("#333399",-185,171)' onmouseover='mouseOverColor("#333399")' alt='#333399' />
    <area style='cursor:pointer' shape='poly' coords='45,30,54,34,54,45,45,49,36,45,36,34' onclick='clickColor("#669999",-170,36)' onmouseover='mouseOverColor("#669999")' alt='#669999' />
    <area style='cursor:pointer' shape='poly' coords='63,30,72,34,72,45,63,49,54,45,54,34' onclick='clickColor("#009999",-170,54)' onmouseover='mouseOverColor("#009999")' alt='#009999' />
    <area style='cursor:pointer' shape='poly' coords='81,30,90,34,90,45,81,49,72,45,72,34' onclick='clickColor("#33CCCC",-170,72)' onmouseover='mouseOverColor("#33CCCC")' alt='#33CCCC' />
    <area style='cursor:pointer' shape='poly' coords='99,30,108,34,108,45,99,49,90,45,90,34' onclick='clickColor("#00CCFF",-170,90)' onmouseover='mouseOverColor("#00CCFF")' alt='#00CCFF' />
    <area style='cursor:pointer' shape='poly' coords='117,30,126,34,126,45,117,49,108,45,108,34' onclick='clickColor("#0099FF",-170,108)' onmouseover='mouseOverColor("#0099FF")' alt='#0099FF' />
    <area style='cursor:pointer' shape='poly' coords='135,30,144,34,144,45,135,49,126,45,126,34' onclick='clickColor("#0066FF",-170,126)' onmouseover='mouseOverColor("#0066FF")' alt='#0066FF' />
    <area style='cursor:pointer' shape='poly' coords='153,30,162,34,162,45,153,49,144,45,144,34' onclick='clickColor("#3366FF",-170,144)' onmouseover='mouseOverColor("#3366FF")' alt='#3366FF' />
    <area style='cursor:pointer' shape='poly' coords='171,30,180,34,180,45,171,49,162,45,162,34' onclick='clickColor("#3333CC",-170,162)' onmouseover='mouseOverColor("#3333CC")' alt='#3333CC' />
    <area style='cursor:pointer' shape='poly' coords='189,30,198,34,198,45,189,49,180,45,180,34' onclick='clickColor("#666699",-170,180)' onmouseover='mouseOverColor("#666699")' alt='#666699' />
    <area style='cursor:pointer' shape='poly' coords='36,45,45,49,45,60,36,64,27,60,27,49' onclick='clickColor("#339966",-155,27)' onmouseover='mouseOverColor("#339966")' alt='#339966' />
    <area style='cursor:pointer' shape='poly' coords='54,45,63,49,63,60,54,64,45,60,45,49' onclick='clickColor("#00CC99",-155,45)' onmouseover='mouseOverColor("#00CC99")' alt='#00CC99' />
    <area style='cursor:pointer' shape='poly' coords='72,45,81,49,81,60,72,64,63,60,63,49' onclick='clickColor("#00FFCC",-155,63)' onmouseover='mouseOverColor("#00FFCC")' alt='#00FFCC' />
    <area style='cursor:pointer' shape='poly' coords='90,45,99,49,99,60,90,64,81,60,81,49' onclick='clickColor("#00FFFF",-155,81)' onmouseover='mouseOverColor("#00FFFF")' alt='#00FFFF' />
    <area style='cursor:pointer' shape='poly' coords='108,45,117,49,117,60,108,64,99,60,99,49' onclick='clickColor("#33CCFF",-155,99)' onmouseover='mouseOverColor("#33CCFF")' alt='#33CCFF' />
    <area style='cursor:pointer' shape='poly' coords='126,45,135,49,135,60,126,64,117,60,117,49' onclick='clickColor("#3399FF",-155,117)' onmouseover='mouseOverColor("#3399FF")' alt='#3399FF' />
    <area style='cursor:pointer' shape='poly' coords='144,45,153,49,153,60,144,64,135,60,135,49' onclick='clickColor("#6699FF",-155,135)' onmouseover='mouseOverColor("#6699FF")' alt='#6699FF' />
    <area style='cursor:pointer' shape='poly' coords='162,45,171,49,171,60,162,64,153,60,153,49' onclick='clickColor("#6666FF",-155,153)' onmouseover='mouseOverColor("#6666FF")' alt='#6666FF' />
    <area style='cursor:pointer' shape='poly' coords='180,45,189,49,189,60,180,64,171,60,171,49' onclick='clickColor("#6600FF",-155,171)' onmouseover='mouseOverColor("#6600FF")' alt='#6600FF' />
    <area style='cursor:pointer' shape='poly' coords='198,45,207,49,207,60,198,64,189,60,189,49' onclick='clickColor("#6600CC",-155,189)' onmouseover='mouseOverColor("#6600CC")' alt='#6600CC' />
    <area style='cursor:pointer' shape='poly' coords='27,60,36,64,36,75,27,79,18,75,18,64' onclick='clickColor("#339933",-140,18)' onmouseover='mouseOverColor("#339933")' alt='#339933' />
    <area style='cursor:pointer' shape='poly' coords='45,60,54,64,54,75,45,79,36,75,36,64' onclick='clickColor("#00CC66",-140,36)' onmouseover='mouseOverColor("#00CC66")' alt='#00CC66' />
    <area style='cursor:pointer' shape='poly' coords='63,60,72,64,72,75,63,79,54,75,54,64' onclick='clickColor("#00FF99",-140,54)' onmouseover='mouseOverColor("#00FF99")' alt='#00FF99' />
    <area style='cursor:pointer' shape='poly' coords='81,60,90,64,90,75,81,79,72,75,72,64' onclick='clickColor("#66FFCC",-140,72)' onmouseover='mouseOverColor("#66FFCC")' alt='#66FFCC' />
    <area style='cursor:pointer' shape='poly' coords='99,60,108,64,108,75,99,79,90,75,90,64' onclick='clickColor("#66FFFF",-140,90)' onmouseover='mouseOverColor("#66FFFF")' alt='#66FFFF' />
    <area style='cursor:pointer' shape='poly' coords='117,60,126,64,126,75,117,79,108,75,108,64' onclick='clickColor("#66CCFF",-140,108)' onmouseover='mouseOverColor("#66CCFF")' alt='#66CCFF' />
    <area style='cursor:pointer' shape='poly' coords='135,60,144,64,144,75,135,79,126,75,126,64' onclick='clickColor("#99CCFF",-140,126)' onmouseover='mouseOverColor("#99CCFF")' alt='#99CCFF' />
    <area style='cursor:pointer' shape='poly' coords='153,60,162,64,162,75,153,79,144,75,144,64' onclick='clickColor("#9999FF",-140,144)' onmouseover='mouseOverColor("#9999FF")' alt='#9999FF' />
    <area style='cursor:pointer' shape='poly' coords='171,60,180,64,180,75,171,79,162,75,162,64' onclick='clickColor("#9966FF",-140,162)' onmouseover='mouseOverColor("#9966FF")' alt='#9966FF' />
    <area style='cursor:pointer' shape='poly' coords='189,60,198,64,198,75,189,79,180,75,180,64' onclick='clickColor("#9933FF",-140,180)' onmouseover='mouseOverColor("#9933FF")' alt='#9933FF' />
    <area style='cursor:pointer' shape='poly' coords='207,60,216,64,216,75,207,79,198,75,198,64' onclick='clickColor("#9900FF",-140,198)' onmouseover='mouseOverColor("#9900FF")' alt='#9900FF' />
    <area style='cursor:pointer' shape='poly' coords='18,75,27,79,27,90,18,94,9,90,9,79' onclick='clickColor("#006600",-125,9)' onmouseover='mouseOverColor("#006600")' alt='#006600' />
    <area style='cursor:pointer' shape='poly' coords='36,75,45,79,45,90,36,94,27,90,27,79' onclick='clickColor("#00CC00",-125,27)' onmouseover='mouseOverColor("#00CC00")' alt='#00CC00' />
    <area style='cursor:pointer' shape='poly' coords='54,75,63,79,63,90,54,94,45,90,45,79' onclick='clickColor("#00FF00",-125,45)' onmouseover='mouseOverColor("#00FF00")' alt='#00FF00' />
    <area style='cursor:pointer' shape='poly' coords='72,75,81,79,81,90,72,94,63,90,63,79' onclick='clickColor("#66FF99",-125,63)' onmouseover='mouseOverColor("#66FF99")' alt='#66FF99' />
    <area style='cursor:pointer' shape='poly' coords='90,75,99,79,99,90,90,94,81,90,81,79' onclick='clickColor("#99FFCC",-125,81)' onmouseover='mouseOverColor("#99FFCC")' alt='#99FFCC' />
    <area style='cursor:pointer' shape='poly' coords='108,75,117,79,117,90,108,94,99,90,99,79' onclick='clickColor("#CCFFFF",-125,99)' onmouseover='mouseOverColor("#CCFFFF")' alt='#CCFFFF' />
    <area style='cursor:pointer' shape='poly' coords='126,75,135,79,135,90,126,94,117,90,117,79' onclick='clickColor("#CCCCFF",-125,117)' onmouseover='mouseOverColor("#CCCCFF")' alt='#CCCCFF' />
    <area style='cursor:pointer' shape='poly' coords='144,75,153,79,153,90,144,94,135,90,135,79' onclick='clickColor("#CC99FF",-125,135)' onmouseover='mouseOverColor("#CC99FF")' alt='#CC99FF' />
    <area style='cursor:pointer' shape='poly' coords='162,75,171,79,171,90,162,94,153,90,153,79' onclick='clickColor("#CC66FF",-125,153)' onmouseover='mouseOverColor("#CC66FF")' alt='#CC66FF' />
    <area style='cursor:pointer' shape='poly' coords='180,75,189,79,189,90,180,94,171,90,171,79' onclick='clickColor("#CC33FF",-125,171)' onmouseover='mouseOverColor("#CC33FF")' alt='#CC33FF' />
    <area style='cursor:pointer' shape='poly' coords='198,75,207,79,207,90,198,94,189,90,189,79' onclick='clickColor("#CC00FF",-125,189)' onmouseover='mouseOverColor("#CC00FF")' alt='#CC00FF' />
    <area style='cursor:pointer' shape='poly' coords='216,75,225,79,225,90,216,94,207,90,207,79' onclick='clickColor("#9900CC",-125,207)' onmouseover='mouseOverColor("#9900CC")' alt='#9900CC' />
    <area style='cursor:pointer' shape='poly' coords='9,90,18,94,18,105,9,109,0,105,0,94' onclick='clickColor("#003300",-110,0)' onmouseover='mouseOverColor("#003300")' alt='#003300' />
    <area style='cursor:pointer' shape='poly' coords='27,90,36,94,36,105,27,109,18,105,18,94' onclick='clickColor("#009933",-110,18)' onmouseover='mouseOverColor("#009933")' alt='#009933' />
    <area style='cursor:pointer' shape='poly' coords='45,90,54,94,54,105,45,109,36,105,36,94' onclick='clickColor("#33CC33",-110,36)' onmouseover='mouseOverColor("#33CC33")' alt='#33CC33' />
    <area style='cursor:pointer' shape='poly' coords='63,90,72,94,72,105,63,109,54,105,54,94' onclick='clickColor("#66FF66",-110,54)' onmouseover='mouseOverColor("#66FF66")' alt='#66FF66' />
    <area style='cursor:pointer' shape='poly' coords='81,90,90,94,90,105,81,109,72,105,72,94' onclick='clickColor("#99FF99",-110,72)' onmouseover='mouseOverColor("#99FF99")' alt='#99FF99' />
    <area style='cursor:pointer' shape='poly' coords='99,90,108,94,108,105,99,109,90,105,90,94' onclick='clickColor("#CCFFCC",-110,90)' onmouseover='mouseOverColor("#CCFFCC")' alt='#CCFFCC' />
    <area style='cursor:pointer' shape='poly' coords='117,90,126,94,126,105,117,109,108,105,108,94' onclick='clickColor("#FFFFFF",-110,108)' onmouseover='mouseOverColor("#FFFFFF")' alt='#FFFFFF' />
    <area style='cursor:pointer' shape='poly' coords='135,90,144,94,144,105,135,109,126,105,126,94' onclick='clickColor("#FFCCEE",-110,126)' onmouseover='mouseOverColor("#FFCCEE")' alt='#FFCCFF' />
    <area style='cursor:pointer' shape='poly' coords='153,90,162,94,162,105,153,109,144,105,144,94' onclick='clickColor("#FFAAEE",-110,144)' onmouseover='mouseOverColor("#FFAAEE")' alt='#FF33DD' />
    <area style='cursor:pointer' shape='poly' coords='171,90,180,94,180,105,171,109,162,105,162,94' onclick='clickColor("#FF88EE",-110,162)' onmouseover='mouseOverColor("#FF88EE")' alt='#FF66FF' />
    <area style='cursor:pointer' shape='poly' coords='189,90,198,94,198,105,189,109,180,105,180,94' onclick='clickColor("#FF14EE",-110,180)' onmouseover='mouseOverColor("#FF14EE")' alt='#FF00FF' />
    <area style='cursor:pointer' shape='poly' coords='207,90,216,94,216,105,207,109,198,105,198,94' onclick='clickColor("#CC00CC",-110,198)' onmouseover='mouseOverColor("#CC00CC")' alt='#CC00CC' />
    <area style='cursor:pointer' shape='poly' coords='225,90,234,94,234,105,225,109,216,105,216,94' onclick='clickColor("#660066",-110,216)' onmouseover='mouseOverColor("#660066")' alt='#660066' />
    <area style='cursor:pointer' shape='poly' coords='18,105,27,109,27,120,18,124,9,120,9,109' onclick='clickColor("#336600",-95,9)' onmouseover='mouseOverColor("#336600")' alt='#336600' />
    <area style='cursor:pointer' shape='poly' coords='36,105,45,109,45,120,36,124,27,120,27,109' onclick='clickColor("#009900",-95,27)' onmouseover='mouseOverColor("#009900")' alt='#009900' />
    <area style='cursor:pointer' shape='poly' coords='54,105,63,109,63,120,54,124,45,120,45,109' onclick='clickColor("#66FF33",-95,45)' onmouseover='mouseOverColor("#66FF33")' alt='#66FF33' />
    <area style='cursor:pointer' shape='poly' coords='72,105,81,109,81,120,72,124,63,120,63,109' onclick='clickColor("#99FF66",-95,63)' onmouseover='mouseOverColor("#99FF66")' alt='#99FF66' />
    <area style='cursor:pointer' shape='poly' coords='90,105,99,109,99,120,90,124,81,120,81,109' onclick='clickColor("#CCFF99",-95,81)' onmouseover='mouseOverColor("#CCFF99")' alt='#CCFF99' />
    <area style='cursor:pointer' shape='poly' coords='108,105,117,109,117,120,108,124,99,120,99,109' onclick='clickColor("#FFFFCC",-95,99)' onmouseover='mouseOverColor("#FFFFCC")' alt='#FFFFCC' />
    <area style='cursor:pointer' shape='poly' coords='126,105,135,109,135,120,126,124,117,120,117,109' onclick='clickColor("#FFCCCC",-95,117)' onmouseover='mouseOverColor("#FFCCCC")' alt='#FFCCCC' />
    <area style='cursor:pointer' shape='poly' coords='144,105,153,109,153,120,144,124,135,120,135,109' onclick='clickColor("#FF99CC",-95,135)' onmouseover='mouseOverColor("#FF99CC")' alt='#FF99CC' />
    <area style='cursor:pointer' shape='poly' coords='162,105,171,109,171,120,162,124,153,120,153,109' onclick='clickColor("#FF66CC",-95,153)' onmouseover='mouseOverColor("#FF66CC")' alt='#FF66CC' />
    <area style='cursor:pointer' shape='poly' coords='180,105,189,109,189,120,180,124,171,120,171,109' onclick='clickColor("#FF33CC",-95,171)' onmouseover='mouseOverColor("#FF33CC")' alt='#FF33CC' />
    <area style='cursor:pointer' shape='poly' coords='198,105,207,109,207,120,198,124,189,120,189,109' onclick='clickColor("#CC0099",-95,189)' onmouseover='mouseOverColor("#CC0099")' alt='#CC0099' />
    <area style='cursor:pointer' shape='poly' coords='216,105,225,109,225,120,216,124,207,120,207,109' onclick='clickColor("#993399",-95,207)' onmouseover='mouseOverColor("#993399")' alt='#993399' />
    <area style='cursor:pointer' shape='poly' coords='27,120,36,124,36,135,27,139,18,135,18,124' onclick='clickColor("#333300",-80,18)' onmouseover='mouseOverColor("#333300")' alt='#333300' />
    <area style='cursor:pointer' shape='poly' coords='45,120,54,124,54,135,45,139,36,135,36,124' onclick='clickColor("#669900",-80,36)' onmouseover='mouseOverColor("#669900")' alt='#669900' />
    <area style='cursor:pointer' shape='poly' coords='63,120,72,124,72,135,63,139,54,135,54,124' onclick='clickColor("#99FF33",-80,54)' onmouseover='mouseOverColor("#99FF33")' alt='#99FF33' />
    <area style='cursor:pointer' shape='poly' coords='81,120,90,124,90,135,81,139,72,135,72,124' onclick='clickColor("#CCFF66",-80,72)' onmouseover='mouseOverColor("#CCFF66")' alt='#CCFF66' />
    <area style='cursor:pointer' shape='poly' coords='99,120,108,124,108,135,99,139,90,135,90,124' onclick='clickColor("#FFFF99",-80,90)' onmouseover='mouseOverColor("#FFFF99")' alt='#FFFF99' />
    <area style='cursor:pointer' shape='poly' coords='117,120,126,124,126,135,117,139,108,135,108,124' onclick='clickColor("#FFCC99",-80,108)' onmouseover='mouseOverColor("#FFCC99")' alt='#FFCC99' />
    <area style='cursor:pointer' shape='poly' coords='135,120,144,124,144,135,135,139,126,135,126,124' onclick='clickColor("#FF9999",-80,126)' onmouseover='mouseOverColor("#FF9999")' alt='#FF9999' />
    <area style='cursor:pointer' shape='poly' coords='153,120,162,124,162,135,153,139,144,135,144,124' onclick='clickColor("#FF6699",-80,144)' onmouseover='mouseOverColor("#FF6699")' alt='#FF6699' />
    <area style='cursor:pointer' shape='poly' coords='171,120,180,124,180,135,171,139,162,135,162,124' onclick='clickColor("#FF3399",-80,162)' onmouseover='mouseOverColor("#FF3399")' alt='#FF3399' />
    <area style='cursor:pointer' shape='poly' coords='189,120,198,124,198,135,189,139,180,135,180,124' onclick='clickColor("#CC3399",-80,180)' onmouseover='mouseOverColor("#CC3399")' alt='#CC3399' />
    <area style='cursor:pointer' shape='poly' coords='207,120,216,124,216,135,207,139,198,135,198,124' onclick='clickColor("#990099",-80,198)' onmouseover='mouseOverColor("#990099")' alt='#990099' />
    <area style='cursor:pointer' shape='poly' coords='36,135,45,139,45,150,36,154,27,150,27,139' onclick='clickColor("#666633",-65,27)' onmouseover='mouseOverColor("#666633")' alt='#666633' />
    <area style='cursor:pointer' shape='poly' coords='54,135,63,139,63,150,54,154,45,150,45,139' onclick='clickColor("#99CC00",-65,45)' onmouseover='mouseOverColor("#99CC00")' alt='#99CC00' />
    <area style='cursor:pointer' shape='poly' coords='72,135,81,139,81,150,72,154,63,150,63,139' onclick='clickColor("#CCFF33",-65,63)' onmouseover='mouseOverColor("#CCFF33")' alt='#CCFF33' />
    <area style='cursor:pointer' shape='poly' coords='90,135,99,139,99,150,90,154,81,150,81,139' onclick='clickColor("#FFFF66",-65,81)' onmouseover='mouseOverColor("#FFFF66")' alt='#FFFF66' />
    <area style='cursor:pointer' shape='poly' coords='108,135,117,139,117,150,108,154,99,150,99,139' onclick='clickColor("#FFCC66",-65,99)' onmouseover='mouseOverColor("#FFCC66")' alt='#FFCC66' />
    <area style='cursor:pointer' shape='poly' coords='126,135,135,139,135,150,126,154,117,150,117,139' onclick='clickColor("#FF9966",-65,117)' onmouseover='mouseOverColor("#FF9966")' alt='#FF9966' />
    <area style='cursor:pointer' shape='poly' coords='144,135,153,139,153,150,144,154,135,150,135,139' onclick='clickColor("#FF6666",-65,135)' onmouseover='mouseOverColor("#FF6666")' alt='#FF6666' />
    <area style='cursor:pointer' shape='poly' coords='162,135,171,139,171,150,162,154,153,150,153,139' onclick='clickColor("#FF0066",-65,153)' onmouseover='mouseOverColor("#FF0066")' alt='#FF0066' />
    <area style='cursor:pointer' shape='poly' coords='180,135,189,139,189,150,180,154,171,150,171,139' onclick='clickColor("#CC6699",-65,171)' onmouseover='mouseOverColor("#CC6699")' alt='#CC6699' />
    <area style='cursor:pointer' shape='poly' coords='198,135,207,139,207,150,198,154,189,150,189,139' onclick='clickColor("#993366",-65,189)' onmouseover='mouseOverColor("#993366")' alt='#993366' />
    <area style='cursor:pointer' shape='poly' coords='45,150,54,154,54,165,45,169,36,165,36,154' onclick='clickColor("#999966",-50,36)' onmouseover='mouseOverColor("#999966")' alt='#999966' />
    <area style='cursor:pointer' shape='poly' coords='63,150,72,154,72,165,63,169,54,165,54,154' onclick='clickColor("#CCCC00",-50,54)' onmouseover='mouseOverColor("#CCCC00")' alt='#CCCC00' />
    <area style='cursor:pointer' shape='poly' coords='81,150,90,154,90,165,81,169,72,165,72,154' onclick='clickColor("#FFFF00",-50,72)' onmouseover='mouseOverColor("#FFFF00")' alt='#FFFF00' />
    <area style='cursor:pointer' shape='poly' coords='99,150,108,154,108,165,99,169,90,165,90,154' onclick='clickColor("#FFCC00",-50,90)' onmouseover='mouseOverColor("#FFCC00")' alt='#FFCC00' />
    <area style='cursor:pointer' shape='poly' coords='117,150,126,154,126,165,117,169,108,165,108,154' onclick='clickColor("#FF9933",-50,108)' onmouseover='mouseOverColor("#FF9933")' alt='#FF9933' />
    <area style='cursor:pointer' shape='poly' coords='135,150,144,154,144,165,135,169,126,165,126,154' onclick='clickColor("#FF6600",-50,126)' onmouseover='mouseOverColor("#FF6600")' alt='#FF6600' />
    <area style='cursor:pointer' shape='poly' coords='153,150,162,154,162,165,153,169,144,165,144,154' onclick='clickColor("#FF5050",-50,144)' onmouseover='mouseOverColor("#FF5050")' alt='#FF5050' />
    <area style='cursor:pointer' shape='poly' coords='171,150,180,154,180,165,171,169,162,165,162,154' onclick='clickColor("#CC0066",-50,162)' onmouseover='mouseOverColor("#CC0066")' alt='#CC0066' />
    <area style='cursor:pointer' shape='poly' coords='189,150,198,154,198,165,189,169,180,165,180,154' onclick='clickColor("#660033",-50,180)' onmouseover='mouseOverColor("#660033")' alt='#660033' />
    <area style='cursor:pointer' shape='poly' coords='54,165,63,169,63,180,54,184,45,180,45,169' onclick='clickColor("#996633",-35,45)' onmouseover='mouseOverColor("#996633")' alt='#996633' />
    <area style='cursor:pointer' shape='poly' coords='72,165,81,169,81,180,72,184,63,180,63,169' onclick='clickColor("#CC9900",-35,63)' onmouseover='mouseOverColor("#CC9900")' alt='#CC9900' />
    <area style='cursor:pointer' shape='poly' coords='90,165,99,169,99,180,90,184,81,180,81,169' onclick='clickColor("#FF9900",-35,81)' onmouseover='mouseOverColor("#FF9900")' alt='#FF9900' />
    <area style='cursor:pointer' shape='poly' coords='108,165,117,169,117,180,108,184,99,180,99,169' onclick='clickColor("#CC6600",-35,99)' onmouseover='mouseOverColor("#CC6600")' alt='#CC6600' />
    <area style='cursor:pointer' shape='poly' coords='126,165,135,169,135,180,126,184,117,180,117,169' onclick='clickColor("#FF3300",-35,117)' onmouseover='mouseOverColor("#FF3300")' alt='#FF3300' />
    <area style='cursor:pointer' shape='poly' coords='144,165,153,169,153,180,144,184,135,180,135,169' onclick='clickColor("#FF0000",-35,135)' onmouseover='mouseOverColor("#FF0000")' alt='#FF0000' />
    <area style='cursor:pointer' shape='poly' coords='162,165,171,169,171,180,162,184,153,180,153,169' onclick='clickColor("#CC0000",-35,153)' onmouseover='mouseOverColor("#CC0000")' alt='#CC0000' />
    <area style='cursor:pointer' shape='poly' coords='180,165,189,169,189,180,180,184,171,180,171,169' onclick='clickColor("#990033",-35,171)' onmouseover='mouseOverColor("#990033")' alt='#990033' />
    <area style='cursor:pointer' shape='poly' coords='63,180,72,184,72,195,63,199,54,195,54,184' onclick='clickColor("#663300",-20,54)' onmouseover='mouseOverColor("#663300")' alt='#663300' />
    <area style='cursor:pointer' shape='poly' coords='81,180,90,184,90,195,81,199,72,195,72,184' onclick='clickColor("#996600",-20,72)' onmouseover='mouseOverColor("#996600")' alt='#996600' />
    <area style='cursor:pointer' shape='poly' coords='99,180,108,184,108,195,99,199,90,195,90,184' onclick='clickColor("#CC3300",-20,90)' onmouseover='mouseOverColor("#CC3300")' alt='#CC3300' />
    <area style='cursor:pointer' shape='poly' coords='117,180,126,184,126,195,117,199,108,195,108,184' onclick='clickColor("#993300",-20,108)' onmouseover='mouseOverColor("#993300")' alt='#993300' />
    <area style='cursor:pointer' shape='poly' coords='135,180,144,184,144,195,135,199,126,195,126,184' onclick='clickColor("#990000",-20,126)' onmouseover='mouseOverColor("#990000")' alt='#990000' />
    <area style='cursor:pointer' shape='poly' coords='153,180,162,184,162,195,153,199,144,195,144,184' onclick='clickColor("#800000",-20,144)' onmouseover='mouseOverColor("#800000")' alt='#800000' />
    <area style='cursor:pointer' shape='poly' coords='171,180,180,184,180,195,171,199,162,195,162,184' onclick='clickColor("#993333",-20,162)' onmouseover='mouseOverColor("#993333")' alt='#993333' />
   `;
  return html;
}
function colormapAsStringOrig() {
  let html = `
    <area style='cursor:pointer' shape='poly' coords='63,0,72,4,72,15,63,19,54,15,54,4' onclick='clickColor("#003366",-200,54)' onmouseover='mouseOverColor("#003366")' alt='#003366' />
    <area style='cursor:pointer' shape='poly' coords='81,0,90,4,90,15,81,19,72,15,72,4' onclick='clickColor("#336699",-200,72)' onmouseover='mouseOverColor("#336699")' alt='#336699' />
    <area style='cursor:pointer' shape='poly' coords='99,0,108,4,108,15,99,19,90,15,90,4' onclick='clickColor("#3366CC",-200,90)' onmouseover='mouseOverColor("#3366CC")' alt='#3366CC' />
    <area style='cursor:pointer' shape='poly' coords='117,0,126,4,126,15,117,19,108,15,108,4' onclick='clickColor("#003399",-200,108)' onmouseover='mouseOverColor("#003399")' alt='#003399' />
    <area style='cursor:pointer' shape='poly' coords='135,0,144,4,144,15,135,19,126,15,126,4' onclick='clickColor("#000099",-200,126)' onmouseover='mouseOverColor("#000099")' alt='#000099' />
    <area style='cursor:pointer' shape='poly' coords='153,0,162,4,162,15,153,19,144,15,144,4' onclick='clickColor("#0000CC",-200,144)' onmouseover='mouseOverColor("#0000CC")' alt='#0000CC' />
    <area style='cursor:pointer' shape='poly' coords='171,0,180,4,180,15,171,19,162,15,162,4' onclick='clickColor("#000066",-200,162)' onmouseover='mouseOverColor("#000066")' alt='#000066' />
    <area style='cursor:pointer' shape='poly' coords='54,15,63,19,63,30,54,34,45,30,45,19' onclick='clickColor("#006666",-185,45)' onmouseover='mouseOverColor("#006666")' alt='#006666' />
    <area style='cursor:pointer' shape='poly' coords='72,15,81,19,81,30,72,34,63,30,63,19' onclick='clickColor("#006699",-185,63)' onmouseover='mouseOverColor("#006699")' alt='#006699' />
    <area style='cursor:pointer' shape='poly' coords='90,15,99,19,99,30,90,34,81,30,81,19' onclick='clickColor("#0099CC",-185,81)' onmouseover='mouseOverColor("#0099CC")' alt='#0099CC' />
    <area style='cursor:pointer' shape='poly' coords='108,15,117,19,117,30,108,34,99,30,99,19' onclick='clickColor("#0066CC",-185,99)' onmouseover='mouseOverColor("#0066CC")' alt='#0066CC' />
    <area style='cursor:pointer' shape='poly' coords='126,15,135,19,135,30,126,34,117,30,117,19' onclick='clickColor("#0033CC",-185,117)' onmouseover='mouseOverColor("#0033CC")' alt='#0033CC' />
    <area style='cursor:pointer' shape='poly' coords='144,15,153,19,153,30,144,34,135,30,135,19' onclick='clickColor("#0000FF",-185,135)' onmouseover='mouseOverColor("#0000FF")' alt='#0000FF' />
    <area style='cursor:pointer' shape='poly' coords='162,15,171,19,171,30,162,34,153,30,153,19' onclick='clickColor("#3333FF",-185,153)' onmouseover='mouseOverColor("#3333FF")' alt='#3333FF' />
    <area style='cursor:pointer' shape='poly' coords='180,15,189,19,189,30,180,34,171,30,171,19' onclick='clickColor("#333399",-185,171)' onmouseover='mouseOverColor("#333399")' alt='#333399' />
    <area style='cursor:pointer' shape='poly' coords='45,30,54,34,54,45,45,49,36,45,36,34' onclick='clickColor("#669999",-170,36)' onmouseover='mouseOverColor("#669999")' alt='#669999' />
    <area style='cursor:pointer' shape='poly' coords='63,30,72,34,72,45,63,49,54,45,54,34' onclick='clickColor("#009999",-170,54)' onmouseover='mouseOverColor("#009999")' alt='#009999' />
    <area style='cursor:pointer' shape='poly' coords='81,30,90,34,90,45,81,49,72,45,72,34' onclick='clickColor("#33CCCC",-170,72)' onmouseover='mouseOverColor("#33CCCC")' alt='#33CCCC' />
    <area style='cursor:pointer' shape='poly' coords='99,30,108,34,108,45,99,49,90,45,90,34' onclick='clickColor("#00CCFF",-170,90)' onmouseover='mouseOverColor("#00CCFF")' alt='#00CCFF' />
    <area style='cursor:pointer' shape='poly' coords='117,30,126,34,126,45,117,49,108,45,108,34' onclick='clickColor("#0099FF",-170,108)' onmouseover='mouseOverColor("#0099FF")' alt='#0099FF' />
    <area style='cursor:pointer' shape='poly' coords='135,30,144,34,144,45,135,49,126,45,126,34' onclick='clickColor("#0066FF",-170,126)' onmouseover='mouseOverColor("#0066FF")' alt='#0066FF' />
    <area style='cursor:pointer' shape='poly' coords='153,30,162,34,162,45,153,49,144,45,144,34' onclick='clickColor("#3366FF",-170,144)' onmouseover='mouseOverColor("#3366FF")' alt='#3366FF' />
    <area style='cursor:pointer' shape='poly' coords='171,30,180,34,180,45,171,49,162,45,162,34' onclick='clickColor("#3333CC",-170,162)' onmouseover='mouseOverColor("#3333CC")' alt='#3333CC' />
    <area style='cursor:pointer' shape='poly' coords='189,30,198,34,198,45,189,49,180,45,180,34' onclick='clickColor("#666699",-170,180)' onmouseover='mouseOverColor("#666699")' alt='#666699' />
    <area style='cursor:pointer' shape='poly' coords='36,45,45,49,45,60,36,64,27,60,27,49' onclick='clickColor("#339966",-155,27)' onmouseover='mouseOverColor("#339966")' alt='#339966' />
    <area style='cursor:pointer' shape='poly' coords='54,45,63,49,63,60,54,64,45,60,45,49' onclick='clickColor("#00CC99",-155,45)' onmouseover='mouseOverColor("#00CC99")' alt='#00CC99' />
    <area style='cursor:pointer' shape='poly' coords='72,45,81,49,81,60,72,64,63,60,63,49' onclick='clickColor("#00FFCC",-155,63)' onmouseover='mouseOverColor("#00FFCC")' alt='#00FFCC' />
    <area style='cursor:pointer' shape='poly' coords='90,45,99,49,99,60,90,64,81,60,81,49' onclick='clickColor("#00FFFF",-155,81)' onmouseover='mouseOverColor("#00FFFF")' alt='#00FFFF' />
    <area style='cursor:pointer' shape='poly' coords='108,45,117,49,117,60,108,64,99,60,99,49' onclick='clickColor("#33CCFF",-155,99)' onmouseover='mouseOverColor("#33CCFF")' alt='#33CCFF' />
    <area style='cursor:pointer' shape='poly' coords='126,45,135,49,135,60,126,64,117,60,117,49' onclick='clickColor("#3399FF",-155,117)' onmouseover='mouseOverColor("#3399FF")' alt='#3399FF' />
    <area style='cursor:pointer' shape='poly' coords='144,45,153,49,153,60,144,64,135,60,135,49' onclick='clickColor("#6699FF",-155,135)' onmouseover='mouseOverColor("#6699FF")' alt='#6699FF' />
    <area style='cursor:pointer' shape='poly' coords='162,45,171,49,171,60,162,64,153,60,153,49' onclick='clickColor("#6666FF",-155,153)' onmouseover='mouseOverColor("#6666FF")' alt='#6666FF' />
    <area style='cursor:pointer' shape='poly' coords='180,45,189,49,189,60,180,64,171,60,171,49' onclick='clickColor("#6600FF",-155,171)' onmouseover='mouseOverColor("#6600FF")' alt='#6600FF' />
    <area style='cursor:pointer' shape='poly' coords='198,45,207,49,207,60,198,64,189,60,189,49' onclick='clickColor("#6600CC",-155,189)' onmouseover='mouseOverColor("#6600CC")' alt='#6600CC' />
    <area style='cursor:pointer' shape='poly' coords='27,60,36,64,36,75,27,79,18,75,18,64' onclick='clickColor("#339933",-140,18)' onmouseover='mouseOverColor("#339933")' alt='#339933' />
    <area style='cursor:pointer' shape='poly' coords='45,60,54,64,54,75,45,79,36,75,36,64' onclick='clickColor("#00CC66",-140,36)' onmouseover='mouseOverColor("#00CC66")' alt='#00CC66' />
    <area style='cursor:pointer' shape='poly' coords='63,60,72,64,72,75,63,79,54,75,54,64' onclick='clickColor("#00FF99",-140,54)' onmouseover='mouseOverColor("#00FF99")' alt='#00FF99' />
    <area style='cursor:pointer' shape='poly' coords='81,60,90,64,90,75,81,79,72,75,72,64' onclick='clickColor("#66FFCC",-140,72)' onmouseover='mouseOverColor("#66FFCC")' alt='#66FFCC' />
    <area style='cursor:pointer' shape='poly' coords='99,60,108,64,108,75,99,79,90,75,90,64' onclick='clickColor("#66FFFF",-140,90)' onmouseover='mouseOverColor("#66FFFF")' alt='#66FFFF' />
    <area style='cursor:pointer' shape='poly' coords='117,60,126,64,126,75,117,79,108,75,108,64' onclick='clickColor("#66CCFF",-140,108)' onmouseover='mouseOverColor("#66CCFF")' alt='#66CCFF' />
    <area style='cursor:pointer' shape='poly' coords='135,60,144,64,144,75,135,79,126,75,126,64' onclick='clickColor("#99CCFF",-140,126)' onmouseover='mouseOverColor("#99CCFF")' alt='#99CCFF' />
    <area style='cursor:pointer' shape='poly' coords='153,60,162,64,162,75,153,79,144,75,144,64' onclick='clickColor("#9999FF",-140,144)' onmouseover='mouseOverColor("#9999FF")' alt='#9999FF' />
    <area style='cursor:pointer' shape='poly' coords='171,60,180,64,180,75,171,79,162,75,162,64' onclick='clickColor("#9966FF",-140,162)' onmouseover='mouseOverColor("#9966FF")' alt='#9966FF' />
    <area style='cursor:pointer' shape='poly' coords='189,60,198,64,198,75,189,79,180,75,180,64' onclick='clickColor("#9933FF",-140,180)' onmouseover='mouseOverColor("#9933FF")' alt='#9933FF' />
    <area style='cursor:pointer' shape='poly' coords='207,60,216,64,216,75,207,79,198,75,198,64' onclick='clickColor("#9900FF",-140,198)' onmouseover='mouseOverColor("#9900FF")' alt='#9900FF' />
    <area style='cursor:pointer' shape='poly' coords='18,75,27,79,27,90,18,94,9,90,9,79' onclick='clickColor("#006600",-125,9)' onmouseover='mouseOverColor("#006600")' alt='#006600' />
    <area style='cursor:pointer' shape='poly' coords='36,75,45,79,45,90,36,94,27,90,27,79' onclick='clickColor("#00CC00",-125,27)' onmouseover='mouseOverColor("#00CC00")' alt='#00CC00' />
    <area style='cursor:pointer' shape='poly' coords='54,75,63,79,63,90,54,94,45,90,45,79' onclick='clickColor("#00FF00",-125,45)' onmouseover='mouseOverColor("#00FF00")' alt='#00FF00' />
    <area style='cursor:pointer' shape='poly' coords='72,75,81,79,81,90,72,94,63,90,63,79' onclick='clickColor("#66FF99",-125,63)' onmouseover='mouseOverColor("#66FF99")' alt='#66FF99' />
    <area style='cursor:pointer' shape='poly' coords='90,75,99,79,99,90,90,94,81,90,81,79' onclick='clickColor("#99FFCC",-125,81)' onmouseover='mouseOverColor("#99FFCC")' alt='#99FFCC' />
    <area style='cursor:pointer' shape='poly' coords='108,75,117,79,117,90,108,94,99,90,99,79' onclick='clickColor("#CCFFFF",-125,99)' onmouseover='mouseOverColor("#CCFFFF")' alt='#CCFFFF' />
    <area style='cursor:pointer' shape='poly' coords='126,75,135,79,135,90,126,94,117,90,117,79' onclick='clickColor("#CCCCFF",-125,117)' onmouseover='mouseOverColor("#CCCCFF")' alt='#CCCCFF' />
    <area style='cursor:pointer' shape='poly' coords='144,75,153,79,153,90,144,94,135,90,135,79' onclick='clickColor("#CC99FF",-125,135)' onmouseover='mouseOverColor("#CC99FF")' alt='#CC99FF' />
    <area style='cursor:pointer' shape='poly' coords='162,75,171,79,171,90,162,94,153,90,153,79' onclick='clickColor("#CC66FF",-125,153)' onmouseover='mouseOverColor("#CC66FF")' alt='#CC66FF' />
    <area style='cursor:pointer' shape='poly' coords='180,75,189,79,189,90,180,94,171,90,171,79' onclick='clickColor("#CC33FF",-125,171)' onmouseover='mouseOverColor("#CC33FF")' alt='#CC33FF' />
    <area style='cursor:pointer' shape='poly' coords='198,75,207,79,207,90,198,94,189,90,189,79' onclick='clickColor("#CC00FF",-125,189)' onmouseover='mouseOverColor("#CC00FF")' alt='#CC00FF' />
    <area style='cursor:pointer' shape='poly' coords='216,75,225,79,225,90,216,94,207,90,207,79' onclick='clickColor("#9900CC",-125,207)' onmouseover='mouseOverColor("#9900CC")' alt='#9900CC' />
    <area style='cursor:pointer' shape='poly' coords='9,90,18,94,18,105,9,109,0,105,0,94' onclick='clickColor("#003300",-110,0)' onmouseover='mouseOverColor("#003300")' alt='#003300' />
    <area style='cursor:pointer' shape='poly' coords='27,90,36,94,36,105,27,109,18,105,18,94' onclick='clickColor("#009933",-110,18)' onmouseover='mouseOverColor("#009933")' alt='#009933' />
    <area style='cursor:pointer' shape='poly' coords='45,90,54,94,54,105,45,109,36,105,36,94' onclick='clickColor("#33CC33",-110,36)' onmouseover='mouseOverColor("#33CC33")' alt='#33CC33' />
    <area style='cursor:pointer' shape='poly' coords='63,90,72,94,72,105,63,109,54,105,54,94' onclick='clickColor("#66FF66",-110,54)' onmouseover='mouseOverColor("#66FF66")' alt='#66FF66' />
    <area style='cursor:pointer' shape='poly' coords='81,90,90,94,90,105,81,109,72,105,72,94' onclick='clickColor("#99FF99",-110,72)' onmouseover='mouseOverColor("#99FF99")' alt='#99FF99' />
    <area style='cursor:pointer' shape='poly' coords='99,90,108,94,108,105,99,109,90,105,90,94' onclick='clickColor("#CCFFCC",-110,90)' onmouseover='mouseOverColor("#CCFFCC")' alt='#CCFFCC' />
    <area style='cursor:pointer' shape='poly' coords='117,90,126,94,126,105,117,109,108,105,108,94' onclick='clickColor("#FFFFFF",-110,108)' onmouseover='mouseOverColor("#FFFFFF")' alt='#FFFFFF' />
    <area style='cursor:pointer' shape='poly' coords='135,90,144,94,144,105,135,109,126,105,126,94' onclick='clickColor("#FFCCFF",-110,126)' onmouseover='mouseOverColor("#FFCCFF")' alt='#FFCCFF' />
    <area style='cursor:pointer' shape='poly' coords='153,90,162,94,162,105,153,109,144,105,144,94' onclick='clickColor("#FF99FF",-110,144)' onmouseover='mouseOverColor("#FF99FF")' alt='#FF99FF' />
    <area style='cursor:pointer' shape='poly' coords='171,90,180,94,180,105,171,109,162,105,162,94' onclick='clickColor("#FF66FF",-110,162)' onmouseover='mouseOverColor("#FF66FF")' alt='#FF66FF' />
    <area style='cursor:pointer' shape='poly' coords='189,90,198,94,198,105,189,109,180,105,180,94' onclick='clickColor("#FF00FF",-110,180)' onmouseover='mouseOverColor("#FF00FF")' alt='#FF00FF' />
    <area style='cursor:pointer' shape='poly' coords='207,90,216,94,216,105,207,109,198,105,198,94' onclick='clickColor("#CC00CC",-110,198)' onmouseover='mouseOverColor("#CC00CC")' alt='#CC00CC' />
    <area style='cursor:pointer' shape='poly' coords='225,90,234,94,234,105,225,109,216,105,216,94' onclick='clickColor("#660066",-110,216)' onmouseover='mouseOverColor("#660066")' alt='#660066' />
    <area style='cursor:pointer' shape='poly' coords='18,105,27,109,27,120,18,124,9,120,9,109' onclick='clickColor("#336600",-95,9)' onmouseover='mouseOverColor("#336600")' alt='#336600' />
    <area style='cursor:pointer' shape='poly' coords='36,105,45,109,45,120,36,124,27,120,27,109' onclick='clickColor("#009900",-95,27)' onmouseover='mouseOverColor("#009900")' alt='#009900' />
    <area style='cursor:pointer' shape='poly' coords='54,105,63,109,63,120,54,124,45,120,45,109' onclick='clickColor("#66FF33",-95,45)' onmouseover='mouseOverColor("#66FF33")' alt='#66FF33' />
    <area style='cursor:pointer' shape='poly' coords='72,105,81,109,81,120,72,124,63,120,63,109' onclick='clickColor("#99FF66",-95,63)' onmouseover='mouseOverColor("#99FF66")' alt='#99FF66' />
    <area style='cursor:pointer' shape='poly' coords='90,105,99,109,99,120,90,124,81,120,81,109' onclick='clickColor("#CCFF99",-95,81)' onmouseover='mouseOverColor("#CCFF99")' alt='#CCFF99' />
    <area style='cursor:pointer' shape='poly' coords='108,105,117,109,117,120,108,124,99,120,99,109' onclick='clickColor("#FFFFCC",-95,99)' onmouseover='mouseOverColor("#FFFFCC")' alt='#FFFFCC' />
    <area style='cursor:pointer' shape='poly' coords='126,105,135,109,135,120,126,124,117,120,117,109' onclick='clickColor("#FFCCCC",-95,117)' onmouseover='mouseOverColor("#FFCCCC")' alt='#FFCCCC' />
    <area style='cursor:pointer' shape='poly' coords='144,105,153,109,153,120,144,124,135,120,135,109' onclick='clickColor("#FF99CC",-95,135)' onmouseover='mouseOverColor("#FF99CC")' alt='#FF99CC' />
    <area style='cursor:pointer' shape='poly' coords='162,105,171,109,171,120,162,124,153,120,153,109' onclick='clickColor("#FF66CC",-95,153)' onmouseover='mouseOverColor("#FF66CC")' alt='#FF66CC' />
    <area style='cursor:pointer' shape='poly' coords='180,105,189,109,189,120,180,124,171,120,171,109' onclick='clickColor("#FF33CC",-95,171)' onmouseover='mouseOverColor("#FF33CC")' alt='#FF33CC' />
    <area style='cursor:pointer' shape='poly' coords='198,105,207,109,207,120,198,124,189,120,189,109' onclick='clickColor("#CC0099",-95,189)' onmouseover='mouseOverColor("#CC0099")' alt='#CC0099' />
    <area style='cursor:pointer' shape='poly' coords='216,105,225,109,225,120,216,124,207,120,207,109' onclick='clickColor("#993399",-95,207)' onmouseover='mouseOverColor("#993399")' alt='#993399' />
    <area style='cursor:pointer' shape='poly' coords='27,120,36,124,36,135,27,139,18,135,18,124' onclick='clickColor("#333300",-80,18)' onmouseover='mouseOverColor("#333300")' alt='#333300' />
    <area style='cursor:pointer' shape='poly' coords='45,120,54,124,54,135,45,139,36,135,36,124' onclick='clickColor("#669900",-80,36)' onmouseover='mouseOverColor("#669900")' alt='#669900' />
    <area style='cursor:pointer' shape='poly' coords='63,120,72,124,72,135,63,139,54,135,54,124' onclick='clickColor("#99FF33",-80,54)' onmouseover='mouseOverColor("#99FF33")' alt='#99FF33' />
    <area style='cursor:pointer' shape='poly' coords='81,120,90,124,90,135,81,139,72,135,72,124' onclick='clickColor("#CCFF66",-80,72)' onmouseover='mouseOverColor("#CCFF66")' alt='#CCFF66' />
    <area style='cursor:pointer' shape='poly' coords='99,120,108,124,108,135,99,139,90,135,90,124' onclick='clickColor("#FFFF99",-80,90)' onmouseover='mouseOverColor("#FFFF99")' alt='#FFFF99' />
    <area style='cursor:pointer' shape='poly' coords='117,120,126,124,126,135,117,139,108,135,108,124' onclick='clickColor("#FFCC99",-80,108)' onmouseover='mouseOverColor("#FFCC99")' alt='#FFCC99' />
    <area style='cursor:pointer' shape='poly' coords='135,120,144,124,144,135,135,139,126,135,126,124' onclick='clickColor("#FF9999",-80,126)' onmouseover='mouseOverColor("#FF9999")' alt='#FF9999' />
    <area style='cursor:pointer' shape='poly' coords='153,120,162,124,162,135,153,139,144,135,144,124' onclick='clickColor("#FF6699",-80,144)' onmouseover='mouseOverColor("#FF6699")' alt='#FF6699' />
    <area style='cursor:pointer' shape='poly' coords='171,120,180,124,180,135,171,139,162,135,162,124' onclick='clickColor("#FF3399",-80,162)' onmouseover='mouseOverColor("#FF3399")' alt='#FF3399' />
    <area style='cursor:pointer' shape='poly' coords='189,120,198,124,198,135,189,139,180,135,180,124' onclick='clickColor("#CC3399",-80,180)' onmouseover='mouseOverColor("#CC3399")' alt='#CC3399' />
    <area style='cursor:pointer' shape='poly' coords='207,120,216,124,216,135,207,139,198,135,198,124' onclick='clickColor("#990099",-80,198)' onmouseover='mouseOverColor("#990099")' alt='#990099' />
    <area style='cursor:pointer' shape='poly' coords='36,135,45,139,45,150,36,154,27,150,27,139' onclick='clickColor("#666633",-65,27)' onmouseover='mouseOverColor("#666633")' alt='#666633' />
    <area style='cursor:pointer' shape='poly' coords='54,135,63,139,63,150,54,154,45,150,45,139' onclick='clickColor("#99CC00",-65,45)' onmouseover='mouseOverColor("#99CC00")' alt='#99CC00' />
    <area style='cursor:pointer' shape='poly' coords='72,135,81,139,81,150,72,154,63,150,63,139' onclick='clickColor("#CCFF33",-65,63)' onmouseover='mouseOverColor("#CCFF33")' alt='#CCFF33' />
    <area style='cursor:pointer' shape='poly' coords='90,135,99,139,99,150,90,154,81,150,81,139' onclick='clickColor("#FFFF66",-65,81)' onmouseover='mouseOverColor("#FFFF66")' alt='#FFFF66' />
    <area style='cursor:pointer' shape='poly' coords='108,135,117,139,117,150,108,154,99,150,99,139' onclick='clickColor("#FFCC66",-65,99)' onmouseover='mouseOverColor("#FFCC66")' alt='#FFCC66' />
    <area style='cursor:pointer' shape='poly' coords='126,135,135,139,135,150,126,154,117,150,117,139' onclick='clickColor("#FF9966",-65,117)' onmouseover='mouseOverColor("#FF9966")' alt='#FF9966' />
    <area style='cursor:pointer' shape='poly' coords='144,135,153,139,153,150,144,154,135,150,135,139' onclick='clickColor("#FF6666",-65,135)' onmouseover='mouseOverColor("#FF6666")' alt='#FF6666' />
    <area style='cursor:pointer' shape='poly' coords='162,135,171,139,171,150,162,154,153,150,153,139' onclick='clickColor("#FF0066",-65,153)' onmouseover='mouseOverColor("#FF0066")' alt='#FF0066' />
    <area style='cursor:pointer' shape='poly' coords='180,135,189,139,189,150,180,154,171,150,171,139' onclick='clickColor("#CC6699",-65,171)' onmouseover='mouseOverColor("#CC6699")' alt='#CC6699' />
    <area style='cursor:pointer' shape='poly' coords='198,135,207,139,207,150,198,154,189,150,189,139' onclick='clickColor("#993366",-65,189)' onmouseover='mouseOverColor("#993366")' alt='#993366' />
    <area style='cursor:pointer' shape='poly' coords='45,150,54,154,54,165,45,169,36,165,36,154' onclick='clickColor("#999966",-50,36)' onmouseover='mouseOverColor("#999966")' alt='#999966' />
    <area style='cursor:pointer' shape='poly' coords='63,150,72,154,72,165,63,169,54,165,54,154' onclick='clickColor("#CCCC00",-50,54)' onmouseover='mouseOverColor("#CCCC00")' alt='#CCCC00' />
    <area style='cursor:pointer' shape='poly' coords='81,150,90,154,90,165,81,169,72,165,72,154' onclick='clickColor("#FFFF00",-50,72)' onmouseover='mouseOverColor("#FFFF00")' alt='#FFFF00' />
    <area style='cursor:pointer' shape='poly' coords='99,150,108,154,108,165,99,169,90,165,90,154' onclick='clickColor("#FFCC00",-50,90)' onmouseover='mouseOverColor("#FFCC00")' alt='#FFCC00' />
    <area style='cursor:pointer' shape='poly' coords='117,150,126,154,126,165,117,169,108,165,108,154' onclick='clickColor("#FF9933",-50,108)' onmouseover='mouseOverColor("#FF9933")' alt='#FF9933' />
    <area style='cursor:pointer' shape='poly' coords='135,150,144,154,144,165,135,169,126,165,126,154' onclick='clickColor("#FF6600",-50,126)' onmouseover='mouseOverColor("#FF6600")' alt='#FF6600' />
    <area style='cursor:pointer' shape='poly' coords='153,150,162,154,162,165,153,169,144,165,144,154' onclick='clickColor("#FF5050",-50,144)' onmouseover='mouseOverColor("#FF5050")' alt='#FF5050' />
    <area style='cursor:pointer' shape='poly' coords='171,150,180,154,180,165,171,169,162,165,162,154' onclick='clickColor("#CC0066",-50,162)' onmouseover='mouseOverColor("#CC0066")' alt='#CC0066' />
    <area style='cursor:pointer' shape='poly' coords='189,150,198,154,198,165,189,169,180,165,180,154' onclick='clickColor("#660033",-50,180)' onmouseover='mouseOverColor("#660033")' alt='#660033' />
    <area style='cursor:pointer' shape='poly' coords='54,165,63,169,63,180,54,184,45,180,45,169' onclick='clickColor("#996633",-35,45)' onmouseover='mouseOverColor("#996633")' alt='#996633' />
    <area style='cursor:pointer' shape='poly' coords='72,165,81,169,81,180,72,184,63,180,63,169' onclick='clickColor("#CC9900",-35,63)' onmouseover='mouseOverColor("#CC9900")' alt='#CC9900' />
    <area style='cursor:pointer' shape='poly' coords='90,165,99,169,99,180,90,184,81,180,81,169' onclick='clickColor("#FF9900",-35,81)' onmouseover='mouseOverColor("#FF9900")' alt='#FF9900' />
    <area style='cursor:pointer' shape='poly' coords='108,165,117,169,117,180,108,184,99,180,99,169' onclick='clickColor("#CC6600",-35,99)' onmouseover='mouseOverColor("#CC6600")' alt='#CC6600' />
    <area style='cursor:pointer' shape='poly' coords='126,165,135,169,135,180,126,184,117,180,117,169' onclick='clickColor("#FF3300",-35,117)' onmouseover='mouseOverColor("#FF3300")' alt='#FF3300' />
    <area style='cursor:pointer' shape='poly' coords='144,165,153,169,153,180,144,184,135,180,135,169' onclick='clickColor("#FF0000",-35,135)' onmouseover='mouseOverColor("#FF0000")' alt='#FF0000' />
    <area style='cursor:pointer' shape='poly' coords='162,165,171,169,171,180,162,184,153,180,153,169' onclick='clickColor("#CC0000",-35,153)' onmouseover='mouseOverColor("#CC0000")' alt='#CC0000' />
    <area style='cursor:pointer' shape='poly' coords='180,165,189,169,189,180,180,184,171,180,171,169' onclick='clickColor("#990033",-35,171)' onmouseover='mouseOverColor("#990033")' alt='#990033' />
    <area style='cursor:pointer' shape='poly' coords='63,180,72,184,72,195,63,199,54,195,54,184' onclick='clickColor("#663300",-20,54)' onmouseover='mouseOverColor("#663300")' alt='#663300' />
    <area style='cursor:pointer' shape='poly' coords='81,180,90,184,90,195,81,199,72,195,72,184' onclick='clickColor("#996600",-20,72)' onmouseover='mouseOverColor("#996600")' alt='#996600' />
    <area style='cursor:pointer' shape='poly' coords='99,180,108,184,108,195,99,199,90,195,90,184' onclick='clickColor("#CC3300",-20,90)' onmouseover='mouseOverColor("#CC3300")' alt='#CC3300' />
    <area style='cursor:pointer' shape='poly' coords='117,180,126,184,126,195,117,199,108,195,108,184' onclick='clickColor("#993300",-20,108)' onmouseover='mouseOverColor("#993300")' alt='#993300' />
    <area style='cursor:pointer' shape='poly' coords='135,180,144,184,144,195,135,199,126,195,126,184' onclick='clickColor("#990000",-20,126)' onmouseover='mouseOverColor("#990000")' alt='#990000' />
    <area style='cursor:pointer' shape='poly' coords='153,180,162,184,162,195,153,199,144,195,144,184' onclick='clickColor("#800000",-20,144)' onmouseover='mouseOverColor("#800000")' alt='#800000' />
    <area style='cursor:pointer' shape='poly' coords='171,180,180,184,180,195,171,199,162,195,162,184' onclick='clickColor("#993333",-20,162)' onmouseover='mouseOverColor("#993333")' alt='#993333' />
   `;
  return html;
}
function colorMix(c1, c2, percent = 50) {
	return colorCalculator(percent / 100, colorFrom(c2), colorFrom(c1), true);
}
function colorNatToHue(ncol) {
  let pure = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'].map(x => x.toUpperCase()[0]);
  let [letter, num] = [ncol[0], Number(ncol.substring(1))];
  let idx = pure.indexOf(letter);
  let hue = idx * 60 + num;
  return hue;
}
function colorNcolToHue(ncol) {
  let pure = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'].map(x => x.toUpperCase()[0]);
  let [letter, num] = [ncol[0], Number(ncol.substring(1))];
  let idx = pure.indexOf(letter);
  let hue = idx * 60 + fromPercent(num, 60);
  return hue;
}
function colorNearestNamed(inputColor, namedColors) {
  if (nundef(namedColors)) namedColors = M.colorList;
  let minDistance = Infinity;
  let nearestColor = null;
  namedColors.forEach(namedColor => {
    let distance = colorDistance(inputColor, namedColor.hex);
    if (distance < minDistance) {
      minDistance = distance;
      nearestColor = namedColor;
    }
  });
  return nearestColor;
}
function colorO(c) {
  if (isDict(c)) return c;
  let hex = colorFrom(c);
  let o = w3color(hex);
  let named = colorNearestNamed(hex);
  let distance = Math.round(colorDistance(named.hex, hex));
  o.name = named.name;
  o.distance = distance;
  o.bucket = colorGetBucket(hex);
  o.hex = hex;
  return o;
}
function colorPalette(color, type = 'shade') { return colorShades(colorFrom(color)); }
function colorPaletteFromImage(img) {
  if (nundef(ColorThiefObject)) ColorThiefObject = new ColorThief();
  return ColorThiefObject.getPalette(img).map(x => colorFrom(x));
}
function colorPaletteFromUrl(path) {
  let img = mCreateFrom(`<img src='${path}' />`);
  let pal = colorPaletteFromImage(img);
  return pal;
}
function colorRgbArgsToHex79(r, g, b, a) {
  r = Math.round(r).toString(16).padStart(2, '0');
  g = Math.round(g).toString(16).padStart(2, '0');
  b = Math.round(b).toString(16).padStart(2, '0');
  if (nundef(a)) return `#${r}${g}${b}`;
  a = Math.round(a * 255).toString(16).padStart(2, '0');
  return `#${r}${g}${b}${a}`;
}
function colorRgbArgsToHsl01Array(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
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
function colorSample(d, color) {
  if (nundef(d)) return;
  mStyle(d, { bg: color, fg: colorIdealText(color) }); //, fg:colorIdealText(color) });  
  d.innerHTML = `${color}<br>${w3color(color).toHslString()}`;
}
function colorSchemeRYB() {
  let ryb = ['#FE2712', '#FC600A', '#FB9902', '#FCCC1A', '#FEFE33', '#B2D732', '#66B032', '#347C98', '#0247FE', '#4424D6', '#8601AF', '#C21460'];
  return ryb;
  console.log('w3color', w3color('deeppink'))
  for (const c of ryb) {
    let cw = w3color(c);
    console.log(cw.hue, cw.sat, cw.lightness, cw.ncol);
  }
}
function colorsFromBFA(bg, fg, alpha) {
  if (fg == 'contrast') {
    if (bg != 'inherit') bg = colorFrom(bg, alpha);
    fg = colorIdealText(bg);
  } else if (bg == 'contrast') {
    fg = colorFrom(fg);
    bg = colorIdealText(fg);
  } else {
    if (isdef(bg) && bg != 'inherit') bg = colorFrom(bg, alpha);
    if (isdef(fg) && fg != 'inherit') fg = colorFrom(fg);
  }
  return [bg, fg];
}
function colorShades(color) {
  let res = [];
  for (let frac = -0.8; frac <= 0.8; frac += 0.2) {
    let c = colorCalculator(frac, color, undefined, true);
    res.push(c);
  }
  return res;
}
function colorSortByLightness(list) {
  let ext = list.map(x => colorO(x));
  let sorted = sortByDescending(ext, 'lightness').map(x => x.hex);
  return sorted;
}
function colorToHex79(c) {
  //console.log(c)
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
function colorToHwb360Object(c) {
  c = colorFrom(c);
  let [r, g, blue] = colorHexToRgbArray(c);
  let [h, s, l] = colorHexToHsl01Array(c); h *= 360;
  let w = 100 * Math.min(r, g, blue) / 255;
  let b = 100 * (1 - Math.max(r, g, blue) / 255);
  return { h, w, b };
}
function colorToHwbRounded(c) {
  let o = colorToHwb360Object(c);
  return { h: Math.round(o.h), w: Math.round(o.w), b: Math.round(o.b) };
}
function colorTrans(cAny, alpha = 0.5) { return colorFrom(cAny, alpha); }
function colorTurnHueBy(color, inc = 180) {
  let [r, g, b] = colorHexToRgbArray(colorFrom(color));
  let [h, s, l] = colorRgbArgsToHsl01Array(r, g, b); h *= 360;
  h = (h + inc) % 360;
  let [newR, newG, newB] = colorHsl01ArgsToRgbArray(h / 360, s, l);
  return colorRgbArgsToHex79(newR, newG, newB);
}
function getBestContrastingColor(color) {
  let [r, g, b] = colorHexToRgbArray(colorFrom(color));
  let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? '#000000' : '#FFFFFF';
}
function getBlendModeForCanvas(blendMode = 'normal') {
  const blendModeMapping = {
    'normal': 'source-over',       // Default blending mode
    'multiply': 'multiply',
    'screen': 'screen',
    'overlay': 'overlay',
    'darken': 'darken',
    'lighten': 'lighten',
    'color-dodge': 'color-dodge',
    'saturation': 'saturation',
    'color': 'color',
    'luminosity': 'luminosity',
    'pass-through': 'source-over' // This is a made-up value for cases where no blending is applied
  };
  return valf(blendModeMapping[blendMode], blendMode);
}
function getBlendCSS(blcanvas) {
  const blendModes = {
    'source-over': 'normal',
    'lighter': 'normal',
    'copy': 'normal'
  };
  return valf(blendModes[blcanvas], blcanvas);
}
function getBlendModesCanvas() {
  const blendModes = [
    'source-over',
    'lighter',
    'copy',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity'
  ];
  return blendModes;
}
function getBlendModesCSS() {
  return 'normal|multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity'.split('|');
}
async function getCanvasCtx(d, styles = {}, opts = {}) {
  opts.tag = 'canvas';
  let cv = mDom(d, styles, opts);
  let ctx = cv.getContext('2d');
  let fill = valf(styles.fill, styles.bg);
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fillRect(0, 0, cv.width, cv.height);
  }
  let bgBlend = styles.bgBlend;
  if (bgBlend) ctx.globalCompositeOperation = bgBlend;
  let src = valf(opts.src, opts.path);
  if (src) {
    let isRepeat = src.includes('ttrans');
    let imgStyle = isRepeat ? {} : { w: cv.width, h: cv.height };
    let img = await imgAsync(null, imgStyle, { src });
    if (bgBlend) ctx.globalCompositeOperation = bgBlend;
    if (isRepeat) {
      const pattern = ctx.createPattern(img, 'repeat');
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, cv.width, cv.height);
    } else ctx.drawImage(img, 0, 0, cv.width, cv.height);
  }
  return { cv, ctx };
}
function imgAsync(dParent, styles, opts) {
  let path = opts.src;
  delete opts.src;
  addKeys({ tag: 'img' }, opts); //if forget
  return new Promise((resolve, reject) => {
    const img = mDom(dParent, styles, opts);
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = path;
  });
}
function mLinebreak(dParent, gap=0) {
  dParent = toElem(dParent);
  let display = getComputedStyle(dParent).display;
  if (display == 'flex') {
    d = mDom(dParent, { 'flex-basis': '100%', h: gap, hline:gap, w: '100%' },{html:''});
  } else {
    d=mDom(dParent,{hline:gap,h:gap},{html:'&nbsp;'});
  }
  return d;
}
function paletteAddDistanceTo(pal, color, key, distfunc = colorGetContrast) {
  let opal = isDict(pal[0]) ? pal : paletteToObjects(pal);
  for (let i = 0; i < pal.length; i++) {
    let o = opal[i];
    o[`dist_${key}`] = distfunc(o.hex, color);
  }
  return opal;
}
function paletteContrastVariety(pal, n = 20) {
  pal = pal.map(x => colorO(x)); 
  let res = [];
  ['white', 'black'].map(x => res.push(colorO(x)));
  let o = paletteGetBestContrasting(pal, pal[0], pal[1]).best;
  res.push(o)
  let pal2 = jsCopy(pal).filter(x => x.hex != o.hex);
  res.push(colorO(colorGetPureHue(o)));
  let o2 = paletteGetBestContrasting(pal2, pal[0], pal[1]).best;
  res.push(o2)
  res.push(colorO(colorGetPureHue(o2)))
  res.push(colorO(colorComplement(pal[0].hex)));
  res.push(colorO(colorComplement(pal[1].hex)));
  [60, 120, 180, 240, 300].map(x => {
    res.push(colorO(colorTurnHueBy(pal[0].hex, x)));
    res.push(colorO(colorTurnHueBy(pal[1].hex, x)));
  });
  ['silver', 'dimgray', '#ff0000', '#ffff00'].map(x => res.push(colorO(x)));
  res = res.map(x => x.hex); res = arrRemoveDuplicates(res);
  let palContrast = res.slice(0, 2);
  let sorted = colorSortByLightness(res.slice(2));
  let i = 0;
  while (i < sorted.length) {
    let hex = sorted[i];
    let ok = true;
    for (const h1 of palContrast) {
      let d = colorDistance(hex, h1);
      if (d < 70) { ok = false; break; }
    }
    if (ok) palContrast.push(hex);
    i++;
  }
  if (n < palContrast.length) palContrast = palContrast.slice(0, n)
  return palContrast;
}
function paletteGetBestContrasting(pal) {
  let clist = Array.from(arguments).slice(1).map(x => colorO(x));
  pal = pal.map(x => colorO(x));
  let best = null, dbest = 0;
  for (const p of pal) {
    let arr = clist.map(x => colorDistanceHue(p, x));
    let dmax = arrMinMax(arr).min;
    if (dmax > dbest) {
      best = p; dbest = dmax;
    }
  }
  if (dbest == 0) best = pal[4];
  return { best, dbest };
}
function paletteMix(startColor, endColor, numSteps) {
  const colors = [];
  let step = 0;
  while (step < numSteps) {
    const currentColor = mixColors(startColor, endColor, step / numSteps);
    colors.push(currentColor);
    step++;
  }
  return colors;
}
function palettePureHue(pal) {
  let p2 = pal.map(x => colorGetPureHue(x));
  return pal.map(x => colorO(colorGetPureHue(x)));
}
function paletteShades(color, from = -0.8, to = 0.8, step = 0.2) {
  let res = [];
  for (let frac = from; frac <= to; frac += step) {
    let c = colorCalculator(frac, color, undefined, true);
    res.push(c);
  }
  return res;
}
function paletteShadesBi(color, turnHueBy = 180, from = -0.8, to = 0.8, step = 0.4) {
  let bi = [color, colorTurnHueBy(color, turnHueBy)];
  let res = jsCopy(bi);
  for (const c1 of bi) {
    for (let frac = from; frac <= to; frac += step) {
      let c = colorCalculator(frac, c1, undefined, true);
      addIf(res, c);
    }
  }
  return res;
}
function paletteShadesHues(color, n = 2, turnHueBy = 30, from = -0.5, to = 0.5, step = 0.5) {
  let list = [color];
  for (let i = 1; i < n; i++) list.push(colorTurnHueBy(color, i * turnHueBy))
  let res = jsCopy(list);
  if (n == 2) { from = -.8; to = .8; step = .4; }
  for (const c1 of list) {
    for (let frac = from; frac <= to; frac += step) {
      let c = colorCalculator(frac, c1, undefined, true);
      addIf(res, c);
    }
  }
  return res;
}
function paletteShadesQuad(color, from = -0.5, to = 0.5, step = 0.5) {
  let tri = [color, colorTurnHueBy(color, 90), colorTurnHueBy(color, 180), colorTurnHueBy(color, 270)];
  let res = jsCopy(tri);
  for (const c1 of tri) {
    for (let frac = from; frac <= to; frac += step) {
      let c = colorCalculator(frac, c1, undefined, true);
      addIf(res, c);
    }
  }
  return res;
}
function paletteShadesTri(color, from = -0.5, to = 0.5, step = 0.5) {
  let tri = [color, colorTurnHueBy(color, 120), colorTurnHueBy(color, 240)];
  let res = jsCopy(tri);
  for (const c1 of tri) {
    for (let frac = from; frac <= to; frac += step) {
      let c = colorCalculator(frac, c1, undefined, true);
      addIf(res, c);
    }
  }
  return res;
}
function paletteToObjects(pal) { return pal.map(x => colorO(x)); }
function paletteTrans(color, from = 0.1, to = 1, step = 0.2) {
  let res = [];
  for (let frac = from; frac <= to; frac += step) {
    let c = colorTrans(color, frac);
    res.push(c);
  }
  return res;
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
function showPalette(dParent, colors) {
  let d1 = mDom(dParent, { display: 'flex', dir: 'column', wrap: true, gap: 2, hmax: '100vh' });
  for (var c of colors) {
    if (isDict(c)) c = c.hex;
    let html = `${c}<br>hue:${w3color(c).hue}<br>sat:${Math.round(w3color(c).sat * 100)}<br>lum:${Math.round(w3color(c).lightness * 100)}`
    let dmini = mDom(d1, { wmin: 40, hmin: 40, padding: 2, bg: c, fg: colorIdealText(c) }, { html });
  }
}
async function showPaletteFor(dParent, src, color, blendMode) {
  let fill = color;
  let bgBlend = getBlendModeForCanvas(blendMode);
  let d = mDom(dParent, { w100: true, gap: 4 }); mCenterFlex(d);
  let palette = [color];
  if (isdef(src)) {
    let ca = await getCanvasCtx(d, { w: 500, h: 300, fill, bgBlend }, { src });
    palette = await getPaletteFromCanvas(ca.cv);
    palette.unshift(fill);
  } else {
    let ca = mDom(d, { w: 500, h: 300 });
    palette = arrCycle(paletteShades(color), 4);
  }
  let dominant = palette[0];
  let palContrast = paletteContrastVariety(palette, palette.length);
  mLinebreak(d);
  showPaletteMini(d, palette);
  mLinebreak(d);
  showPaletteMini(d, palContrast);
  mLinebreak(d);
  return [palette.map(x => colorO(x)), palContrast];
}
function showPaletteMini(dParent, colors, sz = 30) {
  let d1 = mDom(dParent, { matop:2,display: 'flex', wrap: true, gap: 2 }); //, hmax: '100vh', dir: 'column' });
  let items = [];
  //console.log(colors)
  for (var c of colors) {
    if (isDict(c)) c = c.hex; //console.log(c)
    let fg = 'dimgray'; //colorIdealText(c); if (fg == 'white') fg='silver';
    let dc = mDom(d1, { w: sz, h: sz, bg: c, fg }); //, fg, border: `${fg} solid 3px` });
    items.push({ div: dc, bg: c })
  }
  return items;
}
function showPaletteNames(dParent, colors) {
  let d1 = mDom(dParent, { gap: 12 }); mFlexWrap(d1);
  let items = [];
  for (var c of colors) {
    let bg = c.hex;
    let d2 = mDom(d1, { wmin: 250, bg, fg: colorIdealText(bg), padding: 20 }, { class: 'colorbox', dataColor: bg });
    mDom(d2, { weight: 'bold', align: 'center' }, { html: c.name });
    let html = `<br>${bg}<br>hue:${c.hue}<br>sat:${Math.round(c.sat * 100)}<br>lum:${Math.round(c.lightness * 100)}`
    let dmini = mDom(d2, { align: 'center', wmin: 120, padding: 2, bg, fg: colorIdealText(bg) }, { html });
    let item = jsCopy(c);
    item.div = dmini;
    item.dOuter = d2;
    items.push(item)
  }
  return items;
}
function showPaletteText(dParent, list) {
  let d1 = mDom(dParent, { display: 'flex', wrap: true, gap: 2 }); //, hmax: '100vh', dir: 'column' });
  let items = [];
  for (var c of list) {
    let dc = mDom(d1, { bg: 'black', fg: 'white' }, { html: c });
    items.push({ div: dc, text: c })
  }
  return items;
}
function sortBy(arr, key) {
  function fsort(a, b) {
    let [av, bv] = [a[key], b[key]];
    if (isNumber(av) && isNumber(bv)) return Number(av) < Number(bv) ? -1 : 1;
    if (isEmpty(av)) return -1;
    if (isEmpty(bv)) return 1;
    return av < bv ? -1 : 1;
  }
  arr.sort(fsort);
  return arr;
}
function sortByDescending(arr, key) {
  function fsort(a, b) {
    let [av, bv] = [a[key], b[key]];
    if (isNumber(av) && isNumber(bv)) return Number(av) > Number(bv) ? -1 : 1;
    if (isEmpty(av)) return 1;
    if (isEmpty(bv)) return -1;
    return av > bv ? -1 : 1;
  }
  arr.sort(fsort);
  return arr;
}
function sortByEmptyLast(arr, key) {
  function fsort(a, b) {
    let [av, bv] = [a[key], b[key]];
    if (isNumber(av) && isNumber(bv)) return Number(av) < Number(bv) ? -1 : 1;
    if (isEmpty(av)) return 1;
    if (isEmpty(bv)) return -1;
    return av < bv ? -1 : 1;
  }
  arr.sort(fsort);
  return arr;
}
function sortByFunc(arr, func) { arr.sort((a, b) => (func(a) < func(b) ? -1 : 1)); return arr; }
function sortByHues(list) {
  let buckets = { red: [], orange: [], yellow: [], green: [], cyan: [], blue: [], purple: [], magenta: [], pink: [], grey: [] };
  for (const c of list) {
    let hue = c.hue;
    if (hue >= 355 || hue <= 10) buckets.red.push(c);
    if (hue >= 11 && hue <= 45) buckets.orange.push(c);
    if (hue >= 46 && hue <= 62 && c.lightness * 100 >= 45) buckets.yellow.push(c);
    if (hue >= 63 && hue <= 164) buckets.green.push(c);
    if (hue >= 165 && hue <= 199) buckets.cyan.push(c);
    if (hue >= 200 && hue <= 245) buckets.blue.push(c);
    if (hue >= 246 && hue <= 277) buckets.purple.push(c);
    if (hue >= 278 && hue <= 305) buckets.magenta.push(c);
    if (hue >= 306 && hue <= 355) buckets.pink.push(c);
  }
  for (const b in buckets) {
    sortByMultipleProperties(buckets[b], 'lightness', 'hue');
  }
  return buckets;
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
function sortCaseInsensitive(list) {
  list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  return list;
}
