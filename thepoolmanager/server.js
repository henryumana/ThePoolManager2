const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const db = require("./db/index");

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

app.post("/booking",function(req,res){
 var company = req.body.booking.company
 var name = req.body.booking.name
 var reason = req.body.booking.reason
 var hour = req.body.booking.hour
 var date = req.body.booking.date

 db.insertBooking(company, name, reason, hour, date, (err,results) =>{
 if(err){
   console.log(err);
     res.sendStatus(500)
   } else {
     res.status(200)
   }

 })
});

app.post("/eventform",function(req,res){
 var name = req.body.event.name
 var activity = req.body.event.activity
 var dateTime = req.body.event.dateTime
 var inviteType = req.body.event.inviteType
 var contactInfo = req.body.event.contactInfo

 db.insertEvent(name, activity, dateTime, inviteType, contactInfo, (err,results) =>{
 if(err){
   console.log(err);
     res.sendStatus(500)
   } else {
     res.send(req.body.event)
   }

 })
 });

 app.post("/counter", function(req,res){
   var likes = req.body.counter;

   db.insterCounter(counter, (err,results) =>{
     if(err){
       console.log(err);
       res.sendStatus(500)
     }else{
       res.status(200)
     }
   })
 })


app.listen(5000, () => {
   console.log('Server started on port 5000');
});
