'use strict';
var number_map_to_word = function(collection) {
    return collection.map(function(collection_a) {
        let v = String.fromCharCode(96 + parseInt(collection_a));
        return v;

    });

};

module.exports = number_map_to_word;