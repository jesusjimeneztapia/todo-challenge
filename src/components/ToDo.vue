<template>
    <div class="container">
        <create-to-do />
        <to-do-list />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CreateToDo from "@/components/CreateToDo.vue";
import ToDoList from "@/components/ToDoList.vue";

@Options({
    components: {
        CreateToDo,
        ToDoList,
    },
})
export default class ToDo extends Vue {}
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.container {
    @media #{$information-mobile} {
        padding: 1.8em 0px;
    }
    @media #{$information-desktop} {
        padding: 2.4em 0px;
    }
}
</style>
