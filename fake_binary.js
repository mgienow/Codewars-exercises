/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

*/

function fakeBin(x){
var newBin=[];
 for(var i=0; i<x.length; i++) {
  if(x[i]<5) {
  newBin.push(0)
  } else {
  newBin.push(1);
  };
}
  newBin=newBin.join('');
  return newBin;
}

/*What I learned: using the array.join() property to remove commas */
