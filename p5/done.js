
async function app0_stopwatch() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let di = await actionLoadAll(); //console.log(Serverdata);
	di.list.map(x => console.log(x.key, x.date, x.time, x.secs));
	//return;
	let elems = mLayoutTM(rColor(), dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	let d1 = mKey('watch', dTop, {}, { onclick: onclickStopwatch, menu: 'top' });
	let d2 = mKey('reset', dTop, {}, { onclick: onclickResetActions, menu: 'top' });
	let d3 = mKey('archive', dTop, {}, { onclick: onclickArchiveActions, menu: 'top' });
	let d4 = mKey('thinking_face', dTop, {}, { onclick: onclickAction, menu: 'main' });
	let d5 = mKey('sleeping_face', dTop, {}, { onclick: onclickAction, menu: 'main' });

	d1.click();
	//console.log(d1,d2)

	// let d=mDom(dMain,{fz:50,hpadding:10,rounding:10,margin:4,align:'center',hline:50,'user-select':'none',bg:'white',fg:'black'});
	// let x=createStopwatch(d);

}


