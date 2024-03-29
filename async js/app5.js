console.log('Starting Async JS');

setTimeout(() => console.log('timeout'), 1000);
// setInterval(() => console.log('interval'), 500);

// Promise with setTimeout
const promise = new Promise((resolve, reject) => {
    console.log('Executing Timeout promise');
    setTimeout(() => resolve(5), 2000);
});
promise
.then(data => console.log('Timeout Resolved value', data))
.catch(err => console.log('Timeout Rejected value', err));

// Promise with setInterval
const promise2 = new Promise((resolve, reject) => {
    console.log('Executing Interval promise');
    // setInterval(() => resolve(5), 2000);
    setTimeout(() => reject(10), 5000);
});
promise2
.then(data => console.log('Interval Resolved value', data))
.catch(err => console.log('Interval Rejected value', err));

// Listening to multiple promises
Promise.all([promise, promise2])
.then(data => {
    console.log('All promises resolved value', data)
})
.catch(err => {
    console.log('All promises rejected value', err)
});
Promise.allSettled([promise, promise2])
.then(data => {
    console.log('All Settled promises resolved value', data)
})
.catch(err => {
    console.log('All Settled promises rejected value', err)
});

// Chaining promises
promise
.then(data => data+50)
.then(data => console.log('Chaining promises ', data));

// Understanding Fetch
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: {
        id: 20,
        description: 'my todo',
        completed: false
    }
})
.then(res => res.json())
.then(data => console.log(data));

console.log('Ending Async JS');