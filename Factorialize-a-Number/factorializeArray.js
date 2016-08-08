// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// array method

function factorialize(num) { 
  var myArr = [];
  var prod = 1;
  
for(i = 0; i < num; i++) {
  myArr[i] = num - i;  // array = number minus 1, decrements the number down until zero
  prod *= myArr[i];  //accumulated total
}
  return prod;
}
