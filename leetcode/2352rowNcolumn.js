// 2352. Equal Row and Column Pairs
// Given a 0-indexed n x n integer matrix grid, return the number of pairs (Ri, Cj) such that row Ri and column Cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e. an equal array).

// Example 1:

// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]
// Example 2:

// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

//MY SOLUTION

var equalPairs = function (grid) {
	let count = 0;
	let row = {};
	grid.forEach((el) => (row[el] = (row[el] || 0) + 1));
	let col = [];
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (col[j] === undefined) col[j] = [];
			col[j][i] = grid[i][j];
		}
	}
	col.forEach((el) => row[el.join(",")] && (count += row[el.join(",")]));
	return count;
};

//create objs for row
//create col array from grid
//iterate col and check it there are same property in row
//same, count++
