const connection = require("../config/connection");

//Create Qmarks function
function createQmarks (num) {
    let array = [];
    for(let i = 0; i < num; i++){
        array.push("?");
    }
    return array.toString();
}


function translateSql(obj) {
    let array = [];
    for(let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + VALUE + "'";
            }
            array.push(key + "=" + value)
        }
    }
    return array.toString()
}

const orm = {
   selectAll: function(table, cb) {
       let dbQuery = "SELECT * FROM" + TABLE + ";";

       connection.query(dbQuery, function (err, res) {
            if(err) {
                throw err;
            }
            cb(res);
       });
   },

   insertOne: function(table, cols, vals, cb) {
       let dbQuery = 
        "INSERT INTO" + 
        table + 
        " (" + 
        cols.toString() + 
        ") " + 
        "VALUES (" + 
        createQmarks(vals.length) +
        ") ";

        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
   },

    updateOne: function (table, objColVals, condition, cb) {
        let dbQuery=
            "UPDATE" +
            table +
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
    }
};