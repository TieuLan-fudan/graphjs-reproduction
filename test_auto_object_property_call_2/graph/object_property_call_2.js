const v8 = function (x) {
    const v7 = eval(x);
    v7;
};
const v9 = {};
v9.a = v8;
let v = {};
v.f = v9;
const g = function (x) {
    const v10 = v.f;
    const v11 = v10.a(x);
    return v11;
};
const v12 = {};
v12.g = g;
module.exports = v12;