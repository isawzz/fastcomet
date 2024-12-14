onload = start;

async function start(){test1();}
async function test1(){
	loadColors(); 
	await loadRecipes();
	await loadAssets();
	console.log(M)
	let bg = '#8EA41D';
	let dPage = document.getElementById('dPage');
	mStyle(dPage, { w: '100%', h: '100%', bg, fg: 'white' }); //page coloring

	let [dTop, dMain, dStatus] = M.divNames = mAreas(dPage, ` 'dTop' 'dMain' 'dStatus' `, '1fr', 'auto 1fr auto');

	let margin = 4;
	mStyle(dTop, { margin, bg, display: 'flex', jcontent: 'start', aitems: 'start', hmax: 130, overflow: 'hidden' });
	let [dTitle, dBanner] = mAreas('dTop', ` 'dTitle dBanner' `, '238px 1fr', 'auto');
	mDom(dTitle, { fz: 34, family: 'algerian', margin: 20, hmax:100 }, { html: "The Fuzzy Kitchen" })
	mDom(dBanner, { wmin: 2000, hmin: 400, matop: -200, bgSrc: '../easy/recipes/veganBanner.png', bgRepeat: 'no-repeat', bgSize: 'cover', opacity: .8 });

	mStyle(dMain, { margin, matop: 0, hmin: 100, bg: colorMix(bg, 'white', 50), fg: 'black' });
	
	mStyle(dStatus, { align: 'center', margin, matop: 0 }, { html: 'Copyright 2024' });

	//ab da kann vereinfachen!	
	let [side, main] = mAreas(dMain, ` 'dSize dTable' `, '238px 1fr', '1fr');
	//mShadeLight([side,main]);
	mStyle(side, { bg: colorMix(bg, 'white', 80) });

	showVeganRecipeTypes(side); 

	// clickOnElemWithAttr('innerHTML', 'Soups');
	// setTimeout(()=>onclickRecipe('lentil_soup'),10)

}
async function test0(){
	await loadRecipes();
	let bg = '#8EA41D';
	let dPage = document.getElementById('dPage');
	mStyle(dPage, { w: '100%', h: '100%', bg, fg: 'white' }); //page coloring

	let [dTop, dMain, dStatus] = M.divNames = mAreas(dPage, ` 'dTop' 'dMain' 'dStatus' `, '1fr', 'auto 1fr auto');

	let margin = 4;
	mStyle(dTop, { margin, bg, display: 'flex', jcontent: 'start', aitems: 'start', hmax: 130, overflow: 'hidden' });
	let [dTitle, dBanner] = mAreas('dTop', ` 'dTitle dBanner' `, '238px 1fr', 'auto');
	mDom(dTitle, { fz: 34, family: 'algerian', margin: 20, hmax:100 }, { html: "The Fuzzy Kitchen" })
	mDom(dBanner, { wmin: 2000, hmin: 400, matop: -200, bgSrc: '../easy/recipes/veganBanner.png', bgRepeat: 'no-repeat', bgSize: 'cover', opacity: .8 });

	mStyle(dMain, { margin, matop: 0, hmin: 100, bg: colorMix(bg, 'white', 50), fg: 'black' });
	
	mStyle(dStatus, { align: 'center', margin, matop: 0 }, { html: 'Copyright 2024' });

	//ab da kann vereinfachen!	
	let [side, main] = mAreas(dMain, ` 'dSize dTable' `, '238px 1fr', '1fr');
	mStyle(side, { bg: colorMix(bg, 'white', 80) });

	let titles = ['Newest!', 'Snacks', 'Salads', 'Soups', 'Main Dishes', 'Sides', 'Desserts', 'Basics'];
	for (const t of titles) {
		let d = mDom(side, { className: 'a', cursor: 'pointer', rounding: 10, margin: 10, padding: 10, w100: true }, { html: t, onclick: onclickRecipeType, menu: 'side', kennzahl: getUID() });
	}
	await loadAssets();
	console.log(M)

	clickOnElemWithAttr('innerHTML', 'Soups');
	setTimeout(()=>onclickRecipe('lentil_soup'),10)

}