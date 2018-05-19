'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
 return collection_a.concat(collection_b).filter(function(item,index,self){return self.indexOf(item) == index;});
//  filter(v => !collection_a.includes(v) || !collection_b.includes(v))
// for(let i=0; i < collection_a.length; i++){
//     if (!collection_b.includes(arr1[i])) {
//         arr.push(collection_a[i]);
//     }
// }
// for(let i=0; i < collection_b.length; i++){
//     if (!collection_b.includes(collection_b[i])) {
//         arr.push(collection_b[i]);
//     }
// }
// return arr;
}
module.exports = get_union;


