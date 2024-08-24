const item_creator = { // store_creator
    "books": () => new Book(),
    "book": () => new Document(),
    "document": () => new Line(),
    "line": () => ""
}

class Titlable {
    title = $state()
}

// SelectableListStore - интерфейс стора
// SelectableList - функциональный миксин, набор функций

export class SelectableListStore {

    items = $state()
    selected_item_index = $state()

    constructor(type) {

        this.id = crypto.randomUUID()
        this.type = type

        this.items = [ item_creator[type]() ]
        this.selected_item_index = 0

        if (["book", "document"].includes(type)) {
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
    duplicate() {
        this.items.push(this.selected_item)
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

    add_symbol(key) {
        this.selected_item += key
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

export class Books extends SelectableListStore {
    constructor() { super("books") }
}
export class Book extends SelectableListStore {
    constructor() { super("book") }
}
export class Document extends SelectableListStore {
    constructor() { super("document") }
}
export class Line extends SelectableListStore {
    constructor() { super("line") }
}