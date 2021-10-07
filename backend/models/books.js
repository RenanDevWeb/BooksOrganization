import mongoose  from "mongoose";

const booksSchema = mongoose.Schema({
   title: String,
   author: String,
   category: String,
   pages: Number,
   status: Number,
   username: String,
   createdAt: {
     type: Date,
     date: new Date()
   }
})    

const bookModel = mongoose.model('books', booksSchema)

export default bookModel