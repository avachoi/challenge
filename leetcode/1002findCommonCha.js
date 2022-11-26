// 1002. Find Common Characters
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

//MY SOLUTION
var commonChars = function (words) {
	let first = words[0];
	let res = [];
	let common = true;
	for (let i = 0; i < first.length; i++) {
		let cha = first[i];
		for (let j = 1; j < words.length; j++) {
			let word = words[j];
			if (word.indexOf(cha) === -1) {
				common = false;
				break;
			}
			words[j] = word.replace(cha, "");
		}
		if (common) {
			res.push(cha);
		}
		common = true;
	}
	return res;
};
