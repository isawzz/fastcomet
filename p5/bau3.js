
function resizeImage(file, maxWidth, maxHeight, callback) {
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
			callback(resizedDataUrl);
		};

		img.onerror = () => {
			console.error("Error loading image.");
			callback(null);
		};

		img.src = event.target.result;
	};

	reader.onerror = () => {
		console.error("Error reading file.");
		callback(null);
	};

	reader.readAsDataURL(file);
}

function handleImageDrop(event) {
	event.preventDefault();

	const dataTransfer = event.dataTransfer;

	if (dataTransfer.items) {
		for (const item of dataTransfer.items) {
			if (item.kind === "file" && item.type.startsWith("image/")) {
				const file = item.getAsFile();

				resizeImage(file, 300, 300, (resizedDataUrl) => {
					if (resizedDataUrl) {
						console.log("Resized Image Data URL:", resizedDataUrl);

						// Save the resized data as text (or do whatever you need with it)
						const textArea = document.getElementById("resized-image-data");
						textArea.value = resizedDataUrl;
					}
				});
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
function handleImageDrop(ev) {
	ev.preventDefault(); // Prevent default behavior (e.g., opening the dropped file)

	const dataTransfer = ev.dataTransfer;
	console.log('types', dataTransfer.types); //return;

	const files = dataTransfer.files;
	if (files.length > 0) {
		const reader = new FileReader();
		reader.onload = async (evReader) => {
			let data = evReader.target.result;
			let size = await getImageSize(data);
			console.log('size', size);
			if (size.width > 500) {
				let ratio = 500 / size.width;
				size.width = 500;
				size.height = Math.round(size.height * ratio);
				console.log('size', size);
			}
			mDom(ev.target, { wmax: 500 }, { tag: 'img', src: data, draggable: false });
		};
		reader.readAsDataURL(files[0]);
	}
	// Check if the type `text/uri-list` is included in the dropped data
	if (dataTransfer.types.includes("text/html")) {
		let text = dataTransfer.getData("text/html");

		let x = stringAfter(text, 'src="');
		let y = stringBefore(x, '"');
		console.log('text', y);
	}
}
//https://media.istockphoto.com/id/2157926151/photo/cute-cat-outdoors-in-summer.jpg?s=1024x1024&w=is&k=20&c=SG0hCGPnE1MnZI3Vwes2eIbX15Rp3a9RzSEWfX3040s=