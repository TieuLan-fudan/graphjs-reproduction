const f = function (x) {
    const v4 = g(x);
    const v5 = eval(v4);
    v5;
};
const g = function (x) {
    return x;
};
const v6 = {};
v6.f = f;
v6.g = g;
module.exports = v6;