const countries = ["India", "United States", "France", "Japan", "Brazil", "Australia", "Germany", "Canada", "Italy", "South Korea"];

const capitals = ["New Delhi", "Washington, D.C.", "Paris", "Tokyo", "Brasília", "Canberra", "Berlin", "Ottawa", "Rome", "Seoul"];

const getCapital = function (country) {
  const index = countries.indexOf(country);
  return index < 0 ? 'Not exists in an array.' : capitals[index];
}

const country = prompt("Enter a country Name : ");
console.log("Capital of ", country, " : ", getCapital(country));