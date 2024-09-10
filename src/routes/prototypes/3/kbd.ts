import { app } from "./store/index.svelte"
import { Mode } from "./store/Mode.svelte"

export default function press(e) {
    
    if (e.key == "Enter") {
        if (app.mode.isSelect) app.mode.change(Mode.Edit)
        else if (app.mode.isEdit) app.selected_snapshot.create()
    }
    if (e.key == "Escape") {
        if (!app.mode.isSelect) app.mode.change(Mode.Select)
    }

    if (e.code == "KeyN" && e.ctrlKey) app.selected_snapshot.create()
    if (e.code == "KeyD" && e.ctrlKey) {
        if (e.altKey) {
            if (e.shiftKey) {
                app.selected_document.duplicate()
            } else {
                app.selected_line.duplicate()
            }
        }
        else {
            app.selected_snapshot.duplicate()
        }
    }
    if (e.code == "KeyR" && e.ctrlKey) app.selected_line.remove()

    if (e.key == "Backspace") {
        if (app.selected_snapshot.size > 1 && app.selected_line.isEmpty()) {
            app.selected_snapshot.remove()
        }
    }

    if (e.key == "ArrowDown") app.selected_snapshot.leaf("next")
    if (e.key == "ArrowUp") app.selected_snapshot.leaf("previous")
    if (e.key == "ArrowRight" && e.ctrlKey && e.altKey) app.selected_line.leaf("next")
    if (e.key == "ArrowLeft" && e.ctrlKey && e.altKey) app.selected_line.leaf("previous")

    if (e.key.match(/[1-9]/) && e.ctrlKey) {
        if (e.altKey) {
            app.selected_document.select(+e.key-1)
        } else {
            app.selected_snapshot.select(+e.key-1)
        }
    }

    if (/^[-\sA-Za-zА-Яа-я]$/.test(e.key) && !e.ctrlKey) {
        if (app.mode.isSelect) {
            app.selected_line.add_symbol(e.key)
            app.mode.toggle()
        }
    }

}