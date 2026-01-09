const f = function (x) {
    let a = g(x);
    const v4 = h(a);
    v4;
};
const g = function (x) {
    return 0;
};
const h = function (x) {
    const v5 = eval(x);
    v5;
};
const v6 = {};
v6.f = f;
module.exports = v6;