/**
 * Created by Damon_000 on 13-11-25.
 */
function dbconfig() {
    this.initialize.apply(this, arguments);
};
dbconfig.prototype = {
    initialize: function () {
    },
    db: {
        host: '192.168.1.160',
        user: 'root',
        password: 'root',
        database: 'gt_info',
        port: 3306
    }
};
exports.dbconfig = new dbconfig();