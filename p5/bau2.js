
function valfKey(o, arr) {
  for (const w of arr) { if (isdef(o[w])) return w; }
  return null;
}
function valfKeyVal(key) {
  let o = M.superdi[key];
  let di = { text: 'emoNoto', fa6: 'fa6', fa: 'pictoFa', ga: 'pictoGame' };
  let k1 = valfKey(o, Object.keys(di));
  if (k1) return { html: String.fromCharCode('0x' + o[k1]), family: di[k1] }
  return null;
}


