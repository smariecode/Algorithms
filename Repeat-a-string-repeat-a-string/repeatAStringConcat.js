/* Repeat a string repeat a string
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:
Global String Object
Given data:
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".  */


function repeatStringNumTimes(str, num) {

var myStr = "";

  for(var i = 0; i < num; i++){
    if(num > 0){ // if num is not negative
      myStr = myStr.concat(str); // concatinate str to myStr
    }
    else { //if num is a negative number
      return "";
    }
  }
  
return myStr;
  
}
