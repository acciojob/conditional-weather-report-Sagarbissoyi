// src/App.js
import React, { useState } from 'react';
import UseMemoComponent from './UseMemo';
import ReactMemoComponent from './ReactMemo';

function App() {
  const [todos, setTodos] = useState(['New todo']);
  const [count, setCount] = useState(0);
  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const addCustomTask = () => {
    if (newTask.length > 5) {
      setTodos([...todos, newTask]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>React.useMemo</h1>
      <UseMemoComponent todos={todos} addTodo={addTodo} count={count} incrementCount={incrementCount} />
      <h1>React.memo</h1>
      <ReactMemoComponent newTask={newTask} handleTaskChange={handleTaskChange} addCustomTask={addCustomTask} todos={todos} />
    </div>
  );
}

export default App;
