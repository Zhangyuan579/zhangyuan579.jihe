'use strict';
var number_map_to_word_over_26 = function(collection) {
    let z = [];
    let word = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    for (let i in collection) {
        if (collection[i] % 26 === 0) {
            z.push(word[parseInt(collection[i] / 26 - 1)] + word[collection[26]]);
        } else {
            z.push(word[parseInt(collection[i] / 26)] + word[collection[i] % 26]);
        }
    }
    return z;


};

module.exports = number_map_to_word_over_26;