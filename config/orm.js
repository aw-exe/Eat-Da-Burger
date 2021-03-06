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
   all: function(table, cb) {
       let dbQuery = "SELECT * FROM " + table + ";";

       connection.query(dbQuery, function (err, res) {
            if(err) {
                throw err;
            }
            cb(res);
       });
   },

   create: function(table, cols, vals, cb) {
       let dbQuery = 
        "INSERT INTO " + 
        table + 
        " (" + 
        cols.toString() + 
        ") " + 
        " VALUES (" + 
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

    update: function (table, objColVals, condition, cb) {
        let dbQuery=
            " UPDATE " +
            table +
            " SET " +
            translateSql(objColVals) +
            " WHERE " +
            condition;

        console.log(dbQuery);

        connection.query(dbQuery, vals, function (err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        }); 
    },

    delete: function(table, condition, cb) {
        let dbQuery = "DELETE FROM " + table + " WHERE " + condition;
        console.log(dbQuery);

        connection.query(dbQuery, function (err, res){
            if(err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;