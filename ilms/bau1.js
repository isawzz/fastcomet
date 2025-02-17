
async function saveBlogList(ev) {
	let dpart = ev.target;
	let dparent = findAncestorWith(dpart, { attribute: 'key' });

	//check if content has changed
	//only save if content has changed!
	
	for (const ch of arrChildren(dparent)) {
	}
}

