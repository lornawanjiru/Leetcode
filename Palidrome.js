// An integer is a palindrome when it reads the 
// same backward as forward.
//  For example, 121 is palindrome while 123 is not.

// i = 121
// j = 121 

// number is a palidrome but if 

// i = 123
// j(being the invert) = 321

// the number is not a palidrome


var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    
    return x === reversedInteger(x);
};
 var reversedInteger = function(x){
     let reversed = 0;
     
     while(x>0){
         reversed = (reversed*10)+(x%10);
         x= Math.floor(x/10);
     }
      return reversed;
 }