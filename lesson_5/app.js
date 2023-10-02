var button = document.getElementById('btn')
var btn = document.getElementsByTagName('buttons')
//
var divClass = document.querySelector('.block')
var divAll = document.querySelectorAll('.block')
var divID = document.querySelector('#box')
// event
var button2 = document.querySelector('.clickBtn')
button2.addEventListener('click', () => {
  console.log("click");
})

// add div
var wrapper = document.querySelector('.wrapper')
// var newDiv = document.createElement('div')
// newDiv.setAttribute('class', 'block')
// wrapper.append(newDiv)

document.querySelector('.addDiv').onclick = () => {
  var newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'block')
  wrapper.append(newDiv)
}

//методы массива
//filter()

var fruits = ['apple', 'cherry', 'pineapple', 'banana', 'orange']
var filterFruits = fruits.filter((fruit) => fruit.length > 6)
console.log(filterFruits);

var users = [
  {name: 'Adam', age: 30},
  {name: 'John', age: 12},
  {name: 'Oliver', age: 17},
  {name: 'Nikita', age: 24},
  {name: 'Aibek', age: 10},
  {name: 'Jannat', age: 21},
  {name: 'Erbol', age: 45},
  {name: 'Alichan', age: 9},
]

var result = users.filter( user => user.age <= 18)
console.log(result)
var result2 = users.filter(user => user.name.toLowerCase().includes('a'))

//map
var numbers = [2, 3, 4, 5, 66, 55, 77, 65]
var newNumbers = numbers.map((num, index) => num * index)
console.log(newNumbers);

var soms = [230000, 45600, 789000, 1000000]
var dollars = soms.map(som => som/88)
console.log(dollars);
var fixDollars = dollars.map(dollar => dollar.toFixed())
console.log(fixDollars);

//forEach
var numbers2 = [2, 34, 45, 56, 67]
numbers2.forEach((num, index) => console.log(num * index))
console.log(numbers2);

var num = [24, 24, 34, 45, 45, 56, 67, 67, 78, 77, 77]
var numSet = new Set(num)
console.log(numSet);

// ES6+
let hello2 ='hello'
console.log(hello2);

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

