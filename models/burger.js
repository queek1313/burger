var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (updateColVal, updateValue, id, cb) {
        orm.updateOne("burgers", updateColVal, updateValue, id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;