<h2>Variator: Line and its variants</h2>
<p>
    <Action name="{mode.isEdit ? "Select" : "Edit"} mode" hotkey="Enter" onclick={() => mode.toggle()} />
    {#if mode.isSelect}
        <Action name="Add" hotkey="Ctrl + N" onclick={() => line.create()} />
        <Action name="Leaf previous" hotkey="Arrow Left" onclick={() => line.leaf("previous")} />
        <Action name="Leaf next" hotkey="Arrow Right" onclick={() => line.leaf("next")} />
        <Action name="Remove" hotkey="Ctrl + R" onclick={() => line.remove()} />
    {/if}
</p>
<Line
    line={line} isEdit={mode.isEdit} 
    onfocus={() => mode.change("edit")}
    onblur={() => mode.change("select")}
/>
<pre>{JSON.stringify(line.list, null, 4)}</pre>

<style>
:global(body, button, input, kbd) {
    font-family: Arial, Helvetica, sans-serif;
}
:global(body) {
    box-sizing: border-box;
    padding: 20px 40px;
    height: 100vh;
    margin: 0;
    background-color: #f5f5f5;
}
h2 {
    font-weight: normal;
    color: #3B4764;
}
p {
    padding: 15px 0;
}
pre {
    opacity: .5;
}
</style>
<script>
import Line from "./ui/Line.svelte"
import Action from "./ui/Action.svelte"
import { line, mode } from "./store/index.svelte"
import press from "./kbd"
$effect(() => document.addEventListener("keyup", e => press(e)))
</script>