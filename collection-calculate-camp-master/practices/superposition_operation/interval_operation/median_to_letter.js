'use strict';

function median_to_letter(collection) {

    //在这里写入代码
    let z = 0;
    let letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let collection_a = (collection[Math.ceil(collection.length / 2)]); //取中位数
    if (collection_a % 26 === 0) {
        z = (letter[Math.floor(collection_a / 26) - 1].concat(letter[26]));
    } else {
        z = (letter[Math.floor(collection_a / 26)].concat(letter[collection_a % 26]));
    }

    return z;
}

module.exports = median_to_letter;