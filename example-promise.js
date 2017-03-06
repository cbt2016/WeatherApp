
function getPromise(location) {
  return new Promise(function(resolve,reject){
    resolve(79);
    reject('City not found');
  });
}

getPromise('los angeles').then(function(temp){
  console.log('success! ',temp);
},function(err){
  console.log('error ',err);
});

function addNumber(a,b) {
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      if(typeof a==='number' && typeof b==='number'){
        resolve(a+b);
      }else{
        reject('can not perform the addition ');
      }
    },1000);
  });

}

addNumber('5',15).then(function(result){
  console.log("success:",result);
},function(err){
  console.log("error",err);
});
