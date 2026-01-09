const f = function (x) {
    const v5 = g(x);
    const v6 = h(v5);
    v6;
};
const g = function (x) {
    return x;
};
const h = function (x) {
    const v7 = eval(x);
    v7;
};
const v8 = {};
v8.f = f;
module.exports = v8;