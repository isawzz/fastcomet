
async function loadStaticYaml(path) {
	let sessionType = detectSessionType();	//console.log(sessionType);
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : '../';
	let ditext = await fetch(server + path).then(res => res.text());
	return jsyaml.load(ditext);
}
async function loadAssetsStatic() {
	if (nundef(M)) M = {};
	M = await loadStaticYaml('y/m.yaml');
	M.superdi = await loadStaticYaml('y/superdi.yaml');
	M.details = await loadStaticYaml('y/details.yaml');
	M.config = await loadStaticYaml('y/config.yaml');
	loadColors();
	M.users = {};
	for (const uname of M.config.users) {
		M.users[uname] = await loadStaticYaml(`y/users/${uname}.yaml`);
	}
	let [di, byColl, byFriendly, byCat, allImages] = [M.superdi, {}, {}, {}, {}];
	for (const k in di) {
		let o = di[k];
		for (const cat of o.cats) lookupAddIfToList(byCat, [cat], k);
		for (const coll of o.colls) lookupAddIfToList(byColl, [coll], k);
		lookupAddIfToList(byFriendly, [o.friendly], k)
		if (isdef(o.img)) {
			let fname = stringAfterLast(o.img, '/')
			allImages[fname] = { fname, path: o.img, k };
		}
	}
	M.allImages = allImages;
	M.byCat = byCat;
	M.byCollection = byColl;
	M.byFriendly = byFriendly;
	M.categories = Object.keys(byCat); M.categories.sort();
	M.collections = Object.keys(byColl); M.collections.sort();
	M.names = Object.keys(byFriendly); M.names.sort();
	[M.colorList, M.colorByHex, M.colorByName] = getListAndDictsForDicolors();
}
async function mPostPhp(o, path) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';

	let res = await fetch(server + 'todo/php/echowritepost.php',
		{
			method: 'POST',
			//mode: 'no-cors', // DOES NOT WORK ON FASTCOMET!!!!!!!!!!!!!!!!!! need to set access headers in php script!
			
			headers: { 'Content-Type': 'application/json' }, 
			body: JSON.stringify({ filePath: 'output.txt', text: 'Hello, world!', }),

			//headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			//body: new URLSearchParams({ text: jsyaml.dump(o), path })
		}
	);

	if (res.ok) {
		const data = await res.text();
		try {
			return JSON.parse(data);
		} catch (e) {
			return data;
		}
	} else {
		return res;
	}

}






