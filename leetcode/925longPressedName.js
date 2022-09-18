// 925. Long Pressed Name
// Easy

// 1843

// 268

// Add to List

// Share
// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.

// Constraints:

// 1 <= name.length, typed.length <= 1000
// name and typed consist of only lowercase English letters.

//MY SOLUTION

var isLongPressedName = function (name, typed) {
	let pointer = 0;
	for (let i = 0; i < typed.length; i++) {
		if (typed[i] === name[pointer]) {
			pointer++;
		} else if (typed[i] === name[pointer - 1]) {
			continue;
		} else {
			return false;
		}
	}
	return pointer === name.length;
};

//iterate typed
//compare letter of name and current typed letter, and check if current is same as previous
//no, return false

//||(typed[i-1]!==typed[i])

// "alex"
//    ^
// "aaleex"
//     ^

// "leelee"
//      ^
// "lleeelee"
//        ^
//1l

// "alexd"
// "ale"
