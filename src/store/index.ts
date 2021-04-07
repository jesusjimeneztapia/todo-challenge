import { getItems, saveLocalStorage } from "@/utils";
import { createStore } from "vuex";
import { Item } from "../models";

export default createStore({
    state: {
        theme: "light",
        link: "all",
        items: [Item],
    },
    mutations: {
        setTheme(state) {
            if (state.theme === "light") {
                state.theme = "dark";
            } else {
                state.theme = "light";
            }
        },
        setLink(state, link) {
            state.link = link;
        },
        setItems(state, items) {
            state.items = items;
        },
        setItemActive(state, item) {
            let i = state.items.find((it) => it === item);
            if (i instanceof Item) {
                let listItem = i as Item;
                listItem.setActive();
                saveLocalStorage(state.items);
            }
        },
        removeItem(state, item) {
            const index: number = state.items.indexOf(item);
            if (index !== -1) {
                state.items.splice(index, 1);
                saveLocalStorage(state.items);
            }
        },
        clearCompleted(state) {
            state.items = getItems("active");
            saveLocalStorage(state.items);
        },
        addItem(state, item) {
            state.items.push(item);
            saveLocalStorage(state.items);
        },
        updateItems(state, items) {
            state.items = items;
            saveLocalStorage(state.items);
        },
    },
    actions: {
        setTheme(context) {
            context.commit("setTheme");
        },
        setLink(context, link) {
            context.commit("setLink", link);
        },
        setItems(context, items) {
            context.commit("setItems", items);
        },
        setItemActive(context, item) {
            context.commit("setItemActive", item);
        },
        removeItem(context, item) {
            context.commit("removeItem", item);
        },
        clearCompleted(context) {
            context.commit("clearCompleted");
        },
        addItem(context, item) {
            context.commit("addItem", item);
        },
        updateItems(context, items) {
            context.commit("updateItems", items);
        },
    },
    modules: {},
});
