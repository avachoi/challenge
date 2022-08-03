// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

//MY SOLUTION

var longestConsecutive = function(nums) {
    if(nums.length===0)  return 0
    let sorted= nums.sort((a,b)=>a-b);
    let set=new Set();
    sorted.forEach((num)=> set.add(num))
    let array=[...set]
    let prev=array[0]
    let max=1;
    let count=1
    for(let i=1; i<array.length; i++){
        if(prev+1===array[i]){
            count++
        }else if(){
            count=1
        }
        prev=array[i];
        max=Math.max(max, count)
    }
    return max
};

