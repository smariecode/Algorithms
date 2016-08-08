// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// String methods

function reverseString(str) {
 
  var myString = str.split('').reverse().join(''); //split the string, reverse the chars, then join the chars to re-create string
  return myString;
}
