// 📝 Given the string, check if it is a palindrome.

// 🤔 For inputString = "aabaa", the output should be solution(inputString) = true;
// 🤔 For inputString = "abac", the output should be solution(inputString) = false;
// 🤔 For inputString = "a", the output should be solution(inputString) = true.

function solution(inputString) {
  const copyString = [...inputString];
  const reverseString = copyString.reverse().join('');
  return inputString == reverseString; 
}