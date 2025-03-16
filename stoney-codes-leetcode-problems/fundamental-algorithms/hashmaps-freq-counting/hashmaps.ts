// Hashmaps (or dictionaries in python) are for O(1) insertions, deletions and lookups
// good for
// freq counting
// fast lookups
// reducing nested loops

// examples:
// frequency counting
const mostFreqElement = (arr: number[]): number => {
    const freqMap: Record<number, number> = {};

    for( const num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1; 
    }

    let maxCount = 0, result = -1;
    for (const [key, value] of Object.entries(freqMap)) {
        if (value > maxCount) {
            maxCount = value;
            result = Number(key);
        }
    }
    return result;
}
console.log(mostFreqElement([1, 3, 2, 3, 3, 2, 1])); // Output: 3

// valid anagram check
const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) return false;

    const freq: Record<string, number> = {};

    for (const char of s) freq[char] = (freq[char] || 0) + 1;
    // example s is "aaabc" which maps to a: 3, b: 1, c: 1

    // example t is "aabbc"
    for (const char of t) {
        // each iteration we check if the letter exists 
        // if it doesnt we can easily say that they are not valid anagram
        if (!freq[char]) return false; 
        // otherwise we subtract a count
        // since s has b: 1 and t has b: 2, we will naturally get to a point
        // where freq[char 'b'] will be 0 and return false 
        freq[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false

// lookups have a constant O(1) lookup time

// example 3: two sum improved with maps from O(n^2) to O(n)
const twoSum = (nums: number[], target: number): number[] => {
    const numMap = new Map<number, number>();

    // each loop we are checking if numMap contains a value which
    // when subtracted from our target gives a specific value 'compliment'
    // if such a value exists in our map, return the current number i
    // and the index that is associated with the compliment
    // that was stored in our map
    // other wise add to our map the value nums[i] as a key and its index as its value
    // incase we encounter a complement further in to the array
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        numMap.set(nums[i], i);
    }
    return []
}
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// example 4: find the first non-repeating character
const firstUniqChar = (s: string): number => {
    const freq: Record<string, number> = {};

    // first pass to build a map counting all the letters
    for (const char of s) freq[char] = (freq[char] || 0) + 1;

    // second pass over the map and return the first instance of a 1 count
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) return i;
    }

    return -1;
}

console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2

// example 5 group anagrams 
const groupAnagrams = (strs: string[]): string[][] => {
    const map = new Map<string, string[]>();

    for (const word of strs) {
        // sort the current word
        const sortedWord = word.split("").sort().join("");
        // if the map doesnt have it as a key already
        // create a new entry
        if (!map.has(sortedWord)) map.set(sortedWord, []);
        // fetch the entry and push a new word to its collection
        map.get(sortedWord)!.push(word);
    }

    return Array.from(map.values());
}

// example 6
// optimising subarray problems with hashmaps 
// used to reduce nested loops O(n^2) to O(n)
const lengthOfLongestUniqueSubstringOptimised = (s: string): number => {
    const seen = new Map<string, number>();
    let maxLen = 0, left = 0;

    for (let right = 0; right < s.length; right++) {
        if (seen.has(s[right])) {
            left = Math.max(seen.get(s[right])! + 1, left);
        }
        seen.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(lengthOfLongestUniqueSubstringOptimised("abcabcbb")) // Output: 3
