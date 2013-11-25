/**
 * Created by Damon_000 on 13-11-25.
 */
(function (ex) {
    if (ex) {
        var dbconfigure = {
            host: '192.168.1.160',
            user: 'root',
            password: 'root',
            database: 'gt_info',
            port: 3306
        };
        ex.config = dbconfigure;
    }
})(exports);