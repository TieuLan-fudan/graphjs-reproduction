const f = function (x) {
    const v5 = g(x);
    v5;
};
const g = function (x) {
    const v6 = h(x);
    v6;
};
const h = function (x) {
    const v7 = eval(x);
    v7;
};
const v8 = {};
v8.f = f;
module.exports = v8;