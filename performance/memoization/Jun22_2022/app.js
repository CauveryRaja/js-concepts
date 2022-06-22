function memo(callback) {
    let cache = {};
    return function(a, b) {
        let key = a+','+b;
        if(!cache[key]) {
            cache[key] = callback(a, b);
        }
        return cache[key];
    }
}

let sumFn = (a, b) => a+b;
let sumMemo = memo(sumFn);
console.log(sumMemo(1, 3));
console.log(sumMemo(4, 3));
console.log(sumMemo(1, 3));

