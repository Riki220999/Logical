
function getUniqueFromArray(arr){
  return arr.filter(function(value){
    return arr.indexOf(value) === arr.lastIndexOf(value);
  })[0] || -1;
}

var A =  [1,2,1,1];
console.log(getUniqueFromArray(A));
