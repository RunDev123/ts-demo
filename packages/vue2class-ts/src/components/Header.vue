<template>
  <header class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="submit"
    />
  </header>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { addTodoType } from "@/interface";

@Component
export default class TodoHeader extends Vue {
  title = "";
  @Prop({ required: true }) private addTodo!: addTodoType;

  //添加todo列表项
  submit() {
    this.addTodo({
      id: Date.now(),
      title: this.title,
      isCompleted: false,
    });
    this.title = "";
  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
