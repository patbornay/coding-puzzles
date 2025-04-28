var minWindow = function(s, t) {
    if (s.length < t.length) {
        return "";
    }

    const charCount = new Map();
    for (const ch of t) {
        charCount.set(ch, (charCount.get(ch) || 0) + 1);
    }

    let targetCharsRemaining = t.length;
    let minWindow = [0, Number.POSITIVE_INFINITY];
    let startIndex = 0;

    for (let endIndex = 0; endIndex < s.length; endIndex++) {
        const ch = s[endIndex];
        if (charCount.has(ch) && charCount.get(ch) > 0) {
            targetCharsRemaining--;
        }
        charCount.set(ch, (charCount.get(ch) || 0) - 1);

        if (targetCharsRemaining === 0) {
            while (true) {
                const charAtStart = s[startIndex];
                if (charCount.has(charAtStart) && charCount.get(charAtStart) === 0) {
                    break;
                }
                charCount.set(charAtStart, (charCount.get(charAtStart) || 0) + 1);
                startIndex++;
            }

            if (endIndex - startIndex < minWindow[1] - minWindow[0]) {
                minWindow = [startIndex, endIndex];
            }

            charCount.set(s[startIndex], (charCount.get(s[startIndex]) || 0) + 1);
            targetCharsRemaining++;
            startIndex++;
        }
    }

    return minWindow[1] >= s.length ? "" : s.slice(minWindow[0], minWindow[1] + 1);    
};

// optimised approach
var minWindow = function(s, t) {
    let n = s.length;
    let m = t.length;
    let minlen = Infinity;
    let sIndex = -1;
    let hashArray = new Array(256).fill(0);
    let count = 0;

    let l = 0;
    let r = 0;

    for (let i = 0; i < m; i++) {
        hashArray[t.charCodeAt(i)]++;
    }

    while (r < n) {
        if (hashArray[s.charCodeAt(r)] > 0) {
            count++;
        }
        hashArray[s.charCodeAt(r)]--;

        while (count == m) {
            if (r - l + 1 < minlen) {
                minlen = r - l + 1;
                sIndex = l;
            }
            hashArray[s.charCodeAt(l)] += 1;
            if (hashArray[s.charCodeAt(l)] > 0) {
                count -= 1;
            }
            l++;
        }
        r++;
    }
    return sIndex == - 1 ? "" : s.substring(sIndex, sIndex + minlen);
};

// todo explaination

