const fs = require('fs');
const path = require('path');

/**
 * Extracts all functions from a list of JavaScript files, organizes them in a dictionary,
 * and writes them sorted alphabetically by name to a new file.
 *
 * @param {string[]} filenames - List of file paths containing JavaScript functions.
 * @param {string} outputFile - Path of the output file to save the result.
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

        // Match all function declarations and function expressions with names, including async and default parameters
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

// Example usage
let dir = 'todo/'
extractAndSortFunctions([`${dir}/test.js`], 'allcode.js');


