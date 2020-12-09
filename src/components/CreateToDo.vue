<template>
    <ToDoBox input />
    <div class="test"></div>
    <ToDoBox
        check="check1"
        text="Complete online JavaScript course"
        completed
    />
    <ToDoBox check="check2" text="Jog around the park 3x" />
    <ToDoBox check="check3" text="10 minutes meditation" />
    <ToDoBox check="check4" text="Read for 1 hour" />
    <ToDoBox check="check5" text="Pick up groceries" />
    <ToDoBox check="check6" text="Complete Todo App on Frontend Mentor" />
    <!--div class="box">
        <input id="check" type="checkbox" />
        <label class="box-check" for="check"></label>
        <input class="box-input" placeholder="Create a new todo..." />
    </div-->
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
