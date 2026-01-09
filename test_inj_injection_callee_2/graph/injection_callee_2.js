const f = function (x) {
    const v4 = g(x);
    v4;
};
const g = function (x) {
    const v5 = eval(x);
    v5;
};
const v6 = {};
v6.f = f;
module.exports = v6;