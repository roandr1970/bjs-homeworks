ffunction compareArrays (arr1,arr2) {
    return (arr1.length === arr2.length) ? arr1.every((value, index) => value === arr2[index]) : false;
}

compareArrays([1,2,3],[1,2,3]);
compareArrays([2,3],[1,2,3]);
compareArrays([3,2,1],[1,2,3]);
compareArrays([1,2,3],[3]);


function memoize(fn, limit) {
    let results = [{
      args: [],
      result
    }];
    
    return function fn() {
      const task = results.find(resul => resul.args ===  )
    }
}