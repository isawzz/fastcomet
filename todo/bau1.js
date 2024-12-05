
async function onclickHome(ev) {
  let names = hPrepUi(ev, ` 'dSide dTable' `, 'auto 1fr', '1fr', 'skyblue');
  mShadeLight(names)
  mRemoveClass(ev.target, 'active'); //just set other top menu buttons inactive!
	let d=mBy('dSide');
	for(const name in {new:onclickNew,archive:onclickArchive}){
		mDom(d,{},{tag:'button',html:name})
	}
}
async function onclickNew(ev){
	let a=mBy('dTable');
	let b=mDom(a,{},{});
	mFlex(b);
	let c=mDom(b,{},{})
	//create a new item on a line with editable div, button start/pause that starts/pauses the timer, editable div:minutes, button done

}
async function onclickArchive(ev){

}







