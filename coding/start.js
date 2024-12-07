onload = start;

async function start() { await test1(); }

async function test1(){
	let names = ["../coding/output.js"];
	let di = await codeDictForFiles(names);
	
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
	let res = await codeParseFile('../todo/closure.js');
	console.log('res', res);

}











