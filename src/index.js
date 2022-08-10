
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];

  let retArr = [];
  let i = 0;

  matrix.forEach((arr) => {
    if(i%2 === 0) {
      Array.prototype.push.apply(retArr, arr);
    }
    else {
      Array.prototype.push.apply(retArr, arr.reverse());
    }

    i++;
  })
  
  return retArr;
}
