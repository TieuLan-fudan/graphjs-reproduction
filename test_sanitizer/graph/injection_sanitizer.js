const v5 = require('child_process');
var exec = v5.exec;
module.exports = open;
const open = function (target, appName, callback) {
    const v6 = escape(target);
    const v7 = exec(v6, callback);
    return v7;
};
const escape = function (s) {
    const v8 = s.replace('1', '2');
    return v8;
};