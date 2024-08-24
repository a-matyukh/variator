const VariantCreator = (index) => {
    return `Variant ${index}`
}
const LineCreator: ItemCreator<SelectableListModel<string>> = (index) => {
    return {
        "id": crypto.randomUUID(),
        "type": "line",
        "selected_item_index": 0,
        "items": [
            "variant",
            "variant2",
        ],
    }
}

// loadedDocument
const documentModel: SelectableListModel<SelectableListModel<string>> = {
    "id": "6794622f-b0b4-4546-a13c-07026067298c",
    "type": "document",
    // "title": "New document",
    "selected_item_index": 0,
    "items": [
        {
            "id": "3cce7ce5-39d9-4499-b2a6-33843653e84b",
            "items": [
                "variant",
                "variant2",
            ],
            "selected_item_index": 0,
            "type": "line"
        },
        {
            "id": "4cce7ce5-39d9-3399-b2a6-33843653e84b",
            "items": [
                "variant",
                "variant2",
            ],
            "selected_item_index": 0,
            "type": "line"
        },
    ]
}



import {SelectableListStore} from "./SelectableList.svelte"
import type {ItemCreator, SelectableListModel} from "./SelectableList.svelte"
export const documentStore = new SelectableListStore(documentModel, LineCreator)
// console.log(documentStore)
// const lineStruct: SelectableListModel<string> = {
//     "id": "3cce7ce5-39d9-4499-b2a6-33843653e84b",
//     "type": "line",
//     "items": [
//         "Line variant 1",
//         "Line variant 2"
//     ],
//     "selected_item_index": 0
// }









import Mode from "./Mode.svelte"
export const mode = new Mode()