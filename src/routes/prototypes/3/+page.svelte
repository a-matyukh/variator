<article>
    <h2>Variator: Snapshots</h2>
    {#each app.selected_document.items as snapshot, i}
        <Action is_selected={app.selected_document.selected_item_index === i} name="Snapshot {i + 1}" hotkey="Ctrl + Alt + {i + 1}" onclick={() => app.selected_document.select(i)} />
    {/each}
    <br><br>
    {#each app.selected_snapshot.items as line, i}
        <Line
            index={i+1}
            line={line} isEdit={app.mode.isEdit}
            onfocus={() => app.mode.change(Mode.Edit)}
            onblur={() => app.mode.change(Mode.Select)}
            isCurrent={app.selected_snapshot.selected_item_index == i}
        />
    {/each}
</article>   

<style>
:global(body) {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
article {
    padding: 0 25px 20px 10px;
}
h2 {
    font-weight: normal;
    color: #3B4764;
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