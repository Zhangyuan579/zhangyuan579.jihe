function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    let collection_same = [];
    let key_value = "";
    let count_value = 0;
    let arr = [];

    for (let i = 0; i < collection_a.length; i++) {
        if (collection_a[i] != -1) {
            if (collection_a[i].indexOf("-") > -1) {
                arr = collection_a[i].split("-");
                key_value = arr[0];
                count_value = parseInt(arr[1]);
                let keyCountObj = { key: key_value, count: count_value };
                collection_same.push(keyCountObj);
                count_value = 0;
            } else {
                key_value = collection_a[i];
                let keyCountObj = isExist(collection_a, key_value, count_value);
                collection_same.push(keyCountObj);
                count_value = 0;
            }
        }
    }
    for (let index in collection_same) {
        for (let index_b in object_b.value) {
            if (collection_same[index].key === object_b.value[index_b]) {
                collection_same[index].count -= Math.floor((collection_same[index].count) / 3);
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