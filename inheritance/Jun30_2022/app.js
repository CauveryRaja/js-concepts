function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, grade, course) {
    Person.call(this, name, age);
    this.grade = grade;
    this.course = course;
}

let student = new Student('ram', 16, 'O', 'CSE');
console.log(student);