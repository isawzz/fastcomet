
async function loadStaticYaml(path) {
	let sessionType = detectSessionType();	//console.log(sessionType);
	let server = sessionType == 'fastcomet'? 'https://moxito.online/':'../';
	let ditext=await fetch(server + path).then(res => res.text());
	return jsyaml.load(ditext);
}






