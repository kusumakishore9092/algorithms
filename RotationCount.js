function leastIndex(arr, low, high) {
  if(arr.length < 1) {
    return 0;
  }

  if(arr.length === 1) {
    return low;
  }

  let mid = high / 2;

  if(arr[mid] > arr[mid + 1]) {
    return mid + 1;
  }
   if(arr[mid] < arr[mid - 1]) {
    return mid;
  }
   if(arr[mid] < arr[mid + 1]){
    return leastIndex(arr, mid + 1, high)
  }
  return leastIndex(arr, low, mid - 1);
}

function rotationCount(arr) {
  return leastIndex(arr, 0, arr.length - 1);
}



console.log(rotationCount([3,4,5,1,2]))
