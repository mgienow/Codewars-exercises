
var natoAlphabet = {
    a: 'Alfa',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliett',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'November',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'Xray',
    y: 'Yankee',
    z: 'Zulu',
  };
//Tom's version:
  function toNato (words) {
      return words
          .toLowerCase()
          .split('')
          .filter((str) => { return /\S/.test(str) })
          .map((letter) => { return natoAlphabet.hasOwnProperty(letter) ? natoAlphabet[letter] : letter})
          .join(' ')
  }
// Nota bene: for testing in codewars be sure to change function name to to_nato(words)
//1. Convert string argument `words` to all lower case, then split into an array of individual letters
//2. Use `filter()` to get rid of spaces in the array. Array.prototype.filter() returns a new array
//containing the elements for which the function returns TRUE. /\S/ is a regex that matches a non-whitespace
//character; /\S/.test(str) returns whether `str` has a non-whitepace character (A whitespace character can be: A space character. A tab character. A carriage return character.)
//SO `.filter((str) => { return /\S/.test(str) })` filters out, into a new array, any NON whitespace
//characters
//3. on the newly returned no-spaces array, `map()` in conditional operator syntax instead of `if` statement
// checks with `.hasOwnProperty` to see if the character appears in the dispatch table natoAlphabet. If yes,
//swap it for the corresponding NATO alphabet lingo and return it as element at same position in a new array.
//If it doesn't appear (because it is a number or other non-alpha char, like punctuation) then return whatever
//it is without alteration to the new array.
//4. Finally, `.join(' ')` re-converts the array back to a string with no commas and each element separated by a space

  //OR: my version

  function to_nato (words) {
    return words
        .toLowerCase()
        .replace(/ +?/g, '')
        .split('')
        .map(function(letter) {
 if(natoAlphabet.hasOwnProperty(letter)) {
      return natoAlphabet[letter];
       }
       return letter;
   })
        .join(' ')
      }
//In both cases: first convert the `words` string argument to lower case.
//next, use `replace` to find any spaces and replace them with NO space
//then `split('')` to convert string to array of individual letters
//`map()` method on the array using a callback function to iterate over each item
//checking (1) IF the item appears in the dispatch table natoAlphabet (.hasOwnProperty())
// (2) if yes, return the value associated with the letter at that position.
//(3) if no, then return whatever appears at that index position (presumably a number or punctuation mark)
//last step: `.join(' ')` to return the array in string format with no commas

/*      function to_nato (words) {
        return words
            .toLowerCase()
            .replace(/ +?/g, '')
            .split('')
            .map((letter) => { return natoAlphabet.hasOwnProperty(letter) ? natoAlphabet[letter] : letter})
            .join(' ')
    }
}
/*function to_nato(words){
    var translate = words.toLowerCase().replace(/ +?/g, '').split('').map((letter) => {return  natoAlphabet[letter] })
    return (translate.join(' '))
  }
  /*function to_nato(words) {
    return words.toLowerCase().split('').filter((str) => { return /\S/.test(str) }).map((letter) => { return natoAlphabet[letter] })
}*/
