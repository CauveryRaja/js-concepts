let obj = {
    name: 'ram'
};
console.log(obj);
console.dir(obj);

setTimeout(() => {
    obj.name = 'raja';
}, 2000);