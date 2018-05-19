function collect_same_elements(collection_a, collection_b) {
    return collection_a.filter(v => collection_b.includes(v));
}

module.exports = collect_same_elements;