// 📝 Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// 🤔 For inputArray = [3, 6, -2, -5, 7, 3], the output should be solution(inputArray) = 21.
// 7 and 3 produce the largest product.


function solution(inputArray) {
  
  let largestProduct = inputArray[0] * inputArray[1];
  
  let pair2; 
  
  for (i = 0; i < inputArray.length - 1; i++) {
    
      pair2 = inputArray[i + 1]; 
    
   if ((inputArray[i] * pair2) > largestProduct) {
     largestProduct = inputArray[i] * pair2; 
   }
  }
  
       return largestProduct; 

}