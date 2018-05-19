'use strict';

function double_to_one(collection) {

    //在这里写入代码
    let v = [];
    v = [].concat.apply([], collection);
    return v.filter(function(element, index, self) { return self.indexOf(element) === index; });
    return v;

}

module.exports = double_to_one;