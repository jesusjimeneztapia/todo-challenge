export interface InterfaceItem {
    id: string;
    text: string;
    active: boolean;
}

export class Item {
    active: boolean;
    constructor(readonly id: string, readonly text: string, active: boolean) {
        this.active = active;
    }

    setActive() {
        this.active = !this.active;
    }
}
