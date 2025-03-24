
async function switchToUser(username) {
	if (!isEmpty(username)) username = normalizeString(username);
	if (isEmpty(username)) username = 'guest';
	
	console.log('username', username); //return;
	let res = await mPostPhp('game_user', { username, action: 'login' });
	U = res.userdata;
  let bg = U.color;
  let fg = U.fg??colorIdealText(bg);
	mStyle('dTopRight',{className:'button',display:'inline',h:'80%',bg,fg},{html:`${username}`});
	localStorage.setItem('username', username);
	setTheme(U);
  // setColors(U.color, U.fg);
  // setTexture(U);
}
function setColors(item){
  let bg = item.color;
  let fg = item.fg??colorIdealText(bg);
  mStyle('dPage', {bg, fg});
}
function setTheme(item) {
  setColors(item);
  setTexture(item);
}
function setTexture(item) {
  let bgImage = valf(item.bgImage, bgImageFromPath(item.texture), '');
  let bgBlend = valf(item.bgBlend, item.blendMode, '');
  let bgSize = bgImage.includes('marble') || bgImage.includes('wall') ? '100vw 100vh' : '';
  let bgRepeat = 'repeat';
	mStyle('dPage',{bgImage,bgBlend,bgSize,bgRepeat});
}
function bgImageFromPath(path) { return isdef(path) ? `url('${path}')` : null; }




