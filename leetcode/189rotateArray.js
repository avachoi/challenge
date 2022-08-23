// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is negative or positive.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// -105 <= k <= 105

//MY SOLUTION

let rotateArray = function (nums, n) {
	if (n > 0) {
		for (i = nums.length - 1; i >= 0; i--) {
			nums[i + n] = nums[i];
		}
		for (j = n - 1; j >= 0; j--) {
			nums[j] = nums.pop();
		}
	}
	if (n < 0) {
		for (let i = 0; i <= -n - 1; i++) {
			nums[nums.length] = nums[0];
			nums.shift();
		}
	}
	return nums;
};

//case1: [1,2,3,4,5],2
//[1,2,3,4,5, , ]
//[1,2,1,2,3,4,5]
//......
//[4,5,1,2,3]

//case2: [1,2,3,4,5], -2
//[1,2,3,4,5, ]
//[ ,2,3,4,5,1]
//[2,3,4,5,1]
//......
//[3,4,5,1,2]
