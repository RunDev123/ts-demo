//导出todo接口
export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}
//导出addTodoType接口函数
export interface addTodoType {
  (todo: Todo): void;
}
//导出deleteTodo接口函数
export interface deleteTodo {
  (index: number): void;
}
//导出updateTodos接口函数
export interface updateTodos {
  (index: number, status: boolean): void;
}
//动物行为
export interface AnimalAction<T> {
  run(info: T): void;
  eat(info: T): void;
}
