// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to hold cart items
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity; // Increment quantity
      } else {
        // If the item does not exist, add it with the specified quantity
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },
    removeItem: (state, action) => {
      // Remove item by id
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      // Clear all items in the cart
      state.items = [];
    },
  },
});

// Exporting actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Exporting the reducer
export default cartSlice.reducer;
