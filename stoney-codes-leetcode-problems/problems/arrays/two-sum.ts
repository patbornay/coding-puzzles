// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
//      Input: nums = [2,7,11,15], target = 9
//      Output: [0,1]
//      Explanation: Because nums[0] + nums [1] == 9, we return.[0, 1]
// Example 2:
//      Input: nums = [3,2,4], target = 6
//      Output: [1,2]
// Example 3:
//      Input: nums = (3,3), target = 6
//      Output: [0,1]
// Constraints:
// • 2 <= nums. length <= 10%
// • -10° <= nums ［1］ 《= 10°|
// • -10% <= target <= 10º
// • Only one valid answer exists

// optimal strat
// build a map of complements with index locations for example: nums = [7,9,3] target 10 
// 7 needs 3 to make ten 
// check map if we have a 3 mapped? nope
// make key value pair, key 7 and point at index for 7
// so when we hit 3 and need to find the 7 to make 10 
// we check the map and see that there is a 7 at index 0
// return index for 3 and index for 7 [2, 0] 

// optimised solution 
function twoSum(nums: number[], target: number): number[] {
    let numsMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; ++i) {
        const complement = target - nums[i];
        if (numsMap[complement] !== undefined) {
            return [numsMap[complement], i];
        }
        numsMap[nums[i]] = i;
    }
    return [];
}

// rep 23/5/25
function twoSum1(nums: number[], target: number): number[] {
    // setup a map that has a num in nums as the key and its index as the value
    let numsMap: Map<number, number> = new Map();

    // walk through nums, creating those mappings everytime we don't find a pair to make our target value
    // pair - given the current number we are looking at in nums, what sum would we need to reach target
    // if we do find the pair that would land give us the target value, 
    // then return its value along with the index of the current number we are looking at
    for (let i = 0; i < nums.length; ++i) {
        const complement = target - nums[i];
        if (numsMap[complement] !== undefined) {
            return [numsMap[complement], i];
        }
        numsMap[nums[i]] = i;
    }
    return [];
}