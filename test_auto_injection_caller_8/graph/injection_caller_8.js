const f = function (x, y) {
    const v5 = g(x, y);
    const v6 = eval(v5);
    v6;
};
const g = function (x, y) {
    const v7 = x + y;
    return v7;
};
const v8 = {};
v8.f = f;
module.exports = v8;