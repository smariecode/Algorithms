/*  Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:
String.prototype.indexOf()  */

function mutation(arr) {

  var firstStr = arr[0]; //holds the first string in the array
  var lastStr = arr[1]; //holds the second string in the array

  for(var i = 0; i < lastStr.length; i++){ 
    
    //  iterate through all chars in lastStr, check to see, what is the index of the search char?
    //  a (-1) will be returned if a char is not found
    
  if(firstStr.toLowerCase().indexOf(lastStr[i].toLowerCase()) === -1){ 
    return false;
    }
    
  }
    
    return true;
  
}

/* data given, 
mutation(["hello", "hey"]);
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.  */ 
