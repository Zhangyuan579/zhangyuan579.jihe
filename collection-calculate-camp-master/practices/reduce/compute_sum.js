'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  return collection.reduce(function(pre,cur){
    return  (pre + cur)
  });
}

module.exports = calculate_elements_sum;

