const users = [
  { name: "Maryna", email: "maryna@gmail.com", age: 33 },
  { name: "Olga", email: "olga@gmail.com", age: 28 },
  { name: "Anna", email: "anna@gmail.com", age: 25 },
];

for (const { name, email, age } of users) {
  console.log(name, email, age);
}
