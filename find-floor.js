function findFloor(arr, num) {
    if (num < arr[0]) return -1;
    if (num >= arr[arr.length-1]) return arr[arr.length-1];
    else {
        let start = 0;
        let end = arr.length -1;
        while (start <= end) {
            let mid = Math.floor((start + end)/2);
            if (num < arr[mid]) {
                end = mid -1;
            }
            else {
                start = mid + 1;
            }
        }
        return start;
    }
  
}

module.exports = findFloor