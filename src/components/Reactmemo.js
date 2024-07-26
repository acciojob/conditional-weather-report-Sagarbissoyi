// src/ReactMemo.js
import React from 'react';

const ReactMemoComponent = React.memo(({ newTask, handleTaskChange, addCustomTask, todos }) => {
  return (
    <div>
      <input type="text" value={newTask} onChange={handleTaskChange} />
      <button onClick={addCustomTask}>Add Skill</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemoComponent;
