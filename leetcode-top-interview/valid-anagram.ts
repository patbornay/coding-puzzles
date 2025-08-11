var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counter = new Map();

    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!counter.has(char) || counter.get(char) === 0) {
            return false;
        }
        counter.set(char, counter.get(char) - 1);
    }

    return true;    
};

// optimised
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let count = new Array(26).fill(0);  // For lowercase letters

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }

    return count.every(val => val === 0);
};

// todo explaination