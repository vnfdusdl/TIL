import {useRecoilState} from 'recoil'
import todoListState from '../atoms/todoListState';

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState); //atom을 조회하고 변경하기 위해서 useRecoilState를 사용한다.
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText}></input>
      <input type='checkbox' checked={item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

export default TodoItem;

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
