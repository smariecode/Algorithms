// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Given arrays:
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])

function largestOfFour(arr) {
  
var large = 0;
var myArr = [];

  for(i = 0; i < arr.length; i++){ //iterate through outside array
    for(n = 0; n < arr.length; n++){ //iterate through inside array
      if(large <= arr[i][n]){ //compare variable 'large' to array elements
          large = arr[i][n]; // assign largest numer from comparision to variable 'large'
        if(n === 3){ // if end of inside array iteration, then push large value to myArr, then reset 'large' to 0 for next sub array
           myArr.push(large);
           large = 0;
        }
      }
      else { //if large is still largest, and if end of inside array iteration, push large value to myArr, reset large to 0
         if(n === 3){
           myArr.push(large);
           large = 0;
        }
      }
    }
  }
  
/* Here len/2 = 15
      For each iteration: large     i = ?     n = ?    if(large <= arr[i][n])?  if(n === 3)?   if(n === 3)?  i++    n++
      1st iteration:       [13]       0          0        13 <= 13 ? TRUE          n=0 FALSE        n=0 FALSE        1
      2nd iteration:       [13]       0          1        13 <= 27 ? TRUE          n=1 FALSE        n=0 FALSE        2
      3rd iteration:       [27]       0          2        27 <= 18 ? FALSE         n=2 FALSE        n=2 FALSE        3
      4th iteration:       [27]       0          3        27 <= 26 ? FALSE         n=3 FALSE        n=3 TRUE         4 (end loop)
      5th iteration:       [0]        1          0        0 <= 4 ? TRUE            n=0 FALSE        n=0 FALSE        1
      6th iteration:       [4]        1          1        4 <= 5 ? TRUE            n=1 FALSE        n=1 FALSE        2
      7th iteration:       and so on 

         
    End of the FOR Loop*/


    
return myArr;
  
   
} //ends function
