
function tablePresent(tData) {
  console.log('PRESENT!!!!');
  let title = fromNormalized(tData.friendly);
  mClear('dTopLeft');
  mDom('dTopLeft', { family: 'algerian', maleft: 10 }, { html: title });
  mClear('dMain')
  mDom('dMain', {}, { tag: 'pre', html: jsonToYaml(tData) });
}

