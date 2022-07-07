function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getBirthYear = function () {
    console.log(new Date().getFullYear() - this.age);
}

function Student(name, age, course, grade) {
    Person.call(this, name, age);
    this.course = course;
    this.grade = grade;
}

Student.prototype.onExam = function () {
    console.log(this.name, 'is studying for', this.course);
};

Object.assign(Student.prototype, Person.prototype);

let student = new Student('raja', 25, 'CSE', 'S');
console.log(student);
student.onExam();
student.getBirthYear();