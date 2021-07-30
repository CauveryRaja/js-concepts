a = 10;
var a;

i + 5;  // throws "i is not defined"
let i;

i = 5;  // throws "Cannot access i before initialisation"
let i;

const c;

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