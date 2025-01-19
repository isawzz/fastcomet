
function createLineBetweenPoints(dboard, pointA, pointB, thickness = 10) {
	const [x1, y1] = pointA;
	const [x2, y2] = pointB;

	// Calculate the distance between the points (length of the line)
	const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

	// Calculate the angle of rotation (in degrees)
	const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

	// Create the line div
	const line = document.createElement('div');
	line.style.position = 'absolute';
	line.style.width = `${length}px`;
	line.style.height = `${thickness}px`;
	line.style.backgroundColor = 'black'; // Customize line color
	line.style.top = `${y1}px`; // Set starting position
	line.style.left = `${x1}px`;
	line.style.transformOrigin = '0 50%'; // Rotate around the starting point
	line.style.transform = `rotate(${angle}deg)`;

	// Append the line to the parent container
	const parent = toElem(dboard); //document.querySelector(dboard);
	if (parent) {
			parent.style.position = 'relative'; // Ensure the parent is relatively positioned
			parent.appendChild(line);
	} else {
			console.error(`Parent element with selector '${dboard}' not found.`);
	}
}
function calcClipPoints(x0, y0, w, h, clipPath) {
	// Parse the clip-path percentages into an array of points
	const percentagePoints = clipPath
		.match(/polygon\((.*?)\)/)[1] // Extract the points inside `polygon()`
		.split(',')                  // Split into individual points
		.map(point => point.trim())  // Remove extra spaces
		.map(point => point.split(' ').map(value => parseFloat(value))); // Convert to [x, y]

	// Convert percentage points to actual pixel coordinates
	const pixelPoints = percentagePoints.map(([xPercent, yPercent]) => {
		const x = x0 + (xPercent - 50) * (w / 100);
		const y = y0 + (yPercent - 50) * (h / 100);
		return { x, y };
	});

	return pixelPoints;
}
function calcHexCorners(center, width, height) {
	const [cx, cy] = [center.cx,center.cy]; console.log('center',center)
	const points = [];
	const angleStep = (2 * Math.PI) / 6; // 360° / 6 = 60° in radians

	// Calculate the radius from the width and height
	const rx = width / 2; // Horizontal radius
	const ry = height / 2; // Vertical radius

	// Loop through each vertex of the hexagon
	for (let i = 0; i < 6; i++) {
			const angle = angleStep * i; // Current angle in radians
			const x = cx + rx * Math.cos(angle);
			const y = cy + ry * Math.sin(angle);
			points.push([x, y]);
	}

	return points;
}
function computeColorX(c) {
	let res = c;
	if (isList(c)) return rChoose(c);
	else if (isString(c) && c.startsWith('rand')) {
		res = rColor();
		let spec = c.substring(4);
		if (isdef(window['color' + spec])) {
			res = window['color' + spec](res);
		}
	}
	return res;
}
function drawHexBoard(topside, side, dParent, styles = {}, itemStyles = {}, opts = {}) {
	addKeys({ box: true }, styles);
	let dOuter = mDom(dParent, styles, opts);
	let d = mDom(dOuter, { position: 'relative', });
	let [centers, rows, maxcols] = hexBoardCenters(topside, side); //console.log(centers)
	let [w, h] = mSizeSuccession(itemStyles, 24);
	let gap = valf(styles.gap, -.5);
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


function mPickOneOfGrid(dParent, styles = {}, opts = {}) {
	let d0 = mDom(dParent, dictMerge(styles,{gap:6}), opts);
	mGrid(d0);

	function onclick(ev) {
		evNoBubble(ev);
		if (isdef(opts.fSuccess)) opts.fSuccess(ev.target.innerHTML);
	}
	for (const html of opts.list) {
		mDom(d0, {  }, { tag: 'button', html, onclick });
	}
	return d0;
}
