console.log("baba");
require('dotenv').config();


const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/back',(req, res)=>{
    res.send('<h1>Welcome to chai aur backend </h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})