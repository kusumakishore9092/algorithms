function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  } else {
    let left = [];
    let right = [];
    let pivot = arr.pop();
    let newArr = [];

    for(let i=0; i<=arr.length - 1; i++) {
      if(arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return newArr.concat(quickSort(left), pivot, quickSort(right));
  }
}

console.log(quickSort([23,4,25,65,10,12,3]));
