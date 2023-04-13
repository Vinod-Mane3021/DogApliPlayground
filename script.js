console.log('hello')
//    https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming

// stuff i don't have to wait for
console.log('rin 1st')

const dogImageDiv = document.getElementById('dogImage')
const dogBtnDiv = document.getElementById('dogBtn')

// stuff that i have to wait for
const Dog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      console.log(json.message)
      dogImageDiv.innerHTML = `<img src="${json.message}" height=400 width=400/>`
    })
}

dogBtnDiv.onclick = () => Dog()

console.log('run 3rd')
