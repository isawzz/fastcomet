
function tablePresent(tData) {
  let tid = o.tid;
  tData = o.tData;
  let title = fromNormalized(tid);
  mClear('dTopLeft');
  mDom('dTopLeft', { family: 'algerian', maleft: 10 }, { html: title });
  mClear('dMain')
  mDom('dMain', {}, { tag: 'pre', html: jsonToYaml(tData) });
}

