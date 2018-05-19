function create_updated_collection(collection_a, object_b) {

    for (let i in collection_a) {
        for (let i_b in object_b.value) {
            if (collection_a[i].key === object_b.value[i_b]) {
                collection_a[i].count -= 1;
            }
        }
    }

    return collection_a;
}
module.exports = create_updated_collection;