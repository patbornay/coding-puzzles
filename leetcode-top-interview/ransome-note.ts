var canConstruct = function(ransomNote, magazine) {
    let magaHash = {};

    for (let c of magazine) {
        magaHash[c] = (magaHash[c] || 0) + 1;
    }

    for (let c of ransomNote) {
        if (!magaHash[c] || magaHash[c] <= 0) {
            return false;
        }
        magaHash[c]--;
    }
    
    return true;    
};

// optimized version
var canConstruct = function(ransomNote, magazine) {
    const lastIndexes = new Map();
    for (let i = 0; i < ransomNote.length; i++) {
        const curVal = ransomNote[i];// f,i,h,j,j
        const lastIndex = lastIndexes.get(curVal) || 0;// 0,0,0,0,2
        const newIndex = magazine.indexOf(curVal, lastIndex);// 12,2,0,1,17
        if (newIndex === -1) {
            return false;
        } else {
            lastIndexes.set(curVal, newIndex + 1);// {f:13, i:3, h:0, j:18}
        }
    }
    return true;
};

// todo explaination
