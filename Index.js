/**
 * Created by Damon_000 on 13-11-25.
 */

var conn = require('./Core/NModels');
conn.NModels.get('select * from tbl_users where FUsersId=? limit 1', [8193], function (err, rows, fields) {
    console.log(rows);
});
