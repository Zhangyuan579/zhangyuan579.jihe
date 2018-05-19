'use strict';

function find_last_even(collection) {
    //在这里写入代码
    let v = 0;
    for (let i = collection.length; i >= 0; i--) {
        if (collection[i] % 2 === 0) {
            v = collection[i];
            return v;
        }
    }
}

module.exports = find_last_even;