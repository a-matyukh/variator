import { line, mode } from "./store/index.svelte"

export default function press(e) {
    
    if (e.code == "KeyN" && e.ctrlKey) line.create()
    if (e.code == "KeyD" && e.ctrlKey) line.duplicate()
    if (e.code == "KeyR" && e.ctrlKey) line.remove()

    if (e.key == "Enter") {
        if (mode.isSelect) mode.change("edit")
        else if (mode.isEdit) mode.change("select")
    }
    if (e.key == "Escape") {
        if (!mode.isSelect) mode.change("select")
    }

    if (e.key == "ArrowRight" && mode.isSelect) line.leaf("next")
    if (e.key == "ArrowLeft" && mode.isSelect) line.leaf("previous")

    if (e.key.match(/[1-9]/) && mode.isSelect) line.select(+e.key-1)

}