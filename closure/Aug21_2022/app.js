// Callback sum - sum(1)(2)(3)(4)(5)...()

function sum(a) {
    return function(b) {
        return b ? sum(a+b) : a;
    }
}

let res = sum(1)(2)(3)(4)(5)(6)(7)();
console.log(res)