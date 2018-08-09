function longestPalindrome(str) {
   const reverseString = str.split("").reverse();
   const arr = [];
   let result;
   for(let i = 0; i<str.length; i++) {
     for(let j=0; j<reverseString.length; j++) {
       if(i === 0 || j === 0) {
         arr[i][j] = 0
       }
       else if(arr[i-1] === reverseString[j-1]) {
         arr[i][j] = arr[i-1][j-1] + 1;
         result = max(result, LCSuff[i][j]);
       } else {
         arr[i][j] = 0
       }
     }
   }

   return result;
}

console.log(longestPalindrome('hippooppihstring'))
