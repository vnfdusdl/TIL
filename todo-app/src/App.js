import { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsertNewTodo = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(newTodo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemoveTodo = useCallback(
    (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    [todos],
  );

  const onToggleTodo = useCallback(
    (id) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      );
      setTodos(updatedTodos);
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsertNewTodo} />
      <TodoList todos={todos} onRemove={onRemoveTodo} onToggle={onToggleTodo} />
    </TodoTemplate>
  );
}

export default App;
