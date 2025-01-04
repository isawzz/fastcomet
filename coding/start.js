onload = start;

async function start() { return;project_p5(); }

async function project_p5(){
	codePacker('../p5',['codesmall','done','bau1','bau2','bau3','start'],['test1','test8']);
}
async function project_coding(){
	codePacker('../coding',['codesmall','done','bau1','bau2','start'],['codePacker']);
}
async function test2_p5(){
	let project='../p5';
	let names=['../codebig.js'];
	names = names.concat(['bau1','bau2','bau3','bau4','codebig', 'start'].map(x=>`${project}/${x}.js`));
	let di = await codeDictForFiles(names);
	console.log(di); 
	codeDictToText(di,'codebig.txt');
	return;
	// let keys = findFunctionClosure(di, ['loadAssetsStatic','loadColors','mBy','mClear','mDom','mKey','mPostPhp','mShade',"mStyle", 'test0']);
	let keys = findFunctionClosure(di, ['test1','test3']);
	console.log(keys);
	let sorted=Array.from(keys).sort();
	for(const k of sorted){
		di[k].code = `\n${di[k].code}`;
	}
	const closureCode = sorted.map((name) => di[name].code).join('\n');
	downloadAsText(closureCode,'codesmall.txt');

	//fs.writeFileSync(outputFile, closureCode, 'utf-8');

}
async function test2_coding(){
	let project='../coding';
	let names = ['codebig','bau1','bau2','done'];
	let funcs = ['codeBigSmall','mBy','mDom','mKey','mShade',"mStyle"];

	codeBigSmall(project,names,funcs);
}
async function test2_todo(){
	let project='../todo';
	let names=['../codebig.js'];
	names = names.concat(['bau1','bau2','bau3','bau4','done'].map(x=>`${project}/${x}.js`));
	let di = await codeDictForFiles(names);
	console.log(di);
	codeDictToText(di,'codebig.txt');
	let keys = findFunctionClosure(di, ['loadAssetsStatic','loadColors','mBy','mClear','mDom','mKey','mPostPhp','mShade',"mStyle"]);
	console.log(keys);
	const closureCode = Array.from(keys).sort().map((name) => di[name].code).join('\r\n');
	downloadAsText(closureCode,'codesmall.txt');

	//fs.writeFileSync(outputFile, closureCode, 'utf-8');

}
async function test1(){
	let project='../coding';
	let names = ['output','done','bau1','bau2'];
	let di = await codeDictForFiles(names.map(x=>`${project}/${x}.js`));
	console.log(di);
	codeDictToText(di,'output.txt');
	let keys = findFunctionClosure(di, ['mBy','mDom',"mStyle"]);
	console.log(keys);

	const closureCode = Array.from(keys).sort().map((name) => di[name].code).join('\r\n');
	downloadAsText(closureCode,'output1.txt');

	//fs.writeFileSync(outputFile, closureCode, 'utf-8');

}
async function test1_codeDictToText() {
	let names = ["../coding/output.js"];
	let di = await codeDictForFiles(names);
	console.log('di', di);
	let sortedKeys=codeDictToText(di);
}
async function test1_codeDictForFiles() {
	let names = ["../todo/closure.js", "../todo/bau1.js", "../todo/bau2.js", "../todo/bau3.js", "../todo/bau4.js"];
	let di = await codeDictForFiles(names);
	console.log('di', di);
	const sortedFunctionNames = Object.keys(di).sort();
	const result = sortedFunctionNames.map(name => di[name].code).join('\n');
	console.log(sortedFunctionNames)
	//	downloadAsText(result,'output.txt');
}
async function test0() {
	let res = await codeParseFile('../todo/codesmall.js');
	console.log('res', res);

}











