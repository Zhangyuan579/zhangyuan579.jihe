'use strict';

function compute_median(collection) {
    //在这里写入代码
    let ary = collection.sort(function(a, b) {
        return a - b;
    })
    if (ary.length % 2 != 0) {
        return ary[(ary.length + 1) / 2 - 1];
    }
    if (ary.length % 2 === 0) {
        return (ary[ary.length / 2 - 1] + ary[ary.length / 2]) / 2;
    }
}
module.exports = compute_median;