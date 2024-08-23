<main>
    <article>
        <h2>Variator: Document, line, variants</h2>
        <Line
            line={line} isEdit={mode.isEdit}
            onfocus={() => mode.change(Mode.Edit)}
            onblur={() => mode.change(Mode.Select)}
        />
    </article>
    <div>
        <pre>{JSON.stringify(line.list, null, 4)}</pre>
    </div>
</main>
<footer>
    <Action name="{mode.isEdit ? "Select" : "Edit"} mode" hotkey="Enter" onclick={() => mode.toggle()} />
    {#if mode.isSelect}
        <Action name="Add" hotkey="Ctrl + N" onclick={() => line.create()} />
        <Action name="Leaf previous" hotkey="Arrow Left" onclick={() => line.leaf("previous")} />
        <Action name="Leaf next" hotkey="Arrow Right" onclick={() => line.leaf("next")} />
        <Action name="Remove" hotkey="Ctrl + R" onclick={() => line.remove()} />
    {/if}
</footer>

<style>
:global(body, button, input, kbd) {
    font-family: Arial, Helvetica, sans-serif;
}
:global(body) {
    display: grid;
    grid-template-rows: auto 40px;
    box-sizing: border-box;
    padding: 20px 40px;
    height: 100vh;
    margin: 0;
    background-color: #f5f5f5;
}
main {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
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
<script lang="ts">
import Line from "./ui/Line.svelte"
import Action from "./ui/Action.svelte"
import { line, mode } from "./store/index.svelte"
import { Mode } from "./store/Mode.svelte"
import press from "./kbd"
$effect(() => document.addEventListener("keyup", e => press(e)))
</script>