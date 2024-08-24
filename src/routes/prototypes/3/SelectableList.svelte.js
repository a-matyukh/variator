export class SelectableListStore {
    
    constructor(model, item_creator) {
        this.store = model
        this.item_creator = item_creator
    }
    
    store = $state()

    get size() {
        return this.store.items.length
    }
    create() {
        this.store.items.splice(this.selected_index + 1, 0, this.item_creator(this.size))
        this.leaf("next")
    }
    duplicate() {
        this.store.items.push(this.selected_item)
        this.leaf("next")
    }
    edit(value) {
        this.selected_item = value
    }
    remove() {
        this.store.items.splice(this.selected_index, 1)
        if (this.size === 0) {
            this.create()
        } else {
            this.leaf("previous")
        }
    }

    get selected_index() {
        return this.store.selected_item_index
    }
    set selected_index(value) {
        this.store.selected_item_index = value
    }
    get selected_item() {
        return this.store.items[this.store.selected_item_index]
    }
    set selected_item(value) {
        this.store.items[this.store.selected_item_index] = value
    }
    select(pointer) { // string | number
        if (this.store.items.length <= 1) return
        if (pointer === "ArrowUp") {
            this.leaf("previous")
        } else if (pointer === "ArrowDown") {
            this.leaf("next")
        } else if (typeof pointer === "number") {
            if (this.store.items[pointer]) {
                this.selected_index = pointer
            }
        }
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