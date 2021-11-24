// We all know Set object only holds unique values. 
// So if we add all the elements from the array into the set,
// the length of set and array should be equal if there are no duplicates.


var containsDuplicate = function(nums) {
    // adding array elements into the Set
    let arr = new Set (nums);
    // Comparing the array length to the Set size 
     if (arr.size === nums.length){
        //  If they are equal 
         return false;
     }
     else {
        //  if not
         return true;
     }
 };