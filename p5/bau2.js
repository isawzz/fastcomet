
function getTopLeftPixelColor(imageSrc, callback) {
	const img = new Image();
	img.crossOrigin = "Anonymous"; // Avoid CORS issues
	img.src = imageSrc;

	img.onload = function () {
		// Create a canvas and get its context
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		// Set canvas dimensions to match the image
		canvas.width = img.width;
		canvas.height = img.height;

		// Draw the image onto the canvas
		ctx.drawImage(img, 0, 0);

		// Get pixel data from the top-left corner
		const imageData = ctx.getImageData(0, 0, 1, 1).data;

		// Extract RGBA values
		const r = imageData[0];
		const g = imageData[1];
		const b = imageData[2];
		const a = imageData[3] / 255; // Convert alpha to a range of 0-1

		// Return the color as an object or in a format you prefer
		const color = { r, g, b, a };
		callback(img, color);
	};

	img.onerror = function () {
		console.error('Failed to load image.');
		callback(null);
	};
}
function getPixTL(img){
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	// Set canvas dimensions to match the image
	canvas.width = img.width;
	canvas.height = img.height;

	// Draw the image onto the canvas
	ctx.drawImage(img, 0, 0);

	// Get pixel data from the top-left corner
	const imageData = ctx.getImageData(0, 0, 1, 1).data;

	// Extract RGBA values
	const r = imageData[0];
	const g = imageData[1];
	const b = imageData[2];
	const a = imageData[3] / 255; // Convert alpha to a range of 0-1

	// Return the color as an object or in a format you prefer
	const color = { r, g, b, a };
	return color;

}

function mImgAsync(src, d, styles = {}, opts = {}, callback=null) {
	//return null;
	return new Promise((resolve, reject) => {
		let img = document.createElement('img');
		mAppend(d, img);
		let [w, h] = mSizeSuccession(styles, 40);
		addKeys({ w, h, 'object-fit': 'cover', 'object-position': 'center center' }, styles);
		addKeys({ tag: 'img', src }, opts);
		mStyle(img, styles, opts); console.log('img', img)
		img.onload = async () => {
			//img.style.height='40px';console.log(styles)
			if (callback) callback(img);
			resolve(img);
		};
		img.onerror = (error) => {
			reject(error);
		};
		img.src = src;
	});
}

async function mImg(src, d, styles = {}, opts = {}) {
	return null;
	return new Promise(resolve => {
		let [w, h] = mSizeSuccession(styles, 40);
		addKeys({ w, h, 'object-fit': 'cover', 'object-position': 'center center' }, styles);
		addKeys({ tag: 'img', src }, opts);
		getTopLeftPixelColor(src, (img, color) => {
			if (color) {
				console.log(`Top-left pixel color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
				if (color.a != 0) {
					styles.round = true;
					console.log('HHHHHHHHHHHHHHHHHHHHHHHH');
					//let x=mDom(d,{rounding:20,h:40,bg:'red'},opts); return x;
				}
				mAppend(d, img);
				mStyle(img, styles, opts);
				resolve(img)
				// let img = mDom(d, styles, opts);

			} else {
				console.error('Could not retrieve pixel color.');
				resolve(null)
			}
		});
	});

	// console.log(src, styles);
	// let [w, h] = mSizeSuccession(styles, 40);
	// addKeys({ w, h, 'object-fit': 'cover', 'object-position': 'center center' }, styles);
	// addKeys({ tag: 'img', src }, opts);
	// let img = mDom(d, styles, opts);
	// // let img = mDom(d, {rounding:20,h:40,bg:'red'}, opts);
	// //let img = mDom(d, {round:true,h:40,bg:'red'}, opts);
	// return img;
}

