const name = "Mohamed";
let age = 30;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

const addOne = a => a+1;

console.log(addOne(5));
console.log(summarizeUser(name, age, hasHobbies));
