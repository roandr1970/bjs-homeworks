function compareArrays (arr1,arr2) {
  return (arr1.length === arr2.length) ? arr1.every((value, index) => value === arr2[index]) : false;
}

function memoize(fn, limit) {
  let results = [{
    args: [],
    result: 0
  }];
  
  return function fn() {
    let arg = Array.from(arguments);
    let task = results.find(compareArrays(currentValue, index, arg));
    if(task !== undefined) {
      return results;
    } else {
        let sum = 0;
        for (let i = 0; i < arg.length; i++) {
            sum = sum + arg[i];
        }
        results.push(arg,sum);
     }
     
    if (results.length >= limit) {
      results.shift();  
    }
    return results;
  }  
}

console.log(memoize(1,2,3));