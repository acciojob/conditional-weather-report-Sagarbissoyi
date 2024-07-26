// src/UseMemo.js
import React, { useMemo } from 'react';

const ExpensiveCalculation = ({ count }) => {
  const calculate = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const result = useMemo(() => calculate(count), [count]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{result}</p>
    </div>
  );
};

const UseMemoComponent = ({ todos, addTodo, count, incrementCount }) => {
  return (
    <div>
      <h2>My todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>+</button>
      </div>
      <ExpensiveCalculation count={count} />
    </div>
  );
};

export default UseMemoComponent;
