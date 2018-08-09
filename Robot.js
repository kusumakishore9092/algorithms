function robot(str) {
  let x = 0, y = 0;
  for(i = 0; i<=str.length - 1; i++) {
    if(str[i] === 'U') {
      y++;
    } else if(str[i] === 'D') {
      y--;
    } else if(str[i] === 'L') {
      x--;
    } else if(str[i] === 'R') {
      x++;
    }
  }

  return '(' + x + ',' + y + ')'
}

console.log(robot('UDDLLRUUUDUURUDDUULDRR'))
