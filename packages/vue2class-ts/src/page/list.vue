<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List
        :todos="todos"
        :deleteTodo="deleteTodo"
        :updateTodos="updateTodos"
      />
      <Footer
        :todos="todos"
        :updateTodos="updateTodos"
        :clearAllCompletedTodos="clearAllCompletedTodos"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import List from "@/components/List.vue";
import Footer from "@/components/Footer.vue";
import { Todo } from "@/interface";

@Component({
  components: { Header, List, Footer },
})
export default class list extends Vue {
  public todos: Todo[] = [];
  //添加todo列表项
  addTodo(todo: Todo): void {
    this.todos.unshift(todo);
  }
  //删除todo列表项
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
  //更新todos是否选中
  updateTodos(index: number, status: boolean) {
    this.todos[index].isCompleted = status;
  }
  //清除所有已选择的列表
  clearAllCompletedTodos() {
    this.todos = this.todos.filter((item) => !item.isCompleted);
  }
}
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
