import { makeAutoObservable } from 'mobx';

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchTodos();
  }

  fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3001/todos');
      const data = await response.json();
      this.todos = data;
    } catch (error) {
      console.error('Ошибка при загрузке задач:', error);
    }
  };

  addTodo = async (text) => {
    try {
      const response = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const newTodo = await response.json();
        this.todos.push(newTodo);
      }
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    }
  };

  removeTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      }
    } catch (error) {
      console.error('Ошибка при удалении задачи:', error);
    }
  };
}

const store = new TodoStore();
export default store;
