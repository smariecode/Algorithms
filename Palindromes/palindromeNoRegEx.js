// Check for Palindromes

// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


// Never use this, it is NOT efficient. This was done as a personal challenge.


function palindrome(str) {

var alphaNumString = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaNumSubString = alphaNumString.split('');  
var val = "";
str = str.toLowerCase().split('');

for(var i = 0; i < str.length; i++) { // checks alpha string to see if str substring exists (or is it a nonalpha\nonnumber)
  for(var count = 0; count < alphaNumString.length; count++) {
    if(str[i] === alphaNumSubString[count]) {
      val += str[i]; //if str substring is an alpha or a number, store it in variable val
    }
  }
}
  
var valR = val.split('').reverse().join(''); //split val string, reverse it, then join in back together

  if(val === valR) { //compare stripped string with reveresed string - check for palindromeness
    return true;
  }
  else {
    return false;
  }
}
