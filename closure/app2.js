function parent(x) {
    function child1(y) {
        return x+y;
    }
    return child1;
}
let cb = parent(5);
console.log(cb(2));

function makeSizer(size) {
    return function() {
        document.body.style.fontSize = size + 'px';
    };
}
  
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

function closureWithinLoops() {
    for(let i=0; i<5; i++) {
        var elm = i;
        setTimeout(() => {
            console.log(elm);
        }, 1000*i);
    }
}

closureWithinLoops();