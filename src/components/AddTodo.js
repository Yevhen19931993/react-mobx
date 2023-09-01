import React, { useState } from 'react';
import TodoStore from '../store/TodoStore';

const AddTodo = () => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      TodoStore.addTodo(text);
      setText('');
    }
  };

  return (
    <div>
      <h2 className="mt-4">Add Task</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
