const item_creator = { // store_creator
    "book": () => new DocumentStore(),
    "document": () => new LineStore(),
    "line": () => ""
}

export class SelectableListStore {

    items = $state()
    selected_item_index = $state()

    constructor(type, items, selected_item_index) {

        this.type = type
        if (items) {
            this.items = items
        } else {
            this.items = [ item_creator[type]() ]
        }
        this.selected_item_index = selected_item_index ? selected_item_index : 0

        if (["book", "document"].includes(type)) {
            this.id = crypto.randomUUID()
            this.title = `New ${type}`
        }
    }

    get selected_item() {
        return this.items[this.selected_item_index]
    }
    set selected_item(value) {
        this.items[this.selected_item_index] = value
    }

    create() {
        this.items.splice(this.selected_index + 1, 0, item_creator[this.type]())
        this.leaf("next")
    }
    duplicate_line() {
        this.items.splice(this.selected_index + 1, 0, new LineStore(
            $state.snapshot(this.selected_item.items),
            $state.snapshot(this.selected_item.selected_item_index)
        ))
        this.leaf("next")
    }
    remove() {
        this.items.splice(this.selected_index, 1)
        if (this.size === 0) {
            this.create()
        } else {
            this.leaf("previous")
        }
    }

    get size() {
        return this.items.length
    }
    get selected_index() {
        return this.selected_item_index
    }
    set selected_index(value) {
        this.selected_item_index = value
    }
    leaf(direction) { // "previous" | "next"
		const size = this.size - 1
		switch (direction) {
			case "previous":
				this.selected_index == 0 ? this.selected_index = size : this.selected_index--
				break
			case "next":
				this.selected_index < size ? this.selected_index++ : this.selected_index = 0
				break
		}		
    }
    select(pointer) { // string | number
        if (this.items.length <= 1) return
        if (pointer === "ArrowUp") {
            this.leaf("previous")
        } else if (pointer === "ArrowDown") {
            this.leaf("next")
        } else if (typeof pointer === "number") {
            if (this.items[pointer]) {
                this.selected_index = pointer
            }
        }
    }
}

export class DocumentStore extends SelectableListStore {
    constructor() { super("document") }
}
export class LineStore extends SelectableListStore {
    constructor(items, selected_item_index) { super("line", items, selected_item_index) }

    get variants_pager() {
        return this.size > 1 ? `${this.selected_item_index + 1}/${this.size}` : ""
    }
    add_symbol(key) {
        this.selected_item += key
    }
    isEmpty() {
        return this.selected_item === ""
    }
    duplicate_variant() {
        this.items.splice(this.selected_index + 1, 0, this.selected_item)
        this.leaf("next")
    }
}