<article>
    {#each document.list.items as line}
         <Line
            line={line} isEdit={mode.isEdit}
            onfocus={() => mode.change(Mode.Edit)}
            onblur={() => mode.change(Mode.Select)}
        />
    {/each}
</article>


<style>
article {
    width: 100%;
    background-color: yellow;
    box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, .132), 0 0.3px 0.9px 0 rgba(0, 0, 0, .108);
}
</style>
<script lang="ts">
import type { SelectableListStore } from "../store/SelectableList.svelte"
interface DocumentProps {
    document: SelectableListStore<SelectableListStore<string>>
    isEdit: boolean
    onfocus(): void
    onblur(): void
}
const {document, isEdit, onfocus, onblur}: DocumentProps = $props()
import Line from "./Line.svelte"
import { Mode } from "../store/Mode.svelte"
import { mode } from "../store/index.svelte"
</script>