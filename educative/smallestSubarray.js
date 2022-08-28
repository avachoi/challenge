// Smallest Subarray With a Greater Sum (easy)
// Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// Example 1:

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// Example 2:

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// Example 3:

// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1] or [1, 1, 6].

//MY SOLUTION
const smallest_subarray_sum = function (s, arr) {
	// TODO: Write your code here
	let minLength = arr.length;
	let sum = 0;
	let firstIdx = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		while (sum >= s) {
			minLength = Math.min(minLength, i - firstIdx + 1);
			sum -= arr[firstIdx];
			firstIdx++;
		}
	}

	return minLength;
};

//create variable sum
//iterate arr and add current to sum
//if sum >= s, save length of the sub
//sum-= first el of sub
//length--
//if still sum >= s, keep going

//return minlength
