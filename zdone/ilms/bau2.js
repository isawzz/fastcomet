
function button96() {
  function setup(table) {
    let fen = {};
    for (const name in table.players) {
      let pl = table.players[name];
      pl.score = 0;
    }
    fen.cards = [1, 2, 3];
    fen.deck = range(4, table.options.numCards);
    table.plorder = jsCopy(table.playerNames);
    table.turn = jsCopy(table.playerNames);
    return fen;
  }
  function stats(table) {
    let [me, players] = [UGetName(), table.players];
    let style = { patop: 8, mabottom: 20, wmin: 80, bg: 'beige', fg: 'contrast' };
    let player_stat_items = uiTypePlayerStats(table, me, 'dStats', 'rowflex', style)
    for (const plname in players) {
      let pl = players[plname];
      let item = player_stat_items[plname];
      if (pl.playmode == 'bot') { mStyle(item.img, { rounding: 0 }); }
      let d = iDiv(item); mCenterFlex(d); mLinebreak(d); mIfNotRelative(d);
      playerStatCount('star', pl.score, d); //, {}, {id:`stat_${plname}_score`});
    }
  }
  function present(table) {
    let fen = table.fen;
    mStyle('dTable', { padding: 25, w: 400, h: 400 });
    let d = mDom('dTable', { gap: 10, padding: 0 }); mCenterFlex(d);
    let items = [];
    for (const card of fen.cards) {
      let item = cNumber(card);
      mAppend(d, iDiv(item));
      items.push(item);
    }
    return items;
  }
  async function activate(table, items) {
    await showInstructionStandard(table, 'must click a card'); //browser tab and instruction if any
    if (!isMyTurn(table)) { return; }
    for (const item of items) {
      let d = iDiv(item);
      mStyle(d, { cursor: 'pointer' });
      d.onclick = ev => onclickCard(table, item, items);
    }
    if (isEmpty(table.fen.cards)) return gameoverScore(table);
    if (amIHuman(table) && table.options.gamemode == 'multi') return;
    let name = amIHuman(table) && table.options.gamemode == 'solo' ? someOtherPlayerName(table) : UGetName();
    if (nundef(name)) return;
    await botMove(name, table, items);
  }
  async function botMove(name, table, items) {
    let ms = rChoose(range(2000, 5000));
    TO.bot = setTimeout(async () => {
      let item = rChoose(items);
      toggleItemSelection(item);
      TO.bot1 = setTimeout(async () => await evalMove(name, table, item.key), 500);
    }, rNumber(ms, ms + 2000));
  }
  async function onclickCard(table, item, items) {
    toggleItemSelection(item);
    try { await mSleep(200); } catch (err) { return; }
    await evalMove(UGetName(), table, item.key);
  }
  async function evalMove(name, table, key) {
    clearEvents();
    mShield('dTable', { bg: 'transparent' });
    let id = table.id;
    let step = table.step;
    let best = arrMinMax(table.fen.cards).min;
    let succeed = key == best;
    if (succeed) {
      table.players[name].score += 1;
      let fen = table.fen;
      let newCards = deckDeal(fen.deck, 1);
      if (newCards.length > 0) arrReplace1(fen.cards, key, newCards[0]); else removeInPlace(fen.cards, key);
    } else {
      table.players[name].score -= 1;
    }
    lookupAddToList(table, ['moves'], { step, name, move: key, change: succeed ? '+1' : '-1', score: table.players[name].score });
    let o = { id, name, step, table };
    if (succeed) o.stepIfValid = step + 1;
    let res = await mPostRoute('table', o);
  }
  return { setup, present, stats, activate };
}

function fishgame() {
  function setup(table) { wsSetup(table); }
  function stats(table) { wsStats(table); }
  function present(table) { wsPresent(table); }
  async function activate(table, items) {
    await showInstructionStandard(table, 'may pick your initial cards'); //browser tab and instruction if any
    for (const item of items) {
      let d = iDiv(item);
      d.onclick = wsOnclickCard;
    }
    return;
    if (!isMyTurn(table)) { return; }
    for (const item of items) {
      let d = iDiv(item);
      mStyle(d, { cursor: 'pointer' });
      d.onclick = ev => onclickCard(table, item, items);
    }
    if (isEmpty(table.fen.cards)) return gameoverScore(table);
    if (amIHuman(table) && table.options.gamemode == 'multi') return;
    let name = amIHuman(table) && table.options.gamemode == 'solo' ? someOtherPlayerName(table) : UGetName();
    if (nundef(name)) return;
    await botMove(name, table, items);
  }
  async function botMove(name, table, items) {
    let ms = rChoose(range(2000, 5000));
    TO.bot = setTimeout(async () => {
      let item = rChoose(items);
      toggleItemSelection(item);
      TO.bot1 = setTimeout(async () => await evalMove(name, table, item.key), 500);
    }, rNumber(ms, ms + 2000));
  }
  async function onclickCard(table, item, items) {
    toggleItemSelection(item);
    try { await mSleep(200); } catch (err) { return; }
    await evalMove(UGetName(), table, item.key);
  }
  async function evalMove(name, table, key) {
    clearEvents();
    mShield('dTable', { bg: 'transparent' });
    let id = table.id;
    let step = table.step;
    let best = arrMinMax(table.fen.cards).min;
    let succeed = key == best;
    if (succeed) {
      table.players[name].score += 1;
      let fen = table.fen;
      let newCards = deckDeal(fen.deck, 1);
      if (newCards.length > 0) arrReplace1(fen.cards, key, newCards[0]); else removeInPlace(fen.cards, key);
    } else {
      table.players[name].score -= 1;
    }
    lookupAddToList(table, ['moves'], { step, name, move: key, change: succeed ? '+1' : '-1', score: table.players[name].score });
    let o = { id, name, step, table };
    if (succeed) o.stepIfValid = step + 1;
    let res = await mPostRoute('table', o);
  }
  return { setup, present, stats, activate };
}


