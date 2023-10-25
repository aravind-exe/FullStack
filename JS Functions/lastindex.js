let array = [10,20,30,40,50,20,30,30,40];
let a = 40;
function lastIndexOf(array,a){
for(let i=array.length;i >= 0; i--){
    if(array[i] == a ){
        return i;
    } 
}
    return -1;
}
console.log(lastIndexOf(array,a));



