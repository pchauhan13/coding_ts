class Student
{
    fullName: string;
    constructor(public firstName: string, public middleName: string, public lastName: string)
    {
        this.fullName = this.firstName + " " + this.middleName + " " + this.lastName;
    }
}

interface Person
{
    firstName: string;
    lastName: string;
}

function greeter(person: Person)
{
    return "Hello, " + person.firstName + " " + person.lastName;
}

console.log(greeter(new Student("Prashant", "Singh", "Chauhan")));
