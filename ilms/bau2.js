
function checkIfFromOwnServer(url) {
	const ownOrigin = window.location.origin; // e.g., http://127.0.0.1:51012
	if (url.startsWith(ownOrigin)) {
		console.log('Dropped from inside the project (server):', url);
	} else {
		console.log('Dropped from external website:', url);
	}
}
function garnix() {
	document.addEventListener('drop', async (event) => {
		event.preventDefault(); // Prevent default behavior
		const items = event.dataTransfer.items;

		if (items.length > 0) {
			for (const item of items) {
				if (item.kind === 'file') {
					// Dropped from computer (local file)
					const file = item.getAsFile();
					console.log('Dropped from computer:', file.name);
				} else if (item.kind === 'string' && item.type === 'text/uri-list') {
					// Dropped from a website (URL)
					const url = await new Promise(resolve => item.getAsString(resolve));
					console.log('Dropped from website:', url);
					checkIfFromOwnServer(url);
				}
			}
		}
	});

}
