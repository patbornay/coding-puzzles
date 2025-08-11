function majorityElement(nums: number[]): number {
    const numsMap = new Map<number, number>();
    let max = 0;
    nums.forEach((value) => {
        if(numsMap[value] === undefined) {
            numsMap[value] = 1;
        } else {
            numsMap[value] = numsMap[value] + 1; 
        }
        if (numsMap[value] > nums.length / 2) {
            max = value;
            return value;
        }
    });
    return max;
};

// optimised approach
function majorityElement(nums: number[]): number {
    let majority = nums[0];
   let votes = 0;
 
   for (let i = 0; i < nums.length; i++) {
     if (majority === nums[i]) {
       votes++;
     } else {
       votes--;
       if (votes < 0) {
         majority = nums[i];
         votes = 0;
       }
     }
   }
 
   return majority;
 };