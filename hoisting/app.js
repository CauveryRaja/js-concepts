a = 10;
var a;

// throws "i is not defined"
// i + 5;
// let i;

// throws "Cannot access j before initialisation"
// j = 5;
// let j;

// Two functions with same name
function foo() {
    function bar() {
        return 5;
    }
    return bar();
    function bar() {
        return 10;
    }
}

console.log(foo());

// Duplicate names for function and variables
var sum;
function sum() {
    return 'sum';
}
console.log(sum);
