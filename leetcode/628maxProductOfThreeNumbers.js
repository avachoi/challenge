// 628. Maximum Product of Three Numbers
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

//MY SOLUTION
var maximumProduct = function (nums) {
	let sorted = [...nums].sort((a, b) => a - b);
	let multiplyNegPos = sorted[0] * sorted[1] * sorted[sorted.length - 1];
	let multiplyPos =
		sorted[sorted.length - 3] *
		sorted[sorted.length - 2] *
		sorted[sorted.length - 1];
	return Math.max(multiplyNegPos, multiplyPos);
};

//count negative
//if negatives >=2, find multiple of these two and max
//compare this multiplication all positive multiplication
