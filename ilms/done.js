
async function tableCreate(player, tData) {
	if (nundef(player)) player = U.name;
	if (nundef(tData)) tData = { players: ['felix', 'amanda'] };
	let tid = generateTableName(tData.players.length, M.tables);
	tData.id = tid;
	let res = await mPhpPost('game_user', { action: 'create', tid, tData });
	if (res.tid) {
		console.log("Game Creation:", res.tid);
		return await tableGetDefault(res.tid);
	} else {
		console.log("Game Creation failed");
		return null;
	}
}
async function tablesDeleteAll() {
	await mPhpGet('delete_dir', { dir: 'tables' });
	DA.tid = null;
	DA.tData = null;
	localStorage.removeItem('tid');
	M.tables = [];
	mClear('dMain');
	mClear('dTopLeft');
	console.log('all tables deleted!');
}
async function tablesList() {
	let files = await mPhpGetFiles('tables'); //console.log('files', files); return;
	await showTables(files.map(x => x.split('.')[0])); return;
	DA.tid = null;
	DA.tData = null;
	localStorage.removeItem('tid');
	M.tables = [];
	mClear('dMain');
	mClear('dTopLeft');
	console.log('all tables deleted!');
}
async function tableLoad(tid) {
	let o = await tableGetDefault(tid);
	if (!o) { console.log('no table found!'); return; }
	tid = o.tid;
	let tData = o.tData;
	console.log('table loaded', tData);
	localStorage.setItem('tid', tid);
	addIf(M.tables, tid);
	return tData;
}
async function tablePresent(tData) {
	let o = await tableGetDefault(null, tData);
	if (!o) { console.log('no table found!'); return; }
	console.log(o)
	let tid = o.tid;
	tData = o.tData;
	let title = fromNormalized(tid);
	mClear('dTopLeft');
	mDom('dTopLeft', { family: 'algerian', maleft: 10 }, { html: title });
	mClear('dMain')
	mDom('dMain', {}, { tag: 'pre', html: jsonToYaml(tData) });
}
async function tableGetDefault(tid = null, tData = null) {
	if (nundef(tid)) tid = valf(DA.tid, localStorage.getItem('tid'), arrLast(M.tables));
	if (nundef(tid)) return null;
	if (nundef(tData)) { tData = valf(DA.tData, await loadStaticYaml(`y/tables/${tid}.yaml`)); }
	[DA.tid, DA.tData] = [tid, tData];
	return tData ? { tid, tData } : null;
}
