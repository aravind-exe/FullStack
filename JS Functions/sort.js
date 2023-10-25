let a = [6,7,2,5,1,9,3,8,10,4];

function sort(a){
    let temp;
    for(var i=0;i<a.length;i++){
        for(var j=i+1;j<a.length;j++){
            
        if(a[i]>a[j]){
           temp = a[i];
           a[i]=a[j];
           a[j]=temp;
        }
    }   
}
return a;
}
console.log(sort(a));