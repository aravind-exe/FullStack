// const num = [1,2,3,4,5];
// const dnum = num.map(function(n){
//     return n*2;
// });
//  console.log(dnum);

// const num = [15,1,2,3,4];
// const all = num.reduce(function(total,n){
//     return total - n ;
// });

// console.log(all);

// const num = [1,2,3,4,5,6];
// const en = num.filter(function(n){
//     return n % 2 == 0;
// });
// console.log(en);

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

  const sgrade = students.filter(function(g){
    return g.grade>=90;
  });

  console.log(sgrade);