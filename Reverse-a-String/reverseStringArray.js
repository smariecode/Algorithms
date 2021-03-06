// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// Using an array method

function reverseString(str) {
  
  var myArray = []; //create an array to temp store string chars
  var backwards = []; // array to store reversed string chars
  var myString = ""; // var to store reversed string chars
  
  for(var count = 0; count < str.length; count++) { //read string into array
    myArray[count] = str[count]; 
  }
  
  backwards = myArray.reverse(); //reverse array
  
  for(count = 0; count < myArray.length; count++) { // read array back into string
    myString += myArray[count];
  }
  
  return myString; 
}
