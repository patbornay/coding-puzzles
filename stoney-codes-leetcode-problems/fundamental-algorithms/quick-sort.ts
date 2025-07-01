// divide and conquer sorting algo
// marks a pivot point and recursively sorts the partitions that
// are on either side of the pivot point

const quickSort = (arr: number[]): number[] => {
    if(arr.length <= 1) return arr; // Base case: already sorted

    const pivot = arr[arr.length - 1] // Choose last element as pivot
    const left: number[] = [];
    const right: number[] = [];

    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements smaller than pivot
        } else {
            right.push(arr[i]); // Elements greater than or equal to pivot
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const nums = [5, 3, 8, 4, 2, 7, 1, 6];
console.log(quickSort(nums));

// Base case: if the array is size one or zero it is already sorted
// Pivot selection: choose the last element as the pivot
// Partitioning: 
//      - Elements smaller than the pivot go to the 'left'
//      - Elements greater than the pivot go to the 'right' array
// Recursion: apply quicksort to 'left' and 'right' recursively
// Concatenation: merge sorted 'left', pivot, and sorted 'right'

// Time complexity
// - best / avg case: O(n log n) (balanced partitioning)
// - worst case: O(n^2) (when the smallest or largest element is always chosen
// as the pivot)

// Improvements 
// - Choose better pivots (median or three or random pivot)
// - Use in-place partitioning (lomuto or hoare's partition scheme)

// rep 15 1/7/25
const quickSort15 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    //piv, left, right
    let pivot = nums[nums.length - 1], left: number[] = [], right: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }
    return [...quickSort14(left), pivot, ...quickSort(right)];
}

// rep 14 23/6/25
const quickSort14 = (nums: number[]): number[] => {
    // basecase
    if (nums.length <= 1) return nums;

    // piv, left store, right store
    let pivot = nums[nums.length - 1], left: number[] = [], right: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }
    return [...quickSort13(left), pivot, ...quickSort(right)];
}

// rep 13 5/6/25
const quickSort13 = (nums: number[]): number[] => {
    // basecase 
    if (nums.length <= 1) return nums;
    
    // piv, left store, right store
    let pivot = nums[nums.length - 1], left: number[] = [], right: number[] = [];

    // iterate and allocate
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }

    // recursive return 
    return [...quickSort13(left), pivot, ...quickSort13(right)];
}

// rep 12 4/6/25
const quickSort12 = (nums: number[]): number[] => {
    // base case
    if (nums.length <= 1) return nums;

    // left and right lists
    const left: number[] = [], right: number[] = [];
    // some arbitrary pivot point
    let pivot: number = nums[nums.length - 1];

    // move items into either < or >=, (left and right lists respectively)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }

    // recursive call
    return [...quickSort12(left), pivot, ...quickSort12(right)];
}


// rep 11 23/5/25
const quickSort11 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;
    const left: number[] = [], right: number[] = [];
    let pivot: number = nums[nums.length - 1];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }
    return [...quickSort11(left), pivot, ...quickSort11(right)];
}

// rep 10 23/5/25
const quickSort10 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;
    const pivot = nums[nums.length -1];
    const left: number[] = [], right: number[] = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }
    return [...quickSort10(left), pivot, ...quickSort10(right)];
}
//  Time complexity
//  avg case / best case O(n log n)
//  - each level of recursion splits the array into two laves
//  - there are log n levels of recursion (like binary tree height)
//  - at each level, you scan all n elements to split them into left and right 
//  total time O(n) per level * log n levels = O(n log n)


// rep 9 24/4/25
const quickSort9 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const pivot = nums[nums.length -1];
    const left: number[] = [], right: number[] = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }
    return [...quickSort9(left), pivot, ...quickSort9(right)];
}

// rep 8 12/4/25
const quickSort8 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const pivot: number = nums[nums.length - 1];
    const left: number[] = [], right: number[] = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }
    return [...quickSort8(left), pivot, ...quickSort8(right)];
}

// rep 7 8/4/25
const quickSort7 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const pivot = nums[nums.length - 1];
    const left: number[] = [], right: number[] = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) left.push(nums[i])
        else right.push(nums[i]);
    } 
    return [...quickSort7(left), pivot, ...quickSort7(right)];
}

// rep 6 4/4/25 
const quickSort6 = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const pivot = nums[nums.length - 1];
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }
    return [...quickSort6(left), pivot, ...quickSort6(right)];
}

// rep 5 1/04/25
const quickSort5 = (nums: number[]): number[] => {
    if (nums.length <= 1 ) return nums;

    const pivot = nums[nums.length - 1];
    const left: number[] = [], right: number[] = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }
    return [...quickSort5(left), pivot, ...quickSort5(right)];
}

// rep 4 24/03/25
const quickSort4 = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    // iterate and shift elements 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// rep 22/03/25
const quickSort3 = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr; // base case 

    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort3(left), pivot, ...quickSort3(right)];
}

// rep 21/03/25
const quickSort2 = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr; // base case

    const pivot = arr[arr.length - 1]; // end of the array
    const left: number[] = [];
    const right: number[] = [];

    // loop through and asplit the array based on if it < or >= than pivot
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // recursively do it again  pivot should be the middle
    // then when we come back up the stack everythign gets stictched together in order
    return [...quickSort2(left), pivot, ...quickSort2(right)];
}

// rep 17/03/25
// Time complexity
// - best / avg case: O(n log n) (balanced partitioning)
// - worst case: O(n^2) (when the smallest or largest element is always chosen
// as the pivot)
const quickSort1 = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort1(left), pivot, ...quickSort(right)];
} 