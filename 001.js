let name = "Mohamed";
let age = 30;
let hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name " +
    userName +
    ", Age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
