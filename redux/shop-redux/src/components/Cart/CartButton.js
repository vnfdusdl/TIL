import { useDispatch} from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui';
import { Fragment } from 'react';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
      <button className={classes.button} onClick={onClickHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>1</span>
      </button>
  );
};

export default CartButton;
