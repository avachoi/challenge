// 1347. Minimum Number of Steps to Make Two Strings Anagram
// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

// Example 1:

// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
// Example 2:

// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
// Example 3:

// Input: s = "anagram", t = "mangaar"
// Output: 0
// Explanation: "anagram" and "mangaar" are anagrams.

// Constraints:

// 1 <= s.length <= 5 * 104
// s.length == t.length
// s and t consist of lowercase English letters only.

// my solution
var minSteps = function (s, t) {
	let array = new Array(26).fill(0);
	for (let i = 0; i < s.length; i++) {
		array[s.charCodeAt(i) - "a".charCodeAt()] =
			(array[s.charCodeAt(i) - "a".charCodeAt()] || 0) + 1;
	}
	console.log(array, array.length);
	for (let j = 0; j < t.length; j++) {
		array[t.charCodeAt(j) - "a".charCodeAt()] =
			(array[t.charCodeAt(j) - "a".charCodeAt()] || 0) - 1;
	}
	console.log(array);
	let count = 0;
	for (let k = 0; k < array.length; k++) {
		if (array[k] !== 0) {
			count += Math.abs(array[k]);
		}
	}
	return count / 2;
};

//create 26 el array
//count freq of each char in s
//iterate t and decrement s
//sum of -n and +n
