const fs = require('fs');
const path = require('path');

function extractAndSortFunctions(filenames, outputFile) {
	const functionsDict = {};

	filenames.forEach((filename) => {
		const filePath = path.resolve(filename);
		if (!fs.existsSync(filePath)) {
			console.warn(`File not found: ${filename}`);
			return;
		}

		const fileContent = fs.readFileSync(filePath, 'utf-8');
		console.log(fileContent)
		const extractedFunctions = extractFunctions(fileContent);
		console.log(extractedFunctions)

		// Overwrite functions in the dict with the latest ones from the current file
		for (const [name, func] of Object.entries(extractedFunctions)) {
			functionsDict[name] = func;
		}
	});

	const sortedFunctionNames = Object.keys(functionsDict).sort();
	const result = sortedFunctionNames
		.map(name => functionsDict[name])
		.join('\n\n');  // Separate functions with an empty line

	fs.writeFileSync(outputFile, result, 'utf-8');
	return result;
}

// Helper function to extract function names and their bodies from a file's content
function extractFunctions(fileContent) {
	// Updated regex to handle default parameters and async functions
	const functionPattern = /async?\s*function\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*{([^}]*)}/g;
	let match;
	const functions = {};

	while ((match = functionPattern.exec(fileContent)) !== null) {
		const [_, name, params, body] = match;
		// Handle the function with its default parameters correctly
		functions[name] = `function ${name}(${params}) {${body}}`;
	}

	return functions;
}


// Example usage
let dir = 'todo/'
extractAndSortFunctions([`${dir}/test0.js`], 'allcode.js');
