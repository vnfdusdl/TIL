import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cartContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  //cartCtx.items로 접근하면, 의존성 배열에 cartCtx를 추가해야하고, 그렇게 되면 cartCtx가 변화할 때마다 실행된다.
  //이건 우리가 원하는 것이 아니기 때문에 구조분해할당을 통해서 items만을 꺼내와, itmes가 변할 때만 useEffect가 실행되도록 한다.
  const { items } = cartCtx;
  // bump 클래스를 생겼다 사라지게 하는 함수를 useEffect로 실행
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      // 여러 항목을 빠르게 추가하면 이전 타이머는 지우고 새 타이머를 설정해야하므로 clearTimeout 해주어야한다. 
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
