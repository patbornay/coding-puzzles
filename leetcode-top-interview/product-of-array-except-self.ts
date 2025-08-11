/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output; 
};

// optimised solution
var productExceptSelf = function(nums) {
    let n = nums.length;
     let answer = new Array(n).fill(1);
 
     // Compute prefix product
     let leftProduct = 1;
     for (let i = 0; i < n; i++) {
         answer[i] = leftProduct;
         leftProduct *= nums[i];
     }
 
     // Compute suffix product and multiply with answer array
     let rightProduct = 1;
     for (let i = n - 1; i >= 0; i--) {
         answer[i] *= rightProduct;
         rightProduct *= nums[i];
     }
 
     return answer;
 };

 //todo explaination