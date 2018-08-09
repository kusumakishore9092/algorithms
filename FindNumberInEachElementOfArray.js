function findNumber(arr) {
  let newArray = [];
  arr.forEach((element) => {
    if(element.toString().includes('1') && element.toString().includes('2') && element.toString().includes('3')) {
      newArray.push(element);
    }
  })

  return newArray;
}

console.log(findNumber([123,456,1234,3214]))
