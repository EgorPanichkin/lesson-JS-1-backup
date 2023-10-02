// const input = document.querySelector('#input')
// const createButton = document.querySelector('#create_button')
// const todoList = document.querySelector('#todo_list')

// const createTodo = () => {
//   if(input.value.trim() === ''){
//     return alert('нельзя вводить пустоту или пробелы')
//   }

// //    1
//   const div = document.createElement('div')
//   const divButtons = document.createElement('div')
//   const deleteButton = document.createElement('button')
//   const editButton = document.createElement('button')
//   const text = document.createElement('h3')
// //    2
//   div.setAttribute('class', 'block_text')
//   divButtons.setAttribute('class', 'div_button')
//   deleteButton.setAttribute('class', 'delete_button')
//   editButton.setAttribute('class', 'edit_button')

//   deleteButton.innerText = 'DELETE'
//   editButton.innerText = 'EDIT'

//   deleteButton.onclick = () => div.remove()
//   // editButton.onclick = () => {
//   //   const editText = prompt(`EDITED: ${text.innerText}`).trim()
//   //   editText === '' ? alert('нельзя вводить пустоту') : text.innerText = editText
//   // }
//   editButton.onclick = () => {
//     const editText = prompt(`EDITED: ${text.innerText}`)
//     editText === '' ?  alert("нельзя вводить пустоту") : text.innerText = editText
//   }

//   text.innerText = input.value
//   divButtons.append(deleteButton, editButton)
//   div.append(text, divButtons)

//   todoList.prepend(div)

//   input.value = ''

//   text.addEventListener('click', () => {
//     text.classList.toggle('toggle')
//   })
// }
// createButton.onclick = ()=> createTodo()

// window.onkeydown = (event) => event.code === 'Enter' ? createTodo() : null

// truthy and falsy - выражения

const element = '0'
console.log(element ? 'true' : 'false')

//this
const human = {
  name: 'Aidana',
  surname: 'Bekova',
  age: 45,
  isMarried: false,
  address: {
      city: 'Bishkek',
      street: null
  },
  g: undefined,
  // showInfo(){
  //   console.log(`${this.name} ${this.surname}`)
  // }
  showInfo2() {
    function info() {
      console.log(`${this.name} ${this.surname}`)
    }
    info()
  }
}

human.showInfo2()

// ООП
class Animal {
  constructor(options) {
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }

  voice(){
    console.log('I am animal')
  }
}

const dogByClass = new Animal({
  name: 'Шарик',
  age: 4,
  hasTail: false
})

console.log(dogByClass);

class Pigs extends Animal {
  constructor (options) {
    super(options);
    this.hooves = options.hooves
  }
}

const peppa= new Pigs({
  name: 'Peppa',
  age: 4,
  hasTail: true,
  hooves: 4,
  color: 'pink'
});

console.log(peppa);