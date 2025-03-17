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