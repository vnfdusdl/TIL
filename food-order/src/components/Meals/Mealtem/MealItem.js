import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cartContext';

const MealItem = ({ meal }) => {
  const fixedPrice = `$${meal.price.toFixed(2)}`;

  // 아이템을 추가하는 로직은 context로 만들어놨기 때문에 => useContext 사용
  const cartCtx =  useContext(CartContext)
  
  // 장바구니에 아이템을 추가하는 함수를 이 레벨에서 정의하는 이유는, item 에 관련한 정보는 여기에 다 가지고 있고, 수량만 하위 컴포넌트에서 설정하는 것이기 때문에, 
  // 함수를 props로 전달하고, 수량을 인자로 받는다. 
  const addItemHandler = amount => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,

    })
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{fixedPrice}</div>
      </div>
      <div><MealItemForm id={meal.id} onAddToCart={addItemHandler}></MealItemForm></div>
    </li>
  );
};

export default MealItem;
