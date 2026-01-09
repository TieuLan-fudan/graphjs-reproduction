const f = function (x) {
    const v6 = g(x);
    const v7 = eval(v6);
    v7;
    const v8 = h(x);
    const v9 = eval(v8);
    v9;
};
const g = function (x) {
    let a = i(x);
    return 0;
};
const h = function (x) {
    return x;
};
const i = function (x) {
    return x;
};
const v10 = {};
v10.f = f;
v10.g = g;
v10.h = h;
v10.i = i;
module.exports = v10;