/* Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:
String.prototype.substr()
String.prototype.substring()

Given data:

confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
*/


function confirmEnding(str, target) {
  
var tarLength = target.length;
var strEnd = str.substr(-tarLength); 

  if(strEnd === target){
    return true;
  }
  else {
    return false;
  }
}
