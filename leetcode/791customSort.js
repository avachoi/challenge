// 791. Custom Sort String
// You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

// Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

// Return any permutation of s that satisfies this property.

// Example 1:

// Input: order = "cba", s = "abcd"
// Output: "cbad"
// Explanation:
// "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".
// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
// Example 2:

// Input: order = "cbafg", s = "abcd"
// Output: "cbad"

//MY SOLUTION

var customSortString = function (order, s) {
	let obj = {};
	[...s].forEach((char) => (obj[char] = (obj[char] || 0) + 1));
	let res = "";

	for (let i = 0; i < order.length; i++) {
		if (obj[order[i]]) {
			for (let j = 0; j < obj[order[i]]; j++) {
				res += order[i];
			}
			delete obj[order[i]];
		}
	}

	while (Object.keys(obj).length > 0) {
		for (let key in obj) {
			if (obj[key]) {
				res += key;
				obj[key]--;
			} else {
				delete obj[key];
			}
		}
	}

	return res;
};

//create new order of S according to the order string
//add remaining cha of S

//iterate order and find same cha in S with current char of order
//yes, concatenate to new array, and remove from S

//return new array+ S
