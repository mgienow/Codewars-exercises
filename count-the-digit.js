/*Description:

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

#Examples:

n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1):
the numbers of interest are
1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
so there are 11 digits `1` for the squares of numbers between 0 and 25.
*/


function nbDig(n, d) {
   var strD=d.toString();
   var counter=0;
while(n>=0) {
  var squareN=(n*n).toString();
  var dCount=squareN.split(strD).length-1;
  counter+=dCount;
  n--;
}
return counter;
}

/*  1. convert the target integer, `d`, into a string,
then establish a `counter` variable initialized to zero.


2. then a loop counting backwards from `n` to zero:
the variable `squareN`first multiplies n times itself,
then turns the result into a string.


3. then using .split() method on `squareN` to separate
 instances of `strD` from any other digits, the `dCount`
 variable is set equal to the length of the resulting array
 MINUS ONE (!important, took me awhile to realized
 that essential piece) — because the arrays produced by each
 iteration of the `while` loop will contain both the
 split-out `strD` — if `strD` is present — as well as the
 remaining digits. So you need to subtract one from the
  `.length` to account for the remaining digits.

  If `strD` is not present, then `dCount` returns 0.
  The `counter` variable is updated and the loop repeats.
*/
