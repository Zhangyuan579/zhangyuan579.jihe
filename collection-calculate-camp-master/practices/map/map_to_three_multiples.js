'use strict';
var map_to_three_multiples = function(collections){
  // return [3,9,15,12,27];
  return collections.map(function (collection_a) {
    return collection_a * 3;
  });
};

module.exports = map_to_three_multiples;
