/**
 * Created by Damon on 13-11-25.
 */
function proxy() {
};
proxy.prototype = {
    proxy: function (callback, proxy, thisObject) {
        if (arguments.length === 2) {
            if (typeof proxy === "string") {
                thisObject = callback;
                callback = thisObject[ proxy ];
                proxy = undefined;
            }
            else if (proxy && typeof proxy != 'function') {
                thisObject = proxy;
                proxy = undefined;
            }
        }
        if (!proxy && callback) {
            /* 使用 proxy 保证 函数执行时, context 为指定值 */
            proxy = function () {
                return callback.apply(thisObject || this, arguments);
            };
        }
        if (callback) {
            proxy.guid = callback.guid = callback.guid || proxy.guid;
        }
        return proxy;


    }
};
exports.proxy = new proxy();