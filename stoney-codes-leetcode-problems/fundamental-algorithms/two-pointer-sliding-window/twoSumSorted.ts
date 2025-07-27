const twoSumSorted3 = (nums: number[], target: number): number[] => {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) return [nums[left], nums[right]];
        if (sum < target) left++;
        else right--;
    }
    return [];
    // a sub-optimal case
    // [1,1,1,1,1,2,9] target 11
    // the sum first will be 1 + 9 = 10
    // and will keep incrementing left untill it reacts 2 + 9 = 11
    // maybe a check to see if left value is unique i.e. sum changes
    // like an early break point
}

const twoSumSorted2 = (nums: number[], target: number): number[] => {
    let left = 0, right = nums.length -1 ;

    // traverse the nums, left incrementing through and right decrementing through
    // if the sum of left and right is the target return
    // if the sum < target move left up otherwise move right down 
    // this works bc nums is sorted, if it wasnt we wouldnt know which pointer to move 
    // bc we cant say moving a pointer will bring us closer to the target sum
    // this way we only traverse the array once.
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) return [nums[left], nums[right]];
        if (sum < target) left++;
        else right --;
    }

    return []
}

const twoSumSorted1 = (nums: number[], target: number): number[] => {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) return [nums[left], nums[right]];
        if (sum < target) left++;
        else right --;
    }

    return []
}