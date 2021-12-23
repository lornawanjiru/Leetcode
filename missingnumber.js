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

//Second option

var missingNumber = function(nums) {
    //using the gauss formular to sum up numbers in a sequence: 
    const gsum = (nums.length*(nums.length+1))/2;
    
    //Using the reduce method to sum up numbers in the current array
    const nsum = nums.reduce((acc,cur)=> acc+cur ,0);
    
    //Since the gsum is less than the current array sum then the value missing is the result of the subtraction
    const mnum = gsum - nsum;
    
    return mnum;
};
