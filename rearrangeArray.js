let arr1 = [-1,5,2,3,6,7,4];
function rearrangeArray(arr) {
  let tempArr = [];
  for(let i=0; i<= arr.length - 1; i++) {
    if(arr[i] != i) {
      let count = 0
      for(let j=0; j<= arr.length -1; j++) {
        if(i === arr[j]) {
          count++
        }
      }
      if(count > 0) {
        tempArr[i] = i
      }
      else {
        tempArr[i] = -1
      }
    }
    else {
      tempArr[i] = i
    }
  }
  return tempArr;
}

console.log(rearrangeArray(arr1));

function rearrangeArrayEfficient(arr) {
  let tempArr = [];
  for(let i=0; i<= arr.length - 1; i++) {
    if(arr[i] != i) {
      tempArr[i] = arr.indexOf(i) === -1 ? -1 : i
    }
    else {
      tempArr[i] = i
    }
  }
  return tempArr;
}

console.log(rearrangeArrayEfficient(arr1));
