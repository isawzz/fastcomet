onload = start;

async function start() { await test0(); }

async function test0() {

	let res = await loadFunctionsFromFiles(['../coding/test.js']);
	console.log(res);
	
}