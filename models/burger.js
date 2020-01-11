const orm = require("../config/orm");

//Callback of ORMS
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }
    insertOne: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals, function(res) {
            cb(res);
        });
    }
    updateOne: function(objColVals, condition, cb) {
        orm.selectAll("burgers", objColVals, conditon, function (res) {
            cb(res);
        });
    }
    deleteOne: function(condition, cb) {
        orm.selectAll("burgers", condition, function(res) {
            cb(res);
        })
    }
};

//Exported Variable
module.exports = burger;