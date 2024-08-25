import { Document } from "./stores.svelte"
import Mode from "./Mode.svelte"

class App {

    mode = new Mode()
    
    selected_document = new Document()
    get selected_line() {
        return this.selected_document.selected_item
    }
    
}

export const app = new App()