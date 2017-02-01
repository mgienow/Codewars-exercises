/*
Description:

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

Examples:

// === JavaScript ==

tickets([25, 25, 50]) // => YES
tickets([25, 100])
        // => NO. Vasya will not have enough money to give change to 100 dollars
*/


function tickets(peopleInLine){
  //First test case: if the first person in line has a $50 or $100, return NO
 if(peopleInLine[0] > 25){
  return "NO";
  };
  //set up array to count each type of  bill received: $25 at [0], $50 at [1], $100 at [2]:
  var billType=[0,0,0];

  //Now, iterate thru the array of ticket buyers:
  for(var i=0; i<peopleInLine.length; i++){
  // If the person at [i] has a $25 bill, Vasya takes it and the counter at billType[0] goes up one:
    if(peopleInLine[i] === 25) {
      billType[0] ++;
    }

  // If the person at [i] has a $50 bill:
  else if(peopleInLine[i] === 50) {

  /*1. Check how many $25 bills are
  counted at billType[0]. If none (billType[0]===0) then Vasya can't give change.
   so return NO */

        if(billType[0] === 0){
        return "NO";
        }
/*2. If Vasya has one or more $25 bills he can give change.
So take away one $25 from billType[0] and add one $50 at billType[1];
*/

        else {
        billType[0] --;
        billType[1] ++;
        }
    }

  //  If the person at [i] has a $100 bill :
    else if(peopleInLine[i]===100) {

/*This gets trickier.  First case: no $50,
AND 2 or fewer $25 bills means "NO" change:
*/
        if (billType[0]<=2 && billType[1]===0){
          return "NO";
          }

/*2. If Vanya STILL has no $50 bills (billType[1]===0) -- but we know from
passing thru previous condition that he DOES have
3 or more $25 bills. Therefore he is good to go. So we take away 3 $25 from
billType[0] counter.
*/
          else if(billType[1]===0){
            billType[0] -= 3;
          }

/*3. Finally, he has 3 or more $25 and at least one $50, so we just
take away one of each to give the persn their $75 change:
*/
          else {
              billType[0] --;
              billType[1] --;
          }
//And credit the $100 bill now in Vasya's hand by adding one to the counter at
// billType[2]

      billType[2] ++;
      }
    }
  return "YES";
  }
