/**
 * Created by Damon_000 on 13-11-25.
 */
function dbconfig() {
};
dbconfig.prototype = {
    db: {
        host: '119.57.34.250',
        user: 'root',
        password: 'root',
        database: 'gt_info',
        port: 3306
    },
    db2: {
        host: '119.57.34.250',
        user: 'root',
        password: 'root',
        database: 'gt_info_for_3.0.1',
        port: 3306
    }
};
exports.dbconfig = dbconfig.prototype;