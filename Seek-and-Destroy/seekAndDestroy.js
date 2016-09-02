/* You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments. */


function destroyer(arr) {

  var args = arr.slice.call(arguments);

  args.splice(0, 1);

  for(var i = 0; i < arr.length; i++){
    for(var n = 0; n < args.length; n++){
      if(arr[i] === args[n]){ // if the first element of arr equals comparision elements
        delete arr[i]; // remove the match from the arr
      }
    }
  }
  
  return arr.filter(Boolean); 
}
