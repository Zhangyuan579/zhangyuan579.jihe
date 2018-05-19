'use strict';
var calculate_average = function(collection) {
    let sum = 0;
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            sum += collection[i];
        }
    }
    return sum / (collection.length / 2);
};
module.exports = calculate_average;