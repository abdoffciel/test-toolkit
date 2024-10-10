
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = () => {
  const meals = useSelector(state => state.meals.filteredMeals);
  
  return (
    <div className="meal-list">
      {meals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default MealList;
