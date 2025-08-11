function hIndex(citations: number[]): number {
    const n = citations.length;
    citations.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (citations[i] >= n - i) {
            return n - i;
        }
    }

    return 0;
};

// optimised solution

function hIndex(citations: number[]): number {
    // if(citations.length === 1) return citations[0]
    const nums = citations.sort((a, b) => a - b).filter(n => !!n)
    //console.log(nums)
    if(nums.length === 0) return 0;
    let publishedCount = -1;
    let totalPublished = nums.length;
    for (let i = 0; i < nums.length; i++) {
      
        //  if(i === 0 && nums[i] > nums.length ) return nums.length;
        if (nums[i] < totalPublished - i) {
            publishedCount = nums[i]
        } else if (nums[i] === totalPublished - i) {
            return nums[i]
        } else if (nums[i] > totalPublished - i) {
           
            publishedCount =  totalPublished-i
            break;
        }
    }

    return publishedCount
};

// todo explaination