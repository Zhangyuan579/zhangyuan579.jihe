'use strict';

function average_to_letter(collection) {
    //在这里写入代码
    let sum = 0;
    let letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let i in collection) {
        sum += collection[i];
    }
    return letter[Math.ceil(sum / collection.length)];
    //Math.ceil()：将小数部分一律向整数部分进位。
    //     Math.ceil(12.2)//返回13 
    // Math.ceil(12.7)//返回13 
}

module.exports = average_to_letter;