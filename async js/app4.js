const timeoutId = setTimeout(function print(msg) {
    console.log('Inside Timeout', msg);
}, 3000, 'hello');

console.log(timeoutId);
// clearTimeout(id);

const intervalId = setInterval(function print() {
    console.log('Inside Interval');
}, 1000);

console.log(intervalId);

// Recursive timeout
setTimeout(function print(msg) {
    console.log('Inside Timeout', msg);
    setTimeout(print, 2000, 'hai');
}, 3000, 'hello');