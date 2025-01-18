
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







