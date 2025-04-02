// Functions Assignment

// Function that prints your full name
function printFullName() {
  console.log("John Doe");
}

// Function that takes firstName, lastName as parameters and returns full name
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Function that takes two parameters and returns sum
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Higher Order Functions Assignment
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'IceLand', 'Ireland', 'Japan', 'Kenya'];
const names = ['Tamara', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Console log for country
// countries.forEach(country => console.log(country));

// Console log for name
// names.forEach(name => console.log(name));

// Console log for number
// numbers.forEach(number => console.log(number));

// Create array with uppercase countries
const upperCaseCountries = countries.map(country => country.toUpperCase());
// console.log("Uppercase countries:", upperCaseCountries);

// Create array of country lengths
const countryLengths = countries.map(country => country.length);
// console.log("Country lengths:", countryLengths);

// Create array of squared numbers
const squaredNumbers = numbers.map(number => number * number);
// console.log("Squared numbers:", squaredNumbers);

// Change names to uppercase
const upperCaseNames = names.map(name => name.toUpperCase());
// console.log("Uppercase names:", upperCaseNames);

// Map products to prices
const prices = products.map(product => product.price);
// console.log("Product prices:", prices);

// Filter countries containing "land"
const countriesWithLand = countries.filter(country => country.includes('land'));
// console.log("Countries containing 'land':", countriesWithLand);

// Filter countries with six characters
const sixCharCountries = countries.filter(country => country.length === 6);
// console.log("Countries with exactly 6 characters:", sixCharCountries);

// Filter countries with six or more characters
const sixOrMoreCharCountries = countries.filter(country => country.length >= 6);
// console.log("Countries with 6 or more characters:", sixOrMoreCharCountries);

// Filter countries starting with 'E'
const countriesStartWithE = countries.filter(country => country.startsWith('E'));
// console.log("Countries starting with 'E':", countriesStartWithE);

// Filter products with valid prices
const validPrices = products.filter(product => 
  typeof product.price === 'number' && !isNaN(product.price)
);
// console.log("Products with valid prices:", validPrices);

// Function to find countries with a common pattern
function countriesPattern(pattern) {
  return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
}

// Examples of using countriesPattern
// console.log("Countries containing 'land':", countriesPattern('land'));
// console.log("Countries containing 'ia':", countriesPattern('ia'));
// console.log("Countries containing 'island':", countriesPattern('island'));
// console.log("Countries containing 'stan':", countriesPattern('stan'));

// Objects Assignment

// Create an empty dog object
const dog = {};

// Print the dog object
// console.log("Empty dog object:", dog);

// Add properties to the dog object
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 5;
dog.bark = function() {
  return "Woof woof!";
};


// console.log("Dog object with properties:", dog);

// Get values from the dog object
// console.log("Dog name:", dog.name);
// console.log("Dog legs:", dog.legs);
// console.log("Dog color:", dog.color);
// console.log("Dog age:", dog.age);
// console.log("Dog bark:", dog.bark());
