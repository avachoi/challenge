// 1338. Reduce Array Size to The Half
// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

// Example 1:

// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has a size greater than half of the size of the old array.
// Example 2:

// Input: arr = [7,7,7,7,7,7]
// Output: 1
// Explanation: The only possible set you can choose is {7}. This will make the new array empty.

//MY SOLUFION

var minSetSize = function (arr) {
	let originalLength = arr.length;
	let currentLength = arr.length;
	let count = 0;
	let obj = {};
	arr.forEach((el) => (obj[el] = (obj[el] || 0) + 1));
	let freq = [...Object.values(obj)];
	let sortedFreq = freq.sort((a, b) => b - a);
	for (let i = 0; i < sortedFreq.length; i++) {
		count++;
		currentLength -= sortedFreq[i];
		if (currentLength <= originalLength / 2) return count;
	}
	return count;
};

//create obj for frequency of elements
//create array of value of the obj and sort
//iterate the array of value and arr.length - current array el, check if the arr.length is short enough
//yes, return the count
