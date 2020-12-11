<template>
    <div v-if="input" class="box border-radius" :class="theme">
        <input class="box-check" id="check" type="checkbox" />
        <label class="box-label" for="check" />
        <input class="box-input" placeholder="Create a new todo..." />
    </div>
    <div v-else class="box border-bottom" :class="theme">
        <input
            class="box-check"
            :id="check"
            type="checkbox"
            :checked="completed"
            @change="setItem(item)"
        />
        <div>
            <label class="box-label" :for="check" />
            <p class="box-text">{{ text }}</p>
            <img
                @click="removeToDo(item)"
                src="../assets/images/icon-cross.svg"
                alt="Icon cross"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Item } from "@/models";
import store from "@/store";
import { onMounted, onUpdated } from "vue";
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";

@Options({
    props: {
        input: Boolean,
        check: String,
        completed: Boolean,
        text: String,
        item: Item,
    },
    computed: {
        ...mapState(["theme", "items"]),
    },
    methods: {
        removeToDo(item: Item) {
            store.dispatch("removeItem", item);
        },
        setItem(item: Item) {
            store.dispatch("setItemActive", item);
        },
    },
})
export default class ToDoBox extends Vue {
    input: boolean = false;
    check: string = "";
    completed: boolean = false;
    text: string = "";
    item: Item | null = null;
}
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.box {
    &-label,
    & div > &-label {
        border-radius: 50%;
        border: 1px solid $lt-light-grayish-blue;

        &:hover {
            cursor: pointer;

            @media #{$information-desktop} {
                border: 1px solid $bright-blue;
            }
        }

        @media #{$information-mobile} {
            padding: 0.5em 0.5em;
        }
        @media #{$information-desktop} {
            padding: 0.8em 0.8em;
        }
    }
    &-check {
        display: none;

        &:checked + div > label,
        &:checked + label {
            background-image: url("../assets/images/icon-check.svg"),
                $check-background;
            background-repeat: no-repeat;
            background-position: center center;
            border: 1px solid $bright-blue;

            animation-name: check;
            animation-duration: 0.8s;
        }
    }
    &-input,
    &-text {
        border: none;
        font-weight: 400;
        width: 100%;
        caret-color: $bright-blue;

        &:focus {
            outline: none;
        }

        @media #{$information-mobile} {
            font-size: 0.64em;
            padding: 0px 0.8em;
        }
        @media #{$information-desktop} {
            font-size: 1em;
            padding: 0px 1.4em;
        }
    }

    &.border-bottom > div,
    &.border-radius {
        display: flex;
        align-items: center;

        p {
            margin: 0px 0px;
        }

        &:hover {
            cursor: pointer;
        }

        @media #{$information-desktop} {
            img {
                display: none;
            }

            &:hover > img {
                display: block;

                animation-name: cross;
                animation-duration: 1s;
            }
        }
    }

    &.light {
        background-color: $lt-very-light-gray;

        .box-check {
            &:checked + div > p {
                color: $lt-dark-grayish-blue;
                text-decoration: line-through;
            }
        }

        .box-input,
        .box-text {
            color: $lt-very-dark-grayish-blue;
            background-color: $lt-very-light-gray;
        }
    }
    &.dark {
        background-color: $dt-very-dark-desaturated-blue;

        .box-check {
            &:checked + div > p {
                color: $dt-dark-grayish-blue;
                text-decoration: line-through;
            }
        }

        .box-input,
        .box-text {
            color: $dt-light-grayish-blue;
            background-color: $dt-very-dark-desaturated-blue;
        }
    }

    @media #{$information-mobile} {
        padding: 0.8em 1.2em;
    }
    @media #{$information-desktop} {
        padding: 1em 1.2em;
    }
}

.border-radius {
    border-radius: 0.4em;
}

.border-bottom {
    &.light {
        border-bottom: 1px solid $lt-light-grayish-blue;
    }
    &.dark {
        border-bottom: 1px solid $dt-very-dark-grayish-blue-two;
    }
}

@keyframes check {
    from {
        opacity: 8%;
        transform: rotate(-180deg);
    }
}
@keyframes cross {
    0% {
        color: $bright-blue;
        transform: rotate(16deg);
    }
    30% {
        transform: rotate(-32deg);
    }
    70% {
        transform: rotate(24deg);
    }
    100% {
        transform: rotate(-8deg);
    }
}
</style>
