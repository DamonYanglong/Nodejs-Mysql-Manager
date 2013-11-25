/**
 * Created by Damon_000 on 13-11-25.
 */
function DataBase() {
    this.initialize.apply(this, arguments);
};
DataBase.prototype = {
    mysql: null,
    _db: null,
    mysql_conn: null,
    initialize: function () {
        this.mysql = require('mysql');
        this._db = require('../Config/dbconfig');
        this.mysql_conn = this.mysql.createConnection(this._db.dbconfig.db);
    },
    query: function (sql, values, callback) {
        this.mysql_star();
        if (typeof values === 'function') {
            callback = values;
            values = null;
        }
        this.mysql_conn.query(sql, values, function (err, rows, fields) {
            if (err) {
                this.mysql_err(err);
            }
            callback(err, rows, fields);
        });
        this.mysql_end();
    },

    mysql_star: function () {
        this.mysql_conn.connect();
    },
    mysql_end: function () {
        this.mysql_conn.end();
    },
    mysql_err: function (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            this.mysql_star();
        } else {
            throw  err;
        }
    }
};
exports.DataBase = new DataBase();