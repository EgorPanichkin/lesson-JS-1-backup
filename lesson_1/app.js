console.log('Hello world!')

// Переменная
var name = 'Egor'
var nameAndSurname = 'Egor Panichkin'
console.log(name + '' + nameAndSurname)
console.log(name, nameAndSurname)

//Типы данных
//1) string 

var name2 = 'Alexey'
console.log(typeof name2)
// 2) number

var number = 52
console.log(number)

// 3) boolean

var num1 = 78
var num2 = '78'
console.log(num1 === num2);

// Условные конструкции If else

// var login = prompt('Enter login')
// var password = prompt('Enter password')

// var login2 =prompt('enter your login')
// var password2 =prompt('enter your password')

// if (login === login2 && password === password2) {
//   alert('ok')  
// } else {
//   console.error('error')
// }

var userName = prompt('enter name')
var userSurName = prompt('enter surname')
var userAge = prompt('enter age')

if (userAge <= 18) {
  console.log('Привет ' + userName)
} else if (userAge >= 19 && userAge <= 60) {
  console.log('Здрвствуйте ' + userName)
}
else if (userAge >= 61 && userAge <= 80) {
  console.log('Дорый день ' + userName)
} else {
  console.log('Введите корректный возраст');
}

