function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.isPerson = true;
Person.prototype.showAge = function() {
    console.log(this.name + ' is ' + this.college + ' years old');
}

function Student(name, age, grade, college) {
    Person.call(this, name, age);
    this.grade = grade;
    this.college = college;
}

Object.assign(Student.prototype, Person.prototype);

Student.prototype.isStudent = true;
Student.prototype.showGrade = function() {
    console.log(this.grade + ' grade in ' + this.college);
}

const obj = new Student('ram', 25, 'A', 'KSRCT');
const obj2 = new Student('raja', 24, 'S', 'KSRCT');

console.log(obj, obj2);