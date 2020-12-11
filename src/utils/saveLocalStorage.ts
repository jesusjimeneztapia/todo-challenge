import { Item } from "../models";

const saveLocalStorage = (list: Item[] | typeof Item[]) => {
    const items = JSON.stringify(list);
    if (items) {
        localStorage.setItem("items", items);
    }
};

export default saveLocalStorage;
