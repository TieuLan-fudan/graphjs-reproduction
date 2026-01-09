const f = function (x) {
    const v5 = h(x);
    const v6 = g(v5);
    const v7 = eval(v6);
    v7;
};
const g = function (x) {
    return x;
};
const h = function (x) {
    return x;
};
const v8 = {};
v8.f = f;
v8.g = g;
v8.h = h;
module.exports = v8;