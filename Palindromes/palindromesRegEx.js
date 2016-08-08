// Check for Palindromes

// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


// reg ex method


function palindrome(str) {
  
var lowerCaseString = str.replace(/[^\w\s]|_/g, "")   // removes all except alphanumeric characters and whitespace
           .replace(/ /g, "").toLowerCase(); // then removes white spaces 
  
var strippedString = lowerCaseString.split('').reverse().join(''); // reverses string for comparison


  if(strippedString === lowerCaseString) {
    return true;
  }
  else {
    return false;
  }
}

/*
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false. */
