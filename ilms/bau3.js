
async function _onchangeFileInput(ev) {
	console.log('CHANGE', ev.target.files); 
	let files = ev.target.files;
	let file = files[0]; console.log(file)
	let reader = new FileReader();
	reader.onload = function (ev) {
		let data = ev.target.result;
		let image = new Image();
		image.src = data;
		image.onload = function () {
			let canvas = document.createElement('canvas');
			canvas.width = image.width;
			canvas.height = image.height;
			let ctx = canvas.getContext('2d');
			ctx.drawImage(image, 0, 0);
			let dataURL = canvas.toDataURL('image/png');
			let img = document.createElement('img');
			img.src = dataURL;
			img.style.maxWidth = '500px';
			console.log('HALLO!!!!!!')
			DA.dropZone.appendChild(img);
		};
	};
	reader.readAsDataURL(file);		
}
async function _ondropImage(ev, elem) {
	let dt = ev.dataTransfer;
	if (dt.types.includes('itemkey')) {
		let data = ev.dataTransfer.getData('itemkey');
		await simpleOnDroppedItem(data);
	} else {
		const files = ev.dataTransfer.files;
		if (files.length > 0) {
			const reader = new FileReader();
			reader.onload = async (evReader) => {
				let data = evReader.target.result;
				await simpleOnDroppedUrl(data, UI.simple);
			};
			reader.readAsDataURL(files[0]);
		}
	}
}
