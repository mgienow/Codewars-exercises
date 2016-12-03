/*
It's like the Fibonacci sequence,
only adding the preceeding THREE numbers to generate
the next. [signature] will always be 3 integers and n will always
be a positive number or 0.  If n=0, return empty array.
*/

function tribonacci(signature,n){
/*First, set up the first three positions of signature (index 0,1,2) and
check against condition n=0. If n=0, then signature.slice(0,n) will return
an empty array because no number of positions to slice/select from.
*/
  if(n<3) {
    return signature.slice(0,n);
    };
/*Next, iterate through the remainder of n (where n>3) to generate
 the next item in [signature] as the sum of the 3 previous numbers
 (located by their index position, i).
*/
  for(var i=3; i<n; i++) {
  signature.push(signature[i-1] + signature[i-2] + signature[i-3]);
  }
  //return the final array
  return signature;
}
