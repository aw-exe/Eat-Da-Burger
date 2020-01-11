const connection = require("../config/connection");

const orm = {
   selectAll: function(table, cb) {
       var dbQuery = "SELECT * FROM" + TABLE + ";";

       connection.query(dbQuery, function (err, res) {
            if(err) {
                throw err;
            }
            cb(res);
       });
   }
   insertOne: function(table, cols, conts, cb) {
       let dbQuery = 
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
            cb(res);
        });
   }

    updateOne: function (table, objColVals, condition, cb) {
        let dbQuery=
            "UPDATE" +
            TABLE +
            "SET" +
            translateSql(objColVals) +
            "WHERE" +
            condition;

            console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if(err) {
                throw err;
            }
            cb(res);
           });
        
    },

    deleteOne: function(table, condition, cb) {
        let dbQuery = "DELETE FROM" + TABLE + "WHERE" + condition;
        console.log(dbQuery);

        connection.query(dbQuery, function (err, res){
            if(err) {
                throw err;
            }
            cb(res);
        });
    },
};