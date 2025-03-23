
async function loadStaticYaml(path) {
	let sessionType = detectSessionType(); 
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : sessionType == 'php'? 'http://localhost:8080/fastcomet/':'../';
	//console.log(sessionType,server,path)
	let ditext = await fetch(server + path).then(res => res.text());
	return jsyaml.load(ditext);
}
async function mPostPhp(cmd, o, projectName = 'ilms', verbose = true, jsonResult = true) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	if (isdef(o.path) && (o.path.startsWith('zdata') || o.path.startsWith('y'))) o.path = '../../' + o.path;
	if (verbose) console.log('to php:', server + `${projectName}/php/${cmd}.php`, o);
	let res = await fetch(server + `${projectName}/php/${cmd}.php`,
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
			return text;
		}
		let obj = JSON.parse(text);
		if (verbose) console.log('from php:\n', obj);
		let mkeys = ["config","superdi","users","details"]; 
		for(const k of mkeys){
			if (isdef(obj[k])) {
				M[k] = obj[k];
				if (k == "superdi") {
					loadSuperdiAssets();
				}else if (k == "users") {
					loadUsers();
				}
			}
		}
		return obj;
	} catch (e) {
		return isString(text) ? text : e;
	}
}

