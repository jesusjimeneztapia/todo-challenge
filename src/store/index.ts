import { createStore } from "vuex";

export default createStore({
    state: {
        theme: "light",
        link: "all",
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
    },
    actions: {
        setTheme(context) {
            context.commit("setTheme");
        },
        setLink(context, link) {
            context.commit("setLink", link);
        },
    },
    modules: {},
});
