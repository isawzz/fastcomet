
async function switchToUser(username) {
	if (!isEmpty(username)) username = normalizeString(username);
	if (isEmpty(username)) username = 'guest';
	let res = await mPostPhp('game_user', { username, action: 'login' });
	console.log('res', res);
	mStyle('dTopRight',{maright:10,fz:20},{html:`logged in: ${username}`});
	localStorage.setItem('username', username);
	// iDiv(UI.nav.commands.user).innerHTML = username;
	// setUserTheme();
	// menu = valf(menu, getMenu(), localStorage.getItem('menu'), 'home');
	// await switchToMainMenu(menu);

}
async function login(username) {
	console.log("login");
	//let username = document.getElementById("username").value;
	let res = await mPostPhp('game_user', { username, action: 'login' });
	if (res.token) {
		playerToken = DA.playerToken = res.token;
		document.getElementById("playerInfo").innerText = `Logged in as: ${res.username}`;
		document.getElementById("loginDiv").style.display = "none";
		document.getElementById("gameControls").style.display = "block";
	} else {
		console.log("Login failed");
	}
}

