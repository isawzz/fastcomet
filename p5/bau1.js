
function mPickOneOfGrid(dParent, styles = {}, opts = {}) {
	let d0 = mDom(dParent, dictMerge(styles,{gap:6}), opts);
	mGrid(d0);

	function onclick(ev) {
		evNoBubble(ev);
		if (isdef(opts.fSuccess)) opts.fSuccess(ev.target.innerHTML);
	}
	for (const html of opts.list) {
		mDom(d0, {  }, { tag: 'button', html, onclick });
	}
	return d0;
}





