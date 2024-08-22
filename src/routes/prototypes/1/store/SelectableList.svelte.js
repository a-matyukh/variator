export class SelectableList {
    
    constructor(list, item_creator) {
        this.list = list
        this.item_creator = item_creator
    }
    
    list = $state()
    get size() {
        return this.list.items.length
    }
    create() {
        this.list.items.splice(this.selected_index + 1, 0, this.item_creator(this.size))
        this.leaf("next")
    }
    duplicate() {
        this.list.items.push(this.selected_item)
        this.leaf("next")
    }
    edit(value) {
        this.selected_item = value
    }
    remove() {
        this.list.items.splice(this.selected_index, 1)
        if (this.size === 0) {
            this.create()
        } else {
            this.leaf("previous")
        }
    }

    get selected_index() {
        return this.list.selected_item_index
    }
    set selected_index(value) {
        this.list.selected_item_index = value
    }
    get selected_item() {
        return this.list.items[this.list.selected_item_index]
    }
    set selected_item(value) {
        this.list.items[this.list.selected_item_index] = value
    }
    select(pointer) { // string | number
        if (this.list.items.length <= 1) return
        if (pointer === "ArrowUp") {
            this.leaf("previous")
        } else if (pointer === "ArrowDown") {
            this.leaf("next")
        } else if (typeof pointer === "number") {
            if (this.list.items[pointer]) {
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