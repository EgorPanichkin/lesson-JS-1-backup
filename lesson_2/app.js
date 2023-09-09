// var userINN = '10909200000768'
// var firstNum = Number(userINN[0])
// if ((firstNum === 0 || firstNum === 1 || firstNum === 2) && userINN.length === 14) {
//   console.log('ИНН прошел проверку');
// } else {
//   console.log(' не верный ИНН');
// }

// undefined
// null

var size = 'l'.toLowerCase()

if (size === 'm') {
  console.log('44')
} else if (size === 's') {
  console.log('40')
} else if (size === 'l') {
  console.log('46')
} else {
  console.error('НЕТ');
}

switch (size) {
  case 's':
    console.log('40');
    break
  case 'm':
    console.log('44');
    break
  case 'l':
    console.log('46');
    break
  default:
    console.error('error');
}

//object
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

console.log(user);
console.log(user.name);
console.log(user.address.street);
// методы
user.course = 'GeeKs'
delete user.age
user['isMarried'] = true


console.log(Object.values(user));
console.log(Object.keys(user));
console.log(Object.entries(user))
console.log(user.hasOwnProperty('name'))

//array
var array = ['a', 4, true, null, undefined]

//цикл 
for (let i = 0; i <= 10; i++) {
  console.log(i)
}