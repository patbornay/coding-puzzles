// Basic binary search implementation
// Time complexity: O(log n)
// Space complexity: O(1)
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}

// rep 19/03/25
const binarySearch12 = (nums: number[], target: number): number => {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return - 1;
}

// rep 18/03/25
const binarySearch11 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right)/ 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// rep 17/03/25
const binarySearch10 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // mid of the array is right index + left index for offsetting then dividing by 2
        const mid = Math.floor((right + left) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

// 16/03/25 rep
const binarySearch9 = (nums: number[], target: number): number => {
    let left = 0; // mark the left 'already searched' side of the array
    let right = nums.length; // mark the right 'already searched' side of the array
    while (left < right ) { // until our markers cross 
        const mid = Math.floor((left + right) / 2);  // calculate the middle value between the two markers 
        if (nums[mid] === target) return mid; // if the value at the mid index is what were looking for reurn the mid index
        if (nums[mid] < target) left = mid + 1; // if mid value is less than target then we can ignore any index less than mid
        else right = mid - 1; // mid is greater than target then we can set right to mid - 1 to ignore any index greater than mid - 1
    }
    return -1;
}

// 15/03/25 rep
const binarySearch8 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left+right)/2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

//10/03/25 rep
const binarySearch7 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
// nums is expected to be ordered
// time complexity of O(log n) best worst and avg case
// works by dividing an ordered list until only the target remains or nothing is found
// space complexity O(1) 

// 12/03/25 rep
const binarySearch6 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

// 13/03/25
const binarySearc5 = (nums: number[], target: number) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) /2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// SP O(1)
// TC O(log n)
// must be ordered input

// 11/03/rep
const binarySearch4 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1
    }

    return -1
}
// space complexity O(1)
// time complexity O(log n)
// requires an ordered input 

// 07/03/25 rep
// - nums is expected to be ordered
const binarySearch3 = (nums: number[], target: number): number => {
    let leftIndex = 0;
    let rightIndex = nums.length -1;

    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (nums[midIndex] === target) {
            return midIndex;
        }
        if (nums[midIndex] <= target) {
            leftIndex = midIndex +1;
        }
        else {
            rightIndex = midIndex -1;
        }
    }
    return -1
}

// 06/03/25 rep
// requirements: the provided array is sorted
// time complexity: O(log n) as it halves the search set each iteration, making it faster than linear
// so binary search works by 
// - noting the left most index starting at 0
// - noting the right most index starting at the end of the provided array
// - for each iteration while leftMostIndex doesnt exceed the rightMostIndex
// - noting the middle index, half of (left + right) / 2, rounded down
//    - if we only do right / 2 we will only ever get the middle of the whole array every iteration
//    - if we do (left + right) / 2 we offset the middle further up the array if left becomes a larger index value
//    - or we offset the middle further down the array if the right becomes a smaller index value
//    - conceptually visualising the left index shifting and then resulting in the correct middle index when (left + right) / 2 needs some work
//    - if the middle index value is the target return the index and end the search
//    - if the middle index value < target then shift the left most index to the middle index
//       - we don't care about anything between leftMostIndex and middle bc we know that 
//       - 1 - middle index value is not the value we are looking for
//       - 2 - the input array is sorted
//       - 3 - everything below MUST be less than the target which is no longer needed for this search
//    - if the middle index value > target then shift the right most index down to middle - 1
//       - this is bc we know the the middle index and everything to the right is not going to match
//       - because the input is sorted
// - if we have leftMostIndex being greater then rightMostIndex then we stop and exit with -1 bc we didnt find the value
const binarySearch2 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); 
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1
}

// 05/03/25 rep
// returns the index of where the target is or -1 if not found
const binarySearch1 = (nums: number[], target: number): number => {
    let leftMostIndex = 0;
    let rightMostIndex = nums.length -1;

    while (leftMostIndex <= rightMostIndex) {
        const middleIndex = Math.floor((leftMostIndex + rightMostIndex) / 2);
        if (nums[middleIndex] === target) {
            return middleIndex;
        }
        // if the middle value is less than the target
        // then we know everything to the left of the middleIndex is too low and we can ignore them
        // set the new leftMost index to the current middle + 1 (+1 because we already checked the middle)
        if (nums[middleIndex] < target) {
            leftMostIndex = middleIndex + 1;
        }
        // else the middle value must be > than the target
        // then we know everything to the right of middleIndex is too high and we can ignore them
        // set the new rightMost index to the current middle - 1 (-1 because we already checked the middle)
        else {
            rightMostIndex = middleIndex - 1;
        }
    }
    return -1;
}