let obj1 = {
    'a' : 'hai'
};

console.log(obj1);

let obj2 = {
    12 : 'hai'
};

console.log(obj2);

let obj3 = {
    true : 'hai',
    [12]: 'hello',
};

obj3[false] = 'hello';

console.log(obj3);

let obj4 = {
    // Symbol('12') : 'hai' --- Identifier expected error
    // {}: 'hello' --- Won't work
};

console.log(obj4);
