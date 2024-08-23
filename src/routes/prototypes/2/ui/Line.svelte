<p>
    <input type="text" bind:value={line.selected_item} bind:this={inputNode}>
</p>
<style>
input {
    width: 80%;
    font-size: 18px;
    padding: 12px 15px;
    border: none;
    box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, .132), 0 0.3px 0.9px 0 rgba(0, 0, 0, .108);
    transition: .1s;
}
input:focus {
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}
</style>
<script lang="ts">
import type { SelectableListStore } from "../store/SelectableList.svelte"
interface LineProps {
    line: SelectableListStore<string>
    isEdit: boolean
    onfocus(): void
    onblur(): void
}
const {line, isEdit, onfocus, onblur}: LineProps = $props()

let inputNode = null
$effect(() => {
    isEdit ? inputNode.focus() : inputNode.blur()
    inputNode.addEventListener("focus", onfocus)
    inputNode.addEventListener("blur", onblur)
})
</script>