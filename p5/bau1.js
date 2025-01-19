
function colorGradient(sColors,type='linear',param=null){
	if (param && isNumber(param)) param+='deg';
	if (param) param=`${param},`; else param='';
	return `${type}-gradient(${param}${sColors})`;
}
function colorFromBucket(s){
	let di={black:'',blue:'',bluered:'bluemagenta',child:'childrenRoomColors',cyan:'',sky:'cyanblue',rich:'deepRichColors',green:'',greenblue:'greencyan',magenta:'',pink:'magentapink',modern:'modernColors',orange:'',orangered:'',orangeyellow:'',player:'playerColors',red:'',vibrant:'vibrantColors',yellow:'',lime:'yellowgreen'};
	let c=di[s];
	if (isEmpty(c)) c=s;
	return rChoose(Object.keys(dicolor[c]));

}
function mShape(shape, dParent, styles = {}, opts = {}) {
	styles = jsCopy(styles);
	styles.display = 'inline-block';
	let [w, h] = mSizeSuccession(styles, 100);
	//if (nundef(styles.bg)) styles.background = 'conic-gradient(green,red,blue,yellow,green)';
	addKeys({ w, h }, styles);
	let clip = PolyClips[shape];
	if (nundef(clip)) styles.round = true; else styles.clip = clip;
	let d = mDom(dParent, styles, opts);
	if (isdef(opts.pos)) { mPlace(d, opts.pos); }
	return d;
}






