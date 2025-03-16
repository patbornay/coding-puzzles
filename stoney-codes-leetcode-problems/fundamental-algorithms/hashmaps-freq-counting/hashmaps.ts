// Hashmaps (or dictionaries in python) are for O(1) insertions, deletions and lookups

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