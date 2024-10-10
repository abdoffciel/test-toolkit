import MealList from '../components/MealList';
import FilterBar from '../components/FilterBar';


const Home = () => {
  return (
    <div className="container">
      <div className="filter-bar">
        <FilterBar />
      </div>
      <div className="meal-list">
        <MealList />
      </div>
    </div>
  );
};

export default Home;
