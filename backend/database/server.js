const moongose = require('mongoose')


const CONNECTION_URL = 'mongodb+srv://root:root@cluster0.ntxjx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const  db = moongose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
      .then(()=> {
        console.log('connectado com sucesso');
      })
      .catch(err => {
        console.log(err);
      })

export default db


