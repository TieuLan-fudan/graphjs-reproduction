let g = require('./g.js');
const f = function (x) {
    const v5 = g(x);
    const v6 = eval(v5);
    v6;
};
const v7 = {};
v7.f = f;
module.exports = v7;