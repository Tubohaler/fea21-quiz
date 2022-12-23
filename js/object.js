// Rör ej
const person = {
  firstName: "Oscar",
  lastName: "Nilsson",
  age: 30,
};

// Skriv klart funktionen som skriver ut mitt fulla namn
// OBS: Du får inte ändra funktions-parametrarna.
function printName(first, last) {
  console.log(`${first} ${last}`);
  return `${first} ${last}`;
}

printName(person.firstName, person.lastName); // "Oscar Nilsson"

module.exports = printName;
