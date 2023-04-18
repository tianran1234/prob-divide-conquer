function sortedFrequency(arr,num) {
    if (arr[arr.length-1] < num || arr[0] > num) {return -1;}
    else {
        let firstIdx = findFirst(arr,num);
        let lastIdx = findLast(arr,num);

        if (firstIdx === lastIdx) {return 1;}
        else {return findLast(arr,num) - findFirst(arr,num);}
    }
}

function findFirst(arr,num) {
    let leftIdx = 0;
    let rightIdx = arr.length-1;

    while (leftIdx < rightIdx) {
        let middleIdx = Math.floor((leftIdx+rightIdx)/2);
        if (arr[middleIdx] >= num) {
            rightIdx = middleIdx -1;
        } 
        else { 
            leftIdx = middleIdx + 1;
        }
    }
    return leftIdx;
}

function findLast(arr,num) {
    let leftIdx = 0;
    let rightIdx = arr.length-1;

    while (leftIdx < rightIdx) {
        let middleIdx = Math.floor((leftIdx+rightIdx)/2);
        if (arr[middleIdx] <= num) {
            leftIdx = middleIdx + 1;
        } 
        else { 
            rightIdx = middleIdx - 1;
        }
    }
    return leftIdx;
}


module.exports = sortedFrequency