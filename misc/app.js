// Declaring Variable and Function with same name
var foo = 5;
function foo() {
    console.log('Inside foo function...');
}

console.log(foo()); // throws 'foo is not a function'

let foo = 5;
function foo() { // throws 'Identifier foo has already been declared'
    console.log('Inside foo function...');
}