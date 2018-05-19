'use strict';

function grouping_count(collection) {

    //在这里写入代码
    // return collection.filte();
    let result = {};
    collection.filter(v => result[v] !== undefined ? ++result[v] : result[v] = 1);
    return result;
}

module.exports = grouping_count;