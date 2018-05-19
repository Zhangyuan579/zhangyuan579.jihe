function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    let collection_same = [];
    let key_value = "";
    let count_value = 0;

    for (let i = 0; i < collection_a.length; i++) {
        if (collection_a[i] != -1) {
            key_value = collection_a[i];
            let keyCountObj = isExist(collection_a, key_value, count_value);
            collection_same.push(keyCountObj);
            count_value = 0;
        }
    }
    for (let v in collection_same) {
        for (let index_b in object_b.value) {
            if (collection_same[v].key === object_b.value[index_b]) {
                collection_same[v].count -= Math.floor((collection_same[v].count) / 3);
            }
        }
    }
    return collection_same;
}

function isExist(collection_a, key_value, count_value) {
    for (let j = 0; j < collection_a.length; j++) {
        if (key_value === collection_a[j]) {
            count_value++;
            collection_a[j] = -1;
        }
    }
    let keyCountObj = { key: key_value, count: count_value };
    return keyCountObj;

}

module.exports = create_updated_collection;