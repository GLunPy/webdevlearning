//Function constructor

var john = {
    name: " Jhon",
    yearOfBirth: 1990,
    job: "teacher"
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }

Person.prototype.calculateAge = function (){
        console.log(2017 - this.yearOfBirth);
    }

var jhon = new Person("John", 1990, "teacher");

var jane = new Person("Ana", 1922, "desino")

jane.calculateAge();