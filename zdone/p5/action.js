async function actionLoadAll() {
	let action = await mPhpGetFile('zdata/action.txt'); 
	DA.action = null;
	let actionLines = action.split('\n').filter(x => !isEmpty(x.trim()));
	let di = M.actions = { byKey: [], byDate: [], byHour: [], list: [] };
	for (const a of actionLines) {
		actionProcessLine(a, di);
	}
	return di;
}
async function actionSaveAll(){
	//entry fuer activity: a:from-to
	//entry fuer challenge!
	//entry fuer safety plan
	//soll saveactions automatisch archive machen?
	//soll ich ein file fuer today, ein file fuer each month und ein file fuer each year? und so weiter? haben?
	//was heisst archive?
	//was ist likely wieviele lines in 1 tag gemacht werden? 
	//ganz sicher nicht ueber 1000, eher so gegen 100?
	//essen soll gestored werden!!! koennte eines fuer fruit/veggie und eines fuer healthy meal und eines fuer junkfood und eines fuer binge haben
	//ultimately will ich es customizable haben!
	//wie kann ich ein punkt fuer: discipline haben?
	//wie kann ich eine entry fuer reflect & improve me
	//entry fuer coping strats und emergency
	//entry fuer goals
	//entry fuer journal
	//entry fuer gratitude
	//entry fuer social ia tips
	//was wenn man sich wuenscht dass die eigenen worte gezaehlt werden? kann man so eine entry machen?
	//entry fuer word counting
	//entry fuer mindfulness
	//entry fuer gratitude
	//entry fuer breathing / polyvagal states
	//entry fuer masking tips
	//entry fuer self care
	//entry fuer sleep
	//entry fuer water
	//entry fuer exercise
	//entry fuer meditation





}
function actionProcessLine(a, di) {
	let [key, rest] = a.split(':');
	let from = stringBefore(rest, '-');
	let to = stringAfter(rest, '-');
	if (isEmpty(to)) { DA.action = { a, key, from }; return; }
	[from, to] = [Number(from), Number(to)];
	let o = { key, from, to };
	addKeys(getDateTimeData(from, to), o);
	di.list.push(o);
	lookupAddToList(di.byKey,[key],o);
	lookupAddToList(di.byHour,[o.hour],o);
	lookupAddToList(di.byDate,[o.date],o);

}
