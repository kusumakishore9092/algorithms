function insertElement(arr, element) {
  const mid = arr.length / 2;
  let length;
  let i;
  if(arr[mid] > element) {
    length = mid - 1
    i = 0;
  } else {
    i = mid;
    length = arr.length - 1
  }
  for(i; i<= length; i++) {
    if(arr[i] > element) {
      arr.splice(i, 0 ,element)
      break;
    }
  }

  return arr;
}

console.log(insertElement([1,2,3,6,9,13], 0));
