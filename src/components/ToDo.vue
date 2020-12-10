<template>
    <div class="container">
        <create-to-do />
        <to-do-list />
        <Footer />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CreateToDo from "@/components/CreateToDo.vue";
import ToDoList from "@/components/ToDoList.vue";
import Footer from "@/components/Footer.vue";

@Options({
    components: {
        CreateToDo,
        ToDoList,
        Footer,
    },
})
export default class ToDo extends Vue {}
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.container {
    @media #{$information-mobile} {
        padding-top: 1.8em;
    }
    @media #{$information-desktop} {
        padding-top: 2.4em;
    }
}
</style>
