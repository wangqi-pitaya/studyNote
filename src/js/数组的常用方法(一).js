/** push */
let fruits1 = ['apple', 'banana'];
fruits1.push('orange');
console.log(fruits1); // 输出: ['apple', 'banana', 'orange']

/** pop */
let fruits2 = ['apple', 'banana', 'orange'];
let lastFruit = fruits2.pop();
console.log(lastFruit); // 输出: 'orange'
console.log(fruits2); // 输出: ['apple', 'banana']

/** unshift */
let fruits3 = ['apple', 'banana'];
fruits3.unshift('orange');
console.log(fruits3); // 输出: ['orange', 'apple', 'banana']

/** shift */
let fruits4 = ['orange', 'apple', 'banana'];
let firstFruit = fruits4.shift();
console.log(firstFruit); // 输出: 'orange'
console.log(fruits4); // 输出: ['apple', 'banana']

/** concat */
let fruits5 = ['apple', 'banana'];
let fruits6 = ['orange', 'grape'];
let allFruits = fruits5.concat(fruits6);
console.log(allFruits); // 输出: ['apple', 'banana', 'orange', 'grape']

/** slice */
let fruits7 = ['apple', 'banana', 'orange', 'grape'];
let citrusFruits = fruits7.slice(2);
console.log(citrusFruits); // 输出: ['orange', 'grape']

/** splice */
let fruits8 = ['apple', 'banana', 'orange'];
fruits8.splice(1, 1); // 从索引1开始删除1个元素
console.log(fruits8); // 输出: ['apple', 'orange']

fruits8.splice(1, 0, 'grape', 'watermelon'); // 从索引1开始添加'grape'和'watermelon'
console.log(fruits8); // 输出: ['apple', 'grape', 'watermelon', 'orange']

/** reverse */
let fruits9 = ['apple', 'banana', 'orange'];
fruits9.reverse();
console.log(fruits9); // 输出: ['orange', 'banana', 'apple']

/** sort */
let fruits10 = ['orange', 'banana', 'apple'];
fruits10.sort();
console.log(fruits10); // 输出: ['apple', 'banana', 'orange']

/** forEach */
let fruits11 = ['apple', 'banana', 'orange'];
fruits11.forEach(function(fruit) {
  console.log(fruit);
});

/** filter */
let numbers1 = [1, 2, 3, 4, 5];
let evenNumbers = numbers1.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // 输出: [2, 4]

/** map */
let numbers2 = [1, 2, 3];
let doubledNumbers = numbers2.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // 输出: [2, 4, 6]
