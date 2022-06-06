// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// For n = 2, the output should be solution(n) = 5;
// For n = 3, the output should be solution(n) = 13.

// Pseudocode
// n = 1, output: 1, negative space: 0 --> (1) n * 0 = 0 
// n = 2, output: 5, negative space: 4 --> (2) n * 2 = 4
// n = 3, output: 13, negative space: 12 --> (3) n * 4 = 12
// n = 4, output: 25, negative space: 24 --> (4) n * 6 = 24
// n = 5, output: 41, negative space: 40 --> (5) n * 8 = 40


function solution(n) {

    const evenNumbers = []; 

    for (let i = 0; i < n * 2; i++) {
        if (i % 2 ===0) {
            evenNumbers.push(i)
    }
}

let negativeSpace = n * evenNumbers[n-1]; 

let positiveSpace = negativeSpace + 1; 

return positiveSpace; 

}