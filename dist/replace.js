"use strict";
module.exports = (x, divider = 16) => x.replace(/(-|)([0-9]+\.[0-9]{1,}|[0-9]+|\.[0-9]+)px/gi, (unit) => {
    const float = parseFloat(unit);
    if (float === 0)
        return "0";
    return float / divider + "rem";
});
