
async function tablePresent(tData) {
  let o = await tableGetDefault(null, tData);
  if (!o) { console.log('no table found!'); DA.state = 'no_table'; return; }
  console.log(o);

	let changes = deepCompare(DA.tData, o.tData);
  if (!changes) {console.log('not presenting!'); return;}

  let tid = o.tid;
  tData = o.tData;
  let title = fromNormalized(tid);
  mClear('dTopLeft');
  mDom('dTopLeft', { family: 'algerian', maleft: 10 }, { html: title });
  mClear('dMain')
  mDom('dMain', {}, { tag: 'pre', html: jsonToYaml(tData) });
}

