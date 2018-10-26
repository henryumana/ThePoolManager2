var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'holacode', //change password to yours
  database : 'nodemysql'
});

var insertBooking = function (company, name, reason, hour, date, callback) {
  connection.query("INSERT INTO booking(company, name, reason, hour, date ) VALUES (?, ?, ?, ?, ?) ",
  [company, name, reason, hour, date], (err,results)=>{
    if(err){
    callback(err,null)
  }else {
    callback(null,results)
  }
}
);
}


var insertEvent = function (name, activity, dateTime, inviteType, contactInfo, callback) {
  connection.query("INSERT INTO eventform (name, activity, dateTime, inviteType, contactInfo) VALUES (?, ?, ?, ?, ?) ",
  [name, activity, dateTime, inviteType, contactInfo], (err,results)=>{
    if(err){
    callback(err,null)
  }else {
    callback(null,results)
  }
}
);
}

var insterCounter = function (likes){
  connection.query("INSERT INTO counter (likes) VALUES (?)",
  [likes], (err,results) =>{
    if(err){
      callback(err,null)
    }else{
      callback(null,results)
    }
  }
);
}



module.exports.insertBooking = insertBooking;
module.exports.insertEvent = insertEvent;
module.exports.insterCounter = insterCounter;
