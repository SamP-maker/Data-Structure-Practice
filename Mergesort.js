

const mergeSort = (arr)=>{

if(arr.length === 0 ) return "Please propvide a non empty array!"
if(arr.length === 1 ) return arr;

let mid = Math.floor(arr.length/2);
let left = arr.slice(0,mid)
let right = arr.slice(mid,arr.length)

merge(left,right)

}

const merge = (leftArr, rightArr)=>{
    const result = [];

    let iL = 0;
    let iR = 0;

    while(iL < leftArr.length && iR < rightArr.length){
      if(leftArr[iL] < rightArr[iR]){
        result.push(leftArr[iL]);
        iL++
        
      }else if( leftArr[iL] > rightArr[iR]){
        result.push(rightArr[iR])
        iR++
      }

      while (iL < leftArr.length) {
		result.push(leftArr[iL]);
		iL++;
	}

	while (iR < rightArr.length) {
		result.push(rightArr[iR]);
		iR++;
	}

    
    }

    return result;

    

    
};

console.log(mergeSort([])) // []
console.log(mergeSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]