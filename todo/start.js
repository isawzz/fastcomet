onload = start;
DA.FASTCOMET = 'php';

async function start() { loadColors(); await test0(); }

async function test0() {
	await loadAssets();

	let dPage = document.getElementById('dPage');
	mStyle(dPage, { w: '100%', h: '100%', bg: 'skyblue' }); //page coloring

	let names = M.divNames = mAreas(dPage, ` 'dTop' 'dMain' 'dStatus' `, '1fr', 'auto 1fr auto');
	mShade(names); //area coloring
	mStyle('dMain', { padding: 4, overy: 'auto' })
	//mFlexBaseline('dTop'); mStyle('dTop', { padding: 4 })
	mStyle('dStatus', { padding: 4 }, { html: '&nbsp;' })

	let d = mDom('dTop'); //top menu
	let border = '4px solid red';
	//mDom(d,{fz:40},{html:'hallo'});mFlexV(d)
	//mDom(d,{h:50},{tag:'img',src:'../assets/img/emo/airplane.png'});

	let ui = mKey('airplane', d, { fz: 30,margin:10, cursor: 'pointer' }, { onclick: onclickHome, menu:'top' });

	ui.click();

	return;
	let dHome = mHomeLogo(dTop, 'airplane', onclickHome, 'top'); //logo
	let dCalc = mLinkMenu(dTop, 'CALC', {}, onclickCalc, 'top');
	mLinkMenu(dTop, 'DAY', {}, onclickDay, 'top');
	let dExample = mLinkMenu(dTop, 'EXAMPLE', {}, onclickExample, 'top');
	mLinkMenu(dTop, 'GAME', {}, onclickGame, 'top');
	//let dMath = mLinkMenu(dTop, 'MATH', {}, onclickMath, 'top');
	mLinkMenu(dTop, 'ZONE', {}, onclickZone, 'top');

	//start in vegan
	// v.click(); setTimeout(() => clickOnElemWithAttr('innerHTML', 'Soups'), 100);
	// setTimeout(() => onclickRecipe('lentil_soup'), 100)

	//start in calc
	dCalc.click();

}

async function preprelims() {
	ColorThiefObject = new ColorThief();//console.log(ColorThiefObject);
	let t1 = performance.now();
	Serverdata = await mGetRoute('session'); //session ist: users,config,events
	let t2 = performance.now();
	await loadAssets();
	let textures = await mGetFiles(`../assets/textures`);
	M.textures = textures.map(x => `../assets/textures/${x}`); //console.log('textures',M.textures)
}
async function prelims() {
	await preprelims();
	let t4 = performance.now();
	sockInit();
	let t5 = performance.now();
	window.onkeydown = keyDownHandler;
	window.onkeyup = keyUpHandler;
	DA.funcs = { setgame: setgame(), lacuna: lacuna(), fishgame: fishgame(), button96: button96() }; //implemented games!
	for (const gname in Serverdata.config.games) {
		if (isdef(DA.funcs[gname])) continue;
		DA.funcs[gname] = defaultGameFunc();
	}

	let html = `
    <div style="position:fixed;width:100%;z-index:20000">
      <div id="dNav" class="nav p10"></div>
      <div id="dMessage" style='height:0px;padding-left:10px' class="transh"></div>
    </div>
    <div id="dBuffer" style="height:32px;width:100%" class="nav"></div>
    <div id="dExtra" class="p10hide nav"></div>
    <div id="dTitle"></div>
    <div id="dPage" style="display:grid;grid-template-columns: auto 1fr auto;">
      <div id="dLeft" class="mh100 over0 translow nav">
      </div>
      <div id="dMain"></div>
      <div id="dRight" class="mh100 over0 translow"></div>
    </div>
    <d id="dBottom"></d>
    
    `;
	document.body.innerHTML = html;
	UI.dTitle = mBy('dTitle');
	UI.commands = {};
	UI.nav = showNavbar(); //console.log(UI.nav)
	staticTitle();
	let cmd = UI.nav.commands.user = mCommand(UI.nav.elem, 'user'); //console.log(cmd)
	iDiv(cmd).classList.add('activeLink');
	await switchToUser(localStorage.getItem('username'), localStorage.getItem('menu'));
}

