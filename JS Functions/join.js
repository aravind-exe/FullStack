let arr = ["Gradious","Technologies","Private","Limited."];
let a = '-';
let string = "";
function joinArray(arr,a){
    for(var i=0;i<arr.length;i++){
        string += arr[i];
        if(i<arr.length-1){
            string += a;
        }
    }
    return string;
  
}
console.log(joinArray(arr,a));