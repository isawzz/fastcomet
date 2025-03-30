
async function onchangeAutoSwitch(){
  if (DA.autoSwitch === true){
    DA.autoSwitch = false
  } else {
    DA.autoSwitch = true
  }
}
async function onchangeBotSwitch(ev) {
  let elem = ev.target;
  assertion(T, "NO TABLE!!!!!!!!!!!!!!!")
  let name = getUname();
  let id = T.id;
  let playmode = (elem.checked) ? 'bot' : 'human';
  let olist = [{ keys: ['players', name, 'playmode'], val: playmode }];
  let res = await mPostRoute(`olist`, { id, name, olist }); //console.log(res)
}
async function onclickAddSelected() {
  let keys = UI.selectedImages;
  let cmd = UI.commands.addSelected;
  let collist = M.collections.filter(x => !simpleLocked(x)).map(x => ({ name: x, value: false }));
  let result = await mGather(iDiv(cmd), {}, { content: collist, type: 'checkList' });
  if (!result || isEmpty(result)) { console.log('nothing added'); simpleClearSelections(); return; }
  assertion(isList(result), 'uiCadgetTypeChecklist result is NOT a list!!!')
  let di = {}, changed = false;
  for (const key of keys) {
    let o = M.superdi[key];
    for (const collname of result) {
      if (o.colls.includes(collname)) continue;
      changed = true;
      o.colls.push(collname);
      di[key] = o;
    }
  }
  if (!changed) { console.log('nothing added'); simpleClearSelections(); return; }
  console.log('items changed:', Object.keys(di));
  await updateSuperdi(di);
  simpleInit();
}
function onclickClear(inp, grid) {
  inp.value = '';
  let checklist = Array.from(grid.querySelectorAll('input[type="checkbox"]'));
  checklist.map(x => x.checked = false);
  sortCheckboxes(grid);
}
async function onclickClearPlayers() {
  let me = getUname();
  DA.playerList = [me];
  for (const name in DA.allPlayers) {
    if (name != me) unselectPlayerItem(DA.allPlayers[name]);
  }
  assertion(!isEmpty(DA.playerList), "uname removed from playerList!!!!!!!!!!!!!!!")
  DA.lastName = me;
  mRemoveIfExists('dPlayerOptions')
}
async function onclickColor(color) {
  let hex = colorToHex79(color);
  U.color = hex; delete U.fg;
  await updateUserTheme()
}
async function onclickCommand(ev) {
  let key = evToAttr(ev, 'key'); //console.log(key);
  let cmd = key == 'user' ? UI.nav.commands.user : UI.commands[key];
  assertion(isdef(cmd), `command ${key} not in UI!!!`)
  await cmd.open();
}
function onclickDay(d, styles) {
  let tsDay = d.id;
  let tsCreated = Date.now();
  let id = generateEventId(tsDay, tsCreated);
  let uname = U ? getUname() : 'guest';
  let o = { id: id, created: tsCreated, day: tsDay, time: '', text: '', user: uname, shared: false, subscribers: [] };
  Items[id] = o;
  let x = uiTypeEvent(d, o, styles);
  x.inp.focus();
}
async function onclickDeleteCollection(name) {
  if (nundef(name) && UI.collSecondary.isOpen) name = UI.collSecondary.name;
  if (nundef(name)) name = await mGather(iDiv(UI.deleteCollection), 'name');
  if (!name) return;
  if (collLocked(name)) { showMessage(`collection ${name} cannot be deleted!!!!`); return; }
  let proceed = await mGather(iDiv(UI.deleteCollection), {}, { type: 'yesNo', content: `delete collection ${name}?` });
  if (proceed) await collDelete(name);
  if (UI.collSecondary.isOpen && UI.collSecondary.name == name) collCloseSecondary();
  if (UI.collPrimary.name == name) { UI.collPrimary.name = 'all'; collOpenPrimary(); }
}
async function onclickDeleteSelected() {
  let selist = UI.selectedImages;
  let di = {}, deletedKeys = {};
  for (const k of selist) {
    let o = collKeyCollnameFromSelkey(k);
    let key = o.key;
    let collname = o.collname;
    if (collLocked(collname)) continue;
    if (nundef(deletedKeys[collname])) deletedKeys[collname] = [];
    await collDeleteOrRemove(key, collname, di, deletedKeys[collname]);
  }
  if (isEmpty(di) && Object.keys(deletedKeys).every(x => isEmpty(deletedKeys[x]))) {
    showMessage(`ERROR: cannot delete selected items!!!`);
    collClearSelections();
    return;
  }
  console.log('deletedKeys dict: ', deletedKeys);
  for (const k in deletedKeys) {
    let res = await mPostRoute('postUpdateSuperdi', { di, deletedKeys: deletedKeys[k], collname: k });
    console.log('postUpdateSuperdi', k, res)
    di = {};
  }
  await loadAssets();
  collPostReload();
}
async function onclickDeleteTable(id) {
  let res = await mPostRoute('deleteTable', { id });
}
async function onclickEditDetails() {
  let key = UI.selectedImages[0];
  let cmd = UI.commands.simpleNew;
  await editDetailsFor(key, iDiv(cmd));
}
function onclickExistingEvent(ev) { evNoBubble(ev); showEventOpen(evToId(ev)); }

async function onclickGameMenuPlayer(ev) {
  let name = evToAttr(ev, 'username'); //console.log('name',name); return;
  let shift = ev.shiftKey;
  await showGameMenuPlayerDialog(name, shift);
}
function onclickHex(item, board) {
  toggleItemSelectionUnique(item, board.items);
  if (isdef(board.handler)) board.handler(item, board);
}
async function onclickHomeNew() {
  let d = mDom('dMain'); mCenterCenterFlex(d);
  let dt = mDom(d, { fg: getThemeFg(), box: true, w100: true, padding: 20 }, { html: `${me}'s blog` });
  mDom(dt, { w100: true, margin: 'auto' }, { tag: 'textarea', rows: 15 });
  let db = mDom(dt);
  mButton('Save', homeOnclickSaveBlog, db, {}, 'button');
}
async function onclickJoinTable(id) {
  let table = Serverdata.tables.find(x => x.id == id);
  let me = getUname();
  assertion(table.status == 'open', 'too late to join! game has already started!')
  assertion(!table.playerNames.includes(me), `${me} already joined!!!`);
  table.players[me] = createGamePlayer(me, table.game);
  table.playerNames.push(me);
  let res = await mPostRoute('postTable', { id, players: table.players, playerNames: table.playerNames });
}
async function onclickLeaveTable(id) {
  let table = Serverdata.tables.find(x => x.id == id);
  let me = getUname();
  assertion(table.status == 'open', 'too late to leave! game has already started!')
  assertion(table.playerNames.includes(me), `${me} NOT in joined players!!!!`);
  delete table.players[me];
  removeInPlace(table.playerNames, me);
  let res = await mPostRoute('postTable', { id, players: table.players, playerNames: table.playerNames });
}
function onclickMenu(ev) {
  let keys = evToAttr(ev, 'key');
  let [menuKey, cmdKey] = keys.split('_');
  let menu = UI[menuKey];
  switchToMenu(menu, cmdKey);
}
async function onclickNATIONS() {
  if (nundef(M.natCards)) M.natCards = await mGetYaml('../assets/games/nations/cards.yaml');
  M.civs = ['america', 'arabia', 'china', 'egypt', 'ethiopia', 'greece', 'india', 'japan', 'korea', 'mali', 'mongolia', 'persia', 'poland', 'portugal', 'rome', 'venice', 'vikings'];
  let player = M.player = { civ: rChoose(M.civs) };
  M.ages = { 1: { events: [], progress: [] }, 2: { events: [], progress: [] }, 3: { events: [], progress: [] }, 4: { events: [], progress: [] } };
  for (const k in M.natCards) {
    let c = M.natCards[k];
    if (c.age == 0) continue;
    let age = c.age == 0 ? 1 : c.age;
    if (c.Type == 'event') M.ages[age].events.push(k); else M.ages[age].progress.push(k);
  }
  M.age = 1;
  M.events = M.ages[M.age].events;
  M.progress = M.ages[M.age].progress;
  arrShuffle(M.progress);
  arrShuffle(M.events);
  let d1 = mDiv('dMain'); mFlex(d1);
  UI.coll.rows = 3; UI.coll.cols = 7;
  let bg = getNavBg();
  let h = 180;
  let dcost = M.costGrid = mGrid(UI.coll.rows, 1, d1, { 'align-self': 'start' });
  for (let cost = 3; cost >= 1; cost--) {
    let d2 = mDom(dcost, { display: 'flex', 'justify-content': 'center', 'flex-flow': 'column', box: true, margin: 2, h: h, overflow: 'hidden' }, {});
    for (let i = 0; i < cost; i++) mDom(d2, { h: 40 }, { tag: 'img', src: `../assets/games/nations/templates/gold.png` });
  }
  UI.coll.grid = mGrid(UI.coll.rows, UI.coll.cols, d1, { 'align-self': 'start' });
  UI.coll.cells = [];
  for (let i = 0; i < UI.coll.rows * UI.coll.cols; i++) {
    let d = mDom(UI.coll.grid, { box: true, margin: 2, h: h, overflow: 'hidden' });
    mCenterCenterFlex(d);
    UI.coll.cells.push(d);
  }
  let n = UI.coll.rows * UI.coll.cols;
  M.market = [];
  for (let i = 0; i < n; i++) {
    let k = M.progress.shift();
    M.market.push(k);
    let card = M.natCards[k];
    let img = mDom(UI.coll.cells[i], { h: h, w: 115 }, { tag: 'img', src: `../assets/games/nations/cards/${k}.png` });
    img.setAttribute('key', k)
    img.onclick = buyProgressCard;
  }
  mDom('dMain', { h: 20 })
  let dciv = mDom('dMain', { w: 800, h: 420, maleft: 52, bg: 'red', position: 'relative' });
  let iciv = await loadImageAsync(`../assets/games/nations/civs/civ_${player.civ}.png`, mDom(dciv, { position: 'absolute' }, { tag: 'img' }));
  M.civCells = [];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 7; j++) {
      let r = getCivSpot(player.civ, i, j);
      let [dx, dy, dw, dh] = [10, 10, 15, 20]
      let d = mDom(dciv, { box: true, w: r.w + dw, h: r.h + dh, left: r.x - dx, top: r.y - dy, position: 'absolute', overflow: 'hidden' });
      mCenterCenterFlex(d);
      M.civCells.push(d);
      d.onclick = () => selectCivSpot(d);
    }
  }
}
async function onclickOpenToJoinGame() {
  let options = collectOptions();
  let players = collectPlayers();
  mRemove('dGameMenu');
  let t = createOpenTable(DA.gamename, players, options);
  let res = await mPostRoute('postTable', t);
}
function onclickPasteDetailObject(text, inputs, wIdeal, df, styles, opts) {
  function parseToInputs(o) {
    let keys = Object.keys(o);
    if (keys.length == 1) { o = o[keys[0]]; }
    let onorm = {};
    for (const k in o) {
      let k1 = normalizeString(k);
      onorm[k1] = o[k];
    }
    if (isEmpty(inputs)) {
      mBy('bParseIntoForm').remove();
      fillMultiForm(o, inputs, wIdeal, df, styles, opts);
    } else {
      for (const oinp of inputs) {
        let k = normalizeString(oinp.name);
        if (isdef(o[k])) oinp.inp.value = o[k];
      }
    }
  }
  try {
    let o = jsyaml.load(text);
    if (isdef(o)) parseToInputs(o);
  } catch {
    try {
      let o = JSON.parse(text);
      if (isdef(o)) parseToInputs(o);
    } catch { showMessage('text cannot be parsed into yaml or json object!') }
  }
}
async function onclickPlan() { await showCalendarApp(); }
async function onclickPlay() {
  await showTables('onclickPlay');
  showGames();
}
async function onclickSetAvatar(ev) { await simpleSetAvatar(UI.selectedImages[0]); }
async function onclickSettAddYourTheme() {
  let nameEntered = await mGather(iDiv(UI.commands.settAddYourTheme));
  let name = normalizeString(nameEntered);
  let ohne = replaceAll(name, '_', '');
  if (isEmpty(ohne)) { showMessage(`name ${nameEntered} is not valid!`); return; }
  let o = {};
  for (const s of ['color', 'texture', 'blendMode', 'fg']) {
    if (isdef(U[s])) o[s] = U[s];
  }
  o.name = name;
  let themes = lookup(Serverdata.config, ['themes']);
  let key = isdef(themes[name]) ? rUniqueId(6, 'th') : name;
  Serverdata.config.themes[key] = o;
  await mPostRoute('postConfig', Serverdata.config);
  await onclickSettTheme();
}
async function onclickSettBlendMode() {
  if (isEmpty(U.texture)) {
    showMessage('You need to set a Texture in order to set a Blend Mode!');
    return;
  }
  localStorage.setItem('settingsMenu', 'settBlendMode')
  showBlendModes();
}
async function onclickSettColor() {
  localStorage.setItem('settingsMenu', 'settColor')
  await showColors();
}
async function onclickSettDeleteTheme() {
  let nameEntered = await mGather(iDiv(UI.commands.settDeleteTheme));
  let name = normalizeString(nameEntered);
  if (!lookup(Serverdata.config, ['themes', name])) { showMessage(`theme ${name} does not exist!`); return; }
  delete Serverdata.config.themes[name];
  await mPostRoute('postConfig', Serverdata.config);
  await onclickSettTheme();
}
async function onclickSettFg() {
  localStorage.setItem('settingsMenu', 'settFg')
  await showTextColors();
}
async function onclickSettMyTheme() {
  localStorage.setItem('settingsMenu', 'settMyTheme')
  let dSettings = mBy('dSettingsMenu'); mClear(dSettings);
  let d = mDom(dSettings, { h: '100vh', bg: U.color })
  let dOuter = mDom(d, { padding: 25 }); // { padding: 10, gap: 10, margin:'auto', w:500, align:'center', bg:'white' }); //mCenterFlex(dParent);
  mCenterFlex(dOuter)
  let ui = await uiTypePalette(dOuter, U.color, U.fg, U.texture, U.blendMode);
}
async function onclickSettRemoveTexture() {
  if (isEmpty(U.texture)) return;
  for (const prop of ['texture', 'palette', 'blendMode', 'bgImage', 'bgSize', 'bgBlend', 'bgRepeat']) delete U[prop];
  await updateUserTheme();
}
async function onclickSettResetAll() {
  assertion(isdef(DA.settings), "NO DA.settings!!!!!!!!!!!!!!!")
  if (JSON.stringify(U) == JSON.stringify(DA.settings)) return;
  U = jsCopy(DA.settings);
  await postUserChange(U, true);
  setUserTheme();
  await settingsOpen();
  settingsCheck();
}
async function onclickSettTexture() {
  localStorage.setItem('settingsMenu', 'settTexture')
  await showTextures();
}
async function onclickSettTheme() {
  localStorage.setItem('settingsMenu', 'settTheme')
  await showThemes();
}
async function onclickSimple() {
  let name = valf(localStorage.getItem('sisi'), 'tierspiel'); //console.log(name);
  simpleSidebar(150);
  mAdjustPage(150);
  let div = mDom100('dMain');
  let sisi = UI.simple = { name, div };
  let [w, h, bg, fg] = [sisi.w, sisi.h, sisi.bg, sisi.fg] = [mGetStyle(div, 'w'), mGetStyle(div, 'h'), getNavBg(), getThemeFg()];
  let d1 = mDom(div); mCenterFlex(d1)
  let dMenu = sisi.dMenu = mDom(d1, { gap: 10, padding: 12 }, { className: 'title' }); mFlexVWrap(dMenu);
  let dInstruction = sisi.dInstruction = mDom(d1, { w100: true, align: 'center', fg }, { html: '* press Control key when hovering to magnify image! *' })
  let dBatch = sisi.dBatch = mDom(d1);
  let cellStyles = { bg, fg: 'contrast', box: true, margin: 8, w: 128, h: 128, overflow: 'hidden' };
  let o = createBatchGridCells(dBatch, w * .9, h * .9, cellStyles);
  addKeys(o, sisi);
  mStyle(dInstruction, { w: mGetStyle(sisi.dGrid, 'w') });
  mLinebreak(d1)
  sisi.dPageIndex = mDom(d1, { fg });
  simpleInit(name, sisi);
  sisi.isOpen = true;
  sisi.dInstruction.innerHTML = '* press Ctrl while hovering over an image for details *'; //'* drag images into the shaded area *'
  let grid = sisi.dGrid;
  mStyle(grid, { bg: '#00000030' })
  enableDataDrop(grid, simpleOnDropImage)
}
async function onclickSimpleClearSelections(ev) { simpleClearSelections(); }
async function onclickSimpleNew(name) {
  let cmd = lookup(UI.commands, ['simpleNew']); assertion(cmd, "UI.commands.simpleNew!!!!!")
  if (nundef(name)) name = await mGather(iDiv(cmd));
  if (!name) return;
  name = normalizeString(name);
  if (isEmpty(name)) {
    showMessage(`ERROR! you need to enter a valid name!!!!`);
    return;
  }
  if (M.collections.includes(name)) {
    showMessage(`collection ${name} already exists!`);
  }
  M.collections.push(name); M.collections.sort();
  if (name != UI.simple) simpleInit(name, UI.simple);
}
async function onclickSimpleRemove() {
  let selist = UI.selectedImages;
  let di = {};
  for (const key of selist) {
    let collname = UI.simple.name;
    if (simpleLocked(collname)) continue;
    let item = M.superdi[key];
    removeInPlace(item.colls, collname);
    di[key] = item;
  }
  if (isEmpty(di)) {
    showMessage(`ERROR: cannot delete selected items!!!`);
    simpleClearSelections();
    return;
  }
  await updateSuperdi(di);
  simpleInit()
}
async function onclickSimpleSelectAll(ev) {
  let sisi = UI.simple;
  for (const cell of sisi.cells) {
    let d = cell.firstChild;
    if (nundef(d)) break;
    mSelect(d);
  }
  for (const k of sisi.keys) { addIf(UI.selectedImages, k); }
  simpleCheckCommands();
}
async function onclickSimpleSelectPage(ev) {
  let sisi = UI.simple;
  for (const cell of sisi.cells) {
    let d = cell.firstChild;
    if (nundef(d)) break;
    mSelect(d);
    let o = sisi.items[d.id];
    addIf(UI.selectedImages, o.key);
  }
  simpleCheckCommands();
}
async function onclickStartGame() {
  await saveDataFromPlayerOptionsUI(DA.gamename);
  let options = collectOptions();
  let players = collectPlayers();
  await startGame(DA.gamename, players, options);
}
async function onclickStartTable(id) {
  let table = Serverdata.tables.find(x => x.id == id);
  if (nundef(table)) table = await mGetRoute('table', { id });
  if (!table) { showMessage('table deleted!'); return await showTables('showTable'); }
  console.log('table', jsCopy(table));
  table = setTableToStarted(table);
  let res = await mPostRoute('postTable', table);
}
async function onclickTable(id) {
  Tid = id;
  await switchToMainMenu('table');
}
async function onclickTableMenu() {
  let id = getTid();
  if (nundef(id)) {
    let me = getUname();
    let table = Serverdata.tables.find(x => x.status == 'started' && x.turn.includes(me));
    if (nundef(table)) table = Serverdata.tables.find(x => x.status == 'started' && x.playerNames.includes(me));
    if (nundef(table)) table = Serverdata.tables.find(x => x.status != 'open' && x.playerNames.includes(me));
    if (nundef(table)) table = Serverdata.tables.find(x => x.status != 'open');
    if (isdef(table)) id = table.id;
  }
  if (isdef(id)) { Tid = null; await showTable(id); } else await switchToMainMenu('play');
}
async function onclickTest() { console.log('nations!!!!'); }
async function onclickTextColor(fg) {
  let hex = colorToHex79(fg);
  U.fg = hex;
  await updateUserTheme();
}
async function onclickTexture(item) {
  U.texture = pathFromBgImage(item.bgImage);
  await updateUserTheme();
}
async function onclickThemeSample(ev) {
  let key = evToAttr(ev, 'theme');
  let theme = jsCopyExceptKeys(Serverdata.config.themes[key], ['name']);
  copyKeys(theme, U);
  await updateUserTheme();
}
async function onclickUser() {
  let uname = await mGather(iDiv(UI.nav.commands.user), { w: 100, margin: 0 }, { content: 'username', align: 'br', placeholder: ' <username> ' });
  if (!uname) return;
  await switchToUser(uname);
}
async function ondropPreviewImage(dParent, url, key) {
  if (isdef(key)) {
    let o = M.superdi[key];
    UI.imgColl.value = o.cats[0];
    UI.imgName.value = o.friendly;
  }
  assertion(dParent == UI.dDrop, `problem bei ondropPreviewImage parent:${dParent}, dDrop:${UI.dDrop}`)
  dParent = UI.dDrop;
  let dButtons = UI.dButtons;
  let dTool = UI.dTool;
  dParent.innerHTML = '';
  dButtons.innerHTML = '';
  dTool.innerHTML = '';
  let img = UI.img = mDom(dParent, {}, { tag: 'img', src: url });
  img.onload = async () => {
    img.onload = null;
    UI.img_orig = new Image(img.offsetWidth, img.offsetHeight);
    UI.url = url;
    let tool = UI.cropper = mCropResizePan(dParent, img);
    addToolX(tool, dTool)
    mDom(dButtons, { w: 120 }, { tag: 'button', html: 'Upload', onclick: onclickUpload, className: 'input' })
    mButton('Restart', () => ondropPreviewImage(url), dButtons, { w: 120, maleft: 12 }, 'input');
  }
}
async function ondropShowImage(url, dDrop) {
  mClear(dDrop);
  let img = await imgAsync(dDrop, { hmax: 300 }, { src: url });
  console.log('img dims', img.width, img.height); //works!!!
  mStyle(dDrop, { w: img.width, h: img.height + 30, align: 'center' });
  mDom(dDrop, { fg: colorContrastPickFromList(dDrop, ['blue', 'lime', 'yellow']) }, { className: 'blink', html: 'DONE! now click on where you think the image should be centered!' })
  console.log('DONE! now click on where you think the image should be centered!')
  img.onclick = storeMouseCoords;
}
function onenterHex(item, board) {
  colorSample(board.dSample, item.color);
}
async function onEventEdited(id, text, time) {
  console.log('onEventEdited', id, text, time)
  let e = Items[id];
  if (nundef(time)) {
    [time, text] = extractTime(text);
  }
  e.time = time;
  e.text = text;
  let result = await simpleUpload('postUpdateEvent', e);
  console.log('result', result)
  Items[id] = lookupSetOverride(Serverdata, ['events', id], e);
  mBy(id).firstChild.value = getEventValue(e);
  closePopup();
}
function onleaveHex(item, board) {
  let selitem = board.items.find(x => x.isSelected == true);
  if (nundef(selitem)) return;
  colorSample(board.dSample, selitem.color);
}
function onMouseMoveLine(ev) {
  let d = mBy('dCanvas'); //ev.target;
  let b = mGetStyle(d, 'border-width'); //console.log(b);
  const mouseX = ev.clientX - d.offsetLeft - b;
  const mouseY = ev.clientY + 2 - d.offsetTop - b;
  B.lines.forEach(line => {
    const x1 = parseFloat(iDiv(line).dataset.x1);
    const y1 = parseFloat(iDiv(line).dataset.y1);
    const x2 = parseFloat(iDiv(line).dataset.x2);
    const y2 = parseFloat(iDiv(line).dataset.y2);
    const thickness = B.triggerThreshold; 
    const distance = pointToLineDistance(mouseX, mouseY, x1, y1, x2, y2);
    if (distance <= thickness / 2) {
      mStyle(iDiv(line), { opacity: 1, bg: 'red' });
    } else {
      mStyle(iDiv(line), { opacity: .1, bg: 'white' });
    }
  });
}
async function onsockConfig(x) {
  console.log('SOCK::config', x)
  Serverdata.config = x; console.log(Serverdata.config);
}
async function onsockEvent(x) {
  console.log('SOCK::event', x)
  if (isdef(Serverdata.events)) Serverdata.events[x.id] = x;
}
async function onsockMerged(x) {
  console.log('SOCK::merged', x)
  if (!isSameTableOpen(x.id)) return;
  await showTable(x);
}
async function onsockPending(id) {
  console.log('SOCK::pending', id)
  if (!isSameTableOpen(id)) return;
  await showTable(id);
}
async function onsockSuperdi(x) {
  console.log('SOCK::superdi', x)
}
async function onsockTable(x) {
  console.log('SOCK::table', x); 
  let [msg, id, turn, isNew] = [x.msg, x.id, x.turn, x.isNew];
  let menu = getMenu();
  let me = getUname();
  console.log('menu',menu,'me',me,'turn',turn,'isNew',isNew)
  if (turn.includes(me) && menu == 'play') { Tid = id; await switchToMainMenu('table'); }
  else if (isNew  && menu == 'play') { Tid = id; await switchToMainMenu('table'); }
  else if (menu == 'table') await showTable(id);
  else if (menu == 'play') await showTables();
}
async function onsockTables(x) {
  console.log('SOCK::tables', x)
  let menu = getMenu();
  if (menu == 'play') await showTables('onsockTables');
  else if (menu == 'table') {
    assertion(isdef(T), "menu table but no table!!!")
    let id = T.id;
    let exists = x.find(t => t.id == id);
    if (nundef(exists)) { Tid = T = null; await switchToMenu(UI.nav, 'play'); }
  }
}

