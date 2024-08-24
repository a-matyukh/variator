export const VariantCreator = (index) => {
    return `Variant ${index}`
}
export const LineCreator = (index) => {
    return {
        "id": crypto.randomUUID(),
        "type": "line",
        "items": [
            "Line variant 1",
            "Line variant 2"
        ],
        "selected_item_index": 0
    }
}
export const saved_line = {
    "id": "3cce7ce5-39d9-4499-b2a6-33843653e84b",
    "type": "line",
    "items": [
        "Line variant 1",
        "Line variant 2"
    ],
    "selected_item_index": 0
}
export const saved_line2 = {
    "id": "4cce7ce5-39d9-4499-b2a6-33843653e84b",
    "type": "line",
    "items": [
        "Line variant 3",
        "Line variant 4"
    ],
    "selected_item_index": 1
}
