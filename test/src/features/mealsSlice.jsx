import { createSlice } from '@reduxjs/toolkit';
import data from '../../public/food.json';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    mealsList: data,
    filteredMeals: data,
  },
  reducers: {
    filterMeals: (state, action) => {
      state.filteredMeals = state.mealsList.filter(meal => 
        meal.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { filterMeals } = mealsSlice.actions;
export default mealsSlice.reducer;
