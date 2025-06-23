// https://leetcode.com/problems/missing-number/description/
// all numbers are unique 

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
    const sortedNums: number[] = nums.sort((a,b) => a - b); // todo check this sorts correctly
    for (let i = 0; i < nums.length; i++) {
        if (sortedNums[i] !== i) return i; // the missing num is the index
    }
    return nums.length;
}

const missingNumsOptimised = (nums: number[]): number => {
    let missingNum = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missingNum += i - nums[i];
        // basically if we know 3 is the length then by subtracting all the numbs 
        // we should get 0 if all nums are present [0,1,2] 
        // --> (i:0 - nums[0]: 0 = 0, ) 
        // --> (i:1 - nums[1]: 1 = 0, ) 
        // --> (i:2 - nums[2]: 2 = 0, ) 
        // therefore res never changes and remains the init value of 3, now we know 3 is missing
    }
    return missingNum;
}

const missingNumsOptimised1 = (nums: number[]): number => {
    let missingNum = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missingNum += i - nums[i];
        // we subtract nums[i] from i and then add that difference to nums.len
        // if all nums exist expect nums.len then all the sums will cancel out and 
        // we end up with nums.len, otherwise we end up with the number that is missing 
        // e.g. nums = [0,1,2], i(0) - 0 = 0 >> 3 + 0 = 3, i(1) - 1 = 0 >> 3 + 0 = 0,
        // i(2) - 2 = 0 >> 3 + 0 = 3.
    }
    return missingNum;
}

const missingNums5 = (nums: number[]): number => {
    // sort so that index must match number, catching missing numbers
    const sortedNums: number[] = nums.sort((a,b) => a - b);
    // iterate to identify missing numbers
    for (let i = 0; i < nums. length; i++) {
        if (sortedNums[i] !== i) return i; 
    }
    return nums.length; // bc if all are provided matching index then the only number missing is n
}

const missingNums4 = (nums: number[]): number => {
    // sort so that index must match number, catching missing numbers 
    const sortedNums: number[] = nums.sort((a,b) => a - b);
    // iterate to identify missing numbers
    for (let i = 0; i < nums.length; i++) {
        if (sortedNums[i] !== i) return i;
    }
    return nums.length;
}

const missingNUms3 = (nums: number[]): number => {
    const sortedNums: number[] = nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (sortedNums[i] !== i) return i;
    }
    return nums.length;
}

const missingNums2 = (nums: number[]): number => {
    const sortedNums: number[] = nums.sort();
    for (let i = 0; i < nums.length; i++) {
        // by sorting the array we can state the i will always === sortedNums[i] if it is not missing
        if (sortedNums[i] !== i) return i; 
    }
    return nums.length;
}