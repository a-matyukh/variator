<p>
    <input
        type="text"
        class:current={isCurrent}
        bind:value={line.selected_item}
        bind:this={inputNode}>
</p>
<style>
p {
    margin: 0 0 2px 0;
}
input {
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    padding: 12px 15px;
    border: none;
    transition: .1s;
}
input.current {
    outline: 3px solid yellowgreen;
}
input:focus {
    outline: 3px solid orange;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}
</style>
<script lang="ts">
import { SelectableListStore } from "../store/stores.svelte"
interface LineProps {
    line: SelectableListStore
    isEdit: boolean
    isCurrent: boolean
    onfocus(): void
    onblur(): void
}
const {line, isEdit, onfocus, onblur, isCurrent}: LineProps = $props()

let inputNode = null
$effect(() => {
    isEdit && isCurrent ? inputNode.focus() : inputNode.blur()
    // inputNode.addEventListener("focus", onfocus)
})
$effect(() => {
    // inputNode.addEventListener("blur", onblur)
})
</script>