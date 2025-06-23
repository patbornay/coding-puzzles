// Given the array nums, for each nums [i] find out how many numbers in the array are smaller than it. That is, for each nums [i] you have to count the number of valid j's such that j != i and nums [j] < nums [i] •
// Return the answer in an array.
// Example 1:
//      Input: nums = [8,1,2,2,3]
//      Output: [4,0,1,1,3]
// Explanation:
//      For nums [0]=8 there exist four smaller numbers than it (1, 2, 2 and 3) .
//      For nums [1]=1 does not exist any smaller number than it.
//      For nums (2]=2 there exist one smaller number than it (1) .
//      For nums [3]=2 there exist one smaller number than it (1) •
//      For nums [4]=3 there exist three smaller numbers than it (1, 2 and 2) .
// Example 2:
//      Input: nums = [6,5,4,8]
//      Output: [2,1,0,3]
// Example 3:
//      Input: nums = [7,7,7,7]
//      Output: [0,0,0,0]
// Constraits: 
//      2 <= nums.length <= 500
//      0 <= nums[i] <= 100

// solution
// iterate over nums, for each num in nums iterate over nums again counting if num is > than the comparison num
// skip the index that is the same as the current num's index

// optimisation
// sort the array, then iterate through the sorted array and for each value return its index
// example
//      [8,1,2,2,3] >> [1,2,2,3,8]
//      then mapping will result in [0,1,1,3,4]
// you may wonder how the 2nd '2' is also resulting in 1, when its index value is higher
// well thats because the js indexOf(value) will stop when it first finds a match, so duplicates will end up on the earliest index always.

const smallerNumbersThanCurrent = (nums: number[]): number[] => {
    const sorted = nums.sort((a,b) => a - b);
    return nums.map((v) => sorted.indexOf(v));
} 

// rep 3 24/6/25

const smallerNumbersThanCurrent3 = (nums: number[]): number[] => {
    const sorted = nums.sort((a,b) => a - b);
    // return an array of index of all nums, dupes will all have the 'same' index
    return nums.map((v) => sorted.indexOf(v));
}

// rep 2 4/6/25

const smallerNumbersThanCurrent2 = (nums: number[]): number[] => {
    const sorted = nums.sort((a,b) => a - b);
    return nums.map((v) => sorted.indexOf(v));
}

// rep 23/5/25

// original solution
// iterate over nums, for each num iterate over nums again counting if num is > the comparision num
// skip the index that is the same as the current num's index

// optimised solution
// sort the array nlogn then iterate over then for each number (n) return the index of that value 
// doesnt matter if theyre duplicates 

const smallerNumbersThanCurrent1 = (nums: number[]): number[] => {
    const sorted = nums.sort((a,b) => a - b);
    return nums.map((v) => sorted.indexOf(v));
} 