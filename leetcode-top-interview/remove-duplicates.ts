// naive solution
function removeDuplicates(nums: number[]): number {
    const newNums = nums.filter((value, index, array) => array.indexOf(value) === index);
    newNums.forEach((value, index) => nums[index] = value);
    return newNums.length;
};

// optimal solution
function removeDuplicates(nums: number[]): number {
    let p = 0
    
    for (let i = 0; i <= nums.length -1; i++) {
        if (nums[i] !== nums[p]) {
            p++
            nums[p] = nums[i]
        }
    }

    return p + 1
    
};