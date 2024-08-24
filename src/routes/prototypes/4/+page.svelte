<button onclick={() => app.mode.toggle()}>mode.toggle</button>
<br><br>
<button onclick={() => app.selected_document.create()}>selected_document.append</button>
<button onclick={() => app.selected_document.leaf("next")}>selected_line.leaf</button>
<br><br>
<button onclick={() => app.selected_line.duplicate()}>selected_line.duplicate</button>
<button onclick={() => app.selected_line.leaf("next")}>selected_line.leaf</button>
<hr>
<article>
    {#each app.selected_document.items as line}
        <Line
            line={line} isEdit={app.mode.isEdit}
            onfocus={() => app.mode.change(Mode.Edit)}
            onblur={() => app.mode.change(Mode.Select)}
            isCurrent={app.selected_document.selected_item == line}
        />
    {/each}
</article>
<hr>


<pre>{JSON.stringify(app.mode.mode, null, 4)}</pre>
<pre>{JSON.stringify(app.selected_document.selected_item, null, 4)}</pre>
<pre>{JSON.stringify(app.selected_document.selected_item.selected_item_index, null, 4)}</pre>
<pre>{JSON.stringify(app.selected_document.selected_item.items, null, 4)}</pre>

<style>
:global(body) {
    background-color: #f5f5f5;
}
</style>

<script>
import { app } from "./store/index.svelte"
import { Mode } from "./store/Mode.svelte"
import Line from "./ui/Line.svelte"
import press from "./kbd"
$effect(() => document.addEventListener("keyup", e => press(e)))
</script>