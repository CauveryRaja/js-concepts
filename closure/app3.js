function sum(a) {
    return function (b) {
        return a+b;
    };
};

console.log('Sum ', sum(5)(2));

for(var i=0; i<5; i++) {
    setTimeout((val) => console.log(val), 2000, i);
}