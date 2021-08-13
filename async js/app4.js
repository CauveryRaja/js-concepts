// const timeoutId = setTimeout(function print(msg) {
//     console.log('Inside Timeout', msg);
// }, 3000, 'hello');

// console.log(timeoutId);
// // clearTimeout(id);

// const intervalId = setInterval(function print() {
//     console.log('Inside Interval');
// }, 1000);

// console.log(intervalId);

// // Recursive timeout
// setTimeout(function print(msg) {
//     console.log('Inside Timeout', msg);
//     setTimeout(print, 2000, 'hai');
// }, 3000, 'hello');

// Promises with setTimeout
console.log('Before timeout promise');
const custom = new Promise((resolve, reject) => {
    console.log('Inside Promise');
    setTimeout(() => {
        console.log('Hello World !');
        resolve();
    }
    , 2000);
});

custom
.then(() => console.log('Resolved !'))
.catch(() => console.log('Rejected !'))

// Promise with setInterval
console.log('Before interval promise');
const custom2 = new Promise((resolve, reject) => {
    console.log('Inside Promise');
    setInterval(() => {
        console.log('Hello World !');
        reject();
    }
    , 2000);
});

custom
.then(() => console.log('Resolved !'))
.catch(() => console.log('Rejected !'))