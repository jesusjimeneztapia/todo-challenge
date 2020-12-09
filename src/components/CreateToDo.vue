<template>
    <to-do-box input />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ToDoBox from "@/components/ToDoBox.vue";

@Options({
    components: {
        ToDoBox,
    },
})
export default class CreateToDo extends Vue {}
</script>
