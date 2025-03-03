function mLayout(dParent, rowlist, colt, rowt, styles = {}, opts = {}) {
	dParent = toElem(dParent);
	mStyle(dParent, styles);
	rowlist = rowlist.map(x => x.replaceAll('@',valf(opts.suffix,''))); //console.log(rowlist);
	rowt=rowt.replaceAll('@',valf(opts.hrow,30));
	colt=colt.replaceAll('@', valf(opts.wcol, 30));
	let areas = `'${rowlist.join("' '")}'`;
	if (dParent.id == 'dPage') M.divNames = [];
	let newNames = mAreas(dParent, areas, colt, rowt);
	let names = M.divNames = Array.from(new Set(M.divNames.concat(newNames)));
	if (nundef(styles.bgSrc)) mShade(newNames); 
	return names.map(x => mBy(x));
}
function mLayoutLMR(dParent, styles={}, opts = {}) {
	let rowlist = [`dLeft@ dMain@ dRight@`];
	let colt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutLR(dParent, styles={}, opts = {}) {
	let rowlist = [`dLeft@ dRight@`];
	let colt = `auto 1fr`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutM(dParent, styles={}, opts = {}) {
	let rowlist = [`dMain@`];
	let colt = `1fr`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutMR(dParent, styles={}, opts = {}) {
	let rowlist = [`dMain@ dRight@`];
	let colt = `minmax(auto, @px) 1fr`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLM(dParent, styles={}, opts = {}) {
	let rowlist = [`dTop@ dTop@`, `dLeft@ dMain@`];
	let colt = `minmax(@px, auto) 1fr`;
	let rowt = `minmax(@px, auto) 1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLMR(dParent, styles={}, opts = {}) {
	let rowlist = [`dTop@ dTop@ dTop@`, `dLeft@ dMain@ dRight@`];
	let colt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	let rowt = `minmax(@px, auto) 1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLMRS(dParent, styles={}, opts = {}) {
	let rowlist = [`dTop@ dTop@ dTop@`, `dLeft@ dMain@ dRight@`, `dStatus@ dStatus@ dStatus@`];
	let colt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	let rowt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLMS(dParent, styles={}, opts = {}) {
	let rowlist = [`dTop@ dTop@`, `dLeft@ dMain@`, `dStatus@ dStatus@`];
	let colt = `minmax(@px, auto) 1fr`;
	let rowt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTM(dParent, styles={}, opts = {}, hrow = 30) {
	let rowlist = [`dTop@`, `dMain@`];
	let colt = `1fr`;
	let rowt = `minmax(@px, auto) 1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTMS(dParent, styles={}, opts = {}, hrow = 30) {
	let rowlist = [`dTop@`, `dMain@`, `dStatus@`];
	let colt = `1fr`;
	let rowt = `minmax(@px, auto) 1fr minmax(@px, auto)`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}

