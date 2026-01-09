const pollute = function (o, x, y, z) {
    var w = o[x];
    const v3 = intermediate(w, y, z);
    v3;
};
const intermediate = function (w, y, z) {
    const v4 = last_step_pollution(w, y, z);
    v4;
};
const last_step_pollution = function (w, y, z) {
    w[y] = z;
};
module.exports = pollute;