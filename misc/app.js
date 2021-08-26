/* // Declaring Variable and Function with same name
var foo = 5;
function foo() {
    console.log('Inside foo function...');
}

console.log(foo()); // throws 'foo is not a function'

// If variable is not defined, function will take preference. Since variables are hoisted first and then functions.
function foo() {
    console.log('Inside foo function...');
}
var foo; // Just declared not defined

console.log(foo); // This prints the function

let foo = 5;
function foo() { // throws 'Identifier foo has already been declared'
    console.log('Inside foo function...');
}
*/

// function foo() {
//     console.log('Inside foo function...');
// }

// function foo() {
//     console.log('Inside foo function 2...');
// }

// foo(); // last implementation will override previous ones



