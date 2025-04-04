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