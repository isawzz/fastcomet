
function onclickConsole(ev) { console.log(ev.target); }
async function onclickAction(ev) {

	assertion(isdef(DA.stopwatch),'NO STOPWATCH!!!!!!!!!!!!!!!')
	let [prevElem, elem] = hToggleClassMenu(ev);
	let prevKey = prevElem ? prevElem.getAttribute('key') : null;
	let key = elem.getAttribute('key'); console.log('keys', prevKey, key);

	let a = DA.action;
	let w = DA.stopwatch;
	if (!a){
		//lines in action are complete
		//start timing of new action
		DA.action = { key, elem, prevElem, prevKey, status: 'started' };
	}
	return;
	if (nundef(a)) {
		DA.action = { key, elem, prevElem, prevKey, status: 'started' };
		//send start time to server
		let s = `${key}:${getNow()}`;
		let res = await mPhpPostText(s, 'zdata/action.txt'); //,{ text:`${getNow()}: ${w.key}, ${secs}`,time:getNow(),key:w.key,secs });
		console.log(res);
	} else if (a.key == key && a.status == 'started') {
		a.status = 'paused';
		a.prevElem = elem;
		a.prevKey = key;
		let s = `-${getNow()}\n`;
		let res = await mPhpPostText(s, 'zdata/action.txt'); //,{ text:`${getNow()}: ${w.key}, ${secs}`,time:getNow(),key:w.key,secs });
		console.log(res);
	} else if (a.key == key && a.status == 'paused') {
		let s = `${key}:${getNow()}`;
		let res = await mPhpPostText(s, 'zdata/action.txt'); //,{ text:`${getNow()}: ${w.key}, ${secs}`,time:getNow(),key:w.key,secs });
		console.log(res);
		a.status = 'started';
		a.prevElem = elem;
		a.prevKey = key;

	}


	return;
	let html = getInnermostTextString(elem); //console.log(elem)
	let words = toWords(html); //console.log(words)
	key = words[0];
	let nlist = allNumbers(html); //console.log(nlist)

	//start the stopwatch by clicking on it

	console.log(key, w.key);
	let isActive = key == w.key;
	let r = getRect(elem); let top = r.t + 15;
	mStyle('dBlinker', { top })

	if (isActive) {
		if (w.getStatus()) {
			w.stop();
			mClassRemove('dBlinker', 'blink_green');
			mClass('dBlinker', 'blink_orange');
		} else {
			w.start();
			mClassRemove('dBlinker', 'blink_orange');
			mClass('dBlinker', 'blink_green');
		}
		return;
	}
	if (w.key) {
		w.stop();
		let secs = w.getElapsed();
		let s = `${getNow()}: ${w.key}, ${secs}`;
		let res = await mPhpPostLine(s, '../../zdata/action.txt'); //,{ text:`${getNow()}: ${w.key}, ${secs}`,time:getNow(),key:w.key,secs });
		console.log(res);
		w.reset();
	}
	w.key = key;
	w.start();
	mClassRemove('dBlinker', 'blink_orange');
	mClass('dBlinker', 'blink_green');


}

async function onclickResetActions(ev) { 
  let res = await mPhpDeleteFile('zdata/action.txt'); //console.log(res); 
  await actionLoadAll(); console.log(M.actions)
}
function onclickStopwatch(ev) {

  let [prevElem, elem] = hToggleClassMenu(ev);
  if (prevElem == elem) return;

  p5ClearAll();
  let d0 = mDom(dMain);
  let styles = { fz: 50, hpadding: 10, rounding: 10, wmax: 260, margin: 10, align: 'center', hline: 50, 'user-select': 'none' };
  let d = mDom(d0, styles);
  DA.stopwatch = createStopwatch(d);
  let r = getRect(DA.stopwatch.elem); let left = r.w / 2 - 110;
  let dBlinker = mDom(d0, { position: 'absolute', top: 0, left, w: 20, h: 20, rounding: 10 }, { id: 'dBlinker' });

  copyKeys({ h: 50, fz: 40 }, styles);
	let a=DA.action;
	for(const action of ['prog','violin','move','piano','math','hut','agfa','hprog']){
		let d1 = mKey(action, d0, styles, { prefer: 'plain', onclick: onclickAction, menu: 'main' });
		if (a && a.key == key) { 
			if (isdef(a.from)){
				let from = new Date(DA.from);
			}
			DA.action={elem:d1,key:action,status:'started'};  
		}
	}
}


async function cleanupOldActionIfAny(ev) {
	let w = DA.stopwatch; if (!w) return;
	let secs = w.getElapsed();

	if (w.key && secs > 0) {
		w.stop();
		let s = `${getNow()}: ${w.key}, ${secs}`;
		let res = await mPhpPostLine(s, '../../zdata/action.txt'); //console.log(res);
		w.reset();
		elem = findAncestorWith(ev.target, { attribute: 'key' });
		console.log(elem);
	}

}

async function onclickThinking(ev) {
	let w = DA.stopwatch;
	let key = 'thinking_face';
	if (isdef(w)) {
		if (w.key == key) { return; }
		else if (w.key == 'sleeping') { key = 'sleeping'; }
	}
	console.log(key, w.key);
	let isActive = key == w.key;

	console.log(res);
}
async function onclickSleeping(ev) {
	let elem = hToggleClassMenu(ev);
	let res = await mPhpDeleteFile('zdata/action.txt'); //relative path
	clearTimeouts(); mClear('dMain'); DA.stopwatch = null;
	console.log(res);
}
async function onclickArchiveActions(ev) {
	let elem = hToggleClassMenu(ev);
	let path = 'zdata/action.txt';
	let text = await mPhpGetFile(path); console.log(text)
	let res = await mPhpPostText(text, 'zdata/archive_action.txt');
	await mPhpDeleteFile(path); //relative path
	clearTimeouts(); mClear('dMain');
	console.log(res);
}
