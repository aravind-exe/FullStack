let arr =[10,20,30,40,50,60];
let b = arr[arr.length-1];
console.log(arr);
function pop(arr){
    arr.length =[arr.length-1];
    return arr;
}
console.log("The new array is: ",pop(arr));
console.log("The Removed element from the array is: ",b)