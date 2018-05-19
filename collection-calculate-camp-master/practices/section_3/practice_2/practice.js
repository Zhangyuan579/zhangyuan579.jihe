function create_updated_collection(collection_a, object_b) {

    for (let i in collection_a) {
        for (let index_b in object_b.value) {
            if (collection_a[i].key === object_b.value[index_b]) {
                collection_a[i].count -= Math.floor((collection_a[i].count) / 3);
            }
        }
    }

    return collection_a;
}

module.exports = create_updated_collection;