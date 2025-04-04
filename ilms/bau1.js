
async function showTable(id) {
  let me = UGetName();
  let table = await mGetRoute('table', { id });  //console.log('table',table)
  if (!table) { showMessage('table deleted!'); return await showTables(); }
  DA.Interrupt = true;
  while (DA.LengthyProcessRunning === true) { await mSleep(100); }
  DA.Interrupt = false;
  let func = DA.funcs[table.game];
  T = table;
  clearMain(); mClassRemove('dExtra', 'p10hide');
  showTitleGame(table);
  if (func.hasInstruction) prepInstruction(table);
  let items = func.present(table);
  func.stats(table);
  if (table.status == 'over') { showGameover(table, 'dTitle'); return; }
  assertion(table.status == 'started', `showTable status ERROR ${table.status}`);
  await updateTestButtonsLogin(table.playerNames);
  func.activate(table, items);
}

async function showTables() {
  DA.pollFunc = 'showTables';
  await loadTables();
  let me = UGetName();
  let tables = dict2list(M.tables);
  tables.map(x => x.prior = x.status == 'open' ? 0 : x.turn.includes(me) ? 1 : x.playerNames.includes(me) ? 2 : 3);
  sortBy(tables, 'prior');
  let dParent = mBy('dTableList');
  if (isdef(dParent)) { mClear(dParent); }
  else {mClear('dMain');dParent = mDom('dMain', {}, { className: 'section', id: 'dTableList' });}
  if (isEmpty(tables)) { mText('no active game tables', dParent); return []; }
  tables.map(x => x.game_friendly = capitalize(MGetGameFriendly(x.game)));
  mText(`<h2>tables</h2>`, dParent, { maleft: 12 })
  let t = UI.tables = mDataTable(tables, dParent, null, ['friendly', 'game_friendly', 'playerNames'], 'tables', false);
  mTableCommandify(t.rowitems.filter(ri => ri.o.status != 'open'), {
    0: (item, val) => hFunc(val, 'onclickTable', item.o.id, item.id),
  });
  mTableStylify(t.rowitems.filter(ri => ri.o.status == 'open'), { 0: { fg: 'blue' }, });
  let d = iDiv(t);
  for (const ri of t.rowitems) {
    let r = iDiv(ri);
    let id = ri.o.id;
    if (ri.o.prior == 1) mDom(r, {}, { tag: 'td', html: getWaitingHtml(24) });
    if (ri.o.status == 'open') {
      let playerNames = ri.o.playerNames;
      if (playerNames.includes(me)) {
        if (ri.o.owner != me) {
          let h1 = hFunc('leave', 'onclickTableLeave', ri.o.id); let c = mAppend(r, mCreate('td')); c.innerHTML = h1;
        }
      } else {
        let h1 = hFunc('join', 'onclickTableJoin', ri.o.id); let c = mAppend(r, mCreate('td')); c.innerHTML = h1;
      }
    }
    if (ri.o.owner != me) continue;
    let h = hFunc('delete', 'onclickTableDelete', id); let c = mAppend(r, mCreate('td')); c.innerHTML = h;
    if (ri.o.status == 'open') { let h1 = hFunc('start', 'onclickTableStart', id); let c1 = mAppend(r, mCreate('td')); c1.innerHTML = h1; }
  }

  return tables;
}

