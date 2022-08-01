let count = 0;

setInterval(() => {
    console.log('interval...');
    console.log('before incrementing', count);
    count++;
    console.log('after incrementing', count);
}, 1000);

setTimeout(() => {
    console.log('timeout...');
    console.log('before incrementing', count);
    count++;
    console.log('after incrementing', count);
}, 2000);