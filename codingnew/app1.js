const fs = require('fs');
const path = require('path');

/**
 * Extracts all functions from a list of JavaScript files, organizes them in a dictionary,
 * and writes them sorted alphabetically by name to a new file.
 *
 * @param {string[]} filenames - List of file paths containing JavaScript functions.
 * @param {string} outputFile - Path of the output file to save the result.
 * @returns {Object} - Dictionary of function names and their code.
 */
function extractAndSortFunctions(filenames, outputFile) {
    const functionDict = {};

    filenames.forEach((filename) => {
        const filePath = path.resolve(filename);
        if (!fs.existsSync(filePath)) {
            console.warn(`File not found: ${filename}`);
            return;
        }

        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Match all function declarations and function expressions with names, including async
        const functionRegex = /(?:async\s+)?function\s+([a-zA-Z_$][\w$]*)\s*\([^)]*\)\s*\{|(?:const|let|var)\s+([a-zA-Z_$][\w$]*)\s*=\s*\(?\([^)]*\)\s*=>\s*\{/g;
        let match;

        while ((match = functionRegex.exec(fileContent)) !== null) {
            const functionName = match[1] || match[2];
            if (functionName) {
                const startIndex = match.index;
                const functionBody = extractFunctionBody(fileContent, startIndex);
                if (functionBody) {
                    functionDict[functionName] = functionBody;
                }
            }
        }
    });

    // Sort functions alphabetically and join them with an empty line
    const sortedFunctions = Object.keys(functionDict)
        .sort()
        .map((name) => functionDict[name])
        .join('\n\n');

    // Write the sorted functions to the output file
    fs.writeFileSync(outputFile, sortedFunctions, 'utf-8');

    return functionDict;
}

/**
 * Extracts the full function body starting from a given index in the file content.
 *
 * @param {string} content - The file content.
 * @param {number} startIndex - The starting index of the function declaration.
 * @returns {string} - The complete function text, or null if extraction fails.
 */
function extractFunctionBody(content, startIndex) {
    let openBraces = 0;
    let i = startIndex;

    while (i < content.length) {
        const char = content[i];

        if (char === '{') {
            openBraces++;
        } else if (char === '}') {
            openBraces--;
            if (openBraces === 0) {
                return content.slice(startIndex, i + 1);
            }
        }

        i++;
    }

    console.warn('Failed to extract function body starting at index:', startIndex);
    return null;
}

/**
 * Finds the minimal closure of functions needed to execute initial functions.
 *
 * @param {Object} functionDict - Dictionary of function names and their code.
 * @param {string[]} initialFunctions - List of initial function names to start from.
 * @param {string} outputFile - Path of the output file to save the closure.
 */
function findFunctionClosure(functionDict, initialFunctions, outputFile) {
    const closure = new Set();
    const toProcess = [...initialFunctions];

    while (toProcess.length > 0) {
        const funcName = toProcess.pop();

        if (!functionDict[funcName] || closure.has(funcName)) {
            continue;
        }

        closure.add(funcName);
        const functionCode = functionDict[funcName];

        // Extract called functions within the current function's body
        const calledFunctions = Array.from(functionCode.matchAll(/\b([a-zA-Z_$][\w$]*)\s*\(/g))
            .map((match) => match[1])
            .filter((name) => name !== funcName && functionDict[name]);

        toProcess.push(...calledFunctions);
    }

    // Create the minimal closure code
    const closureCode = Array.from(closure)
        .sort()
        .map((name) => functionDict[name])
        .join('\n\n');

    // Write the closure code to the output file
    fs.writeFileSync(outputFile, closureCode, 'utf-8');
}

/**
 * Combines extracting functions and finding the closure into a single operation.
 *
 * @param {string[]} filenames - List of file paths containing JavaScript functions.
 * @param {string[]} initialFunctions - List of initial function names to start from.
 * @param {string} outputFile - Path of the output file to save the closure.
 */
function buildClosure(filenames, initialFunctions, outputFile) {
    const functionDict = extractAndSortFunctions(filenames, 'allcode.js');
    findFunctionClosure(functionDict, initialFunctions, outputFile);
}

// Example usage
let dir = 'todo/';
buildClosure([`${dir}/closure.js`, `${dir}/bau1.js`,`${dir}/bau2.js`, `${dir}/bau3.js`, `${dir}/bau4.js`, `${dir}/start.js`], ['start'], 'closure.js');
