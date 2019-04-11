function compareArrays( arr1, arr2 ) {
    if(arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        };
    } else {
        return false
      };
    return true;
};

function main(func) {
    func();
}

const a = [1,2,3];
const b = [1,2,3];

main (compareArrays(a,b));