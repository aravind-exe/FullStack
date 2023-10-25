let a = [5,10,15,20,25,30];
let value = 5;
function index(a,value){
    for(var i = 0;i<a.length;i++){
     if(a[i]==value){
    return i;
      }else{
        return -1;
      }
    }
}
console.log(index(a,value));