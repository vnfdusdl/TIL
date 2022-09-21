import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState('');
  const onChangeInputHandler = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(inputValue);
      setInputValue('');
    },
    [onInsert, inputValue],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmitHandler}>
      <input
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={onChangeInputHandler}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
