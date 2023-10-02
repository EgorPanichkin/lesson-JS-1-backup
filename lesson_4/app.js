// var tagsArr = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1']
// var tagsObject = {}
// for (let i = 0; i < tagsArr.length; i++) {
//   if (tagsArr.hasOwnProperty(tagsArr[i])){
//     tagsObject[tagsArr[i]] += 1
//   } else {
//     tagsObject[tagsArr[i]] = 1
//   }
// }

// console.log(tagsObject);

// var getPositionElement = (element, array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       return console.log(i);
//     }
//   }
//   return console.error('404');

// }

// getPositionElement(3, [2, 3, 4, 5])

//HOF
// var alertName = (funcName) => {
//   return funcName()
// }

// var windowName = () => {
//   return alertName('Egor')
// }
// //callback
// alertName(windowName)

// var button = document.querySelector('.btn')

// button.addEventListener('click', function () {
//   console.log('click');
// })

// arr=[1, 2, 3, 4, 5, 6, 7]



// function arraySum(array) {
//   var sum = 0
//   for (number of array) {
//     sum = sum + number;
//   }
//   return console.log(sum);
// }

// arraySum(arr)
// //DOM

// console.dir(document)
// console.dir(document.body)
// console.dir(document.body.style.backgroundColor = 'blue')

// var text = document.getElementsByClassName('text')
// text[1].style.color = 'red'
// text[2].innerHTML = 'Frontend'

// button.onclick 

// ----------------------------------------------------------------------------------------------------------
// CODEVARS


// function presses(phrase) {
//   var count = 0
//   var arrOne = ['a', 'd', 'g', 'j', 'm', 'p', 't', 'w', ' ', '*', '#']
//   var arrTwo = ['b', 'e', 'h', 'k', 'n', 'q', 'u', 'x']
//   var arrThree = ['c', 'f', 'i', 'l', 'o', 'r', 'v', 'y']
//   var arrFour = ['s', 'z']
//   for (let i = 0; i < phrase.length; i++) {
//     var sumbol = phrase[i].toLowerCase()
//     console.log(sumbol);
//     for (const value of arrOne) {
//       if(sumbol === value) count++
//     }
//     for (const value of arrTwo) {
//       if(sumbol === value) count += 2
//     }
//     for (const value of arrThree) {
//       if(sumbol === value) count += 3
//     }
//     for (const value of arrFour) {
//       if(sumbol === value) count += 4
//     }
//   }
//   return count
// }


var arr = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8]

var number = "2 to odo"

function evenOrOdd(number) {
  number = Number(number[0])
  if (number % 2 === 0) {
    return console.log('Even')
  } else if (number % 2 === 1){
    return console.log('Odd')
  }
}

console.log(evenOrOdd(number));

// -----------------------------------------------------------
// function presses(phrase) {
//   phrase = phrase.toString()
//   phrase = phrase.toLowerCase()
//   console.log(phrase);
//   var count = 0
//   var arrOne = ['a', 'd', 'g', 'j', 'm', 'p', 't', 'w', ' ', '*', '#', '1']
//   var arrTwo = ['b', 'e', 'h', 'k', 'n', 'q', 'u', 'x', '0']
//   var arrThree = ['c', 'f', 'i', 'l', 'o', 'r', 'v', 'y']
//   var arrFour = ['s', 'z', '2', '3', '4', '5', '6', '8']
//   var arrFive = ['7', '9']
//   for (let i = 0; i < phrase.length; i++) {
//     var sumbol = phrase[i]
//     for (const value of arrOne) {
//       if(sumbol === value) count++
//     }
//     for (const value of arrTwo) {
//       if(sumbol === value) count += 2
//     }
//     for (const value of arrThree) {
//       if(sumbol === value) count += 3
//     }
//     for (const value of arrFour) {
//       if(sumbol === value) count += 4
//     }
//     for (const value of arrFive) {
//       if(sumbol === value) count += 5
//     }
//   }
//   return count
// }

// console.log(presses('L01234567l'));

// var tomatos = (total - 54) % 61
// console.log(tomatos)
// var x = ((total - 54)-tomatos)/61
// console.log(x)
// var bananas = 9 + (30 * x)
// console.log(bananas)
// return bananas;
