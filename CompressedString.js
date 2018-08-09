function compressedString(str) {
  let count = 1;
  let newString = '';
  for(let i=0;i<=str.length - 1; i++) {
    if(str[i] === str[i+1]) {
      count ++;
    } else {
      newString += str[i] + count;
      count = 1;
    }
  }

  return newString;
}

console.log(compressedString('aaabbbbbccdd'))
