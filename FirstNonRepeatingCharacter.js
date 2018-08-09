function firstNonRepeatingCharacter(str) {
  const arr = [];
  for(let i=0; i<=str.length-1; i++) {
    arr[str[i]] = arr[str[i]] ? arr[str[i]] + 1 : 1
  }

  for(let i=0; i<=str.length-1; i++) {
    if(arr[str[i]] === 1) {
      return str[i]
    }
  }
}

console.log(firstNonRepeatingCharacter('GeekS'))
