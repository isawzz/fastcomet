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
async function _handleDrop(ev) {
  console.log(arguments, ev.target)
  let dropZone = ev.target;
  let dropImage = dropZone.getElementsByTagName('img')[0];
  let items = ev.dataTransfer.items;

  for (const item of items) {
    if (item.kind === 'file') {
      // Dropped from computer (local file)
      const file = item.getAsFile();
      console.log('Dropped from computer:', file.name);
    } else if (item.kind === 'string' && item.type === 'text/uri-list') {
      // Dropped from a website (URL)
      const url = await new Promise(resolve => item.getAsString(resolve));
      console.log('Dropped from website:', url);
      checkIfFromOwnServer(url);
      dropImage.src = url;
    }
  }


  // if (files.length) {
  //   var file = files[0];
  //   if (file.type.startsWith('image/')) {
  //     console.log(file)
  //     let {dataUrl,width,height} = await resizeImage(file, 500, 1000);
  //     let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
  //     uploadImage(dataUrl, `zdata/images/${name}.${stringAfter(file.name, '.')}`);
  //     mStyle(dropImage,{w:Math.min(500,width),display:'block',margin:'auto'},{src:dataUrl});
  //   } else {
  //     console.log('Please drop an image file.');
  //   }
  // } else {
  //   // Handle external image URLs
  //   var imageUrl = ev.dataTransfer.getData('text/uri-list');
  //   if (imageUrl) {
  //     let src = imageUrl;
  //     dropImage.src = src;
  //     dropImage.style.display = 'block';
  //     dropZone.textContent = '';
  //     dropZone.appendChild(dropImage);
  //   } else {
  //     console.log('Please drop an image file or a valid image URL.');
  //   }
  // }
}
function handleDrop(ev) {
  console.log('HAAAAAAAAAAAAALO')
  const files = ev.dataTransfer.files;
  handleFiles(files);
}

function handleFiles(files) {
  [...files].forEach(previewFile);
}
function handleFiles(files) {
	[...files].forEach(file => {
			if (file.type.startsWith('image/')) {
					const reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onloadend = () => {
							displayImage(reader.result);
					};
			}
	});
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
function garnix() {
	document.addEventListener('drop', async (event) => {
		event.preventDefault(); // Prevent default behavior
		const items = event.dataTransfer.items;

		if (items.length > 0) {
			for (const item of items) {
				if (item.kind === 'file') {
					// Dropped from computer (local file)
					const file = item.getAsFile();
					console.log('Dropped from computer:', file.name);
				} else if (item.kind === 'string' && item.type === 'text/uri-list') {
					// Dropped from a website (URL)
					const url = await new Promise(resolve => item.getAsString(resolve));
					console.log('Dropped from website:', url);
					checkIfFromOwnServer(url);
				}
			}
		}
	});

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
function onchangeFileInput(ev) {
	console.log('CHANGE',ev.target.files);return;
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

