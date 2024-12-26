
function measureEmojiWidth(text, fontSize = 16) {
	// Create a temporary element to hold the text
	const container = document.createElement('div');
	container.style.position = 'absolute';
	container.style.whiteSpace = 'nowrap';
	container.style.fontSize = `${fontSize}px`;
	container.style.fontFamily = 'Noto Color Emoji';
	container.style.visibility = 'hidden';
	container.textContent = text;

	// Append it to the document to measure
	document.body.appendChild(container);

	// Measure the width using a Range object
	const range = document.createRange();
	range.selectNodeContents(container);
	const width = range.getBoundingClientRect().width;

	// Clean up
	document.body.removeChild(container);

	return width;
}
