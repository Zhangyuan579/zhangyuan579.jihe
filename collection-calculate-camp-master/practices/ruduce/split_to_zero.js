'use strict';

function spilt_to_zero(number, interval) {
    //在这里写入代码
    let v = [];
    v.push(number);
    while (number > 0) {
        number = parseFloat((number - interval).toFixed(1));
        if (number === 0.0) {
            v.push(0)
        } else {
            v.push(number);
        }
    }
    return v;
}
module.exports = spilt_to_zero;