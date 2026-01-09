const main = function (o, next, p, v) {
    const v3 = o[next];
    let v4 = v3 != null;
    while (v4) {
        o[p] = v;
        o = o[next];
        v4 = v3 != null;
    }
};
module.exports = main;