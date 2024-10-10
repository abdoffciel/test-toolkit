import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'; // Import icons
import ConfirmModal from './ConfirmModal'; // Import your modal component

const MealItem = ({ meal }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem({ ...meal, quantity })); // Pass quantity with meal
    setIsModalOpen(true); 
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="meal-card">
      <img src={meal.image} alt={meal.title} className="meal-image" />
      <div className="meal-details">
        <h3 className="meal-name">{meal.title}</h3>
        <p className="meal-description">{meal.description}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement} className="decrement-btn">
            <AiOutlineMinus />
          </button>
          <span>{quantity}</span>
          <button onClick={handleIncrement} className="increment-btn">
            <AiOutlinePlus />
          </button>
        </div>
        <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
      </div>
      {isModalOpen && (
        <ConfirmModal meal={meal} quantity={quantity} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default MealItem;
