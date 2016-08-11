// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
// Sample input data: 
// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

function titleCase(str) {
  
  str = str.toLowerCase().split(''); // convert string to lowercase then split into substrings
  var i = 0; //for incrementing while loop
  str[0] = str[0].toUpperCase(); //capitalize the first letter in the substring
  
  while(i < str.length) { // iterate through substrings until end of substrings
    if(str[i] === ' ') { //if current substring equals a space
      i++; //increment to get to next substring
      str[i] = str[i].toUpperCase(); //replace current substring with capital letter
    }
    else {
      i++; //if substring is not a space increment and continue at the beginning of while loop
    }
  }
  return str.join('');
}


