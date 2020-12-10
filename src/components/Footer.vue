<template>
    <footer class="footer">
        <div class="footer-body">
            <section class="footer-body-items">
                <!-- Add dynamic number -->
                <h6>5 items left</h6>
            </section>
            <div class="footer-body-classification">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            <section class="footer-body-clear">
                <h6>Clear Completed</h6>
            </section>
        </div>
        <p class="footer-information">Drag and drop to reorder list</p>
    </footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
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

        &-items,
        &-clear,
        &-classification {
            background: $lt-very-light-gray;
        }

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
                    background-color: $lt-light-grayish-blue;
                    border-radius: 0px 0px 0px 0.4em;
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

                box-shadow: 0px 1em 4em $lt-light-grayish-blue,
                    0px 2em 8em $lt-light-grayish-blue,
                    0px 2em 16em $lt-light-grayish-blue;

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
                    background-color: $lt-light-grayish-blue;
                    border-radius: 0px 0px 0.4em 0.4em;
                    filter: blur(1em);
                    z-index: -1;
                }
            }
            &-clear {
                padding-right: 1.2em;

                &:hover {
                    color: $lt-very-dark-grayish-blue;
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
                        color: $lt-very-dark-grayish-blue;
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

    @media #{$information-mobile} {
        &-information,
        &-body-classification {
            font-size: 0.8em;
        }

        &-information {
            margin: 0px 0px;
            padding-top: 4em;
            padding-bottom: 1em;
        }
    }
    @media #{$information-desktop} {
        &-information,
        &-body-classification {
            font-size: 0.9em;
        }

        &-information {
            margin: 0px 0px;
            padding-top: 2em;
            padding-bottom: 1em;
        }
    }
}
</style>
