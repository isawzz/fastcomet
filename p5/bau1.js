
function qsort(arr) {
	if (arr.length <= 1) return arr
	let x = arr[0]
	let lower = [], upper = []
	for (i = 1; i < arr.length; i++)
		if (arr[i] < x) lower.push(arr[i])
		else upper.push(arr[i])
	return qsort(lower).concat([x]).concat(qsort(upper));
}





