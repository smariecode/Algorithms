// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.



// Decrementing

function reverseString(str) {
  var myString = '';
  for (var i = str.length - 1; i >= 0; i--) // decrement until string ends
    myString += str[i];
  return myString;
}
