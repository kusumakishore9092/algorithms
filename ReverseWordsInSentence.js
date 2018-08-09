function reverseWordsInSentence(str) {
  const str1 = str.split(' ');
  let newArray = '';
  for(let i =str1.length - 1; i>=0; i--) {
    newArray += str1[i] + ' '
  }

  return newArray
}

console.log(reverseWordsInSentence('Hi this is a string'))
