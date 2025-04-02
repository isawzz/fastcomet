
async function onPoll() {
	console.log('', DA.pollCounter++, 'polling', DA.state);
	switch (DA.state) {
		case 'play':
			let o = await tableGetDefault(null, tData);
			if (!o) { console.log('no table found!'); DA.state = 'no_table'; return; }
			//console.log(o);
			let changes = deepCompare(DA.tData, o.tData);
			if (!changes) { console.log('not presenting!'); return; }
			tablePresent(); break;
		case 'no_table': showMessage('No table present!');
		case 'pause':
		default: pollStop(); break;
	}
}

