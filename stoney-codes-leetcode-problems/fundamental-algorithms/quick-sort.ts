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