// 1796. Second Largest Digit in a String
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit.

//MY SOLUTION

var secondHighest = function (s) {
	let res = new Set();
	for (let i = 0; i < s.length; i++) {
		if (Number.isInteger(Number(s[i]))) {
			res.add(s[i]);
		}
	}
	res = [...res].sort((a, b) => a - b);
	return res[res.length - 2] || -1;
};

//iterate s and find numbers
//if numbers, store as max
//return max
