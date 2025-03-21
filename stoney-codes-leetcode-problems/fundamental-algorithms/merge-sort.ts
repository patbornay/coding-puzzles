// time complexity
// - best/avergae/worst O(n log n)
// space complexity
// - O(n) due to the need for another array to merge

// not inplace sorting
// doesnt require additional space when sorting linked lists

const mergeSort = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
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


// rep 22/03/25
const mergeSort6 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort6(nums.slice(0, mid));
    const right = mergeSort6(nums.slice(mid));

    return merge6(left, right);
}

const merge6 = (left: number[], right: number[]): number[] => {
    let results: number[] = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            results.push(left[i++]);
        } else {
            results.push(right[j++]);
        }
    }

    return results.concat(left.slice(i).concat(right.slice(j)));
}

// rep 20/03/25
const mergeSort5 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort5(nums.slice(0, mid));
    const right = mergeSort5(nums.slice(mid));

    return merge5(left,right);
}

const merge5 = (left: number[], right: number[]): number[] => {
    let result: number[] = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i).concat(right.slice(j)));
}

// rep 18/03/25
const mergeSort4 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort4(nums.slice(0, mid));
    const right = mergeSort4(nums.slice(mid));

    return merge4(left, right);
}

const merge4 = (left:number[], right:number[]) => {
    let result: number[] = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i).concat(right.slice(j)));
}

// rep 17/03/25
const mergeSort3 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort3(nums.slice(0, mid));
    const right = mergeSort3(nums.slice(mid));

    return merge3(left, right);
}

const merge3 = (left: number[], right: number[]): number[] => {
    let result: number[] = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i).concat(right.slice(j)));
}



// rep 16/03/25
const mergeSort2 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const mid = Math.floor((nums.length)/ 2);
    const left = mergeSort2(nums.slice(0, mid));
    const right = mergeSort2(nums.slice(mid))

    return merge(left, right);
}

const merge2 = (left: number[], right: number[]) => {
    let result: number[] = [], i = 0, j = 0;

    while (i < left.length && j < right.length) { // iterating one by one on both arrays, pushing to results until we hit the end of either left or right
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i).concat(right.slice(j))); // join the remainder of the arrays to the results for futher sorting, they should all be in order now
}
// time O(n log n)
// space O(n)

// rep 15/03/25 
const mergeSort1 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort1(nums.slice(0, mid));
    const right = mergeSort1(nums.slice(mid));

    return merge1(left , right);
}

const merge1 = (left: number[], right: number[]): number[] => {
    let result: number[] = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i).concat(right.slice(j)));
}



// execution path 
// mergeSort 0th rc call gets [6,3,8,5,2]
//  - mid = 2
//  - 1st recursive call (1st rc) mergeSort(nums.slice(0, 2)) slice result [6,3,8]
//  - pending right recursive call mergeSort(nums.slice(2)) slice result [5,2]

// mergeSort 1st rc mergeSort call gets [6,3,8]
//  - mid = 1
//  - 3rd rc mergeSort(nums.slice(0, 1)) slice result [6,3]
//  - pending right mergeSort(nums.slice(1)) slice result [8]

// mergeSort 3rd rc mergeSort call gets [6,3]
//  - mid = 0
//  - left 4th rc mergeSort(nums.slice(0, 0)) slice result [6]
//  - pending rc mergeSort(nums.slice(0)) slice result[3]

// mergeSort 4th rc mergeSort call gets [6]
// - immediately return nums, no left/right rc calls
// - leng === 1 return [6]
// mergeSort 3rd rc left mergeSort call complete! mergeSort 2nd rc call continues to right mergeSort call

// mergeSort 5th rc (pending right mergeSort in 3rd rc) gets [3]
// - immediately return nums, no left/right rc calls
//  - leng === 1 return [3]
// mereSort 3rd rc right mergeSort call complete! mergeSort 2nd rc continues to merge() call

// mergeSort 3rd rc continued to merge call
// - merge([6], [3])
// - merge (res [], i = 0, j = 0)
//      - while i < left.legnth (1) && j < right.length (1)
//          - if (left[0] < right[0]) FALSE
//          - results.push(right[j and increment]) // results contains [3] j = 1
//      - exit loop bc j is not longer < 1
//      - result.concat(left.slice(i)).concat(right.slice(j));
//          - result.concat(left.slice(0), right.slice(1));
//          - result.concat([6], []) // bc we only incremented j which also takes the last value in right array
//      - return [3, 6]; SORTED!!
// mergeSort 3rd rc completed! now we continue to the 1st mergeSort call

// mergeSort 1st rc mergeSort call continued 
// - mid = 1
// - left = [3,6]
// - right = mergeSort(nums.slice(mid)) // nums.slice([8])

// mergeSort right 6th rc call
// - immediately return nums, no left/right rc calls
// - leng === 1 return [8]

// mergeSort 1st rc mergeSort continued
// - mid = 1
// - left = [3,6]
// - right = [8]
// call merge([3,6], [8])

// mergeSort 1st rc left merge call ([3,6], [8])
// - res [], i = 0, j = 0
// - while i < left.leng (2) && j < right.leng (1)
//      - if (left[0] < right[0]) TRUE add left[0] to res // add 3 to res, i incremented to 1
//      - if (left[1] < right[0]) TRUE add left[1] to res // add 6 to res, i incremented to 2
// - exit loop i is NOT < left.leng 
// return [3,6].concat(left.slice(i), right.slice(j)); // [3,6].concat([], [8])

// mergeSort 0th rc call
// mid = 2
// left = [3,6,8]
// right = mergeSort([5,2])

// mergeSort 7th rc right mergeSort([5,2])
// mid = 1
// left = mergeSort([5]) // 8th rc immediate returns 5
// right = mergeSort([2]) // 9th rc immediate returns 2
// merge([5], [2])
// - res [], i = 0, j = 0
// - while i < left.leng (1) && j < right.leng (1)
//      - if (left[0] < right[0]) FALSE
//      - else add right[0] to res // res is now [2]
// - exit loop 
// - return [2].concat(left.slice(i), right.slice(j)) // [2].concat([], [5]);
// 7th rc complete! return to 0th rc

// mergeSort 0th rc call
// mid = 2
// left = [3,6,8]
// right = [2,5]
// return merge([3,6,8], [2,5])
// - merge call
//      - res [], i = 0, j = 0
//      - while i < left.leng (3) && j < right.leng (2)
//          - if (left[0] < right[0]) FALSE // else add 2 to res and increment j to 1
//          - if (left[0] < right[1]) TRUE add left[0] to res // add 3 to res, i incremented to 1 // res [2,3]
//          - if (left[1] < right[1]) FALSE // else add 5 to res and increment j to 2
//      - exit loop j is NOT < 2 
// - return res.concat(left.slice(i), right.slice(j)) // [2,3,5].concat(left.slice(1), right.slice(2)) // [2,3,5].concat([6,8], []) // [2,3,5,6,8]

// mergeSort 0th rc call return a SORTED ARRAY! [2,3,5,6,8]

// how is this method better than insert sort or selection sort? 
// - merge sort makes less passes as we are dividing the array all the way down to a single element
// - then as it is put back together we are sorting each smaller section
// - as we continue back up we have most elements sorted, 
//      - so even if the smallest element is on the very end of the array, it will keep getting pushed to the front
//      - of each chunk as we go back up the call stack
//      - untill we reach the very end, yes this still means a lot of comparisions BUT far less than insertion which MUST
//      - compare with each element in the sorted array to identify where the next unsorted element should be in the sorted array