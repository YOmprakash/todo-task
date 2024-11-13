import React, { useState } from 'react';
import './Todos.css';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const [todosList, setTodoList] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (todo === '') {
      return alert('Enter a todo');
    }
    const newTodo = {
      id: Date.now(),
      todo:todo}
    
    setTodoList([...todosList, newTodo]);
    setTodo('');
  };

  const deleteTodo = (id) => {
    const updatedList = todosList.filter((todo) => todo.id !== id);
    setTodoList(updatedList);
  };

  return (
    <div className="todo-container">
      <h1>Todo Task</h1>
      <form onSubmit={onSubmitForm}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add Your Task"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.todo}
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
