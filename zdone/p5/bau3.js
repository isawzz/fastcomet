
function resizeImage(file, maxWidth, maxHeight) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = (event) => {
			const img = new Image();

			img.onload = () => {
				// Create a canvas to resize the image
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");

				// Calculate the new dimensions while maintaining the aspect ratio
				let { width, height } = img;
				if (width > maxWidth || height > maxHeight) {
					const scale = Math.min(maxWidth / width, maxHeight / height);
					width = Math.round(width * scale);
					height = Math.round(height * scale);
				}

				canvas.width = width;
				canvas.height = height;

				// Draw the resized image on the canvas
				ctx.drawImage(img, 0, 0, width, height);

				// Get the resized image as a Base64 string
				const resizedDataUrl = canvas.toDataURL("image/jpeg", 0.8); // Quality: 0.8 (optional)
				resolve(resizedDataUrl);
			};

			img.onerror = () => {
				console.error("Error loading image.");
				reject("Error loading image.");
			};

			img.src = event.target.result;
		};

		reader.onerror = () => {
			console.error("Error reading file.");
			callback(null);
		};

		reader.readAsDataURL(file);
	});
}

async function handleImageDrop(ev) {
	return new Promise((resolve, reject) => {
		ev.preventDefault();
		const files = ev.dataTransfer.files;
		let fileNameDisplay = ev.target;
		if (files.length > 0) {
			const file = files[0]; // Get the first file
			const fileName = file.name; // Get the file name
			const fileType = file.type; // Check the file type
			console.log(fileName, fileType);
			if (fileType.startsWith('image/')) {
				fileNameDisplay.textContent = `Dropped image: ${stringBefore(fileName, '.')}.${stringAfter(fileName, '.')}`;
				//image should be resized, saved on php server, and src returned via resolve
				//
				const reader = new FileReader();
				reader.onload = async (evReader) => {
					let data = evReader.target.result;
					let resized = await resizeImage(file, 420, 300);
					//console.log('dropped', data);
					resolve(data);
				};
				reader.readAsDataURL(files[0]);
			} else {
				fileNameDisplay.textContent = 'Please drop a valid image file.';
			}
		}
	});
}
async function rest() {
	//console.log(jsCopy(ev.dataTransfer.files));return;
	const dataTransfer = ev.dataTransfer;

	if (dataTransfer.items) {
		for (const item of dataTransfer.items) {
			if (item.kind === "file" && item.type.startsWith("image/")) {
				console.log('item', item);
				const file = item.getAsFile();

				let resizedDataUrl = await resizeImage(file, 420, 300);
				if (resizedDataUrl) {
					//send to server as image
					console.log('resizedDataUrl', resizedDataUrl);
					//let res = await mPhpPostFile(resizedDataUrl,`zdata/blogimages/upload.php`); //, { file: resizedDataUrl });

					//mDom(ev.target, { }, { tag: 'img', src: resizedDataUrl, draggable: false });
					// console.log("Resized Image Data URL:", resizedDataUrl);
					// // Save the resized data as text (or do whatever you need with it)
					// const textArea = document.getElementById("resized-image-data");
					// textArea.value = resizedDataUrl;
				}
			}
		}
	}
}


function getImageSize(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();

		img.onload = () => {
			resolve({ width: img.width, height: img.height });
		};

		img.onerror = () => {
			reject(new Error(`Failed to load the image from: ${src}`));
		};

		img.src = src;
	});
}

function mToggle(ev) {
	let key = ev.target.getAttribute('data-toggle');
	let t = DA.toggle[key];
	let prev = t.state;
	t.state = (t.state + 1) % t.seq.length;
	let html = t.seq[t.state];
	mStyle(t.elem, { bg: t.states[html] }, { html });
	if (isdef(t.handler)) t.handler(key, prev, t.state);
}
function mToggleElem(elem, key, states, seq, i, handler) {
	//states is a dictionary attributing a color to each state word
	//seq is a list of states how they change when toggle is triggered
	//i is index in seq that should be the initial state
	if (nundef(DA.toggle)) DA.toggle = {};

	let t = DA.toggle[key] = { handler, key, elem, state: i, states, seq };

	elem.setAttribute('data-toggle', key);
	mStyle(elem, { cursor: 'pointer' });
	let html = seq[i];
	mStyle(elem, { bg: states[html] }, { html });
	elem.onclick = mToggle;
	return t;
}
function registerAction(key, fromState, toState) {
	let t1 = getNow();
	let t = DA.toggle[key];
	if (nundef(t.timer)) {
		t.timer = mDom(t.elem.parentNode, { bg: 'white', fg: 'black', wmin: 200, }, { html: '&nbsp;' });
	}

}
