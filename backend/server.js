const express = require("express")
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "userdb",
})

db.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      return;
    }
    console.log("Connected to database");
});
// app.get("/data", (req, res) => {
//     const sql = "SELECT * FROM usertable";
  
//     db.query(sql, (err, result) => {
//       if (err) {
//         console.error("Error executing query:", err);
//         res.status(500).json({ error: "Internal Server Error" });
//         return;
//       }
//       res.json(result);
//     });
// });
app.post('/signup' , (req,res) => {
    const sql = "INSERT INTO usertable (name, age, email, password) VALUES (?,?,?,?)";
    const values=[
        req.body.name,
        req.body.age,
        req.body.email,
        req.body.password
    ]
    // console.log([values])
    db.query(sql,values,(err, data) => {
        if(err) {
            console.error("Error in database operation:", err);
            return res.status(500).json("Internal Server Error");   
        }
        return res.json(data);
    })
})
app.post('/login', (req,res) => {
    const sql = "SELECT * FROM usertable WHERE `email` = ? AND `password` = ?";
    // console.log([values])
    db.query(sql,[req.body.email,req.body.password],(err, data) => {
        if(err) {
            return res.status(500).json("Error");   
        }
        if(data.length > 0) {
            return res.json("Success");
        }
        return res.json("Failed");
    })
})

app.listen(8082, ()=> {
    console.log("listening");
})