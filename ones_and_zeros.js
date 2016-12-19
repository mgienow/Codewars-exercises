/*
Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
*/

const binaryArrayToNumber = arr => {
  var newStr=arr.join('');
  var newBin=parseInt(newStr, 2);
  return newBin;
};

/* FIrst, convert the array to a string using the .join()
method, with a delimiter to join -- ('') removes
commas from between the array items when returned as a string.
.join([0,0,0,1]) default would return '0,0,0,1'

SECOND, convert the string to an integer using the
parseInt() method, passing in the string to be parsed and the radix
-- the base value of the target numerical system -- so for our
purposes, our string is binary, so radix is 2.  were we converting
to standard decimal, radix would be 10. hexadecimal radix is 16.
