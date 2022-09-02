<template>
  <section class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :todo="todo"
      :index="index"
      :key="todo.id"
      :deleteTodo="deleteTodo"
      :updateTodo="updateTodos"
    />
  </section>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Item from "./Item.vue";
import { Todo, deleteTodo, updateTodos } from "./../interface";

@Component({
  components: {
    Item,
  },
})
export default class TodoList extends Vue {
  @Prop({ required: true }) private todos!: Todo[];
  @Prop({ required: true }) private deleteTodo!: deleteTodo;
  @Prop({ required: true }) private updateTodos!: updateTodos;
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-top: 10px;
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 5px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
