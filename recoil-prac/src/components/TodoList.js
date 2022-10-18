import { atom, useRecoilValue } from 'recoil';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import { filteredTodoListState } from '../atoms/todoListFilterState';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilter';

export const todoListState = atom({
  key: 'todoListState', //고유한 키
  default: [], //초기값
});

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState); //useRecoilVaule는 atom의 값을 읽어올 수 있다.
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
