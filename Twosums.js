
//   @param {number[]} nums
//   @param {number} target
//   @return {number[]}
 
 // Lets take an example of :-
//    array = [0,3,5,7]
//    target = 10
// [0] + [1] = 3 No 
// [0] + [2]  = 5 No 
// i = first index
// j = i + 1
var twoSum = function(nums, target) {
   for (i=0; i<nums.length; i++){
       for(j=i+1; j<nums.length; j++){
           if(nums[i] + nums[j] === target){
               return [i,j];
           }
       }
   }
};