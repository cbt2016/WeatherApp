// var names = ['lionnie','hans','julie'];
//
// names.forEach(function(name){
//   console.log('forEach',name);
// });
//
//
// names.forEach((name)=>{
//   console.log('arrowFunc',name);
// });
//
// names.forEach((name)=> console.log('simplified arrowFunc',name));
//
// var returnedVal = (name)=> name +'!';
//
// console.log(returnedVal('Mandy'));

var addNumber = (a,b)=>{
  return a+b;
};

var addExpression = (a,b) =>a+b;

console.log(addNumber(5,6));
console.log(addExpression(85,65));
