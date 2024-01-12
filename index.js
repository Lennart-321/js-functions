//Greeting
function greetingSimple() {
  console.log("Hello there my friend!");
}
greetingSimple();

//Greeting with name
function greetingName(name) {
  console.log(`Hello there my friend! You must be ${name}!`);
}
greetingName("Lennart");

//Addition
function add(a, b) {
  return a + b;
}
let sum = add(1, 2);
console.log("Sum = " + sum);

//Division
function divide(a, b) {
  if (b == 0) {
    console.log("Can not divide by 0!");
    //return Math.sign(a) * Infinity;
  }
  return a / b;
}
let quotient = divide(-1, 0);
console.log("Quotient = " + quotient);

//Area
function area(length, width) {
  return length * width;
}
console.log("Area = " + area(1, 2));

//Greeting with name again
function greetingFullName(firstName, lastName) {
  return `Hello ${firstName} ${lastName}! How are you doing?`;
}
console.log(greetingFullName("Mike", "Tyson"));

//Distance converter
function kmToMiles(km) {
  return 0.621371 * km;
}
let miles = kmToMiles(123);
console.log("Miles: " + miles);

//Temprature converter
function celciusToFarenheit(celcius) {
  return celcius * 1.8 + 32;
}
console.log("Farenheit: " + celciusToFarenheit(-10));

//Mean value
function mean(array) {
  let sum = 0;
  array.forEach((n) => {
    sum += n;
  });
  return sum / array.length;
}
let meanVal = mean([1, 2, 3, 4, 5.5, 6, 7, 8, 9, 10]);
console.log("Mean value = " + meanVal);

//Systembolaget
function checkAge(age) {
  let message = "";
  if (0 <= age && age < 15) {
    message = "Get out of here!";
  } else if (age < 18) {
    message = "Sorry, you are not old enough";
  } else if (age < 20) {
    message = "Sorry, you must be atleast 20. Why don't you try a bar instead?";
  } else if (age < 81) {
    message = "Thank you! Welcome!";
  } else if (age >= 81) {
    message = "I'm sorry, where is your caretaker?";
  }
  return message;
}
console.log(checkAge(-1), checkAge(101), checkAge(19));

//Mean value
function total(array) {
  let sum = 0;
  array.forEach((n) => {
    sum += n;
  });
  return sum;
}
console.log("Total sum = " + total([1, 2, 3, 4, 5.5, 6, 7, 8, 9, 10]));

//List a persons' skills
let person = {
  name: "Lennart",
  age: 77,
  city: "Stockholm",
  skills: [
    "Pokemon Master",
    "Kung Fu Legend",
    "Football Ninja",
    "Doing nothing",
    "Time traveling",
  ],
};
function listSkills(person) {
  console.log(`Skills of ${person.name}: ` + person.skills + ".");
}
listSkills(person);
