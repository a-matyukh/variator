import {SelectableList} from "./SelectableList.svelte"
import Mode from "./Mode.svelte"

const lineStruct = {
    "id": "3cce7ce5-39d9-4499-b2a6-33843653e84b",
    "type": "line",
    "items": [
        "Line variant 1",
        "Line variant 2"
    ],
    "selected_item_index": 0
}

const VariantCreator = (index) => {
    return `Variant ${index}`
}
export const line = new SelectableList(lineStruct, VariantCreator)
export const mode = new Mode()