/*The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples

removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]

*/

function removeSmallest(numbers) {
  //first, identify the smallest integer in [numbers] array:
var i=0;
//start with first item:
var smallest = numbers[i];
//loop thru array comparing the current 'smallest' with the next item to see
//which is smaller, and assign that value to `smallest` variable:
  while(i<numbers.length) {
    if(numbers[i]<smallest) {
      smallest=numbers[i];
    }
    //don't forget to bump up the `i` counter variable!
   i++;
  }
  //now, make sure you're removing the FIRST incidence of `smallest` if it appears
  //more than once in `numbers` array. .indexOf finds the FIRST incidence:
    var gotcha = numbers.indexOf(smallest);
//if the index of smallest >-1 -- that is, smallest, lies anywhere before the final
//position in the array -- remove it, and return the `numbers` array minus smallest:    
    if (gotcha > -1) {
      numbers.splice(gotcha, 1);
    }
  return numbers;
}

removeSmallest([1,2,3,4,5])
