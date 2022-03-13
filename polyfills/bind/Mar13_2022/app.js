let obj = {
    name: 'ram',
    computeId: function() {
        return 'user_' + this.name
    }
};

let obj2 = {
    name: 'raja'
};

// let boundFn = obj.computeId.bind(obj2);
// obj2.name = 'Axul';
// console.log(boundFn(), obj2);



// Implementation using Apply method
function computeId() {
    return 'user_' + this.name
}
Function.prototype.customBind = function(obj, ...params) {
    let method = this;
    return function() {
        return method.apply(obj, params);
    }
};
let boundFn = obj.computeId.customBind(obj2);
// let boundFn = computeId.customBind(obj2);
obj2.name = 'Axul';
console.log(boundFn(), obj2);





// Implementation without using call, apply
function bind(callback, key, object) {
    object[key] = callback;
    return function() {
        console.log(object);
        let result = object[key]();
        delete object[key];
        return result;
    };
};

// let boundFn = bind(obj.computeId, 'computeId', obj2);
// obj2.name = 'Axul';
// console.log(boundFn(), obj2);