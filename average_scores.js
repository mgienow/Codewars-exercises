/*
Create a function that returns the average of an array of numbers
("scores"), rounded to the nearest whole number.

You are not allowed to use any loops !
(including for, for/in, while, and do/while loops).
*/

function average(scores) {
/*scores.reduce takes the array scores and applies the array.reduce()
method. The reduce() method applies a function -- (function i,j) --
against an accumulator == ({return i+j} == and each value of the array
(from left-to-right) to reduce it to a single value.

so scores.reduce with the function produces the sum of all elements
from the array scores, and then divides it by scores.length to give the average.

finally we use Math.round() method to round the result to nearest integer
    */
return Math.round(scores.reduce(function(i,j) {return i+j})/scores.length)
}
