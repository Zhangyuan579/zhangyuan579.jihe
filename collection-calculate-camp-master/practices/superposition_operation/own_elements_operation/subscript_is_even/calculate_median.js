'use strict';
var calculate_median = function(collection) {
    let v = [];
    let ary = 0;
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            ary++;
            v.push(collection[i])
        }
    }
    if (ary % 2 != 0) {
        return v[(v.length + 1) / 2 - 1];
    } else {
        return (v[v.length / 2 - 1] + v[v.length / 2]) / 2;
    }
}
module.exports = calculate_median;