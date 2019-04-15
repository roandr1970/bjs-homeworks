function compareArrays (arr1,arr2) {
    (arr1.length === arr2.length) ? console.log ( arr1.every((value, index) => value === arr2[index])) : console.log (false);
}

compareArrays([1,2,3],[1,2,3]);
compareArrays([2,3],[1,2,3]);
compareArrays([3,2,1],[1,2,3]);
compareArrays([1,2,3],[3]);

function memoize(fn, limit) {
    let result = [{
      args: [],
      result
    }];
    return function fn() {
    }
}