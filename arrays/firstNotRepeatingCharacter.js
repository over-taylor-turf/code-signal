// 📝 Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// 🤔 For s = "abacabad", the output should be solution(s) = 'c'.
// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// 🤔 For s = "abacabaabacaba", the output should be solution(s) = '_'.
// There are no characters in this string that do not repeat.

function solution(s) {
    let input = new Map(); 

    for (let i = 0; i < s.length; i++) {

        if (input.has(s[i])) {

            let currentValue =  input.get(s[i])
            input.set(s[i], currentValue + 1);

        } else {

            input.set(s[i], 1);

        }

    }


     for (let [key, value] of input.entries()) {
         if (value === 1) {
             return key; 
         }
     }

    return '_'; 

}
