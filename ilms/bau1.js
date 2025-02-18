
async function blogSave(ev) {
	let dpart = ev.target;
	let dparent = findAncestorWith(dpart, { attribute: 'key' });

	//check if content has changed
	//only save if content has changed!
	
	for (const ch of arrChildren(dparent)) {
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

