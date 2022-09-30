import { createSlice } from '@reduxjs/toolkit';

import { uiActions } from './ui';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const itemExisting = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!itemExisting) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        itemExisting.quantity++;
        itemExisting.totalPrice = itemExisting.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const itemExisting = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (itemExisting.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        itemExisting.quantity--;
        itemExisting.totalPrice = itemExisting.totalPrice - itemExisting.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  //thunk return 에는 async 함수를 사용할 수 있다 
  //dispatch 인자는 자동적으로 들어옴
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending..',
        title: 'sending..',
        message: 'sending cart data',
      })
    );
    // req 요청
    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-study-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('sending cart data failed!');
      }
    };

    try {
      // 요청이 끝나기를 기다려야하니 await
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'success!',
          message: 'sending cart data successfully',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed',
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
