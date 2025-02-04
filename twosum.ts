// Two sum solutions 

// naive solution
function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    let resultFound: boolean = false;
    for (let i = 0; i <= nums.length - 1 && !resultFound; i++){
        for (let k = 1; k <= nums.length - 1 && !resultFound; k++) {
            if (nums[i] + nums[k] == target && i !== k) {
                result = [i, k];
                resultFound = true;
            }
        }
    }
    return result;
};

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
