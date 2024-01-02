import express from 'express';
import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
  host: "localhost",
  user: "alsrl6678",
  password: "alsrl1004",
  database: "wise_saying",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

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

app.get("/wise-sayings", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM wise_saying ORDER BY id DESC");

  res.json(rows);
});


app.get("/wise-sayings/:id", async (req, res) => {
  const { id } = req.params
  const [rows] = await pool.query("SELECT * FROM wise_saying WHERE id = ?", [
    id,
  ]);
  // 요청한 id가 존재하지않을경우(등록된 데이터가없을경우) not found 에러표시
  if ( rows.length == 0) {
    res.status(404).send('not found');
  }
  res.json(rows[0]);
});


app.listen(port, () => {
  console.log(`Examㅎple app listening on port ${port}`)
})