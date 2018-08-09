function binarySearch(arr, x) {
  const low = 0;
  const high = arr.length;
  const resp = searchArray(arr, low, high, x)
  console.log(resp)
  return resp
}

function searchArray(arr, low, high, x) {
  if(high >= 0) {
    let mid = (low + high) / 2;

    if(arr[mid] === x) {
      return mid;
    } else if(arr[mid] > x) {
      return searchArray (arr, low, mid - 1, x)
    } else {
      return searchArray(arr, mid + 1, high, x);
    }
  }
}

binarySearch([12, 14, 16, 20, 24, 28], 12)
