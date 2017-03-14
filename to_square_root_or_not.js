/*
To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

[4,3,9,7,2,1] -> [2,9,3,49,4,1]
The input array will always contain only positive numbers and will never be empty or null.

The input array should not be modified!

describe("Solution", function(){
  it("basic tests", function(){
    var input = [ 4, 3, 9, 7, 2, 1 ];
    var expected = [ 2, 9, 3, 49, 4, 1 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);

    input = [ 100, 101, 5, 5, 1, 1 ];
    expected = [ 10, 10201, 25, 25, 1, 1 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);

    input = [ 1, 2, 3, 4, 5, 6 ];
    expected = [ 1, 4, 9, 2, 25, 36 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);
  });*/

function squareOrSquareRoot(array) {
  //well, we can't modify the original array, so set up a new empty array to hold our changes:
var answer =[];
//now loop thru the argument array to check if the square root of each element is an integer
//(i.e. a whole number); if so, push that square root to the new `answer` array.
//else, if it is not an integer, square that element (array[i]) and push to `answer`
for (var i=0; i<array.length; i++){
  if(Number.isInteger(Math.sqrt(array[i]))){
  answer.push(Math.sqrt(array[i]));
} else {
var square = Math.pow(array[i],2);
answer.push(square);
    }
  }
  return answer;
}
