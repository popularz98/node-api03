const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: '157.245.59.56',
  user: 'u6401510',
  password: '6401510',
  database: 'u6401510_final',
  port: 3366
})

var app = express()
app.use(cors())
app.use(express.json())

app.get('/', function(req, res) {
    res.json({
      "status": "ok",
      "message": "Hello World"
    })
  })

app.get('/final_project', function(req, res) {
    connection.query(
      'SELECT * FROM final_project',
      function(err, results) {
        console.log(results) //แสดงผลที่ console
        res.json(results) //ตอบกลับ request
      }
    )
  })

app.post('/final_project', function(req, res) {
    const email = req.body.email
    const fullname = req.body.fullname
    const city = req.body.city
    connection.query(
      `INSERT INTO final_project (ID, DATE, TIME, TDS) VALUES (?, ?, ?, ?)`,
      [ID, DATE, TIME, TDS],
      function(err, results) {
        if (err) { res.json(err) }
        res.json(results)
      }
    )
  })
  
    
app.listen(5000, () => {
  console.log('Server is started.')
})
