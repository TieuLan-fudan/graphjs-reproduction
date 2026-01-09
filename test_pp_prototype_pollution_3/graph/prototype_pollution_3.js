const pollute = function (o, x, y, z) {
    var w = o[x];
    const v2 = last_step_pollution(w, y, z);
    v2;
};
const last_step_pollution = function (w, y, z) {
    w[y] = z;
};
module.exports = pollute;