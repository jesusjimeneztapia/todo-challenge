<template>
    <footer class="footer" :class="theme">
        <div class="footer-body">
            <section class="footer-body-items">
                <!-- Add dynamic number -->
                <h6>{{ getItemsLeft() }} items left</h6>
            </section>
            <div class="footer-body-classification">
                <p :class="isActivated('all')" @click="setLink('all')">All</p>
                <p :class="isActivated('active')" @click="setLink('active')">
                    Active
                </p>
                <p
                    :class="isActivated('completed')"
                    @click="setLink('completed')"
                >
                    Completed
                </p>
            </div>
            <section class="footer-body-clear">
                <h6 @click="clearCompleted()">Clear Completed</h6>
            </section>
        </div>
        <template v-if="showInformation()">
            <p class="footer-information">Drag and drop to reorder list</p>
        </template>
    </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
import store from "@/store";
import { getItems } from "@/utils";

@Options({
    computed: {
        ...mapState(["theme"]),
    },
    methods: {
        isActivated(nameLink: string) {
            if (store.state.link === nameLink) {
                return "active";
            } else {
                return "";
            }
        },
        setLink(nameLink: string) {
            store.dispatch("setLink", nameLink);
        },
        clearCompleted() {
            store.dispatch("clearCompleted");
        },
        getItemsLeft() {
            return getItems("active").length;
        },
        showInformation() {
            return store.state.link === "all";
        },
    },
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.footer {
    color: $lt-dark-grayish-blue;

    h6 {
        font-weight: 400;
    }

    &-body {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        &-items {
            border-radius: 0px 0px 0px 0.4em;
        }
        &-clear {
            border-radius: 0px 0px 0.4em 0px;
            text-align: right;
        }

        &-classification {
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            p {
                &.active {
                    color: $bright-blue;
                }
            }
        }

        @media #{$information-mobile} {
            row-gap: 1em;

            h6 {
                margin: 0px 0px;
                font-size: 0.64em;
            }

            &-items {
                position: relative;
                grid-area: 1 / 1 / 2 / 3;
                padding: 0.8em 0px 0.8em 1.2em;

                &::before {
                    position: absolute;
                    content: "";
                    width: 200%;
                    height: 0.8em;
                    left: 0;
                    border-radius: 0px 0px 0.4em 0.4em;
                    filter: blur(0.6em);
                    top: calc(100% - 0.4em);
                    z-index: -1;
                }
            }
            &-clear {
                grid-area: 1 / 3 / 2 / 5;
                padding: 0.8em 1.2em 0.8em 0px;
            }
            &-classification {
                border-radius: 0.4em;
                grid-area: 2 / 1 / 3 / 5;
                font-weight: 700;
                padding: 0.8em 16vw;

                p {
                    margin: 0px 0px;
                }
            }
        }
        @media #{$information-desktop} {
            h6 {
                margin: 0px 0px;
                font-size: 0.8em;
            }

            &-items {
                position: relative;
                padding-left: 1.2em;

                &::before {
                    content: "";
                    position: absolute;
                    height: 2em;
                    width: 400%;
                    top: calc(100% - 0.4em);
                    left: 0;
                    border-radius: 0px 0px 0.4em 0.4em;
                    filter: blur(1em);
                    z-index: -1;
                }
            }
            &-clear {
                padding-right: 1.2em;

                &:hover {
                    cursor: pointer;
                }
            }
            &-items,
            &-clear {
                letter-spacing: -1px;
            }
            &-classification {
                grid-area: 1 / 2 / 2 / 4;
                font-weight: 700;
                padding: 0px 2vw;

                p {
                    margin: 0px 0px;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
            &-items,
            &-clear,
            &-classification {
                padding-top: 1em;
                padding-bottom: 1em;
            }
        }
    }
    &-information {
        text-align: center;
    }

    &.light {
        .footer-body-items,
        .footer-body-clear,
        .footer-body-classification {
            background: $lt-very-light-gray;
        }

        .footer-body-items {
            &::before {
                background-color: $lt-light-grayish-blue;
            }
        }
    }
    &.dark {
        .footer-body-items,
        .footer-body-clear,
        .footer-body-classification {
            background: $dt-very-dark-desaturated-blue;
        }

        .footer-body-items {
            &::before {
                background-color: $dt-very-dark-blue;
            }
        }
    }

    @media #{$information-mobile} {
        &-body {
            padding-bottom: 4em;

            &-classification {
                font-size: 0.8em;
            }
        }
        &-information,
        &-information {
            margin: 0px 0px;
            padding-bottom: 1em;
        }

        &.light {
            .footer-body-classification {
                box-shadow: 0px 1em 4em $lt-light-grayish-blue,
                    0px 2em 8em $lt-light-grayish-blue,
                    0px 2em 16em $lt-light-grayish-blue;
            }
            .footer-body-clear {
                &:active {
                    color: $lt-very-dark-grayish-blue;
                }
            }
        }
        &.dark {
            .footer-body-classification {
                box-shadow: 0px 1em 4em $dt-very-dark-blue,
                    0px 2em 8em $dt-very-dark-blue,
                    0px 2em 16em $dt-very-dark-blue;
            }
            .footer-body-clear {
                &:active {
                    color: $dt-hover-light-grayish-blue;
                }
            }
        }
    }
    @media #{$information-desktop} {
        &-body {
            padding-bottom: 2em;
            &-classification {
                font-size: 0.9em;
            }
        }
        &-information,
        &-information {
            margin: 0px 0px;
            padding-bottom: 1em;
        }

        &.light {
            .footer-body-clear {
                &:hover {
                    color: $lt-very-dark-grayish-blue;
                }
            }
            .footer-body-classification {
                p {
                    &:hover {
                        color: $lt-very-dark-grayish-blue;
                    }
                }
            }
        }
        &.dark {
            .footer-body-clear {
                &:hover {
                    color: $dt-hover-light-grayish-blue;
                }
            }
            .footer-body-classification {
                p {
                    &:hover {
                        color: $dt-hover-light-grayish-blue;
                    }
                }
            }
        }
    }
}
</style>
