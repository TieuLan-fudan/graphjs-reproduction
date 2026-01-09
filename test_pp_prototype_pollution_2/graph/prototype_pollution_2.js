const f = function (x, y, z) {
    const v3 = g(x, y, z);
    v3;
};
const g = function (a, b, c) {
    let o = {};
    const v4 = o[a];
    v4[b] = c;
};
module.exports = f;