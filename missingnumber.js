// I decided to use the Set Object.

var missingNumber = function(nums) {
    let arr = new Set (nums);
    let expectedlength = nums.length + 1;
    for(number=0; number<expectedlength; number++){
        if(!arr.has(number)){
            return number;
        }
    }
// I stole this from a blog but i dont know its use incase you do please help.
// It did make my time complexity less thats the only difference    
return -1;
};