/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
=============================
Step 1: render string to all lower case -- remember ()!
Step2: establish counters for X and O results, initialized to 0;
Step 3: If loop iterating through the array checking each index position
to see if hard equal to 'x' or 'o'; if true, then bump up counter;
Step 4: 2nd if/else loop to return true if counterX===counterO,
return false for any other condition
*/

function XO(str) {
   str=str.toLowerCase();
   counterX=0;
   counterO=0;
   for(var i=0; i<str.length; i++){
   if(str[i]==='o'){
   counterO++;
   } else if (str[i]==='x'){
     counterX++;
   }
   };
   if(counterO===counterX) {
     return true;
   } else{
     return false;
     }
}
