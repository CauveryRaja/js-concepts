let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('executing');
        resolve();
    }, 2000);
});

promise.then(() => console.log('done'))