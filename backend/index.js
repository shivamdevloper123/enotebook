const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
connectToMongo();
const app = express()
const port = process.env.PORT; 

app.use(cors({
// origin:"https://enotebook-frontend.vercel.app"
}))
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('Hello World! hi my name is ..')
})

app.listen(port, () => {
  console.log(`eNotebook listening on port http://localhost:${port}`)
})
