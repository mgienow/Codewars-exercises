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
    "?": "?",
    ".": ".",
    " ": "",
    "!": "!"
  };

  function to_nato (words) {
    return words
        .toLowerCase()
        .split('')
        .filter((str) => { return /\S/.test(str) })
        .map((letter) => { return natoAlphabet[letter] })
        .join(' ')
}
/*function to_nato(words){
    var translate = words.toLowerCase().replace(/ +?/g, '').split('').map((letter) => {return  natoAlphabet[letter] })
    return (translate.join(' '))
  }
  /*function to_nato(words) {
    return words.toLowerCase().split('').filter((str) => { return /\S/.test(str) }).map((letter) => { return natoAlphabet[letter] })
}*/
