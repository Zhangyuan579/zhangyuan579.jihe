'use strict';
var map_to_four_multiples_add_one = function(collection){
  return collection.map(function (collection_a) {
    return collection_a * 4+1;
  });
};

module.exports = map_to_four_multiples_add_one;
