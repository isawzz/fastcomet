
function mLayout(dParent, rowlist, colt, rowt, styles = {}, opts = {}) {
	dParent = toElem(dParent);
	mStyle(dParent, styles);
	let areas = `'${rowlist.join("' '")}'`;
	if (dParent.id == 'dPage') M.divNames = [];
	let newNames = mAreas(dParent, areas, colt, rowt);
	let names = M.divNames = Array.from(new Set(M.divNames.concat(newNames)));
	if (opts.shadeAreas) mShade(newNames);
	return names.map(x => mBy(x));
}
function mLayoutLMR(dParent, styles={}, opts = {}) {
	addKeys({ suffix: '', wcol: 30, hrow: 30 }, opts);
	let rowlist = [`dLeft${suffix} dMain${suffix} dRight${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr minmax(${wcol}px, auto)`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutLR(dParent, styles={}, opts = {}) {
	let rowlist = [`dLeft${suffix} dRight${suffix}`];
	let colt = `auto 1fr`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutM(dParent, styles={}, opts = {}) {
	dParent = toElem(dParent);
	mStyle(dParent, styles);
	let innerStyles = { margin: 0, padding: 0, width: '100%', height: '100%' };
	let opts = { id: `dMain${suffix}` };
	if (dParent.id == 'dPage') M.divNames = [];
	lookupAddIfToList(M, ['divNames'], opts.id);
	let d = mDom(dParent, innerStyles, opts);
	return [d];
}
function mLayoutMR(dParent, styles={}, opts = {}) {
	let rowlist = [`dMain${suffix} dRight${suffix}`];
	let colt = `minmax(auto, ${wcol}px) 1fr`;
	let rowt = `1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLM(dParent, styles={}, opts = {}) {
	let rowlist = [`dTop${suffix} dTop${suffix}`, `dLeft${suffix} dMain${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr`;
	let rowt = `minmax(${hrow}px, auto) 1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLMR(dParent, styles={}, opts = {}) {
	let rowlist = [`dTop${suffix} dTop${suffix} dTop${suffix}`, `dLeft${suffix} dMain${suffix} dRight${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr minmax(${wcol}px, auto)`;
	let rowt = `minmax(${hrow}px, auto) 1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLMRS(dParent, styles={}, opts = {}) {
	let rowlist = [`dTop${suffix} dTop${suffix} dTop${suffix}`, `dLeft${suffix} dMain${suffix} dRight${suffix}`, `dStatus${suffix} dStatus${suffix} dStatus${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr minmax(${wcol}px, auto)`;
	let rowt = `minmax(${hrow}px, auto) 1fr minmax(${hrow}px, auto)`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTLMS(dParent, styles={}, opts = {}) {
	let rowlist = [`dTop${suffix} dTop${suffix}`, `dLeft${suffix} dMain${suffix}`, `dStatus${suffix} dStatus${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr`;
	let rowt = `minmax(${hrow}px, auto) 1fr minmax(${hrow}px, auto)`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTM(dParent, styles={}, opts = {}, hrow = 30) {
	let rowlist = [`dTop${suffix}`, `dMain${suffix}`];
	let colt = `1fr`;
	let rowt = `minmax(${hrow}px, auto) 1fr`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}
function mLayoutTMS(dParent, styles={}, opts = {}, hrow = 30) {
	let rowlist = [`dTop${suffix}`, `dMain${suffix}`, `dStatus${suffix}`];
	let colt = `1fr`;
	let rowt = `minmax(${hrow}px, auto) 1fr minmax(${hrow}px, auto)`;
	return mLayout(dParent, rowlist, colt, rowt, styles, opts);
}

