
function arrMaxContiguous(arr){
	let cnt=0,el=arr[0],max=0;
	for(let i=0;i<arr.length;i++){
		let a=arr[i];
		if (a==el) cnt++;
		else{
			el=a;
			if (cnt>max) max=cnt;
			cnt=1;
		}
	}
	return max;
}
function arrGen(n,min,max){
	let arr = [];
	for(const i of range(1,n)) arr.push(rNumber(min,max));
	return arr;
}
function arrToCount(arr) {
	let res = []
	let x = arr[0], cnt = 0;
	for (i of range(0, arr.length)) {
		let a = arr[i];
		if (a == x) cnt++
		else {
			res.push({ n: x, cnt });
			x = a;
			cnt = 1;
		}
	}
	return res;
}
function qsort(arr) {
	if (arr.length <= 1) return arr
	let x = arr[0]
	let lower = [], upper = []
	for (i = 1; i < arr.length; i++)
		if (arr[i] < x) lower.push(arr[i])
		else upper.push(arr[i])
	return qsort(lower).concat([x]).concat(qsort(upper));
}





