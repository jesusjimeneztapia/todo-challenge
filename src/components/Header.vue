<template>
    <header class="header" :class="theme">
        <div class="header-bg">
            <div class="header-bg-mobile">
                <img
                    class="bg-dark"
                    src="../assets/images/bg-mobile-dark.jpg"
                    alt="Background mobile dark"
                />
                <img
                    class="bg-light"
                    src="../assets/images/bg-mobile-light.jpg"
                    alt="Background mobile light"
                />
            </div>
            <div class="header-bg-desktop">
                <img
                    class="bg-dark"
                    src="../assets/images/bg-desktop-dark.jpg"
                    alt="Background desktop dark"
                />
                <img
                    class="bg-light"
                    src="../assets/images/bg-desktop-light.jpg"
                    alt="Background desktop light"
                />
            </div>
        </div>

        <div class="header-content">
            <h1 class="header-content-title">Todo</h1>
            <img
                id="icon-moon"
                src="../assets/images/icon-moon.svg"
                alt="Icon moon"
                @click="setTheme()"
            />
            <img
                id="icon-sun"
                src="../assets/images/icon-sun.svg"
                alt="Icon sun"
                @click="setTheme()"
            />
        </div>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
import store from "../store";

@Options({
    computed: {
        ...mapState(["theme"]),
    },
    methods: {
        async setTheme() {
            await store.dispatch("setTheme");
            localStorage.setItem("theme", store.state.theme);
        },
    },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.header {
    &-bg > * img {
        position: absolute;
        padding: 0px 0px;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;

        animation-name: opacity32-100;
        animation-duration: 1s;
    }

    &-bg {
        &-desktop {
            @media #{$information-mobile} {
                display: none;
            }
        }
        &-mobile {
            @media #{$information-desktop} {
                display: none;
            }
        }
    }
    &-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-title {
            color: $lt-very-light-gray;
            margin: 0px 0px;
            text-transform: uppercase;

            animation-name: center-header;
            animation-duration: 1s;
        }

        &-title {
            @media #{$information-mobile} {
                font-size: 1.6em;
                letter-spacing: 0.3em;
            }
            @media #{$information-desktop} {
                font-size: 2em;
                letter-spacing: 0.56em;
            }
        }

        img {
            animation-name: center-header;
            animation-duration: 1s;
        }
        img:hover {
            cursor: pointer;
        }
    }

    &.dark {
        div > .bg-light {
            display: none;
        }
        div > #icon-moon {
            display: none;
        }
    }
    &.light {
        div > .bg-dark {
            display: none;
        }
        div > #icon-sun {
            display: none;
        }
    }
}
@keyframes opacity32-100 {
    from {
        opacity: 32%;
    }
    to {
        opacity: 100%;
    }
}
@keyframes center-header {
    from {
        margin: 0px -6vw;
    }
}
</style>
