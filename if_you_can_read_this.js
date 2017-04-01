/*
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

Input: If you can read

Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

Some notes

Keep the punctuation, and remove the spaces.
Use Xray without dash or space.
Reference


*/

function to_nato(words) {
	// Version 1: first tried with dispatch table and could not get to work, so did a hurry-up version with `switch`
  // first establish variable to hold passed in string `words` into lower case (for uniormity,
  //no matter what is passed into string argument) array of letters:
  var translate = words.toLowerCase().split('');
  //establish empty array variable for pushing "translated" letters to solution:
  var nato = [];
  //write ridiculously long switch statement to swap out letters for NATO equivalent
  //for empty space ' ' push nothing
  //for anything else (presumably punctuation, or a number), push the original character
  for(var i = 0; i<translate.length; i++) {
  switch (translate[i]) {
    case 'a':
      nato.push("Alfa");
      break;
    case 'b':
      nato.push("Bravo");
      break;
    case 'c':
      nato.push("Charlie");
      break;
    case 'd':
      nato.push("Delta");
      break;
    case 'e':
      nato.push("Echo");
      break;
    case 'f':
      nato.push("Foxtrot");
      break;
    case 'g':
      nato.push("Golf");
      break;
    case 'h':
      nato.push("Hotel");
      break;
    case 'i':
      nato.push("India");
      break;
    case 'j':
      nato.push("Juliett");
      break;
    case 'k':
      nato.push("Kilo");
      break;
    case 'l':
      nato.push("Lima");
      break;
    case 'm':
      nato.push("Mike");
      break;
    case 'n':
      nato.push("November");
      break;
    case 'o':
      nato.push("Oscar");
      break;
    case 'p':
      nato.push("Papa");
      break;
    case 'q':
      nato.push("Quebec");
      break;
    case 'r':
      nato.push("Romeo");
      break;
    case 's':
      nato.push("Sierra");
      break;
    case 't':
      nato.push("Tango");
      break;
    case 'u':
      nato.push("Uniform");
      break;
    case 'v':
      nato.push("Victor");
      break;
    case 'w':
      nato.push("Whiskey");
      break;
    case 'x':
      nato.push("Xray");
      break;
    case 'y':
      nato.push("Yankee");
      break;
    case 'z':
      nato.push("Zulu");
      break;
    case ' ':
      nato.push();
      break;
    default:
      nato.push(translate[i]);
    }
  }
  //`nato` array holds all the translated letters; now join back into string containing space between each but no commas
  return (nato.join(' '));
}
