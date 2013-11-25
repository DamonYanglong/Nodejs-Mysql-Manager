/**
 * Created by Damon_000 on 13-11-25.
 */
var conn = require('./Business/Public/Category');
conn.Category.GetAll(function (err, rows, fields) {
    console.log(rows);
});
