/*
Contains duplicate: Given an int array 'nums', return 'true' if any value appears at least twice
in the array and return 'false' if every element is distinct

Example 1:
Input: nums = [1,2,3,1]
Output: true

Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false

Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * 9/4/25
 * My notes 
 * - create a map of all values with the key being the number and the value being set to 0
 * - if the number is already a key in the map, increment its value
 * - iterate through the map (const [key, value] of Object.entries(freqMap))
 * - if a value is greater than 0 return true else false 
 * 
 * 
 * Improvement
 * - we actually dont even need to iterate over the whole list of nums, we can exit the second 
 * a value already exists in the map and return true, otherwise return false
 */
const containsDupelicate1 = (nums:number[] ): boolean => { 
    const freqMap: Record<number, number> = {};

    for (const num of nums) {
        if (freqMap[num] === undefined) {
            freqMap[num] = 0;
        } else {
            return true;
        }
    }
    return false;
}

// Faster solution
// - Use map and .has() / .set() with traditional for loop? is that faster? 
function containsDuplicateOptimal(nums: number[]): boolean {
    const numsFrequency = new Map<number, number>(); // key is the number, value is the requency

    for (let i = 0; i < nums.length; i++) {
        if (numsFrequency.has(nums[i])) {
        return true;
        } else {
        numsFrequency.set(nums[i], 1);
        }
    }

    return false;
};
