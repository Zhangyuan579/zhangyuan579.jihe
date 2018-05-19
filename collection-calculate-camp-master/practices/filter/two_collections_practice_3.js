'use strict';

function choose_divisible_integer(collection_a, collection_b) {

    //在这里写入代码
    let result = [];
    let v = [];
    for (let i = 0; i < collection_a.length; i++) {
        for (let j = 0; j < collection_b.length; j++) {
            if (collection_a[i] % collection_b[j] === 0) {
                v.push(collection_a[i]);
            }
        }
    }
    result = Array.from(new Set(v));
    return result;
}

module.exports = choose_divisible_integer;