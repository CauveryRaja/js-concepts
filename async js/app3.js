// let customPromise = new Promise((resolve, reject) => {
//     reject('hello');
// });

// let name = 'ram';

// customPromise
// .then(value => console.log(value))
// .catch(err => console.log('Error message : ', err));

// function asyncFun() {

// }

// function animate() {
//     console.log('Welcome to Async JS');
//     setInterval(animate, 17);
// }

// animate();

console.log('Creating promise..');
const custom = new Promise((resolve, reject) => {
    // resolve(5);
    console.log('inside promise...')
    setTimeout(() => reject('Type check failed'), 2000);;
});

console.log(custom);