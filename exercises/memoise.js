// let memo = {};

// function getMemo(a, b) {
//     return memo[`${a},${b}`] || memo[`${b},${a}`];
// }

// function setMemo(a, b, sum) {
//     memo[`${a},${b}`] = sum;
// }

// function sum(a, b) {
//     let memoisedSum = getMemo(a, b);
//     if(memoisedSum) {
//         console.log('From memo');
//         return memoisedSum;
//     }
//     else {
//         console.log('Adding', a, b);
//         let sum = a + b;
//         setMemo(a, b, sum);
//         return sum;
//     }
// }

// console.log(sum(5, 0));
// console.log(sum(5, 2));
// console.log(sum(2, 5));
// console.log(sum(5, 2));



// Memoise using Closure
function memo(callback) {
    let cache = {};

    return function() {
        let key = Array.from(arguments).join();
        if(cache[key]) {
            return cache[key];
        }
        else {
            cache[key] = callback(...arguments);
        }
        console.log(cache);
    }
};

function sum(a, b) {
    return a+b;
}

function product(a, b) {
    return a*b;
}

let memoisedSum = memo(sum);

memoisedSum(2, 3);
memoisedSum(1, 4);
memoisedSum(3, 7);

let memoisedProduct = memo(product);

memoisedProduct(2, 3);
memoisedProduct(1, 4);
memoisedProduct(3, 7);