
async function mPostPhp(cmd, o, jsonResult = true) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	if (isdef(o.path) && (o.path.startsWith('zdata') || o.path.startsWith('y'))) o.path = '../../' + o.path;
	let res = await fetch(server + `p5/php/${cmd}.php`,
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
			console.log('!!!asking for plain text!!!');
			return text;
		}
		let obj = JSON.parse(text);
		return obj;
		//return res.ok? await res.json(): res; //jsonResult ? await res.json() : await res.text() : res;
	} catch (e) {
		return isString(text) ? text : e;
	}
}
async function mPhpGetFile(path) { return await mPostPhp('read_file', { path }, false); }
async function mPhpPostFile(text, path) { return await mPostPhp('write_file', { text, path }, false); }
async function mPhpPostLine(line, path) { return await mPostPhp('append_action', { line, path }, false); }
async function mPhpPostText(text, path) { return await mPostPhp('append_text', { text, path }, false); }
async function deleteFile(path) { return await mPostPhp('delete_file', { path }); }
async function onclickResetActions(ev) {
	let elem = hToggleClassMenu(ev);
	let res = await deleteFile('zdata/action.txt'); //relative path
	clearTimeouts(); mClear('dMain');
	console.log(res);
}
async function onclickArchiveActions(ev) {
	let elem = hToggleClassMenu(ev);
	let path = 'zdata/action.txt';
	let text= await mPhpGetFile(path); console.log(text)
	let res= await mPhpPostText(text, 'zdata/archive_action.txt'); 
	await deleteFile(path); //relative path
	clearTimeouts(); mClear('dMain');
	console.log(res);
}
async function onclickAction(ev) {
	let elem = hToggleClassMenu(ev);
	let html = getInnermostTextString(elem); //console.log(elem)
	let words = toWords(html); //console.log(words)
	let key = words[0];
	let nlist = allNumbers(html); //console.log(nlist)

	//start the stopwatch by clicking on it
	let w = DA.stopwatch;

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
function onclickWatch(ev) {
	let elem = hToggleClassMenu(ev);
	clearTimeouts(); mClear('dMain');
	//jetzt soll er eine stopwatch machen
	let d0 = mDom(dMain);
	let styles = { fz: 50, hpadding: 10, rounding: 10, margin: 10, align: 'center', hline: 50, 'user-select': 'none' };
	let d = mDom(d0, styles);
	DA.stopwatch = createStopwatch(d);
	let r = getRect(DA.stopwatch.elem); let left = r.w / 2 - 110;

	copyKeys({ h: 50, fz: 40 }, styles)
	let d1 = mKey('prog 1+', d0, styles, { onclick: onclickAction, menu: 'main' });
	let d2 = mKey('move 1+', d0, styles, { onclick: onclickAction, menu: 'main' });
	let d3 = mKey('piano 1+', d0, styles, { onclick: onclickAction, menu: 'main' });
	let d4 = mKey('violin 1+', d0, styles, { onclick: onclickAction, menu: 'main' });
	let d5 = mKey('math 1+', d0, styles, { onclick: onclickAction, menu: 'main' });
	let d6 = mKey('hut 1+', d0, styles, { onclick: onclickAction, menu: 'main' });
	let d7 = mKey('agfa 1+', d0, styles, { onclick: onclickAction, menu: 'main' });
	let d8 = mKey('hprog 1+', d0, styles, { onclick: onclickAction, menu: 'main' });
	let dBlinker = mDom(d0, { position: 'absolute', top: 0, left, w: 20, h: 20, rounding: 10 }, { id: 'dBlinker' });

	//d1.click();
	//drunter eine liste von activities, jede davon mit time sofar,wieviele times
	//die current activity soll haben: started
}




function getInnermostTextString(div) {
	if (!div || !div.children.length) {
		return div && div.innerHTML.trim() && !/<[^>]+>/.test(div.innerHTML) ? div.innerHTML.trim() : null;
	}
	for (let child of div.children) {
		let result = getInnermostTextString(child);
		if (result) return result;
	}
	return null;
}
function getNow() { return Date.now(); }



function isToggleState(key, nword) {
	let toggle = DA.toggle[key];
	return toggle.state == n || toggle.seq[toggle.state] == nword;
}
function mToggle(ev) {
	let key = ev.target.getAttribute('data-toggle');
	let t = DA.toggle[key];
	let prev = t.state;
	t.state = (t.state + 1) % t.seq.length;
	let html = t.seq[t.state];
	mStyle(t.elem, { bg: t.states[html] }, { html });
	if (isdef(t.handler)) t.handler(key, prev, t.state);
}
function mToggleElem(elem, key, states, seq, i, handler) {
	//states is a dictionary attributing a color to each state word
	//seq is a list of states how they change when toggle is triggered
	//i is index in seq that should be the initial state
	if (nundef(DA.toggle)) DA.toggle = {};

	let t = DA.toggle[key] = { handler, key, elem, state: i, states, seq };

	elem.setAttribute('data-toggle', key);
	mStyle(elem, { cursor: 'pointer' });
	let html = seq[i];
	mStyle(elem, { bg: states[html] }, { html });
	elem.onclick = mToggle;
	return t;
}





