// 1346. Check If N and Its Double Exist
// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

var checkIfExist = function (arr) {
	let obj = {};
	let zeros = 0;
	arr.forEach((el) => (obj[el] = true));
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0 && obj[arr[i] * 2]) {
			return true;
		}
		if (arr[i] === 0) {
			zeros++;
		}
	}
	return zeros >= 2;
};
