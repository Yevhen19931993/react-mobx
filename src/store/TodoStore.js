import { makeAutoObservable } from 'mobx';

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (text) => {
    this.todos.push({ text, id: Date.now() });
  };

  removeTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

const store = new TodoStore();
export default store;
