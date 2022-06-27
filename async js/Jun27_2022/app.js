let intervalId = setInterval(() => {
    console.log('interval...');
}, 1000);

let timeoutId = setTimeout(() => {
    console.log('clearing interval...');
    clearInterval(intervalId);
}, 5000);