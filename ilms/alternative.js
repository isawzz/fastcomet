
async function onclickGameMenuItem(ev) {
	let gamename = evToAttr(ev, 'gamename');
	//hier sollte noch was fuer die options kommen, but for now, just create the game to join
	await tableCreate(U.name, { game: gamename, players: [], status: 'join' });
}
async function showTables(files) {
	mClear('dMain');
	let d = mDom('dMain'); mCenterCenterFlex(d); mFlexWrap(d);
	for (const f of files) {
		let t = await loadStaticYaml(`y/tables/${f}.yaml`); console.log(t)
		showYaml(t, fromNormalized(f), d, { bg: 'black', fg: 'white', rounding: 10, padding: 10, margin: 10, w: '30%' });
		//mDom('dMain',{},{tag:'pre',html:mYaml(t)});

	}
}
function showYaml(o, title, dParent, styles = {}, opts = {}) {
	o = toFlatObject(o);
	//addKeys({rounding: 8, padding: 4, w:200, h:70}, styles);
	mLinebreak(dParent);
	let keys = Object.keys(o);
	let grid = mGrid(keys.length, 2, dParent, styles, { wcols: 'auto' });
	mDom(grid, { 'grid-column': 'span 2', align: 'center', weight: 'bold' }, { html: title });
	//mDom(grid, {}, { html: '&nbsp;' });
	//let cellStyles = { hpadding: 4 };
	console.log('type', typeof o);
	if (isList(o)) {
		arrSort(o);
		o.map((x, i) => { mDom(grid, { fg: 'red', align: 'right' }, { html: i }); mDom(grid, { maleft: 10 }, { html: x }); });
	} else if (isDict(o)) {
		keys.sort();
		for (const k of keys) {
			mDom(grid, { fg: 'red', align: 'right' }, { html: k })
			mDom(grid, { maleft: 10 }, { html: o[k] });
		}
	}
	return dParent;
}


