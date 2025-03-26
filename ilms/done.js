async function loadStaticYaml(path) {
	let sessionType = detectSessionType(); 
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : sessionType == 'php'? 'http://localhost:8080/fastcomet/':'../';
	//console.log(sessionType,server,path)
	let ditext = await fetch(server + path).then(res => res.text());
	return jsyaml.load(ditext);
}
async function mKey(imgKey, d, styles = {}, opts = {}) {
	styles = jsCopy(styles);
	let type = opts.prefer;
	let o = type != 'plain' ? lookup(M.superdi, [imgKey]) : null;
	let src;
	if (nundef(o) && imgKey.includes('.')) src = imgKey;
	else if (isdef(o) && (type == 'img' || type == 'photo') && isdef(o[type])) src = o[type];
	else if (isdef(o) && isdef(o.img)) src = o.img;
	if (isdef(src)) {
		let [w, h] = mSizeSuccession(styles, 40);
		addKeys({ w, h }, styles);
		addKeys({ tag: 'img', src }, opts);
		let d0 = mDom(d, styles, opts);
		mCenterCenterFlex(d0);
		let img = await mImgAsync(d0, styles, opts, roundIfTransparentCorner);
		return d0;
	} else if (isdef(o)) {
		// let [w, h] = mSizeSuccession(styles, 40);
		// let sz = h;
		// addKeys({ h }, styles);
		if (nundef(type)) type = isdef(o.text) ? 'text' : isdef(o.fa6) ? 'fa6' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : null;
		let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
		let html = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);
		addKeys({ family }, styles);
		let d0 = mDom(d, styles, opts);
		mCenterCenterFlex(d0);
		let d1 = mDom(d0, {}, { html });
		let r = getRect(d1);
		[w, h] = [r.w, r.h];
		// let scale = Math.min(sz / w, sz / h);
		// d1.style.transformOrigin = 'center center';
		// d1.style.transform = `scale(${scale})`;
		// d1.style.transform = `scale(${scale})`;
		return d0;
	} else {
		addKeys({ html: imgKey }, opts)
		let img = mDom(d, styles, opts);
		return img;
	}
	console.log('type', type)
}
async function mKeyO(imgKey, d, styles = {}, opts = {}) {
	styles = jsCopy(styles);
	let type = opts.prefer;
	let o = type != 'plain' ? lookup(M.superdi, [imgKey]) : null;
	let src;
	if (nundef(o) && imgKey.includes('.')) src = imgKey;
	else if (isdef(o) && (type == 'img' || type == 'photo') && isdef(o[type])) src = o[type];
	else if (isdef(o) && isdef(o.img)) src = o.img;
	if (isdef(src)) {
		let [w, h] = mSizeSuccession(styles, 40);
		addKeys({ w, h }, styles);
		addKeys({ tag: 'img', src }, opts);
		let d0 = mDom(d, styles, opts);
		mCenterCenterFlex(d0);
		let img = await mImgAsync(d0, styles, opts, roundIfTransparentCorner);
		return d0;
	} else if (isdef(o)) {
		let [w, h] = mSizeSuccession(styles, 40);
		let sz = h;
		addKeys({ h }, styles);
		if (nundef(type)) type = isdef(o.text) ? 'text' : isdef(o.fa6) ? 'fa6' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : null;
		let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
		let html = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);
		addKeys({ family }, styles);
		let d0 = mDom(d, styles, opts);
		mCenterCenterFlex(d0);
		let d1 = mDom(d0, {}, { html });
		let r = getRect(d1);
		[w, h] = [r.w, r.h];
		let scale = Math.min(sz / w, sz / h);
		d1.style.transformOrigin = 'center center';
		d1.style.transform = `scale(${scale})`;
		d1.style.transform = `scale(${scale})`;
		return d0;
	} else {
		addKeys({ html: imgKey }, opts)
		let img = mDom(d, styles, opts);
		return img;
	}
	console.log('type', type)
}
function mLayout(dParent, rowlist, colt, rowt, styles = {}, opts = {}) {
	dParent = toElem(dParent);
	mStyle(dParent, styles);
	rowlist = rowlist.map(x => x.replaceAll('@', valf(opts.suffix, ''))); //console.log(rowlist);
	rowt = rowt.replaceAll('@', valf(opts.hrow, 30));
	colt = colt.replaceAll('@', valf(opts.wcol, 30));
	let areas = `'${rowlist.join("' '")}'`;
	if (dParent.id == 'dPage') M.divNames = [];
	let newNames = mAreas(dParent, areas, colt, rowt);
	let names = M.divNames = Array.from(new Set(M.divNames.concat(newNames)));
	if (nundef(styles.bgSrc)) mShade(newNames);
	return names.map(x => mBy(x));
}
function mLayoutLMR(dParent, styles = {}, opts = {}) {
	let rowlist = [`dLeft@ dMain@ dRight@`];
	let colt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutLR(dParent, styles = {}, opts = {}) {
	let rowlist = [`dLeft@ dRight@`];
	let colt = `auto 1fr`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutM(dParent, styles = {}, opts = {}) {
	let rowlist = [`dMain@`];
	let colt = `1fr`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutMR(dParent, styles = {}, opts = {}) {
	let rowlist = [`dMain@ dRight@`];
	let colt = `minmax(auto, @px) 1fr`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLM(dParent, styles = {}, opts = {}) {
	let rowlist = [`dTop@ dTop@`, `dLeft@ dMain@`];
	let colt = `minmax(@px, auto) 1fr`;
	let rowt = `minmax(@px, auto) 1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLMR(dParent, styles = {}, opts = {}) {
	let rowlist = [`dTop@ dTop@ dTop@`, `dLeft@ dMain@ dRight@`];
	let colt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	let rowt = `minmax(@px, auto) 1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLMRS(dParent, styles = {}, opts = {}) {
	let rowlist = [`dTop@ dTop@ dTop@`, `dLeft@ dMain@ dRight@`, `dStatus@ dStatus@ dStatus@`];
	let colt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	let rowt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLMS(dParent, styles = {}, opts = {}) {
	let rowlist = [`dTop@ dTop@`, `dLeft@ dMain@`, `dStatus@ dStatus@`];
	let colt = `minmax(@px, auto) 1fr`;
	let rowt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTM(dParent, styles = {}, opts = {}, hrow = 30) {
	let rowlist = [`dTop@`, `dMain@`];
	let colt = `1fr`;
	let rowt = `minmax(@px, auto) 1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTMS(dParent, styles = {}, opts = {}, hrow = 30) {
	let rowlist = [`dTop@`, `dMain@`, `dStatus@`];
	let colt = `1fr`;
	let rowt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTopExtraSpaceBetween(dParent) {
	dParent = toElem(dParent);
	mStyle(dParent, {}, { id: 'dOuterTop' });
	let dTop = mDom(dParent, { display: 'flex', justify: 'space-between' }, { id: 'dTop' });
	let dExtra = mDom(dParent, { display: 'flex', justify: 'space-between' }, { id: 'dExtra' });
	let [dTopLeft, dTopMiddle, dTopRight] = [mDom('dTop', {}, { id: 'dTopLeft' }), mDom('dTop', {}, { id: 'dTopMiddle' }), mDom('dTop', {}, { id: 'dTopRight' })]
	let [dExtraLeft, dExtraMiddle, dExtraRight] = [mDom('dExtra', {}, { id: 'dExtraLeft' }), mDom('dExtra', {}, { id: 'dExtraMiddle' }), mDom('dExtra', {}, { id: 'dExtraRight' })]
}


async function mPalette(dParent, src, showPal = true, showImg = false) {
	async function getPaletteFromCanvas(canvas, n) {
		if (nundef(ColorThiefObject)) ColorThiefObject = new ColorThief();
		const dataUrl = canvas.toDataURL();
		const img = new Image();
		img.src = dataUrl;
		return new Promise((resolve, reject) => {
			img.onload = () => {
				const palette = ColorThiefObject.getPalette(img, n);
				resolve(palette ? palette.map(x => colorFrom(x)) : ['black', 'white']);
			};
			img.onerror = () => {
				reject(new Error('Failed to load the image from canvas.'));
			};
		});
	}
	let dc = mDom(dParent, { display: showImg ? 'inline' : 'none' })
	let ca = await getCanvasCtx(dc, { w: 100, h: 100, fill: 'white' }, { src });
	let palette = await getPaletteFromCanvas(ca.cv);
	if (!showImg) dc.remove();
	if (showPal) showPaletteMini(dParent, palette);
	return palette;
}

async function mImageDropper(d) {
	let fileInput = mDom(d, {}, { tag: 'input', type: 'file', accept: 'image/*' }); //,{onchange:onchangeFileInput});
	let dropZone = mDom(d, { w: 500, hmin: 300, border: 'white 1px dashed', align: 'center' }, { html: 'Drop image here' });
	//return;
	function checkIfFromOwnServer(url) {
		const ownOrigin = window.location.origin; // e.g., http://127.0.0.1:51012
		if (url.startsWith(ownOrigin)) {
			console.log('Dropped from inside the project (server):', url); return true;
		} else {
			console.log('Dropped from external website:', url); return false;
		}
	}
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
				name = await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }, { value: name }); console.log('you entered', name);
				console.log(width, height, name);
				uploadImage(dataUrl, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
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
async function mPhpGetFiles(dir, projectName = 'ilms', verbose = true, jsonResult = true) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	if (verbose) console.log('to php:', server + `${projectName}/php/list_files.php`, dir);
	let res = await fetch(server + `${projectName}/php/list_files.php?dir=${encodeURIComponent(dir)}`,
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			//body: JSON.stringify(o),
			// headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			// body: new URLSearchParams(JSON.stringify(o)), 
		}
	);
	let text;
	try {
		text = await res.text();
		if (!jsonResult) {
			return text;
		}
		let obj = JSON.parse(text);
		if (verbose) console.log('from php:\n', obj);
		let mkeys = ["config","superdi","users","details"]; 
		for(const k of mkeys){
			if (isdef(obj[k])) {
				M[k] = obj[k];
				if (k == "superdi") {
					loadSuperdiAssets();
				}else if (k == "users") {
					loadUsers();
				}
			}
		}
		return obj;
	} catch (e) {
		return isString(text) ? text : e;
	}
}
async function mPostPhp(cmd, o, projectName = 'ilms', verbose = true, jsonResult = true) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	if (isdef(o.path) && (o.path.startsWith('zdata') || o.path.startsWith('y'))) o.path = '../../' + o.path;
	if (verbose) console.log('to php:', server + `${projectName}/php/${cmd}.php`, o);
	let res = await fetch(server + `${projectName}/php/${cmd}.php`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(o),
			// headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			// body: new URLSearchParams(JSON.stringify(o)), 
		}
	);
	let text;
	try {
		text = await res.text();
		if (!jsonResult) {
			return text;
		}
		let obj = JSON.parse(text);
		if (verbose) console.log('from php:\n', obj);
		let mkeys = ["config","superdi","users","details"]; 
		for(const k of mkeys){
			if (isdef(obj[k])) {
				M[k] = obj[k];
				if (k == "superdi") {
					loadSuperdiAssets();
				}else if (k == "users") {
					loadUsers();
				}
			}
		}
		return obj;
	} catch (e) {
		return isString(text) ? text : e;
	}
}

function blogShowAll(d, blog) {
	let dates = Object.keys(blog);
	dates.sort((a, b) => new Date(b) - new Date(a));
	let di = {};
	for (const date of dates) {
		di[date] = blogShow(d, date, blog[date]);
	}
	return di;
}
function blogShow(d, key, o) {
	let dBlog = mDom(d, { fz: 20, className: 'collapsible' }, { key });
	mDom(dBlog, { className: 'title' }, { html: `${key}: ${o.title}` });
	let dParts = mDom(dBlog, { className: 'sortable' });
	let blogItem = { o, key, div: dBlog, dParts, items: [] }
	//console.log(o.text)
	for (let textPart of o.text) {
		let d2, type; // = mDom(dParts, { caret: 'white' });
		if (textPart.includes('blogimages/')) {
			type = 'image'
			d2 = mDom(dParts, { w100: true }, { tag: 'img', src: textPart, type });
		} else {
			type = 'text'
			d2 = mDom(dParts, { caret: 'white', padding: 2, outline: '' }, { html: textPart, contenteditable: true, type });
			// mStyle(d2, { mabottom: 10 }, { contenteditable: true, html: textPart });
			// d2.onblur = blogSave;
		}
		let item = { key, text: textPart, div: d2, type };
		blogItem.items.push(item);
		//d2.onclick = onclickPart;
	}
	mDom(dParts, { patop: 5, pabottom: 2 }, { html: '<hr>', type: 'line' });
	return blogItem;
}
function enableAutoScrollOnDrag(draggableElement) {
	let scrollInterval;
	const scrollSpeed = 20; // Adjust scroll speed as needed
	const edgeThreshold = 50; // Distance from edge to start scrolling

	draggableElement.addEventListener('drag', (e) => {
		clearInterval(scrollInterval);

		const { clientY } = e;
		const { innerHeight } = window;

		if (clientY < edgeThreshold) {
			// Near top of viewport
			scrollInterval = setInterval(() => {
				window.scrollBy(0, -scrollSpeed);
			}, 50);
		} else if (clientY > innerHeight - edgeThreshold) {
			// Near bottom of viewport
			scrollInterval = setInterval(() => {
				window.scrollBy(0, scrollSpeed);
			}, 50);
		}
	});

	draggableElement.addEventListener('dragend', () => {
		clearInterval(scrollInterval);
	});
}
function removeAllEvents(elem) {
	const newElement = elem.cloneNode(true); // Clone the element while keeping child elements
	elem.parentNode.replaceChild(newElement, elem);
	return newElement; // Return the new element reference
}
function replaceElement(elem, newElem) {
	elem.parentNode.replaceChild(newElem, elem);
	return newElem;
}


