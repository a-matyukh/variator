const item_creator = {
    "books": () => new Book(),
    "book": () => new Document(),
    "document": () => new Line(),
    "line": () => "New variant"
}

class Titlable {
    title = $state()
}

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
    append() {
        this.items.push(item_creator[this.type]())
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