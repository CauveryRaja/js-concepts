function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.getName = function() {
    return this.name;
}

let person1 = new Person('Ram', 20);
console.log(person1, person1.getName());

function Student(name, age, degree, grade) {
    Person.call(this, name, age);
    this.degree = degree;
    this.grade = grade;
}
// Student.prototype = { ...Student.prototype, ...Person.prototype };
Object.assign(Student.prototype, Person.prototype);
Student.prototype.getQualification = function() {
    return this.degree + ' with grade ' + this.grade;
}

let student = new Student('Raja', 24, 'BE', 8.5);
console.log(student, student.getQualification());
