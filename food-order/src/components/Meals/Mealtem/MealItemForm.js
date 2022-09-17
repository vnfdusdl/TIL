import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddToCart }) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    // 브라우저가 기본적으로 페이지를 다시 로드하는 걸 막는다
    event.preventDefault();

    const enteredItemAmount = parseInt(amountInputRef.current.value);

    if (enteredItemAmount === 0 || enteredItemAmount < 1 || enteredItemAmount > 5) {
      setFormIsValid(false);
      return;
    }

    // 장바구니에 추가할 때, 수량 외에도 item에 관련한 정보들이 필요하기 때문에 함수를 여기서 만들지 않고, item  정보를 가지고 있는 상위 컴포넌트에서 만든 후에 전달하고, 
    // 수량만을 인자로 받아 함수를 실행!! 시키기!!!
    onAddToCart(enteredItemAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount' + id,
          type: 'number',
          min: '1',
          max: '20',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {/* {!formIsValid && <p>수량을 올바르게 입력하세요. (1~5개) </p>} */}
    </form>
  );
};

export default MealItemForm;
