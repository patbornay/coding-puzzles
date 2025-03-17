// returns the length of the longest unique substring
const lengthOfLongestUniqueSubstring1 = (s: string): number => {
    const charSet = new Set<string>(); // Store unique characters
    let left = 0, maxLength = 0; // Left pointer and max length tracker

    for (let right = 0; right < s.length; right++) { // Expand the unique substring window
        while (charSet.has(s[right])) { // if duplicate is found
            charSet.delete(s[left]); // remove leftmost character 
            left++; // move left pointer forward
        }
        charSet.add(s[right]); // add the current character
        maxLength = Math.max(maxLength, right - left + 1); // update max length
        // the reason we dont use charSet.length for maxLength calculation
        // because it can be temporarily incorrect when left moves
    }
    return maxLength; // return the longest length found
}
console.log(lengthOfLongestUniqueSubstring('abcabcbb')); // output: 3 ('abc')


// rep 17/03/25
const lengOfLongestUniqSubStr = (s: string): number => {
    const charSet = new Set<string>();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) { // this will keep shrinking the unique char set window untill we are back to uniqur characters
            charSet.delete(s[left]);
            left++; 
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1) // right - left is how we figure out what number of indexes the window covers 
        // the + 1 is because we are using zero based indexing
    }
}