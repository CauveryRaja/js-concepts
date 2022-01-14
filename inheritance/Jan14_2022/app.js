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

// function Student(course, grade) {
//     this.course = course;
//     this.grade = grade;
// }

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