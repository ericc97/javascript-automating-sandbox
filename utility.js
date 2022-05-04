// function msleep(n) {
//   Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
// }

// module.exports = { msleep };

const arr = [1,2,3,4,5]
const arrRev = function(x) {
  let revArr = [];
  for(let i = x.length; i >= 0; i --){
    revArr.push(x[i])
    
  }
  console.log(revArr);
}

arrRev(arr);