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
    </form>
  );
};

export default MealItemForm;
