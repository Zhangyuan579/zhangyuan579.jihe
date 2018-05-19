'use strict';

function even_to_letter(collection) {
    //在这里写入代码
    let letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let v = []
    for (let i in collection) {
        if (collection[i] % 2 === 0) {
            v.push(letter[collection[i]]);
        }
    }
    return v;
}


module.exports = even_to_letter;