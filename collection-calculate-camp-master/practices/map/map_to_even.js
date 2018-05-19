'use strict';

function map_to_even(collection) {
    return collection.map(function (collection_a) {
        return collection_a * 2;
      });
}
module.exports = map_to_even;