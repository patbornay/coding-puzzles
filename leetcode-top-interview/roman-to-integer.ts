var romanToInt = function(s) {
    let res = 0;
 const roman = {
     'I': 1,
     'V': 5,
     'X': 10,
     'L': 50,
     'C': 100,
     'D': 500,
     'M': 1000
 };

 for (let i = 0; i < s.length - 1; i++) {
     if (roman[s[i]] < roman[s[i + 1]]) {
         res -= roman[s[i]];
     } else {
         res += roman[s[i]];
     }
 }

 return res + roman[s[s.length - 1]];  
};

// optimised solution
var romanToInt = function(s) {

    const valueMap = {
        "I":1,
        "V":5,
        "X" :10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    let total = 0;
    let prev= 0 

    for(let i=s.length-1; i>=0; i--){
        const current = valueMap[s[i]]
        if(current >= prev){
            total += current
        }
        else { total-= current}

        prev = current

    }
    return total
    
};

//todo explanation