'use strict';

function hybrid_operation_to_uneven(collection) {

    //在这里写入代码
    let sum = 0;
    for (var i in collection) {
        if (collection[i] % 2 != 0) {
            sum += (collection[i] * 3 + 5);
        }
    }
    return sum;
}

module.exports = hybrid_operation_to_uneven;