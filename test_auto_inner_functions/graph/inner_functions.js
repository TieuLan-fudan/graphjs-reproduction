const f = function (x) {
    const innerVulnerableFunction = function (x) {
        const v4 = eval(x);
        v4;
    };
    const v5 = innerVulnerableFunction(x);
    v5;
};
const v6 = {};
v6.f = f;
module.exports = v6;