const express = require('express')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const url = "mongodb+srv://Antroz:123321@cluster0.avbav.mongodb.net/test";
MongoClient.connect(url, (err, client) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("STUDENCI");
        dbo.createCollection("numer albumu imie nazwisko", function(err, res) {
            
          if (err) throw err;
          console.log("Utworzono");
          db.close();
        });
      });
  })

//polaczenie



app.listen(3000, function() {
    console.log('listening on 3000')
  })
   app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')  })
 



  app.use(bodyParser.urlencoded({ extended: true }))
  app.get('/', (req, res) => {/*...*/})
  app.post('/quotes', (req, res) => {console.log(req.body)})