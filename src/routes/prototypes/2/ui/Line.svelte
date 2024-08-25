<p>
    <small class="pointer" class:current={isCurrent}>{index}</small>
    <input
        type="text"
        class:current={isCurrent}
        bind:value={line.selected_item}
        bind:this={inputNode}>
    <small>{line.variants_pager}</small>
</p>
<style>
p {
    display: grid;
    grid-template-columns: 30px auto 30px;
    margin: 0 0 2px 0;
}
small {
    opacity: .5;
    place-self: center;
}
small.pointer {
    margin-right: 15px;
}
small.current {
    opacity: 1;
    color: white;
    padding: 5px 10px;
    background-color: #0b57d0;
    border-radius: 40px;
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
    position: relative;
    z-index: 2;
}
input:focus {
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}
</style>
<script lang="ts">
import { LineStore } from "../store/stores.svelte"
interface LineProps {
    index: number
    line: LineStore
    isEdit: boolean
    isCurrent: boolean
    onfocus(): void
    onblur(): void
}
const {index, line, isEdit, onfocus, onblur, isCurrent}: LineProps = $props()

let inputNode = null
$effect(() => {
    isEdit && isCurrent ? inputNode.focus() : inputNode.blur()
    // inputNode.addEventListener("focus", onfocus)
})
$effect(() => {
    // inputNode.addEventListener("blur", onblur)
})
</script>