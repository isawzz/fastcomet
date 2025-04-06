
async function pollResume(ms){
	return;
	pollStop();
	DA.polling = true;

	let func = window[DA.pollFunc]; 
	console.log('', DA.pollCounter++, func.name); 

	let res = await func(); //console.log('res', res);	

	TO.poll = setTimeout(pollResume,valf(ms,DA.pollms));

}
function pollStop() {
	if (TO.poll) { clearTimeout(TO.poll); TO.poll = null; }
	DA.polling = false;

}
