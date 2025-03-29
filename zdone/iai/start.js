onload = start;

function start(){
	setInterval(() => fetchGameState(5), 5000);  // Poll every 5 seconds
}
