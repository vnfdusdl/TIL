// 이 컴포넌트는 CartContext 데이터를 관리하고 이 컨텍스트를 다른 컴포넌트에게 제공하는 것.
import { useReducer } from 'react';

import CartContext from './cartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // 추가하려는 아이템이 이미 존재한다면 index를 반환
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    // 추가하려는 아이템과 같은 아이템
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    // 아이템이 존재한다면,
    if (existingCartItem) {
      //그 아이템이 업데이트 될 것. 기존의 상태에서, amount만 추가
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //새로 업데이트 되는 아이템 리스트의 복사본
      updatedItems = [...state.items];
      //추가하는 아이템만 바꿔줌
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //존재하지 않는 경우라면 단순하게 리스트에 추가해주기만 하면 됨
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
