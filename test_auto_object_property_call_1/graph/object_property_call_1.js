const v6 = function (x) {
    const v5 = eval(x);
    v5;
};
let v = {};
v.f = v6;
const g = function (x) {
    const v7 = v.f(x);
    return v7;
};
const v8 = {};
v8.g = g;
module.exports = v8;