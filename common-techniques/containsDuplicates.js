// 📝 Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

// 🤔 For a = [1, 2, 3, 1], the output should be solution(a) = true.
// There are two 1s in the given array.

// 🤔 For a = [3, 1], the output should be solution(a) = false.
// The given array contains no duplicates.

function solution(a) {

    let inputObject = new Map(); 
    
    for (let i = 0; i < a.length; i++) {
    if (inputObject.has(a[i])) {
        return true; 
    } else {
        inputObject.set(a[i], 1);
    }
}

return false; 

}
