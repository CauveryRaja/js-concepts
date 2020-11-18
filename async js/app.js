
// Old Way
// setTimeout(() => {
//     console.log('Callback 1');
//     setTimeout(() => {
//         console.log('Callback 2');
//         setTimeout(() => {
//             console.log('Callback 3');
//         }, 1500);
//     }, 1500); 
// }, 1500);


const getIds = new Promise((resolve, reject) => {
    setTimeout(() => resolve([1, 2, 3, 4]), 2000);
});

const getObj = function(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('ID '+ id), 1500);
    });
}

// ES6 Way - Promises
// getIds.then(ids => {
//     console.log(ids);
//     return getObj(ids[1]);
// })
// .then(str => {
//     console.log(str);
// })

// ES8 - Async Await
async function callAsync() {
    const ids = await getIds;
    console.log(ids);
    const str = await getObj(ids[3]);
    console.log(str);
    return str;
}
callAsync().then(res => console.log('result is ', res));