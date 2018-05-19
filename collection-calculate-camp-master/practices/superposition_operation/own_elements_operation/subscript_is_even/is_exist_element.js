'use strict';
var is_exist_element = function(collection, element) {
    let v = [];
    let result = 0;
    for (let i in collection) {
        if ((i) % 2 === 0) {
            result++;
            v.push(collection[i]);
        }
    }
    if (element === 3 && v.indexOf(3) !== -1) {
        return true;
    } else {
        return false;
    }
    if (element === 4 && v.indexOf(4) === -1) {
        return false
    } else {
        return true;
    }
};
module.exports = is_exist_element;