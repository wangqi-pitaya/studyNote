/** indexOf、lastIndexOf */
const fruits1 = ['apple', 'banana', 'orange', 'banana'];
let index = fruits1.indexOf('banana');
console.log(index); // 输出: 1

index = fruits1.indexOf('grape');
console.log(index); // 输出: -1

const lastIndex = fruits1.lastIndexOf('banana');
console.log(lastIndex); // 输出: 3

/** includes */
const fruits2 = ['apple', 'banana', 'orange'];
let includes = fruits2.includes('banana');
console.log(includes); // 输出: true

includes = fruits2.includes('grape');
console.log(includes); // 输出: false

/** every */
const numbers1 = [1, 2, 3, 4];
const allEven = numbers1.every(function(number) {
  return number % 2 === 0;
});
console.log(allEven); // 输出: false

const allPositive = numbers1.every(function(number) {
  return number > 0;
});
console.log(allPositive); // 输出: true

/** some */
const numbers2 = [1, 2, 3, 4];
const hasEven = numbers2.some(function(number) {
  return number % 2 === 0;
});
console.log(hasEven); // 输出: true

const hasNegative = numbers2.some(function(number) {
  return number < 0;
});
console.log(hasNegative); // 输出: false

/** find、findIndex */
const numbers3 = [1, 2, 3, 4, 5];
const result1 = numbers3.find(function(element) {
  return element > 3;
});
console.log(result1);  // 输出: 4

const findIndex = numbers3.findIndex(function(element) {
  return element > 3;
});
console.log(findIndex);  // 输出: 3

/** filter */
const numbers4 = [1, 2, 3, 4, 5];
const evenNumbers = numbers4.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // 输出: [2, 4]


/** map */
const numbers5 = [1, 2, 3];
const doubledNumbers = numbers5.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // 输出: [2, 4, 6]


/** join */
const fruits3 = ['apple', 'banana', 'orange'];
const result2 = fruits3.join(', ');
console.log(result2); // 输出: 'apple, banana, orange'


/** toString */
const fruits4 = ['apple', 'banana', 'orange'];
const result3 = fruits4.toString();
console.log(result3); // 输出: 'apple,banana,orange'

/** reduce */
const numbers6 = [1, 2, 3, 4, 5];
const sum = numbers6.reduce(function(total, number) {
  return total + number;
}, 0);
console.log(sum); // 输出: 15


/** forEach */
const numbers7 = [1, 2, 3, 4, 5];
numbers7.forEach(function(number, index, array) {
  array[index] = number * 2;
});
console.log(numbers7); // 输出: [2, 4, 6, 8, 10]


/** isArray */
const numbers8 = [1, 2, 3, 4, 5];
const isNumberArray = Array.isArray(numbers8);
console.log(isNumberArray);  // 输出: true

const object = { name: 'John', age: 25 };
const isObjectArray = Array.isArray(object);
console.log(isObjectArray);  // 输出: false

