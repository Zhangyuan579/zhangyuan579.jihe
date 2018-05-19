'use strict';
var even_asc_odd_desc = function(collection) {
    let result_a = [];
    let result_b = [];
    for (let i = 0; i < collection.length; i++) {
        if ((collection[i]) % 2 === 0) {
            result_a.push(collection[i]);
        } else {
            result_b.push(collection[i]);
        }
    }
    return result_a.sort(com_a).concat(result_b.sort(com_b));
};

function com_a(a, b) {
    return a - b;
}

function com_b(a, b) {
    return b - a;
}
module.exports = even_asc_odd_desc;