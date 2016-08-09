// Check for Palindromes

// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// For loop half-index method

function palindrome(str) {

// convert string to lower case then use regex var to remove non whitespace chars  
 var regex = /[^A-Za-z0-9]/g; 
 str = str.toLowerCase().replace(regex, ''); 

 // to determine length of string (includes spaces)
 var len = str.length; 
 
 for (var i = 0; i < len/2; i++) { //for loop to check part of string for matches
   if (str[i] !== str[len - 1 - i]) { //if compared characters do not match, return false
       return false; 
   }

 }
 return true; // If both characters are strictly equal, return true, the string is a palindrome
  
}
