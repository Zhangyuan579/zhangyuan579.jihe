'use strict';
var single_element = function(collection) {
    let resultArray = [];
    let resultArray_a = [];
    let result_a = [];
    let num = 0;

    let result = 0;
    for (let i = 0; i < collection.length; i++) {
        if ((i + 1) % 2 === 0) {
            result++;
            resultArray.push(collection[i]);
        }
    }
    resultArray_a = Array.from(new Set(resultArray));
    for (let index in resultArray_a) {

        for (let i in resultArray) {
            if (resultArray_a[index] === resultArray[i]) {
                num++;
            }
        }
        if (num === 1) {
            result_a.push(resultArray_a[index]);
        }
        num = 0;
    }
    return result_a
};
module.exports = single_element;