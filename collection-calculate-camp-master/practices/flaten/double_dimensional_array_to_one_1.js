'use strict';

function double_to_one(collection) {

    //在这里写入代码
    let v = [];
    // collection = (collection + '').split(',');
    // collection = collection.join(",").split(",");
    v = [].concat.apply([], collection);
    return v;

    // return collection;
}

module.exports = double_to_one;