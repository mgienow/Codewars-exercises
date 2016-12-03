/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/
function repeatStr (n, s) {
  var newStr = s;
for(var i=0; i<(n-1); i++) {
  newStr+=s;
  }
  return newStr;
}
