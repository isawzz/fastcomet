
function findKeys(type) {
	let list = dict2list(M.superdi);
	return list.filter(x => isdef(x[type])).map(x => x.id);

}
function oneOfEachType(n = 1) {
	let types = ['fa', 'ga', 'fa6', 'img', 'text', 'photo'];
	let lists = types.map(x => [x, findKeys(x)]);
	console.log('lists', lists);

	//let res = recFlatten(lists.map(x=>rChoose(x,n))); console.log(res)
	return lists;
}
