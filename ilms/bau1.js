
async function mImageDropper(d){
	let fileInput = mDom(d, {}, { tag: 'input', type: 'file', accept: 'image/*' }); //,{onchange:onchangeFileInput});
	let dropZone = mDom(d, { w: 500, h: 300, border: 'white 1px dashed', align: 'center' }, { html: 'Drop image here' });
  //return;
	async function ondropImage(ev) {
		console.log('ondropImage', ev);
		let item = ev.dataTransfer.items[0]; console.log(item);
		let file = item.getAsFile(); console.log(file);
		if (file) await displayImagedata(URL.createObjectURL(file)); 
		else {
			file = ev.dataTransfer.files[0];
			const url = await new Promise(resolve => item.getAsString(resolve));
			console.log('Dropped from website:', url);
			let isOwnServer = checkIfFromOwnServer(url);
			if (isOwnServer) {
				await displayImagedata(url);
			} else {
				let { dataUrl, width, height } = await resizeImage(file, 500, 1000);
				await displayImagedata(dataUrl);				
				let name = `img${getNow()}`; 
				name = await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 },{value:name}); console.log('you entered', name);
				console.log(width, height, name);
				uploadImage(dataUrl, `zdata/images/${name}.${stringAfter(file.name, '.')}`);
			}
		}
		
	}
	async function onchangeFileinput(ev) {
		let files = ev.target.files; //console.log(files);
		let file = files[0]; //console.log(file);
		let src = URL.createObjectURL(file); //console.log(src);
		await displayImagedata(src);
	}
	async function displayImagedata(src) {
		mClear(dropZone);
		let img = await mLoadImgAsync(dropZone, { wmax: 500 }, { tag: 'img', src: src });
		console.log('img dims', img.width, img.height);
	}

	//let x = mImageDropper(d3,ondropImage);
	function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
	function highlight(ev) { mClass(ev.target, 'framedPicture'); }
	function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }
	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
		dropZone.addEventListener(evname, preventDefaults, false);
		document.body.addEventListener(evname, preventDefaults, false);
	});
	['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
	['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });
	dropZone.addEventListener('drop', ondropImage, false);
	fileInput.addEventListener('change', onchangeFileinput, false);

}

