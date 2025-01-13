
function mGather(d, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let [box, inp] = mInputInBox(d.parentNode, { padding: 4, bg: 'silver', rounding: 4 }, { fz: 24 });
		mAlign(box, d, { align: 'bl', offx: 20 });
		mOnEnterInput(inp, resolve);

	});
}







