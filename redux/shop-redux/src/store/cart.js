import { createSlice } from '@reduxjs/toolkit';

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
      }
      itemExisting.quantity--;
      itemExisting.totalPrice = itemExisting.totalPrice - itemExisting.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
