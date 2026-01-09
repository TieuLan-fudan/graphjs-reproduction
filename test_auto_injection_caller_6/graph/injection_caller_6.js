const f = function (x) {
    let a = h(x);
    const v4 = g(a);
    const v5 = eval(v4);
    v5;
};
const g = function (x) {
    return x;
};
const h = function (x) {
    return x;
};
const v6 = {};
v6.f = f;
v6.g = g;
v6.h = h;
module.exports = v6;