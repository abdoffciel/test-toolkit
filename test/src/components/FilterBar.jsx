
import { useDispatch } from 'react-redux';
import { filterMeals } from '../features/mealsSlice';
import { AiOutlineSearch } from 'react-icons/ai'; // Import search icon


const FilterBar = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(filterMeals(event.target.value));
  };

  return (
    <div className="filter-bar">
      <AiOutlineSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search for meals..."
        onChange={handleFilterChange}
        className="search-bar"
      />
    </div>
  );
};

export default FilterBar;
