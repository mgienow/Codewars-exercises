/*
Description:

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:

arithmetic(5, 2, "add") should return 7

arithmetic(5, 2, "subtract") should return 3

arithmetic(5, 2, "multiply") should return 10

arithmetic(5, 2, "divide") should return 2.5


*/

function arithmetic(a, b, operator){
  if (operator==="add"){
  return a+b;
  } else if (operator==="subtract"){
  return a-b;
  } else if(operator ==="divide") {
  return a/b;
  } else return a*b;
}
