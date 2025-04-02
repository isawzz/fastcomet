
function deepCompare(obj1, obj2) {
	//usage:

	// const differences = deepCompare(obj1, obj2);
	// console.log(differences);

	// Check if both arguments are objects
	if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
		return obj1 === obj2 ? null : { oldValue: obj1, newValue: obj2 };
	}

	// Initialize result object to store changes
	const changes = {};

	// Iterate over all keys in obj1 and compare with obj2
	for (let key in obj1) {
		if (obj1.hasOwnProperty(key)) {
			// Recursively compare nested objects or arrays
			const nestedChanges = deepCompare(obj1[key], obj2[key]);
			if (nestedChanges !== null) {
				changes[key] = nestedChanges;
			}
		}
	}

	// Check for keys in obj2 that are not in obj1
	for (let key in obj2) {
		if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
			changes[key] = { oldValue: undefined, newValue: obj2[key] };
		}
	}

	return Object.keys(changes).length > 0 ? changes : null;
}

