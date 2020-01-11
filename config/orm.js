const connection = require("../config/connection");

const orm = {
   selectAll: function(table, cb) {
       var dbQuery = "SELECT * FROM" + TABLE + ";";

       connection.query(dbQuery, function (err, res) {
            if(err) {
                throw: err;
            }
            cb(res);
       });
   } 
   insertOne: function(table, cols, conts, cb) {
       const dbQuery = 
       "INSERT INTO" + 
       TABLE + 
       "(" + 
       cols.toString() + 
       ")" + 
       "VALUES (" + 
       createQmarks(val.length) +
        ")";

        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                thorw err;
            }
            cb(res;)
        });
   }
};