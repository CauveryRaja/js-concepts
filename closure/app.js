// Functions without arguments
// function parentFun() {
//     let x = 5, y;
//     if(x%2==1) {
//         function childFun() {
//             return [x,y];
//         }
//     }
//     // else {
//         y = 10;
//     // }
//     return childFun;
// }
// let childFunInstance = parentFun();
// console.log(childFunInstance());


// Functions with arguments
// function parentFun(x) {
//     return function (y) {
//         return x+y;
//     }
// }
// let fun5 = parentFun(5);
// let fun10 = parentFun(10);
// console.log(fun5(2));
// console.log(fun10(4));


// Practical Closures - Event Handlers
// function handleClick(size) {
//     return function() {
//         document.body.style.fontSize = size + 'px';
//     }
// }
// let size10 = handleClick(10);
// let size14 = handleClick(14);
// let size18 = handleClick(18);
// function init() {
//     document.getElementById('size-10').onclick = size10;
//     document.getElementById('size-14').onclick = size14;
//     document.getElementById('size-18').onclick = size18;
// }


// Emulating Private methods with Closures
// Single Counter using IIFE
// let publicMembers = (function() {
//     let count = 0;
//     function updateCount(val) {
//         count += val;
//     }
//     return {
//         increment: function() {
//             updateCount(1);
//         },
//         decrement: function() {
//             updateCount(-1);
//         },
//         getCount: function() {
//             return count;
//         }
//     }
// })();
// publicMembers.increment();
// publicMembers.increment();
// publicMembers.decrement();
// console.log(publicMembers.getCount());

// Multiple Counters by assigning Function
// let createCounter = function() {
//     let count = 0;
//     function updateCount(val) {
//         count += val;
//     }
//     return {
//         increment: function() {
//             updateCount(1);
//         },
//         decrement: function() {
//             updateCount(-1);
//         },
//         getCount: function() {
//             return count;
//         }
//     }
// };
// let counter1 = createCounter();
// let counter2 = createCounter();
// counter1.increment();
// counter1.increment();
// console.log(counter1.getCount());
// counter2.increment();
// console.log(counter2.getCount());


// Closure Scope Chain
// let num = 10;
// function sum(a) {
//     return function(b) {
//         return function(c) {
//             return function(d) {
//                 return a+b+c+d;
//             }
//         }
//     }
// }
// console.log(sum(num)(2)(3)(2));
// let s1 = sum(num);
// let s2 = s1(5);
// let s3 = s2(5);
// let s4 = s3(5);
// console.log(s4);


// Creating closures in loops: A common mistake
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}
  
function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
        ];

    for (var i = 0; i < helpText.length; i++) {
        let item = helpText[i];
        document.getElementById(item.id).onfocus = function() {
            showHelp(item.help);
        }
    }
}