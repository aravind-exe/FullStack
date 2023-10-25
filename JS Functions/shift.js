let arr = [2,4,6,8,10,12];
let b = arr[0];

function shift(arr,b){
    let arr2 =[];
    for(var i = 0;i<arr.length-1;i++){
        arr2[i] = arr[i+1]; 
    }
    return arr2;
}
console.log(shift(arr,b));
console.log("The Removed element from the array is:",b);