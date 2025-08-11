var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;    
};

// optimized approach
var isPalindrome = function(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        // Move left forward if not alphanumeric
        while (left < right && !/[a-z0-9]/i.test(s[left])) left++;

        // Move right backward if not alphanumeric
        while (left < right && !/[a-z0-9]/i.test(s[right])) right--;

        // Compare lowercase characters
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }
    return true;
};

//todo explaination