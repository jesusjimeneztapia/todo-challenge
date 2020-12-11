export default class Item {
    active: boolean;
    constructor(readonly id: string, readonly text: string, active: boolean) {
        this.active = active;
    }

    setActive() {
        this.active = !this.active;
    }
}
