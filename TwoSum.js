/*
Description:

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function numericalCompare(a, b) {
  return a - b;
}

Test.assertSimilar(twoSum([1,2,3], 4).sort(numericalCompare), [0,2]);
Test.assertSimilar(twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]);
Test.assertSimilar(twoSum([2,2,3], 4).sort(numericalCompare), [0,1]);

*/

function twoSum(numbers, target) {
  for(var i=0;i<numbers.length;i++){
    for(var j=i+1;j<numbers.length;j++){
      if(target===(numbers[i]+numbers[j]))
        return [i,j]
    }
  }
};

/*
1. Set up first FOR loop to iterate through passed `numbers` array

2. Set up second FOR loop (j) to iterate through other values of `numbers`
progressively adding numbers[j] to numbers[i]

3. IF the sum of numbers[i] + numbers[j] equals`target` then return an array of [i,j]
because those are the locations of the numbers that successfully sum to 'target`.

Two successful numbers, anyway -- the directions allow for more than one solution!

*/
