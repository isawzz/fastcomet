
// Attach this function to the `drop` event of an element
function logDroppedDataTypes(event) {
	event.preventDefault(); // Prevent the default behavior (e.g., opening a link/file)

	const dataTransfer = event.dataTransfer;

	console.log("Dropped data types and values:");

	// Iterate through all available data types
	for (const type of dataTransfer.types) {
			const value = dataTransfer.getData(type);
			console.log(`Type: ${type}, Value: ${value}`);
	}
}
function ondropSomething(ev) {
	return new Promise((resolve, reject) => {
		let dt = ev.dataTransfer;
		if (dt.types.includes('itemkey')) {
			let data = ev.dataTransfer.getData('itemkey');
			console.log('dropped', data);
			resolve(data);
		} else {
			const files = ev.dataTransfer.files;
			if (files.length > 0) {
				const reader = new FileReader();
				reader.onload = async (evReader) => {
					let data = evReader.target.result;
					console.log('dropped', data);
					resolve(data);
				};
				reader.readAsDataURL(files[0]);
			}else resolve(ev.dataTransfer);
		}

	});
}





