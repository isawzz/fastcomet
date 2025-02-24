
function mSortable(divs) {
	let draggedElement = null;
	let lastHighlighted = null;

	divs.forEach(container => {
		container.querySelectorAll('img').forEach(el => {
			el.draggable = true;

			el.addEventListener('dragstart', ev => {
				draggedElement = el;
				ev.dataTransfer.effectAllowed = 'move';
			});

			enableAutoScrollOnDrag(el)

		});

		container.querySelectorAll('img,div').forEach(el => {
			el.addEventListener('dragover', ev => {
				ev.preventDefault();
				if (el !== draggedElement) {
					if (lastHighlighted) lastHighlighted.style.outline = '';
					el.style.outline = '2px solid yellow';
					lastHighlighted = el;
				}
			});
			el.addEventListener('dragleave', () => {
				if (el === lastHighlighted) {
					el.style.outline = '';
					lastHighlighted = null;
				}
			});

			el.addEventListener('drop', ev => {
				ev.preventDefault();
				lastHighlighted.style.outline = '';
				let newParent = lastHighlighted.parentNode;
				if (draggedElement && draggedElement !== lastHighlighted) {
					console.log('dropped', draggedElement);
					//console.log('dropped', draggedElement, 'on', lastHighlighted, draggedElement.parentNode);
					draggedElement.style.outline = '';
					console.log(lastHighlighted, draggedElement)
					newParent.insertBefore(draggedElement, lastHighlighted);
				} else {
					const files = ev.dataTransfer.files;
					if (files.length > 0) {
						const file = files[0];
						if (file.type.startsWith('image/')) { // Check if the dropped file is an image
							const reader = new FileReader();
							reader.onload = async (evReader) => {
								let data = evReader.target.result;
								
								ondropUrl(newParent,data);

							};
							reader.readAsDataURL(file);
						}
					}

				}
				draggedElement = null;
				lastHighlighted = null;
			});
		});
	})
}

async function blogSaveAll() {
	// let dpart = ev.target;
	// let dparent = findAncestorWith(dpart, { attribute: 'key' });

	//check if content has changed
	//only save if content has changed!

	function replaceDivs(str) {
		return str.replaceAll('<div>', '<br>').replaceAll('</div>', '');
	}

	let blog = DA.blogs;
	//console.log(blog);

	let list = dict2list(blog); //console.log(list)
	for (const bl of list) {
		//console.log(bl);
		let d = bl.dParts;
		let chi = arrChildren(d); //chi.map(console.log);return;
		let parts = [];
		let prevType = null;
		let prevText = null;
		for (const ch of chi) {
			let type = ch.getAttribute('type'); //console.log(type,ch)
			if (type == 'text') {
				let txt = ch.innerHTML;
				txt = replaceDivs(txt);
				if (isdef(prevText)) txt = prevText + '<br>' + txt;
				prevType = 'text';
				prevText = txt;
			} else {
				if (isdef(prevText)) { parts.push(prevText); prevText = null; }
				prevType = type;
				if (type == 'image') {
					//console.log('src',ch.src);
					parts.push(ch.src);
					//=>later! if this image does not exist yet need to also upload the image!
				} else if (!type) {
					console.log('need to save image data', ch)

					saveBase64Image(ch, 'img1.jpg');
					// await mPhpPostFile(ch.src, 'zdata/img1.jpg');
				}
			}
		}
		//console.log(parts)
		bl.parts = parts;
	}

	let di = {};
	for (const el of list) {
		di[el.key] = { title: el.o.title, text: el.parts };
	}
	let text = jsyaml.dump(di);
	let res = await mPhpPostFile(text, 'zdata/blog1.yaml');
	return res;
}

function onclickPart(ev){
	let elem = ev.target;
	mStyle(elem,{outline:'solid white 3px'})
}
function ondropUrl(elem,url) {
	let w = 500;
	let parent=elem;
	mDom(parent,{w},{tag:'img',src:url});
}
function saveBase64Image(imgElement, filename) {
	// Check if the imgElement has a valid base64 src
	if (!imgElement || !imgElement.src.startsWith('data:image/jpeg;base64,')) {
			console.error('Invalid image element or source.');
			return;
	}

	// Extract base64 data from the image src
	const base64Data = imgElement.src.split(',')[1];

	// Decode base64 to binary data
	const byteCharacters = atob(base64Data);
	const byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteCharacters.length; i++) {
			byteNumbers[i] = byteCharacters.charCodeAt(i);
	}
	const byteArray = new Uint8Array(byteNumbers);

	// Create a Blob from the binary data
	const blob = new Blob([byteArray], { type: 'image/jpeg' });

	// Create a link element to trigger the download
	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = filename;

	// Append the link to the document, trigger the download, and remove the link
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
function uploadImage(dataUrl, path) {
	// Example: Call this function with your `dataUrl`
	// uploadImage('data:image/png;base64,iVBORw0KGgoAAAANS...');
	if (isdef(path) && (path.startsWith('zdata') || path.startsWith('y'))) path = '../../' + path;
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	fetch(server + 'ilms/php/upload_image.php', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ image: dataUrl, path })
	})
		.then(response => response.text())
		.then(data => console.log(data))
		.catch(error => console.error('Error:', error));
}

