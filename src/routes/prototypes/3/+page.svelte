<button onclick={() => documentStore.create()}>documentStore.create</button>
<button onclick={() => documentStore.leaf("next")}>documentStore.leaf("next")</button>
<br><br>
<button onclick={() => documentStore.selected_item.leaf("next")}>documentStore.selected_item.leaf("next")</button>
<button onclick={() => documentStore.selected_item.edit(crypto.randomUUID())}>documentStore.selected_item.edit(crypto.randomUUID())</button>
<hr>

{#each documentStore.store.items as item}
    <pre class:current={item.store.id === documentStore.selected_item.store.id}>{JSON.stringify(item.store, null, 4)}</pre>
{/each}
<hr>
<pre>{JSON.stringify(documentStore.store, null, 4)}</pre>
<pre>{JSON.stringify(documentStore.selected_item.store, null, 4)}</pre>

<style>
.current {
    background-color: #f5f5f5;
}
</style>
<script>
import { SelectableListStore } from "./SelectableList.svelte"
import { saved_line, saved_line2, VariantCreator, LineCreator } from "./db"

// convert models to stores
const lineStore = new SelectableListStore(saved_line, VariantCreator)
const lineStore2 = new SelectableListStore(saved_line2, VariantCreator)

class DocumentStore {

    store = $state({
        selected_item_index: 0,
        items: [ 
            lineStore, 
            lineStore2 
        ]
    })
    item_creator(index) {
        return new SelectableListStore(LineCreator(), VariantCreator)
    }

    ///
    get size() {
        return this.store.items.length
    }
    get selected_index() {
        return this.store.selected_item_index
    }
    set selected_index(value) {
        this.store.selected_item_index = value
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

    create() {
        this.store.items.splice(this.selected_index + 1, 0, this.item_creator(this.size))
        this.leaf("next")
    }
    get selected_item() {
        return this.store.items[this.store.selected_item_index]
    }

}
const documentStore = new DocumentStore()
</script>