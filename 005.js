const person = {
  name: "Mohamed",
  age: 30,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

// or
const { name, age } = person;
console.log(name, age);

const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
