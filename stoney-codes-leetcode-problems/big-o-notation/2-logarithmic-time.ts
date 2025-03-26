const binarySearch = (arr: number[], target: number): boolean => {
    let left = 0;
    let right = arr.length - 1; // minus 1 because we are using 0 based index

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // find the middle

        if(arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            left = mid + 1; // +1 bc we dont need to use the currant mid anymore
        } else {
            right = mid - 1; // -1 bc we dont need to use the currant mid anymore
        }
    }
    return false;
}