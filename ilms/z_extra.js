
async function handleImageDrop(ev) {
	return new Promise((resolve, reject) => {
		ev.preventDefault();
		const files = ev.dataTransfer.files;
		let fileNameDisplay = ev.target;
		if (files.length > 0) {
			const file = files[0];
			const fileName = file.name;
			const fileType = file.type;
			console.log(fileName, fileType);
			if (fileType.startsWith('image/')) {
				fileNameDisplay.textContent = `Dropped image: ${stringBefore(fileName, '.')}.${stringAfter(fileName, '.')}`;
				const reader = new FileReader();
				reader.onload = async (evReader) => {
					let data = evReader.target.result;
					let resized = await resizeImage(file, 420, 300);
					console.log(DA.droppedImage)
					DA.droppedImage.src = data;
					resolve(data);
				};
				reader.readAsDataURL(files[0]);
			} else {
				fileNameDisplay.textContent = 'Please drop a valid image file.';
			}
		}
	});
}
async function mPostPhp(cmd, o, jsonResult = true) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	if (isdef(o.path) && (o.path.startsWith('zdata') || o.path.startsWith('y'))) o.path = '../../' + o.path;
	let res = await fetch(server + `ilms/php/${cmd}.php`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(o), // Send the line in POST request
		}
	);
	let text;
	try {
		text = await res.text();
		if (!jsonResult) {
			return text;
		}
		let obj = JSON.parse(text);
		return obj;
	} catch (e) {
		return isString(text) ? text : e;
	}
}

async function handleImageDrop(ev) {
	return new Promise((resolve, reject) => {
		ev.preventDefault();
		const files = ev.dataTransfer.files;
		let fileNameDisplay = ev.target;
		if (files.length > 0) {
			const file = files[0];
			const fileName = file.name;
			const fileType = file.type;
			console.log(fileName, fileType);
			if (fileType.startsWith('image/')) {
				fileNameDisplay.textContent = `Dropped image: ${stringBefore(fileName, '.')}.${stringAfter(fileName, '.')}`;
				const reader = new FileReader();
				reader.onload = async (evReader) => {
					let data = evReader.target.result;
					let resized = await resizeImage(file, 420, 300);
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
	const dataTransfer = ev.dataTransfer;
	if (dataTransfer.items) {
		for (const item of dataTransfer.items) {
			if (item.kind === "file" && item.type.startsWith("image/")) {
				console.log('item', item);
				const file = item.getAsFile();
				let resizedDataUrl = await resizeImage(file, 420, 300);
				if (resizedDataUrl) {
					console.log('resizedDataUrl', resizedDataUrl);
				}
			}
		}
	}
}
function handleDrop(ev) {
  console.log('HAAAAAAAAAAAAALO')
  const files = ev.dataTransfer.files;
  handleFiles(files);
}

function handleFiles(files) {
  [...files].forEach(previewFile);
}

function previewFile(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const img = document.createElement('img');
    img.src = reader.result;
    img.style.maxWidth = '500px';
    DA.dropZone.appendChild(img);
  };
}
async function mPhpPostImage(image, path) {
	return await mPostPhp('upload_image', { image, path }, false);
}
function mGather(dAnchor, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let [content, type] = [valf(opts.content, 'name'), valf(opts.type, 'text')]; //defaults
		let dbody = document.body;
		let dDialog = mDom(dbody, { bg: '#00000040', border: 'none', box: true, w: '100vw', h: '100vh' }, { tag: 'dialog', id: 'dDialog' });
		let d = mDom(dDialog);
		let funcName = `uiGadgetType${capitalize(type)}`; //console.log(funcName)
		let uiFunc = window[funcName];
		let dx = uiFunc(d, content, x => { dDialog.remove(); resolve(x) }, styles, opts);
		if (isdef(opts.title)) mInsert(dx, mCreateFrom(`<h2>Details for ${opts.title}</h2>`))
		dDialog.addEventListener('mouseup', ev => {
			if (opts.type != 'select' && isPointOutsideOf(dx, ev.clientX, ev.clientY)) {
				resolve(null);
				dDialog.remove();
			}
		});
		dDialog.addEventListener('keydown', ev => {
			if (ev.key === 'Escape') {
				dDialog.remove();
				console.log('RESOLVE NULL ESCAPE');
				resolve(null);
			}
		});
		dDialog.showModal();
		if (isdef(dAnchor)) mAnchorTo(dx, toElem(dAnchor), opts.align);
		else { mStyle(d, { h: '100vh' }); mCenterCenterFlex(d); }
	});
}

