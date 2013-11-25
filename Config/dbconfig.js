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
        host: '119.57.34.250',
        user: 'root',
        password: 'root',
        database: 'gt_info',
        port: 3306
    }
};
exports.dbconfig = new dbconfig();