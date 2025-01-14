
async function mKey(key, dParent, styles = {}, opts = {}) {
	let type = valf(opts.prefer, 'img');
	let o = M.superdi[key];
	if (nundef(o)) type = 'plain'; else if (type != 'plain' && nundef(o[type])) type = isdef(o.img) ? 'img' : isdef(o.photo) ? 'photo' : isdef(o.text) ? 'text' : isdef(o.fa6) ? 'fa6' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : 'plain';
	let d1, sz = valf(styles.sz, 40);
	if (opts.onclick) addKeys({ bg:'#00000080', rounding: 4,w:sz,h:sz, wbox: true, display: 'flex', aitems: 'center', justify: 'center' }, styles);
	else addKeys({ wbox: true, display: 'flex', aitems: 'center', justify: 'center', cursor: 'default' }, styles);
	addKeys({key},opts)
	let d = mDom(dParent, styles, opts);//mStyle(d,{bg:'red'})
	//if (opts.menu) d.setAttribute('menu', opts.menu);
	//if (typeof opts.onclick == 'function') d.onclick = opts.onclick;
	console.log(`${key}: ${type}`);

	if (type == 'img') { d1 = await mImgAsync(o[type], d, { sz },{},roundIfTransparentCorner); }
	else if (type == 'photo') { d1 = await mImgAsync(o[type], d, { margin: 3, rounding: 4, sz },{},roundIfTransparentCorner); }
	else if (type == 'plain') {
		mStyle(d, { w: 'auto', hpadding: 10 })
		d1 = mDom(d, { 'user-select': 'none' }, { html: key });
	} else {
		let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
		let html = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);
		sz -= 4;
		d1 = mDom(d, { family, fz: sz, hline: sz }, { html });
		let r = getRect(d1);
		let [w, h] = [r.w, r.h];
		let scale = Math.min(sz / w, sz / h);
		d1.style.transformOrigin = 'center center';
		d1.style.transform = `scale(${scale})`;
		d1.style.transform = `scale(${scale})`;
	}
	return d;
}
function roundIfTransparentCorner(img){
	let c=getPixTL(img);console.log(c);
	if (c.a != 0) {
		let r=getRect(img.parentNode); console.log(r);
		mStyle(img,{round:true,h:r.h-6,w:r.w-6});//styles.round = true;
		console.log('HHHHHHHHHHHHHHHHHHHHHHHH');
		//let x=mDom(d, {rounding:20, h:40, bg:'red'}, opts); return x;
	}

}

