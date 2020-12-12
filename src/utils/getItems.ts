import { Item } from "@/models";
import store from "@/store";

const getItems = (classification: string) => {
    let items;
    switch (classification) {
        case "all":
            items = store.state.items;
            break;
        case "active":
            items = store.state.items.filter((i) => {
                if (i instanceof Item) {
                    const item = i as Item;
                    return item.active;
                }
                return false;
            });
            break;
        default:
            items = store.state.items.filter((i) => {
                if (i instanceof Item) {
                    const item = i as Item;
                    return !item.active;
                }
                return false;
            });
            break;
    }
    return items;
};

export default getItems;
