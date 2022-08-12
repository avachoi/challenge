// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//SOLUTION

var majorityElement = function (nums) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (!map[nums[i]]) {
			map[nums[i]] = 1;
		} else {
			map[nums[i]]++;
		}
		if (map[nums[i]] > nums.length / 2) {
			return nums[i];
		}
	}
	return -1;
};

//find minFreq= nums.length/2
