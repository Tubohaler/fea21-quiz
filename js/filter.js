// Skriv en funktion som tar bort matvaror från
// en given array och returnerar en ny array med acceptabel mat.
// Använd dig av .filter()

const nastyFoods = ["Pannkakor", "Lingonsylt", "Fläsksvålar"];

function noNastyFood(array) {
  return array.filter((mums) => !nastyFoods.includes(mums));
}

const result = noNastyFood([
  "Korv",
  "Sylta",
  "Pannkakor",
  "Chips",
  "Lingonsylt",
]);
console.log(result); // ["Korv", "Sylta", "Chips"]

module.exports = noNastyFood;
