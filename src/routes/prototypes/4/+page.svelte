<article>
    {#each app.selected_document.items as line, i}
        <Line
            index={i+1}
            line={line} isEdit={app.mode.isEdit}
            onfocus={() => app.mode.change(Mode.Edit)}
            onblur={() => app.mode.change(Mode.Select)}
            isCurrent={app.selected_document.selected_item == line}
        />
    {/each}
</article>
<aside>
    <p>
        <Action name="{app.mode.isEdit ? "Select" : "Edit"} mode" hotkey={app.mode.isEdit ? 'Escape' : 'Enter'} onclick={() => app.mode.toggle()} />
        <br><br>
        <Action name="Add line" hotkey="Ctrl + N" onclick={() => app.selected_document.create()} />
        <Action name="Duplicate line variant" hotkey="Ctrl + D" onclick={() => app.selected_line.duplicate()} />
        <Action name="Leaf previous" hotkey="Arrow Left" onclick={() => app.selected_line.leaf("previous")} />
        <Action name="Leaf next" hotkey="Arrow Right" onclick={() => app.selected_line.leaf("next")} />
        <br><br>
        <Action name="Remove variant" hotkey="Ctrl + R" onclick={() => app.selected_line.remove()} />
    </p>
    <pre>Selected line:</pre>
    <pre>id: {JSON.stringify(app.selected_line.id, null, 4)}</pre>
    <pre>selected_item_index: {JSON.stringify(app.selected_line.selected_item_index, null, 4)}</pre>
    <pre>items:</pre>
    <pre>{JSON.stringify(app.selected_document.selected_item.items, null, 4)}</pre>
</aside>    

<style>
:global(body) {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
article {
    padding: 20px 25px 20px 10px;
}
pre {
    opacity: .5;
}
</style>
<script>
import { app } from "./store/index.svelte"
import { Mode } from "./store/Mode.svelte"
import Line from "./ui/Line.svelte"
import Action from "./ui/Action.svelte"
import press from "./kbd"
$effect(() => document.addEventListener("keyup", e => press(e)))
</script>