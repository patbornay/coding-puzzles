function removeDuplicates(nums: number[]): number {
    let k = 2;
    for(let i = 2; i < nums.length; i++) {
        if(nums[i] !== nums[k-2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

// optimised solution
function removeDuplicates(nums: number[]): number {
    let count = 0, current = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1]){
            count = 0;
            nums[current++] = nums[i];
        }else {
            count++;
            if(count <= 1) nums[current++] = nums[i]
        }
    }
    return current
};

// todo explaination