<template>
  <div>
    <div class="space">
      <label>
        <input type="checkbox" v-model="isCompleted" />
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDeleteTodo">删除</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { Todo, deleteTodo, updateTodos } from "@/interface";

@Component
export default class TodoItem extends Vue {
  @Prop({ required: true }) private todo!: Todo;
  @Prop({ required: true }) private deleteTodo!: deleteTodo;
  @Prop({ required: true }) private updateTodo!: updateTodos;
  @Prop({ required: true }) private index!: number;

  //是否选中
  get isCompleted(): boolean {
    return this.todo.isCompleted;
  }
  //更新选中状态
  set isCompleted(status) {
    this.updateTodo(this.index, status);
  }

  //删除todo列表项
  handleDeleteTodo(): void {
    this.deleteTodo(this.index);
  }
}
</script>

<style scoped>
/*item*/
.space {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

.space label {
  float: left;
  cursor: pointer;
}

.space label .space input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

.space button {
  float: right;
  /* display: none; */
  margin-top: 3px;
  cursor: pointer;
}

.space:before {
  content: initial;
}

.space:last-child {
  border-bottom: none;
}
</style>
