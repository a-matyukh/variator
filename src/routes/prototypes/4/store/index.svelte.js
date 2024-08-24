import { Document } from "./stores.svelte"
import Mode from "./Mode.svelte"

class App {

    selected_document = new Document()
    mode = new Mode()

    get selected_line() {
        return this.selected_document.selected_item
    }
    
}

export const app = new App() 