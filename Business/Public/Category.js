/**
 * Created by Damon on 13-11-25.
 */
var model = require('../../Core/NModels');
function Category() {
};
Category.prototype = {
    GetAll: function (callback) {
        var sql = 'SELECT * FROM tbl_category limit 1';
        model.nm.find(sql, callback);
    }
};
exports.Category = new Category();