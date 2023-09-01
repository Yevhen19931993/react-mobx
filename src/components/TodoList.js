import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoStore from '../store/TodoStore';

const TodoList = observer(() => {
  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <ul className="list-group">
        {TodoStore.todos.map((todo) => (
          <>
            <br />
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {todo.text}
              <button
                className="btn btn-danger"
                onClick={() => TodoStore.removeTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
