// Polyfills for Promise

// function MyPromise(callback) {
//     let resolve, reject;
//     this.then = (resolveHandler) => {
//         resolve = resolveHandler;
//         return this;
//     }

//     this.catch = (rejectHandler) => {
//         reject = rejectHandler;
//         return this;
//     }

//     callback(resolve, reject);
// }


// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => resolve(), 3000);
// });

// promise.then(() => console.log('resolved')).catch(() => console.log('rejected'));





// Implemenation 2

function MyPromise(callback) {
    let resolve, reject;
    let isResolved, result;
    this.then = (resolveHandler) => {
        resolve = resolveHandler;
        return this;
    }

    this.catch = (rejectHandler) => {
        reject = rejectHandler;
        return this;
    }

    callback((data) => {
        isResolved = true;
        result = data;
    }, (err) => {
        isResolved = false;
        result = err;
    });

    if(isResolved) {}
}


const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve(), 3000);
});

promise.then(() => console.log('resolved')).catch(() => console.log('rejected'));