const connection = require("../config/connection.js")



var orm = {
    all: function (tableInput, cb) {
        var queryAll = "SELECT * FROM " + tableInput + ";";
        connection.query(queryAll, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    create: function (table, col, val, cb) {
        var queryAdd = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryAdd, [table, col, val], function (err, res) {
            if (err) throw err;
            cb(res);
        });

    },

    update: function (tables, updateCol, updateVal, id, cb) {
        var queryUpdate = "UPDATE ?? SET ?? = ? WHERE id =?";
        connection.query(queryUpdate, [tables, updateCol, updateVal, id], function (err, res) {
            if (err) throw err;
            cb(res);
        })

    }
}
module.exports = orm;