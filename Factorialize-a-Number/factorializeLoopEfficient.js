// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// for loop starting at 2 method


function factorialize(num) {
  
 var prod = 1; // holds factorial totals
     
 for(i = 2; i <= num; i++) {  //loop until i is equal to argument 'num'
     prod = prod * i; //multiply and accumulate against an incrementing variable
  }
  
 return prod;
}
