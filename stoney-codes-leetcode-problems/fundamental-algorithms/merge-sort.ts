// time complexity
// - best/avergae/worst O(n log n)
// space complexity
// - O(n) due to the need for another array to merge

// not inplace sorting
// doesnt require additional space when sorting linked lists

const mergeSort = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const  left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));

    return merge(left, right);
}

const merge = (left: number[], right: number[]) => {
    let result: number[] = [], i = 0, j = 0;
    
    while( i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i).concat(right.slice(j)));
}

console.log(mergeSort([6, 3, 8, 5, 2]));
// execution path 
// mergeSort gets [6,3,8,5,2]
//  - mid = 2
//  - left 1st recursive call (1st rc) mergeSort(nums.slice(0, 2)) slice result [6,3,8]
//  - right 1st recursive call (2nd rc) mergeSort(nums.slice(2)) slice result [5,2]

// mergeSort left 1st rc gets [6,3,8]
//  - mid = 1
//  - left 2nd rc mergeSort(nums.slice(0, 1)) slice result [6,3]
//  - right 2nd rc mergeSort(nums.slice(1)) slice result [8]

// mergeSort left 2nd rc gets [6,3]
//  - mid = 0
//  - left 3rd rc mergeSort(nums.slice(0, 0)) slice result [6]
//  - right 3rd rc mergeSort(nums.slice(0)) slice result[3]

// mergeSort left 3rd rc gets [6]
// - leng === 1 return [6]

// mergeSort right 3rd rc gets [3]
//  - leng === 1 return [3]

// mergeSort left 2nd rc continued
// - merge([6], [3])
// - merge (res [], i = 0, j = 0)
//      - while i < 1 && j < 1
//          - if (left[0] < right[0]) result.push(left[i++]); // result is now [6] i is incremented
//      - exit loop
//      - result.contact(left.slice(i)).concat(right.slice(j));
//      - this basically merges the remaining elements to results