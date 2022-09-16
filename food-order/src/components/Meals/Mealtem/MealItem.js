import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cartContext';

const MealItem = ({ meal }) => {
  const fixedPrice = `$${meal.price.toFixed(2)}`;

  // 아이템을 추가... => context 사용
  const cartCtx =  useContext(CartContext)
  
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
