var reverseWords = function(s) {
    let words = s.split(' ');
    let res = [];

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) {
            res.push(words[i]);
        }
    }

    return res.join(' ');
};

// optimized version

var reverseWords = function(s) {
    let ans = "";
    let arr = s.split(" ").filter(word => word !== '');;
    arr.reverse();
    return arr.join(" ");
};

// todo add explaination