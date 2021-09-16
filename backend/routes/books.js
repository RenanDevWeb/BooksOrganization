import express from 'express'
const route = express.Router()
import {getBooks ,getBookById, addBook , updateBook, deleteBook} from '../controllers/bookController.js'

route.get('/', getBooks)
route.get('/:id', getBookById)
route.post('/', addBook)
route.put('/:id', updateBook)
route.delete('/:id', deleteBook)

export default route