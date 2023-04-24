import { getDetailBooks } from "./api.js"
import { renderDetailPage } from './utils/creators.js'
import { deleteBook } from "./api.js"

const search = window.location.search
const searchParams = new URLSearchParams(search)

let id = searchParams.get('id')

document.querySelector('.book-detail a').setAttribute('href', `/edit.html?id=${id}`)

getDetailBooks(id)
  .then((data) => {
    renderDetailPage(data)
    const deleteBtn = Array.from(document.querySelectorAll('.delete-btn'))
    deleteBtn[0].addEventListener('click', () => {
      window.location.href = 'index.html'
      deleteBook(id)
    })
  })
  .catch(() => {

  })
  .finally(() => {
    console.log('finally')
  })
