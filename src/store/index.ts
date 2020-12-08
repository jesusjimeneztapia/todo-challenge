import { createStore } from "vuex";

export default createStore({
    state: {
        theme: "light",
    },
    mutations: {
        setTheme(state) {
            if (state.theme === "light") {
                state.theme = "dark";
            } else {
                state.theme = "light";
            }
        },
    },
    actions: {
        setTheme(context) {
            context.commit("setTheme");
        },
    },
    modules: {},
});
