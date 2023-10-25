let a = [2,4,6,8,10];
let b = [3,6,9,12,15];
function add(a,b){
    for(var i=0;i<b.length;i++){
        a[a.length] = b[i];
    }
    return a;
}
console.log(add(a,b));