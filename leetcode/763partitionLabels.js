// 763. Partition Labels
// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]

//MY SOLUTION
var partitionLabels = function (s) {
	let res = [];
	let lastIndex = 0;
	let left = -1;
	for (let i = 0; i < s.length; i++) {
		let currentLast = s.lastIndexOf(s[i]);
		lastIndex = Math.max(lastIndex, currentLast);
		if (i === lastIndex) {
			res.push(i - left);
			left = i;
		}
	}
	return res;
};
//"c, aedbdedda"
// 0          9

//"ababcbaca, defegde, hijhklij"
//i=.      8        15.       23

//set last index=0
//find max last index
//if i===max last index-> push(i-left), set left=i
