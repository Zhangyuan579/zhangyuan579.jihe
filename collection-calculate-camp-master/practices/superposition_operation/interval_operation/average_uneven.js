'use strict';

function average_uneven(collection) {
    //在这里写入代码
    let sum = 0;
    for (let i in collection) {
        if (collection[i] % 2 === 1) {
            sum += collection[i];
        }
    }
    return sum / (collection.length / 2);
}
module.exports = average_uneven;