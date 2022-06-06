// 📝 You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

// 🤔 For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be solution(a, b, v) = true.

let a = [1, 2, 3];
let b = [10, 20, 30, 40];
let v = 42;

function solution(a, b, v) {

     for (let i = 0; i < a.length; i++) {
         for (let j = 0; j < b.length; j++) {
            console.log("a: ", a[i], "b: ", b[j], "a + b: ", a[i] + b[j])
            if (a[i] + b[j] === v) {
                 return true;
             }
         }
    }

    return false; 

}

console.log(solution(a, b, v))
