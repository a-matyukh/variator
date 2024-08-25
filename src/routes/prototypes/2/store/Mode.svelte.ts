export enum Mode {
    Select = "select",
    Edit = "edit"
}

export default class ModeStore {

    mode: Mode = $state(Mode.Select) // private

    change(mode: Mode) {
        this.mode = mode
    }
    toggle() {
        this.mode = this.isSelect ? Mode.Edit : Mode.Select
    }
    get isEdit() {
        return this.mode === Mode.Edit
    }
    get isSelect() {
        return this.mode === Mode.Select
    }
}