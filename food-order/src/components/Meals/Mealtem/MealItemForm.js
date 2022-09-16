import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({ id }) => {
  const submitHandler = (event) => {
    // 브라우저가 기본적으로 페이지를 다시 로드하는 걸 막는다
    event.preventDefault();

  };

  return (
    <form className={classes.form} onSubmit={submitHandler} >
      <Input
        
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
