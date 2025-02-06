function removeElement(nums: number[], val: number): number {
    const newNums = nums.filter((num) => {
        return num !== val
    });
    newNums.sort();
    for (let i = 0; i < nums.length; i++){
        if (i < newNums.length) {
            nums[i] = newNums[i];
        } else {
            nums[i] = -1
        }
        
    }
    return newNums.length;
};