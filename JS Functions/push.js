let arr = [1,2,3,4,5];
let value = 6;
function push(arr,value){
  arr[arr.length]= value;
  return arr;
}
console.log("The length of the Array is:",arr.length);
console.log(push(arr,value));