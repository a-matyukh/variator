<button class:selected={is_selected} {onclick}>
    <span>{name}</span> <kbd>{hotkey}</kbd></button>

<style>
button {
    padding: 7px 12px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    outline: 1px solid #ddd;
    font-size: 13px;
    margin-right: 10px;
}
button:hover {
    background-color: #fff;
    cursor: pointer;
}
kbd {
    margin-left: 5px;
    opacity: .4;
}
.selected {
    outline: 1px solid blue;
    color: blue;
}
</style>
<script lang="ts">
interface ActionProps {
    name: string
    hotkey: string
    onclick(): void
    is_selected?: boolean
}
const {name, hotkey, onclick, is_selected}: ActionProps = $props()
</script>