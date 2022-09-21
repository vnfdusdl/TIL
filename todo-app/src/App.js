import { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
};

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsertNewTodo = useCallback((text) => {
    const newTodo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(newTodo));
    nextId.current += 1;
  }, []);

  const onRemoveTodo = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggleTodo = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsertNewTodo} />
      <TodoList todos={todos} onRemove={onRemoveTodo} onToggle={onToggleTodo} />
    </TodoTemplate>
  );
}

export default App;
