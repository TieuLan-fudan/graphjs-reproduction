const f = function (obj, prop, next, value) {
    let next_prop = next.shift();
    const v4 = obj[next_prop];
    if (v4) {
        const v5 = obj[next_prop];
        const v6 = f(v5, prop, next, value);
        v6;
    } else {
        obj[prop] = value;
    }
    return;
};
module.exports = f;