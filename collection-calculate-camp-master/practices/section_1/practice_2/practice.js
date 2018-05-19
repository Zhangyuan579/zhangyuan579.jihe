function collect_same_elements(collection_a, collection_b) {
    //在这里写入代码
    let v = [];
    collection_a.map(i => {
        if (collection_b[0].includes(i)) {
            v.push(i);
        }
    })
    return v;
}

module.exports = collect_same_elements;