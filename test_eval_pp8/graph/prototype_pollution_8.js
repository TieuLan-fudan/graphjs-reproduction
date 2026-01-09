const pollute = function (o, x, y, z) {
    var w = o[x];
    let o = {};
    const v2 = last_step_pollution(w, y, z, o);
    v2;
};
const last_step_pollution = function (w, y, z, o) {
    o[y] = z;
};
module.exports = pollute;