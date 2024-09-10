import { DocumentStore } from "./stores.svelte"
import Mode from "./Mode.svelte"

class App { // Tab

    mode = new Mode()
    
    selected_document = new DocumentStore()
    get selected_snapshot() {
        return this.selected_document.selected_item
    }
    get selected_line() {
        return this.selected_snapshot.selected_item
    }
    
}

export const app = new App()