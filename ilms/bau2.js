
function checkIfFromOwnServer(url) {
	const ownOrigin = window.location.origin; // e.g., http://127.0.0.1:51012
	if (url.startsWith(ownOrigin)) {
		console.log('Dropped from inside the project (server):', url); return true;
	} else {
		console.log('Dropped from external website:', url); return false;
	}
}
async function handleDropOneZone(ev) {
	console.log(arguments, ev.target, ev.target.files, ev.dataTransfer); 
	let dropZone = DA.dropZone; //ev.target;
	console.log('dropZone', dropZone);
	let dropImage = dropZone.getElementsByTagName('img')[0];
	let items = isdef(ev.target.files)?ev.target.files:ev.dataTransfer.items;
	console.log('items', items); //return;
	for (const item of items) {
		if (nundef(item.kind) || item.kind === 'file') {
			// Dropped from computer (local file)
			const file = item.getAsFile();
			console.log('Dropped from computer:', file);
		} else if (item.kind === 'string' && item.type === 'text/uri-list') {
			// Dropped from a website (URL)
			const url = await new Promise(resolve => item.getAsString(resolve));
			console.log('Dropped from website:', url);
			let isOwnServer = checkIfFromOwnServer(url);
			if (!isOwnServer) {
				let { dataUrl, width, height } = await resizeImage(url, 500, 1000);
				let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
				uploadImage(dataUrl, `zdata/images/${name}.${stringAfter(file.name, '.')}`);
				mStyle(dropImage, { w: Math.min(500, width), display: 'block', margin: 'auto' }, { src: dataUrl });

				dropImage.src = url; return;
			}
			dropImage.src = url;
		}
	}
}

