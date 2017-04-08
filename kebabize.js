/*
Description:

Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes: - the returned string should only contain lowercase letters
*/function kebabize(str) {
  return str
  .replace(/\d/g, '')
  .replace(/([A-Z])/g, '-$1')
  .toLowerCase()
  .replace(/^-/, '')
}
//return the passed `str` after: (1)replacing any digits with no space (.replace(/\d/g, ''))
//(2)placing a space in front of any capital letter;
//(3) converting everything to lower case
//(4) -- for some reason this was necessary to pass testing: check if the string starts
//with a '-' and if so remove it


//earlier solution:

function kebabize(str) {
    var newCase = str.replace(/([A-Z])/g, '-$1').replace(/\d/g,'').toLowerCase();
      while(newCase.charAt(0) === '-'){
        newCase=newCase.substr(1)
      }
      return newCase;
      }
