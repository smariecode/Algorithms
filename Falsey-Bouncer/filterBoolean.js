/* Remove all falsy values from an array.
   Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
   Remember to use Read-Search-Ask if you get stuck. Write your own code.
   Here are some helpful links:
   Boolean Objects
   Array.prototype.filter()

Given data:
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2]. */

  function bouncer(arr) {

  return arr.filter(myFilter);
  
  function myFilter(newArr){ //callback to filter false elements
    return Boolean(newArr); //using Boolean will return only true array elements
    }
}
