function sumToK(arr, target) {
  let map = {},
      results = [];
  for (let i=0; i<arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      results.push([map[arr[i]], arr[i]])
    } else {
      map[target - arr[i]] = arr[i];
    }
  }
  return results;
}

console.log(sumToK([23,12,4,5,13,-6], 17))
