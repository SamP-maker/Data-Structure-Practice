const fibs = n =>{

let myArray = [0,1]


 if (n<=0) return "Please insert a valid number"
 if (n===1) return [0]
 if (n===2) return myArray;
 
 for(let i = 0; i<myArray; i++){
    myArray.push(myArray[myArray.length-2]+myArray[myArray.length-1])


    return myArray;
 }
}

console.log(fibs(-2));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(8));
