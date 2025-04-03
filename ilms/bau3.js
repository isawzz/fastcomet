
function tablePresent(t) {
  console.log('PRESENT!!!!');
  let title = fromNormalized(t.friendly);
  mClear('dTopLeft');
  mDom('dTopLeft', { family: 'algerian', maleft: 10 }, { html: title });
  mClear('dMain')
  mDom('dMain', {}, { tag: 'pre', html: jsonToYaml(t) });
}

