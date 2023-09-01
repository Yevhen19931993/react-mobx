import TodoList from './components/TodoList';
import './App.css';
import AddTodo from './components/AddTodo.js';

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }} className="mt-4">
        Todo App
      </h1>
      <div
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        className="row mt-4"
      >
        <div className="col-md-6">
          <AddTodo />
        </div>
        <div className="row-md-6">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
