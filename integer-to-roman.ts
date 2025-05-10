var intToRoman = function(num) {
    const valueSymbols = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let res = '';

    for (const [value, symbol] of valueSymbols) {
      if (num === 0) break;
      const count = Math.floor(num / value);
      res += symbol.repeat(count);
      num -= count * value;
    }

    return res;  
};

// optimised solution
var intToRoman = function(num) {
    // const letterMapping = {
    //     1 : "I", 5: "V", 10: "X", 50 : "L", 100: "C", 500: "D", 1000: "M",
    //     4 : "IV", 9: "IX", 40: "XL", 90: "XC", 400: "CD", 900 : "CM"
    // }
    let resultRomanString = ""
    while (num > 0) {
        if (num >= 1000) {
            // const occurrences = Math.floor(num / 1000);
            resultRomanString += "M";
            num -= 1000;
        }
        else if (num >= 900) {
            resultRomanString += "CM";
            num -= 900
        }
        else if (num >= 500) {
            resultRomanString += "D";
            num -= 500
        }
        else if (num >= 400) {
            resultRomanString += "CD";
            num -= 400
        }
        else if (num >= 100) {
            resultRomanString += "C";
            num -= 100
        }
        else if (num >= 90) {
            resultRomanString += "XC";
            num -= 90
        }
        else if (num >= 50) {
            resultRomanString += "L";
            num -= 50
        }
        else if (num >= 40) {
            resultRomanString += "XL";
            num -= 40
        }
        else if (num >= 10) {
            resultRomanString += "X";
            num -= 10
        }
        else if (num >= 9) {
            resultRomanString += "IX";
            num -= 9
        }
        else if (num >= 5) {
            resultRomanString += "V";
            num -= 5
        }
        else if (num >= 4) {
            resultRomanString += "IV";
            num -= 4
        }
        else if (num >= 1) {
            resultRomanString += "I";
            num -= 1
        }
        else {
            return resultRomanString
        }
    }
    return resultRomanString;
}

//todo explanation