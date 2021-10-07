import express from 'express'
import moongose from 'mongoose'
import booksRoutes from './routes/books.js'
import  userRoutes from './routes/user.js'
import dotenv from 'dotenv'
dotenv.config()

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use('/user', userRoutes )
app.use('/books', booksRoutes)





app.get("/", async(req, res) => {
   res.json({
     "mensagem": "mensagem"
   })
}
)
app.listen(3001,() => {
  console.log("pagina subui");
  moongose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
      .then(()=> {
        console.log('connectado com sucesso');
      })
      .catch(err => {
        console.log(err);
      })  
})



