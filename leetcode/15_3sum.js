// 15. 3Sum
// Medium

// 21194

// 1972

// Add to List

// Share
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

//MY SOLUTION

var threeSum = function (nums) {
	nums.sort((a, b) => a - b);
	let res = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;
		let targetSum = 0 - nums[i];
		let left = i + 1;
		let right = nums.length - 1;
		while (right > left) {
			let sum = nums[right] + nums[left];
			if (sum < targetSum) {
				left++;
			} else if (sum > targetSum) {
				right--;
			} else {
				res.push([nums[i], nums[left], nums[right]]);
				while (nums[left] === nums[left + 1]) left++;
				while (nums[right] === nums[right - 1]) right--;
				left++;
				right--;
			}
		}
	}
	return res;
};

//input: array
//output: array

//edge cases

//iterate nums and find targetSum to the current
// create var left and right
//use while loop
//find the correct left and right by right-- and left++

// res=[[-1, -1, 2], ]
// [-4, -1, -1, 0, 1, 2]
// current= 1
// targetSum= 1
// left= 2
// right= 5
// sum=-1 +2=1

// nums[b]+ nums[c]=0-nums[a]

// nums[b]+ nums[c] = targetSum;........push
// nums[b]+ nums[c] > targetSum........right--
// nums[b]+ nums[c] < targetSum........left++
