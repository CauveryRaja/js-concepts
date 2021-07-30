function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.displayPerson = function() {
    console.log(this.name + 'is of age ' + this.age);
}

function Student(name, age, standard, marks) {
    Person.call(this, name, age);
    this.standard = standard;
    this.marks = marks;
}
Object.assign(Student.prototype, Person.prototype);
Student.prototype.displayStudent = function() {
    console.log(this.name + 'has got ' + this.marks + ' marks');
}

let stud = new Student('ram', 20, 11, 198);
stud.displayStudent();
stud.displayPerson();