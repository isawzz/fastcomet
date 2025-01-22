
function centerAt(elem, x, y) {
  const rect = elem.getBoundingClientRect();
  const offsetX = x - rect.width / 2;
  const offsetY = y - rect.height / 2;
  elem.style.position = 'absolute';
  elem.style.left = `${offsetX}px`;
  elem.style.top = `${offsetY}px`;
}
function getCenterRelativeToParent(div) {
  const rect = div.getBoundingClientRect();
  const parentRect = div.parentNode.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 - parentRect.left,
    y: rect.top + rect.height / 2 - parentRect.top
  };
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
	else if (isdef(opts.center)) centerAt(d, opts.center.x, opts.center.y);
	return d;
}






