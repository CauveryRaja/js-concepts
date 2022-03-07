// Flattening an array

let arr = [1, 2, [3, 4], [[5, 6], 7, 8], 9];

// function flatten(arr) {
//     let flatted = [];
//     merge(arr, flatted);
//     return flatted;
// }

Array.prototype.flatten = function() {
    let flatted = [];
    merge(this, flatted);
    return flatted;
}

function merge(arr, flatted) {
    arr.forEach(elm => {
        if(Array.isArray(elm)) {
            merge(elm, flatted);
        }
        else {
            flatted.push(elm);
        }
    });
}

console.log(arr.flatten());

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Max', age: 30 }
];

function groupBy(arr, property) {
    return arr.reduce((grouped, obj) => {
        let key = obj[property];
        if(grouped[key]) {
            grouped[key].push(obj);
        }
        else {
            grouped[key] = [obj];
        }
        return grouped;
    }, {})
}

console.log(groupBy(people, 'name'));