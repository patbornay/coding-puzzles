// used when searching for pairs or conditions 
// examples: two sum in a sorted array 
const twoSumSorted = (arr: number[], target: number): number[] => {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return [arr[left], arr[right]];
        if (sum < target) left++;
        else right --;
    }

    return []
}

console.log(twoSumSorted([1,3,4,6,8,10], 10));

// fast & slow pointers (same direction) 
// example: detecting a cycle in a linked list where one pointer 
// is ahead and checking if it points back to its prev position 
// creating an infinite loop
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next; 
    }
}

function hasCycle(head: ListNode | null): boolean {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow?.next!;
        fast = fast.next.next!;

        if (slow === fast) return true; // Cycle detected
    }

    return false;
}

// Example Usage
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node1; // Creates a cycle

console.log(hasCycle(node1)); // Output: true

// merging two sorted arrays (same direction)
const mergeSortedArrays = (arrA: number[], arrB: number[]): number[] => {
    let i = 0, j = 0;
    const result: number[] = [];

    while(i < arrA.length && j < arrB.length) {
        if(arrA[i] < arrB[j]) result.push(arrA[i++]);
        else result.push(arrB[j++]);
    }
    return result.concat(arrA.slice(i)).concat(arrB.slice(j));
}

console.log(mergeSortedArrays([1,3,5], [2,4,6]));

// sliding window
const lengthOfLongestUniqueSubstring = (s: string): number => {
    const charSet = new Set<string>();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) { 
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

console.log(lengthOfLongestUniqueSubstring('abcabcbb')); // output: 3 ('abc')