function count_same_elements(collection) {
    //在这里写入代码
    let same = [];
    let key = "";
    let count = 0;

    for (let i = 0; i < collection.length; i++) {
        if (collection[i] != -1) {
            key = collection[i];
            let keyCountObj = isExist(collection, key, count);
            same.push(keyCountObj);
            count = 0;
        }
    }
    return same;
}

function isExist(collection, key, count) {
    for (let j = 0; j < collection.length; j++) {
        if (key === collection[j]) {
            count++;
            collection[j] = -1;
        }
    }
    let keyCountObj = { key: key, count: count };

    return keyCountObj;
}

module.exports = count_same_elements;