let a = [20,30,40,50,60,70];
let b = 10;
function unshift(a){
    let a1 = [];
    a1[0]=b;
    for(var i = 0;i<a.length;i++){
        a1[i+1] = a[i];
    }
    console.log("The length of the new array:",a1.length);
    return a1;
}

console.log(unshift(a));
