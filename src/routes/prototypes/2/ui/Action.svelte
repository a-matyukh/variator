<button {onclick}>{name} <kbd>{hotkey}</kbd></button>

<style>
button {
    padding: 7px 12px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    outline: 1px solid #ddd;
    font-size: 13px;
}
kbd {
    margin-left: 5px;
    opacity: .4;
}
</style>
<script lang="ts">
interface ActionProps {
    name: string
    hotkey: string
    onclick(): void
}
const {name, hotkey, onclick}: ActionProps = $props()
</script>