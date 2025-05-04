// https://leetcode.com/problems/missing-number/description/

// input: nums = [3,0,1]
// output: 2

// 1. understanding the problem
// unsorted array, of n length, does not include negative numbers or zero
// the length of the array is also max value in the array, so an array of 5 will have
// 5 as the largest number

// 2. basic approach
// - using the length of nums (n)
// - iterate over nums, for each iteration starting from 0 and check that it is in nums
// example [0,1]
// 0th iteration, 0 is in the array
// 1st iteration, 1 is in the array
// 2nd iteration, 2 is not in the array, return 2 
// - we should increase the iteration range to be from 0 to n rather than 
//   0 to n - 1

// 3. improvements 
// - observation: would that mean given any array there will always be a missing number? 
//   example: [0,1] would produce 2 and it could never include 2, without missing 0 or 1
//            and if it included 0, 1 and 2, then we would be missing 3
//            so really if we managed to get to iteration n, return n dont search.
// -  would it help to sort the array? 
// - if we sort the array then we iterate once over the array to sort it using n log n sort
//   then iterate again, but for each iteration check that the value also exists in position nums[iteration]
//   example: for iteration 5, check nums[5] === 5, otherwise return 5
//   example: 0th iteration, check nums[0] === 0, otherwise return 0,
//   so we save ourselves from crawling the array for each value.
//   this would also catch duplicates

const missingNums = (nums: number[]): number => {
    const sortedNums: number[] = nums.sort(); // todo check this sorts correctly
    for (let i = 0; i < nums.length; i++) {
        if (sortedNums[i] !== i) return i;
    }
    return nums.length;
}