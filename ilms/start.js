
onload = start;

async function start() { await test3_game(); }

async function test3_game() {
	DA.pollCounter = 0;
	await loadAssetsStatic(); //console.log('tables', M.tables); return;

	let elems = mLayoutTM('dPage'); mStyle('dMain', { overy: 'auto' }); mCenterFlex('dMain'); mLayoutTopExtraSpaceBetween('dTop'); mFlexV('dTop'); //mStyle('dTop', { hmin: 32 }); mStyle('dExtra', { hmin: 32 })

	let names = ['amanda', 'felix', 'lauren', 'mimi', 'gul']; let d = mBy('dExtraRight');
	for (const name of names) { let b = mDom(d, { className: 'button' }, { tag: 'button', html: name, onclick: async () => await switchToUser(name) }); }

	let username = localStorage.getItem('username') ?? 'hans'; if (username == 'felix') username = 'amanda'; else username = 'felix'; 
	await switchToUser(username);

	//testbuttons
	mDom(dExtraLeft,{maleft:10},{tag:'button',html:'create',onclick:async()=>await createTable()});
	mDom(dExtraLeft,{maleft:10},{tag:'button',html:'load',onclick:async()=>await loadTable()});
	mDom(dExtraLeft,{maleft:10},{tag:'button',html:'present',onclick:async()=>await presentTable()});
	mDom(dExtraLeft,{maleft:10},{tag:'button',html:'delete',onclick:async()=>await deleteAllTables()});
//	mDom(dExtraLeft,{maleft:10},{tag:'button',html:'stop',onclick:()=>pollStop()})

	// let state = DA.tData = { player: U.name, turn: 1, board: [["", "", ""], ["", "", ""], ["", "", ""]], players: ['felix', 'amanda'] };
	// let tid = await createTable('felix', state);
	// //console.log(await getTables());

	// let table = await loadTable(tid); //console.log(table); return;
	// await presentTable(table);


}
async function test3_delete(){
	await loadAssetsStatic(); 
	let state = DA.tData = { player: U.name, turn: 1, board: [["", "", ""], ["", "", ""], ["", "", ""]], players: ['felix', 'amanda'] };
	let tid = await createTable('felix', state);
	console.log(await getTables());
	await mPhpGet('delete_dir',{dir:'tables'},'ilms',true)
	console.log(await getTables());

}
async function test3_checkCapitals() {
	await loadAssetsStatic(); //console.log('assets', M.users);
	for (const cap of M.capital) {
		let s1 = stringBefore(cap, '-').trim();
		let s = normalizeString(s1, { lowercase: false }); //console.log(s1,s); return;
		let sback = fromNormalized(s, { caps: false });
		if (sback != s1) console.log(s1, '->', s, '->', sback)
	}
}
async function test3_createTableName() {
	await loadAssetsStatic(); //console.log('assets', M.users);
	let notAllowed = M.capital.filter(x=>!M.asciiCapitals.includes(x));
	let files = await mPhpGetFiles('tables'); //console.log('files', files);
  M.tables = files.map(x => x.split('.')[0]);
	for (const i of range(10)) {
		let tableName = generateTableName(2,M.tables); //mPhpGetFiles('games'); console.log('files', files);
		if (notAllowed.some(x=>tableName.includes(x))) alert("NOT ALLOWED",tableName);
		//console.log('tableName', tableName);break;
		console.log(i, tableName);
	}
	console.log('DONE!')
	//console.log(M.asciiCapitals);
	//notAllowed.forEach(x=>console.log(x));
}
async function test3_list_files() {
	let files = await mPhpGetFiles('games'); console.log('files', files);
}
async function test3_game1() {
	await loadAssetsStatic(); //console.log('assets', M.users);

	let elems = mLayoutTM('dPage'); mStyle('dMain', { overy: 'auto' }); mCenterFlex('dMain'); mLayoutTopExtraSpaceBetween('dTop'); mFlexV('dTop'); //mStyle('dTop', { hmin: 32 }); mStyle('dExtra', { hmin: 32 })

	let names = ['amanda', 'felix', 'lauren', 'mimi', 'gul']; let d = mBy('dExtraRight');
	for (const name of names) { let b = mDom(d, { className: 'button' }, { tag: 'button', html: name, onclick: async () => await switchToUser(name) }); }

	let username = localStorage.getItem('username') ?? 'hans'; if (username == 'felix') username = 'amanda'; else username = 'felix'; await switchToUser(username);

	//console.log("start");
	let state = DA.tData = { player: U.name, turn: 1, board: [["", "", ""], ["", "", ""], ["", "", ""]], players: ['felix', 'amanda'] };
	if (U.name == 'felix') createTable(U.name, state);
	else {
		setInterval(() => getGameState(5), 5000);  // Poll every 5 seconds
	}
	//
	//login();

}
async function test3_theme() {
	await loadAssetsStatic(); //console.log('assets', M.users);

	let elems = mLayoutTM('dPage');
	mStyle('dMain', { overy: 'auto' }); mCenterFlex('dMain');
	mLayoutTopExtraSpaceBetween('dTop');
	mStyle('dTop', { hmin: 32 }); mFlexV('dTop');
	mStyle('dExtra', { hmin: 32 })

	let names = ['amanda', 'felix', 'lauren', 'mimi', 'gul'];
	let d = mBy('dExtraRight');
	for (const name of names) {
		let b = mDom(d, { className: 'button' }, { tag: 'button', html: name, onclick: async () => await switchToUser(name) });
	}

	let username = localStorage.getItem('username') ?? 'hans'; //console.log('username', username);
	if (username == 'felix') username = 'amanda'; else username = 'felix';
	await switchToUser(username);

	//console.log("start");
	DA.tData = { turn: 1, board: [["", "", ""], ["", "", ""], ["", "", ""]], players: [] };
	//setInterval(() => getGameState(5), 5000);  // Poll every 5 seconds
	//login();

}
async function test3_game0() {
	await loadAssetsStatic(); //console.log('assets', M);

	let elems = mLayoutTM('dPage', { bg: 'lightblue' });
	mStyle('dMain', { overy: 'auto' }); mCenterFlex('dMain');
	mLayoutTopExtraSpaceBetween('dTop');
	mStyle('dTop', { hmin: 32 })
	mStyle('dExtra', { hmin: 32 })

	let names = ['amanda', 'felix', 'lauren', 'mimi', 'gul'];
	let d = mBy('dExtraRight');
	for (const name of names) {
		let b = mDom(d, {}, { tag: 'button', html: name, onclick: async () => await switchToUser(name) });
	}

	let username = localStorage.getItem('username') ?? 'hans'; console.log('username', username); //return;
	await switchToUser(username);

	console.log("start");
	DA.tData = { turn: 1, board: [["", "", ""], ["", "", ""], ["", "", ""]], players: [] };
	//setInterval(() => getGameState(5), 5000);  // Poll every 5 seconds
	//login();

}
async function test2_login() {
	await loadAssetsStatic(); console.log('assets', M);
	let username = localStorage.getItem('username') ?? 'felix'; console.log('username', username)
	let res = await mPhpPost('game_user', { username, action: 'login' });

}
async function test2_test_config() {
	let res = await mPhpPost('game_user', { action: 'test_config' });
	// mDom('dPage',{},{tag:'pre',html:res.json})
	// mDom('dPage',{},{tag:'pre',html:res.yaml})
}
async function test2_test() {
	let res = await mPhpPost('game_user', { action: 'test' });
	mDom('dPage', {}, { tag: 'pre', html: res.json })
	mDom('dPage', {}, { tag: 'pre', html: res.yaml })
	console.log(res.o);
}
async function test2_usertest() {
	await loadAssetsStatic();// console.log('assets', M);
	let res = await mPhpPost('game_user', { username: 'hans', action: 'login' });

}
async function test2_game() {
	await loadAssetsStatic(); console.log('assets', M);

	let elems = mLayoutTM('dPage', { bg: 'lightblue' });
	mStyle('dMain', { overy: 'auto' }); mCenterFlex('dMain');
	mLayoutTopExtraSpaceBetween('dTop');

	let names = ['amanda', 'felix', 'lauren', 'mimi', 'gul'];
	let d = mBy('dExtraRight');
	for (const name of names) {
		let b = mDom(d, {}, { tag: 'button', html: name, onclick: async () => await switchToUser(name) });
	}

	await switchToUser();

	console.log("start");
	DA.tData = { turn: 1, board: [["", "", ""], ["", "", ""], ["", "", ""]], players: [] };
	//setInterval(() => getGameState(5), 5000);  // Poll every 5 seconds
	//login();

}
async function test1_game() {
	await initAssets();

	let elems = mLayoutTLM('dPage', { bg: 'lightblue' });
	mStyle('dMain', { overy: 'auto' }); mCenterFlex('dMain'); mFlex(dTop);
}
async function test1_hexboardTerritories() {
	await initAssets();
	let elems = mLayoutTLM('dPage', { bg: 'lightblue' });
	mStyle('dMain', { overy: 'auto', bg: 'black' }); mCenterFlex('dMain'); mFlex(dTop);

	let board = cryBoard('dMain', 5, 5, 80);
	for (const tile of board) {
		iDiv(tile).onclick = () => console.log(tile);
		mStyle(iDiv(tile), { cursor: 'pointer' })
	}
}
async function test1_hexboard() {
	await initAssets();
	let elems = mLayoutTLM('dPage', { bg: 'lightblue' });
	mStyle('dMain', { overy: 'auto' }); mFlex('dMain'); mFlex(dTop);
	let d = mDom('dMain', { gap: 10, padding: 10 });
	let pts = hexBoardCenters(8, 3).centers; console.log(pts)
	//pts.map(pt => drawCircleOnDiv(d, pt.x*50, pt.y*50, 10)); 
	let clip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
	for (const pt of pts) {
		let d1 = mDom(d, { clip, position: 'absolute', left: pt.x * 50, top: pt.y * 50, w: 50, h: 50, bg: rColor() });
		mCenterCenterFlex(d1);
		mDom(d1, { fz: 20 }, { html: pt.x + ',' + pt.y });

	}
	//pts.map(pt => hexFromCenter(d, pt.x*50, pt.y*50, {w:50,h:50,bg:rColor()})); 
}
async function test1_hex() {
	await initAssets();
	let elems = mLayoutTLM('dPage', { bg: 'lightblue' });
	mStyle('dMain', { overy: 'auto' }); mFlex('dMain'); mFlex(dTop);
	let d = mDom('dMain', { gap: 10, padding: 10 });
	let p = { x: 100, y: 100 };
	let sz = 100;
	let [w, h] = mSizeSuccession({ sz });
	let dhex = hexFromCenter(d, p, { w, h, bg: rColor() });
	drawCircleOnDiv(d, p.x, p.y, 10);
	let clip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
	let pts = calcClipPoints(p.x, p.y, sz, sz, clip);
	console.log(pts);
	for (const pt of pts) drawCircleOnDiv(d, pt.x, pt.y, 2)

}
async function test0_dlmp3() {
	//downloadVideo('https://www.youtube.com/watch?v=tcV-jhCTeys&list=PLMeAFXbn1kOGNtHxiOKaRwqY-b_7GLIZB','schradiek.mp4'); 
	let res = await mPhpPostAudio('https://www.youtube.com/watch?v=tcV-jhCTeys&list=PLMeAFXbn1kOGNtHxiOKaRwqY-b_7GLIZB', '../../zdata/hallo');
	console.log(res);
}
async function test0_loadingLocalhost() {
	await initAssets();
	let src = `../assets/img/beach/beach${rChoose(range(5))}.jpg`;
	let elems = mLayoutTLM('dPage', { bgSrc: src, bgSize: 'cover' });
	mStyle('dMain', { overy: 'auto' }); mFlex('dMain'); mFlex(dTop);
	let palette = await mPalette('dMain', src, false);
	let bg = rChoose(palette);// '#00000060'
	DA.theme = { src, palette, bg };
	arrMinus(elems, dMain).forEach(x => mStyle(x, { bg, fg: 'contrast', alpha: .6 }));

	let d = mDom('dMain', { w: 500, padding: 10, bg: 'green' });
	//let d1 = mDom(d, { h: 200 }, { tag: 'img', src: '../assets/img/emo/abacus.png' });
	//mLinebreak(d);

	let m = mImageAudioDropper(d); return;
	// let m = mImageDropper(d); return;

	mFlex('dMain');
	mDom(dTop, {}, { id: 'dTop1' })
	mDom(dTop, {}, { id: 'dTop2' })
	mFlexV('dTop1'); mFlexV('dTop2');

	mImageMusicDropper('dMain');
	//mImageDropper('dMain');
	//mMediaDropper('dMain')

}

async function app0_blog() {
	await initAssets();
	let src = `../assets/img/beach/beach${rChoose(range(5))}.jpg`;
	let elems = mLayoutTLM('dPage', { bgSrc: src, bgSize: 'cover' });
	mStyle('dMain', { overy: 'auto' });
	mFlex('dMain');
	mDom(dTop, {}, { id: 'dTop1' })
	mDom(dTop, {}, { id: 'dTop2' })
	mFlexV('dTop1'); mFlexV('dTop2');
	let palette = await mPalette('dMain', src, false);
	let bg = rChoose(palette);// '#00000060'
	DA.theme = { src, palette, bg };
	arrMinus(elems, dMain).forEach(x => mStyle(x, { bg, fg: 'contrast', alpha: .6 }));

	mMediaDropper('dMain')
	//topmenu: New: wenn er da drauf clickt wird der alte gesaved!, Theme
	//submenu: + bg 
	return;
	let d = DA.currentPage = mDom(dMain, { bg, fg: 'contrast', padding: 10, w: 500, align: 'center' });

	//moecht einen clear button der mClear(d) macht
	// let dClear=mDom(dTop,{family:'fa',bg:'#ffffffAA',fg:'grey'},{tag:'button',html:'clear',onclick:()=>mClear(d)})
	let bstyles = { h: 30, w: 30, bg: '#ffffffAA', fg: 'grey', margin: 10 };
	mKey('New', dTop, bstyles, { tag: 'button', onclick: ilNewPage });
	mKey('plus', dTop, bstyles, { tag: 'button', onclick: ilAddGadget });
	mKey('times', dTop, dictMerge(bstyles, { fz: 24, fg: 'dimgray' }), { tag: 'button', onclick: () => mClear(DA.currentPage) });
	mDom(dTop, { maleft: 10 }, { html: '&nbsp;' })
	showPaletteMini(dTop, palette);

}
async function app0_behappy() {
	await initAssets();
	let src = `../assets/img/beach/beach${rChoose(range(5))}.jpg`;
	//mStyle('dPage', {bgSrc:src, bgSize:'cover'}); return;
	let elems = mLayoutTLM('dPage', { bgSrc: src, bgSize: 'cover' });
	mStyle('dMain', { overy: 'auto' });
	mFlex('dMain'); mFlexV('dTop')
	let colorPalette = DA.palette = await mPalette('dMain', src, false);
	let bg = rChoose(colorPalette);// '#00000060'
	arrMinus(elems, dMain).forEach(x => mStyle(x, { bg, fg: 'contrast', alpha: .6 }));
	//mStyle(dTop,{justify:'center',aitems:'center',fz:20},{html:'Hello, happy world!'})

	let d = mDom(dMain, { padding: 10, w: 500, align: 'center' });
	//let m = mImageDropper(d); 

	//moecht einen clear button der mClear(d) macht
	// let dClear=mDom(dTop,{family:'fa',bg:'#ffffffAA',fg:'grey'},{tag:'button',html:'clear',onclick:()=>mClear(d)})
	let bstyles = { h: 30, w: 30, bg: '#ffffffAA', fg: 'grey', margin: 10 };
	mKey('plus', dTop, bstyles, { tag: 'button', onclick: ev => ilAddGadget(ev, d) });
	mKey('times', dTop, dictMerge(bstyles, { fz: 24, fg: 'dimgray' }), { tag: 'button', onclick: () => mClear(d) });
	showPaletteMini(dTop, colorPalette)

}
async function app0_stopwatch() {
	await loadAssetsStatic();
	let di = await actionLoadAll();
	di.list.map(x => console.log(x.key, x.date, x.time, x.secs));
	let elems = mLayoutTM(rColor(), dPage);
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	let d1 = mKey('watch', dTop, {}, { onclick: onclickStopwatch, menu: 'top' });
	let d2 = mKey('reset', dTop, {}, { onclick: onclickResetActions, menu: 'top' });
	let d3 = mKey('archive', dTop, {}, { onclick: onclickArchiveActions, menu: 'top' });
	let d4 = mKey('thinking_face', dTop, {}, { onclick: onclickAction, menu: 'main' });
	let d5 = mKey('sleeping_face', dTop, {}, { onclick: onclickAction, menu: 'main' });
	d1.click();
}

async function test0_vonDd1DragImageFromAnywhere() {
	await initAssets();
	let elems = mLayoutTLMS('dPage'); mStyle('dMain', { overy: 'auto' });
	mFlex('dMain'); mFlex(dTop);

	let d = mDom('dMain', { padding: 10, bg: 'green' });
	let d1 = mDom(d, { h: 200 }, { tag: 'img', src: '../assets/img/emo/abacus.png' });
	mLinebreak(d);

	let m = mImageDropper(d); return;
	// let fileInput = mDom(d, {}, { tag: 'input', type: 'file', accept: 'image/*' }); //,{onchange:onchangeFileInput});
	// let dropZone = mDom(d, { w: 500, h: 300, border: 'white 1px dashed', align: 'center' }, { html: 'Drop image here' });
	return;
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
	return;

	//let x = mImageDropper(mDom('dMain',{w:500,bg:'green',h:'auto'}));
	//let x1 = mImageDropper(d3, { w: 500, h: 300, border: 'white 1px dashed', margin: 10, align: 'center' }, { html: 'Drop image here' });
}
async function test0_clickImageDownloadAtClient() {
	await initAssets();
	let elems = mLayoutTLMS('strawberry', 'dPage'); mStyle('dMain', { overy: 'auto' });
	mFlex('dMain'); mFlex(dTop);
	let d = DA.dropZone = mBy('dMain');

	//enable drap drop image to dMain
	d.addEventListener('drop', handleDropOneZone, false);


}
async function test0_sortable() {
	await initAssets();
	let elems = mLayoutTLMS('strawberry', 'dPage'); mStyle('dMain', { overy: 'auto' });
	mFlex('dMain'); mFlex(dTop);
	let blog = await loadStaticYaml('zdata/blog1.yaml');
	let d = mDom(dMain, { wmax: 500, wbox: true, paleft: 10 }, { id: 'dBlogs' });
	let di = DA.blogs = blogShowAll(d, blog);
	let buttonStyles = { bg: 'transparent', fg: 'grey' };
	let coll = DA.collapse = await mCollapse(Array.from(document.querySelectorAll('.collapsible')), dTop, buttonStyles);

	// Example usage:
	mSortable(document.querySelectorAll('.sortable'));

	// // Example usage:
	// const draggable = document.getElementById('draggableElement');
	// enableAutoScrollOnDrag(draggable);


	let btn = await mKey('save', dTop, buttonStyles, { tag: 'button', onclick: blogSaveAll });
	btn.click();
}
async function test0_superCollapser() {
	await initAssets();
	let elems = mLayoutTLMS('strawberry', 'dPage'); mStyle('dMain', { overy: 'auto' }); mFlex('dMain');
	mFlex(dTop)
	let blog = await loadStaticYaml('zdata/blog1.yaml');
	let d = mDom(dMain, { wmax: 500, paleft: 10 }, { id: 'dBlogs' });
	let di = DA.blogs = blogShowAll(d, blog);

	let buttonStyles = { bg: 'transparent', fg: 'grey' };

	let coll = DA.collapse = await mCollapse(Array.from(document.querySelectorAll('.collapsible')), dTop, buttonStyles);

	let bAddCollapser = await mKey('add collapse', dTop, buttonStyles, { tag: 'button', onclick: async () => { if (nundef(DA.collapse)) DA.collapse = await mCollapse(Array.from(document.querySelectorAll('.collapsible')), dTop, buttonStyles) } });
	let bRemoveCollapser = await mKey('remove collapse', dTop, buttonStyles, { tag: 'button', onclick: () => { if (isdef(DA.collapse)) { mCollapseRemove(DA.collapse); DA.collapse = null; } } });

	// Example usage:
	// enableDragDrop(document.getElementById('.sortable'));
}
async function test0_altCollapse() {
	await initAssets();
	let elems = mLayoutTLMS('strawberry', 'dPage'); mStyle('dMain', { overy: 'auto' }); mFlex('dMain');
	let blog = await loadStaticYaml('zdata/blog1.yaml');
	let d = mDom(dMain, { wmax: 500, paleft: 10 }, { id: 'dBlogs' });
	let di = DA.blogs = blogShowAll(d, blog);


	let coll = DA.collapse = blogCollapse(dict2list(di)); console.log(coll);

	let buttonStyles = { bg: 'transparent', fg: 'grey' };
	let bExpand = await mKey('circle_chevron_down', dTop, buttonStyles, { tag: 'button', onclick: coll.expandAll });
	let bCollapse = await mKey('circle_chevron_up', dTop, buttonStyles, { tag: 'button', onclick: coll.collapseAll });

	let tb = coll.button = mToggleButton(bExpand, bCollapse);
}
async function test0_imfree() {
	await initAssets();
	let elems = mLayoutTLMS('strawberry', 'dPage'); mStyle('dMain', { overy: 'auto' }); mFlex('dMain');
	let blog = await loadStaticYaml('zdata/blog1.yaml');
	let d = mDom(dMain, { wmax: 500, paleft: 10 }, { id: 'dBlogs' });
	let di = DA.blogs = blogShowAll(d, blog);


	let coll = DA.collapse = blogCollapse(dict2list(di)); console.log(coll);

	let buttonStyles = { bg: 'transparent', fg: 'grey' };
	let bExpand = await mKey('circle_chevron_down', dTop, buttonStyles, { tag: 'button', onclick: coll.expandAll });
	let bCollapse = await mKey('circle_chevron_up', dTop, buttonStyles, { tag: 'button', onclick: coll.collapseAll });

	let tb = coll.button = mToggleButton(bExpand, bCollapse);
}
async function test0_multiButton() {
	let blog = await initBlog();
	let elems = mLayoutTLMS('raspberry', 'dPage'); mStyle('dMain', { overy: 'auto' }); mFlex('dMain');
	let d = mDom(dMain, { wmax: 500, paleft: 10 }, { id: 'dBlogs' });
	let di = DA.blogs = blogShowAll(d, blog);
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });

	let coll = DA.collapse = blogCollapse(dict2list(di), { fz: 12, weight: 'normal', deco: 'underline' }, { fz: 22, weight: 'bold', deco: 'none' });
	console.log(coll);

	let buttonStyles = { bg: 'transparent', fg: 'grey' };
	let bExpand = await mKey('circle_chevron_down', dTop, buttonStyles, { tag: 'button', onclick: coll.expandAll });
	let bCollapse = await mKey('circle_chevron_up', dTop, buttonStyles, { tag: 'button', onclick: coll.collapseAll });

	let tb = coll.button = mToggleButton(bExpand, bCollapse);

	let bNew = await mKey('circle_plus', dTop, buttonStyles, { tag: 'button', onclick: onclickNewBlog });

}
async function test0_toggleCollapse() {
	let blog = await initBlog();
	let elems = mLayoutTLMS('raspberry', 'dPage'); mStyle('dMain', { overy: 'auto' }); mFlex('dMain');
	let d = mDom(dMain, { wmax: 500, paleft: 10 });
	let di = DA.blogs = await blogShowAll(d, blog);
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });

	let coll = DA.collapse = blogCollapse(dict2list(di), { fz: 12, weight: 'normal', deco: 'underline' }, { fz: 22, weight: 'bold', deco: 'none' });
	console.log(coll);

	let buttonStyles = { bg: 'transparent', fg: 'grey' };


	//mach einen toggleButton
	let tb = mDom(dTop);
	let bExpand = await mKey('circle_chevron_down', tb, buttonStyles, { tag: 'button', onclick: coll.expandAll, key: 'expand' });
	let bCollapse = await mKey('circle_chevron_up', tb, buttonStyles, { tag: 'button', onclick: coll.collapseAll, key: 'collapse' });
	tb.onclick = ev => {
		let b = ev.target;
		let b1 = evToAttr(ev, 'key');
		if (b1 == 'expand') { mStyle(bExpand, { display: 'none' }); mStyle(bCollapse, { display: 'inline' }); }
		if (b1 == 'collapse') { mStyle(bCollapse, { display: 'none' }); mStyle(bExpand, { display: 'inline' }); }
		console.log(b, b1);
	}
	mStyle(bExpand, { display: 'none' });


}
async function test0_dropImage() {
	await loadAssetsStatic();
	globalKeyHandling();
	let blog = Z.blog = await loadStaticYaml('zdata/blog.yaml');
	let elems = mLayoutTLMRS('raspberry', 'dPage');
	let d = mDom('dMain');
	let dates = Object.keys(blog);
	dates.sort((a, b) => new Date(b) - new Date(a));
	for (const date of dates) {
		let o = blog[date];
		let d1 = mDom(d, { gap: 10, padding: 10 })
		mDom(d1, { fz: 20 }, { html: date });
		mDom(d1, { fz: 20 }, { html: o.title });
		let d2 = mDom(d1, { fz: 20, caret: 'white' }, { html: o.text, contenteditable: true });
		d2.setAttribute('contenteditable', true);//, onblur:"handleBlur(this)" 
		d2.onblur = ev => saveBlog(date, ev.target);
		d2.addEventListener("dragover", (event) => event.preventDefault()); // Allow dropping
		d2.addEventListener("drop", handleImageDrop);

		// Example usage
		//const dropZone = document.getElementById("dropZone");
		// Add drag-and-drop event listeners
		// dropZone.addEventListener("dragover", (ev) => ev.preventDefault()); // Allow dropping
		// dropZone.addEventListener("drop", handleImageDrop);
	}
}
async function test0_getYaml() {
	await loadAssetsStatic();
	globalKeyHandling();
	let blog = Z.blog = await loadStaticYaml('zdata/blog.yaml');
	console.log(blog);

	//list blogs by data (key)
	let elems = mLayoutTLMRS('raspberry', 'dPage');
	let d = mDom('dMain');
	let dates = Object.keys(blog);
	dates.sort((a, b) => new Date(b) - new Date(a));
	for (const date of dates) {
		//parse date
		let o = blog[date];
		let d1 = mDom(d, { gap: 10, padding: 10 })
		mDom(d1, { fz: 20 }, { html: date });
		mDom(d1, { fz: 20 }, { html: o.title });
		let d2 = mDom(d1, { fz: 20, caret: 'white' }, { html: o.text, contenteditable: true });
		d2.setAttribute('contenteditable', true);//, onblur:"handleBlur(this)" 
		d2.onblur = ev => saveBlog(date, ev.target);
		//d2.addEventListener('blur', () => { console.log('Editing completed! Current content:', this.innerHTML); });

		//usage drag drop
		// d2.setAttribute('draggable', true)
		// d2.ondragstart = ev => { ev.dataTransfer.setData('itemkey', key); }
		//enableDataDrop(d2, ondropSomething)

		// Example usage
		//const dropZone = document.getElementById("dropZone");
		// Add drag-and-drop event listeners
		d2.addEventListener("dragover", (event) => event.preventDefault()); // Allow dropping
		//d2.addEventListener("drop", logDroppedDataTypes);
		d2.addEventListener("drop", handleImageDrop);



		// // Example usage
		// const dropZone = document.getElementById("dropZone");
		// // Add drag-and-drop event listeners
		// dropZone.addEventListener("dragover", (event) => event.preventDefault()); // Allow dropping
		// dropZone.addEventListener("drop", handleImageDrop);

	}




	return;
	//let clist = paletteContrastVariety(['pink']); console.log(clist)
	d = mDom('dMain', { gap: 10, padding: 10 }); mFlexWrap(d)
	let src = '../assets/img/emo/abacus.png';
	for (const i of range(100)) {
		let d1 = mDom(d, {})
		let pal = await mPalette(d1, src, true, true); console.log(pal)
		//showPaletteMini(d,pal)
		src = rChoose(M.allImages).path;
	}
	//mPalette('dMain',src);
	//mPalette('dMain','beetle')
	//let ui = await uiTypePalette(d,'white', 'white','../assets/img/emo/abacus.png');


}
async function test0_mPalette() {
	await loadAssetsStatic();
	globalKeyHandling();
	//let clist = paletteContrastVariety(['pink']); console.log(clist)
	let elems = mLayoutTLMRS('white', 'dPage');
	let d = mDom('dMain', { gap: 10, padding: 10 }); mFlexWrap(d)
	let src = '../assets/img/emo/abacus.png';
	for (const i of range(100)) {
		let d1 = mDom(d, {})
		let pal = await mPalette(d1, src, true, true); console.log(pal)
		//showPaletteMini(d,pal)
		src = rChoose(M.allImages).path;
	}
	//mPalette('dMain',src);
	//mPalette('dMain','beetle')
	//let ui = await uiTypePalette(d,'white', 'white','../assets/img/emo/abacus.png');


}
async function test0_colorThief() {
	await loadAssetsStatic();
	globalKeyHandling();
	//let clist = paletteContrastVariety(['pink']); console.log(clist)
	let elems = mLayoutTLMRS('white', 'dPage');
	let d = mDom('dMain', { gap: 10, padding: 10 }); mFlexWrap(d)
	let src = '../assets/img/emo/abacus.png';
	for (const i of range(100)) {
		let d1 = mDom(d, { display: 'none', gap: 10, padding: 10 })
		let pal = await mPalette(d1, src, false); console.log(pal)
		showPaletteMini(d, pal)
		src = rChoose(M.allImages).path;
	}
	//mPalette('dMain',src);
	//mPalette('dMain','beetle')
	//let ui = await uiTypePalette(d,'white', 'white','../assets/img/emo/abacus.png');


}
async function test0_mShape() {
	await loadAssetsStatic();
	globalKeyHandling();
	let color = colorBucket('child'); //console.log(color);
	let elems = mLayoutM(color, 'dPage');
	let d = mDom('dMain', { gap: 10, padding: 10 }); //mCenterCenterFlex(d);
	let center = { x: 100, y: 100 };
	let sz = 100, shape = 'hexflat';
	//let o=rChoose(PolyClips); let [shape,clip] = [o.key,o.value];
	let clip = PolyClips[shape];// console.log(shape, clip);

	let c1 = colorFrom(rChoose(M.colorNames)); //rColor();
	let x = M.colorByHex[c1]; console.log(c1, x);
	let c2 = colorComplement(c1);
	let cmix = x.lighter(.5); //colorMix(c1,c2,50);

	//[c1, c2, cmix] = rColorNames(3); console.log(c1, c2, cmix)

	mStyle('dPage', { bg: cmix });
	let bg = colorGradient(`${c1},${c2}`); //'linear-gradient(90deg,#ff5733,#33ff57,#3357ff)';// colorGradient(); console.log(bg)
	//elem.style.backgroundColor = 'linear-gradient(90deg,#ff5733,#33ff57,#3357ff)';
	let d1 = mShape(shape, d, { sz, bg }, { center });
	mShape('circle', d, { bg: 'blue', sz: 20 }, { center });
	let pts = calcClipPoints(center.x, center.y, sz, sz, clip);
	center.x += 100;
	let d2 = mShape(shape, d, { sz, bg }, { center });
	mShape('circle', d, { bg: 'blue', sz: 20 }, { center }); //drawCircleOnDiv(d, center.x, center.y, 10);
	pts = pts.concat(calcClipPoints(center.x, center.y, sz, sz, clip));	//console.log(pts);
	for (const pt of pts) mShape('circle', d, { bg: 'blue', sz: 20 }, { center: pt }); //drawCircleOnDiv(d, pt.x, pt.y, 6);
}
async function test0_hex() {
	await loadAssetsStatic();
	globalKeyHandling();
	let elems = mLayoutTM('pink', 'dPage');
	let d = mDom('dMain', { gap: 10, padding: 10 });
	//mCenterCenterFlex(d);
	let p = { x: 100, y: 100 };
	let sz = 100;
	let [w, h] = mSizeSuccession({ sz });
	let dhex = hexFromCenter(d, p, { w, h, bg: rColor() });
	drawCircleOnDiv(d, p.x, p.y, 10);
	let clip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
	let pts = calcClipPoints(p.x, p.y, sz, sz, clip);
	console.log(pts);
	for (const pt of pts) drawCircleOnDiv(d, pt.x, pt.y, 2)

}
async function test0_mGather() {
	await loadAssetsStatic();
	globalKeyHandling();
	let elems = mLayoutTM('pink', 'dPage');
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	let styles = { h: 30 }, boxStyles = { bg: 'pink', padding: 4 }, stylesMain = dictMerge({ margin: 10 }, styles);
	let bGame = mDom(dTop, styles, { tag: 'button', menu: 'top', html: 'game' });
	bGame.onclick = async () => { let x = await mGather(mInput, bGame, boxStyles); console.log('you entered', x); }
	let bWatch = mDom(dTop, styles, { tag: 'button', menu: 'top', html: 'hallo' }); //mKey('watch', dTop, styles, { tag: 'button', menu: 'top' });
	bWatch.onclick = async () => { let x = await mGather(mYesNo, bWatch, boxStyles); console.log('you entered', x); }
	let bNew = mDom(elems[1], stylesMain, { tag: 'button', html: 'New' });//return;
	let list = ['violin', 'piano', 'prog', 'math', 'walk', 'violin', 'piano', 'prog', 'math', 'walk', 'violin', 'piano', 'prog', 'math', 'walk']
	bNew.onclick = async () => { let x = await mGather(mSelect, bNew, boxStyles, { list }); console.log('you entered', x); }
	let d3 = await mKey('watch', dMain, stylesMain, { tag: 'button', menu: 'top' });
	d3.onclick = async () => { let x = await mGather(mYesNo, d3, boxStyles); console.log('you entered', x); }
	d3.click();
}
async function test0_mAlign() {
	let d = mDom('dPage', { position: 'absolute', top: 10, left: 200, w: 500, h: 500, bg: 'green' }, { html: 'hallo' });//return;
	let d1 = mDom('dPage', { display: 'inline-block' });
	let d2 = mDom(d1, { display: 'flex', gap: 10, padding: 10 });
	let d3;
	for (const i of range(3)) { d3 = mDom(d2, { bg: rColor(), w: 50, h: 50 }); }
	mAlign(d1, d, { align: 'cl', ov: 1 });

	let d4 = mDom('dPage', { display: 'inline-block' });
	let d5 = mDom(d4, { padding: 4, bg: 'silver' }); //
	let d6 = mDom(d5, { className: 'button' }, { tag: 'input' }); d6.focus();
	mAlign(d4, d3, { align: 'bl' })
	//let x = await mGather({}, { align:'bl',anchor: d }); console.log('gather', x)
}
async function test0_saveEmo() {
	function createEmojiInput(dParent) {

		// Create the input element
		dParent = toElem(dParent);
		const input = mDom(dParent, {}, { tag: 'input' });

		// Set attributes to ensure emoji support
		input.type = "text"; // Default text input supports emoji
		input.placeholder = "Type emojis here 😊"; // Placeholder text
		input.style.fontSize = "1.2em"; // Increase font size for better visibility
		input.style.padding = "10px"; // Add some padding for comfort
		input.style.borderRadius = "5px"; // Rounded edges for aesthetics
		input.style.border = "1px solid #ccc"; // Subtle border styling

		// Append the input to the body or a specific container
		//document.body.appendChild(input);

		// Optionally, focus on the input when created
		input.focus();
		return input;
	}
	let elems = mLayoutTM('hotpink', dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	let inp = createEmojiInput('dMain');
	let button = mDom('dMain', {}, {
		html: 'CLICK!!!', onclick: async () => {
			let text = inp.value;
			let res = await mPhpPostLine(text + "\nType something 😊", 'zdata/test.txt');
			console.log('result', res);
		}
	})
	//let d=mDom('dMain',{},{tag:'input'});

}
async function test0_testFileio() {
	await loadAssetsStatic();
	let elems = mLayoutTM(rColor(), dPage);
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	let o = M.superdi['bee'];
	let path = 'hallo.txt'; //'../../zdata/f2.yaml';
	let d1 = mKey('write', dTop, {}, { onclick: async () => console.log(await mPhpPostFile(jsyaml.dump(o), path)), menu: 'top' });
	let d2 = mKey('read', dTop, {}, { onclick: async () => console.log(await mPhpGetFile(path)), menu: 'top' });
	let d3 = mKey('yaml', dTop, {}, { onclick: async () => console.log(await jsyaml.load(await mPhpGetFile(path))), menu: 'top' });
	let d4 = mKey('delete', dTop, {}, { onclick: async () => console.log(await mPhpDeleteFile(path)), menu: 'top' });
	let d5 = mKey('append', dTop, {}, { onclick: async () => console.log(await jsyaml.load(await mPhpPostLine('hallo du!', path))), menu: 'top' });
	let d6 = mKey('write2', dTop, {}, { onclick: async () => console.log(await mPhpPostFile("was???", path)), menu: 'top' });
}
async function test0_createStopwatch() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let elems = mLayoutTM(rColor(), dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	let d1 = mKey('watch', dTop, {}, { onclick: onclickStopwatch, menu: 'top' });
	let d2 = mKey('game', dTop, {}, { onclick: onclickResetActions, menu: 'top' });

	d1.click();
	//console.log(d1,d2)

	// let d=mDom(dMain,{fz:50,hpadding:10,rounding:10,margin:4,align:'center',hline:50,'user-select':'none',bg:'white',fg:'black'});
	// let x=createStopwatch(d);

}
async function test0_mToggleElem() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let elems = mLayoutTLMRS(rColor(), dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	mStyle(dTop, { paleft: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	mStyle(dLeft, { patop: 4, display: 'flex', dir: 'column', aitems: 'center', wbox: true, gap: 4 });
	let d = mDom(dTop, { h: 30, hpadding: 10, rounding: 10, margin: 4, align: 'center', hline: 30, 'user-select': 'none', bg: 'red', fg: 'white' });
	//mToggle1Elem(d,'bee',1,{html:'0'},{html:'1'},{html:'2'});
	let tAction = mToggleElem(d, 'state', { relax: 'green', work: 'red', sleep: 'blue' }, ['work', 'relax', 'work', 'sleep'], 0, registerAction);
}
async function test0_mKey() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	window.onkeydown = keyDownHandler;
	window.onkeyup = keyUpHandler;
	let di = getKeyLists();
	let elems = mLayoutTLMRS(rColor(), dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	mStyle(dTop, { paleft: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	mStyle(dLeft, { patop: 4, display: 'flex', dir: 'column', aitems: 'center', wbox: true, gap: 4 });
	for (const i of range(3)) {
		let type = rChoose(arrMinus(getKeyTypes(), ['plain'])); //console.log(type);
		let list = di[type];
		//let key = rChoose(list); //console.log('key',key);
		let elem = mKey(rChoose(list), dTop, { sz: 22 }, { prefer: type, onclick: true });
		onHoverMagnify(elem);
		elem = mKey(rChoose(list), dLeft, { sz: 22 }, { prefer: type, onclick: true });
		//let elem = mKey(key, d);
		//onHoverTooltip(elem, `${key} (${type})`)
	}
}
async function test0_mLayout() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let elems = mLayoutTLM(rColor(), dPage);
	for (const i of range(12)) elems = mLayoutTMS(rColor(), `dMain${i == 0 ? '' : i - 1}`, i);
	console.log(elems);
	elems.map(x => mStyle(x, { bg: rColor() }))
}
async function test0_mMenuV() {
	await loadAssetsStatic();
	mStyle(dPage, { w: '100%', h: '100%', bg: 'sienna' }); //page coloring
	let names = M.divNames = mAreas(dPage, ` 'dLogo dTop' 'dLeft dMain' `, '140px 1fr', 'auto 1fr');
	mShade(names); //area coloring

	let dHome = mHomeLogo(dLogo, 'airplane', onclickCalc, 'top'); //logo

	mMenuV(dLeft, 'CALC', {}, onclickCalc, 'left');
	mMenuV(dLeft, 'DAY', {}, onclickCalc, 'left');
	mMenuV(dLeft, 'EXAMPLE', {}, onclickCalc, 'left');

	mStyle(dTop, { display: 'flex', 'justify': 'center', aitems: 'center' });
	mMenuH(dTop, 'NEW', {}, onclickCalc, 'right');
	mMenuH(dTop, 'HALLO', {}, onclickCalc, 'right');
	let d = mMenuH(dTop, 'EXAMPLE', {}, onclickCalc, 'right');

	console.log(mBy('a', 'class').map(x => [x.innerHTML, x.getAttribute('menu'), x.getAttribute('kennzahl')].join(',')));
	d.click();
}
async function test0_mShade() {
	await loadAssetsStatic();
	mStyle(dPage, { w: '100%', h: '100%', bg: 'sienna' }); //page coloring
	let names = M.divNames = mAreas(dPage, ` 'dLeft dRight' `, '140px 1fr', '100%');
	mShade(names); //area coloring

	//let d=mBy('dRight'); console.log(d); mStyle(d, { w: '100%', h: '100%', bg: 'green' });return;

	function mMenuV(d, text, styles = {}, handler = null, menu = null, kennzahl = null) {
		if (nundef(kennzahl)) kennzahl = getUID();
		//addKeys({ className: 'a', hmargin: 8, vmargin: 2, deco: 'none', rounding: 10, hpadding: 9, vpadding: 3 }, styles)
		addKeys({ display: 'block', deco: 'none', className: 'a', rounding: 10, margin: 4, align: 'center' }, styles)
		let ui = mDom(d, styles, { tag: 'a', html: text, href: '#', onclick: handler, kennzahl, menu });
		return ui;
	}
	function mMenuH(d, text, styles = {}, handler = null, menu = null, kennzahl = null) {
		if (nundef(kennzahl)) kennzahl = getUID();
		//addKeys({ className: 'a', hmargin: 8, vmargin: 2, deco: 'none', rounding: 10, hpadding: 9, vpadding: 3 }, styles)
		addKeys({ deco: 'none', className: 'a', rounding: 10, wmin: 100, margin: 4, align: 'center' }, styles)
		let ui = mDom(d, styles, { tag: 'a', html: text, href: '#', onclick: handler, kennzahl, menu });
		return ui;
	}
	mMenuV(dLeft, 'CALC', {}, onclickConsole, 'left');
	mMenuV(dLeft, 'DAY', {}, onclickConsole, 'left');
	mMenuV(dLeft, 'EXAMPLE', {}, onclickConsole, 'left');

	//mStyle('dRight',{bg:'green'},{html:'hallo'})
	mDom('dRight', { display: 'flex' }, { id: 'dTop' });
	//mDom(dTop,{},{html:'hallo',id:'dTop1'});
	mMenuH(dTop, 'NEW', { w: 120 }, onclickConsole, 'right');
	mMenuH(dTop, 'HALLO', {}, onclickConsole, 'right');
	mMenuH(dTop, 'EXAMPLE', {}, onclickConsole, 'right');
}
async function test0_mAreas() {
	await loadAssetsStatic();
	let dPage = document.getElementById('dPage');
	mStyle(dPage, { w: '100%', h: '100%', bg: 'sienna' }); //page coloring
	let names = M.divNames = mAreas(dPage, ` 'dTop' 'dMain' 'dStatus' `, '1fr', 'auto 1fr auto');
	mShade(names); //area coloring
	mStyle('dMain', { padding: 4, overy: 'auto' })
	// mFlexV('dTop');
	//mStyle('dTop', { padding: 4, pabottom: 10 })
	mStyle('dTop', { padding: 4 })
	mStyle('dStatus', { padding: 4 }, { html: '&nbsp;' })
	// let dTop = mDom('dTop'); //top menu
	// let dCalc = mLinkMenu(dTop, 'CALC', {}, onclickCalc, 'top');
	// mLinkMenu(dTop, 'DAY', {}, onclickDay, 'top');
	// let dExample = mLinkMenu(dTop, 'EXAMPLE', {}, onclickExample, 'top');
	// mLinkMenu(dTop, 'GAME', {}, onclickGame, 'top');
	// mLinkMenu(dTop, 'ZONE', {}, onclickZone, 'top');
}
async function test0_assets() {
	await loadAssetsStatic();
}
async function test0_mSleep_p5() {
	function sketch1(p) {
		p.setup = () => {
			p.createCanvas(400, 400, mBy('canvas1'));
			p.background(222, 0, 0);
			console.log("...sketch1: p5.js setup called after onload!");
		};
		p.draw = () => {
			p.ellipse(p.mouseX, p.mouseY, 50, 50);
		};
	}
	await loadColors();
	await mSleep(2000);
	mClear('dPage');
	mDom('dPage', { position: 'absolute', left: 200, top: 10 }, { tag: 'canvas', id: 'canvas1' });
	console.log("Window loaded, initializing p5.js...");
	var sketch = new p5(sketch1); console.log(sketch)
}
async function test0_p5() {
	function sketch0(p) {
		p.setup = () => {
			p.createCanvas(400, 400);
			p.background(220);
			console.log("...sketch0: p5.js setup called after onload!");
		};
	}

	new p5(sketch0);
}

async function initBlog() {
	await loadAssetsStatic();
	globalKeyHandling();
	let blog = Z.blog = await loadStaticYaml('zdata/blog1.yaml');
	return blog;
}
async function initAssets() {
	//console.log(window.location.origin);
	let loc = window.location.origin;
	if (loc.includes('localhost:8080')) {
		let ditext = await fetch('http://localhost:8080/fastcomet/y/m.yaml').then(res => res.text());
		M = jsyaml.load(ditext);
	} else {
		await loadAssetsStatic();
	}
	//console.log(M)

	globalKeyHandling();
}











