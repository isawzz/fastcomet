
async function ondropImage(src, sisi) {
  let sz = 400;
  let dPopup = mDom(document.body, { position: 'fixed', top: 40, left: 0, wmin: sz, hmin: sz, bg: 'pink' });
  let dParent = mDom(dPopup);
  let d = mDom(dParent, { w: sz, h: sz, border: 'dimgray', margin: 10 });
  let canvas = createPanZoomCanvas(d, src, sz, sz);
  let instr = mDom(dPopup, { align: 'center', mabot: 10 }, { html: `- panzoom image to your liking -` })
  let dinp = mDom(dPopup, { padding: 10, align: 'right', display: 'inline-block' })
  mDom(dinp, { display: 'inline-block' }, { html: 'Name: ' });
  let inpFriendly = mDom(dinp, { outline: 'none', w: 200 }, { className: 'input', name: 'friendly', tag: 'input', type: 'text', placeholder: `<enter name>` });
  let defaultName = '';
  let iDefault = 1;
  let k = sisi.masterKeys.find(x => x == `${sisi.name}${iDefault}`);
  while (isdef(k)) { iDefault++; k = sisi.masterKeys.find(x => x == `${sisi.name}${iDefault}`); }
  defaultName = `${sisi.name}${iDefault}`;
  inpFriendly.value = defaultName;
  mDom(dinp, { h: 1 });
  mDom(dinp, { display: 'inline-block' }, { html: 'Categories: ' })
  let inpCats = mDom(dinp, { outline: 'none', w: 200 }, { className: 'input', name: 'cats', tag: 'input', type: 'text', placeholder: `<enter categories>` });
  let db2 = mDom(dPopup, { padding: 10, display: 'flex', gap: 10, 'justify-content': 'end' });
  mButton('Cancel', () => dPopup.remove(), db2, { w: 70 }, 'input');
  mButton('Save', () => simpleFinishEditing(canvas, dPopup, inpFriendly, inpCats, sisi), db2, { w: 70 }, 'input');
}






