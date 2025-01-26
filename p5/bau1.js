
function makeEditable(elem) {
	elem.setAttribute('contenteditable', 'true');
	elem.style.border = '1px solid #ccc'; // Optional: Visual indication
	elem.style.padding = '5px';          // Optional: Add some padding
}
async function mPalette(dParent, src, showPal = true, showImg = false) {
	async function getPaletteFromCanvas(canvas, n) {
		if (nundef(ColorThiefObject)) ColorThiefObject = new ColorThief();
		const dataUrl = canvas.toDataURL();
		const img = new Image();
		img.src = dataUrl;
		return new Promise((resolve, reject) => {
			img.onload = () => {
				const palette = ColorThiefObject.getPalette(img, n);
				//showPaletteMini('dMain',palette)
				resolve(palette ? palette.map(x => colorFrom(x)) : ['black', 'white']);
			};
			img.onerror = () => {
				reject(new Error('Failed to load the image from canvas.'));
			};
		});
	}
	let dc=mDom(dParent,{display:showImg?'inline':'none'})
	let ca = await getCanvasCtx(dc, { w:100, h:100, fill: 'white' }, { src });
	let palette = await getPaletteFromCanvas(ca.cv);
	if (!showImg) dc.remove();
	if (showPal) showPaletteMini(dParent, palette);
	return palette;
}
function parseDate(dateStr) {
	const [month, day, year] = dateStr.split('/').map(Number);
	return new Date(year, month - 1, day);
}
function handleBlur(element) {
	console.log("Editing completed! Current content:", element.innerHTML);
	// Perform additional actions here
}
async function saveBlog(key,elem){
	console.log('saving', key);
	lookupSetOverride(Z,['blog',key,'text'],elem.innerHTML);
	let text = jsyaml.dump(Z.blog);
	let res = await mPhpPostFile(text, 'zdata/blog.yaml');
	console.log(res);
}
function sortDatesDescending(dates) {
	return dates.sort((a, b) => new Date(b) - new Date(a));
}
async function uiTypePalette(dParent, color, fg, src, blendMode) {
	let fill = color;
	let bgBlend = getBlendModeForCanvas(blendMode);
	let d = mDom(dParent, { wbox: true }); //, { w100: true, gap: 4 }); //mFlex(d);
	let NewValues = { fg, bg: color };
	let palette = [color];
	let w = 350;
	let dContainer = mDom(d, { w, padding: 0, wbox: true });
	if (isdef(src)) {
		let ca = await getCanvasCtx(dContainer, { w, fill, bgBlend }, { src });
		palette = await getPaletteFromCanvas(ca.cv);
		palette.unshift(fill);
	} else {
		palette = arrCycle(paletteShades(color), 4);
	}

	//console.log('palette', palette.map(x => colorO(x).hex));
	let dominant = palette[0];
	let palContrast = paletteContrastVariety(palette, palette.length);
	mLinebreak(d);
	let bgItems = showPaletteMini(d, palette);
	mLinebreak(d);
	let fgItems = showPaletteMini(d, palContrast);
	mLinebreak(d);

	// mIfNotRelative(dParent);
	// let dText = mDom(dParent, { 'pointer-events': 'none', align: 'center', fg: 'white', fz: 30, position: 'absolute', top: 0, left: 0, w100: true, h100: true });
	// mCenterFlex(dText);
	// dText.innerHTML = `<br>HALLO<br>das<br>ist ein Text`

	for (const item of fgItems) {
		let div = iDiv(item);
		mStyle(div, { cursor: 'pointer' });
		div.onclick = () => {
			mStyle(dText, { fg: item.bg });
			NewValues.fg = item.bg;
			console.log('NewValues', NewValues);
		}
	}
	for (const item of bgItems) {
		let div = iDiv(item);
		mStyle(div, { cursor: 'pointer' });
		div.onclick = async () => {
			if (isdef(src)) {
				mClear(dContainer);
				let fill = item.bg;
				await getCanvasCtx(dContainer, { w: 500, h: 300, fill, bgBlend }, { src });
			}
			mStyle(dParent, { bg: item.bg });
			NewValues.bg = item.bg;
		}
	}
}
async function rest() {

	for (const item of fgItems) {
		let div = iDiv(item);
		mStyle(div, { cursor: 'pointer' });
		div.onclick = () => {
			mStyle(dText, { fg: item.bg });
			NewValues.fg = item.bg;
			console.log('NewValues', NewValues);
		}
	}
	for (const item of bgItems) {
		let div = iDiv(item);
		mStyle(div, { cursor: 'pointer' });
		div.onclick = async () => {
			if (isdef(src)) {
				mClear(dContainer);
				let fill = item.bg;
				await getCanvasCtx(dContainer, { w: 500, h: 300, fill, bgBlend }, { src });
			}
			mStyle(dParent, { bg: item.bg });
			NewValues.bg = item.bg;
		}
	}
	async function onclickSaveMyTheme() {
		if (U.fg == NewValues.fg && U.color == NewValues.bg) return;
		U.fg = NewValues.fg;
		U.color = NewValues.bg;
		await updateUserTheme();
		await onclickSettMyTheme();
	}
	//mButton('Save', onclickSaveMyTheme, dParent, { matop: 10, className: 'button' })
	return { pal: palette.map(x => colorO(x)), palContrast };
}






