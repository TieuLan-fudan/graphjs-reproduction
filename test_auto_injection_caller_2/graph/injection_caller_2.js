const f = function (x) {
    const v5 = g(x);
    const v6 = eval(v5);
    v6;
};
const g = function (x) {
    const v7 = h(x);
    return v7;
};
const h = function (x) {
    return x;
};
const v8 = {};
v8.f = f;
v8.g = g;
v8.h = h;
module.exports = v8;