import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { useCallback } from 'react';

const TodosContainer = () => {
  const input = useSelector((state) => state.todos.input);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onChangeInput = () => {
    dispatch(changeInput());
  };
  const onInsert = () => {
    dispatch(insert());
  };
  const onToggle = () => {
    dispatch(toggle());
  };
  const onRemove = () => {
    dispatch(remove());
  };

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;
