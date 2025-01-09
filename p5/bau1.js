
function createEmojiInput(dParent) {

	// Create the input element
	dParent = toElem(dParent);
	const input = mDom(dParent,{},{tag:'input'});

	// Set attributes to ensure emoji support
	input.type = "text"; // Default text input supports emoji
	input.placeholder = "Type emojis here 😊"; // Placeholder text
	input.style.fontSize = "1.2em"; // Increase font size for better visibility
	input.style.padding = "10px"; // Add some padding for comfort
	input.style.borderRadius = "5px"; // Rounded edges for aesthetics
	input.style.border = "1px solid #ccc"; // Subtle border styling

	// Append the input to the body or a specific container
	//document.body.appendChild(input);

	// Optionally, focus on the input when created
	input.focus();
	return input;
}







