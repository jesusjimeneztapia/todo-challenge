<template>
    <div class="todo-list">
        <to-do-box
            check="check1"
            text="Complete online JavaScript course"
            completed
        />
        <to-do-box check="check2" text="Jog around the park 3x" />
        <to-do-box check="check3" text="10 minutes meditation" />
        <to-do-box check="check4" text="Read for 1 hour" />
        <to-do-box check="check5" text="Pick up groceries" />
        <to-do-box check="check6" text="Complete Todo App on Frontend Mentor" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ToDoBox from "@/components/ToDoBox.vue";

@Options({
    components: {
        ToDoBox,
    },
})
export default class ToDoList extends Vue {}
</script>

<style lang="scss" scoped>
.todo-list {
    border-radius: 0.4em 0.4em 0px 0px;
    margin-top: 1em;
    overflow: hidden;
}
</style>
