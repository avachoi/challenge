// 922. Sort Array By Parity II
// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

// Example 1:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
// Example 2:

// Input: nums = [2,3]
// Output: [2,3]

//MY SOLUTION
var sortArrayByParityII = function (nums) {
	let even = [];
	let odd = [];
	let res = [];
	nums.forEach((num) => (num % 2 === 0 ? even.push(num) : odd.push(num)));
	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) {
			res.push(even.pop());
		} else {
			res.push(odd.pop());
		}
	}
	return res;
};
