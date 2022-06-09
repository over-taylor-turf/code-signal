// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// For statues = [6, 2, 3, 8], the output should be solution(statues) = 3.
// Ratiorg needs statues of sizes 4, 5 and 7.


let statues = [4, 2, 7, 18]; 

function solution(statues) {

statues.sort(function(a, b) {
  return a - b;
});
console.log(statues)

let first = statues[0];
console.log("first: ", first)

let last = statues[statues.length - 1]; 
console.log("last: ", last)

let fullArray = [];
for (let i = first; i < last; i++ ) {
    fullArray.push(i);
}

let unique = []; 

unique = fullArray.filter(val => !statues.includes(val));

return unique.length; 

}

console.log(solution(statues));