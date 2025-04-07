// rep 2 7/4/25
const mostFreqElement2 = (nums: number[]): number => {
    const freqMap: Record<number, number> = {};

    // create counts
    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // find the max value
    let maxCount = 0, result = -1;
    for (const [key, value] of Object.entries(freqMap)) {
        if (value > maxCount) {
            maxCount = value;
            result = Number(key);
        }
    }
    return result;
}

// rep 1 6/4/25
const mostFreqElement1 = (nums: number[]): number => {
    const freqMap: Record<number, number> = {};

    // create counts
    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // find the max value 
    let maxCount = 0, result = -1;
    for(const [key, value] of Object.entries(freqMap)) {
        if (value > maxCount) {
            maxCount = value;
            result = Number(key);
        }
    }
    return result;
}
