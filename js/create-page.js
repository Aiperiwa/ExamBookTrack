import { createBook } from './api.js'
const link = document.querySelector("a")
link.href = "http://127.0.0.1:5500/index.html"

const [inputName, inputAuthor, inputPublishYear, inputPublishHouse, inputPagesNumber, inputGenres, inputOriginalLanguage] =
  ['name', 'author', 'publishYear', 'publishHouse', 'pagesNumber', 'genres', 'originalLanguage']
    .map((name) => document.querySelector(`#${name}`))


const saveBtn = document.querySelector('#save-create-btn')

saveBtn.addEventListener('click', (e) => {
  e.preventDefault()

  let newData = {
    name: inputName.value,
    author: inputAuthor.value,
    publishYear:  Number(inputPublishYear.value),
    publishHouse: inputPublishHouse.value,
    pagesNumber: Number(inputPagesNumber.value),
    genres: Array(inputGenres.value),
    originalLanguage: inputOriginalLanguage.value
  }
  link.click()

  createBook(newData)


  console.log(newData)
})