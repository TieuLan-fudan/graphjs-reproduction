const f = function (x, y) {
    const v7 = x == 0;
    if (v7) {
        return y;
    }
    const v8 = x - 1;
    const v9 = f(v8, y);
    return v9;
};
const g = function (x) {
    const v10 = f(10, x);
    const v11 = eval(v10);
    v11;
};
const v12 = {};
v12.g = g;
module.exports = v12;