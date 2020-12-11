<template>
    <div class="todo-list" :class="getClass()">
        <to-do-box
            v-for="item in items"
            :key="item.id"
            :check="item.id"
            :text="item.text"
            :completed="!item.active"
            :item="item"
        />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
import ToDoBox from "@/components/ToDoBox.vue";
import store from "@/store";

@Options({
    components: {
        ToDoBox,
    },
    computed: {
        ...mapState(["items"]),
    },
    methods: {
        getClass() {
            if (store.state.items.length === 0) {
                return "empty " + store.state.theme;
            }
        },
    },
})
export default class ToDoList extends Vue {}
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.todo-list {
    border-radius: 0.4em 0.4em 0px 0px;
    margin-top: 1em;
    overflow: hidden;

    &.empty {
        position: relative;
        height: 3em;

        &::after {
            content: "No items exist";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        &.light {
            background-color: $lt-very-light-gray;
            border-bottom: 1px solid $lt-light-grayish-blue;

            &::after {
                color: $lt-dark-grayish-blue;
            }
        }
        &.dark {
            background-color: $dt-very-dark-desaturated-blue;
            border-bottom: 1px solid $dt-very-dark-grayish-blue-two;

            &::after {
                color: $dt-dark-grayish-blue;
            }
        }

        @media #{$information-mobile} {
            &::after {
                font-size: 0.64em;
            }
        }
        @media #{$information-desktop} {
            &::after {
                font-size: 1em;
            }
        }
    }
}
</style>
