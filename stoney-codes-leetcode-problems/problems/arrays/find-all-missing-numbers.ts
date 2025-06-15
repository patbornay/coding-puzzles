// 448. Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums [1) is in the range [1, n], return an array of all the integers in the range (1, n] that do not appear in
// nums.
// Example 1:
//      Input: nums = [4,3,2,7,8,2,3,1]
//      Output: (5,6]
// Example 2:
//      Input: nums = [1,1]
//      Output: (2)
// Constraints:
// • n == nums. length
// • 1 <= n <= 105|
// • 1 <= nums [1] <= n
// Follow up: Could you do it without extra space and in 0(n) runtime? You may assume the returned list does not count as extra space

// Sort nums (n log n operations), then iterate each value should be equal to the iterator + 1 (bc of zero based indexing)
// continually add to result array for every time iterator + 1 is not equal to nums[iterator] (n operations)

//