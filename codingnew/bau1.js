async function loadFunctionsFromFiles(filenames) {
  const functionsDict = {};

  // Helper function to extract function names and their bodies from a file's content
  function extractFunctions(fileContent) {
    // Updated regex to handle default parameters and async functions

    //const functionPattern = /async?\s*function\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*{([^}]*)}/g;

    //const functionPattern = /(?:async\s+)?function\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*{([^}]*)}/g;

    //const functionPattern = /async?\s*function\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*{([^}]*)}/g;

    const functionPattern =  /^\s*(async\s*)?function\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*{([\s\S]*?)\}/;

    let match;
    const functions = {};

    let x=matchAndExtract(fileContent,functionPattern);
    while(x){
      console.log('_____x',x);
      let rest = x.remainingText;
      console.log('rest',rest);
      let match = x.match;
      //console.log('___MATCH!\n','_',_,'\nname',name,'\nparams',params,'\nbody',body)
      // let s = _.startsWith('async')?'async function':'function';
      // functions[name] = `${s} ${name}(${params}) {${body}}`;
      x=matchAndExtract(rest,functionPattern);
    }
    return functions;
  }

  // Load and process each file
  for (const filename of filenames) {
    try {
      const response = await fetch(filename);
      const fileContent = await response.text();
      const extractedFunctions = extractFunctions(fileContent);

      // Overwrite functions in the dict with the latest ones from the current file
      for (const [name, func] of Object.entries(extractedFunctions)) {
        functionsDict[name] = func;
      }
    } catch (error) {
      console.error(`Error loading file ${filename}:`, error);
    }
  }

  //console.log('...dict',functionsDict);
  // Sort function names alphabetically and join them into a string
  const sortedFunctionNames = Object.keys(functionsDict).sort();
  const result = sortedFunctionNames
    .map(name => functionsDict[name])
    .join('\n\n');  // Separate functions with an empty line

  return result;
}
