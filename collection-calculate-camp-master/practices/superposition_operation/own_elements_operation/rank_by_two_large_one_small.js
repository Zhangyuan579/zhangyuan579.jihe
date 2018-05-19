'use strict';

function rank_by_two_large_one_small(collection) {
    //这里写代码。。。
    collection.sort(com_a);
    for (let i in collection) {
        if ((i + 1) % 3 === 0) {
            let a = collection[i - 2];
            collection[i - 2] = collection[i - 1];
            collection[i - 1] = collection[i];
            collection[i] = a;
        }
    }
    return collection;
}

function com_a(a, b) {
    return a - b;
}
module.exports = rank_by_two_large_one_small;