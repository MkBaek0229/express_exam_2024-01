import express from 'express';
import pool from "mysql2/promise";

const app = express()
const port = 3000

const wiseSayings = [
  {
    content:"나는 의적이다.",
    author:"홍길동",
  },
  {
    content:"나는 산적이다.",
    author:"임꺽정",
  }
]
app.get('/', (req, res) => {
  res.send('Hello World!!!')
});

app.get('/wise-saying', (req, res) => {
  res.json(wiseSayings)
})

app.listen(port, () => {
  console.log(`Examㅎple app listening on port ${port}`)
})