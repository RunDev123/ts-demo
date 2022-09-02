<template>
  <footer class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span>
      <span>已选择任务 {{ getAllCompletedNum }}</span> / 全部任务
      {{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearAllCompletedTodos">
      清除已选择任务
    </button>
  </footer>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { updateTodos, Todo } from "@/interface";

@Component
export default class TodoFooter extends Vue {
  @Prop({ required: true }) private todos!: [];
  @Prop({ required: true }) private updateTodos!: updateTodos;
  @Prop({ required: true }) private clearAllCompletedTodos!: any;

  //获取所有选中的列表项
  get getAllCompletedNum(): number {
    return this.todos.reduce(
      (total, currentValue) => total + (currentValue.isCompleted ? 1 : 0),
      0
    );
  }
  //是否全选中
  get isCheckAll(): boolean {
    return (
      this.getAllCompletedNum > 0 &&
      this.getAllCompletedNum === this.todos.length
    );
  }
  //全选/取消全选
  set isCheckAll(status) {
    this.todos.forEach((item: Todo, index: number) => {
      item.isCompleted !== status && this.updateTodos(index, status);
    });
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
  cursor: pointer;
}
</style>
