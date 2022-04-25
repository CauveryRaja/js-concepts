function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, major, grade) {
    Person.call(this, name, age);
    this.major = major;
    this.grade = grade;
}

let student = new Student('ram', 20, 'CSE', 'O');
console.log(student);