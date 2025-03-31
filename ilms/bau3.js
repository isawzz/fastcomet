
function MGet() { return lookup(M, [...arguments]); }
function MGetGame(gamename) { return M.config.games[gamename]; }
function MGetGameColor(gamename) { return MGetGame(gamename).color; }
function MGetGameFriendly(gamename) { return MGetGame(gamename).friendly; }
function MGetGameOptions(gamename) { return MGetGame(gamename).options; }
function MGetGamePlayerOptions(gamename) { return MGetGame(gamename).ploptions; }
function MGetGamePlayerOptionsAsDict(gamename) { return valf(MGetGamePlayerOptions(gamename), {}); }

function MGetTables(){return M.tables;}
function MGetUser(uname) { return M.users[uname]; }
function MGetUserColor(uname) { return MGetUser(uname).color; }
function MGetUserOptionsForGame(name, gamename) { return lookup(M.users, [name, 'games', gamename]); }

function MGetGamePlayerOptionsAsDict(gamename) { return valf(MGetGamePlayerOptions(gamename), {}); }

function MTGetGameProp(prop) { return MGetGame(T.game)[prop]; }

function TGetGameOption(prop) { return lookup(T, ['options', prop]); }

function UGetName() { return U.name; }
function UGetName() { return U.name; }



function mGrid(rows, cols, dParent, styles = {}, opts = {}) {
  [rows, cols] = [Math.ceil(rows), Math.ceil(cols)]
  addKeys({ display: 'inline-grid', gridCols: 'repeat(' + cols + ',1fr)' }, styles);
  if (rows) styles.gridRows = 'repeat(' + rows + ',auto)';
  else styles.overy = 'auto';
  let d = mDom(dParent, styles, opts);
  return d;
}
function mTable(dParent, headers, showheaders, styles = { mabottom: 0 }, className = 'table') {
  let d = mDiv(dParent);
  let t = mCreate('table');
  mAppend(d, t);
  if (isdef(className)) mClass(t, className);
  if (isdef(styles)) mStyle(t, styles);
  if (showheaders) {
    let code = `<tr>`;
    for (const h of headers) {
      code += `<th>${h}</th>`
    }
    code += `</tr>`;
    t.innerHTML = code;
  }
  return t;
}
function mTableCol(r, val) {
  let col = mCreate('td');
  mAppend(r, col);
  if (isdef(val)) col.innerHTML = val;
  return col;
}
function mTableCommandify(rowitems, di) {
  for (const item of rowitems) {
    for (const index in di) {
      let colitem = item.colitems[index];
      colitem.div.innerHTML = di[index](item, colitem.val);
    }
  }
}
function mTableRow(t, o, headers, id) {
  let elem = mCreate('tr');
  if (isdef(id)) elem.id = id;
  mAppend(t, elem);
  let colitems = [];
  for (const k of headers) {
    let val = isdef(o[k]) ? isDict(o[k]) ? JSON.stringify(o[k]) : isList(o[k]) ? o[k].join(', ') : o[k] : '';
    let col = mTableCol(elem, val);
    colitems.push({ div: col, key: k, val: val });
  }
  return { div: elem, colitems: colitems };
}
function mTableStylify(rowitems, di) {
  for (const item of rowitems) {
    for (const index in di) {
      let colitem = item.colitems[index];
      mStyle(colitem.div, di[index]);
    }
  }
}
function mText(text, dParent, styles, classes) {
  if (!isString(text)) text = text.toString();
  let d = mDom(dParent);
  if (!isEmpty(text)) { d.innerHTML = text; }
  if (isdef(styles)) mStyle(d, styles);
  if (isdef(classes)) mClass(d, classes);
  return d;
}
function mTextArea100(dParent, styles = {}) {
  mCenterCenterFlex(dParent)
  let html = `<textarea style="width:100%;height:100%;box-sizing:border-box" wrap="hard"></textarea>`;
  let t = mCreateFrom(html);
  mStyle(t, styles);
  mAppend(dParent, t);
  return t;
}
function mYaml(d, js) {
  d.innerHTML = '<pre>' + jsonToYaml(js) + '</pre>';
}

