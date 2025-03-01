
async function mPalette(dParent, src, showPal = true, showImg = false) {
	async function getPaletteFromCanvas(canvas, n) {
		if (nundef(ColorThiefObject)) ColorThiefObject = new ColorThief();
		const dataUrl = canvas.toDataURL();
		const img = new Image();
		img.src = dataUrl;
		return new Promise((resolve, reject) => {
			img.onload = () => {
				const palette = ColorThiefObject.getPalette(img, n);
				resolve(palette ? palette.map(x => colorFrom(x)) : ['black', 'white']);
			};
			img.onerror = () => {
				reject(new Error('Failed to load the image from canvas.'));
			};
		});
	}
	let dc = mDom(dParent, { display: showImg ? 'inline' : 'none' })
	let ca = await getCanvasCtx(dc, { w: 100, h: 100, fill: 'white' }, { src });
	let palette = await getPaletteFromCanvas(ca.cv);
	if (!showImg) dc.remove();
	if (showPal) showPaletteMini(dParent, palette);
	return palette;
}


