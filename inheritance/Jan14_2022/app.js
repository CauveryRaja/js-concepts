function Person(name, dob) {
    this.name = name;
    this.dob = dob;
}

Person.prototype.computeAge = function() {
    console.log('Compute age...', this.dob);
};

let person = new Person('ram', 25);
console.log('Person', person);
person.computeAge();

function Student(name, dob, course, grade) {
    Person.call(this, name, dob);
    this.course = course;
    this.grade = grade;
}

Object.assign(Student.prototype, Person.prototype);
let student = new Student('raja', 25, 'CSE', 'O');
console.log('Student', student);

// Objects won't have access to normal functions prototype
// function Student(course, grade) {
//     return {
//         course, grade
//     }
// }

// Student.prototype.computePercentage = function() {
//     console.log('Computing percentage')
// };

// let student = new Student('CSE', 'O');
// console.log('Student', student);
// student.computePercentage();