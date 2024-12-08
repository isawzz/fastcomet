
function findFunctionClosure(di, initialFunctions, outputFile) {
	const closure = new Set();
	const toProcess = [...initialFunctions];
	DA.di=di;

	while (toProcess.length > 0) {
			const funcName = toProcess.pop();

			let isKey = Object.prototype.hasOwnProperty.call(di, funcName);
			if (!isKey || closure.has(funcName)) {
					continue;
			}

			closure.add(funcName);
			const functionCode = di[funcName].code;
			console.log(funcName, functionCode)

			// Extract called functions within the current function's body
			const calledFunctions = Array.from(functionCode.matchAll(/\b([a-zA-Z_$][\w$]*)\s*\(/g))
					.map((match) => match[1])
					.filter((name) => name !== funcName && di[name]);

			toProcess.push(...calledFunctions);
	}

	return closure; 
}


