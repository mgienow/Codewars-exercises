/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/

function validatePIN (pin) {

//all valid pins will be either 4 or 6 in length
if (pin.length === 4 || pin.length === 6){

//test if input is a not a number
    if (isNaN(pin)){
      return false;
    }
// test if input is a float:
    else if (pin%1 !== 0){
    return false;
  } else {
    return true;
  }
} else {
  return false;
  }
}
