/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7.

[10,343445353,3453445,3453545353453] should return 3453455.

Hint: Do not modify the original array.

==========================
This one was made difficult by the requirement to not modify the original array.
I eventually took that to mean that I could establish a new array containing the
original contents sorted into increasing numerical order.

First step: use the array.prototype.sort() method, with the compare function
passed in as argument, which looks like this:

    sort(function(a,b) {return a-b;}); <-- this returns the array sorted from lowest to highest
    //[15,28,4,2,43] returns [2,4, 15, 28, 43]

Second: add the slice() method to the end of the sort to clip off the first two,
i.e. lowest, integers:
    slice(0,2) takes the numbers from 0 index position up to, but NOT including, index position 2

After that, it's straightforward to initialize a `sum` variable at 0, set up a for loop
and iterate thru the sliced array!

*/

function sumTwoSmallestNumbers(numbers){
  var littleGuys=numbers.sort(function(a,b) {return a-b;}).slice(0,2);
  var sum=0;
  for (var i=0; i<littleGuys.length; i++){
    sum += littleGuys[i];
  }
  return sum;
}
