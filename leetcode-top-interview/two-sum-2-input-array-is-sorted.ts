var twoSumSortedInput = function (numbers, target) {
  let left = 0, right = numbers.length - 1;

  while (left < right) {
    let total = numbers[left] + numbers[right];

    // here instead of a map, we use a sliding window
    // worst case (the target can only be made by pairing the two very middle elements)
    // is it faster than unsorted? 
    // saves space from using a map, but just a different approach
    // still making one pass over nums in the worst case 
    if (total === target) {
      return [left + 1, right + 1];
    } else if (total > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};

const twoSumSortedInput1 = (nums: number[], target: number) => {
    let left: number = 0, right: number = nums.length -1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return [];
}
