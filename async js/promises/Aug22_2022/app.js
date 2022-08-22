let promise = new Promise((resolve, reject) => {
    console.log('inside promise')
    setTimeout(() => {
        console.log('resolving');
        resolve();
    }, 2000);
});

promise
.then(() => console.log('resolved'))
.catch(() => console.log('rejected'))