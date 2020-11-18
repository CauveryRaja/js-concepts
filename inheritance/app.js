function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.validAge = function() {
    console.log(this.age);
}

function Student(name, age, grade, section) {
    Person.call(this, name, age);
    this.grade = grade;
    this.section = section;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.validGrade = function() {
    console.log(this.age);
}

let s1 = new Student('ram', 10, 1, 'B');
console.log(s1, s1.validAge());