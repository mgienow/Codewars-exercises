/*
Don't give me five!

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!


*/

function dontGiveMeFive(start, end){

//initialize an empty array
  var noFives=[];

//populate array with integers between start & end
 for(var i=start; i<=end; i++){
     noFives.push(i);
     }

//convert to an array of strings
 noFives=noFives.map(function(num) {
     return ""+num
 });

 //filter the array to remove any elements containing "5":
 noFives=noFives.filter(function(num){
   for(var j=0; j<num.length; j++) {
     if(!num.includes('5')) {
        return num;
        }
   }
 });
 //count the length of the resulting array:
  return noFives.length;
}
