import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './features/mealsSlice';
import cartReducer from './features/cartSlice';

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    cart: cartReducer,
  },
});

export default store;
