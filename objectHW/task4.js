const person = {
  firstName: "Maryna",
  lastName: "Zelenska",
  age: 33,
};

person.email = "test@gmail.com";
delete person.age;

console.log(person);
