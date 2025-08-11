var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let idx = 0, d = 1;
    const rows = new Array(numRows).fill().map(() => []);

    for (const char of s) {
        rows[idx].push(char);
        if (idx === 0) {
            d = 1;
        } else if (idx === numRows - 1) {
            d = -1;
        }
        idx += d;
    }

    for (let i = 0; i < numRows; i++) {
        rows[i] = rows[i].join('');
    }

    return rows.join('');    
};

// optimised version

var convert = function(s, numRows) {
    if(numRows === 1) return s;

    let res = ""
    const interval = 2 * numRows - 2;
    for(let i = 0; i < numRows; i++) {
        const a = interval - i * 2;
        const b = i * 2
        let count = i

        while(count < s.length) {
            res += s[count]
            if(i === 0 || i === numRows - 1) {
                count += (i == 0 ? a : b)
            } else {
                count += ((count - i) % interval === 0 ? a : b)
            }
        }
    }

    return res
};

// todo add explaination