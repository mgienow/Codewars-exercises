//Placeholder - this code only partially works.  



function tickets(peopleInLine){
  for(var i=0; i<peopleInLine.length; i++){
    if(peopleInLine[i] > 25) {
      var changeRequired = peopleInLine[i] - 25;
      var moneyGiven = (peopleInLine.indexOf(peopleInLine[i]) + 1) * 25;
      return (moneyGiven - changeRequired > 0) ? 'YES' : 'NO'
      }
  }
}
