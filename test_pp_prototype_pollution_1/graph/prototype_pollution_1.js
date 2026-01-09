const f = function (o, x, y, z) {
    const v2 = o[x];
    v2[y] = z;
};
module.exports = f;