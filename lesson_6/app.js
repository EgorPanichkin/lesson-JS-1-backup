// замыкание 
function createPlayer(name) {
  let score = 0
  return function scoreCount() {
    score ++
    return `${name} - ${score} баллов`
  }
}

const playerOne = createPlayer('Jack')
const playerTwo = createPlayer('Alice')

//rest параметры
function getAllSum(...nums) {
  let sum = nums.reduce((n1, n2) => n1 + n2)
  console.log(sum);
}

getAllSum(3, 4, 3)

// 

function convert(usd, ...soms) {
  console.log(usd, soms)
  return soms.map(som => som/usd)
}

console.log(convert(88, 24000, 5000, 1000)); 
// !!!!!!!!!!!Важно спред операторы исп. в конце!!!!!!!!!!!!!!!!!!

const number1 = [1, 2, 4]
const number2 = [3, 5, 8]

const newArray = [...number1, ...number2]
console.log(newArray);

// default 

const array222 = [1, 2, 3]
const num = array222.join()
console.log(num);

function pushJoin(array, separator) {
  let result = ''
  for (let i = 0; i < array.length; i++) {
    result += array[i] + (i === array. length - 1 ? '':separator)
  }
  return result
}

// console.log(pushJoin([1, 2, 3, 4, 5, 6], '-'));

