'use strict';

function find_first_even(collection) {
    //在这里写入代码
    let v = 0;
    for (let i = 0; i <= collection.length; i++) {
        if (collection[i] % 2 === 0) {
            v = collection[i];
            return v;
        }
    }
}

module.exports = find_first_even;