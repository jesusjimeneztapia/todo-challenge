<template>
    <CreateToDo />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CreateToDo from "@/components/CreateToDo.vue";

@Options({
    components: {
        CreateToDo,
    },
})
export default class ToDo extends Vue {}
</script>
