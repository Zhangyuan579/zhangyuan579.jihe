'use strict';

function hybrid_operation_to_uneven(collection) {
    //在这里写入代码
    let v = [];
    for (let i in collection) {
        if (collection[i] % 2 != 0) {
            collection[i] = collection[i] * 3 + 2;
            v.push(collection[i]);
        }
    }
    return v;
}

module.exports = hybrid_operation_to_uneven;