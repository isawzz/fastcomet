onload = start;
DA.FASTCOMET = 'php';

async function start() { await test1_php_echowritepostyaml(); } //_php_echowritepostyaml(); }

async function test2_php_writesimple() {
	await loadAssetsStatic();

	let res = await mPostPhp({ text: 'hello' }, `../../zdata/f2.yaml`);
	console.log(res);
}
async function test1_yaml_dump() {
	let text = jsyaml.dump({ a: 1, b: 2 });
	console.log(text, typeof text)
	//let di={a:1,b:2,c:3}; let text=JSON.stringify(di); console.log(text);
	// let res = await fetch('http://localhost:8080/fastcomet/todo/php/echo.php', 
	// 	{ method: 'POST', mode: 'no-cors', body: {text,path:'aaaaa.txt' }});
	// 	console.log(res)
	// let text2 = await res.text(); console.log(text2);
}
async function test1_php_echowritepostyaml() {
	await loadAssetsStatic();

	let res = await mPostPhp({ text: 'hello' }, `../../zdata/${getUID('f')}.yaml`);
	console.log(res);
}
async function test1_php_echowritepost() {
	let res = await fetch('http://localhost:8080/fastcomet/todo/php/echowritepost.php',
		{
			method: 'POST',
			//mode: 'no-cors', // DOES NOT WORK ON FASTCOMET!!!!!!!!!!!!!!!!!! need to set access headers in php script!
			body: new URLSearchParams({ text: 'Hello, World!', path: `../../zdata/${getUID('f')}.txt` })
		}
	);
	console.log(await res.text());
}
async function test1_php_echowrite() {
	let res = await fetch('http://localhost:8080/fastcomet/todo/php/echowrite.php');
	console.log(await res.text());
}
async function test1_php_echo() {
	let res = await fetch('http://localhost:8080/fastcomet/todo/php/echo.php');
	console.log(await res.text());
}
async function test1_loadStaticYaml() {
	//ich hab 1 dPage sonst nix
	//mKey('frog', dPage, { w: 100, h: 100 });
	M = await loadStaticYaml('y/m.yaml');
	M.superdi = await loadStaticYaml('y/superdi.yaml');
	M.details = await loadStaticYaml('y/details.yaml');
	M.config = await loadStaticYaml('y/config.yaml');
	loadColors(); console.log(M);
	mKey('camel', dPage, { w: 100, h: 100 });
	//console.log(Object.keys(M.superdi));
	for (const uname of M.config.users) {
		let data = await loadStaticYaml(`y/users/${uname}.yaml`);
		console.log(data);
		mKey(data.imgKey, dPage, { w: 100, h: 100 });
	}
}
async function test0() {
	loadColors(); console.log(M);
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

