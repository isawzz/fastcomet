
function onPoll() {
	console.log('', DA.pollCounter++, 'polling', DA.state);
	switch (DA.state) {
		case 'play': tablePresent(); break;
		case 'no_table': showMessage('No table present!');
		case 'pause': 
		default: pollStop(); break;
	}
}
function pollStop() {
	clearInterval(TO.poll);
	TO.poll = null;
}
function pollStart(ms = 1000) {
	if (!TO.poll) TO.poll = setInterval(onPoll, ms);
}
function pollResume(ms) { }

function handleVisibilityChange() {
	if (document.visibilityState === "hidden") {
		// Page is not visible, so pause the interval
		pollStop();
	} else {
		// Page is visible again, resume the interval
		pollStart();
	}
}