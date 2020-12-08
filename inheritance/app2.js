// Using Function statements
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.display = function() {
//     return this.name + ' is of age ' + this.age;
// }

// function Student(name, age, mark, grade) {
//     Person.call(this, name, age);
//     this.mark = mark;
//     this.grade = grade;
// }

// Student.prototype.calcPercent = function() {
//     return this.mark*100;
// }

// Object.assign(Student.prototype, Person.prototype);

// let stud = new Student('ram', 23, 100, 1);
// console.log(stud);



// Using ES6 classes
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     display() {
//         return this.name + ' is of age ' + this.age;
//     }
// }

// class Student extends Person {
//     constructor(name, age, mark, grade) {
//         super(name, age);
//         this.mark = mark;
//         this.grade = grade;
//     }

//     calcPercent() {
//         return this.mark*100;
//     }

//     get _mark() {
//         return this.mark;
//     }

//     set _mark(mark) {
//         this.mark = mark;
//     }
// }
// let stud1 = new Student('raja', 23, 200, 1);
// console.log(stud1);


// Using Arrow functions
let Person = (name, age) => {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    display : function() {
        return this.name + ' is of age ' + this.age;
    },
    constructor: Person
}
let Student = (name, age, mark, grade) => {
    Person.call(this, name, age);
    this.mark = mark;
    this.grade = grade;
}

Student.prototype = {
    calcPercent : function() {
        return this.mark*100;
    },
    constructor: Student
}

Object.assign(Student.prototype, Person.prototype);

let stud = new Student('ram', 23, 100, 1);
console.log(stud);