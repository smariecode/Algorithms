// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// Recursive

function reverseString(str) {
  
if(str === "") // for termination
  return "";

else {
  return reverseString(str.substr(1)) + str.charAt(0); // calls the function from within the function
 }
