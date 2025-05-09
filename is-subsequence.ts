var isSubsequence = function(s, t) {
    let sp = 0;
    let tp = 0;

    while (sp < s.length && tp < t.length) {
        if (s[sp] === t[tp]) {
            sp++;
        }
        tp++;
    }

    return sp === s.length;    
};

// optimised approach
var isSubsequence = function (s, t) {
    for (let i = 0; i < s.length; i++) {
        if (t.indexOf(s[i]) >= 0) {
            t = t.slice(t.indexOf(s[i]) + 1)
        } else {
            return false
        }
    }
    return true

};

//todo add explaination