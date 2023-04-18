function countZeroes(arr) {
  if (arr) {
    if (arr === []) { return 0;}
    else {
      let leftIdx = 0;
      let rightIdx = arr.length-1;
     
      while (leftIdx < rightIdx) {
        let middleIdx = Math.floor((leftIdx+rightIdx)/2);
        if (arr[middleIdx] == 0) {
            rightIdx = middleIdx -1;
        } 
        else { 
            leftIdx = middleIdx + 1;
        }
      }
      if (arr[leftIdx] == 1) {return arr.length -leftIdx -1;}
      else {return arr.length -leftIdx;} 
    }
  }
  else {return 0;}
}

module.exports = countZeroes;