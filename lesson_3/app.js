//while
var i = 0
while (i <= 10) {
  i++
  console.log(i);
}

var fruits = ['banana', 'orange', 'pineapple', 'raspberry']
var fruitsForFound = 'pineapple'
var i = 0
while (i < fruits.length) {
  if (fruits[i] === fruitsForFound) {
    console.log(`fruit found ${i}`);
    i++
  }  
}

//for ... of
var numbers = [1, 2, 3, 4, 5, 6]

for (var number of numbers) {
  console.log(number);
}

//for in
var user = {
  name: 'Egor',
  surname: 'Panichkin',
  age: 45,
  isMarried: false,
  address: {
    city: 'Bishkek',
    street: null
  }
}

for (const key in Object.keys(user)) {
  console.log(key);
  console.log(user[key]);
}

// // Методы массива
var fruits = ['banana', 'orange', 'pineapple', 'raspberry']
fruits.push('apple')
var firstFruit = fruits.shift()
console.log(firstFruit);
fruits.unshift('banana')
console.log(fruits);
var fruit = fruits.pop()
console.log(fruit);
fruits.splice(2, 1)
console.log(fruits);

// Функции
//function decloration
function sayHello() {
  console.log('Hello world');
}

sayHello()
//function expretion
var strLog = function () {
  console.log('HELLO');
}

strLog()

const getMax = function (a , b) {
  console.log(a > b ? a : b);
}

getMax(6, 2)