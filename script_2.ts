interface Person
{
    firstName: string;
    lastName: string;
}

function greeter(person: Person)
{
    return "Hello " + person.firstName + " " + person.lastName;
}

console.log(greeter({firstName: "Prashant", lastName: "Singh"}));