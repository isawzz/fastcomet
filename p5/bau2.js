
function drawHexBoard(topside, side, dParent, styles = {}, itemStyles = {}, opts = {}) {
	addKeys({ box: true }, styles);
	let dOuter = mDom(dParent, styles, opts);
	let d = mDom(dOuter, { position: 'relative', });
	let [centers, rows, maxcols] = hexBoardCenters(topside, side);
	let [w, h] = mSizeSuccession(itemStyles, 24);
	let gap = valf(opts.gap, -.5);
	let items = [];
	if (gap != 0) copyKeys({ w: w - gap, h: h - gap }, itemStyles);
	for (const c of centers) {
		let dhex = hexFromCenter(d, { x: c.x * w, y: c.y * h }, itemStyles);
		let item = { div: dhex, cx: c.x, cy: c.y, row: c.row, col: c.col };
		items.push(item);
	}
	let [wBoard, hBoard] = [maxcols * w, rows * h * .75 + h * .25];
	mStyle(d, { w: wBoard, h: hBoard });
	return { div: dOuter, topside, side, centers, rows, maxcols, boardShape: 'hex', w, h, wBoard, hBoard, items }
}
function hexBoardCenters(topside, side) {
	if (nundef(topside)) topside = 4;
	if (nundef(side)) side = topside;
	let [rows, maxcols] = [side + side - 1, topside + side - 1];
	assertion(rows % 2 == 1, `hex with even rows ${rows} top:${topside} side:${side}!`);
	let centers = [];
	let cols = topside;
	let y = 0.5;
	for (i of range(rows)) {
		let n = cols;
		let x = (maxcols - n) / 2 + .5;
		for (const c of range(n)) {
			centers.push({ x, y, row: i + 1, col: x * 2 }); x++;
		}
		y += .75
		if (i < (rows - 1) / 2) cols += 1; else cols -= 1;
	}
	assertion(cols == topside - 1, `END OF COLS WRONG ${cols}`)
	return [centers, rows, maxcols];
}

function hexFromCenter(dParent, center, styles = {}, opts = {}) {
	let [w, h] = mSizeSuccession(styles);
	let [left, top] = [center.x - w / 2, center.y - h / 2];
	let d = mDom(dParent, { position: 'absolute', left, top, 'clip-path': 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }, opts);
	mStyle(d, styles);
	return d;
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





