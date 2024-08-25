import { app } from "./store/index.svelte"
import { Mode } from "./store/Mode.svelte"

export default function press(e) {
    
    if (e.key == "Enter") {
        if (app.mode.isSelect) app.mode.change(Mode.Edit)
        else if (app.mode.isEdit) app.selected_document.create()
    }
    if (e.key == "Escape") {
        if (!app.mode.isSelect) app.mode.change(Mode.Select)
    }

    if (e.code == "KeyN" && e.ctrlKey) app.selected_document.create()
    if (e.code == "KeyD" && e.ctrlKey) app.selected_line.duplicate()
    if (e.code == "KeyR" && e.ctrlKey) app.selected_document.remove()

    if (e.key == "Backspace") {
        if (app.selected_document.size > 1 && app.selected_line.isEmpty()) {
            app.selected_document.remove()
        }
    }

    if (e.key == "ArrowDown") app.selected_document.leaf("next")
    if (e.key == "ArrowUp") app.selected_document.leaf("previous")
    if (e.key == "ArrowRight" && e.ctrlKey && e.altKey) app.selected_line.leaf("next")
    if (e.key == "ArrowLeft" && e.ctrlKey && e.altKey) app.selected_line.leaf("previous")

    if (e.key.match(/[1-9]/) && e.ctrlKey) app.selected_document.select(+e.key-1)

    if (/^[-\sA-Za-zА-Яа-я]$/.test(e.key) && !e.ctrlKey) {
        if (app.mode.isSelect) {
            app.selected_line.add_symbol(e.key)
            app.mode.toggle()
        }
    }

}