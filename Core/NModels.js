/**
 * Created by Damon_000 on 13-11-25.
 */
function NModels() {
    this.initialize.apply(this, arguments);
};
NModels.prototype = {
    DataBase: null,
    initialize: function () {
        var conn = require('../Data/DataBase');
        this.DataBase = conn.DataBase;
    },
    find: function (sql, values, callback) {
        if (typeof values === 'function') {
            callback = values;
            values = null;
        }
        this.DataBase.query(sql, values, function (err, rows, fields) {
            callback(err, rows, fields);
        });
    },
    get: function (sql, values, callback) {
        if (typeof values === 'function') {
            callback = values;
            values = null;
        }
        this.DataBase.query(sql, values, function (err, rows, fields) {
            callback(err, rows[0], fields);
        });
    },
    execute: function (sql, values, callback) {
        if (typeof values === 'function') {
            callback = values;
            values = null;
        }
        this.DataBase.query(sql, values, function (err, results) {
            callback(err, results);
        });
    },
    scalar: function (sql, values, callback) {
        if (typeof values === 'function') {
            callback = values;
            values = null;
        }
        this.DataBase.query(sql, values, function (err, rows, fields) {
            var result = '';
            var r = rows[0];
            for (var i in r) {
                result = r[i];
                break;
            }
            callback(err, result, fields);
        });
    }
};
exports.NModels = new NModels();