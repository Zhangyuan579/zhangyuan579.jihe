'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce(function(pre,cur,inde,arr){return pre<cur?pre:cur;});
}

module.exports = collect_min_number;

