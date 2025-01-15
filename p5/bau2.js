
function mGatherDropDown(d, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let dParent = mShield(document.body, {});
		let onEscape = _ => { dParent.remove(); resolve(null) };
		let onEnter = val => { dParent.remove(); resolve(val) };
		dParent.onclick = onEscape;

		let [box, inp] = mInputInBox(dParent, {}, {}, { onEnter, onEscape });
		let [box, inp] = [uiGadgetTypeSelect(dParent, opts.list, resolve),null];

		mAlign(box, d, { align: 'bl', offx: 20 });
		if (inp) inp.focus();
	});
}


