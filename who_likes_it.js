My solution, brute force but quick:
function likes(names) {
  var x = names.length;
  if(x === 0) {return `no one likes this`}
  else if(x === 1){return `${names[0]} likes this`}
  else if(x===2){return `${names[0]} and ${names[1]} like this`}
  else if(x===3){return `${names[0]}, ${names[1]} and ${names[2]} like this`}
  else if (x>3){return `${names[0]}, ${names[1]} and ${x-2} others like this`}
}



//ES6 solution that I do not yet understand:

function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)]
}
