// sum(1)(2)(3)(4)(5)...();

// function sum(a) {
//     return function (b) {
//         return b ? sum(a+b) : a;
//     }
// }

const sum = (a) => (b) => b ? sum(a+b) : a;

console.log(sum(1)(2)(3)(4)(5)(6)());