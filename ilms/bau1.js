
async function deleteAllTables(){
	await mPhpGet('delete_dir',{dir:'tables'});
	DA.tid = null;
	DA.tData = null;
	localStorage.removeItem('tid');
	M.tables = [];
	mClear('dMain');
	mClear('dTopLeft');
	console.log('all tables deleted!');
}
async function presentTable(tData){
	tData = valf(tData,DA.tData,isdef(DA.tid)?await loadTable(DA.tid):null);
	//console.log(tData); return;
	if (nundef(tData)) {console.log('no table found!'); return;}
	let title= fromNormalized(tData.id);
	mClear('dTopLeft');
	mDom('dTopLeft',{family:'algerian',maleft:10},{html:title});
	mClear('dMain')
	mDom('dMain',{},{tag:'pre',html:jsonToYaml(tData)});
}
function jsonToYaml(o) { let y = jsyaml.dump(o); return y; }
