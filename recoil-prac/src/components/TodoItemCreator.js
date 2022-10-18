import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import todoListState from '../atoms/todoListState';

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState); //atom의 값을 변경하기 위한 변경함수는 useSetRecoilState로 불러온다

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    //불변성 지키기
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
  };
  return (
    <div>
      <input type='text' value={inputValue} onChange={onChangeInput}></input>
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// 고유한 id를 생성하기 위한 유틸리티 
let id = 0;
const getId = () => {
  return id++;
};

export default TodoItemCreator