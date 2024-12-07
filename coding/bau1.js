
function findFunctionClosure(di, initialFunctions, outputFile) {
	const closure = new Set();
	const toProcess = [...initialFunctions];

	while (toProcess.length > 0) {
			const funcName = toProcess.pop();

			if (!di[funcName] || closure.has(funcName)) {
					continue;
			}

			closure.add(funcName);
			const functionCode = di[funcName];

			// Extract called functions within the current function's body
			const calledFunctions = Array.from(functionCode.matchAll(/\b([a-zA-Z_$][\w$]*)\s*\(/g))
					.map((match) => match[1])
					.filter((name) => name !== funcName && di[name]);

			toProcess.push(...calledFunctions);
	}

	// Create the minimal closure code
	const closureCode = Array.from(closure)
			.sort()
			.map((name) => di[name])
			.join('\n\n');

	// Write the closure code to the output file
	return closureCode;
	//fs.writeFileSync(outputFile, closureCode, 'utf-8');
}


