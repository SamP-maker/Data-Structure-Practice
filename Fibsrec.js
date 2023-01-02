

const fibsRec = (n) =>{

return n <= 0
       ? "Please enter a valid number of elements to give an answer."
       : n === 1
       ? [0]
       : n === 2
       ? [0, 1]
       : [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]];

};


console.log(fibsRec(-2)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibsRec(1)); // returns [0]
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(3)); // returns [0, 1, 1]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]