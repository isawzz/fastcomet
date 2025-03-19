
async function login() {
	console.log("login");
	let username = document.getElementById("username").value;
	let res = await mPostPhp('game_user', {username,action:'login' }); 
	if (res.token) {
		playerToken = DA.playerToken = res.token;
		document.getElementById("playerInfo").innerText = `Logged in as: ${res.username}`;
		document.getElementById("loginDiv").style.display = "none";
		document.getElementById("gameControls").style.display = "block";
	} else {
		console.log("Login failed");
	}
}

