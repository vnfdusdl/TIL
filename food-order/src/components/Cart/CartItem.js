import classes from './CartItem.module.css';

const CartItem = ({ item, onRemove, onAdd }) => {
  const price = `$${item.price.toFixed(2)}`;

  // props로 받은 함수에 인자를 전달하여 실행하여야 하므로 새로운 함수를 만들어서 onClick 이벤트 핸들러로 달아줌.
  const onRemoveHandler = () => {
    onRemove(item.id);
  };

  const onAddHandler = () => {
    onAdd(item);
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
